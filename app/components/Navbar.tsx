import Image from "next/image";
import Link from "next/link";

import Menu from "./Menu";

export default function Navbar() {
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/", label: "Novedades" },
    { href: "/", label: "Populares" },
    { href: "/", label: "Tendencias" },
    { href: "/", label: "Categorías" },
  ];

  const menuLinks = links.map((link) => (
    <p key={link.label} className=" text-lg cursor:pointer hover:text-blue-500">
      <Link href={link.href}>{link.label}</Link>
    </p>
  ));

  return (
    <nav className="flex items-center justify-between p-6 max-w-6xl mx-auto">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={60} height={60} />
      </Link>
      <div className="hidden items-center gap-6 sm:flex">{menuLinks}</div>
      {/* MENU RESPONSIVE */}
      <Menu className="block sm:hidden">{menuLinks}</Menu>
    </nav>
  );
}
