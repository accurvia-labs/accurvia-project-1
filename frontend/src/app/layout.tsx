import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/footer/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dare Oduale | Business Design & Transformation Coaching",
  description:
    "Business design and transformation coaching for founders, programme leads, and executives who need to move forward.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="antialiased flex flex-col min-h-screen">
        <NavBar />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
