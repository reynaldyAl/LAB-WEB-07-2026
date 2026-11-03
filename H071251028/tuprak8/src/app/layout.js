import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Pustaka Senja",
  description: "Ruang Baca dan Katalog Buku Pustaka Senja.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col bg-pink-50/60 text-pink-950 selection:bg-pink-200">
        <Navbar />
        <main className="min-h-screen flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}