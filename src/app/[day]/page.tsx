import { contents } from "@/english-expression/daily-expression";

type Props = {
  params: Promise<{ day: string }>;
};

export default async function ContentPage({ params }: Props) {
  const { day } = await params;
  const item = contents.find((content) => content.id === day);

  if (!item) return <div>해당 콘텐츠를 찾을 수 없습니다.</div>;

  return (
    <div className="px-6 py-10 font-sans flex flex-col items-center">
      {/* Title Area */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#6b4b59]">
        오늘의 영어 표현
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
        {item.content}
      </h2>

      {/* Meaning Block */}
      <div className="mt-10 max-w-3xl w-full text-left bg-[#faf7f5] p-6 rounded-2xl shadow-sm border border-[#e7dedb]">
        <p
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: item.details.deatilMeaningInKorean,
          }}
        />
      </div>

      {/* Example Sentences */}
      <div className="mt-12 max-w-3xl w-full">
        <h3 className="text-xl font-semibold text-[#6b4b59] mb-4">
          예문으로 익혀보기
        </h3>

        <div className="space-y-6">
          {item.details.exampleSentences.map((ex, idx) => (
            <div
              key={idx}
              className="p-5 bg-white border border-[#e7dedb] rounded-xl shadow-sm"
            >
              <p
                className="font-semibold text-gray-800 mb-2 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: ex.sentence }}
              />
              <p className="text-gray-600">{ex.translation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
