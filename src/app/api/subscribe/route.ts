// app/api/subscribe/route.ts
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // 이메일 검증
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Invalid email" },
        { status: 400 }
      );
    }

    // Firestore에 저장
    await addDoc(collection(db, "emails"), {
      email,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ 이메일 저장 실패:", error);

    return NextResponse.json(
      { success: false, message: "Error saving email" },
      { status: 500 }
    );
  }
}
