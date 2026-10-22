const API = "https://jsonplaceholder.typicode.com";

const daftarAnggota = document.getElementById("daftar-anggota");
const statusAnggota = document.getElementById("status-anggota");
const judulTugas = document.getElementById("judul-tugas");
const ringkasan = document.getElementById("ringkasan");
const statusTugas = document.getElementById("status-tugas");
const inputCari = document.getElementById("cari");
const formTugas = document.getElementById("form-tugas");
const inputJudul = document.getElementById("input-judul");
const tombolSimpan = document.getElementById("tombol-simpan");
const pesanForm = document.getElementById("pesan-form");
const notifikasi = document.getElementById("notifikasi");
const daftarTugas = document.getElementById("daftar-tugas");
const kosong = document.getElementById("kosong");

let anggotaDipilihId = null; // id anggota yang sedang dipilih
let tugasSiap = false;       // true setelah tugas anggota berhasil dimuat
let tokenPermintaan = 0;     // untuk mengabaikan respons lama bila anggota berganti
let timerNotifikasi = null;

const KELAS_SELESAI = ["line-through", "text-gray-400"];
const KELAS_TOMBOL_BIASA = ["bg-white", "text-slate-700"];
const KELAS_TOMBOL_TERPILIH = ["bg-indigo-600", "text-white", "border-indigo-600"];

/* ---------- Fungsi bantu ---------- */

function pesanDariError(err) {
  // fetch() melempar TypeError bila koneksi putus
  if (err instanceof TypeError) {
    return "Koneksi bermasalah. Periksa internet Anda lalu coba lagi.";
  }
  return err.message;
}

function tampilStatus(elemen, teks, adalahError = false) {
  elemen.textContent = teks;
  elemen.classList.toggle("text-red-600", adalahError);
  elemen.classList.toggle("text-slate-500", !adalahError);
}

function aturTombolAnggota(nonaktif) {
  daftarAnggota.querySelectorAll("button").forEach((tombol) => {
    tombol.disabled = nonaktif;
  });
}

function tandaiTombol(tombolAktif) {
  daftarAnggota.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.remove(...KELAS_TOMBOL_TERPILIH);
    tombol.classList.add(...KELAS_TOMBOL_BIASA);
  });
  tombolAktif.classList.remove(...KELAS_TOMBOL_BIASA);
  tombolAktif.classList.add(...KELAS_TOMBOL_TERPILIH);
}

function tampilNotifikasi(teks) {
  notifikasi.textContent = teks;
  notifikasi.classList.remove("hidden");
  clearTimeout(timerNotifikasi);
  timerNotifikasi = setTimeout(() => {
    notifikasi.classList.add("hidden");
  }, 3000);
}

/* ---------- Ringkasan dan pencarian ---------- */

function terapkanFilter() {
  const kataKunci = inputCari.value.trim().toLowerCase();
  const semuaTugas = Array.from(daftarTugas.children);
  let cocok = 0;

  semuaTugas.forEach((item) => {
    if (item.dataset.judul.toLowerCase().includes(kataKunci)) {
      item.classList.remove("hidden");
      cocok++;
    } else {
      item.classList.add("hidden");
    }
  });

  if (semuaTugas.length === 0) {
    kosong.textContent = "Belum ada tugas.";
    kosong.classList.remove("hidden");
  } else if (cocok === 0) {
    kosong.textContent = "Tidak ada tugas yang cocok.";
    kosong.classList.remove("hidden");
  } else {
    kosong.classList.add("hidden");
  }
}

function perbaruiRingkasan() {
  const semuaTugas = Array.from(daftarTugas.children);
  const selesai = semuaTugas.filter((item) => item.dataset.selesai === "true").length;
  ringkasan.textContent = `${selesai} dari ${semuaTugas.length} tugas selesai`;
}

function perbaruiTampilan() {
  perbaruiRingkasan();
  terapkanFilter();
}

/* ---------- Membuat satu item tugas ---------- */

function buatItemTugas(judul, selesai) {
  const item = document.createElement("li");
  item.className =
    "flex items-center justify-between gap-3 rounded-lg border border-slate-200 px-4 py-3";
  item.dataset.judul = judul;
  item.dataset.selesai = String(selesai);

  const teksJudul = document.createElement("span");
  teksJudul.className = "text-sm";
  teksJudul.textContent = judul;
  if (selesai) {
    teksJudul.classList.add(...KELAS_SELESAI);
  }

  const aksi = document.createElement("div");
  aksi.className = "flex shrink-0 gap-2";

  if (!selesai) {
    const tombolSelesai = document.createElement("button");
    tombolSelesai.type = "button";
    tombolSelesai.className =
      "rounded-md border border-green-600 px-2 py-1 text-xs text-green-700 hover:bg-green-50 bg-green-100";
    tombolSelesai.textContent = "Tandai selesai";
    tombolSelesai.addEventListener("click", () => {
      item.dataset.selesai = "true";
      teksJudul.classList.add(...KELAS_SELESAI);
      tombolSelesai.remove();
      perbaruiTampilan();
    });
    aksi.appendChild(tombolSelesai);
  }

  const tombolHapus = document.createElement("button");
  tombolHapus.type = "button";
  tombolHapus.className =
    "rounded-md border border-red-500 px-2 py-1 text-xs text-red-600 hover:bg-red-50 bg-red-100";
  tombolHapus.textContent = "Hapus";
  tombolHapus.addEventListener("click", () => {
    item.remove();
    perbaruiTampilan();
  });
  aksi.appendChild(tombolHapus);

  item.appendChild(teksJudul);
  item.appendChild(aksi);
  return item;
}

