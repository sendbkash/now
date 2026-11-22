import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, BookOpen, Users, Star, Check, ChevronRight, GraduationCap } from "lucide-react";
import { getCourses, getCourseBySlug } from "@/db/queries";
import { EnrollForm } from "@/components/EnrollForm";
import { CourseCard } from "@/components/CourseCard";
import { Reveal } from "@/components/Reveal";

export const dynamic = "force-dynamic";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const course = await getCourseBySlug(slug);
  return {
    title: course
      ? `${course.title} — LearnCare Academy`
      : "কোর্স পাওয়া যায়নি — LearnCare Academy",
    description: course?.subtitle,
  };
}

export default async function CourseDetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const course = await getCourseBySlug(slug);
  if (!course) notFound();

  const related = (await getCourses(course.category)).filter((c) => c.slug !== course.slug).slice(0, 3);
  const curriculum = course.curriculum ?? [];
  const highlights = course.highlights ?? [];

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-ink-800 pt-[128px] pb-16">
        <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="46vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-800 via-ink-800/70 to-ink-800/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <nav className="flex items-center gap-2 text-[13px] text-mist">
            <Link href="/" className="transition-colors hover:text-amber-400">
              হোম
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/courses" className="transition-colors hover:text-amber-400">
              কোর্সসমূহ
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-paper/80">{course.title}</span>
          </nav>

          <div className="mt-8 max-w-3xl">
            <span className="eyebrow rounded-full border border-amber-400/35 bg-amber-400/10 px-4 py-1.5 text-amber-400">
              {course.level}
            </span>
            <h1 className="font-display mt-6 text-[clamp(2.1rem,4.8vw,3.35rem)] font-extrabold leading-[1.2] text-paper">
              {course.title}
            </h1>
            <p className="mt-4 text-[18px] text-amber-400">{course.subtitle}</p>
            <p className="mt-5 max-w-2xl text-[16px] leading-[1.95] text-mist">{course.description}</p>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-[14px] text-paper/85">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-400" />
                <span className="num">{course.durationWeeks} সপ্তাহ</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-amber-400" />
                <span className="num">{course.lessons} লেসন</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-amber-400" />
                <span className="num">{course.students.toLocaleString("en-US")} শিক্ষার্থী</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="num">{(course.rating / 10).toFixed(1)} / 5.0</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-amber-400" />
                <span>{course.instructor}</span>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 text-ink-900 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-[26px] font-extrabold leading-snug">এই কোর্সে যা যা পাবেন</h2>
            </Reveal>
            <Reveal delay={80}>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-[3px] border border-ink-900/12 bg-white p-4 text-[15px] leading-7"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand-500" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={140}>
              <h2 className="font-display mt-14 text-[26px] font-extrabold leading-snug">কোর্স কারিকুলাম</h2>
            </Reveal>
            <Reveal delay={180}>
              <ol className="mt-6 divide-y divide-ink-900/12 overflow-hidden rounded-[4px] border border-ink-900/12 bg-white">
                {curriculum.map((mod, i) => (
                  <li key={mod.module} className="flex flex-wrap items-center gap-4 p-5">
                    <span className="num text-[13px] font-semibold text-brand-500">{mod.module}</span>
                    <div className="min-w-[180px] flex-1">
                      <p className="text-[16px] font-semibold">{mod.title}</p>
                      <p className="num mt-1 text-[13px] text-ink-900/55">
                        {mod.lessons} লেসন · {mod.hours}
                      </p>
                    </div>
                    <span className="num text-[13px] text-ink-900/45">{String(i + 1).padStart(2, "0")}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 rounded-[4px] border border-ink-900/12 bg-white p-7">
                <p className="eyebrow text-brand-500">Instructor</p>
                <p className="font-display mt-3 text-[20px] font-bold">{course.instructor}</p>
                <p className="mt-3 text-[15px] leading-[1.9] text-ink-900/70">
                  LearnCare Academy-এর ফ্যাকাল্টি টিম প্রতিটি লেসন বাংলা ও ইংরেজি দুই ভাষায় পরিচালনা করে এবং
                  সপ্তাহে নির্দিষ্ট সময়ে ডাউট-সলভিং সেশনে উপস্থিত থাকে।
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:sticky lg:top-[96px] lg:self-start">
            <EnrollForm courseId={course.id} courseTitle={course.title} />
            <div className="mt-6 rounded-[4px] border border-ink-900/12 bg-white p-6">
              <p className="eyebrow text-ink-900/50">Course Fee</p>
              <div className="mt-3 flex items-end gap-3">
                <p className="num text-[34px] font-bold leading-none">
                  ৳{course.price.toLocaleString("en-US")}
                </p>
                {course.oldPrice ? (
                  <p className="num text-[16px] text-ink-900/45 line-through">
                    ৳{course.oldPrice.toLocaleString("en-US")}
                  </p>
                ) : null}
              </div>
              <ul className="mt-5 space-y-2 text-[14px] text-ink-900/70">
                <li>• লাইফটাইম রেকর্ডেড অ্যাক্সেস</li>
                <li>• কোর্স শেষে সার্টিফিকেট</li>
                <li>• সাপ্তাহিক অ্যাসাইনমেন্ট মূল্যায়ন</li>
                <li>• WhatsApp সাপোর্ট (10AM – 10PM)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="bg-sand py-16 text-ink-900 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <h2 className="font-display text-[26px] font-extrabold">সম্পর্কিত কোর্সসমূহ</h2>
            </Reveal>
            <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c, i) => (
                <Reveal key={c.slug} delay={i * 80}>
                  <CourseCard course={c} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
