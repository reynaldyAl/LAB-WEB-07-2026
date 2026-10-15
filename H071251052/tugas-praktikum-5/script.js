const daftarAnggota = document.getElementById("daftarAnggota");
const daftarTugas = document.getElementById("daftarTugas");

const loadingAnggota = document.getElementById("loadingAnggota");
const errorAnggota = document.getElementById("errorAnggota");

const judulTugas = document.getElementById("judulTugas");
const loadingTugas = document.getElementById("loadingTugas");
const errorTugas = document.getElementById("errorTugas");
const progres = document.getElementById("progres");

const cariTugas = document.getElementById("cariTugas");
const tidakAdaTugas = document.getElementById("tidakAdaTugas");

const formTugas = document.getElementById("formTugas");
const judulBaru = document.getElementById("judulBaru");
const tombolSimpan = document.getElementById("tombolSimpan");
const pesanForm = document.getElementById("pesanForm");
const notifikasi = document.getElementById("notifikasi");

let anggotaDipilih = null;
let tugasSekarang = [];
let daftarTombolAnggota = [];
let elemenTugas = [];

// Mengambil daftar anggota dari server
async function ambilAnggota() {
    loadingAnggota.textContent = "Memuat anggota...";
    errorAnggota.textContent = "";

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Gagal mengambil data anggota.");
        }

        const data = await response.json();

        daftarAnggota.innerHTML = "";
        daftarTombolAnggota = [];

        data.forEach(function(anggota) {
            const tombol = document.createElement("button");

            tombol.textContent = anggota.name;
            tombol.className = "text-left p-3 rounded-lg border hover:bg-blue-50";

            tombol.addEventListener("click", function() {
                pilihAnggota(anggota, tombol);
            });

            daftarAnggota.appendChild(tombol);
            daftarTombolAnggota.push(tombol);
        });
    } catch (error) {
        errorAnggota.textContent = error.message;
    } finally {
        loadingAnggota.textContent = "";
    }
}

// Memilih anggota dan mengambil tugasnya
async function pilihAnggota(anggota, tombol) {
    anggotaDipilih = anggota;

    daftarTombolAnggota.forEach(function(item) {
        item.classList.remove("bg-blue-100", "border-blue-500");
    });

    tombol.classList.add("bg-blue-100", "border-blue-500");

    judulTugas.textContent = "Tugas " + anggota.name;

    daftarTugas.innerHTML = "";
    tugasSekarang = [];
    elemenTugas = [];

    progres.textContent = "0 dari 0 tugas selesai";
    cariTugas.value = "";
    tidakAdaTugas.textContent = "";
    errorTugas.textContent = "";
    pesanForm.textContent = "";
    notifikasi.textContent = "";

    loadingTugas.textContent = "Memuat tugas...";

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos?userId=" + anggota.id
        );

        if (!response.ok) {
            throw new Error("Gagal mengambil data tugas.");
        }

        const data = await response.json();
        tugasSekarang = data;

        tampilkanTugas();
    } catch (error) {
        errorTugas.textContent = error.message;
    } finally {
        loadingTugas.textContent = "";
    }
}

// Menampilkan daftar tugas
function tampilkanTugas() {
    daftarTugas.innerHTML = "";
    elemenTugas = [];

    tugasSekarang.forEach(function(tugas) {
        const kotak = document.createElement("div");

        kotak.className = "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border rounded-lg p-3";

        const judul = document.createElement("p");
        judul.textContent = tugas.title;
        judul.className = "break-words";

        if (tugas.completed) {
            judul.classList.add("line-through", "text-gray-400");
        }

        const bagianTombol = document.createElement("div");
        bagianTombol.className = "flex gap-2";

        const tombolSelesai = document.createElement("button");
        tombolSelesai.textContent = "Tandai selesai";
        tombolSelesai.className = "bg-green-600 text-white px-3 py-2 rounded-lg";

        const tombolHapus = document.createElement("button");
        tombolHapus.textContent = "Hapus";
        tombolHapus.className = "bg-red-600 text-white px-3 py-2 rounded-lg";

        if (tugas.completed) {
            tombolSelesai.remove();
        } else {
            tombolSelesai.addEventListener("click", function() {
                tugas.completed = true;

                judul.classList.add("line-through", "text-gray-400");
                tombolSelesai.remove();

                tampilkanTugas();
            });
            bagianTombol.appendChild(tombolSelesai);
        }

        tombolHapus.addEventListener("click", function() {
            tugasSekarang = tugasSekarang.filter(function(item) {
                return item !== tugas;
            });

            tampilkanTugas();
        });

        bagianTombol.appendChild(tombolHapus);
        kotak.appendChild(judul);
        kotak.appendChild(bagianTombol);
        daftarTugas.appendChild(kotak);

        elemenTugas.push({kotak: kotak, judul: tugas.title});
    });

    const jumlahSelesai = tugasSekarang.filter(function(tugas) {
        return tugas.completed;
    }).length;

    progres.textContent = jumlahSelesai + " dari " + tugasSekarang.length + " tugas selesai";

    filterTugas();
}

// Mencari tugas berdasarkan judul
function filterTugas() {
    const kataKunci = cariTugas.value.toLowerCase();
    let jumlahCocok = 0;

    elemenTugas.forEach(function(item) {
        if (item.judul.toLowerCase().includes(kataKunci)) {
            item.kotak.classList.remove("hidden");
            jumlahCocok++;
        } else {
            item.kotak.classList.add("hidden");
        }
    });

    if (jumlahCocok === 0) {
        tidakAdaTugas.textContent = "Tidak ada tugas yang cocok.";
    } else {
        tidakAdaTugas.textContent = "";
    }
}

cariTugas.addEventListener("input", function() {
    filterTugas();
});

// Simulasi menyimpan tugas selama 1 detik
function simpanTugas(judul) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const sudahAda = tugasSekarang.some(function(tugas) {
                return tugas.title.toLowerCase() === judul.toLowerCase();
            });

            if (sudahAda) {
                reject(new Error("Tugas tersebut sudah ada."));
            } else {
                resolve({
                    title: judul,
                    completed: false
                });
            }
        }, 1000);
    });
}

// Menambahkan tugas baru
formTugas.addEventListener("submit", async function(event) {
    event.preventDefault();

    pesanForm.textContent = "";
    notifikasi.textContent = "";

    if (anggotaDipilih === null) {
        pesanForm.textContent = "Pilih anggota terlebih dahulu.";
        return;
    }

    const judul = judulBaru.value.trim();

    if (judul.length < 5) {
        pesanForm.textContent = "Judul tugas harus memiliki minimal 5 karakter.";
        return;
    }

    tombolSimpan.disabled = true;
    tombolSimpan.textContent = "Menyimpan...";

    try {
        const tugasBaru = await simpanTugas(judul);

        tugasSekarang.push(tugasBaru);

        tampilkanTugas();
        judulBaru.value = "";

        notifikasi.textContent = "Tugas berhasil ditambahkan.";

        setTimeout(function() {
            notifikasi.textContent = "";
        }, 5000);

    } catch (error) {
        pesanForm.textContent = error.message;

    } finally {
        tombolSimpan.textContent = "Simpan";
        tombolSimpan.disabled = false;
    }
});

// Menampilkan anggota saat halaman dibuka
ambilAnggota();