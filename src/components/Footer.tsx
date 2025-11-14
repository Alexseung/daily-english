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
