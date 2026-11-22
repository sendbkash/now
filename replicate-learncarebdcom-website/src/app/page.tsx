import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Sparkles, Headphones, Mic2, LineChart } from "lucide-react";
import { getCourses, getTools } from "@/db/queries";
import { CourseCard } from "@/components/CourseCard";
import { ToolCard } from "@/components/ToolCard";
import { Reveal } from "@/components/Reveal";

export const dynamic = "force-dynamic";

const heroStats = [
  { value: "৪৭টি", label: "ইন্টারঅ্যাক্টিভ মাস্টার ল্যাব" },
  { value: "৯০০+", label: "বিকল্প সেন্টেন্স রূপ" },
  { value: "১২,০০০+", label: "সক্রিয় শিক্ষার্থী" },
];

const labStats = [
  { value: "৪৭টি", label: "মাস্টার প্র্যাকটিস শিট" },
  { value: "৯০০+", label: "বিকল্প সেন্টেন্স রূপ" },
  { value: "৫০০", label: "ভার্বস কনজুগেশন ইঞ্জিন" },
  { value: "১০০% ফ্রি", label: "ইন্টারঅ্যাক্টিভ পরীক্ষা" },
];

const marqueeItems = [
  "British Pronunciation (IPA)",
  "New Headway Dictation",
  "Cambridge 9–20 Real Audio",
  "AI Speaking Evaluation",
  "47 Interactive Labs",
  "IELTS Band 7.5+",
];

const method = [
  {
    n: "01",
    icon: Mic2,
    title: "শুনুন ও অনুকরণ করুন",
    body: "নেটিভ ব্রিটিশ অডিও, IPA ট্রান্সক্রিপ্ট ও নিউ হেডওয়ে ডিকটেশন — প্রথমেই কানকে প্রশিক্ষিত করুন।",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "নিজে বাক্য তৈরি করুন",
    body: "১০০টি স্পোকেন প্যাটার্ন ও ৯০০+ বিকল্প রূপের ড্রপডাউন দিয়ে নিজের বাক্য নিজেই গড়ুন।",
  },
  {
    n: "03",
    icon: LineChart,
    title: "AI মূল্যায়নে উন্নত হোন",
    body: "স্পিকিং রেকর্ড ও রাইটিং সাবমিট করুন — সাথে সাথে ব্যান্ড স্কোর, ভুল ও সংশোধনের দিকনির্দেশনা।",
  },
];

