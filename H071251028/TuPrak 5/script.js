let daftarTugasGlobal = [];
let namaAnggotaAktif = "";

// Mengambil elemen status dan list anggota dari HTML di awal program
const statusAnggota = document.getElementById("statusAnggota");
const listAnggota = document.getElementById("listAnggota");

// Mengambil elemen status dan list tugas dari HTML di awal program
const statusTugas = document.getElementById("statusTugas");
const listTugas = document.getElementById("listTugas");

// Mengambil elemen input pencarian dan form tambah tugas di awal program
const inputCariTugas = document.getElementById("cariTugas");
const formTambahTugas = document.getElementById("formTambah");

// Mengambil elemen input judul, error, tombol simpan, dan notifikasi form di awal program
const inputJudulTugas = document.getElementById("inputJudul");
const errorFormTugas = document.getElementById("errorForm");
const btnSimpanTugas = document.getElementById("btnSimpan");
const notifikasiTugas = document.getElementById("notifikasi");

// Menampilkan Daftar Anggota
async function ambilAnggota() { //fungsi asinkron bernama ambil anggota
    // Mengambil elemen HTML berdasarkan ID-nya untuk memanipulasi teks status anggota

    statusAnggota.textContent = "Memuat anggota...";
    listAnggota.innerHTML = ""; //nakasi kosongki ssebelum data baru baru dimasukkan

    try {
        // Pengaman error asinkron (try-catch)
        const respons = await fetch("https://jsonplaceholder.typicode.com/users"); // Mengambil data 10 anggota dari server
        if (!respons.ok) { 
            // Dicek apakah sukses, kalau status bukan ok maka melempar error
            throw new Error("Status: " + respons.status);
        }
        const pengguna = await respons.json(); // Mengubah respons data mentah menjadi format objek JavaScript (array)
        
        statusAnggota.textContent = ""; // Menghapus teks loading kalau datanya sudah berhasil dimuat

        pengguna.forEach((orang) => { // Melakukan looping untuk setiap data orang
            const btn = document.createElement("button"); // Membuat elemen tombol baru secara dinamis
            btn.textContent = orang.name; // Mengisi teks tombol dengan nama anggota
            btn.className = "w-full text-left px-4 py-2 border rounded-lg hover:bg-gray-50 transition"; // Memberikan styling Tailwind CSS
            
            btn.addEventListener("click", async () => { // Memasang event klik di setiap tombol anggota
                const semuaTombol = listAnggota.querySelectorAll("button");
                semuaTombol.forEach((b) => b.classList.remove("bg-blue-100", "font-bold")); // Menghapus tanda aktif dari tombol lain
                btn.classList.add("bg-blue-100", "font-bold"); // Menandai tombol yang sedang diklik

                namaAnggotaAktif = orang.name; // Menyimpan nama anggota yang sedang aktif
                document.getElementById("judulTugas").textContent = "Tugas " + orang.name; // Mengubah judul bagian tugas sesuai nama anggota
                await ambilTugasAnggota(orang.id); // Mengambil daftar tugas berdasarkan ID anggota tersebut
            });

            listAnggota.appendChild(btn); // Memasukkan tombol ke dalam list anggota di HTML
        });
    } catch (error) {
        statusAnggota.textContent = "Gagal memuat anggota: " + error.message; // Menampilkan pesan error jika fetch gagal
    }
}

// Menampilkan Tugas Anggota
async function ambilTugasAnggota(userId) {
    // Mengambil elemen HTML status tugas dan list penampung tugas

    statusTugas.textContent = "Memuat tugas..."; // Menampilkan teks loading saat mengambil tugas
    listTugas.innerHTML = ""; // Mengosongkan daftar tugas yang sebelumnya
    document.getElementById("progresTugas").textContent = ""; // Mengosongkan teks progres sementara

    try {
        const respons = await fetch("https://jsonplaceholder.typicode.com/todos?userId=" + userId); // Mengambil tugas sesuai ID anggota
        if (!respons.ok) {
            // Mengecek respons error jika gagal
            throw new Error("Status: " + respons.status);
        }
        const tugas = await respons.json(); // Mengubah data tugas menjadi format array objek
        statusTugas.textContent = ""; // Menghapus teks loading tugas

        daftarTugasGlobal = tugas; // Menyimpan daftar tugas ke variabel global
        tampilkanDaftarTugas(daftarTugasGlobal); // Menampilkan daftar tugas ke halaman
    } catch (error) {
        statusTugas.textContent = "Gagal memuat tugas: " + error.message; // Menampilkan pesan error jika gagal mengambil tugas
    }
}

