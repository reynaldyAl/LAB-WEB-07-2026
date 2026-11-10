import { notFound } from "next/navigation";
import pool from "@/lib/db";
import { parseId } from "@/lib/id";
import FormBuku from "@/components/FormBuku";
import { ubahBuku } from "@/app/katalog/actions";

export const dynamic = "force-dynamic";

export default async function EditBukuPage({ params, searchParams }) {
  const { id } = await params;
  const { error } = await searchParams;

  const idAngka = parseId(id);
  if (idAngka === null) notFound();

  const { rows } = await pool.query("SELECT * FROM buku WHERE id = $1", [idAngka]);
  const buku = rows[0];
  if (!buku) notFound();

  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="font-display text-4xl text-center mb-6">
        Edit <em className="italic text-blush">buku</em> #{buku.id}
      </h1>

      {typeof error === "string" && (
        <p className="mb-4 p-4 bg-rose-500/15 border border-rose-400/30 text-rose-300 text-sm font-medium rounded-2xl">
          {error}
        </p>
      )}

      <div className="bg-navy-800 border border-white/10 rounded-3xl p-6">
        <FormBuku
          aksi={ubahBuku}
          buku={buku}
          labelTombol="Simpan Perubahan"
          batalHref={`/katalog/${buku.id}`}
        />
      </div>
    </section>
  );
}