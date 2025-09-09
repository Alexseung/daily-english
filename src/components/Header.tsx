"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import EmailModal from "./EmailModal";

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
      <header className="flex mb-2 justify-center w-full sticky top-0 z-50 bg-white shadow-sm">
        <nav className="p-2 rounded-xl flex justify-between items-center w-full max-w-5xl px-4">
          <p
            className="w-24 h-6 text-xl font-extrabold text-purple-600 cursor-pointer"
            onClick={() => handleRoute("/")}
          >
            DailyEnglish
          </p>

          <div className="flex gap-12">
            <button
              className="hidden md:block font-bold text-xl hover:bg-stone-200 rounded-md p-1 cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "https://stepinenglish.notion.site/Step-in-English-1fc29a68a95f80439b35e1ddf3c9069c?pvs=4")
              }
            >
              공지사항
            </button>

            <button
              className="font-bold text-lg md:text-xl bg-purple-300 p-2 rounded-xl hover:scale-105 transition-transform cursor-pointer"
              onClick={handleOpenModal}
            >
              구독하기
            </button>
          </div>
        </nav>
      </header>

      <EmailModal ref={modalRef} message="메일 구독하기 📧" />
    </>
  );
}
