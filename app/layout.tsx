import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Isayas | Personal Portfolio",
  description: "Isayas is an experienced Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className} overflow-x-hidden bg-gray-200 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 `}
        >
          <div className="-z-20 dark:bg-[#ac52a0] absolute top-[-6rem] right-[1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
          <div className="-z-20 dark:bg-[#3c6385] absolute top-[-1rem] left-[-30rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

          <ThemeContextProvider>
            <Navbar />
            {children}

            <Toaster position="top-right" />
            <ThemeSwitch />
            <Footer />
          </ThemeContextProvider>
        </body>
      </html>
    </html>
  );
}
