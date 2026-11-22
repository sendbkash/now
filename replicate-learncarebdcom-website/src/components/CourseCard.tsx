import Link from "next/link";
import Image from "next/image";
import { Star, Clock, BookOpen, ArrowRight } from "lucide-react";
import type { Course } from "@/db/schema";

const categoryLabel: Record<string, string> = {
  spoken: "স্পোকেন ইংলিশ",
  ielts: "IELTS",
  grammar: "গ্রামার",
  vocabulary: "ভোকাবুলারি",
};

export function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[4px] border border-ink-900/12 bg-white shadow-[0_1px_0_rgba(10,18,36,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-ink-900/25 hover:shadow-[0_24px_50px_-24px_rgba(10,18,36,0.4)]">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
          <span className="eyebrow rounded-full bg-amber-400 px-3 py-1 text-[9px] text-ink-900">
            {categoryLabel[course.category] ?? course.category}
          </span>
          <span className="num flex items-center gap-1 rounded-full bg-ink-900/70 px-2.5 py-1 text-[12px] text-paper backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            {(course.rating / 10).toFixed(1)}
          </span>
        </div>
        <span className="num absolute left-4 top-4 text-[11px] tracking-[0.24em] text-paper/70">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[20px] font-bold leading-[1.3] text-ink-900">{course.title}</h3>
        <p className="mt-1.5 text-[14px] leading-6 text-ink-900/65">{course.subtitle}</p>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-ink-900/70">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-brand-500" /> {course.durationWeeks} সপ্তাহ
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5 text-brand-500" /> {course.lessons} লেসন
          </span>
          <span className="num text-ink-900/55">{course.students.toLocaleString("en-US")} শিক্ষার্থী</span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-ink-900/10 pt-4">
          <div>
            <p className="num text-[24px] font-semibold leading-none text-ink-900">
              ৳{course.price.toLocaleString("en-US")}
            </p>
            {course.oldPrice ? (
              <p className="num mt-1 text-[13px] text-ink-900/45 line-through">
                ৳{course.oldPrice.toLocaleString("en-US")}
              </p>
            ) : null}
          </div>
          <Link
            href={`/courses/${course.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-[14px] font-semibold text-paper transition-colors hover:bg-brand-500"
          >
            বিস্তারিত <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
