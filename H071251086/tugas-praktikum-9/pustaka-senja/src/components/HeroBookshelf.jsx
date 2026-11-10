"use client";

import { useState } from "react";
import Link from "next/link";


// ====== Data buku di rak ======
// cover: true -> buku "menghadap depan" (lebar, seperti Visible Signs di referensi)
const BOOKS = [
  { id: 1, title: "Laskar Pelangi", author: "Andrea Hirata", bg: "#E8A33D", fg: "#2B1D0E", w: 54, h: 270 },
  { id: 2, title: "Bumi Manusia", author: "Pramoedya A. T.", bg: "#2E4A7D", fg: "#F4EFE6", w: 62, h: 300 },
  { id: 3, title: "Filosofi Teras", author: "Henry Manampiring", bg: "#D9552B", fg: "#FFF4E6", w: 50, h: 250 },
  { id: 4, title: "Cantik Itu Luka", author: "Eka Kurniawan", bg: "#F2A7B8", fg: "#4A1626", w: 58, h: 285 },
  { id: 5, title: "Pustaka Senja", author: "Koleksi Komunitas", bg: "#5A7C40", fg: "#F5EAD8", w: 180, h: 250, cover: true },
  { id: 6, title: "Hujan", author: "Tere Liye", bg: "#1F2A24", fg: "#F4EFE6", w: 46, h: 265 },
  { id: 7, title: "Negeri 5 Menara", author: "A. Fuadi", bg: "#C8D86B", fg: "#2A3310", w: 56, h: 240 },
  { id: 8, title: "Sapiens", author: "Yuval N. Harari", bg: "#E9E4D8", fg: "#2B2B2B", w: 66, h: 295 },
  { id: 9, title: "Atomic Habits", author: "James Clear", bg: "#B8452A", fg: "#FFF4E6", w: 52, h: 258 },
  { id: 10, title: "Dilan 1990", author: "Pidi Baiq", bg: "#6FA3B8", fg: "#10262F", w: 48, h: 275 },
];

function Book({ book, onHover }) {
  const { title, author, bg, fg, w, h, cover } = book;

  return (
    <Link
      href="/katalog"
      aria-label={`${title} oleh ${author}`}
      onMouseEnter={() => onHover(book)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(book)}
      onBlur={() => onHover(null)}
      className="ps-book relative shrink-0 self-end outline-none"
      style={{ width: w, height: h, perspective: "900px" }}
    >
      <div
        className="ps-book-body absolute inset-0 flex overflow-hidden rounded-[3px]"
        style={{
          background: bg,
          color: fg,
          boxShadow: "inset -6px 0 10px rgba(0,0,0,.18), inset 2px 0 0 rgba(255,255,255,.25)",
        }}
      >
        {cover ? (
          <div className="flex h-full w-full flex-col justify-between p-4">
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-70">Koleksi</span>
            <span className="font-serif text-2xl leading-tight">{title}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-70">{author}</span>
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-between px-2 py-4">
            <span
              className="text-sm font-bold uppercase tracking-wide"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              {title}
            </span>
            <span className="h-2 w-2 rounded-full" style={{ background: fg, opacity: 0.6 }} />
          </div>
        )}
      </div>
    </Link>
  );
}

export default function HeroBookshelf() {
  const [active, setActive] = useState(null);

  const row = (key) => (
    <div key={key} className="flex items-end gap-3 pr-3" aria-hidden={key === "b"}>
      {BOOKS.map((b) => (
        <Book key={`${key}-${b.id}`} book={b} onHover={setActive} />
      ))}
    </div>
  );

  return (
    <div className="relative w-full">
      <style>{`
        @keyframes ps-drift { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ps-track { animation: ps-drift 60s linear infinite; }
        .ps-shelf:hover .ps-track { animation-play-state: paused; }
        .ps-book-body {
          transform-origin: left center;
          transform-style: preserve-3d;
          transition: transform .5s cubic-bezier(.2,.8,.2,1), box-shadow .5s;
        }
        .ps-book:hover .ps-book-body,
        .ps-book:focus-visible .ps-book-body {
          transform: translateY(-16px) rotateY(-32deg);
          box-shadow: 14px 18px 28px rgba(0,0,0,.35);
        }
        @media (prefers-reduced-motion: reduce) { .ps-track { animation: none; } }
      `}</style>

      <div className="ps-shelf">
        <div
          className="overflow-hidden px-4"
          style={{
            maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <div className="ps-track flex w-max items-end pt-6">
            {row("a")}
            {row("b")}
          </div>
        </div>
        <div className="h-3 w-full bg-crimson" />
      </div>

      <p className="mt-3 h-5 text-center text-sm text-cream/80">
        {active ? `${active.title} — ${active.author}` : ""}
      </p>
    </div>
  );
}