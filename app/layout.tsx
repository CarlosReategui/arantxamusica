import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arantxa - Cantante Pop Peruana",
  description: "Portfolio oficial de Arantxa, cantante pop de Lima, Perú. Descubre su música, videoclips, y más.",
  keywords: ["Arantxa", "cantante", "pop", "música", "Perú", "Lima", "artista"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
