import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Airavat - Global B2B Marketplace",
  description: "Connect with verified suppliers worldwide. Source quality products, negotiate prices, and grow your business with Airavat B2B marketplace.",
  keywords: ["B2B marketplace", "wholesale", "suppliers", "manufacturers", "bulk orders", "trade"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
