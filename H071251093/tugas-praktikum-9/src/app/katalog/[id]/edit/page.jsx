import { notFound } from "next/navigation";
import { pool } from "@/lib/db";
import { parseId } from "@/lib/validasi";
import { ubahBuku } from "../../actions";
import FormBuku from "@/components/FormBuku";

export const dynamic = "force-dynamic";

export default async function EditBuku({ params, searchParams }) {
  const { id: idRaw } = await params;
  const { error } = await searchParams;
  const id = parseId(idRaw);
  if (id === null) notFound();

  const { rows } = await pool.query("SELECT * FROM buku WHERE id = $1", [id]);
  if (rows.length === 0) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-4xl font-bold text-orange-900">Edit Buku</h1>
      {error && (
        <p className="mt-4 rounded-lg bg-red-100 p-3 text-red-700">{error}</p>
      )}
      <div className="mt-6 rounded-2xl bg-white p-6 shadow-md">
        <FormBuku action={ubahBuku} buku={rows[0]} label="Simpan Perubahan" />
      </div>
    </main>
  );
}