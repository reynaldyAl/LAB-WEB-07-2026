//data awal praktikan
const dataPraktikan = [
  { nama: "Budi", nilaiTugas: [80, 85, 90] },
  { nama: "Siti", nilaiTugas: [60, 60, 60] },
  { nama: "Andi", nilaiTugas: [90, 90, 90] },
  { nama: "Dewi", nilaiTugas: [75, 75, 75] },
  { nama: "Eko", nilaiTugas: [45, 45, 45] }
];

const BATAS_LULUS = 75;

// tambahkan perkondisian untuk memverifikasi nama asisten lab sebelum menampilkan laporan
// tambahkan perkondisian untuk verifikasi nama agar tifak kosong dan berupa nama bukan huruf sintaks dan lain lain
function verifikasiAsisten() {
  const nama = prompt("Masukkan nama Anda (Asisten Lab):");
  if (nama === null || nama.trim() === "") return null; // Batal / kosong
  return nama.trim();
}


function hitungRataRata(nilai) {
  if (nilai.length === 0) return 0;
  const total = nilai.reduce((jumlah, n) => jumlah + n, 0);
  return Number((total / nilai.length).toFixed(2));
}

function tentukanStatus(rataRata) {
  return rataRata >= BATAS_LULUS ? "Lulus" : "Tidak Lulus";
}

function prosesData(data) {
  return data.map(function (praktikan) {
    const rataRata = hitungRataRata(praktikan.nilaiTugas);
    return {
      nama: praktikan.nama,
      nilaiTugas: praktikan.nilaiTugas,
      rataRata: rataRata,
      status: tentukanStatus(rataRata)
    };
  });
}

// pisahkan gaya CSS ke dalam variabel gaya agar lebih rapi dan mudah diubah
const gaya = `
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
    background: #eef2f8;
    color: #1e293b;
    min-height: 100vh;
    padding: 28px 16px;
  }
  .wadah {
    max-width: 560px; margin: 0 auto; background: #fff;
    border-radius: 14px; padding: 24px;
    box-shadow: 0 6px 24px rgba(30, 41, 59, .10);
  }
  .judul { font-size: 1.6rem; font-weight: 800; letter-spacing: -0.01em; }
  .subjudul { font-size: .8rem; color: #64748b; margin-top: 2px; }
  hr { border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0; }
  .sambutan {
    background: #eff6ff; border-left: 4px solid #3b82f6;
    padding: 12px 14px; border-radius: 4px; margin-bottom: 16px;
  }
  .sambutan h2 { font-size: 1rem; font-weight: 600; color: #1e3a8a; }
  .sambutan h2 span { color: #2563eb; font-weight: 800; }
  .sambutan p { font-size: .8rem; color: #3b6fd4; margin-top: 2px; }
  .baris {
    display: flex; justify-content: space-between; align-items: center;
    border: 1px solid #e2e8f0; border-radius: 8px;
    padding: 12px 14px; margin-bottom: 10px;
  }
  .nama { font-size: 1rem; font-weight: 700; }
  .rata { font-size: .8rem; font-weight: 600; color: #64748b; }
  .badge {
    font-size: .72rem; font-weight: 700; padding: 3px 12px; border-radius: 999px;
    background: #d1fae5; color: #065f46;
  }
  .badge.gagal { background: #fee2e2; color: #991b1b; }
  .ditolak { text-align: center; padding: 8px 0; }
  .ditolak h1 { color: #b91c1c; font-size: 1.4rem; margin-bottom: 6px; }
  .ditolak p { color: #64748b; font-size: .9rem; }
</style>
`;

function renderBaris(p) {
  const kelasBadge = p.status === "Lulus" ? "badge" : "badge gagal";
  return (
    '<div class="baris">' +
      "<div>" +
        '<div class="nama">' + p.nama + "</div>" +
        '<div class="rata">Rata-rata: ' + p.rataRata + "</div>" +
      "</div>" +
      '<span class="' + kelasBadge + '">' + p.status + "</span>" +
    "</div>"
  );
}

function renderLaporan(namaAsisten, hasil) {
  document.write(gaya);
  document.write('<div class="wadah">');
  document.write( 
    '<h1 class="judul">Sistem Laporan Praktikum</h1>' +
    '<p class="subjudul">Evaluasi kelulusan berbasis JavaScript murni</p><hr>'
  );
  document.write(
    '<div class="sambutan"><h2>Selamat datang Asisten <span>' + namaAsisten + "</span>!</h2>" +
    "<p>Berikut adalah laporan hasil evaluasi praktikum.</p></div>"
  );
  hasil.forEach(function (p) { document.write(renderBaris(p)); });
  document.write("</div>");
}

function renderDitolak() {
  document.write(gaya);
  document.write(
    '<div class="wadah ditolak"><h1>Akses ditolak</h1>' +
    "<p>Nama Asisten Lab wajib diisi. Muat ulang halaman untuk mencoba lagi.</p></div>"
  );
}

const namaAsisten = verifikasiAsisten();

if (namaAsisten !== null) {
  const hasilAkhir = prosesData(dataPraktikan);
  renderLaporan(namaAsisten, hasilAkhir);

  console.log("Hasil evaluasi praktikum:", hasilAkhir);
} else {
  renderDitolak();
}