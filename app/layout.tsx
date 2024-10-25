
import type { Metadata } from "next";
import "./globals.css";
import { geist } from "./lib/font";
import Nav from "@/components/sections/nav";

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
      <body className={`${geist.variable} `}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
