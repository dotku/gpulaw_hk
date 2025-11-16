import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GPULaw - AI 驅動嘅法律協助 | 律師網絡",
  description: "GPULaw 結合先進嘅 AI 法律協助與執業律師。喺婚姻家庭、僱傭糾紛、物業糾紛、合約糾紛、交通意外同知識產權等領域獲得即時法律指導。提供 24/7 AI 支援同律師諮詢服務。",
  keywords: ["法律AI", "律師諮詢", "法律協助", "AI律師", "法律幫助", "婚姻家庭", "僱傭糾紛", "物業糾紛", "香港法律", "GPULaw"],
  authors: [{ name: "GPULaw Technologies, Inc." }],
  creator: "GPULaw Technologies, Inc.",
  publisher: "GPULaw Technologies, Inc.",
  applicationName: "GPULaw",
  generator: "Next.js",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "GPULaw - AI 驅動嘅法律協助",
    description: "將 AI 工具與經驗豐富嘅律師相結合嘅平價法律會員服務",
    url: '/',
    siteName: "GPULaw",
    type: "website",
    locale: "zh_HK",
  },
  twitter: {
    card: "summary_large_image",
    title: "GPULaw - AI 驅動嘅法律協助",
    description: "透過 AI + 律師服務獲得即時法律指導",
    creator: "@gpulaw",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e40af' },
    { media: '(prefers-color-scheme: dark)', color: '#1e3a8a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
