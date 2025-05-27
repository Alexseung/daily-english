import {NextResponse} from 'next/server';
import {supabase} from '@/lib/supabase';

export async function POST(req: Request) {
  const {email} = await req.json();

  // 1. 먼저 이미 존재하는 이메일인지 확인
  const {data: existing, error: selectError} = await supabase
    .from('email')
    .select('email')
    .eq('email', email)
    .single(); // 딱 하나만 확인

  if (selectError && selectError.code !== 'PGRST116') {
    // 'PGRST116'은 데이터가 없는 경우의 코드 (Supabase의 경우)
    return NextResponse.json({error: '확인 중 오류 발생'}, {status: 500});
  }

  if (existing) {
    return NextResponse.json({error: '이미 구독 중입니다'}, {status: 400});
  }

  // 2. 없으면 새로 저장
  const {error} = await supabase.from('email').insert([{email}]);

  if (error) {
    return NextResponse.json({error: error.message}, {status: 500});
  }

  return NextResponse.json({message: '구독 성공!'}, {status: 200});
}
