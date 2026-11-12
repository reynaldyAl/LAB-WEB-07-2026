import Link from "next/link";
import pool from "@/lib/db";
import DaftarBuku from "@/components/DaftarBuku";
import FormBuku from "@/components/FormBuku";
import { tambahBuku } from "./actions";

export const dynamic = "force-dynamic";

export default async function KatalogPage() {
  const hasil = await pool.query(
    "SELECT id, judul, penulis, kategori, tahun, tersedia, sinopsis FROM buku ORDER BY id ASC"
  );

  const buku = hasil.rows;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
          Koleksi Pustaka Senja
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          Katalog Buku
        </h1>

        <p className="mt-3 text-sm text-stone-500">
          Jelajahi koleksi buku dan temukan bacaan berikutnya.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-stone-500">
          Menampilkan{" "}
          <strong className="text-stone-900">
            {buku.length}
          </strong>{" "}
          buku dari database.
        </p>

        <Link
          href="#tambah-buku"
          className="rounded-full bg-green-800 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
        >
          + Tambah Buku
        </Link>
      </div>

      <DaftarBuku buku={buku} />

      <div
        id="tambah-buku"
        className="mx-auto mt-16 max-w-3xl scroll-mt-24"
      >
        <div className="mb-7 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
            Kelola Koleksi
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-stone-900">
            Tambah Buku Baru
          </h2>

          <p className="mt-2 text-sm text-stone-500">
            Buku yang ditambahkan akan tersimpan di PostgreSQL.
          </p>
        </div>

        <FormBuku
          action={tambahBuku}
          labelTombol="Simpan Buku"
        />
      </div>
    </section>
  );
}