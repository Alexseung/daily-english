////////////////////////////////////////////////////////수정

// import { Html } from "@react-email/html";
// import { Button } from "@react-email/components";

// type Item = {
//   id: string;
//   content: string;
//   meaning: string;
//   sentences: string[];
// };

// type Props = {
//   item: Item;
// };

// export default function Announcement({ item }: Props) {
//   return (
//     <Html lang="ko">
//       <div
//         style={{
//           backgroundColor: "#f9fafb",
//           padding: "40px 24px",
//           fontFamily: "Arial, sans-serif",
//           color: "#111827",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "24px",
//             fontWeight: "bold",
//             marginBottom: "16px",
//             textAlign: "center",
//             color: "#4f22f2ff",
//           }}
//         >
//           오늘의 표현
//         </h1>

//         <div
//           style={{
//             backgroundColor: "#ffffff",
//             padding: "24px",
//             borderRadius: "12px",
//             boxShadow: "0 0 5px rgba(0,0,0,0.05)",
//             maxWidth: "480px",
//             margin: "0 auto",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "20px",
//               color: "#0f172a",
//               marginBottom: "8px",
//               textAlign: "center",
//             }}
//           >
//             {/* {item.content} */} hahahah
//           </h2>
//           <p
//             style={{
//               fontSize: "16px",
//               color: "#334155",
//               marginBottom: "16px",
//               textAlign: "center",
//             }}
//           >
//             {/* {item.meaning} */} meaning
//           </p>
//           <p
//             style={{
//               fontSize: "16px",
//               color: "#000000ff",
//               marginBottom: "14px",
//               textAlign: "center",
//             }}
//           >
//             {/* {`"${item.meaningInKorean}"`} */} meaningInKorean
//           </p>
//           <hr
//             style={{
//               border: "none",
//               borderTop: "1px solid #e5e7eb",
//               margin: "20px 0",
//             }}
//           />
//           <ul
//             style={{
//               listStyle: "none",
//               padding: "0",
//               color: "#334155",
//               fontSize: "16px",
//               lineHeight: "1.6",
//             }}
//           >
//             {/* {item.sentences.map((sentence, index) => (
//               <li key={index} style={{ marginBottom: "8px" }}>
//                 - {sentence}
//               </li>
//             ))} */}{" "}
//             <li>sentence1</li>
//             <li>sentence2</li>
//             <li>sentence3</li>
//             <li>sentence4</li>
//           </ul>
//           <div
//             style={{
//               textAlign: "center",
//               marginTop: "20px",
//             }}
//           >
//             <Button
//               // href={`https://daily-english-five.vercel.app/${item.id}`}
//               style={{
//                 backgroundColor: "#adadadff",
//                 color: "#ffffff",
//                 padding: "10px 20px",
//                 borderRadius: "8px",
//                 textDecoration: "none",
//                 textAlign: "center",
//                 display: "inline-block",
//                 cursor: "pointer",
//               }}
//             >
//               더 자세히 알아보기
//             </Button>
//           </div>
//         </div>
//       </div>
//     </Html>
//   );
// }

import { Html } from "@react-email/html";

type Item = {
  id: string;
  content: string;
  meaning: string;
  meaningInKorean: string;
  sentences: string[];
};

type Props = {
  item: Item;
};

export default function Announcement({ item }: Props) {
  return (
    <Html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* 모바일 반응형 스타일 */}
        <style>
          {`
            @media only screen and (max-width: 600px) {
              .container {
                padding: 20px 12px !important;
              }
              .card {
                padding: 16px !important;
              }
              h1 {
                font-size: 20px !important;
              }
              h2 {
                font-size: 18px !important;
              }
              p, li {
                font-size: 14px !important;
              }
              .btn {
                padding: 10px 16px !important;
                font-size: 14px !important;
              }
            }
          `}
        </style>
      </head>

      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#f9fafb",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          className="container"
          style={{
            padding: "40px 24px",
            color: "#111827",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "16px",
              textAlign: "center",
              color: "#4f46e5",
            }}
          >
            오늘의 표현
          </h1>

          <div
            className="card"
            style={{
              backgroundColor: "#ffffff",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 0 5px rgba(0,0,0,0.05)",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                color: "#0f172a",
                marginBottom: "8px",
                textAlign: "center",
              }}
            >
              {item.content}
            </h2>

            <p
              style={{
                fontSize: "16px",
                color: "#334155",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              {item.meaning}
            </p>

            <p
              style={{
                fontSize: "16px",
                color: "#000000",
                marginBottom: "14px",
                textAlign: "center",
              }}
            >
              {`"${item.meaningInKorean}"`}
            </p>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid #e5e7eb",
                margin: "20px 0",
              }}
            />

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                color: "#334155",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              {item.sentences.map((sentence, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  - {sentence}
                </li>
              ))}
            </ul>

            <div
              style={{
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              <a
                href={`https://daily-english-five.vercel.app/${item.id}`}
                className="btn"
                style={{
                  backgroundColor: "#4f46e5",
                  color: "#ffffff",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                더 자세히 알아보기
              </a>
            </div>
          </div>
        </div>
      </body>
    </Html>
  );
}
