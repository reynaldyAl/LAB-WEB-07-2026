"use client";

import { useState } from "react";
import Link from "next/link";

export default function BukuCard({ buku }) {
  const [favorit, setFavorit] = useState(false);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-pink-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-pink-300">
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700">
          {buku.kategori}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            buku.tersedia
              ? "bg-rose-100 text-rose-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
        </span>
      </div>

      <h2 className="text-xl font-bold text-pink-950">
        {buku.judul}
      </h2>

      <p className="mt-2 text-sm text-pink-700/80">
        Penulis: {buku.penulis}
      </p>

      <p className="mt-1 text-sm text-pink-400">
        Tahun terbit: {buku.tahun}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
        <button
          type="button"
          onClick={() => setFavorit(!favorit)}
          aria-pressed={favorit}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
            favorit
              ? "bg-rose-500 text-white shadow-sm"
              : "bg-pink-50 text-pink-600 hover:bg-pink-100"
          }`}
        >
          {favorit ? "♥ Favorit" : "♡ Simpan"}
        </button>

        <Link
          href={`/katalog/${buku.id}`}
          className="rounded-lg bg-pink-400 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-500"
        >
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}