import { useRef } from "react";
import EmailModal from "./EmailModal";

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
    <main className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section
        className="mt-14 py-16 px-6 rounded-2xl"
        style={{ background: "linear-gradient(180deg,#fff,#fff7f2)" }}
      >
        <div className="max-w-3xl mx-auto text-center fade-up">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#6b4b59]">
            매일 아침, 영어 표현 단 하나!
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[--muted]">
            복잡한 공부는 필요 없습니다.
          </p>
          <p className="text-lg md:text-xl text-[--muted]">
            매일 아침 <strong>한 문장 + 예문 + 해석</strong>을 이메일로
            보내드립니다.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={handleOpenModal}
              className="px-6 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition-transform btn-primary"
              style={{
                background: "linear-gradient(90deg,#C7A0FF,#FFD6B5)",
                boxShadow: "0 12px 30px rgba(199,160,255,0.12)",
                color: "#4b2f31",
              }}
            >
              지금 구독하기
            </button>
          </div>
        </div>
      </section>

      {/* Three benefit bullets */}
      <section className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white shadow-sm fade-up">
          <h3 className="font-semibold text-lg">짧고 명확한 한 문장</h3>
          <p className="mt-2 text-sm text-[--muted]">
            바쁜 아침에도 부담 없이 읽을 수 있어요.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white shadow-sm fade-up">
          <h3 className="font-semibold text-lg">실생활 예문, 해석 제공</h3>
          <p className="mt-2 text-sm text-[--muted]">
            완전 리얼 진짜 한국말 해석으로 공부하는 다양한 예문들.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white shadow-sm fade-up">
          <h3 className="font-semibold text-lg">동기부여되는 작은 습관</h3>
          <p className="mt-2 text-sm text-[--muted]">
            매일 아침 읽었던 영어 문장들이 미드에서 들려오는 순간 느껴지는 쾌감
          </p>
        </div>
      </section>

      {/* Intro English phrases */}
      <section className="mt-20 mb-16 text-center fade-up">
        <div className="space-y-4">
          <p className="text-4xl md:text-5xl font-extrabold text-[#6b4b59] leading-tight">
            “It&apos;s not rocket science!”
          </p>
          <p className="text-3xl md:text-4xl font-extrabold text-[#9b6d8c] leading-tight">
            이런 실생활 영어 표현, 어렵지 않아요
          </p>
          <p className="text-4xl md:text-5xl font-extrabold text-[#6b4b59] leading-tight">
            &quot;Little by little, a little becomes a lot.&quot;
          </p>

          <p className="text-3xl md:text-4xl font-extrabold text-[#9b6d8c] leading-tight">
            매일 한 표현씩 배우며, 자연스러운 영어 감각을 익혀보세요.
          </p>
        </div>
      </section>

      <EmailModal
        ref={modalRef}
        message="이메일로 따뜻한 영어 표현을 받아보세요 ✉️"
      />
    </main>
  );
}
