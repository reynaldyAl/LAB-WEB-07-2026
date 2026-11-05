// Satu-satunya sumber data buku. Diimpor lewat alias: import { dataBuku } from "@/data/dataBuku";

export const dataBuku = [
  {
    id: "1",
    judul: "Clean Code",
    penulis: "Robert C. Martin",
    kategori: "Teknologi",
    tahun: 2008,
    tersedia: true,
    sinopsis:
      "Panduan menulis kode perangkat lunak yang bersih, mudah dibaca, dan mudah dipelihara oleh tim pengembang.",
  },
  {
    id: "2",
    judul: "Designing Data-Intensive Applications",
    penulis: "Martin Kleppmann",
    kategori: "Teknologi",
    tahun: 2017,
    tersedia: true,
    sinopsis:
      "Pembahasan mendalam mengenai arsitektur sistem terdistribusi, basis data, dan pengolahan data skala besar.",
  },
  {
    id: "3",
    judul: "Refactoring",
    penulis: "Martin Fowler",
    kategori: "Teknologi",
    tahun: 2018,
    tersedia: false,
    sinopsis:
      "Teknik sistematis untuk memperbaiki struktur internal kode program tanpa mengubah perilaku eksternalnya.",
  },
  {
    id: "4",
    judul: "Laut Bercerita",
    penulis: "Leila S. Chudori",
    kategori: "Fiksi",
    tahun: 2017,
    tersedia: true,
    sinopsis:
      "Kisah persahabatan, perjuangan, dan kehilangan para aktivis mahasiswa di penghujung era Orde Baru.",
  },
  {
    id: "5",
    judul: "Bumi Manusia",
    penulis: "Pramoedya Ananta Toer",
    kategori: "Fiksi",
    tahun: 1980,
    tersedia: true,
    sinopsis:
      "Perjalanan Minke, seorang pemuda pribumi terpelajar, dalam menghadapi ketidakadilan hukum kolonial di awal abad ke-20.",
  },
  {
    id: "6",
    judul: "Cantik Itu Luka",
    penulis: "Eka Kurniawan",
    kategori: "Fiksi",
    tahun: 2002,
    tersedia: false,
    sinopsis:
      "Epos keluarga Dewi Ayu di kota pesisir Halimunda yang memadukan sejarah kelam dengan unsur realisme magis.",
  },
  {
    id: "7",
    judul: "Atomic Habits",
    penulis: "James Clear",
    kategori: "Pengembangan Diri",
    tahun: 2018,
    tersedia: true,
    sinopsis:
      "Cara membangun kebiasaan baik yang bertahan lama dan menghentikan kebiasaan buruk melalui perubahan kecil setiap hari.",
  },
  {
    id: "8",
    judul: "Deep Work",
    penulis: "Cal Newport",
    kategori: "Pengembangan Diri",
    tahun: 2016,
    tersedia: true,
    sinopsis:
      "Strategi melatih fokus mendalam tanpa distraksi untuk menghasilkan karya bernilai tinggi di era digital.",
  },
  {
    id: "9",
    judul: "Filosofi Teras",
    penulis: "Henry Manampiring",
    kategori: "Pengembangan Diri",
    tahun: 2018,
    // Catatan: kolom "tersedia" untuk buku ini kosong di tabel soal (terpotong).
    // Ubah ke false jika dosen/soal menyebutkan sebaliknya.
    tersedia: true,
    sinopsis:
      "Penerapan filsafat Stoisisme kuno untuk menjaga ketenangan mental dan mengelola emosi negatif di kehidupan modern.",
  },
];

// Daftar kategori untuk filter (nilai "Semua" tidak ada di data buku)
export const daftarKategori = [
  "Semua",
  "Teknologi",
  "Fiksi",
  "Pengembangan Diri",
];

// Tampilan per kategori: ikon + warna sampul (class Tailwind utuh agar terdeteksi)
export const gayaKategori = {
  Semua: { ikon: "📚", sampul: "from-blue-400 to-blue-600" },
  Teknologi: { ikon: "💻", sampul: "from-sky-400 to-indigo-500" },
  Fiksi: { ikon: "🌙", sampul: "from-rose-400 to-orange-400" },
  "Pengembangan Diri": { ikon: "🌱", sampul: "from-emerald-400 to-teal-500" },
};

export default dataBuku;