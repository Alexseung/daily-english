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
      <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-sm border-b border-transparent">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <div
            onClick={() => handleRoute("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #FFD6B5, #C7A0FF)",
              }}
            >
              <span className="font-bold text-white">S</span>
            </div>
            <div>
              <p className="text-lg font-extrabold text-[#6b4b59]">
                Step in English
              </p>
              <p className="text-xs text-[--muted] -mt-1">
                매일 한 문장으로 영어 감각
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                (window.location.href =
                  "https://stepinenglish.notion.site/Step-in-English-1fc29a68a95f80439b35e1ddf3c9069c?pvs=4")
              }
              className="hidden md:inline text-sm font-medium text-[--muted] hover:underline"
            >
              공지사항
            </button>

            <button
              onClick={handleOpenModal}
              className="px-4 py-2 rounded-xl font-semibold text-sm btn-soft hover:scale-102 transition-transform"
              style={{
                background:
                  "linear-gradient(90deg, rgba(199,160,255,0.15), rgba(255,214,186,0.15))",
                color: "#5b3d45",
                border: "1px solid rgba(199,160,255,0.25)",
              }}
            >
              구독하기
            </button>
          </div>
        </nav>
      </header>

      <EmailModal
        ref={modalRef}
        message="이메일로 따뜻한 영어 표현을 받아보세요 ✉️"
      />
    </>
  );
}
