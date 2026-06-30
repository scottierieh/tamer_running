import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TAMER RUNNING — Running should be FUN",
  description:
    "테이머 러닝 커뮤니티. RUN · TRAIN · SPRINT. 러닝의 새로운 재미를 함께하는 러닝 크루.",
  keywords: ["러닝", "러닝크루", "TAMER", "스프린트", "트레이닝", "running crew"],
  openGraph: {
    title: "TAMER RUNNING — Running should be FUN",
    description: "RUN · TRAIN · SPRINT — 러닝의 새로운 재미",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
