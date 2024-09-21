import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const fira = Fira_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-stone-200 ${fira.className}`}>
        <main className="w-[95%]sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
          <Navbar/>
        {children}

        </main>
        
      </body>
    </html>
  );
}