// import { useRef } from "react";
// import EmailModal from "./EmailModal";
// import Image from "next/image";

// type EmailModalHandle = {
//   open: () => void;
//   close: () => void;
// };

// export default function Main() {
//   const modalRef = useRef<EmailModalHandle>(null);

//   function handleOpenModal() {
//     modalRef.current?.open();
//   }

//   return (
//     <main className="h-auto mt-10 text-center">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-b from-transparent to-purple-100 py-20 md:py-40 px-4">
//         <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10">
//           유용한 영어 표현을 매일 보내드려요!
//         </h1>
//         <p className="text-lg md:text-2xl text-stone-500">
//           표현, 의미, 예문, 해석까지
//         </p>
//         <p className="text-lg md:text-2xl text-stone-500 mt-1">
//           더 찾아볼 필요없이 매일 하나씩 읽어보세요
//         </p>
//         <button
//           className="font-bold text-xl md:text-3xl bg-purple-300 p-2 rounded-2xl mt-6 hover:scale-105 transition-transform cursor-pointer"
//           onClick={handleOpenModal}
//         >
//           구독하기
//         </button>
//       </section>

//       <EmailModal ref={modalRef} message="메일을 구독하시겠습니까?" />

//       {/* Info Section */}
//       <section className="py-20 md:py-40 px-4">
//         <p className="text-3xl md:text-5xl font-bold">
//           What am I supposed to do?
//         </p>
//         <p className="text-2xl md:text-4xl my-10 md:my-20 text-stone-500">
//           시간 내서 <strong>공부하지 않아도 괜찮아요.</strong>
//         </p>
//         <p className="text-3xl md:text-5xl text-stone-500">
//           그냥 읽고 <strong>중얼거리기만</strong> 하세요.
//         </p>
//       </section>

//       {/* Image + Text Section */}
//       <section className="grid grid-cols-1 md:grid-cols-2 w-full h-auto md:h-[300px]">
//         <div className="relative w-full h-64 md:h-full">
//           <Image
//             src="/main2.jpg"
//             alt="main-image"
//             fill
//             className="object-cover"
//           />
//         </div>

//         <div className="flex justify-center items-center bg-gray-100 p-6">
//           <div className="text-xl md:text-3xl text-stone-500 text-center md:text-left">
//             <p>적어놓을 필요도 없어요.</p>
//             <p className="my-1">문장은 저희가 알려줄게요.</p>
//             <p className="mb-4">여러분은 생각만 하세요.</p>
//             <strong className="text-stone-600">
//               &#39;내가 이 문장을 어떤 상황에서 쓸 수 있지?..&#39;
//             </strong>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

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
            매일 아침, 한 문장으로 영어 감각을 깨워요
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[--muted]">
            복잡한 공부는 필요 없습니다. 평일 오전 같은 시간에{" "}
            <strong>한 문장 + 예문 + 해석</strong>을 이메일로 보내드립니다.
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
            “It’s not rocket science!”
          </p>
          <p className="text-3xl md:text-4xl font-extrabold text-[#9b6d8c] leading-tight">
            이런 실생활 영어 표현, 어렵지 않아요
          </p>
          <p className="text-4xl md:text-5xl font-extrabold text-[#6b4b59] leading-tight">
            "Little by little, a little becomes a lot."
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
