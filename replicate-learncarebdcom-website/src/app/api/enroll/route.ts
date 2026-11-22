import { NextResponse } from "next/server";
import { createEnrollment } from "@/db/queries";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const email = body.email ? String(body.email).trim() : undefined;
    const note = body.note ? String(body.note).trim() : undefined;
    const courseId = Number(body.courseId);

    if (name.length < 2) {
      return NextResponse.json({ ok: false, error: "অনুগ্রহ করে আপনার নাম লিখুন।" }, { status: 400 });
    }
    if (!/^[0-9+\-\s]{6,20}$/.test(phone)) {
      return NextResponse.json({ ok: false, error: "সঠিক মোবাইল নম্বর দিন।" }, { status: 400 });
    }
    if (!Number.isInteger(courseId) || courseId <= 0) {
      return NextResponse.json({ ok: false, error: "কোর্স নির্বাচন করুন।" }, { status: 400 });
    }

    const row = await createEnrollment({ name, phone, email, note, courseId });
    return NextResponse.json({ ok: true, id: row.id });
  } catch {
    return NextResponse.json(
      { ok: false, error: "দুঃখিত, এখন সাবমিট করা যাচ্ছে না। আবার চেষ্টা করুন।" },
      { status: 500 },
    );
  }
}
