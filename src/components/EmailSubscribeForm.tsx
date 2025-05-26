'use client';

import {useState} from 'react';

export default function EmailSubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email}),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || '문제가 발생했어요');

      setStatus('success');
      setMessage('구독이 완료되었습니다!');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : '알 수 없는 에러');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4 max-w-md mx-auto p-4'>
      <div className='flex items-center space-x-2'>
        <input
          type='email'
          required
          placeholder='이메일 주소 입력'
          className='flex-1 px-4 py-2 border rounded h-12'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button
          type='submit'
          className='bg-stone-500 text-white px-4 py-2 rounded h-12 hover:bg-stone-600'
          disabled={status === 'loading'}
        >
          {status === 'loading' ? '구독 중...' : '구독하기'}
        </button>
      </div>

      {message && (
        <p
          className={`text-sm ${
            status === 'error' ? 'text-red-500' : 'text-green-600'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
