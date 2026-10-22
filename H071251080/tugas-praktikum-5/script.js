const API_URL = "https://jsonplaceholder.typicode.com";

// ===== Elemen =====
const loadingAnggota = document.getElementById("loading-anggota");
const errorAnggota = document.getElementById("error-anggota");
const daftarAnggota = document.getElementById("daftar-anggota");

const judulTugas = document.getElementById("judul-tugas");
const ringkasan = document.getElementById("ringkasan");
const pesanAwal = document.getElementById("pesan-awal");
const loadingTugas = document.getElementById("loading-tugas");
const errorTugas = document.getElementById("error-tugas");
const areaTugas = document.getElementById("area-tugas");
const daftarTugas = document.getElementById("daftar-tugas");
const cariTugas = document.getElementById("cari-tugas");
const tidakCocok = document.getElementById("tidak-cocok");
const tugasKosong = document.getElementById("tugas-kosong");

const formTugas = document.getElementById("form-tugas");
const inputJudul = document.getElementById("input-judul");
const tombolSimpan = document.getElementById("tombol-simpan");
const errorForm = document.getElementById("error-form");
const notifikasi = document.getElementById("notifikasi");

// ===== State =====
// Setiap item: { title, completed, el, judulEl }
let semuaTugas = [];
let anggotaAktifId = null;
let tombolAnggotaAktif = null;
let timerNotifikasi = null;

const KELAS_TOMBOL_BIASA = ["bg-white", "text-slate-700", "hover:bg-slate-100"];
const KELAS_TOMBOL_AKTIF = ["bg-indigo-600", "text-white"];
const KELAS_SELESAI = ["line-through", "text-gray-400"];

// ===== Util tampilan =====
function tampilkan(el) {
  el.classList.remove("hidden");
}

function sembunyikan(el) {
  el.classList.add("hidden");
}

function setPesan(el, teks) {
  el.textContent = teks;
  tampilkan(el);
}

function perbaruiRingkasan() {
  const total = semuaTugas.length;
  const selesai = semuaTugas.filter((t) => t.completed).length;
  ringkasan.textContent = `${selesai} dari ${total} tugas selesai`;
}

function terapkanFilter() {
  const kata = cariTugas.value.trim().toLowerCase();
  let tampil = 0;

  semuaTugas.forEach((t) => {
    if (t.title.toLowerCase().includes(kata)) {
      t.el.classList.remove("hidden");
      tampil++;
    } else {
      t.el.classList.add("hidden");
    }
  });

  if (semuaTugas.length === 0) {
    setPesan(tugasKosong, "Belum ada tugas.");
    sembunyikan(tidakCocok);
  } else {
    sembunyikan(tugasKosong);
    if (tampil === 0) {
      setPesan(tidakCocok, "Tidak ada tugas yang cocok");
    } else {
      sembunyikan(tidakCocok);
    }
  }
}

function perbaruiSemua() {
  perbaruiRingkasan();
  terapkanFilter();
}

// ===== F1: Daftar anggota =====
function tandaiAnggota(tombol) {
  if (tombolAnggotaAktif) {
    tombolAnggotaAktif.classList.remove(...KELAS_TOMBOL_AKTIF);
    tombolAnggotaAktif.classList.add(...KELAS_TOMBOL_BIASA);
  }
  tombol.classList.remove(...KELAS_TOMBOL_BIASA);
  tombol.classList.add(...KELAS_TOMBOL_AKTIF);
  tombolAnggotaAktif = tombol;
}

function tampilkanAnggota(users) {
  users.forEach((user) => {
    const tombol = document.createElement("button");
    tombol.type = "button";
    tombol.textContent = user.name;
    tombol.className =
      "text-left border border-slate-300 rounded-lg px-3 py-2 transition " +
      KELAS_TOMBOL_BIASA.join(" ");
    tombol.addEventListener("click", () => {
      tandaiAnggota(tombol);
      muatTugas(user.id, user.username, user.name);
    });
    daftarAnggota.appendChild(tombol);
  });
}

async function muatAnggota() {
  loadingAnggota.textContent = "Memuat anggota...";
  tampilkan(loadingAnggota);
  sembunyikan(errorAnggota);

  try {
    const res = await fetch(`${API_URL}/users`);
    if (!res.ok) {
      throw new Error(`Server mengembalikan status ${res.status}`);
    }
    const users = await res.json();
    tampilkanAnggota(users);
  } catch (err) {
    setPesan(errorAnggota, `Gagal memuat anggota: ${err.message}`);
  } finally {
    loadingAnggota.textContent = "";
    sembunyikan(loadingAnggota);
  }
}

// ===== F2: Tugas anggota =====
function gayaSelesai(t) {
  t.judulEl.classList.add(...KELAS_SELESAI);
}

