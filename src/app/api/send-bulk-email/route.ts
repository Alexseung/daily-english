// app/api/send-bulk-email/route.ts
import { Resend } from "resend";
import { adminDb } from "@/lib/firebase-admin";
import { collection, getDocs } from "firebase/firestore";

import { contents } from "@/english-expression/daily-expression";
import Announcement from "@/emails/Announcement";
import React from "react";

/* -----------------------------
    KST 날짜 유틸 (정상 동작)
----------------------------- */

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const KST_OFFSET = 9 * 60 * 60 * 1000;

// UTC → KST Date 객체
function toKstDate(date: Date): Date {
  return new Date(date.getTime() + KST_OFFSET);
}

// KST 기준 YYYY-MM-DD 문자열
function getKstDateKey(date: Date): string {
  return toKstDate(date).toISOString().slice(0, 10);
}

// KST 기준 평일 여부
function isKstBusinessDay(date: Date): boolean {
  const day = toKstDate(date).getDay(); // 0=일, 6=토
  return day >= 1 && day <= 5;
}

// 가입 다음날부터 KST 기준 평일 카운트
function getBusinessDayIndex(createdAt: Date, today: Date): number {
  const start = new Date(getKstDateKey(createdAt));
  const end = new Date(getKstDateKey(today));

  let index = -1;

  for (
    let d = new Date(start.getTime() + MS_PER_DAY);
    d <= end;
    d = new Date(d.getTime() + MS_PER_DAY)
  ) {
    const weekday = d.getDay();
    if (weekday >= 1 && weekday <= 5) index++;
  }

  return index;
}

/* -----------------------------
    이메일 발송 메인 로직
----------------------------- */

export async function GET() {
  console.log("📨 Bulk email send started");

  const today = new Date();

  // 🚫 주말 발송 금지 (KST 기준)
  if (!isKstBusinessDay(today)) {
    console.log("⏩ 오늘은 KST 기준 주말, 발송 스킵");
    return Response.json({ skipped: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY!);

  const snapshot = await adminDb.collection("emails").get();

  const users = snapshot.docs.map((doc) => ({
    email: doc.data().email,
    created_at: doc.data().createdAt?.toDate(),
  }));

  try {
    const results = await Promise.all(
      users.map(async (user) => {
        if (!user.email || !user.created_at) return null;

        const createdDate = new Date(user.created_at);
        const dayIndex = getBusinessDayIndex(createdDate, today);

        if (dayIndex < 0) {
          console.log(`⏩ ${user.email} 아직 발송 차례 아님`);
          return null;
        }

        if (dayIndex >= contents.length) {
          console.log(`⏩ ${user.email} 모든 콘텐츠 수신 완료`);
          return null;
        }

        const item = contents[dayIndex];

        console.log(
          `📤 Sending to ${user.email} → Day ${dayIndex + 1}: ${item.content}`
        );

        return resend.emails.send({
          from: "dailyenglish@stepinenglish.co.kr",
          to: user.email,
          subject: `Day ${dayIndex + 1}: ${item.content}`,
          react: React.createElement(Announcement, {
            item: {
              id: item.id,
              content: item.content,
              meaning: item.meaning,
              meaningInKorean: item.meaningInKorean,
              literalTranslation: item.literalTranslation,
              sentences: item.sentences,
            },
          }),
        });
      })
    );

    console.log("🎉 이메일 전송 완료!");

    return Response.json({
      success: true,
      sent: results.filter(Boolean).length,
    });
  } catch (err) {
    console.error("❌ 이메일 전송 오류:", err);
    return new Response("이메일 전송 실패", { status: 500 });
  }
}
