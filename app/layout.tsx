import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import type { Metadata } from "next";
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
  title: "SmackQdev",
  description: "Frontend Developer Portfolio",
  openGraph: {
    title: "SmackQdev",
    description: "Frontend Developer Portfolio",
    url: "https://smackq.space",
    siteName: "SmackQdev",
    images: [
      {
        url: "https://smackq.space/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="max-w-3xl mx-auto w-full">
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
