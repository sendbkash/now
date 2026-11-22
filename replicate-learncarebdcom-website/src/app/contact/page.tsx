import { MessageCircle, Phone, Mail, Clock, MapPin, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const dynamic = "force-dynamic";

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "01714-740430",
    note: "দ্রুততম সাড়া — সাধারণত ১৫ মিনিটের মধ্যে",
    href: "https://wa.me/8801714740430",
  },
  {
    icon: Phone,
    label: "কল সেন্টার",
    value: "01714-740430",
    note: "প্রতিদিন সকাল ১০টা – রাত ১০টা",
    href: "tel:+8801714740430",
  },
  {
    icon: Mail,
    label: "ইমেইল",
    value: "support@learncarebd.com",
    note: "২৪ ঘণ্টার মধ্যে উত্তর",
    href: "mailto:support@learncarebd.com",
  },
];

const faqs = [
  {
    q: "কোর্সে ভর্তি হতে কী কী লাগবে?",
    a: "শুধু আপনার নাম, মোবাইল নম্বর এবং একটি স্মার্টফোন বা কম্পিউটার। ভর্তির পর আমাদের টিম WhatsApp-এ ক্লাস শিডিউল ও পেমেন্ট নির্দেশনা পাঠাবে।",
  },
  {
    q: "ফ্রি টুলস ব্যবহার করতে কি অ্যাকাউন্ট লাগবে?",
    a: "না। ৪৭টি ইন্টারঅ্যাক্টিভ ল্যাবের অধিকাংশই সাইন-আপ ছাড়াই ব্যবহার করা যায়। তবে অগ্রগতি সংরক্ষণ ও AI মূল্যায়নের রিপোর্ট রাখতে অ্যাকাউন্ট সুবিধাজনক।",
  },
  {
    q: "ক্লাস লাইভ নাকি রেকর্ডেড?",
    a: "দুটোই। সপ্তাহে নির্ধারিত লাইভ ক্লাস থাকে এবং প্রতিটি লেসনের রেকর্ডিং পরে অ্যাকাউন্টে পাওয়া যায়, যাতে আপনি নিজের সময়মতো অনুশীলন করতে পারেন।",
  },
  {
    q: "IELTS Band 7.5+ পেতে কত সময় লাগে?",
    a: "বর্তমান দক্ষতার উপর নির্ভর করে সাধারণত ৩–৬ মাস নিয়মিত অনুশীলন প্রয়োজন। আমাদের ডায়াগনস্টিক টেস্টের পর ব্যক্তিগত স্টাডি প্ল্যান দেওয়া হয়।",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-ink-800 pt-[128px] pb-16">
        <div className="rule-dots pointer-events-none absolute inset-x-0 top-28 h-24 text-white/10" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-amber-400">Contact &amp; Support</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display mt-4 max-w-3xl text-[clamp(2.15rem,5vw,3.5rem)] font-extrabold leading-[1.18] text-paper">
              আমাদের সাথে কথা বলুন — আমরা আছি পাশে
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-2xl text-[17px] leading-[1.95] text-mist">
              কোর্স নির্বাচন, ভর্তি, পেমেন্ট বা টেকনিক্যাল সহায়তা — যেকোনো প্রশ্নে আমাদের সাপোর্ট টিম প্রস্তুত।
            </p>
          </Reveal>
        </div>
      </section>

      <section id="support" className="bg-paper py-16 text-ink-900 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow text-brand-500">Direct channels</p>
            </Reveal>
            <div className="mt-6 space-y-4">
              {channels.map((c, i) => (
                <Reveal key={c.label} delay={i * 80}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 rounded-[4px] border border-ink-900/12 bg-white p-5 transition-colors hover:border-brand-500/50"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-900 text-amber-400">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="eyebrow block text-ink-900/50">{c.label}</span>
                      <span className="num mt-1 block text-[18px] font-semibold">{c.value}</span>
                      <span className="mt-1 block text-[13px] text-ink-900/60">{c.note}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={160}>
              <div className="mt-6 rounded-[4px] border border-ink-900/12 bg-white p-6">
                <p className="flex items-center gap-2 text-[15px] font-semibold">
                  <Clock className="h-4 w-4 text-brand-500" /> সাপোর্ট সময়: প্রতিদিন সকাল ১০টা – রাত ১০টা
                </p>
                <p className="mt-3 flex items-center gap-2 text-[15px]">
                  <MapPin className="h-4 w-4 text-brand-500" /> ঢাকা, বাংলাদেশ · অনলাইন ক্লাস কন্ট্রোল
                </p>
                <p className="mt-3 flex items-center gap-2 text-[15px]">
                  <ShieldCheck className="h-4 w-4 text-brand-500" /> আপনার তথ্য কেবল ভর্তি ও সাপোর্টের জন্য ব্যবহৃত হয়
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-sand py-16 text-ink-900 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-brand-500">FAQ</p>
            <h2 className="font-display mt-4 text-[clamp(1.9rem,3.6vw,2.65rem)] font-extrabold leading-[1.25]">
              সাধারণ জিজ্ঞাসা
            </h2>
          </Reveal>

          <div className="mt-9 space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 70}>
                <details className="group rounded-[4px] border border-ink-900/12 bg-white p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-semibold">
                    {f.q}
                    <span className="text-[22px] leading-none text-brand-500 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[15px] leading-[1.95] text-ink-900/70">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
