import Link from "next/link";
import { notFound } from "next/navigation";
import pool from "@/lib/db";
import FormBuku from "@/components/FormBuku";
import { ubahBuku } from "@/app/katalog/actions";

export const dynamic = "force-dynamic";

export default async function EditBukuPage({ params }) {
  const { id } = await params;

  if (!/^\d+$/.test(id)) {
    notFound();
  }

  const hasil = await pool.query(
    `SELECT id, judul, penulis, kategori, tahun, tersedia, sinopsis
     FROM buku
     WHERE id = $1`,
    [Number(id)]
  );

  const buku = hasil.rows[0];

  if (!buku) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <Link
        href={`/katalog/${buku.id}`}
        className="text-sm font-medium text-green-800 hover:underline"
      >
        ← Kembali ke Detail Buku
      </Link>

      <div className="mb-8 mt-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
          Kelola Koleksi
        </p>

        <h1 className="mt-2 text-3xl font-semibold text-stone-900">
          Edit Buku
        </h1>

        <p className="mt-2 text-sm text-stone-500">
          Perbarui informasi buku yang tersimpan di database.
        </p>
      </div>

      <FormBuku
        action={ubahBuku}
        buku={buku}
        labelTombol="Simpan Perubahan"
      />
    </section>
  );
}