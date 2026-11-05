"use client";

import { useState } from "react";
import Link from "next/link";
import { gayaKategori } from "@/data/dataBuku";

function BukuCard({ id, judul, penulis, kategori, tahun, tersedia }) {
  const [favorit, setFavorit] = useState(false);
  const gaya = gayaKategori[kategori];

  return (
    <article className="bg-white rounded-3xl p-3 shadow-md shadow-blue-200/60 flex flex-col">
      {/* Sampul buku */}
      <div
        className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${gaya.sampul} p-4 flex flex-col justify-between overflow-hidden`}
      >
        <span className="text-3xl">{gaya.ikon}</span>
        <h3 className="text-white text-xl font-extrabold leading-tight drop-shadow">
          {judul}
        </h3>

        <button
          type="button"
          onClick={() => setFavorit(!favorit)}
          aria-label={favorit ? "Hapus dari favorit" : "Simpan ke favorit"}
          aria-pressed={favorit}
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-2xl text-amber-400 shadow transition"
        >
          {favorit ? "★" : "☆"}
        </button>
      </div>

      {/* Informasi */}
      <div className="px-2 pt-3 pb-1 flex flex-col gap-2 flex-1">
        <p className="text-slate-600 text-sm font-medium">{penulis}</p>

        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-blue-50 text-teal-600 text-xs font-bold px-3 py-1 rounded-full">
            {kategori}
          </span>
          <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full">
            {tahun}
          </span>
          <span
            className={
              tersedia
                ? "bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full"
                : "bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full"
            }
          >
            {tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </span>
        </div>

        <Link
          href={`/katalog/${id}`}
          className="mt-auto block text-center bg-amber-300 hover:bg-amber-400 text-amber-900 font-bold text-sm py-2.5 rounded-xl transition"
        >
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}

export default BukuCard;