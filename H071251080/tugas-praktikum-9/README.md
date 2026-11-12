# Pustaka Senja

Aplikasi ruang baca komunitas **Pustaka Senja** (Next.js App Router + Tailwind CSS). Praktikum 9 menambahkan **PostgreSQL dengan raw SQL** (driver `pg`, tanpa ORM): katalog dibaca dari database dan buku bisa ditambah, diubah, dan dihapus.

## Menjalankan

1. Buat database kosong bernama `pustaka_senja` (atau nama dari asisten lab), misalnya lewat pgAdmin.
2. Salin `.env.example` menjadi `.env.local`, lalu isi `DATABASE_URL`:
   ```
   DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/pustaka_senja
   ```
   `.env.local` sudah diabaikan git; jangan diunggah.
3. Buat tabel + 9 data awal. Pilih salah satu:
   - pgAdmin: buka Query Tool pada database tersebut, jalankan isi `database/pustaka_senja.sql`
   - terminal: `npm run db:setup`
4. Pasang dependensi dan jalankan:
   ```bash
   npm install
   npm run db:cek   # bukti koneksi: menampilkan 9 buku yang terbaca dari PostgreSQL
   npm run dev      # http://localhost:3000
   ```

## Fitur dan lokasi kodenya

| Fitur | Halaman | Query SQL |
|---|---|---|
| Statistik beranda | `/` | `COUNT(*) FILTER (WHERE ...)` di `src/lib/queries.js` |
| Read daftar | `/katalog` | `SELECT ... FROM buku ORDER BY id` |
| Read detail | `/katalog/[id]` | `SELECT ... WHERE id = $1` |
| Create | `/katalog/baru` | `INSERT INTO buku (...) VALUES ($1..$6)` di `src/app/katalog/actions.js` |
| Update | `/katalog/[id]/edit` | `UPDATE buku SET ... WHERE id = $7` |
| Delete | tombol Hapus (kartu & detail), dengan dialog konfirmasi | `DELETE FROM buku WHERE id = $1` |

- **Koneksi**: `src/lib/db.js` (`Pool`, membaca `DATABASE_URL`). Diberi `import "server-only"` sehingga build gagal jika terimpor dari Client Component.
- **Server Actions** (`"use server"`): `tambahBuku`, `ubahBuku`, `hapusBuku`; setiap mutasi memanggil `revalidatePath()` lalu `redirect()`.
- **Parameterized query** untuk semua nilai dinamis; tidak ada penggabungan string SQL.
- **Validasi di server** (judul, penulis, kategori, tahun 4 angka, sinopsis) dan indeks unik judul+penulis di database untuk mencegah buku ganda.
- **ID tidak valid** (`abc`, `0`, `99999999999`, ...) tidak pernah sampai ke database; halaman menampilkan "Buku tidak ditemukan" beserta tautan kembali.
- `"use client"` hanya dipakai pada komponen interaktif: `Navbar`, `BukuCard`, `KatalogInteraktif`, `FormBuku`, `FormUsulan`, `TombolHapus`, `error.jsx`.

## Struktur singkat

```
src/lib/db.js            koneksi Pool (server-only)
src/lib/queries.js       query SELECT
src/lib/konstanta.js     kategori, warna, info ruang baca
src/app/katalog/actions.js   Server Actions (INSERT / UPDATE / DELETE)
src/components/TombolHapus.jsx   konfirmasi hapus
database/pustaka_senja.sql       skema + data awal
scripts/                 db:setup dan db:cek
```

## Catatan

- Kolom `tersedia` buku ke-9 kosong di soal Praktikum 8; diasumsikan `TRUE`.
- Alamat/jam buka di `src/lib/konstanta.js` hanyalah contoh.
- Favorit di kartu buku hanya tersimpan di browser selama halaman terbuka (state `useState`, bukan database).
- Daftar usulan buku di `/usulan` juga hanya per sesi halaman; yang tersimpan di PostgreSQL hanya tabel `buku`.
