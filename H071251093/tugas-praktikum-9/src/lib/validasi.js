// ID SERIAL = INTEGER 32-bit positif. Kembalikan null jika tidak valid.
export function parseId(raw) {
  if (!/^\d+$/.test(String(raw))) return null;
  const n = Number(raw);
  return n >= 1 && n <= 2147483647 ? n : null;
}

// Validasi data form buku. Kembalikan { data } atau { error }.
export function validasiBuku(formData) {
  const judul = String(formData.get("judul") ?? "").trim();
  const penulis = String(formData.get("penulis") ?? "").trim();
  const kategori = String(formData.get("kategori") ?? "").trim();
  const sinopsis = String(formData.get("sinopsis") ?? "").trim();
  const tahunRaw = String(formData.get("tahun") ?? "").trim();
  const tersediaRaw = String(formData.get("tersedia") ?? "");

  if (!judul || !penulis || !kategori || !sinopsis)
    return { error: "Judul, penulis, kategori, dan sinopsis wajib diisi." };
  if (judul.length > 200 || penulis.length > 150 || kategori.length > 80)
    return { error: "Teks melebihi panjang maksimum." };
  if (!/^\d{4}$/.test(tahunRaw))
    return { error: "Tahun harus berupa bilangan bulat 4 digit." };
  const tahun = Number(tahunRaw);
  if (tahun < 1000 || tahun > new Date().getFullYear() + 1)
    return { error: "Tahun terbit di luar rentang yang wajar." };
  if (tersediaRaw !== "true" && tersediaRaw !== "false")
    return { error: "Status ketersediaan tidak valid." };

  return {
    data: { judul, penulis, kategori, tahun, tersedia: tersediaRaw === "true", sinopsis },
  };
}
