import {useRef} from 'react';
import EmailModal from './EmailModal';

type EmailModalHandle = {
  open: () => void;
  close: () => void;
};

export default function Main() {
  const modalRef = useRef<EmailModalHandle>(null);

  function handleOpenModal() {
    modalRef.current?.open();
  }

  return (
    <main className=' h-auto mt-10 text-center'>
      <section className='bg-gradient-to-b from-transparent to-purple-50 py-20'>
        <h1 className='text-5xl font-bold mb-10'>
          유용한 영어 표현을 매일 보내드려요!
        </h1>
        <p className='text-2xl text-stone-500'>표현, 의미, 예문, 해석까지</p>
        <p className='text-2xl text-stone-500'>
          더 찾아볼 필요없이 매일 하나씩 읽어보세요
        </p>
        <button
          className='font-bold text-3xl bg-purple-300 p-2 rounded-md mt-4 hover:cursor-pointer hover:scale-105'
          onClick={handleOpenModal}
        >
          구독하기
        </button>
      </section>
      <EmailModal ref={modalRef} message='메일을 구독하시겠습니까? 📧' />
    </main>
  );
}
