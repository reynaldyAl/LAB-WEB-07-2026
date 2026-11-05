// SATU-SATUNYA sumber data aplikasi. Diimpor lewat alias: "@/data/dataBuku".

const dataBuku = [
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
    // Kolom "tersedia" buku ke-9 kosong di tabel soal; diasumsikan tersedia.
    tersedia: true,
    sinopsis:
      "Penerapan filsafat Stoisisme kuno untuk menjaga ketenangan mental dan mengelola emosi negatif di kehidupan modern.",
  },
];

export const kategoriBuku = ["Teknologi", "Fiksi", "Pengembangan Diri"];
export const daftarKategori = ["Semua", ...kategoriBuku];

// Identitas visual per kategori (dipakai kartu, halaman detail, dan beranda).
export const gayaKategori = {
  Teknologi: {
    sampul: "from-lagun-500 to-lagun-800",
    lencana: "bg-lagun-500/10 text-lagun-800 ring-lagun-500/30",
    titik: "bg-lagun-500",
  },
  Fiksi: {
    sampul: "from-plum-500 to-plum-800",
    lencana: "bg-plum-500/10 text-plum-800 ring-plum-500/30",
    titik: "bg-plum-500",
  },
  "Pengembangan Diri": {
    sampul: "from-gading-500 to-gading-800",
    lencana: "bg-gading-500/10 text-gading-800 ring-gading-500/30",
    titik: "bg-gading-500",
  },
};

// Info ruang baca — satu tempat agar Hero dan Footer selalu konsisten.
// (Ganti dengan alamat & jam resmi Pustaka Senja.)
export const infoRuangBaca = {
  nama: "Pustaka Senja",
  slogan: "Tempat pulang bagi yang suka membaca, selepas kelas dan menjelang senja.",
  deskripsi:
    "Ruang baca dan perpustakaan komunitas di dekat kampus. Datang, pilih buku, dan baca di tempat atau pinjam untuk dibawa pulang.",
  lokasi: "Dekat Kampus",
  jamBuka: "Senin–Sabtu, 09.00–20.00 WITA",
};

export default dataBuku;
