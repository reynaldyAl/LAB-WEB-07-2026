// ===== Konfigurasi =====
const API = "https://jsonplaceholder.typicode.com";
const DONE_CLASSES = ["line-through", "text-gray-400"];
const ACTIVE_CLASS = "is-active";

// ===== Elemen =====
const membersStatus = document.getElementById("membersStatus");
const membersTable = document.getElementById("membersTable");
const membersList = document.getElementById("membersList");
const taskTitle = document.getElementById("taskTitle");
const taskPlaceholder = document.getElementById("taskPlaceholder");
const taskStatus = document.getElementById("taskStatus");
const taskBody = document.getElementById("taskBody");
const summary = document.getElementById("summary");
const progressBar = document.getElementById("progressBar");
const taskForm = document.getElementById("taskForm");
const titleInput = document.getElementById("titleInput");
const submitBtn = document.getElementById("submitBtn");
const formError = document.getElementById("formError");
const searchInput = document.getElementById("searchInput");
const emptyMessage = document.getElementById("emptyMessage");
const taskList = document.getElementById("taskList");
const toast = document.getElementById("toast");

// ===== State =====
// Setiap tugas: { title, completed, row, titleEl, dot }
let tasks = [];
let selectedId = null;
let taskState = "idle"; // idle | loading | ready | error
let requestToken = 0; // mencegah respons lama menimpa pilihan terbaru
let toastTimer = null;

// ===== Helper =====
// ini muncul kalau ndd internet
function describeError(err) {
  if (err instanceof TypeError) {
    return "Koneksi bermasalah. Periksa internet lalu coba lagi.";
  }
  return err.message;
}

// memuat anggota.. atau gagal memuat anggota koneksi bermasalah
function showStatus(element, text, isError) {
  element.textContent = text;
  element.classList.remove("hidden", "text-red-600", "text-brand");
  element.classList.add(isError ? "text-red-600" : "text-brand");
}

// ini kalau tidak error dan tidak memuat mi, jadi tinggal langsung ki tabelna muncul
function hideStatus(element) {
  element.textContent = "";
  element.classList.add("hidden");
}

// ini kalau tidak valid pengisian form tugasnya
function showFormError(text) {
  formError.textContent = text;
  formError.classList.remove("hidden");
}

function clearFormError() {
  formError.textContent = "";
  formError.classList.add("hidden");
}

// "Tugas berhasil ditambahkan"
function showToast(text) {
  toast.textContent = text;
  toast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}

// Inisial untuk avatar, mis. "Leanne Graham" -> "LG" ("Mrs." dan "V" dilewati)
function getInitials(name) {
  const parts = name.split(/\s+/).filter((p) => p.length > 1 && !p.endsWith("."));
  if (parts.length === 0) return name.charAt(0).toUpperCase();
  const first = parts[0].charAt(0);
  const last = parts.length > 1 ? parts[parts.length - 1].charAt(0) : "";
  return (first + last).toUpperCase();
}

// Lingkaran status di kiri tugas: kosong = belum, centang hijau = selesai
function setDot(dot, completed) {
  if (completed) {
    dot.classList.remove("border-violet-300");
    dot.classList.add("border-emerald-500", "bg-emerald-500");
    dot.textContent = "✓";
  } else {
    dot.classList.remove("border-emerald-500", "bg-emerald-500");
    dot.classList.add("border-violet-300");
    dot.textContent = "";
  }
}

// ===== Ringkasan, filter =====
// ini update progress tugasnya 
function updateProgress() {
  const selesai = tasks.filter((t) => t.completed).length;
  const total = tasks.length;
  summary.textContent = `${selesai} dari ${total} tugas selesai`;
  progressBar.style.width = total === 0 ? "0%" : `${(selesai / total) * 100}%`;
}

