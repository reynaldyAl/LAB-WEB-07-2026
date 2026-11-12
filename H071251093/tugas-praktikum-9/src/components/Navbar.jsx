"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { href: "/", label: "Beranda" },
  { href: "/katalog", label: "Katalog" },
  { href: "/usulan", label: "Usulan Buku" },
];

export default function Navbar() {
  const pathname = usePathname();
  const aktif = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="border-b border-amber-100 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-orange-800">
          Pustaka Senja
        </Link>
        <div className="flex gap-6">
          {menu.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className={`border-b-2 pb-1 transition-colors ${
                aktif(m.href)
                  ? "border-orange-700 font-medium text-orange-800"
                  : "border-transparent text-stone-600 hover:text-orange-800"
              }`}
            >
              {m.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}