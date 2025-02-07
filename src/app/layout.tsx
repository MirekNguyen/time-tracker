import type { Metadata } from "next";
import type { Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Navbar } from "@/components/navbar/Navbar";
import { CurrentUser } from "@/components/navbar/CurrentUser";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased overscroll-none`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
            <SignedIn>
              <Navbar>
                <CurrentUser />
              </Navbar>
              {children}
            </SignedIn>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
