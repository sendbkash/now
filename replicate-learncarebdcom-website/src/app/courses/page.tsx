import Link from "next/link";
import { getCourses } from "@/db/queries";
import { CourseCard } from "@/components/CourseCard";
import { Reveal } from "@/components/Reveal";

export const dynamic = "force-dynamic";

const filters = [
  { key: "all", label: "সকল কোর্স" },
  { key: "spoken", label: "স্পোকেন ইংলিশ" },
  { key: "ielts", label: "IELTS" },
  { key: "grammar", label: "গ্রামার" },
  { key: "vocabulary", label: "ভোকাবুলারি" },
];

export default async function CoursesPage(props: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category = "all" } = await props.searchParams;
  const active = filters.some((f) => f.key === category) ? category : "all";
  const courses = await getCourses(active);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-ink-800 pt-[128px] pb-16">
        <div className="rule-dots pointer-events-none absolute inset-x-0 top-24 h-24 text-white/10" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-amber-400">Premium Courses</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display mt-4 max-w-3xl text-[clamp(2.15rem,5vw,3.5rem)] font-extrabold leading-[1.18] text-paper">
              আপনার লক্ষ্য অনুযায়ী সঠিক কোর্সটি নির্বাচন করুন
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-2xl text-[17px] leading-[1.95] text-mist">
              লাইভ ক্লাস, রেকর্ডেড লেসন, ইন্টারঅ্যাক্টিভ ল্যাব, অ্যাসাইনমেন্ট ফিডব্যাক এবং কোর্স শেষে সার্টিফিকেট
              — সব একসাথে।
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap gap-2.5">
              {filters.map((f) => {
                const isActive = f.key === active;
                return (
                  <Link
                    key={f.key}
                    href={f.key === "all" ? "/courses" : `/courses?category=${f.key}`}
                    className={`rounded-full px-5 py-2.5 text-[14px] font-semibold transition-colors ${
                      isActive
                        ? "bg-amber-400 text-ink-900"
                        : "border border-white/15 text-paper/80 hover:border-amber-400/60 hover:text-amber-400"
                    }`}
                  >
                    {f.label}
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-16 text-ink-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow text-ink-900/50">
            {courses.length} টি কোর্স · {filters.find((f) => f.key === active)?.label}
          </p>

          {courses.length === 0 ? (
            <div className="mt-10 rounded-[4px] border border-dashed border-ink-900/25 p-12 text-center">
              <p className="font-display text-[20px] font-bold">এই ক্যাটাগরিতে এখনো কোর্স যোগ করা হয়নি।</p>
              <Link
                href="/courses"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-[15px] font-semibold text-paper"
              >
                সকল কোর্স দেখুন
              </Link>
            </div>
          ) : (
            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course, i) => (
                <Reveal key={course.slug} delay={(i % 3) * 80}>
                  <CourseCard course={course} index={i} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
