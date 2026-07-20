import type { Metadata } from "next";
import { Poppins, Great_Vibes } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Walimatul Khitan bi Khotmil Quran - Daffa Ibnu Hafidz",
  description: "Undangan digital Walimatul Khitan bi Khotmil Quran Daffa Ibnu Hafidz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} ${greatVibes.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-sage-50 text-sage-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