export default async function HomePage() {
  const [courses, tools] = await Promise.all([getCourses(undefined, true), getTools()]);
  const spokenTools = tools.filter((t) => t.category === "spoken");
  const ieltsTools = tools.filter((t) => t.category === "ielts");

  return (
    <>
      {/* ─────────────── HERO ─────────────── */}
      <section className="relative overflow-hidden bg-ink-900">
        <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
          <Image
            src="/images/hero-study.jpg"
            alt="রাতে পড়ার টেবিলে ল্যাপটপ, হেডফোন ও খাতা"
            fill
            priority
            sizes="52vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/55 to-ink-900/15" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-900 to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-[132px] sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-[168px]">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-amber-400/35 bg-amber-400/10 px-4 py-2 text-amber-400">
                🇧🇩 দেশের সেরা AI Spoken &amp; IELTS লার্নিং প্ল্যাটফর্ম
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="font-display mt-7 text-[clamp(2.35rem,6.2vw,4.6rem)] font-extrabold leading-[1.12] tracking-tight text-paper">
                সহজ পদ্ধতিতে স্পোকেন ইংলিশ ও{" "}
                <span className="relative whitespace-nowrap text-amber-400">
                  IELTS Band 7.5+
                  <svg
                    className="absolute -bottom-2 left-0 h-3 w-full text-amber-400/60"
                    viewBox="0 0 300 12"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 9C60 3 120 2 178 5c40 2 78 4 120 2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                প্রস্তুতি
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-7 max-w-xl text-[17px] leading-[1.95] text-mist">
                সঠিক ব্রিটিশ উচ্চারণ (IPA), New Headway ডিকটেশন, Cambridge 9-20 রিয়েল অডিও টেস্ট এবং AI
                স্পিকিং-রাইটিং মূল্যায়নে সাবলীল ইংরেজি শিখুন ঘরে বসেই।
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/courses"
                  className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-[16px] font-bold text-ink-900 transition-transform hover:-translate-y-0.5"
                >
                  কোর্স শুরু করুন
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/tools"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[16px] font-semibold text-paper transition-colors hover:border-amber-400 hover:text-amber-400"
                >
                  <Headphones className="h-4 w-4" /> ১০০% ফ্রি ল্যাব
                </Link>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {heroStats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display num text-[26px] font-bold text-paper">{s.value}</dt>
                    <dd className="mt-1 text-[13px] leading-6 text-mist">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="relative lg:hidden">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[4px]">
              <Image
                src="/images/hero-study.jpg"
                alt="রাতে পড়ার টেবিলে ল্যাপটপ, হেডফোন ও খাতা"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="grain pointer-events-none absolute inset-0" />
      </section>

      {/* ─────────────── MARQUEE ─────────────── */}
      <div className="overflow-hidden border-y border-amber-400/25 bg-amber-400 py-3">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="eyebrow flex items-center gap-10 text-ink-900/80">
              {item} <span className="text-ink-900/40">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─────────────── ACADEMY LABS ─────────────── */}
      <section id="academy-labs" className="relative overflow-hidden bg-ink-800 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <Reveal>
              <p className="eyebrow text-amber-400">🏛️ LearnCare Academy Interactive Portal</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-5 text-[clamp(2rem,4.4vw,3.15rem)] font-extrabold leading-[1.22] text-paper">
                ৪৭টি ফুল ইন্টারঅ্যাক্টিভ স্পোকেন মাস্টার ল্যাব
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-2xl text-[17px] leading-[2] text-mist">
                শুধু নিয়ম মুখস্থ নয় — নিজে টাইপ করে, সঠিক উচ্চারণ শুনে এবং শত শত বাক্যের বিকল্প ড্রপডাউন দেখে
                অনর্গল ইংরেজি শেখার অত্যাধুনিক ইন্টারেক্টিভ সিস্টেম।
              </p>
            </Reveal>

            <Reveal delay={200}>
              <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-white/10 bg-white/10 sm:grid-cols-4">
                {labStats.map((s) => (
                  <div key={s.label} className="bg-ink-800 p-6">
                    <dt className="font-display num text-[24px] font-bold text-amber-400">{s.value}</dt>
                    <dd className="mt-1.5 text-[13px] leading-6 text-mist">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={260}>
              <Link
                href="/tools"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-paper px-7 py-4 text-[15px] font-bold text-ink-900 transition-transform hover:-translate-y-0.5"
              >
                <span>সকল ৪৭টি একাডেমি ল্যাব ও শিট এক সাথে দেখুন</span>
                <span className="eyebrow text-ink-900/50">All 47</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={180} className="relative">
            <div className="float-slow relative aspect-[4/5] overflow-hidden rounded-[4px] border border-white/10">
              <Image
                src="/images/course-ai.jpg"
                alt="অডিও ওয়েভফর্মের আলোকিত অ্যাবস্ট্রাক্ট ভিজ্যুয়াল"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="eyebrow text-amber-400">Live Practice Engine</p>
                <p className="font-display mt-2 text-[19px] font-bold leading-snug text-paper">
                  টাইপ করুন · শুনুন · বলুন — প্রতিটি ধাপে তাৎক্ষণিক ফিডব্যাক
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── PREMIUM COURSES ─────────────── */}
      <section id="premium-courses" className="bg-paper py-20 text-ink-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 border-b border-ink-900/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Reveal>
                <p className="eyebrow text-brand-500">Premium Courses</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display mt-4 max-w-2xl text-[clamp(2rem,4.4vw,3.15rem)] font-extrabold leading-[1.2]">
                  আমাদের জনপ্রিয় কোর্সসমূহ
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-4 max-w-xl text-[17px] leading-[1.95] text-ink-900/65">
                  আপনার লক্ষ্য অনুযায়ী সঠিক কোর্সটি নির্বাচন করুন — প্রতিটি কোর্সে লাইভ ক্লাস, রেকর্ডেড লেসন,
                  অ্যাসাইনমেন্ট ও মূল্যায়ন।
                </p>
              </Reveal>
            </div>
            <Reveal delay={180}>
              <Link
                href="/courses"
                className="group inline-flex items-center gap-2 self-start rounded-full border border-ink-900/20 px-6 py-3.5 text-[15px] font-semibold transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-paper"
              >
                সকল কোর্স দেখুন
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, i) => (
              <Reveal key={course.slug} delay={i * 80}>
                <CourseCard course={course} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── METHOD ─────────────── */}
      <section className="bg-sand py-20 text-ink-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Reveal>
                <p className="eyebrow text-brand-500">The LearnCare Method</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display mt-4 text-[clamp(1.95rem,3.8vw,2.85rem)] font-extrabold leading-[1.25]">
                  মুখস্থ নয় — অভ্যাসে ইংরেজি শেখার তিন ধাপ
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-[16px] leading-[1.95] text-ink-900/70">
                  আমাদের প্রতিটি ল্যাব এই তিন ধাপের চারপাশে তৈরি — যাতে আপনি পড়া শেষে সত্যিই কথা বলতে পারেন।
                </p>
              </Reveal>
              <Reveal delay={200}>
                <Link
                  href="/tools"
                  className="mt-8 inline-flex items-center gap-2 text-[15px] font-bold text-ink-900 underline decoration-amber-400 decoration-2 underline-offset-8"
                >
                  ফ্রি ল্যাবে শুরু করুন <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>

            <ol className="space-y-px overflow-hidden rounded-[4px] border border-ink-900/12 bg-ink-900/10">
              {method.map((m, i) => (
                <Reveal as="li" key={m.n} delay={i * 90}>
                  <div className="flex gap-6 bg-paper p-7 sm:p-9">
                    <span className="num text-[15px] font-semibold text-ink-900/35">{m.n}</span>
                    <div>
                      <div className="flex items-center gap-3">
                        <m.icon className="h-5 w-5 text-brand-500" />
                        <h3 className="font-display text-[20px] font-bold">{m.title}</h3>
                      </div>
                      <p className="mt-3 max-w-xl text-[15px] leading-[1.9] text-ink-900/70">{m.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─────────────── SPOKEN FREE TOOLS ─────────────── */}
      <section id="spoken-portal" className="relative overflow-hidden bg-ink-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-amber-400">Free Tools</p>
          </Reveal>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <Reveal delay={80}>
              <h2 className="font-display max-w-2xl text-[clamp(2rem,4.2vw,3.05rem)] font-extrabold leading-[1.22] text-paper">
                স্পোকেন ইংলিশের ১০০% ফ্রি ল্যাব ও টুলস
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="max-w-md text-[16px] leading-[1.95] text-mist">
                ফ্লুয়েন্সি এবং উচ্চারণ ঠিক করার জন্য আমাদের এআই ভিত্তিক টুলস — সাইন-আপ ছাড়াই ব্যবহার করুন।
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {spokenTools.map((tool, i) => (
              <Reveal key={tool.slug} delay={(i % 3) * 80}>
                <ToolCard tool={tool} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── IELTS TOOLS ─────────────── */}
      <section id="ielts-portal" className="border-t border-white/10 bg-ink-800 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Reveal>
                <p className="eyebrow text-amber-400">IELTS Free Tools</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display mt-4 text-[clamp(1.95rem,3.9vw,2.85rem)] font-extrabold leading-[1.25] text-paper">
                  রিয়েল অডিও ট্র্যাক দিয়ে লিসেনিং ও রাইটিং প্র্যাকটিস
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 max-w-lg text-[16px] leading-[1.95] text-mist">
                  Cambridge 9-20 এর আসল অডিও, অটো-স্কোরিং মক টেস্ট এবং AI রাইটিং মূল্যায়ন — সবই এক জায়গায়।
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-9 overflow-hidden rounded-[4px] border border-white/10">
                  <div className="relative aspect-[3/2]">
                    <Image
                      src="/images/course-ielts.jpg"
                      alt="IELTS প্রস্তুতির বই, হেডফোন ও চশমা"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-800/90 to-ink-800/10" />
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {ieltsTools.map((tool, i) => (
                <Reveal key={tool.slug} delay={(i % 2) * 80}>
                  <ToolCard tool={tool} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── WHATSAPP CTA ─────────────── */}
      <section className="relative overflow-hidden bg-amber-400 py-16 text-ink-900">
        <div className="rule-dots pointer-events-none absolute inset-0 text-ink-900/25" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 text-center sm:px-8 lg:flex-row lg:justify-between lg:text-left">
          <div>
            <p className="eyebrow text-ink-900/70">WhatsApp Support · 10AM – 10PM</p>
            <h2 className="font-display mt-3 text-[clamp(1.85rem,3.6vw,2.65rem)] font-extrabold leading-[1.25]">
              যেকোনো তথ্যে WhatsApp করুন
            </h2>
            <p className="mt-3 text-[16px] text-ink-900/75">
              কোর্স নির্বাচন থেকে ভর্তি ও পেমেন্ট — সব প্রশ্নের উত্তর পাবেন এক জায়গায়।
            </p>
          </div>
          <a
            href="https://wa.me/8801714740430"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-col items-center gap-1 rounded-[4px] bg-ink-900 px-10 py-7 text-paper transition-transform hover:-translate-y-1"
          >
            <span className="eyebrow text-amber-400">Call / WhatsApp</span>
            <span className="num text-[clamp(1.65rem,3.4vw,2.35rem)] font-bold leading-none">01714-740430</span>
          </a>
        </div>
      </section>
    </>
  );
}
