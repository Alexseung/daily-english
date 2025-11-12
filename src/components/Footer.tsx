// "use client";

// export default function Footer() {
//   return (
//     <footer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-44 bg-stone-50 mt-20 pt-10 pb-6 px-6 md:px-0">
//       <ul className="text-sm text-stone-500 space-y-3 md:pl-40">
//         <li>© 2025 Step in English. 매일 영어 표현을 쉽고 재미있게!</li>
//         <li>
//           인스타:{" "}
//           <a
//             onClick={() =>
//               (window.location.href =
//                 "https://www.instagram.com/stepinenglish_/")
//             }
//             className="cursor-pointer hover:underline"
//           >
//             @stepinenglish_
//           </a>
//         </li>
//       </ul>
//       <ul className="text-sm text-stone-500 space-y-3 md:pl-60">
//         <li
//           onClick={() =>
//             (window.location.href =
//               "https://stepinenglish.notion.site/Step-in-English-1fc29a68a95f80439b35e1ddf3c9069c?pvs=4")
//           }
//           className="cursor-pointer hover:underline"
//         >
//           공지사항
//         </li>
//         <li
//           onClick={() =>
//             (window.location.href =
//               "https://docs.google.com/forms/d/1qbxDX8pM-SqxCzGDa9_OWX6t3xqp4FhHrmM481hEhEQ/edit")
//           }
//           className="cursor-pointer hover:underline"
//         >
//           더 나은 의견 제시
//         </li>
//       </ul>
//     </footer>
//   );
// }

"use client";

export default function Footer() {
  return (
    <footer className="mt-20 py-10">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="text-sm text-[--muted]">
            © 2025 Step in English. 매일 영어 표현을 쉽고 재미있게!
          </p>
          <p className="text-sm text-[--muted] mt-2">
            인스타:{" "}
            <a
              onClick={() =>
                (window.location.href =
                  "https://www.instagram.com/stepinenglish_/")
              }
              className="cursor-pointer hover:underline text-[--muted] font-medium"
            >
              @stepinenglish_
            </a>
          </p>
        </div>

        <div className="flex gap-6 justify-start md:justify-end">
          <button
            onClick={() =>
              (window.location.href =
                "https://stepinenglish.notion.site/Step-in-English-1fc29a68a95f80439b35e1ddf3c9069c?pvs=4")
            }
            className="text-sm text-[--muted] hover:underline"
          >
            공지사항
          </button>

          <button
            onClick={() =>
              (window.location.href =
                "https://docs.google.com/forms/d/1qbxDX8pM-SqxCzGDa9_OWX6t3xqp4FhHrmM481hEhEQ/edit")
            }
            className="text-sm text-[--muted] hover:underline"
          >
            더 나은 의견 제시
          </button>
          <button
            onClick={() => (window.location.href = "/policy")}
            className="text-sm text-[--muted] hover:underline"
          >
            개인정보 처리방침
          </button>
        </div>
      </div>
    </footer>
  );
}
