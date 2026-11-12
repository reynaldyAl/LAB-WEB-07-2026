"use server";

import pool from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function ambilNilai(formData, nama) {
  return String(formData.get(nama) ?? "").trim();
}

function validasiBuku(formData) {
  const judul = ambilNilai(formData, "judul");
  const penulis = ambilNilai(formData, "penulis");
  const kategori = ambilNilai(formData, "kategori");
  const tahunText = ambilNilai(formData, "tahun");
  const tersediaText = ambilNilai(formData, "tersedia");
  const sinopsis = ambilNilai(formData, "sinopsis");

  const tahun = Number(tahunText);

  if (!judul || !penulis || !kategori || !tahunText || !sinopsis) {
    throw new Error("Semua kolom wajib diisi.");
  }

  if (
    !Number.isInteger(tahun) ||
    tahun < 1 ||
    tahun > new Date().getFullYear()
  ) {
    throw new Error("Tahun terbit tidak valid.");
  }

  if (!["true", "false"].includes(tersediaText)) {
    throw new Error("Status ketersediaan tidak valid.");
  }

  return {
    judul,
    penulis,
    kategori,
    tahun,
    tersedia: tersediaText === "true",
    sinopsis,
  };
}

export async function tambahBuku(formData) {
  const buku = validasiBuku(formData);

  await pool.query(
    `INSERT INTO buku (judul, penulis, kategori, tahun, tersedia, sinopsis)
    VALUES ($1, $2, $3, $4, $5, $6)`,
    [
      buku.judul,
      buku.penulis,
      buku.kategori,
      buku.tahun,
      buku.tersedia,
      buku.sinopsis,
    ]
  );

  revalidatePath("/");
  revalidatePath("/katalog");

  redirect("/katalog");
}

export async function ubahBuku(formData) {
  const id = Number(ambilNilai(formData, "id"));

  if (!Number.isInteger(id) || id < 1) {
    throw new Error("ID buku tidak valid.");
  }

  const buku = validasiBuku(formData);

  const hasil = await pool.query(
    `UPDATE buku
     SET judul = $1,
         penulis = $2,
         kategori = $3,
         tahun = $4,
         tersedia = $5,
         sinopsis = $6
     WHERE id = $7
     RETURNING id`,
    [
      buku.judul,
      buku.penulis,
      buku.kategori,
      buku.tahun,
      buku.tersedia,
      buku.sinopsis,
      id,
    ]
  );

  if (hasil.rowCount === 0) {
    throw new Error("Buku tidak ditemukan.");
  }

  revalidatePath("/");
  revalidatePath("/katalog");
  revalidatePath(`/katalog/${id}`);

  redirect(`/katalog/${id}`);
}

export async function hapusBuku(formData) {
  const id = Number(ambilNilai(formData, "id"));

  if (!Number.isInteger(id) || id < 1) {
    throw new Error("ID buku tidak valid.");
  }

  await pool.query(
    "DELETE FROM buku WHERE id = $1",
    [id]
  );

  revalidatePath("/");
  revalidatePath("/katalog");

  redirect("/katalog");
}