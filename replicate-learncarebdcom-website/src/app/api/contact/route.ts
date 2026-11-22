import { NextResponse } from "next/server";
import { createInquiry } from "@/db/queries";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const email = body.email ? String(body.email).trim() : undefined;
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (name.length < 2) {
      return NextResponse.json({ ok: false, error: "অনুগ্রহ করে আপনার নাম লিখুন।" }, { status: 400 });
    }
    if (!/^[0-9+\-\s]{6,20}$/.test(phone)) {
      return NextResponse.json({ ok: false, error: "সঠিক মোবাইল নম্বর দিন।" }, { status: 400 });
    }
    if (subject.length < 2) {
      return NextResponse.json({ ok: false, error: "বিষয় লিখুন।" }, { status: 400 });
    }
    if (message.length < 10) {
      return NextResponse.json({ ok: false, error: "আপনার বার্তাটি লিখুন (কমপক্ষে ১০ অক্ষর)।" }, { status: 400 });
    }

    const row = await createInquiry({ name, phone, email, subject, message });
    return NextResponse.json({ ok: true, id: row.id });
  } catch {
    return NextResponse.json(
      { ok: false, error: "দুঃখিত, বার্তা পাঠানো যায়নি। আবার চেষ্টা করুন।" },
      { status: 500 },
    );
  }
}
