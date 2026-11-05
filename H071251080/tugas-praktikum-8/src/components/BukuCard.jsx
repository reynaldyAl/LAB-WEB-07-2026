"use client";

import { useState } from "react";
import Link from "next/link";
import { gayaKategori } from "@/data/dataBuku";

function BukuCard({ id, judul, penulis, kategori, tahun, tersedia }) {
  const [favorit, setFavorit] = useState(false);
  const gaya = gayaKategori[kategori];

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-garis bg-white/70 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-malam/10">
      {/* sampul buku bergaya tipografi */}
      <div
        className={`relative flex h-44 flex-col justify-between overflow-hidden bg-linear-to-br ${gaya.sampul} p-5 text-kertas`}
      >
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-2.5 bg-black/20"
        />
        <span
          aria-hidden="true"
          className="absolute -right-6 -top-6 size-24 rounded-full bg-kertas/10"
        />
        <p className="pl-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-kertas/75">
          {kategori}
        </p>
        <div className="pl-2">
          <h3 className="line-clamp-3 font-serif text-xl font-semibold leading-tight">
            {judul}
          </h3>
          <p className="mt-1 text-xs text-kertas/80">{penulis}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
              tersedia
                ? "bg-emerald-50 text-emerald-800 ring-emerald-600/30"
                : "bg-red-50 text-red-700 ring-red-600/25"
            }`}
          >
            <span
              className={`size-1.5 rounded-full ${
                tersedia ? "bg-emerald-600" : "bg-red-500"
              }`}
            />
            {tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </span>
          <span className="text-xs text-tinta-2">Terbit {tahun}</span>
        </div>

        <dl className="text-sm">
          <dt className="sr-only">Penulis</dt>
          <dd className="font-medium text-tinta">{penulis}</dd>
          <dt className="sr-only">Kategori</dt>
          <dd className="text-tinta-2">{kategori}</dd>
        </dl>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-garis pt-4">
          <button
            type="button"
            onClick={() => setFavorit(!favorit)}
            aria-pressed={favorit}
            aria-label={
              favorit
                ? `Hapus ${judul} dari favorit`
                : `Simpan ${judul} ke favorit`
            }
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-senja ${
              favorit
                ? "bg-plum-500 text-white"
                : "bg-kertas-tua text-tinta hover:bg-garis"
            }`}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-4"
              fill={favorit ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21s-7.5-4.6-9.5-9.2C1.2 8.6 3 5 6.4 5c2 0 3.5 1.1 5.6 3.3C14.1 6.1 15.6 5 17.6 5 21 5 22.8 8.6 21.5 11.8 19.5 16.4 12 21 12 21Z" />
            </svg>
            {favorit ? "Tersimpan" : "Simpan"}
          </button>

          <Link
            href={`/katalog/${id}`}
            className="text-sm font-semibold text-senja-tua transition hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-senja"
          >
            Lihat Detail <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BukuCard;
