import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { contents } from "@/english-expression/daily-expression";
import Announcement from "@/emails/Announcement";
import { differenceInCalendarDays } from "date-fns";
import React from "react";

export async function GET() {
  console.log("✅이메일 발송 시작");
  const resend = new Resend(process.env.RESEND_API_KEY!);

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

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
        .filter((user) => user.email && user.created_at)
        .map((user) => {
          const createdDate = new Date(user.created_at);
          const rawDays = differenceInCalendarDays(today, createdDate);
          const dayIndex = rawDays - 1;

          if (dayIndex < 0 || dayIndex >= contents.length) {
            console.log(`⏩ ${user.email} 은 아직 콘텐츠를 받을 차례가 아님.`);
            return null;
          }

          const contentItem = contents[dayIndex];

          return resend.emails.send({
            from: "dailyenshligh@stepinenglish.co.kr",
            to: user.email,
            subject: `Day ${dayIndex + 1}: ${contentItem.content}`,
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
