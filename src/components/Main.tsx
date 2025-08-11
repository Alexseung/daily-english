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
//     <main className=" h-auto mt-10 text-center">
//       <section className="bg-gradient-to-b from-transparent to-purple-100 py-40">
//         <h1 className="text-5xl font-bold mb-10">
//           유용한 영어 표현을 매일 보내드려요!
//         </h1>
//         <p className="text-2xl text-stone-500">표현, 의미, 예문, 해석까지</p>
//         <p className="text-2xl text-stone-500">
//           더 찾아볼 필요없이 매일 하나씩 읽어보세요
//         </p>
//         <button
//           className="font-bold text-3xl bg-purple-300 p-2 rounded-2xl mt-4 hover:cursor-pointer hover:scale-105"
//           onClick={handleOpenModal}
//         >
//           구독하기
//         </button>
//       </section>
//       <EmailModal ref={modalRef} message="메일을 구독하시겠습니까?" />
//       <section className="py-40">
//         <p className="text-5xl font-bold">What am I supposed to do?</p>
//         <p className="text-4xl my-20 text-stone-500">
//           시간 내서 <strong>공부하지 않아도 괜찮아요.</strong>
//         </p>
//         <p className="text-5xl text-stone-500">
//           그냥 읽고 <strong>중얼거리기만</strong> 하세요.
//         </p>
//       </section>
//       <section className="grid grid-cols-2 w-full h-[300px]">
//         <div className="relative w-full h-full">
//           <Image
//             src="/main2.jpg"
//             alt="main-image"
//             fill
//             style={{ objectFit: "cover" }}
//           />
//         </div>

//         <div className="flex justify-center items-center bg-gray-100">
//           <div className="text-3xl text-stone-500">
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
import Image from "next/image";

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
    <main className="h-auto mt-10 text-center">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-transparent to-purple-100 py-20 md:py-40 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10">
          유용한 영어 표현을 매일 보내드려요!
        </h1>
        <p className="text-lg md:text-2xl text-stone-500">
          표현, 의미, 예문, 해석까지
        </p>
        <p className="text-lg md:text-2xl text-stone-500 mt-1">
          더 찾아볼 필요없이 매일 하나씩 읽어보세요
        </p>
        <button
          className="font-bold text-xl md:text-3xl bg-purple-300 p-2 rounded-2xl mt-6 hover:scale-105 transition-transform cursor-pointer"
          onClick={handleOpenModal}
        >
          구독하기
        </button>
      </section>

      <EmailModal ref={modalRef} message="메일을 구독하시겠습니까?" />

      {/* Info Section */}
      <section className="py-20 md:py-40 px-4">
        <p className="text-3xl md:text-5xl font-bold">
          What am I supposed to do?
        </p>
        <p className="text-2xl md:text-4xl my-10 md:my-20 text-stone-500">
          시간 내서 <strong>공부하지 않아도 괜찮아요.</strong>
        </p>
        <p className="text-3xl md:text-5xl text-stone-500">
          그냥 읽고 <strong>중얼거리기만</strong> 하세요.
        </p>
      </section>

      {/* Image + Text Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 w-full h-auto md:h-[300px]">
        <div className="relative w-full h-64 md:h-full">
          <Image
            src="/main2.jpg"
            alt="main-image"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex justify-center items-center bg-gray-100 p-6">
          <div className="text-xl md:text-3xl text-stone-500 text-center md:text-left">
            <p>적어놓을 필요도 없어요.</p>
            <p className="my-1">문장은 저희가 알려줄게요.</p>
            <p className="mb-4">여러분은 생각만 하세요.</p>
            <strong className="text-stone-600">
              &#39;내가 이 문장을 어떤 상황에서 쓸 수 있지?..&#39;
            </strong>
          </div>
        </div>
      </section>
    </main>
  );
}
