import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ethan Tajalle | Conductor",
  description: "Ethan Tajalle – Emerging conductor specializing in symphonic conducting, contemporary music, and orchestral collaboration.",
  openGraph: {
    title: "Ethan Tajalle | Conductor",
    description: "Emerging conductor specializing in symphonic conducting and orchestral collaboration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full flex flex-col bg-concert-black text-concert-ivory antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
