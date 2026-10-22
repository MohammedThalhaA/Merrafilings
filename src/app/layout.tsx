import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MerraFilings | India's Leading Corporate Services & CA Compliance Advisory",
  description:
    "Join thousands of entrepreneurs who trust MerraFilings for company registration, GST return filing, MCA secretarial compliance, and trademark protection handled by certified Chartered Accountants and Company Secretaries.",
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
    "chartered accountant services",
  ],
};

import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-screen bg-white text-[#111827] font-sans antialiased selection:bg-[#155EEF]/10 selection:text-[#155EEF]">
        <ScrollRevealProvider>{children}</ScrollRevealProvider>
      </body>
    </html>
  );
}
