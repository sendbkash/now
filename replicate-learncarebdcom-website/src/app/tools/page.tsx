import Link from "next/link";
import { getTools } from "@/db/queries";
import { ToolCard } from "@/components/ToolCard";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export const dynamic = "force-dynamic";

const tabs = [
  { key: "all", label: "সকল টুলস" },
  { key: "spoken", label: "স্পোকেন ল্যাব" },
  { key: "ielts", label: "IELTS টুলস" },
];

const benefits = [
  { value: "১০০%", label: "ফ্রি — কোনো সাবস্ক্রিপশন নেই" },
  { value: "AI", label: "রিয়েল-টাইম উচ্চারণ ও রাইটিং মূল্যায়ন" },
  { value: "২৪/৭", label: "যেকোনো সময়, যেকোনো ডিভাইস থেকে" },
];

export default async function ToolsPage(props: { searchParams: Promise<{ category?: string }> }) {
  const { category = "all" } = await props.searchParams;
  const active = tabs.some((t) => t.key === category) ? category : "all";
  const tools = await getTools(active);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-ink-900 pt-[128px] pb-16">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-amber-400">Free Tools &amp; Interactive Labs</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display mt-4 max-w-3xl text-[clamp(2.15rem,5vw,3.5rem)] font-extrabold leading-[1.18] text-paper">
              স্পোকেন ইংলিশ ও IELTS-এর ১০০% ফ্রি ল্যাব
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-2xl text-[17px] leading-[1.95] text-mist">
              টাইপ করুন, শুনুন, বলুন এবং সাথে সাথে ফিডব্যাক পান। সাইন-আপ ছাড়াই সব টুল ব্যবহার করা যায়।
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap gap-2.5">
              {tabs.map((t) => {
                const isActive = t.key === active;
                return (
                  <Link
                    key={t.key}
                    href={t.key === "all" ? "/tools" : `/tools?category=${t.key}`}
                    className={`rounded-full px-5 py-2.5 text-[14px] font-semibold transition-colors ${
                      isActive
                        ? "bg-amber-400 text-ink-900"
                        : "border border-white/15 text-paper/80 hover:border-amber-400/60 hover:text-amber-400"
                    }`}
                  >
                    {t.label}
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-white/10 bg-ink-800 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-3 sm:px-8">
          {benefits.map((b) => (
            <div key={b.label} className="flex items-center gap-4">
              <span className="font-display num text-[28px] font-bold text-amber-400">{b.value}</span>
              <span className="text-[15px] leading-7 text-mist">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow text-mist">
            {tools.length} টি টুল · {tabs.find((t) => t.key === active)?.label}
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, i) => (
              <Reveal key={tool.slug} delay={(i % 3) * 70}>
                <ToolCard tool={tool} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 flex flex-col items-start gap-6 rounded-[4px] border border-amber-400/25 bg-amber-400/10 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="eyebrow text-amber-400">Ready for the next step?</p>
                <h2 className="font-display mt-3 text-[26px] font-extrabold leading-snug text-paper">
                  ফ্রি টুলস দিয়ে শুরু করুন, তারপর সিরিয়াস প্রস্তুতিতে যান
                </h2>
              </div>
              <Link
                href="/courses"
                className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-[15px] font-bold text-ink-900 transition-transform hover:-translate-y-0.5"
              >
                কোর্স দেখুন
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
