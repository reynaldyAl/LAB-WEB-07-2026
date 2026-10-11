// DATA AWAL PRAKTIKAN

const dataPraktikan = [
    {nama: "Budi", nilaiTugas: [80, 85, 90, 90]},
    {nama: "Siti", nilaiTugas: [60, 60, 60, 90]},
    {nama: "Andi", nilaiTugas: [90, 90, 90, 90]},
    {nama: "Dewi", nilaiTugas: [75, 75, 75, 90]},
    {nama: "Eko", nilaiTugas: [45, 45, 45, 90]},
    {nama: "Alfa", nilaiTugas: [100, 100, 100, 90]}
];

// INPUT NAMA ASLAB
const namaAsisten = prompt("SISTEM EVALUASI PRAKTIKUM\n\n" +"Masukkan nama Asisten Lab:");
// Tambah kondisi bila inputan kosong/salah (alert)
// Saat kosong tidak perlu pndah page, langsung alert saja
// Menentukan nama asisten


// VERIFIKASI INPUT
if (namaAsisten !== null && namaAsisten.trim() !== "") {
    // Funct Hitung Rata-Rata
    function hitungRataRata(nilaiTugas) {
        const total = nilaiTugas.reduce(
            (jumlah, nilai) => jumlah + nilai,
            0
        );
        return total / nilaiTugas.length;
    }

    // Funct Status (Batas = 75)
    function tentukanStatus(rataRata) {
        if (rataRata >= 75) {
            return "LULUS";
        } else {
            return "TIDAK LULUS";
        }
    }

    // Proses Data
    const hasilEvaluasi = dataPraktikan.map(
        function (praktikan) {
            const rataRata = hitungRataRata(praktikan.nilaiTugas);
            const status = tentukanStatus(rataRata);

            return {
                nama: praktikan.nama,
                nilaiTugas: praktikan.nilaiTugas,
                rataRata: rataRata,
                status: status
            };
        }
    );

    // Hitung yg Lulus
    const jumlahLulus = hasilEvaluasi.filter(
        function (praktikan) {
                return praktikan.status == "LULUS";
            }
        ).length;

    // Hitung yg Tidak Lulus
    const jumlahTidakLulus = hasilEvaluasi.filter(
        function (praktikan) {
                return praktikan.status == "TIDAK LULUS";
            }
        ).length;

    // Console.log Hasil Akhir
    console.log("=== HASIL EVALUASI PRAKTIKUM ===");
    console.log(hasilEvaluasi);


    // Doc.writef
    document.write(`
        <style>
            body {
                font-family: Arial, sans-serif;
                background: #f5f5f5;
                color: #111;
                margin: 0;
            }

            .container {
                max-width: 1100px;
                margin: auto;
                padding: 30px 20px;
            }

            .header {
                background: #111;
                color: white;
                padding: 25px;
                border-radius: 15px;
                margin-bottom: 20px;
            }

            .header-top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 20px;
            }

            .header h1 {
                margin: 0 0 8px;
                font-size: 28px;
            }

            .header p {
                margin: 0;
                color: #ccc;
            }

            .assistant {
                background: white;
                color: #111;
                padding: 10px 15px;
                border-radius: 10px;
                text-align: right;
            }

            .assistant small {
                display: block;
                color: #777;
                margin-bottom: 4px;
            }

            .summary {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 15px;
                margin-bottom: 25px;
            }

            .summary-card {
                background: white;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 12px;
            }

            .summary-label {
                color: #666;
                font-size: 14px;
                margin-bottom: 8px;
            }

            .summary-value {
                font-size: 28px;
                font-weight: bold;
            }

            .section-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 15px;
            }

            .section-header h2 {
                font-size: 21px;
                margin: 0;
            }

            .section-header span {
                color: #666;
                font-size: 14px;
            }

            .cards {
                display: grid;
                grid-template-columns: 1fr;
                gap: 15px;
            }

            .card {
                background: white;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 15px;
            }

            .card-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 15px;
            }

            .student-name {
                font-size: 19px;
                font-weight: bold;
            }

            .status {
                padding: 6px 10px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: bold;
            }

            .lulus {
                background: #dcfce7;
                color: #15803d;
            }

            .tidak-lulus {
                background: #fee2e2;
                color: #dc2626;
            }

            .nilai-container {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
                margin-bottom: 15px;
            }

            .nilai {
                background: #f8fafc;
                padding: 10px;
                text-align: center;
                border-radius: 10px;
                border: 1px solid #ddd;
            }

            .nilai small {
                display: block;
                color: #666;
                margin-bottom: 4px;
            }

            .nilai strong {
                color: #2563eb;
                font-size: 19px;
            }

            .average {
                background: #eff6ff;
                padding: 15px;
                text-align: center;
                border-radius: 10px;
                margin-bottom: 15px;
            }

            .average small {
                display: block;
                color: #666;
                margin-bottom: 4px;
            }

            .average strong {
                color: #2563eb;
                font-size: 30px;
            }

            .footer {
                text-align: center;
                color: #777;
                font-size: 13px;
                margin-top: 30px;
            }

            @media (max-width: 700px) {

                .header-top {
                    flex-direction: column;
                    align-items: flex-start;
                }

                .assistant {
                    text-align: left;
                }

                .summary {
                    grid-template-columns: 1fr;
                }

                .cards {
                    grid-template-columns: 1fr;
                }
            }
        </style>

        <div class="container">

            <div class="header">
                <div class="header-top">
                    <div>
                        <h1>📊 Sistem Evaluasi Praktikum</h1>
                        <p>Laporan performa dan hasil belajar praktikan.</p>
                    </div>

                    <div class="assistant">
                        <small>Asisten Lab</small>
                        <strong>${namaAsisten.trim()}</strong>
                    </div>
                </div>
            </div>


            

            <div class="summary">
                <div class="summary-card">
                    <div class="summary-label">
                        Total Praktikan
                    </div>

                    <div class="summary-value">
                        ${hasilEvaluasi.length}
                    </div>
                </div>

                <div class="summary-card">
                    <div class="summary-label">
                        Praktikan Lulus
                    </div>
                    <div class="summary-value">
                        ${jumlahLulus}
                    </div>
                </div>

                <div class="summary-card">
                    <div class="summary-label">
                        Praktikan Tidak Lulus
                    </div>
                    <div class="summary-value">
                        ${jumlahTidakLulus}
                    </div>
                </div>
            </div>




            <div class="section-header">
                <h2>Hasil Evaluasi Praktikan</h2>
                <span>Batas kelulusan: 75</span>
            </div>


            <div class="cards">
                ${hasilEvaluasi.map(
                    function (praktikan) {

                        let statusClass;
                        if (praktikan.status === "LULUS") {
                            statusClass = "lulus";
                        } else {
                            statusClass = "tidak-lulus";
                        }

                        return `
                            <div class="card">
                                <div class="card-header">
                                    <div class="student-name">
                                        ${praktikan.nama}
                                    </div>
                                    <div class="status ${statusClass}">
                                        ${praktikan.status}
                                    </div>
                                </div>

                                <div class="nilai-container">
                                    ${praktikan.nilaiTugas.map(
                                        function (nilai, index) {
                                            return `
                                                <div class="nilai">
                                                    <small>Tugas ${index + 1}</small>
                                                    <strong>${nilai}</strong>
                                                </div>
                                            `;
                                        }
                                    ).join("")}
                                </div>

                                <div class="average">
                                    <small>Nilai Rata-Rata</small>
                                    <strong>${praktikan.rataRata.toFixed(2)}</strong>
                                </div>
                            </div>
                        `;
                    }
                ).join("")}
            </div>




            <div class="footer">
                Sistem Evaluasi Praktikum
                &copy; 2026
            </div>
        </div>
    `);
} else {
    document.write(`
        <style>
            body {
                margin: 0;
                min-height: 100vh;
                background: #f5f5f5;
                color: #111111;
                font-family: Arial, sans-serif;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .container {
                width: 100%;
                max-width: 500px;
                padding: 20px;
            }

            .card {
                background: #ffffff;
                padding: 35px;
                border: 1px solid #ddd;
                border-radius: 15px;
                text-align: center;
            }

            .icon {
                font-size: 32px;
                margin-bottom: 15px;
            }

            .card h1 {
                margin: 0 0 10px;
                font-size: 24px;
                color: #111111;
            }

            .card p {
                margin: 0 0 20px;
                color: #666666;
                font-size: 14px;
                line-height: 1.6;
            }

            .footer {
                text-align: center;
                color: #777777;
                font-size: 12px;
                margin-top: 15px;
            }

            @media (max-width: 500px) {
                .container {
                    padding: 15px;
                }

                .card {
                    padding: 30px 20px;
                }

                .card h1 {
                    font-size: 21px;
                }
            }
        </style>

        <div class="container">
            <div class="card">
                <div class="icon">⚠️</div>
                <h1>Nama Asisten Belum Diisi</h1>
                <p> Sistem evaluasi praktikum belum dapat dimulai karena nama Asisten Lab belum dimasukkan.</p>
            </div>

            <div class="footer">
                Sistem Evaluasi Praktikum
                &copy; 2026
            </div>
        </div>
    `);
}