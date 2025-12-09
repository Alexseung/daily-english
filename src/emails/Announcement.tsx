import { Html } from "@react-email/html";

type Item = {
  id: string;
  content: string;
  meaning: string;
  meaningInKorean: string;
  literalTranslation: string;
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
        {/* PC + 모바일 반응형 스타일 */}
        <style>
          {`
            @media only screen and (max-width: 600px) {
              .container {
                padding: 20px 12px !important;
              }
              .card {
                padding: 16px !important;
                border-radius: 8px !important;
                box-shadow: none !important; /* 모바일에서 그림자 제거 */
                max-width: 100% !important;
              }
              h1 {
                font-size: 22px !important;
                line-height: 1.3 !important;
              }
              h2 {
                font-size: 18px !important;
                line-height: 1.4 !important;
              }
              p, li {
                font-size: 15px !important;
                line-height: 1.6 !important;
              }
              .btn {
                padding: 14px 18px !important;
                font-size: 15px !important;
                border-radius: 12px !important;
                display: block !important;
                width: 100% !important;
                text-align: center !important;
                background-color: #6366f1 !important;
              }
              ul {
                padding-left: 8px !important;
              }
              li {
                margin-bottom: 12px !important;
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
                fontSize: "14px",
                color: "#6b7280",
                marginBottom: "8px",
                textAlign: "center",
              }}
            >
              {item.literalTranslation}
            </p>

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
                color: "#334155",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              {item.meaningInKorean}
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
                fontSize: "18px",
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
              className="button-row"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "12px",
                marginTop: "24px",
                flexWrap: "wrap",
              }}
            >
              <a
                href={`https://daily-english-five.vercel.app/${item.id}`}
                className="btn"
                style={{
                  backgroundColor: "#4f46e5",
                  color: "#ffffff",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "15px",
                  minWidth: "140px",
                  textAlign: "center",
                  fontWeight: "bold",
                  display: "inline-block",
                }}
              >
                더 자세히 보기
              </a>

              <a
                href="https://www.instagram.com/stepinenglish_/"
                className="btn insta"
                style={{
                  backgroundColor: "#f43f5e",
                  color: "#ffffff",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "15px",
                  minWidth: "140px",
                  textAlign: "center",
                  fontWeight: "bold",
                  display: "inline-block",
                }}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </body>
    </Html>
  );
}