// 
function applyFilter() {
  const keyword = searchInput.value.trim().toLowerCase();
  let visible = 0;

  tasks.forEach((t) => {
    if (t.title.toLowerCase().includes(keyword)) {
      t.row.classList.remove("hidden");
      visible++;
    } else {
      t.row.classList.add("hidden");
    }
  });

  if (tasks.length === 0) {
    emptyMessage.textContent = "Belum ada tugas untuk anggota ini.";
    emptyMessage.classList.remove("hidden");
  } else if (visible === 0) {
    emptyMessage.textContent = "Tidak ada tugas yang cocok";
    emptyMessage.classList.remove("hidden");
  } else {
    emptyMessage.textContent = "";
    emptyMessage.classList.add("hidden");
  }
}

// ===== Membuat satu baris tugas (tabel) =====
function createTaskItem(data) {
  const row = document.createElement("tr");
  row.className = "hover:bg-surface/60";

  // Kolom status: lingkaran kosong = belum, centang hijau = selesai
  const dotCell = document.createElement("td");
  dotCell.className = "w-14 px-4 py-3";

  const dot = document.createElement("span");
  dot.className =
    "flex h-6 w-6 items-center justify-center rounded-full border-2 text-xs font-bold text-white";
  dot.setAttribute("aria-hidden", "true");
  setDot(dot, data.completed);
  dotCell.appendChild(dot);

  // Kolom judul
  const titleCell = document.createElement("td");
  titleCell.className = "px-2 py-3 text-sm font-semibold leading-snug";

  const titleEl = document.createElement("span");
  titleEl.textContent = data.title;
  if (data.completed) titleEl.classList.add(...DONE_CLASSES);
  titleCell.appendChild(titleEl);

  // Kolom aksi
  const actionCell = document.createElement("td");
  actionCell.className = "px-4 py-3";

  const actions = document.createElement("div");
  actions.className = "flex items-center justify-end gap-2";
  actionCell.appendChild(actions);

  const task = { title: data.title, completed: data.completed, row, titleEl, dot };

  // F5: tombol Tandai selesai (hanya untuk yang belum selesai)
  if (!task.completed) {
    const doneBtn = document.createElement("button");
    doneBtn.type = "button";
    doneBtn.textContent = "Tandai selesai";
    doneBtn.className =
      "whitespace-nowrap rounded-full bg-brand/10 px-3.5 py-1.5 text-xs font-bold text-brand hover:bg-brand/20 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand";
    doneBtn.addEventListener("click", () => {
      task.completed = true;
      titleEl.classList.add(...DONE_CLASSES);
      setDot(dot, true);
      doneBtn.remove();
      updateProgress();
    });
    actions.appendChild(doneBtn);
  }

  // F5: tombol Hapus
  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.textContent = "Hapus";
  deleteBtn.className =
    "rounded-full bg-red-50 px-3.5 py-1.5 text-xs font-bold text-red-600 hover:bg-red-100 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-red-600";
  deleteBtn.addEventListener("click", () => {
    const index = tasks.indexOf(task);
    if (index !== -1) tasks.splice(index, 1);
    row.remove();
    updateProgress();
    applyFilter();
  });
  actions.appendChild(deleteBtn);

  row.appendChild(dotCell);
  row.appendChild(titleCell);
  row.appendChild(actionCell);
  return task;
}

// ===== Membuat satu baris anggota (tabel) =====
function createMemberRow(user, index) {
  const tr = document.createElement("tr");

  // Kolom nomor
  const numberCell = document.createElement("td");
  numberCell.className = "w-16 px-5 py-1.5 text-sm font-semibold text-ink/50";
  numberCell.textContent = String(index + 1);

  // Kolom nama: seluruh sel berupa tombol yang bisa diklik
  const nameCell = document.createElement("td");
  nameCell.className = "px-3 py-1.5";

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className =
    "member-btn flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-base font-bold transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand";

  const avatar = document.createElement("span");
  avatar.className = `g${index % 4} flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-extrabold text-white ring-2 ring-white`;
  avatar.textContent = getInitials(user.name);

  const name = document.createElement("span");
  name.textContent = user.name;

  btn.appendChild(avatar);
  btn.appendChild(name);
  btn.addEventListener("click", () => selectMember(user, btn));

  nameCell.appendChild(btn);
  tr.appendChild(numberCell);
  tr.appendChild(nameCell);
  return tr;
}

