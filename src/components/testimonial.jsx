/**
 * testimonial.jsx - Testimonial Section Component
 * 
 * Section testimonial di homepage dengan:
 * - Quote icon SVG
 * - Quote text tentang aplikasi BookStore
 * - Author info: Eko Muchamad Haryono (student)
 * - Clean design tanpa emoji berlebihan
 * 
 * Digunakan di: Homepage (/)
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */
export default function Testimonial() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-3xl mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-red-400"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-2xl font-medium text-gray-900">
                "Platform perpustakaan digital terbaik! Koleksi bukunya lengkap, 
                antarmuka mudah digunakan, dan sistem peminjaman yang sangat efisien. 
                Highly recommended untuk para book lovers!"
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="flex items-center divide-x-2 divide-gray-500">
                <div className="pr-3 font-medium text-gray-900">
                  Eko Muchamad Haryono
                </div>
                <div className="pl-3 text-sm font-light text-gray-500">
                  Mahasiswa Teknik Informatika
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

