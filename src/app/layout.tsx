import type { Metadata } from "next";
import type { Viewport } from 'next'
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
  title: "Time tracker",
  description: "App to track time",
};

export const viewport: Viewport = {
  width: "device-width, shrink-to-fit=no",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overscroll-none`}
      >
        {children}
      </body>
    </html>
  );
}
