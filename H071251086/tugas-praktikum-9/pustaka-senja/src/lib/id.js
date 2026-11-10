// Mengubah nilai dari URL atau form menjadi ID angka yang aman.
// Mengembalikan null jika bukan bilangan bulat positif dalam rentang INTEGER PostgreSQL.
export function parseId(nilai) {
  const teks = String(nilai ?? "");
  if (!/^\d+$/.test(teks)) return null;
  const angka = Number(teks);
  return angka > 0 && angka <= 2147483647 ? angka : null;
}