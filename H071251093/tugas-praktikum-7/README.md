# Kedai Kopi Senja

Halaman pemesanan mandiri untuk Kedai Kopi Senja. Dibuat dengan React (Vite), JavaScript (JSX), dan Tailwind CSS v3.

## Menjalankan

```bash
npm install
npm run dev
```

## Struktur State

| State | Lokasi | Keterangan |
|---|---|---|
| `kategoriAktif` | `App.jsx` | Kategori yang dipilih; dikirim ke `Navbar` lewat props |
| `pesanan` | `App.jsx` | Array `{ id, jumlah }`; total jumlah dan total harga dihitung dari sini |
| `pesananTerkirim` | `App.jsx` | Data pemesan untuk ucapan terima kasih |
| `detailTerbuka` | `MenuCard.jsx` | Per kartu, sehingga tidak memengaruhi menu lain |
| `nama`, `meja`, `galat` | `FormPesan.jsx` | Isi form dan pesan kesalahan |

Total jumlah dan total harga tidak disimpan sebagai state sendiri. Keduanya diturunkan dari `pesanan`, sehingga angka di `Navbar` dan `RingkasanPesanan` selalu sama.

## Catatan

`vite.config.js` ditambahkan karena dibutuhkan Vite untuk plugin React.
