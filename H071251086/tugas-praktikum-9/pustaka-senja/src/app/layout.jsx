import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Poppins, DM_Serif_Display } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

export const metadata = {
  title: "Pustaka Senja | Ruang Baca Komunitas",
  description:
    "Website katalog Pustaka Senja, ruang baca dan perpustakaan komunitas, dibangun dengan Next.js App Router.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} ${dmSerif.variable} font-sans antialiased min-h-screen flex flex-col bg-navy-900 text-cream`}>
        <Navbar />
        <main className="flex-1 max-w-6xl w-full mx-auto px-5 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}