// Render daftar tugas ke halaman beserta perhitungan progres
function tampilkanDaftarTugas(tugasArray) {
    listTugas.innerHTML = ""; // Mengosongkan list tugas sebelum dirender ulang

    tugasArray.forEach((tugas) => { // Melakukan looping pada setiap tugas
        const li = document.createElement("li"); // Membuat elemen list item (li) baru
        li.className = "flex items-center justify-between p-3 border rounded-lg bg-white shadow-sm tugas-item"; // Memberikan kelas Tailwind CSS
        
        const spanJudul = document.createElement("span"); // Membuat elemen span untuk judul tugas
        spanJudul.textContent = tugas.title; // Mengisi teks span dengan judul tugas
        spanJudul.className = "flex-1 mr-2";

        // Cek status selesai
        if (tugas.completed) {
            spanJudul.classList.add("line-through", "text-gray-400"); // Menambahkan efek coret dan warna abu-abu jika tugas sudah selesai
        }
        li.appendChild(spanJudul); // Memasukkan judul ke dalam elemen li

        const aksiDiv = document.createElement("div"); // Membuat div pembungkus tombol aksi
        aksiDiv.className = "flex space-x-2";

        // Tombol Tandai Selesai (jika belum selesai)
        if (!tugas.completed) {
            const btnSelesai = document.createElement("button"); // Membuat tombol tandai selesai
            btnSelesai.textContent = "Tandai Selesai";
            btnSelesai.className = "bg-green-500 text-white px-2 py-1 text-xs rounded hover:bg-green-600 transition";
            btnSelesai.addEventListener("click", () => { // Event saat tombol selesai diklik
                tugas.completed = true; // Mengubah status tugas menjadi selesai (true)
                tampilkanDaftarTugas(daftarTugasGlobal); // Merender ulang daftar tugas
            });
            aksiDiv.appendChild(btnSelesai); // Memasukkan tombol ke div aksi
        }

        // Tombol Hapus Tugas
        const btnHapus = document.createElement("button"); // Membuat tombol hapus tugas
        btnHapus.textContent = "Hapus";
        btnHapus.className = "bg-red-500 text-white px-2 py-1 text-xs rounded hover:bg-red-600 transition";
        btnHapus.addEventListener("click", () => { // Event saat tombol hapus diklik
            daftarTugasGlobal = daftarTugasGlobal.filter(t => t !== tugas); // Menyaring tugas yang dihapus dari array global
            tampilkanDaftarTugas(daftarTugasGlobal); // Merender ulang daftar tugas
        });
        aksiDiv.appendChild(btnHapus); // Memasukkan tombol hapus ke div aksi

        li.appendChild(aksiDiv); // Memasukkan div aksi ke dalam li
        listTugas.appendChild(li); // Memasukkan li ke dalam list tugas utama di HTML
    });

    perbaruiProgres(); // Memperbarui teks ringkasan progres setiap kali daftar dirender
}

// Memperbarui Progres (X dari Y tugas selesai)
function perbaruiProgres() {
    const total = daftarTugasGlobal.length; // Menghitung total seluruh tugas
    const selesai = daftarTugasGlobal.filter(t => t.completed).length; // Menghitung jumlah tugas yang sudah selesai
    const progresTugas = document.getElementById("progresTugas"); // Mengambil elemen teks progres di HTML
    progresTugas.textContent = "Progres: " + selesai + " dari " + total + " tugas selesai"; // Menampilkan teks format progres
}

