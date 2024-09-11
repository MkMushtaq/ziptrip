// 'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";
import { DM_Sans } from '@next/font/google';
import { TooltipProvider } from "@/components/ui/tooltip";
const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZipTrip",
  description: "Generate beautiful travel itinerary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <TooltipProvider>
          <AppShell>
            {children}
          </AppShell>
        </TooltipProvider>
      </body>
    </html>
  );
}
