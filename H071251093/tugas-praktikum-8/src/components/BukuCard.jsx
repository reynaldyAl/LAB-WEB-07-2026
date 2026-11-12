"use client";

import { useState } from "react";
import Link from "next/link";

export default function BukuCard({ id, judul, penulis, kategori, tahun, tersedia }) {
  const [favorit, setFavorit] = useState(false);

  return (
    <article className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
          {kategori}
        </span>
        <span
          className={
            tersedia
              ? "rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700"
              : "rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700"
          }
        >
          {tersedia ? "Tersedia" : "Sedang Dipinjam"}
        </span>
      </div>
      <h2 className="mt-3 text-lg font-semibold text-gray-900">{judul}</h2>
      <p className="text-sm text-gray-600">{penulis}</p>
      <p className="text-sm text-gray-500">Terbit {tahun}</p>
      <div className="mt-4 flex items-center gap-2 pt-2">
        <button
          type="button"
          onClick={() => setFavorit(!favorit)}
          className={
            favorit
              ? "rounded-lg border border-rose-500 bg-rose-500 px-3 py-1.5 text-sm text-white"
              : "rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
          }
        >
          {favorit ? "Favorit" : "Simpan"}
        </button>
        <Link
          href={`/katalog/${id}`}
          className="rounded-lg bg-amber-700 px-3 py-1.5 text-sm text-white hover:bg-amber-800"
        >
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}
