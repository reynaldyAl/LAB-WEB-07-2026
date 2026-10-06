// DATA AWAL PRAKTIKAN
const dataPraktikan = [
    { nama: "Budi", nilaiTugas: [80, 85, 90] },
    { nama: "Siti", nilaiTugas: [60, 60, 60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [75, 75, 75] },
    { nama: "Eko", nilaiTugas: [45, 45, 45] }
];

// 1. VALIDASI NAMA ASISTEN LAB
const daftarAsisten = ["ningning", "martin"]; // Simpan dengan huruf kecil untuk mempermudah pembandingan

let inputNama = prompt("Masukkan nama Asisten Lab:");
let checkNama = false;
let namaAsisten = "";

// Perulangan validasi input
while (!checkNama && inputNama !== null) {
    let namaKecil = inputNama.toLowerCase(); // Mengubah input ke huruf kecil agar case-insensitive

    for (let i = 0; i < daftarAsisten.length; i++) {
        if (namaKecil === daftarAsisten[i]) {
            checkNama = true;
            namaAsisten = inputNama; // Simpan nama asli input
            break;
        }
    }

    if (!checkNama) {
        alert("Nama Asisten Lab tidak terdaftar!");
        inputNama = prompt("Masukkan nama Asisten Lab:");
    }
}

// JIKA INPUT DIBATALKAN
if (inputNama === null) {
    alert("Input dibatalkan.");
    document.write(`
        <h2 style="
            text-align: center;
            font-family: Arial;
            margin-top: 50px;
        ">
            Program dihentikan.
        </h2>
    `);
} else {

// FUNCTION MENGHITUNG RATA-RATA (MENGGUNAKAN REDUCE)
function hitungRataRata(nilaiTugas) {
    const total = nilaiTugas.reduce((acc, curr) => acc + curr, 0);
    return total / nilaiTugas.length;
}

// MEMPROSES DATA PRAKTIKAN
const hasilPraktikan = dataPraktikan.map(function(praktikan) {
    const rataRata = hitungRataRata(praktikan.nilaiTugas);
    let status;
    if (rataRata >= 75) {
        status = "LULUS";
    } else {
        status = "TIDAK LULUS";
    }
    return {
        nama: praktikan.nama,
        nilaiTugas: praktikan.nilaiTugas,
        rataRata: rataRata,
        status: status
    };
});

// MENAMPILKAN HASIL KE HALAMAN WEB
document.write(`
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistem Evaluasi Praktikum</title>
    <link rel="stylesheet" href="style/style.css">
</head>

<body>
<div class="container">

    <!-- HEADER -->
    <div class="header">
        <h1>Sistem Evaluasi Praktikum</h1>
        <p>Laporan Performa Praktikan</p>

        <p>
            Asisten Lab:
            <strong>
                ${namaAsisten.toUpperCase()}
            </strong>
        </p>
    </div>

    <!-- CARD PRAKTIKAN -->
    <div class="cards">
`);

for (const praktikan of hasilPraktikan) {
    let classStatus;
    if (praktikan.status === "LULUS") {
        classStatus = "lulus";
    } else {
        classStatus = "tidak-lulus";
    }

    document.write(`
        <div class="card">
            <h2>${praktikan.nama}</h2>
            <p><strong>Nilai Tugas:</strong></p>
            <p>${praktikan.nilaiTugas.join(" - ")}</p>
            <p><strong>Rata-rata:</strong></p>
            <div class="nilai">${praktikan.rataRata.toFixed(2)}</div>
            <p>Status:</p>
            <span class="status ${classStatus}">${praktikan.status}</span>
        </div>
    `);
};

// FOOTER
document.write(`
    </div>
    <div class="footer">
        <p>Batas Kelulusan: <strong>75</strong></p>
        <p>Sistem Evaluasi Praktikum Interaktif</p>
    </div>

</div>
</body>
</html>
`);

// 5. MENAMPILKAN HASIL AKHIR DI CONSOLE
console.log("=================================");
console.log("HASIL EVALUASI PRAKTIKAN");
console.log("=================================");
console.log(hasilPraktikan);
}