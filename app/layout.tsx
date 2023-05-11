import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import type { LayoutProps } from "@/.next/types/app/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Noticias",
  description: "Sitio de noticias",
  image: "/logo.png",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="es-AR">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
