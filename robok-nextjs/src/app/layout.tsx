import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Scripts from "@/components/Scripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robok - AI Agency & Technology",
  description: "AI Agency & Technology HTML Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Robok - AI Agency & Technology HTML Template" />
        <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} smooth-scroll-yes bg-dark`}>
        <Preloader />
        <Header />
        <div id="smooth-content">
          {children}
        </div>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
