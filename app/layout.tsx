import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/layout/page-transition";
import { ParticlesBg } from "@/components/ui/particles-bg";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Derek Campbell | IT Technician",
  description:
    "Portfolio of Derek Campbell — IT Technician specializing in data center operations, network infrastructure, and cloud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-background text-foreground">
        <ParticlesBg />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <PageTransition>
            <main className="flex-1 pt-24">{children}</main>
          </PageTransition>
          <Footer />
        </div>
      </body>
    </html>
  );
}
