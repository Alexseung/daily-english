import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { contents } from "@/english-expression/daily-expression";
import Announcement from "@/emails/Announcement";
import React from "react";

function getBusinessDayIndex(createdAt: Date, today: Date): number {
  let index = -1;
  const cursor = new Date(createdAt);
  cursor.setDate(cursor.getDate() + 1); // 가입 다음날부터 카운트 시작

  while (cursor <= today) {
    const day = cursor.getDay(); // 월=1 ~ 금=5만 카운트
    if (day >= 1 && day <= 5) {
      index++;
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return index;
}

// 오늘이 평일이 아니라면 발송하지 않도록 안전장치 추가
function isTodayBusinessDay(date: Date) {
  const day = date.getDay();
  return day >= 1 && day <= 5;
}

export async function GET() {
  console.log("📨 Bulk email send started");

  const today = new Date();

  // 혹시 GitHub Actions 설정 오류로 주말에 실행돼도 발송되면 안 됨
  if (!isTodayBusinessDay(today)) {
    console.log("⏩ 오늘은 평일이 아니라서 발송 스킵");
    return Response.json({ skipped: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY!);

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data: users, error } = await supabase
    .from("email")
    .select("email, created_at");

  if (error || !users) {
    console.error("❌ 유저 불러오기 실패:", error);
    return new Response("유저 정보를 가져오지 못했습니다.", { status: 500 });
  }

  try {
    const results = await Promise.all(
      users.map(async (user) => {
        if (!user.email || !user.created_at) return null;

        const createdDate = new Date(user.created_at);
        const dayIndex = getBusinessDayIndex(createdDate, today);

        // dayIndex가 유효하지 않으면 발송하지 않음
        if (dayIndex < 0) {
          console.log(`⏩ ${user.email} 은 아직 발송 차례가 아님`);
          return null;
        }

        if (dayIndex >= contents.length) {
          console.log(`⏩ ${user.email} 은 모든 콘텐츠를 이미 받음`);
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
