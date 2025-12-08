import { NextResponse } from "next/server";
import { Resend } from "resend";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { contents } from "@/english-expression/daily-expression";
import Announcement from "@/emails/Announcement";
import React from "react";

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const KST_OFFSET = 9 * 60 * 60 * 1000;

// KST 날짜 → 몇 번째 날짜 번호인지
function getKstDayNumber(date: Date): number {
  return Math.floor((date.getTime() + KST_OFFSET) / MS_PER_DAY);
}

// 날짜 번호로 KST 기준 요일 구하기
function getKstWeekdayFromDayNumber(dayNumber: number): number {
  const utcMsAtKstMidnight = dayNumber * MS_PER_DAY - KST_OFFSET;
  return new Date(utcMsAtKstMidnight).getUTCDay();
}

// 가입일 기준 며칠차(평일 기준)
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

// 오늘이 평일인지
function isTodayBusinessDay(today: Date): boolean {
  const todayDay = getKstDayNumber(today);
  const weekday = getKstWeekdayFromDayNumber(todayDay);
  return weekday >= 1 && weekday <= 5;
}

// KST 시간 가져오기
function getKstNow() {
  const now = new Date();
  return new Date(now.getTime() + KST_OFFSET);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const isTest = searchParams.get("test") === "true";

  const nowKST = getKstNow();
  const day = nowKST.getUTCDay();
  const hour = nowKST.getUTCHours();

  // 🚨 테스트 모드
  if (isTest) {
    return NextResponse.json({
      test: true,
      message: "Test mode → 이메일 강제 발송됨",
      nowKST: nowKST.toString(),
    });
  }

  // 🚫 주말 스킵
  if (!isTodayBusinessDay(nowKST)) {
    return NextResponse.json({
      skipped: true,
      reason: "주말은 발송 안함",
    });
  }

  // ⏰ 오전 7시만 발송
  if (hour !== 7) {
    return NextResponse.json({
      skipped: true,
      reason: "현재 시간이 KST 07시가 아님",
      hour,
    });
  }

  const resend = new Resend(process.env.RESEND_API_KEY!);

  const snapshot = await getDocs(collection(db, "emails"));
  const users = snapshot.docs.map((doc) => ({
    email: doc.data().email,
    created_at: doc.data().createdAt?.toDate?.(),
  }));

  const today = new Date();

  let counter = 0;

  await Promise.all(
    users.map(async (user) => {
      if (!user.email || !user.created_at) return;

      const createdDate = new Date(user.created_at);
      const dayIndex = getBusinessDayIndex(createdDate, today);

      if (dayIndex < 0) return;
      if (dayIndex >= contents.length) return;

      const item = contents[dayIndex];

      await resend.emails.send({
        from: "dailyenglish@stepinenglish.co.kr",
        to: user.email,
        subject: `Day ${dayIndex + 1}: ${item.content}`,
        react: React.createElement(Announcement, { item }),
      });

      counter++;
    })
  );

  return NextResponse.json({
    success: true,
    sent: counter,
    nowKST: nowKST.toString(),
  });
}
