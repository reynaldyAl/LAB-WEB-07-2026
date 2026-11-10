"use client";

import { useState } from "react";
import Link from "next/link";
import { gayaKategori } from "@/lib/kategori";
import TombolHapus from "@/components/TombolHapus";
import Image from "next/image";


// penerima dari KatalogBuku.jsx
function BukuCard({ id, judul, penulis, kategori, tahun, tersedia }) {
  // state favoritnya sendiri
  const [favorit, setFavorit] = useState(false);
  const [gambarError, setGambarError] = useState(false);
  const gaya = gayaKategori[kategori];

  return (
    <article className="bg-navy-800 border border-white/10 rounded-3xl p-3 flex flex-col">
      <div
        className={`relative aspect-4/3 rounded-2xl bg-linear-to-br ${gaya.sampul} overflow-hidden`}
      >
        {!gambarError ? (
          <Image
            src={`/covers/${id}.jpg`}
            alt={`Sampul buku ${judul}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            onError={() => setGambarError(true)}
          />
        ) : (
          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <h3 className="font-display text-white text-2xl leading-tight drop-shadow">
              {judul}
            </h3>
          </div>
        )}

        <button
          type="button"
          onClick={() => setFavorit(!favorit)}
          aria-label={favorit ? "Hapus dari favorit" : "Simpan ke favorit"}
          aria-pressed={favorit}
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-navy-900/80 hover:bg-navy-900 flex items-center justify-center text-2xl text-blush shadow transition"
        >
          {favorit ? "★" : "☆"}
        </button>
      </div>

      <div className="px-2 pt-4 pb-2 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-display text-xl text-cream leading-snug">{judul}</h3>
          <p className="text-mist text-sm mt-1">{penulis}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-white/10 text-blush text-xs font-medium px-3 py-1 rounded-full">
            {kategori}
          </span>
          <span className="bg-white/10 text-mist text-xs font-medium px-3 py-1 rounded-full">
            {tahun}
          </span>
          <span
            className={
              tersedia
                ? "bg-emerald-500/15 text-emerald-300 text-xs font-medium px-3 py-1 rounded-full"
                : "bg-rose-500/15 text-rose-300 text-xs font-medium px-3 py-1 rounded-full"
            }
          >
            {tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </span>
        </div>

        <Link
          href={`/katalog/${id}`}
          className="mt-auto block text-center bg-crimson hover:bg-crimson-hover text-white font-semibold text-sm py-3 rounded-full shadow-lg shadow-crimson/30 transition"
        >
          Lihat Detail
        </Link>

        <div className="flex gap-2">
          <Link
            href={`/katalog/${id}/edit`}
            className="flex-1 text-center bg-white/10 hover:bg-white/15 text-cream font-medium text-sm py-2.5 rounded-full transition"
          >
            Edit
          </Link>
          <TombolHapus id={id} judul={judul} className="flex-1" />
        </div>

      </div>
    </article>
  );
}

export default BukuCard;