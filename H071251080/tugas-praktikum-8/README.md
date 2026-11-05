# Pustaka Senja

Aplikasi multi-halaman untuk **Pustaka Senja** (ruang baca komunitas milik Nabila), dibangun dengan **Next.js App Router** dan **Tailwind CSS**. Tugas Praktikum 8 – Framework React (Next.js Intro).

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # uji build produksi
```

## Halaman

| URL | Berkas | Jenis |
|---|---|---|
| `/` | `src/app/page.jsx` | Server Component (Hero + statistik dihitung dari `dataBuku`) |
| `/katalog` | `src/app/katalog/page.jsx` | Client (filter kategori, pencarian, favorit) |
| `/katalog/[id]` | `src/app/katalog/[id]/page.jsx` | Server Component (dynamic route, `await params`, `.find()`) |
| `/usulan` | `src/app/usulan/page.jsx` | Client (controlled form + validasi) |

Komponen `Navbar` (`usePathname`) dan `BukuCard` (`useState`) adalah Client Component; `Hero`, `Footer`, `layout.jsx`, beranda, dan detail tetap Server Component.

## Fitur tambahan untuk kebutuhan Nabila

- **Tautan bisa dibagikan**: tiap buku punya URL sendiri, dan judul tab + pratinjau tautan (Open Graph) ikut berubah per buku lewat `generateMetadata`.
- **Pencarian** judul/penulis dan saklar **"Hanya yang tersedia"** di katalog, plus jumlah buku per kategori dan keadaan kosong dengan tombol reset.
- **Ringkasan koleksi** di beranda (rak visual tersedia/dipinjam, daftar "siap dipinjam hari ini") yang selalu sinkron dengan data.
- **Halaman detail** menampilkan saran buku sejenis (yang tersedia lebih dulu) saat buku sedang dipinjam.
- **Form usulan**: pesan galat per kolom, penghitung karakter, dan petunjuk bila judul yang diketik sudah ada di koleksi.
- Aksesibel (label, `aria-*`, fokus terlihat) dan responsif hingga 375px.

## Catatan

- Data hanya di `src/data/dataBuku.js` (diimpor lewat `@/data/dataBuku`). Kolom `tersedia` buku ke-9 kosong di soal, diasumsikan `true`.
- Alamat dan jam buka (`infoRuangBaca` di `dataBuku.js`) adalah contoh; ganti dengan data resmi.
- Usulan hanya tersimpan selama sesi halaman (belum ada backend; dibahas di Bab 9–10).
- Font (Fraunces & Instrument Sans) di-host lokal lewat paket `@fontsource-variable`, sehingga build tidak butuh internet ke Google Fonts.
