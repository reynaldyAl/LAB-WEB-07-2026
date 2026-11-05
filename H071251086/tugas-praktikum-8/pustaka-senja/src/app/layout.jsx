import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pustaka Senja | Ruang Baca Komunitas",
  description:
    "Website katalog Pustaka Senja, ruang baca dan perpustakaan komunitas, dibangun dengan Next.js App Router.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-sky-50 text-slate-800">
        <Navbar />
        <main className="flex-1 max-w-6xl w-full mx-auto px-5 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}