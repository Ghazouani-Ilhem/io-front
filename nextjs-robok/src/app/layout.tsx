import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

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
  description: "Robok - AI Agency & Technology HTML Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Robok - AI Agency & Technology HTML Template" />
        <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon" />
        <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/assets/css/validthemes-icon.css" rel="stylesheet" />
        <link href="/assets/css/magnific-popup.css" rel="stylesheet" />
        <link href="/assets/css/swiper-bundle.min.css" rel="stylesheet" />
        <link href="/assets/css/animate.css" rel="stylesheet" />
        <link href="/assets/css/validnavs.css" rel="stylesheet" />
        <link href="/assets/css/helper.css" rel="stylesheet" />
        <link href="/assets/css/unit-test.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />
        <link href="/style.css" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} smooth-scroll-yes bg-dark`}>
        <Preloader />
        <Header />
        <div id="smooth-content">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