// F1: memuat daftar anggota
async function muatAnggota() {
  tampilStatus(statusAnggota, "Memuat anggota...");
  try {
    const respons = await fetch(`${API}/users`);
    if (!respons.ok) {
      throw new Error(`Server menjawab dengan status ${respons.status}.`);
    }
    const anggota = await respons.json();

    statusAnggota.textContent = "";
    anggota.forEach((user) => {
      const tombol = document.createElement("button");
      tombol.type = "button";
      tombol.className =
        "rounded-full border border-slate-300 px-3 py-1 text-sm hover:border-indigo-500 disabled:opacity-60 " +
        KELAS_TOMBOL_BIASA.join(" ");
      tombol.textContent = user.name;
      tombol.addEventListener("click", () => pilihAnggota(user, tombol));
      daftarAnggota.appendChild(tombol);
    });
  } catch (err) {
    tampilStatus(statusAnggota, `Gagal memuat anggota. ${pesanDariError(err)}`, true);
  }
}

// F2: memilih anggota dan memuat tugasnya
async function pilihAnggota(user, tombol) {
  anggotaDipilihId = user.id;
  tugasSiap = false;
  const token = ++tokenPermintaan;

  tandaiTombol(tombol);
  judulTugas.textContent = `Tugas ${user.name}`;
  daftarTugas.innerHTML = "";
  ringkasan.textContent = "";
  kosong.classList.add("hidden");
  inputCari.value = "";
  pesanForm.textContent = "";
  tampilStatus(statusTugas, "Memuat tugas...");

  try {
    const respons = await fetch(`${API}/todos?userId=${user.id}`);
    if (!respons.ok) {
      throw new Error(`Server menjawab dengan status ${respons.status}.`);
    }
    const todos = await respons.json();
    if (token !== tokenPermintaan) return; // anggota lain sudah dipilih

    statusTugas.textContent = "";
    todos.forEach((todo) => {
      daftarTugas.appendChild(buatItemTugas(todo.title, todo.completed));
    });
    tugasSiap = true;
    perbaruiTampilan();
  } catch (err) {
    if (token !== tokenPermintaan) return;
    tampilStatus(statusTugas, `Gagal memuat tugas. ${pesanDariError(err)}`, true);
  }
}

// F3: pencarian
inputCari.addEventListener("input", terapkanFilter);

// F4: menambah tugas baru
function simpanTugas(judul) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sudahAda = Array.from(daftarTugas.children).some(
        (item) => item.dataset.judul.toLowerCase() === judul.toLowerCase()
      );
      if (sudahAda) {
        reject(new Error(`Tugas "${judul}" sudah ada di daftar.`));
      } else {
        resolve({ title: judul, completed: false });
      }
    }, 1000);
  });
}

formTugas.addEventListener("submit", async (event) => {
  event.preventDefault();
  pesanForm.textContent = "";

  if (anggotaDipilihId === null || !tugasSiap) {
    pesanForm.textContent = "Pilih anggota dan tunggu tugasnya selesai dimuat.";
    return;
  }

  const judul = inputJudul.value.trim();
  if (judul.length < 5) {
    pesanForm.textContent = "Judul tugas minimal 5 karakter.";
    return;
  }

  tombolSimpan.disabled = true;
  tombolSimpan.textContent = "Menyimpan...";
  aturTombolAnggota(true);

  try {
    const tugasBaru = await simpanTugas(judul);
    inputCari.value = ""; //  tugas baru langsung terlihat
    daftarTugas.appendChild(buatItemTugas(tugasBaru.title, tugasBaru.completed));
    perbaruiTampilan();
    inputJudul.value = "";
    tampilNotifikasi("Tugas berhasil ditambahkan.");
  } catch (err) {
    pesanForm.textContent = err.message;
  } finally {
    tombolSimpan.disabled = false;
    tombolSimpan.textContent = "Simpan";
    aturTombolAnggota(false);
  }
});

/* ---------- Mulai ---------- */

muatAnggota();