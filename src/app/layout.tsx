import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kausar Ahmad Tasin | Full-Stack Web Developer",
  description:
    "Portfolio of Kausar Ahmad Tasin, a full-stack web developer skilled in JavaScript, TypeScript, React, Node.js, and MongoDB. Explore projects, skills, and contact information.",
  openGraph: {
    title: "Kausar Ahmad Tasin | Web Developer Portfolio",
    description:
      "Explore the portfolio of Kausar Ahmad Tasin, a passionate MERN stack developer. Check out his projects and skills.",
    url: "https://kausar-ahmad.vercel.app/",
    siteName: "Kausar Ahmad Tasin Portfolio",
    images: [
      {
        url: "https://i.ibb.co/cFWhLbk/h-img.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link rel="shortcut icon" href="https://i.ibb.co/cFWhLbk/h-img.jpg" />
        <link rel="canonical" href="https://kausar-ahmad.vercel.app/" />
        <meta
          name="keywords"
          content="Kausar Ahmad Tasin, Full-Stack Developer, MERN Developer, JavaScript Developer, React Developer, Next.js Portfolio, Bangladesh Developer, Web Developer Portfolio"
        />
        <meta name="author" content="Kausar Ahmad Tasin" />
      </head>
      <body
        className={`${geistSans.variable} bg-[#030712] ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
