// import { contents } from "@/english-expression/daily-expression";
// type Props = {
//   params: { day: string };
// };

// export default function ContentPage({ params }: Props) {
//   const item = contents.find((content) => content.id === params.day);

//   if (!item) return <div>해당 콘텐츠를 찾을 수 없습니다.</div>;

//   return (
//     <div className="p-5 font-sans text-center">
//       <h1 className="text-xl text-gray-800">오늘의 표현</h1>
//       <h2 className="text-2xl font-bold text-gray-700 mt-2">{item.content}</h2>
//       {/* 컴포넌트에서 HTML 태그를 가진 문자열을 HTML로 파싱해서 렌더링하려면
//       반드시 dangerouslySetInnerHTML 속성을 사용해야 합니다. 그리고
//       children으로는 해당 문자열을 넣지 않아야 합니다. */}
//       <p
//         className="text-gray-600 my-8 text-left"
//         dangerouslySetInnerHTML={{ __html: item.details.meaningInKorean }}
//       />
//       {/* <ul className="list-disc list-inside mt-2 space-y-1 border-t border-t-[1px] mx-auto max-w-3xl pt-2">
//         {item.details.exampleSentences.map((el, index) => (
//           <li key={index} className="text-gray-600 list-none my-6">
//             <p className="font-bold mb-1">{el.sentence}</p>
//             <p>{el.translation}</p>
//           </li>
//         ))}
//       </ul> */}
//       <ul className="list-disc list-inside mt-2 space-y-1 border-t border-t-[1px] mx-auto max-w-3xl pt-2">
//         {item.details.exampleSentences.map((el, index) => (
//           <li key={index} className="text-gray-600 list-none my-6">
//             {/* sentence에 HTML 태그가 포함됐을 때 */}
//             <p
//               className="font-bold mb-1"
//               dangerouslySetInnerHTML={{ __html: el.sentence }}
//             />
//             <p>{el.translation}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import { contents } from "@/english-expression/daily-expression";

type Props = {
  params: Promise<{ day: string }>;
};

export default async function ContentPage({ params }: Props) {
  const { day } = await params; // 여기서 await 필수
  const item = contents.find((content) => content.id === day);

  if (!item) return <div>해당 콘텐츠를 찾을 수 없습니다.</div>;

  return (
    <div className="p-5 font-sans text-center">
      <h1 className="text-xl text-gray-800">오늘의 표현</h1>
      <h2 className="text-2xl font-bold text-gray-700 mt-2">{item.content}</h2>
      <p
        className="text-gray-600 my-8 text-left"
        dangerouslySetInnerHTML={{ __html: item.details.deatilMeaningInKorean }}
      />
      <ul className="list-disc list-inside mt-2 space-y-1 border-t border-t-[1px] mx-auto max-w-3xl pt-2">
        {item.details.exampleSentences.map((el, index) => (
          <li key={index} className="text-gray-600 list-none my-6">
            <p
              className="font-bold mb-1"
              dangerouslySetInnerHTML={{ __html: el.sentence }}
            />
            <p>{el.translation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
