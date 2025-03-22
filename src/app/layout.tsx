
import type { Metadata } from "next";
import { Inter, Space_Grotesk, Instrument_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: "Aadithya Krishnan P",
  description: "A modern developer portfolio showcasing my work and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${instrumentSans.variable} scroll-smooth`}>
  <body className="relative min-h-screen bg-black text-white selection:bg-indigo-500/90 selection:text-white/90 font-sans">

        <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" />
        <div className="fixed inset-0 z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />
        <div className="fixed inset-0 z-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/50" />
        </div>
        <main className="relative z-20">
          {children}
        </main>
      </body>
    </html>
  );
}
