import Link from "next/link";
import { MessageCircle, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";

const columns = [
  {
    title: "শেখার পথ",
    links: [
      { href: "/courses", label: "সকল কোর্স" },
      { href: "/courses?category=spoken", label: "স্পোকেন ইংলিশ" },
      { href: "/courses?category=ielts", label: "IELTS প্রস্তুতি" },
      { href: "/courses?category=grammar", label: "গ্রামার একাডেমি" },
    ],
  },
  {
    title: "ফ্রি টুলস",
    links: [
      { href: "/tools", label: "সকল ল্যাব ও টুলস" },
      { href: "/tools#spoken", label: "স্পোকেন ল্যাব" },
      { href: "/tools#ielts", label: "IELTS টুলস" },
      { href: "/#academy-labs", label: "৪৭টি মাস্টার ল্যাব" },
    ],
  },
  {
    title: "প্রতিষ্ঠান",
    links: [
      { href: "/contact", label: "যোগাযোগ" },
      { href: "/contact#support", label: "সাপোর্ট সেন্টার" },
      { href: "/courses", label: "ভর্তি প্রক্রিয়া" },
      { href: "/contact#faq", label: "সাধারণ জিজ্ঞাসা" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-800">
      <div className="rule-dots pointer-events-none absolute inset-x-0 top-0 h-px text-white/25" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <div>
              <p className="font-display text-lg font-bold">
                LearnCare <span className="text-amber-400">Academy</span>
              </p>
              <p className="eyebrow text-[9px] text-mist">Est. 2023 · Dhaka, Bangladesh</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-[15px] leading-7 text-mist">
            ব্রিটিশ উচ্চারণ, নিউ হেডওয়ে ডিকটেশন, Cambridge 9-20 রিয়েল অডিও টেস্ট এবং AI মূল্যায়নের মাধ্যমে ঘরে
            বসেই সাবলীল ইংরেজি শেখার নির্ভরযোগ্য প্ল্যাটফর্ম।
          </p>
          <div className="mt-6 space-y-2 text-[14px] text-paper/80">
            <a
              href="https://wa.me/8801714740430"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-amber-400"
            >
              <MessageCircle className="h-4 w-4 text-amber-400" /> WhatsApp: 01714-740430
            </a>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-amber-400" /> support@learncarebd.com
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber-400" /> ঢাকা, বাংলাদেশ
            </p>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="eyebrow text-amber-400">{col.title}</p>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-[15px] text-mist transition-colors hover:text-paper"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-[13px] text-mist sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} LearnCare Academy. সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="num">47 Labs · 900+ Sentence Forms · 500 Verb Engine</p>
        </div>
      </div>
    </footer>
  );
}
