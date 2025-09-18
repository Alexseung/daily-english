import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { contents } from "@/english-expression/daily-expression";
import Announcement from "@/emails/Announcement";
import React from "react";

/**
 * created_at 다음날부터 카운트를 시작
 * - 첫 번째 평일이면 index = 0
 * - 주말(토·일)은 건너뛰고 index 증가 없음
 * - 평일만 index 증가
 * → 최종적으로 몇 번째 콘텐츠를 보낼지 결정
 */
function getBusinessDayIndex(createdAt: Date, today: Date): number {
  let index = -1; // 첫 평일에서 0으로 시작하도록 -1로 세팅
  const current = new Date(createdAt);
  current.setDate(current.getDate() + 1); // created_at 다음날부터 시작

  while (current <= today) {
    const day = current.getDay(); // 0 = 일요일, 6 = 토요일
    if (day !== 0 && day !== 6) {
      index++; // 평일일 때만 카운트 증가
    }
    current.setDate(current.getDate() + 1); // 하루씩 이동
  }

  return index;
}

export async function GET() {
  console.log("✅ 이메일 발송 시작");
  const resend = new Resend(process.env.RESEND_API_KEY!);

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // DB에서 유저의 email과 가입일(created_at) 가져오기
  const { data: users, error } = await supabase
    .from("email")
    .select("email, created_at");

  if (error || !users) {
    return new Response("유저 정보를 가져오지 못했습니다.", { status: 500 });
  }

  const today = new Date();

  try {
    const results = await Promise.all(
      users
        .filter((user) => user.email && user.created_at) // 이메일과 가입일이 있는 유저만
        .map((user) => {
          const createdDate = new Date(user.created_at);

          // 가입일 기준 오늘까지 몇 번째 평일이 지났는지 계산
          const dayIndex = getBusinessDayIndex(createdDate, today);

          // 아직 첫 번째 평일이 안 됐거나, 콘텐츠를 다 소진한 경우
          if (dayIndex < 0 || dayIndex >= contents.length) {
            console.log(`⏩ ${user.email} 은 아직 콘텐츠를 받을 차례가 아님.`);
            return null;
          }

          const contentItem = contents[dayIndex];

          // 이메일 발송
          return resend.emails.send({
            from: "dailyenglish@stepinenglish.co.kr",
            to: user.email,
            subject: `Day ${dayIndex + 1}: ${contentItem.content}`, // Day 1부터 표시
            react: React.createElement(Announcement, {
              item: {
                id: contentItem.id || `day${dayIndex + 1}`,
                content: contentItem.content,
                meaning: contentItem.meaning,
                sentences: contentItem.sentences,
                meaningInKorean: contentItem.meaningInKorean,
                literalTranslation: contentItem.literalTranslation,
              },
            }),
          });
        })
    );

    console.log("✅ 이메일 전송 완료:", results.filter(Boolean));
    return Response.json({ success: true, results: results.filter(Boolean) });
  } catch (err) {
    console.error("❌ 이메일 전송 오류:", err);
    return new Response("이메일 전송 실패", { status: 500 });
  }
}
