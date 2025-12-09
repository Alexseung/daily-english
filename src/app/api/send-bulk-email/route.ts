import { Resend } from "resend";
import { db } from "@/lib/firebase"; // 이미 있는 firebase 설정
import { collection, getDocs } from "firebase/firestore";

import { contents } from "@/english-expression/daily-expression";
import Announcement from "@/emails/Announcement";
import React from "react";

/* -----------------------------
    KST 날짜 계산 유틸
----------------------------- */

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const KST_OFFSET = 9 * 60 * 60 * 1000;

// 날짜를 'KST 기준 일 번호'로 변환 (1970-01-01부터 며칠째인지)
function getKstDayNumber(date: Date): number {
  return Math.floor((date.getTime() + KST_OFFSET) / MS_PER_DAY);
}

// KST 일 번호 → KST 요일 (0=일요일 ~ 6=토요일)
function getKstWeekdayFromDayNumber(dayNumber: number): number {
  const utcMsAtKstMidnight = dayNumber * MS_PER_DAY - KST_OFFSET;
  return new Date(utcMsAtKstMidnight).getUTCDay();
}

// 가입 다음날부터 'KST 기준' 평일만 카운트
function getBusinessDayIndex(createdAt: Date, today: Date): number {
  const createdDay = getKstDayNumber(createdAt);
  const todayDay = getKstDayNumber(today);

  let index = -1;

  for (let day = createdDay + 1; day <= todayDay; day++) {
    const weekday = getKstWeekdayFromDayNumber(day);
    if (weekday >= 1 && weekday <= 5) index++;
  }

  return index;
}

// 오늘 평일 여부
function isTodayBusinessDay(today: Date): boolean {
  const todayDay = getKstDayNumber(today);
  const weekday = getKstWeekdayFromDayNumber(todayDay);
  return weekday >= 1 && weekday <= 5;
}

/* -----------------------------
    이메일 발송 메인 로직 (Firebase)
----------------------------- */

export async function GET() {
  console.log("📨 Bulk email send started");

  const today = new Date();

  // 주말 발송 금지
  if (!isTodayBusinessDay(today)) {
    console.log("⏩ 오늘은 평일이 아니라서 발송 스킵");
    return Response.json({ skipped: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY!);

  // 🔥 Firestore 사용자 조회
  const snapshot = await getDocs(collection(db, "emails")); // ← "emails" 컬렉션 사용 중이면 맞음
  const users = snapshot.docs.map((doc) => ({
    email: doc.data().email,
    created_at: doc.data().createdAt?.toDate?.(),
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
