import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Isayas Melkamu | Full-Stack Software Developer",
  description:
    "Portfolio of Isayas Melkamu — Full-Stack Software Developer specializing in Next.js, React Native, Node.js, TypeScript, and PostgreSQL/MongoDB.",
  keywords: [
    "Isayas Melkamu",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Native Developer",
    "Node.js",
    "TypeScript",
    "Ethiopia",
    "Portfolio",
  ],
  authors: [{ name: "Isayas Melkamu" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className="min-h-screen bg-slate-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 relative antialiased selection:bg-emerald-500/30 selection:text-emerald-400 font-sans"
      >
        <div className="gradient-bg" aria-hidden="true">
          <div className="vignette"></div>
        </div>

        <ThemeContextProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ThemeSwitch />
          </div>
          <Toaster position="top-right" />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
