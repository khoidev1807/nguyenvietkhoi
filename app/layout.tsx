import ModalProvider from "@/providers/ModalProvider";
import NextThemeProvider from "./../providers/theme-provider";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nguyen Viet Khoi",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ModalProvider/>
          <div className="grid grid-cols-10 min-h-screen bg-gradient-to-b from-[#6dd3e7] to-[#fefefe] dark:bg-gradient-to-b dark:from-black dark:from-35% dark:to-stone-900">
            <div className="hidden sm:block sm:col-span-1 2xl:col-span-2 " />
            <div className="col-span-full sm:col-span-8 2xl:col-span-6 ">
              {children}
            </div>
            <div className="hidden sm:block sm:col-span-1 2xl:col-span-2 " />
          </div>
        </NextThemeProvider>
      </body>
    </html>
  );
}
