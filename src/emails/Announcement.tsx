// import {Html} from '@react-email/html';
// import {Button} from '@react-email/components';

// type Item = {
//   id: string;
//   content: string;
//   meaning: string;
//   sentences: string[];
// };

// type Props = {
//   item: Item;
// };

// export default function Announcement({item}: Props) {
//   const {id, content, meaning, sentences} = item;

//   return (
//     <Html lang='ko'>
//       <div
//         style={{
//           backgroundColor: '#f9fafb',
//           padding: '40px 24px',
//           fontFamily: 'Arial, sans-serif',
//           color: '#111827',
//         }}
//       >
//         <h1
//           style={{
//             fontSize: '24px',
//             fontWeight: 'bold',
//             marginBottom: '16px',
//             textAlign: 'center',
//             color: '#1d4ed8',
//           }}
//         >
//           📘 오늘의 표현
//         </h1>

//         <div
//           style={{
//             backgroundColor: '#ffffff',
//             padding: '24px',
//             borderRadius: '12px',
//             boxShadow: '0 0 5px rgba(0,0,0,0.05)',
//             maxWidth: '480px',
//             margin: '0 auto',
//           }}
//         >
//           <h2
//             style={{
//               fontSize: '20px',
//               color: '#0f172a',
//               marginBottom: '8px',
//               textAlign: 'center',
//             }}
//           >
//             {content}
//           </h2>

//           <p
//             style={{
//               fontSize: '16px',
//               color: '#334155',
//               marginBottom: '16px',
//               textAlign: 'center',
//             }}
//           >
//             {meaning}
//           </p>

//           <hr
//             style={{
//               border: 'none',
//               borderTop: '1px solid #e5e7eb',
//               margin: '20px 0',
//             }}
//           />

//           <ul
//             style={{
//               listStyle: 'none',
//               padding: '0',
//               color: '#334155',
//               fontSize: '16px',
//               lineHeight: '1.6',
//             }}
//           >
//             {sentences.map((sentence, index) => (
//               <li key={index} style={{marginBottom: '8px'}}>
//                 - {sentence}
//               </li>
//             ))}
//           </ul>
//                     <div style={{
//             textAlign: 'center',
//             marginTop: '20px',
//           }}>

// <Button
//   href="https://your-destination.com"
//   style={{
//     backgroundColor: '#6f6f70ff',
//     color: '#ffffff',
//     padding: '10px 20px',
//     borderRadius: '8px',
//     textDecoration: 'none',
//     textAlign: 'center',
//     display: 'inline-block', // 링크가 잘 보이도록
//     cursor: 'pointer',
//   }}
// >
//   더 자세히 알아보기
// </Button>

//           </div>
//         </div>
//       </div>
//     </Html>
//   );
// }

////////////////////////////////////////////////////////수정

import { Html } from "@react-email/html";
import { Button } from "@react-email/components";

type Item = {
  id: string;
  content: string;
  meaning: string;
  sentences: string[];
};

type Props = {
  item: Item;
};

export default function Announcement({ item }: Props) {
  return (
    <Html lang="ko">
      <div
        style={{
          backgroundColor: "#f9fafb",
          padding: "40px 24px",
          fontFamily: "Arial, sans-serif",
          color: "#111827",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "center",
            color: "#4f22f2ff",
          }}
        >
          오늘의 표현
        </h1>

        <div
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
              padding: "0",
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
            <Button
              href={`https://daily-english-five.vercel.app/${item.id}`}
              style={{
                backgroundColor: "#6f6f70ff",
                color: "#ffffff",
                padding: "10px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                textAlign: "center",
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              더 자세히 알아보기
            </Button>
          </div>
        </div>
      </div>
    </Html>
  );
}
