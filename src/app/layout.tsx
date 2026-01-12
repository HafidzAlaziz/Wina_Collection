import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wina Collection - Pusat Obat Herbal Bogor",
  description: "Toko obat herbal dan thibbun nabawi terlengkap di Bogor. Menyediakan madu, habbatussauda, minyak zaitun, dan produk kesehatan alami lainnya.",
  keywords: ["herbal bogor", "toko obat herbal", "thibbun nabawi", "madu murni", "habbatussauda", "wina collection"],
  authors: [{ name: "Wina Collection" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
