import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: "Aathil Felix Portfolio",
  description: "Portfolio of Aathil Felix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased max-w-2xl mx-auto pt-12 sm:pt-16 pb-6 sm:pb-8 px-6 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black`}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <main className="flex flex-col min-h-100dvh space-y-8 ">
            {children}
          </main>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
