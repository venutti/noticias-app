import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Noticias",
  description: "Sitio de noticias",
  image: "/logo.png",
};

interface LayoutProps {
  children: React.ReactNode;
  types: React.ReactNode;
}

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
