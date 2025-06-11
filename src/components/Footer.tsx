'use client';
export default function Footer() {
  return (
    <footer className='grid grid-cols-2 h-44 bg-stone-50 mt-20 pt-10'>
      <ul className='pl-40 text-sm text-stone-500 space-y-3'>
        <li>© 2025 Step in English. 매일 영어 표현을 쉽고 재미있게!</li>
        <li>
          인스타:{' '}
          <a
            onClick={() =>
              (window.location.href =
                'https://www.instagram.com/stepinenglish_/')
            }
            className='hover:cursor-pointer hover:underline'
          >
            @stepinenglish_
          </a>
        </li>
      </ul>
      <ul className='pl-60 text-sm text-stone-500 space-y-3'>
        <li
          onClick={() =>
            (window.location.href =
              'https://stepinenglish.notion.site/Step-in-English-1fc29a68a95f80439b35e1ddf3c9069c?pvs=4')
          }
          className='hover:cursor-pointer hover:underline'
        >
          공지사항
        </li>
        <li
          onClick={() =>
            (window.location.href =
              'https://docs.google.com/forms/d/1qbxDX8pM-SqxCzGDa9_OWX6t3xqp4FhHrmM481hEhEQ/edit')
          }
          className='hover:cursor-pointer hover:underline'
        >
          더 나은 의견 제시
        </li>
      </ul>
    </footer>
  );
}
