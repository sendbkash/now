import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "LearnCare Academy — স্পোকেন ইংলিশ ও IELTS এআই লার্নিং প্ল্যাটফর্ম",
  description:
    "সঠিক ব্রিটিশ উচ্চারণ (IPA), New Headway ডিকটেশন, Cambridge 9-20 রিয়েল অডিও টেস্ট এবং AI স্পিকিং-রাইটিং মূল্যায়নে সাবলীল ইংরেজি শিখুন ঘরে বসেই।",
  keywords: [
    "spoken english bangladesh",
    "IELTS preparation bd",
    "LearnCare Academy",
    "AI english learning",
    "pronunciation IPA",
  ],
};

const fonts = [
  "https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap",
  "https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@400;500;600;700;800&display=swap",
  "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap",
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="bn">
      <head>
        {fonts.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body className="min-h-screen bg-ink-900 text-paper antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