function buatItemTugas(t) {
  const li = document.createElement("li");
  li.className =
    "flex items-center justify-between gap-3 border border-slate-200 rounded-lg px-3 py-2";

  const judul = document.createElement("span");
  judul.textContent = t.title;
  judul.className = "flex-1";
  li.appendChild(judul);

  const aksi = document.createElement("div");
  aksi.className = "flex gap-2 shrink-0";

  t.el = li;
  t.judulEl = judul;

  if (t.completed) {
    gayaSelesai(t);
  } else {
    const tombolSelesai = document.createElement("button");
    tombolSelesai.type = "button";
    tombolSelesai.textContent = "Tandai selesai";
    tombolSelesai.className =
      "text-sm bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200";
    tombolSelesai.addEventListener("click", () => {
      t.completed = true;
      gayaSelesai(t);
      tombolSelesai.remove();
      perbaruiRingkasan();
    });
    aksi.appendChild(tombolSelesai);
  }

  const tombolHapus = document.createElement("button");
  tombolHapus.type = "button";
  tombolHapus.textContent = "Hapus";
  tombolHapus.className =
    "text-sm bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200";
  tombolHapus.addEventListener("click", () => {
    semuaTugas = semuaTugas.filter((x) => x !== t);
    li.remove();
    perbaruiSemua();
  });
  aksi.appendChild(tombolHapus);

  li.appendChild(aksi);
  return li;
}

function tampilkanTugas(todos) {
  daftarTugas.innerHTML = "";
  semuaTugas = todos.map((todo) => ({
    title: todo.title,
    completed: todo.completed,
    el: null,
    judulEl: null,
  }));
  semuaTugas.forEach((t) => {
    daftarTugas.appendChild(buatItemTugas(t));
  });
  cariTugas.value = "";
  perbaruiSemua();
}

async function muatTugas(id, nama) {
  anggotaAktifId = id;

  judulTugas.textContent = `Tugas ${nama}`;
  ringkasan.textContent = "";
  daftarTugas.innerHTML = "";
  semuaTugas = [];
  sembunyikan(pesanAwal);
  sembunyikan(errorTugas);
  sembunyikan(areaTugas);
  sembunyikan(tidakCocok);
  sembunyikan(tugasKosong);
  sembunyikan(errorForm);
  loadingTugas.textContent = "Memuat tugas...";
  tampilkan(loadingTugas);

  try {
    const res = await fetch(`${API_URL}/todos?userId=${id}`);
    if (!res.ok) {
      throw new Error(`Server mengembalikan status ${res.status}`);
    }
    const todos = await res.json();

    // Abaikan respons lama jika pengguna sudah memilih anggota lain
    if (anggotaAktifId !== id) return;

    tampilkanTugas(todos);
    tampilkan(areaTugas);
  } catch (err) {
    if (anggotaAktifId !== id) return;
    setPesan(errorTugas, `Gagal memuat tugas: ${err.message}`);
  } finally {
    if (anggotaAktifId === id) {
      loadingTugas.textContent = "";
      sembunyikan(loadingTugas);
    }
  }
}

// ===== F3: Pencarian =====
cariTugas.addEventListener("input", terapkanFilter);

// ===== F4: Tambah tugas =====
function simpanTugas(judul) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kembar = semuaTugas.some(
        (t) => t.title.toLowerCase() === judul.toLowerCase()
      );
      if (kembar) {
        reject(new Error(`Tugas "${judul}" sudah ada di daftar.`));
      } else {
        resolve({ title: judul, completed: false });
      }
    }, 1000);
  });
}

function tampilkanNotifikasi(teks) {
  notifikasi.textContent = teks;
  tampilkan(notifikasi);
  clearTimeout(timerNotifikasi);
  timerNotifikasi = setTimeout(() => {
    sembunyikan(notifikasi);
  }, 3000);
}

formTugas.addEventListener("submit", async (event) => {
  event.preventDefault();
  sembunyikan(errorForm);

  const judul = inputJudul.value.trim();
  if (judul.length < 5) {
    setPesan(errorForm, "Judul tugas minimal 5 karakter (tidak boleh kosong).");
    return;
  }

  const idSaatSimpan = anggotaAktifId;
  tombolSimpan.disabled = true;
  tombolSimpan.textContent = "Menyimpan...";

  try {
    const tugasBaru = await simpanTugas(judul);

    // Jika anggota sudah berganti selama menunggu, jangan masukkan ke daftar lain
    if (anggotaAktifId !== idSaatSimpan) return;

    const t = {
      title: tugasBaru.title,
      completed: tugasBaru.completed,
      el: null,
      judulEl: null,
    };
    semuaTugas.push(t);
    daftarTugas.appendChild(buatItemTugas(t));
    inputJudul.value = "";
    perbaruiSemua();
    tampilkanNotifikasi("Tugas berhasil ditambahkan.");
  } catch (err) {
    if (anggotaAktifId === idSaatSimpan) {
      setPesan(errorForm, err.message);
    }
  } finally {
    tombolSimpan.disabled = false;
    tombolSimpan.textContent = "Simpan";
  }
});

// ===== Mulai =====
document.addEventListener("DOMContentLoaded", muatAnggota);
