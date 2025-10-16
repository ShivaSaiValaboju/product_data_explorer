import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "World of Books Explorer",
  description: "Explore and discover books from World of Books' vast collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <footer className="border-t py-6 text-center text-sm text-gray-600">
          <div className="container mx-auto px-4">
            © {new Date().getFullYear()} World of Books Explorer. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
