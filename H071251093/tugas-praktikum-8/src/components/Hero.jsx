export default function Hero({ nama, slogan, lokasi, jamBuka }) {
  return (
    <section className="rounded-2xl bg-gradient-to-br from-amber-100 to-orange-200 p-8 text-center shadow-sm sm:p-12">
      <h1 className="text-3xl font-bold text-amber-900 sm:text-4xl">{nama}</h1>
      <p className="mx-auto mt-3 max-w-xl text-gray-700">{slogan}</p>
      <p className="mt-4 text-sm text-gray-600">
         {lokasi} · {jamBuka}
      </p>
    </section>
  );
}
