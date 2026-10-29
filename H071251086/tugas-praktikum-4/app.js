// ===== Data awal =====
const dataPraktikan = [
  { nama: "Budi", nilaiTugas: [80, 85, 89] },
  { nama: "Siti", nilaiTugas: [60, 60, 60] },
  { nama: "Andi", nilaiTugas: [90, 90, 90] },
  { nama: "Dewi", nilaiTugas: [75, 75, 75] },
  { nama: "Eko", nilaiTugas: [45, 45, 45] }
];

const BATAS_LULUS = 75;

// ===== Fungsi =====
function verifikasiAsisten() {
  const nama = prompt("Selamat datang! Masukkan nama Asisten Lab:");
  // Batal atau kosong dianggap Asisten Lab tidak hadir
  if (nama === null || nama.trim() === "") return null;
  return nama.trim();
  // tambah perkondisian if else
  // kalau akses ditolak langsung alert tidak perlu masuk dashboard

}

function hitungRataRata(nilai) {
  if (nilai.length === 0) return 0;
  const total = nilai.reduce((jumlah, n) => jumlah + n, 0); 
  // dikasih 0 supaya menghindari TypeError: Reduce of empty array with no initial value 
  return Math.round((total / nilai.length) * 100)/100;
}

function tentukanPredikat(rata) {
  if (rata >= 85) return "A";
  else if (rata >= 75) return "B";
  else if (rata >= 60) return "C";
  else return "D";
}

function prosesData(data) {
  return data.map(function (p) {
    const rataRata = hitungRataRata(p.nilaiTugas);
    return {
      nama: p.nama,
      nilaiTugas: p.nilaiTugas,
      rataRata: rataRata,
      predikat: tentukanPredikat(rataRata),
      status: rataRata >= BATAS_LULUS ? "Lulus" : "Tidak Lulus"
    };
  });
}

function buatKartu(p) {
  const kelas = p.status === "Lulus" ? "lulus" : "gagal";
  return `
    <article class="kartu kartu--${kelas}">
      <h3>${p.nama}</h3>
      <p>${p.rataRata}</p>
      <small>Predikat ${p.predikat} · ${p.status}</small>
    </article>`;
}

function buatBaris(p) {
  const kelas = p.status === "Lulus" ? "lulus" : "gagal";
  return `
    <tr>
      <td>${p.nama}</td>
      <td>${p.nilaiTugas.join(" / ")}</td>
      <td>${p.rataRata}</td>
      <td><span class="titik titik--${kelas}"></span>${p.status}</td>
    </tr>`;
}

// ===== Eksekusi =====
const asisten = verifikasiAsisten();

if (asisten === null) {
  document.write(`
    <section class="section">
      <div class="ditolak">
        <h2>Akses ditolak</h2>
        <p>Nama Asisten Lab belum diisi. Muat ulang halaman lalu masukkan nama Anda.</p>
      </div>
    </section>`);
} else {
  const hasil = prosesData(dataPraktikan);
  const jumlahLulus = hasil.filter(p => p.status === "Lulus").length;
  const rataKelas = hitungRataRata(hasil.map(p => p.rataRata));
  const terbaik = hasil.reduce((a, b) => (b.rataRata > a.rataRata ? b : a));

  document.write(`
  <section class="tengah">
    <div class="welcome">
      <h1>Selamat datang, ${asisten}!</h1>
      <p>${jumlahLulus} dari ${hasil.length} praktikan lulus.</p>
    </div>

    <h2 id="kartu">Praktikan</h2>
    <div class="grid">${hasil.map(buatKartu).join("")}</div>

    <h2 id="tabel">Tabel Nilai</h2>
    <div class="tabel-wrap">
      <table class="tabel">
        <thead>
          <tr><th>Nama</th><th>Nilai Tugas</th><th>Rata-rata</th><th>Status</th></tr>
        </thead>
        <tbody>${hasil.map(buatBaris).join("")}</tbody>
      </table>
    </div>
  </section>

  <aside class="kanan">
    <div class="profil">${asisten.charAt(0).toUpperCase()}
    </div>
      <h3>${asisten}</h3>
      <p>Asisten Lab</p>
     <ul class="info">
        <li><span>Praktikan</span><strong>${hasil.length}</strong></li>
        <li><span>Lulus</span><strong>${jumlahLulus}</strong></li>
        <li><span>Tidak lulus</span><strong>${hasil.length - jumlahLulus}</strong></li>
        <li><span>Rata-rata kelas</span><strong>${rataKelas}</strong></li>
        <li><span>Tertinggi</span><strong>${terbaik.nama}</strong></li>
      </ul>
  </aside>`);
}

// console log yg menampilkan array dari datanya
