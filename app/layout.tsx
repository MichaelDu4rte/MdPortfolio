import "./globals.css";
import { Inter } from "next/font/google";

import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Michael | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`$inter.className bg-gray-50 text-gray-950 relative pt-10 sm:pt-10`}
      >
        <div
          className="bg-[#e2e3fb] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem]
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
        ></div>
        <div
          className="bg-[#e5d7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem]
        w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2x1:left-[-5rem]"
        ></div>
        <Header></Header>

        {children}
      </body>
    </html>
  );
}
