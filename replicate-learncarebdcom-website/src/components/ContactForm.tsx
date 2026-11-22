"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const inputClass =
  "w-full rounded-[3px] border border-ink-900/15 bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-900/35 transition-colors focus:border-brand-500 focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "পাঠানো যায়নি");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "পাঠানো যায়নি");
    }
  }

  return (
    <div className="rounded-[4px] border border-ink-900/12 bg-white p-6 sm:p-9">
      <p className="eyebrow text-brand-500">Send a message</p>
      <h2 className="font-display mt-3 text-[28px] font-bold leading-tight text-ink-900">
        আপনার প্রশ্নটি লিখে পাঠান
      </h2>
      <p className="mt-2 text-[15px] leading-7 text-ink-900/65">
        কোর্স, ভর্তি, পেমেন্ট বা টেকনিক্যাল সমস্যা — যেকোনো বিষয়ে আমাদের সাপোর্ট টিম প্রতিদিন সকাল ১০টা থেকে রাত
        ১০টা পর্যন্ত সাড়া দেয়।
      </p>

      {status === "success" ? (
        <div className="mt-6 flex items-start gap-3 rounded-[3px] border border-emerald-600/25 bg-emerald-50 p-5">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
          <div>
            <p className="font-semibold text-emerald-900">বার্তাটি পৌঁছে গেছে!</p>
            <p className="mt-1 text-[14px] text-emerald-900/75">
              আমরা শিগগিরই আপনার সাথে যোগাযোগ করব। ধন্যবাদ LearnCare Academy-র প্রতি আস্থার জন্য।
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-7 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-[13px] text-ink-900/60">নাম *</span>
              <input name="name" required placeholder="আপনার পূর্ণ নাম" className={inputClass} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[13px] text-ink-900/60">মোবাইল নম্বর *</span>
              <input name="phone" required inputMode="tel" placeholder="01XXXXXXXXX" className={inputClass} />
            </label>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-[13px] text-ink-900/60">ইমেইল (ঐচ্ছিক)</span>
            <input name="email" type="email" placeholder="you@example.com" className={inputClass} />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[13px] text-ink-900/60">বিষয় *</span>
            <input name="subject" required placeholder="যেমনঃ IELTS কোর্স সংক্রান্ত প্রশ্ন" className={inputClass} />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[13px] text-ink-900/60">বার্তা *</span>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="আপনার প্রশ্ন বা সমস্যাটি বিস্তারিত লিখুন..."
              className={`${inputClass} resize-none`}
            />
          </label>

          {status === "error" ? (
            <p className="flex items-center gap-2 text-[14px] text-red-600">
              <AlertCircle className="h-4 w-4" /> {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-[16px] font-bold text-paper transition-transform hover:-translate-y-0.5 hover:bg-brand-500 disabled:opacity-70"
          >
            {status === "loading" ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
            বার্তা পাঠান
          </button>
        </form>
      )}
    </div>
  );
}
