/**
 * index.jsx - Homepage Component
 * 
 * Halaman utama aplikasi BookStore dengan:
 * - Hero section (gradient merah-putih, CTA buttons)
 * - Testimonial section (statistik & quote)
 * 
 * Route: / (root)
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */
import Hero from "../../components/hero";
import Testimonial from "../../components/testimonial";

export default function Home() {
    return (
      <>
        <Hero />
        <Testimonial />
      </>
    );
}