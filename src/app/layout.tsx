import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/smooth";

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
    <html lang="en" className="">
      <SmoothScroll>
        <body>{children}</body>
      </SmoothScroll>
    </html>
  );
}
