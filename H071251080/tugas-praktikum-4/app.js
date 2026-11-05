// Data awal praktikan (boleh diganti / ditambah)
const dataPraktikan = [
  { nama: "imam", nilaiTugas: [87, 89, 97,] },
  { nama: "amel", nilaiTugas: [60, 60, 60] },
  { nama: "topaz", nilaiTugas: [90, 90, 90] },
  { nama: "mansur", nilaiTugas: [75, 75, 75] },
  { nama: "anu", nilaiTugas: [45, 45, 45] }
];

// buatkan data asisten lab (boleh diganti / ditambah)
// const dataAsistenLab = [
//   { nama: "aslab1", kode: "ASLAB2026" },
//   { nama: "aslab2", kode: "ASLAB2027" },
//   { nama: "aslab3", kode: "ASLAB2028" }
// ];

const BATAS_LULUS = 75;
const KODE_ASISTEN = "ASLAB2026"; // ganti sesuai keinginan

/* ---------- 1. Verifikasi Asisten Lab ---------- */
function verifikasiAsisten() {
  for (let percobaan = 1; percobaan <= 3; percobaan++) {
    const kode = prompt(
      "Verifikasi Asisten Lab\nMasukkan kode asisten (percobaan " + percobaan + " dari 3):"
    );
    if (kode === null) {
      return null; // pengguna menekan Cancel
    }
    if (kode.trim() === KODE_ASISTEN) {
      const nama = prompt("Verifikasi berhasil. Masukkan nama Anda:");
      // tambah kondisi kedua untuk memastikan nama tidak kosong,harus nama dan tidak boleh syntax atau jika mau anonim bisa dikasih default nama "Asisten Lab" dan kasih alert 
      return nama && nama.trim() !== "" ? nama.trim() : "Asisten Lab";
    }
  }
  return null;
}

/* ---------- 2. Logika pemrosesan data ---------- */
function hitungRataRata(daftarNilai) {
  if (daftarNilai.length === 0) {
    return 0;
  }
  const total = daftarNilai.reduce((jumlah, nilai) => jumlah + nilai, 0);
  return total / daftarNilai.length;
}

function tentukanStatus(rataRata) {
  return rataRata >= BATAS_LULUS ? "Lulus" : "Tidak Lulus";
}

// Predikat huruf (terpisah dari status kelulusan)
function tentukanPredikat(rataRata) {
  if (rataRata >= 85) return "A";
  if (rataRata >= 75) return "B";
  if (rataRata >= 60) return "C";
  if (rataRata >= 50) return "D";
  return "E";
}

function prosesData(data) {
  return data.map(function (praktikan) {
    const rataRata = hitungRataRata(praktikan.nilaiTugas);
    return {
      nama: praktikan.nama,
      nilaiTugas: praktikan.nilaiTugas,
      rataRata: Number(rataRata.toFixed(1)),
      predikat: tentukanPredikat(rataRata),
      status: tentukanStatus(rataRata)
    };
  });
}

/* ---------- 3. Fungsi pembuat HTML ---------- */
function buatBatang(nilai) {
  const lolos = nilai >= BATAS_LULUS;
  return (
    '<div class="baris-nilai">' +
      '<div class="batang"><span class="isi ' + (lolos ? "ok" : "gagal") + '" style="width:' + nilai + '%"></span></div>' +
      '<b>' + nilai + '</b>' +
    '</div>'
  );
}

function buatKartu(hasil) {
  const lulus = hasil.status === "Lulus";
  const daftarBatang = hasil.nilaiTugas
    .map(function (nilai, indeks) {
      return '<div class="label-tugas">Tugas ' + (indeks + 1) + '</div>' + buatBatang(nilai);
    })
    .join("");

  return (
    '<article class="kartu ' + (lulus ? "lulus" : "gagal") + '">' +
      '<header class="kartu-atas">' +
        '<h2>' + hasil.nama + '</h2>' +
        '<span class="predikat" title="Predikat">' + hasil.predikat + '</span>' +
      '</header>' +
      '<div class="rata">' +
        '<span class="angka">' + hasil.rataRata + '</span>' +
        '<span class="keterangan">rata-rata nilai</span>' +
      '</div>' +
      '<div class="daftar-tugas">' + daftarBatang + '</div>' +
      '<footer><span class="stempel">' + hasil.status + '</span></footer>' +
    '</article>'
  );
}

