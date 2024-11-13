import type { Metadata } from "next";
import localFont from "next/font/local";
// import { Inter_Tight } from "next/font/google";
import "./globals.css";
import React from "react";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import ThemeContextProvider from "@/context/ThemeContext";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/ThemeSwitch";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const satoshi = localFont({
  src: "./fonts/satoshi.ttf",
  variable: "--font-satoshi",
  weight: "400",
});

const satoshiBold = localFont({
  src: "./fonts/satoshi-bold.ttf",
  variable: "--font-satoshi-bold",
  weight: "700",
});

const satoshiItalic = localFont({
  src: "./fonts/satoshi-italic.ttf",
  variable: "--font-satoshi-italic",
  weight: "400",
  style: "italic",
});
// const interTight  = Inter_Tight()
export const metadata: Metadata = {
  robots: {
    follow: true,
    index: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "favicon.ico",
  },
  title:
    "Adam Gordon | Software Developer - Bachelor of Science in Computer Programming and Information Systems from Farmingdale State College",
  description:
    "Professional portfolio of Adam Gordon, Software Developer and college graduate from Farmingdale State College, 2022",
  authors: [{ name: "Adam Gordon" }],
  openGraph: {
    title:
      "Adam Gordon | Software Developer - Bachelor of Science in Computer Programming and Information Systems from Farmingdale State College",
    description:
      "Professional portfolio of Adam Gordon, Software Developer and college graduate from Farmingdale State College, 2022",
    type: "website",
    url: "https://www.adam-gordon.info",
    countryName: "United States",
    locale: "en_US",
    images: ["@/public/portrait.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${satoshiBold.variable} ${satoshiItalic.variable} relative z-0 bg-gray-50  pt-28 text-gray-950 antialiased dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        {" "}
        <ActiveSectionContextProvider>
          <ThemeContextProvider>
            {" "}
            <div
              className="fixed inset-0 -z-10 bg-landing-pattern bg-cover bg-no-repeat opacity-25"
              aria-hidden="true"
            ></div>
            <div className="absolute -top-24 right-44 -z-10 size-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
            <div className="absolute -top-4 left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:-left-60 2xl:-left-20"></div>
            <div className="relative z-10">
              {" "}
              <Header />
              {children}
              <ThemeSwitch /> <Footer />
            </div>
            <Toaster position="top-right" />
          </ThemeContextProvider>
        </ActiveSectionContextProvider>
      </body>{" "}
    </html>
  );
}
