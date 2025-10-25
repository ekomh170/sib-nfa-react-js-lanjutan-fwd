/**
 * public.jsx - Public Layout Component
 * 
 * Layout wrapper untuk halaman publik dengan struktur:
 * - Navbar (logo, menu, responsive)
 * - Outlet (konten halaman: Home, About)
 * - Footer (logo, links, copyright)
 * 
 * Digunakan untuk route: /, /tentang
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function PublicLayout() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
}