function buatRingkasan(hasilAkhir) {
  const jumlahLulus = hasilAkhir.filter(function (h) { return h.status === "Lulus"; }).length;
  const jumlahGagal = hasilAkhir.length - jumlahLulus;
  const rataKelas = hitungRataRata(hasilAkhir.map(function (h) { return h.rataRata; }));

  return (
    '<section class="ringkasan">' +
      '<div><b>' + hasilAkhir.length + '</b><span>praktikan</span></div>' +
      '<div class="r-ok"><b>' + jumlahLulus + '</b><span>lulus</span></div>' +
      '<div class="r-gagal"><b>' + jumlahGagal + '</b><span>tidak lulus</span></div>' +
      '<div><b>' + rataKelas.toFixed(1) + '</b><span>rata-rata kelas</span></div>' +
    '</section>'
  );
}
// pisah folder dan file css, dan buatkan file css baru bernama style.css, lalu pindahkan semua kode CSS dari gayaHalaman ke file style.css, dan hubungkan file style.css ke app.js menggunakan tag <link> di dalam elemen <head>.
const gayaHalaman = `
<style>
  :root {
    --kertas: #edf2f4;
    --tinta: #14213d;
    --garis: #c9d3db;
    --ok: #1b7f5b;
    --gagal: #c23b3b;
    --biru: #2f5da8;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    padding: 40px 20px 64px;
    font-family: "Bricolage Grotesque", system-ui, sans-serif;
    color: var(--tinta);
    background-color: var(--kertas);
    background-image: linear-gradient(var(--garis) 1px, transparent 1px);
    background-size: 100% 32px;
  }
  .halaman { max-width: 1040px; margin: 0 auto; }
  h1 { font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 800; margin: 0 0 6px; letter-spacing: -0.02em; }
  .sub { margin: 0 0 28px; font-size: 1.05rem; }
  .sub b { color: var(--biru); }
  .ringkasan {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px; margin-bottom: 32px;
  }
  .ringkasan div {
    background: #fff; border: 2px solid var(--tinta); border-radius: 6px;
    padding: 12px 16px; display: flex; flex-direction: column;
  }
  .ringkasan b { font-size: 2rem; line-height: 1.1; }
  .ringkasan span { font-size: 0.95rem; }
  .r-ok b { color: var(--ok); }
  .r-gagal b { color: var(--gagal); }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }
  .kartu {
    position: relative; background: #fff; border: 2px solid var(--tinta);
    border-radius: 6px; padding: 20px 20px 18px 34px;
    box-shadow: 5px 5px 0 var(--tinta);
  }
  .kartu::before { /* garis margin buku catatan */
    content: ""; position: absolute; left: 18px; top: 0; bottom: 0;
    width: 2px; background: #e7a5a5;
  }
  .kartu-atas { display: flex; justify-content: space-between; align-items: center; }
  .kartu h2 { margin: 0; font-size: 1.5rem; }
  .predikat {
    width: 38px; height: 38px; display: grid; place-items: center;
    border: 2px solid var(--tinta); border-radius: 50%; font-weight: 800;
  }
  .rata { margin: 14px 0 12px; display: flex; align-items: baseline; gap: 8px; }
  .angka { font-size: 3rem; font-weight: 800; line-height: 1; }
  .keterangan { font-size: 0.95rem; }
  .label-tugas { font-size: 0.85rem; margin-top: 8px; }
  .baris-nilai { display: flex; align-items: center; gap: 10px; }
  .baris-nilai b { min-width: 28px; text-align: right; }
  .batang { flex: 1; height: 10px; background: var(--kertas); border: 1.5px solid var(--tinta); border-radius: 99px; overflow: hidden; }
  .isi { display: block; height: 100%; }
  .isi.ok { background: var(--ok); }
  .isi.gagal { background: var(--gagal); }
  footer { margin-top: 18px; }
  .stempel {
    display: inline-block; padding: 4px 14px; font-weight: 800; font-size: 1.1rem;
    border: 3px solid; border-radius: 4px; transform: rotate(-4deg);
  }
  .lulus .stempel { color: var(--ok); }
  .gagal .stempel { color: var(--gagal); }
  .akses-ditolak { max-width: 480px; margin: 12vh auto; background: #fff; border: 2px solid var(--gagal); border-radius: 6px; padding: 28px; box-shadow: 5px 5px 0 var(--gagal); }
  .akses-ditolak h1 { font-size: 1.8rem; color: var(--gagal); }
  @media (max-width: 480px) { body { padding: 24px 14px 48px; } }
</style>`;

/* ---------- 4. Program utama ---------- */
const namaAsisten = verifikasiAsisten();

if (namaAsisten === null) {
  document.write(gayaHalaman);
  document.write(
    '<main class="akses-ditolak">' +
      '<h1>Akses ditolak</h1>' +
      '<p>Kode asisten tidak valid atau verifikasi dibatalkan. Muat ulang halaman untuk mencoba lagi.</p>' +
    '</main>'
  );
} else {
  const hasilAkhir = prosesData(dataPraktikan);

  document.write(gayaHalaman);
  document.write(
    '<main class="halaman">' +
      '<h1>Laporan Evaluasi Praktikum</h1>' +
      '<p class="sub">Diperiksa oleh <b>' + namaAsisten + '</b>. Batas kelulusan: rata-rata ' + BATAS_LULUS + '.</p>' +
      buatRingkasan(hasilAkhir) +
      '<section class="grid">' + hasilAkhir.map(buatKartu).join("") + '</section>' +
    '</main>'
  );

  // Data hasil akhir (array of objects) ke konsol
  console.log(hasilAkhir);
  console.table(hasilAkhir);
}
