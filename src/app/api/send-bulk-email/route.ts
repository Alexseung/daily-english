import { Resend } from "resend";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { contents } from "@/english-expression/daily-expression";
import Announcement from "@/emails/Announcement";
import React from "react";

/* -----------------------------
    날짜 계산 유틸 (KST)
----------------------------- */

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const KST_OFFSET = 9 * 60 * 60 * 1000;

const getKstDayNumber = (date: Date) =>
  Math.floor((date.getTime() + KST_OFFSET) / MS_PER_DAY);

const getKstWeekdayFromDayNumber = (dayNumber: number) => {
  const utcMsAtKstMidnight = dayNumber * MS_PER_DAY - KST_OFFSET;
  return new Date(utcMsAtKstMidnight).getUTCDay();
};

const getBusinessDayIndex = (createdAt: Date, today: Date) => {
  const createdDay = getKstDayNumber(createdAt);
  const todayDay = getKstDayNumber(today);

  let index = -1;
  for (let day = createdDay + 1; day <= todayDay; day++) {
    const weekday = getKstWeekdayFromDayNumber(day);
    if (weekday >= 1 && weekday <= 5) index++;
  }
  return index;
};

const isTodayBusinessDay = (today: Date) => {
  const todayDay = getKstDayNumber(today);
  const weekday = getKstWeekdayFromDayNumber(todayDay);
  return weekday >= 1 && weekday <= 5;
};

/* -----------------------------
    Vercel Cron 설정
    평일(KST) 오전 7시 → UTC 22시
----------------------------- */

export const runtime = "nodejs";
export const cron = {
  schedule: "0 22 * * 0-4", // 월~금 KST 오전 7시
};

/* -----------------------------
    이메일 발송 로직 (공통)
----------------------------- */

async function sendBulkEmails() {
  const today = new Date();

  if (!isTodayBusinessDay(today)) {
    console.log("⏩ 주말이라 발송 스킵");
    return { skipped: true };
  }

  const resend = new Resend(process.env.RESEND_API_KEY!);

  const snapshot = await getDocs(collection(db, "emails"));
  const users = snapshot.docs.map((doc) => ({
    email: doc.data().email,
    created_at: doc.data().createdAt?.toDate?.(),
  }));

  const results = await Promise.all(
    users.map(async (user) => {
      if (!user.email || !user.created_at) return null;

      const createdDate = new Date(user.created_at);
      const dayIndex = getBusinessDayIndex(createdDate, today);

      if (dayIndex < 0 || dayIndex >= contents.length) return null;

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

  return {
    success: true,
    sent: results.filter(Boolean).length,
  };
}

/* -----------------------------
     1) 자동 실행 (Cron)
----------------------------- */

export async function scheduled() {
  console.log("📨 Cron triggered");
  return sendBulkEmails();
}

/* -----------------------------
     2) 테스트(GET)
     https://yourapp/app/api/send-bulk-email
----------------------------- */

export async function GET() {
  console.log("▶️ Manual test triggered");
  const result = await sendBulkEmails();
  return Response.json(result);
}
