"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { pool } from "@/lib/db";
import { parseId, validasiBuku } from "@/lib/validasi";

export async function tambahBuku(formData) {
  const { data, error } = validasiBuku(formData);
  if (error) redirect(`/katalog?error=${encodeURIComponent(error)}`);

  await pool.query(
    `INSERT INTO buku (judul, penulis, kategori, tahun, tersedia, sinopsis)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [data.judul, data.penulis, data.kategori, data.tahun, data.tersedia, data.sinopsis]
  );

  revalidatePath("/");
  revalidatePath("/katalog");
  redirect("/katalog");
}

export async function ubahBuku(formData) {
  const id = parseId(formData.get("id"));
  if (id === null) redirect("/katalog");

  const { data, error } = validasiBuku(formData);
  if (error) redirect(`/katalog/${id}/edit?error=${encodeURIComponent(error)}`);

  const res = await pool.query(
    `UPDATE buku
        SET judul = $1, penulis = $2, kategori = $3,
            tahun = $4, tersedia = $5, sinopsis = $6
      WHERE id = $7`,
    [data.judul, data.penulis, data.kategori, data.tahun, data.tersedia, data.sinopsis, id]
  );
  if (res.rowCount === 0) redirect("/katalog");

  revalidatePath("/");
  revalidatePath("/katalog");
  revalidatePath(`/katalog/${id}`);
  redirect(`/katalog/${id}`);
}

export async function hapusBuku(formData) {
  const id = parseId(formData.get("id"));
  if (id === null) redirect("/katalog");

  await pool.query("DELETE FROM buku WHERE id = $1", [id]);

  revalidatePath("/");
  revalidatePath("/katalog");
  redirect("/katalog");
}