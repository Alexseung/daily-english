import { Resend } from "resend";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { contents } from "@/english-expression/daily-expression";
import Announcement from "@/emails/Announcement";
import React from "react";

/* -----------------------------
    KST 날짜 계산 유틸
----------------------------- */

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const KST_OFFSET = 9 * 60 * 60 * 1000;

function getKstDayNumber(date: Date): number {
  return Math.floor((date.getTime() + KST_OFFSET) / MS_PER_DAY);
}

function getKstWeekdayFromDayNumber(dayNumber: number): number {
  const utcMsAtKstMidnight = dayNumber * MS_PER_DAY - KST_OFFSET;
  return new Date(utcMsAtKstMidnight).getUTCDay();
}

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

function isTodayBusinessDay(today: Date): boolean {
  const todayDay = getKstDayNumber(today);
  const weekday = getKstWeekdayFromDayNumber(todayDay);
  return weekday >= 1 && weekday <= 5;
}

/* -----------------------------
    이메일 발송 메인 로직
----------------------------- */

export async function GET() {
  console.log("📨 Bulk email send started");

  const today = new Date();

  // 주말 발송 방지
  if (!isTodayBusinessDay(today)) {
    console.log("⏩ 오늘은 주말이라 발송 스킵");
    return Response.json({ skipped: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY!);

  // 🔥 Firestore에서 이메일 리스트 불러오기
  const snapshot = await getDocs(collection(db, "emails"));
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

        if (dayIndex < 0) return null;
        if (dayIndex >= contents.length) return null;

        const item = contents[dayIndex];

        console.log(
          `📤 Sending to ${user.email} → Day ${dayIndex + 1}: ${item.content}`
        );

        return resend.emails.send({
          from: "dailyenglish@stepinenglish.co.kr",
          to: user.email,
          subject: `Day ${dayIndex + 1}: ${item.content}`,
          react: React.createElement(Announcement, { item }),
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
