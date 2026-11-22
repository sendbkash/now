"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-[3px] border border-white/12 bg-white/5 px-4 py-3 text-[15px] text-paper placeholder:text-mist/70 transition-colors focus:border-amber-400 focus:bg-white/10 focus:outline-none";

export function EnrollForm({ courseId, courseTitle }: { courseId: number; courseTitle: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, courseId }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "সাবমিট করা যায়নি");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "সাবমিট করা যায়নি");
    }
  }

  return (
    <div className="rounded-[4px] border border-white/10 bg-ink-800/80 p-6 sm:p-8">
      <p className="eyebrow text-amber-400">Enrollment</p>
      <h3 className="font-display mt-2 text-[22px] font-bold leading-snug text-paper">
        ভর্তি হতে চাই — {courseTitle}
      </h3>
      <p className="mt-2 text-[14px] leading-7 text-mist">
        ফর্মটি পূরণ করুন। আমাদের টিম ২৪ ঘণ্টার মধ্যে WhatsApp-এ যোগাযোগ করবে।
      </p>

      {status === "success" ? (
        <div className="mt-6 flex items-start gap-3 rounded-[3px] border border-emerald-400/30 bg-emerald-400/10 p-5">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
          <div>
            <p className="font-semibold text-emerald-100">আপনার আবেদন সফল হয়েছে!</p>
            <p className="mt-1 text-[14px] text-emerald-100/80">
              ধন্যবাদ। আমরা শিগগিরই আপনার সাথে যোগাযোগ করব। জরুরি প্রয়োজনে 01714-740430 নম্বরে WhatsApp করুন।
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-[13px] text-mist">আপনার নাম *</span>
              <input name="name" required placeholder="যেমনঃ রাফিদ হাসান" className={inputClass} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[13px] text-mist">মোবাইল নম্বর *</span>
              <input name="phone" required inputMode="tel" placeholder="01XXXXXXXXX" className={inputClass} />
            </label>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-[13px] text-mist">ইমেইল (ঐচ্ছিক)</span>
            <input name="email" type="email" placeholder="you@example.com" className={inputClass} />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[13px] text-mist">আপনার লক্ষ্য / প্রশ্ন</span>
            <textarea
              name="note"
              rows={3}
              placeholder="যেমনঃ আমি IELTS-এ Band 7.5+ চাই, সময় কেমন হবে?"
              className={`${inputClass} resize-none`}
            />
          </label>

          {status === "error" ? (
            <p className="flex items-center gap-2 text-[14px] text-red-300">
              <AlertCircle className="h-4 w-4" /> {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-[16px] font-bold text-ink-900 transition-transform hover:-translate-y-0.5 disabled:opacity-70"
          >
            {status === "loading" ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
            ভর্তি আবেদন পাঠান
          </button>
        </form>
      )}
    </div>
  );
}