// ===== F1: Daftar anggota =====
async function loadMembers() {
  showStatus(membersStatus, "Memuat anggota...", false);

  try {
    const res = await fetch(`${API}/users`);
    if (!res.ok) {
      throw new Error(`Server membalas dengan status ${res.status}.`);
    }
    const users = await res.json();

    hideStatus(membersStatus);
    membersTable.classList.remove("hidden");

    users.forEach((user, index) => {
      membersList.appendChild(createMemberRow(user, index));
    });
  } catch (err) {
    showStatus(membersStatus, `Gagal memuat anggota. ${describeError(err)}`, true);
  }
}

// ===== F2: Tugas anggota =====
async function selectMember(user, btn) {
  // Klik anggota yang sama saat sedang dimuat / sudah tampil: abaikan
  // (supaya perubahan lokal tidak hilang). Setelah error, klik lagi = coba ulang.
  if (user.id === selectedId && (taskState === "loading" || taskState === "ready")) return;

  const token = ++requestToken;
  selectedId = user.id;
  taskState = "loading";

  // Penanda: hanya satu anggota yang aktif
  membersList.querySelectorAll(".member-btn").forEach((b) => b.classList.remove(ACTIVE_CLASS));
  btn.classList.add(ACTIVE_CLASS);

  taskTitle.textContent = `Tugas ${user.address.city}`;

  // Kosongkan daftar lama dan reset kontrol
  taskList.innerHTML = "";
  tasks = [];
  searchInput.value = "";
  titleInput.value = "";
  clearFormError();
  taskPlaceholder.classList.add("hidden");
  taskBody.classList.add("hidden");
  showStatus(taskStatus, "Memuat tugas...", false);

  try {
    const res = await fetch(`${API}/todos?userId=${user.id}`);
    if (!res.ok) {
      throw new Error(`Server membalas dengan status ${res.status}.`);
    }
    const todos = await res.json();

    if (token !== requestToken) return; // sudah pindah ke anggota lain

    todos.forEach((todo) => {
      const task = createTaskItem({ title: todo.title, completed: todo.completed });
      tasks.push(task);
      taskList.appendChild(task.row);
    });

    taskState = "ready";
    hideStatus(taskStatus);
    taskBody.classList.remove("hidden");
    updateProgress();
    applyFilter();
  } catch (err) {
    if (token !== requestToken) return;
    taskState = "error";
    showStatus(
      taskStatus,
      `Gagal memuat tugas ${user.name}. ${describeError(err)} Klik nama anggota lagi untuk mencoba ulang.`,
      true
    );
  }
}

// ===== F3: Pencarian =====
searchInput.addEventListener("input", applyFilter);

// ===== F4: Tambah tugas =====
function simpanTugas(judul) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kembar = tasks.some((t) => t.title.trim().toLowerCase() === judul.toLowerCase());
      if (kembar) {
        reject(new Error(`Tugas "${judul}" sudah ada di daftar.`));
        return;
      }
      resolve({ title: judul, completed: false });
    }, 1000);
  });
}

taskForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  clearFormError();

  const judul = titleInput.value.trim();
  if (judul.length < 5) {
    showFormError("Judul tugas minimal 5 karakter (tidak dihitung spasi di awal dan akhir).");
    return;
  }

  const memberSaatSubmit = selectedId;
  submitBtn.disabled = true;
  submitBtn.textContent = "Menyimpan...";

  try {
    const tugasBaru = await simpanTugas(judul);

    // Anggota diganti saat menunggu: jangan masukkan ke daftar yang salah
    if (memberSaatSubmit !== selectedId) return;

    const task = createTaskItem(tugasBaru);
    tasks.unshift(task);
    taskList.prepend(task.row);

    titleInput.value = "";
    searchInput.value = ""; // supaya tugas baru pasti terlihat
    updateProgress();
    applyFilter();
    showToast("Tugas berhasil ditambahkan.");
  } catch (err) {
    showFormError(err.message);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Simpan";
  }
});

// ===== Mulai =====
loadMembers();