"use client";

import { useState } from "react";
import Link from "next/link";

const warnaSampul = [
  "from-green-800 to-green-600",
  "from-stone-700 to-stone-500",
  "from-amber-900 to-amber-700",
  "from-rose-900 to-rose-700",
  "from-slate-800 to-slate-600",
];

export default function BukuCard({ buku }) {
  const [favorit, setFavorit] = useState(false);
  const warna = warnaSampul[(Number(buku.id) - 1) % warnaSampul.length];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-stone-100 p-5">
        <div
          className={`relative flex h-32 w-24 flex-col justify-between rounded-r-md bg-gradient ${warna} p-3 text-white shadow-xl transition duration-300 group-hover:scale-105`}
        >
          <span className="text-[8px] uppercase tracking-[0.2em] text-white/70">
            Pustaka Senja
          </span>
          <span className="font-serif text-sm font-semibold leading-tight">
            {buku.judul}
          </span>
          <span className="text-[8px] text-white/75">{buku.penulis}</span>
          <span className="absolute -left-1 top-0 h-full w-1 rounded-l bg-black/15" />
        </div>
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-stone-600">
          {buku.kategori}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs text-stone-500">{buku.penulis}</p>
            <h2 className="mt-1 text-lg font-semibold leading-snug text-stone-900">
              {buku.judul}
            </h2>
          </div>
          <span
            className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
              buku.tersedia ? "bg-emerald-500" : "bg-rose-400"
            }`}
            title={buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
          />
        </div>

        <div className="mb-5 flex items-center justify-between text-xs text-stone-500">
          <span>Terbit {buku.tahun}</span>
          <span
            className={`rounded-full px-2.5 py-1 font-medium ${
              buku.tersedia
                ? "bg-emerald-50 text-emerald-700"
                : "bg-rose-50 text-rose-700"
            }`}
          >
            {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-stone-100 pt-4">
          <button
            type="button"
            onClick={() => setFavorit(!favorit)}
            aria-pressed={favorit}
            className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
              favorit
                ? "bg-rose-50 text-rose-600"
                : "bg-stone-100 text-stone-600 hover:bg-rose-50 hover:text-rose-600"
            }`}
          >
            {favorit ? "♥ Tersimpan" : "♡ Simpan"}
          </button>
          <Link
            href={`/katalog/${buku.id}`}
            className="text-xs font-semibold text-green-700 transition hover:text-green-950"
          >
            Lihat Detail <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}