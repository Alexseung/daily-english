'use client';

export default function SendEmail() {
  const sendEmails = async () => {
    const res = await fetch('/api/send-bulk-email', {
      method: 'GET',
    });

    if (res.ok) {
      alert('이메일 전송 완료!');
    } else {
      alert('전송 실패 😢');
    }
  };

  return (
    <div className='p-10'>
      <button
        onClick={sendEmails}
        className='px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700'
      >
        전체 회원에게 이메일 보내기
      </button>
    </div>
  );
}
