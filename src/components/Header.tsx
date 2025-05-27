'use client';

import {useRef} from 'react';
import {useRouter} from 'next/navigation';
import EmailModal from './EmailModal';

type EmailModalHandle = {
  open: () => void;
  close: () => void;
};

export default function Header() {
  const route = useRouter();
  const modalRef = useRef<EmailModalHandle>(null);

  function handleRoute(pageName: string) {
    route.push(pageName);
  }

  function handleOpenModal() {
    modalRef.current?.open();
  }

  return (
    <>
      <header className='flex mb-2 justify-center w-full'>
        <nav className='p-2 rounded-xl flex justify-between items-center w-full max-w-5xl px-4'>
          <p className='bg-stone-500 w-16 h-6' onClick={() => handleRoute('/')}>
            Logo
          </p>

          <div className='flex gap-12'>
            <button
              className='font-bold text-xl hover:cursor-pointer hover:bg-stone-200 rounded-md p-1'
              onClick={() =>
                (window.location.href =
                  'https://stepinenglish.notion.site/Step-in-English-1fc29a68a95f80439b35e1ddf3c9069c?pvs=4')
              }
            >
              공지사항
            </button>

            <button
              className='font-bold text-xl bg-purple-300 p-1 rounded-xl hover:cursor-pointer'
              onClick={handleOpenModal}
            >
              구독하기
            </button>
          </div>
        </nav>
      </header>

      <EmailModal ref={modalRef} message='메일을 구독하시겠습니까? 📧' />
    </>
  );
}
