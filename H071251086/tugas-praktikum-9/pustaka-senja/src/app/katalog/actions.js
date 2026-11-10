
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import pool from "@/lib/db";
import { parseId } from "@/lib/id";
import { pilihanKategori } from "@/lib/kategori";

// Membaca dan memvalidasi isi form
function bacaForm(formData) {
  const judul = String(formData.get("judul") ?? "").trim();
  const penulis = String(formData.get("penulis") ?? "").trim();
  const kategori = String(formData.get("kategori") ?? "").trim();
  const sinopsis = String(formData.get("sinopsis") ?? "").trim();
  const tahun = Number(formData.get("tahun"));
  const statusTersedia = formData.get("tersedia");

  const tersedia = statusTersedia === "true";
  const tahunMaks = new Date().getFullYear();

  let error = null;

  if (!judul || !penulis || !kategori || !sinopsis) {
    error = "Judul, penulis, kategori, dan sinopsis wajib diisi.";
  } else if (judul.length > 150 || penulis.length > 100) {
    error = "Judul maksimal 150 karakter dan penulis maksimal 100 karakter.";
  } else if (!pilihanKategori.includes(kategori)) {
    error = "Kategori tidak valid.";
  } else if (
    !Number.isInteger(tahun) ||
    tahun < 1000 ||
    tahun > tahunMaks
  ) {
    error = `Tahun terbit harus bilangan bulat antara 1000 dan ${tahunMaks}.`;
  } else if (!["true", "false"].includes(statusTersedia)) {
    error = "Status ketersediaan tidak valid.";
  }

  return {
    data: { judul, penulis, kategori, tahun, tersedia, sinopsis },
    error,
  };
}

// TAMBAH BUKU
export async function tambahBuku(formData) {
  const { data, error } = bacaForm(formData);

  if (error) {
    redirect(`/katalog?error=${encodeURIComponent(error)}`);
  }

  await pool.query(
    `INSERT INTO buku
    (judul, penulis, kategori, tahun, tersedia, sinopsis)
    VALUES ($1, $2, $3, $4, $5, $6)`,
    [
      data.judul,
      data.penulis,
      data.kategori,
      data.tahun,
      data.tersedia,
      data.sinopsis,
    ]
  );

  revalidatePath("/katalog");
  revalidatePath("/");

  redirect("/katalog?status=ditambah");
}

// UPDATE BUKU
export async function ubahBuku(formData) {
  const id = parseId(formData.get("id"));

  if (id === null) {
    redirect(`/katalog?error=${encodeURIComponent("ID buku tidak valid.")}`);
  }

  const { data, error } = bacaForm(formData);

  if (error) {
    redirect(`/katalog/${id}/edit?error=${encodeURIComponent(error)}`);
  }

  const hasil = await pool.query(
    `UPDATE buku
    SET judul = $1,
        penulis = $2,
        kategori = $3,
        tahun = $4,
        tersedia = $5,
        sinopsis = $6
    WHERE id = $7`,
    [
      data.judul,
      data.penulis,
      data.kategori,
      data.tahun,
      data.tersedia,
      data.sinopsis,
      id,
    ]
  );

  if (hasil.rowCount === 0) {
    redirect(`/katalog?error=${encodeURIComponent("Buku tidak ditemukan.")}`);
  }

  revalidatePath("/katalog");
  revalidatePath(`/katalog/${id}`);
  revalidatePath("/");

  redirect(`/katalog/${id}`);
}

// HAPUS BUKU
export async function hapusBuku(formData) {
  const id = parseId(formData.get("id"));

  if (id === null) {
    redirect(`/katalog?error=${encodeURIComponent("ID buku tidak valid.")}`);
  }

  const hasil = await pool.query(
    "DELETE FROM buku WHERE id = $1",
    [id]
  );

  if (hasil.rowCount === 0) {
    redirect(`/katalog?error=${encodeURIComponent("Buku tidak ditemukan.")}`);
  }

  revalidatePath("/katalog");
  revalidatePath("/");

  redirect("/katalog?status=dihapus");
}

// USULKAN BUKU
export async function usulkanBuku(formData) {
  const { data, error } = bacaForm(formData);

  if (error) {
    redirect(`/usulan?error=${encodeURIComponent(error)}`);
  }

  await pool.query(
    `INSERT INTO buku
    (judul, penulis, kategori, tahun, tersedia, sinopsis)
    VALUES ($1, $2, $3, $4, $5, $6)`,
    [
      data.judul,
      data.penulis,
      data.kategori,
      data.tahun,
      data.tersedia,
      data.sinopsis,
    ]
  );

  revalidatePath("/katalog");
  revalidatePath("/");

  redirect("/katalog?status=diusulkan");
}

export async function tesKoneksi() {
  const hasil = await pool.query(
    "SELECT current_database() AS nama_database"
  );

  console.log(hasil.rows);
}