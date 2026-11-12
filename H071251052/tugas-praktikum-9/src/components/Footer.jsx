export default function Footer() {
  return (
    <footer className="mt-20 border-t border-stone-200 bg-white">
      <div className="container-page flex flex-col gap-3 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <p className="font-semibold text-stone-800">Pustaka Senja</p>
          <p className="mt-1 text-xs text-stone-500">
            Ruang kecil untuk ide dan cerita yang besar.
          </p>
        </div>
        <p className="text-xs text-stone-500">
          © 2026 Pustaka Senja. Ilmi Ahmad Alfaridzi H071251052
        </p>
      </div>
    </footer>
  );
}