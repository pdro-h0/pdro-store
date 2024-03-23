import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AuthProvider } from "./providers/auth";

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CartProvider from "./providers/cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PDR Store",
  description: "E-Commerce de vendas de periféricos como monitores, mouses, teclados e fones",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="flex h-full flex-col">
          <AuthProvider>
            <CartProvider>
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </CartProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
