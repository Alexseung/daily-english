"use client";

import { useState } from "react";

type Props = {
  onSuccess?: () => void;
};

export default function EmailSubscribeForm({ onSuccess }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "문제가 발생했어요");
      }

      setStatus("success");
      setMessage(
        "구독이 완료되었습니다! 매일 아침 7시 이메일을 확인해보세요 🌞"
      );
      setEmail("");

      setTimeout(() => {
        onSuccess?.();
      }, 3000);
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "알 수 없는 에러");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-3 items-center max-sm:flex-col">
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-5 py-3 rounded-xl border border-gray-100 shadow-sm text-lg w-full"
          style={{ background: "linear-gradient(180deg,#fff,#fffefc)" }}
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="px-5 py-3 rounded-xl font-semibold text-white w-full max-sm:mt-1"
          style={{
            background: "linear-gradient(90deg,#C7A0FF,#FFD6B5)",
            boxShadow: "0 8px 20px rgba(199,160,255,0.18)",
            minWidth: 120,
          }}
        >
          {status === "loading" ? "구독 중..." : "구독하기"}
        </button>
      </div>

      {message && (
        <p
          className={`text-sm ${
            status === "error" ? "text-red-500" : "text-[--muted]"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
