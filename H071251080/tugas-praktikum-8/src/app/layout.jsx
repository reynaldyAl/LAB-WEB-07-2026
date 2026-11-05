import "@fontsource-variable/fraunces";
import "@fontsource-variable/instrument-sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dataBuku, { infoRuangBaca } from "@/data/dataBuku";

export const metadata = {
  title: {
    default: "Pustaka Senja | Ruang Baca Komunitas",
    template: "%s | Pustaka Senja",
  },
  description:
    "Ruang baca dan perpustakaan komunitas dekat kampus. Jelajahi katalog, cek ketersediaan buku, dan usulkan judul baru.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    siteName: "Pustaka Senja",
    locale: "id_ID",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#fbf6ec",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className="flex min-h-screen flex-col bg-kertas font-sans text-tinta antialiased"
      >
        <Navbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
          {children}
        </main>
        <Footer
          nama={infoRuangBaca.nama}
          lokasi={infoRuangBaca.lokasi}
          jamBuka={infoRuangBaca.jamBuka}
          totalBuku={dataBuku.length}
        />
      </body>
    </html>
  );
}
