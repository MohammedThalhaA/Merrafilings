import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MerraFilings | India's Largest AI-Powered Corporate Services & Compliance Platform",
  description:
    "Join millions who trust MerraFilings to simplify MCA, GST, and Income Tax compliance with AI automation, expert support, paperless workflows, and secure cloud storage.",
  keywords: [
    "company registration",
    "private limited company",
    "GST registration",
    "GST filing",
    "income tax return",
    "ITR filing",
    "trademark registration",
    "MCA compliance",
    "ROC filings",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${newsreader.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-screen bg-white text-[#111827] font-sans antialiased selection:bg-[#155EEF]/10 selection:text-[#155EEF]">
        {children}
      </body>
    </html>
  );
}
