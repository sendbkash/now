"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";

const links = [
  { href: "/", label: "হোম" },
  { href: "/courses", label: "কোর্সসমূহ" },
  { href: "/tools", label: "ফ্রি টুলস" },
  { href: "/#academy-labs", label: "একাডেমি ল্যাব" },
  { href: "/contact", label: "যোগাযোগ" },
];



export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink-900/95 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-ink-900/85 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center gap-6 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-9 w-9" />
          <span className="leading-tight">
            <span className="font-display block text-[17px] font-bold tracking-tight text-paper">
              LearnCare <span className="text-amber-400">Academy</span>
            </span>
            <span className="eyebrow block text-[9px] text-mist">Spoken &amp; IELTS · AI Learning</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] text-paper/75 transition-colors hover:text-amber-400"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/8801714740430"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto hidden items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-[14px] font-semibold text-ink-900 transition-transform hover:-translate-y-0.5 lg:ml-0 lg:flex"
        >
          <Phone className="h-4 w-4" /> 01714-740430
        </a>

        <button
          type="button"
          aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto rounded-full border border-white/15 p-2 text-paper lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink-900/98 px-5 pb-6 pt-2 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-[16px] text-paper/85"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/8801714740430"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3 font-semibold text-ink-900"
          >
            <Phone className="h-4 w-4" /> WhatsApp: 01714-740430
          </a>
        </div>
      )}
    </header>
  );
}
