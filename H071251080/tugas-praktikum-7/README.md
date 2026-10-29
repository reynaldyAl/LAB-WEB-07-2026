# Kedai Kopi Senja

Halaman pemesanan mandiri untuk Kedai Kopi Senja (Tugas Praktikum 7: React Hooks, State & Props).
Dibangun dengan React (Vite), JavaScript (JSX), function component, dan Tailwind CSS v3.

## Menjalankan

```bash
npm install
npm run dev      # buka alamat yang tampil di terminal
npm run build    # build produksi
```

## Fitur

- Daftar 9 menu beserta harga, difilter lewat kategori (Semua, Kopi, Non-Kopi, Makanan).
- Detail setiap menu dibuka sendiri-sendiri (state di `MenuCard`).
- Menu yang habis tidak bisa dipesan (tombol nonaktif, dijaga juga di `handleTambah`).
- Jumlah item dan total harga di Navbar dan Ringkasan Pesanan selalu sama
  (dihitung dari satu state `pesanan` di `App`).
- Form nama dan nomor meja dengan validasi; pesanan kosong atau data tidak valid
  menampilkan pesan galat.
- Setelah terkirim: ucapan terima kasih, form dikosongkan, pesanan dikosongkan.

## Struktur state

| State | Pemilik | Keterangan |
| --- | --- | --- |
| `kategoriAktif` | `App` | Dikirim ke `Navbar` lewat props |
| `pesanan` | `App` | Array `{ id, jumlah }`; jumlah item dan total dihitung dari sini |
| `pesananTerkirim` | `App` | Data untuk ucapan terima kasih |
| `detailTerbuka` | `MenuCard` | Satu state per kartu |
| `nama`, `meja`, `galat` | `FormPesan` | Controlled input dan pesan galat |
