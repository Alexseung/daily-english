// app/api/cron/route.ts

export const config = {
  schedule: '*/3 * * * *', // 3분마다 실행
};

export const revalidate = 0;

import {NextResponse} from 'next/server';
import {sendBulkEmail} from '@/lib/sendEmails';

export async function GET() {
  try {
    const result = await sendBulkEmail();
    console.log('⏰ 스케줄러가 이메일 전송 완료');
    return NextResponse.json({success: true, results: result});
  } catch (error) {
    console.error('❌ 스케줄러 실패:', error);
    return NextResponse.json(
      {success: false, error: String(error)},
      {status: 500}
    );
  }
}
