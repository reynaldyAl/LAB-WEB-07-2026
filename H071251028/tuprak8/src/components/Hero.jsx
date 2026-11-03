export default function Hero({
  nama,
  slogan,
  lokasi,
  jamBuka,
}) {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-pink-300 via-pink-200 to-rose-200 px-6 py-12 text-pink-950 shadow-sm sm:px-10 sm:py-16 border border-pink-200">
      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-pink-600">
        ✨ Selamat Datang di
      </p>

      <h1 className="text-4xl font-extrabold text-pink-900 sm:text-5xl">
        {nama}
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pink-800">
        {slogan}
      </p>

      <div className="mt-8 space-y-2 text-sm font-medium text-pink-900/90">
        <p>📍 {lokasi}</p>
        <p>🕒 {jamBuka}</p>
      </div>
    </section>
  );
}