// Mencari Tugas
inputCariTugas.addEventListener("input", function (event) {
    const keyword = event.target.value.toLowerCase(); // Mengambil kata kunci ketikan dan mengubahnya ke huruf kecil
    const pesanPencarian = document.getElementById("pesanPencarian");
    pesanPencarian.textContent = "";

    const itemLi = document.querySelectorAll("#listTugas li"); // Mengambil semua elemen list tugas di halaman
    let ditemukan = false; // Penanda apakah ada tugas yang cocok

    daftarTugasGlobal.forEach((tugas, index) => {
        const li = itemLi[index];
        if (li) {
            if (tugas.title.toLowerCase().includes(keyword)) {
                li.classList.remove("hidden"); // Menampilkan kembali tugas jika judulnya mengandung kata kunci
                ditemukan = true;
            } else {
                li.classList.add("hidden"); // Menyembunyikan tugas menggunakan kelas hidden jika tidak cocok
            }
        }
    });

    if (!ditemukan && keyword !== "") {
        pesanPencarian.textContent = "Tidak ada tugas yang cocok."; // Menampilkan pesan jika pencarian tidak membuahkan hasil
    }
});

// Simulasi Menyimpan ke Server dengan Promise
function simpanTugas(judul) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Mensimulasikan jeda waktu jaringan server selama 1 detik
            const sudahAda = daftarTugasGlobal.some(t => t.title.toLowerCase() === judul.toLowerCase()); // Mengecek duplikasi judul tugas (tanpa peduli huruf besar/kecil)
            if (sudahAda) {
                reject(new Error("Tugas dengan judul tersebut sudah ada.")); // Menolak promise jika tugas sudah ada
            } else {
                resolve({ title: judul, completed: false }); // Mengembalikan objek tugas baru jika belum ada
            }
        }, 1000);
    });
}

// Menambah Tugas Baru lewat Form
formTambahTugas.addEventListener("submit", async function (event) {
    event.preventDefault(); // Mencegah halaman melakukan reload otomatis saat form disubmit

    // Mengambil elemen-elemen input, error, tombol, dan notifikasi pada form

    errorFormTugas.textContent = "";
    notifikasiTugas.textContent = "";

    const judul = inputJudulTugas.value.trim(); // Mengambil teks input judul dan membuang spasi di awal/akhir

    // Validasi minimal 5 karakter
    if (judul.length < 5) {
        errorFormTugas.textContent = "Judul tugas minimal harus 5 karakter!"; // Menampilkan pesan error jika judul terlalu pendek
        return;
    }

    if (!namaAnggotaAktif) {
        errorFormTugas.textContent = "Silakan pilih anggota terlebih dahulu!"; // Menampilkan pesan error jika belum memilih anggota
        return;
    }

    btnSimpanTugas.textContent = "Menyimpan..."; // Mengubah teks tombol saat proses penyimpanan berlangsung
    btnSimpanTugas.disabled = true; // Menonaktifkan tombol sementara agar tidak diklik dua kali

    try {
        const tugasBaru = await simpanTugas(judul); // Menunggu hasil promise fungsi simpanTugas
        daftarTugasGlobal.unshift(tugasBaru); // Menambahkan tugas baru ke urutan paling atas array global
        inputCariTugas.value = ""; // Mengosongkan kolom pencarian
        tampilkanDaftarTugas(daftarTugasGlobal); // Merender ulang daftar tugas
        inputJudulTugas.value = ""; // Mengosongkan input form setelah berhasil

        // Notifikasi otomatis hilang setelah 3 detik
        notifikasiTugas.textContent = "Tugas berhasil ditambahkan."; // Menampilkan pesan sukses
        setTimeout(() => {
            notifikasiTugas.textContent = ""; // Menghapus teks notifikasi setelah 3 detik
        }, 3000);

    } catch (error) {
        errorFormTugas.textContent = error.message; // Menampilkan pesan error dari promise (misal: judul duplikat)
    } finally {
        btnSimpanTugas.textContent = "Simpan"; // Mengembalikan teks tombol menjadi "Simpan"
        btnSimpanTugas.disabled = false; // Mengaktifkan kembali tombol simpan
    }
});

// Jalankan pengambilan daftar anggota saat halaman pertama kali dibuka
ambilAnggota();