"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import TombolHapus from "@/components/TombolHapus";

const kategoriList = [
  "Semua",
  "Teknologi",
  "Fiksi",
  "Pengembangan Diri",
];

export default function DaftarBuku({ buku }) {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const bukuTampil = useMemo(() => {
    if (kategoriAktif === "Semua") {
      return buku;
    }

    return buku.filter(
      (item) => item.kategori === kategoriAktif
    );
  }, [buku, kategoriAktif]);

  return (
    <div>
      <div className="mb-7 flex flex-wrap justify-center gap-2">
        {kategoriList.map((kategori) => (
          <button
            key={kategori}
            type="button"
            onClick={() => setKategoriAktif(kategori)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              kategoriAktif === kategori
                ? "bg-green-800 text-white"
                : "border border-stone-200 bg-white text-stone-600 hover:border-green-700 hover:text-green-800"
            }`}
          >
            {kategori}
          </button>
        ))}
      </div>

      {bukuTampil.length === 0 ? (
        <p className="rounded-2xl bg-white p-8 text-center text-stone-500">
          Belum ada buku pada kategori ini.
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bukuTampil.map((item) => (
            <article
              key={item.id}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between gap-2">
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-800">
                  {item.kategori}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    item.tersedia
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-rose-50 text-rose-700"
                  }`}
                >
                  {item.tersedia
                    ? "Tersedia"
                    : "Sedang Dipinjam"}
                </span>
              </div>

              <h2 className="text-lg font-semibold leading-snug text-stone-900">
                {item.judul}
              </h2>

              <p className="mt-2 text-sm text-stone-500">
                {item.penulis} · {item.tahun}
              </p>

              <p className="mt-4 line-clamp-3 flex-1 text-sm leading-6 text-stone-600">
                {item.sinopsis}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-stone-100 pt-4">
                <Link
                  href={`/katalog/${item.id}`}
                  className="rounded-full bg-green-800 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
                >
                  Detail
                </Link>

                <Link
                  href={`/katalog/${item.id}/edit`}
                  className="rounded-full border border-stone-200 px-4 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50"
                >
                  Edit
                </Link>

                <TombolHapus id={item.id} />
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}