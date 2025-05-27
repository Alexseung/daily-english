import {Resend} from 'resend';
import {createClient} from '@supabase/supabase-js';
import {contents} from '@/english-expression/daily-expression';
import Announcement from '@/emails/Announcement';
import {differenceInCalendarDays} from 'date-fns';
import React from 'react';

export async function sendBulkEmail() {
  const resend = new Resend(process.env.RESEND_API_KEY!);
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const {data: users, error} = await supabase
    .from('email')
    .select('email, created_at');

  if (error || !users) throw new Error('유저 정보를 가져오지 못했습니다.');

  const today = new Date();

  const results = await Promise.all(
    users
      .filter(user => user.email && user.created_at)
      .map(user => {
        const createdDate = new Date(user.created_at);
        const rawDays = differenceInCalendarDays(today, createdDate);
        const dayIndex = rawDays - 1;

        if (dayIndex < 0 || dayIndex >= contents.length) {
          console.log(`⏩ ${user.email} 은 아직 콘텐츠를 받을 차례가 아님.`);
          return null;
        }

        const contentItem = contents[dayIndex];

        return resend.emails.send({
          from: 'dailyenshligh@stepinenglish.co.kr',
          to: user.email,
          subject: `Day ${dayIndex + 1}: ${contentItem.content}`,
          react: React.createElement(Announcement, {
            item: {
              content: contentItem.content,
              meaning: contentItem.meaning,
              sentences: contentItem.sentences,
            },
          }),
        });
      })
  );

  console.log('✅ 이메일 전송 완료:', results.filter(Boolean));
  return results.filter(Boolean);
}
