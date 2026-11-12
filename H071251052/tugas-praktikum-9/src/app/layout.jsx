import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pustaka Senja | Ruang Baca Komunitas",
  description:
    "Jelajahi koleksi buku Pustaka Senja dan usulkan bacaan baru untuk komunitas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col bg-stone-50 text-stone-800 antialiased">
        <Navbar />
        <main className="container-page w-full flex-1 py-8 sm:py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}