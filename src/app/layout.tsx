import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/smooth-scroll";
import CustomCursor from "@/components/ui/custom-cursor";
import LoadingScreen from "@/components/ui/loading-screen";
import Navbar from "@/components/ui/navbar";
import { CommandMenu } from "@/components/ui/command-menu";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "G Guru Prasad | AI & Machine Learning Engineer",
  description: "Portfolio of G Guru Prasad, an Artificial Intelligence & Machine Learning Engineer specializing in Computer Vision, Generative AI, and RAG pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col selection:bg-red-500/30 selection:text-red-500">
        <LoadingScreen />
        <CustomCursor />
        <SmoothScrollProvider>
          <Navbar />
          <CommandMenu />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
