import FormUsulan from "@/components/FormUsulan";

export const metadata = { title: "Usulan Buku | Pustaka Senja" };

export default function UsulanPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-4xl font-bold text-orange-900">Usulan Buku</h1>
      <p className="mt-2 mb-8 text-lg text-stone-700">
        Punya buku yang ingin dihadirkan di Pustaka Senja? Usulkan di sini.
      </p>
      <FormUsulan />
    </main>
  );
}