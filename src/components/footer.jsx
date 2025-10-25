/**
 * footer.jsx - Public Footer Component
 * 
 * Footer untuk halaman publik dengan:
 * - Logo & tagline BookStore
 * - Navigation links: Home, Admin Panel, Tentang
 * - Copyright & identitas mahasiswa
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <>
      <footer className="border-t-4 border-red-700 p-6 bg-linear-to-b from-gray-50 to-gray-100 md:p-8 lg:p-10">
        <div className="mx-auto max-w-screen-xl text-center">
          {/* Logo dan Tagline */}
          <div className="mb-6">
            <div className="flex items-center justify-center mb-3">
              <img
                src={logo}
                alt="BookStore Logo"
                className="h-16 w-16 mr-3"
              />
              <div className="flex flex-col items-start">
                <span className="text-2xl font-bold text-red-700">
                  BookStore
                </span>
                <span className="text-xs text-gray-600 font-medium">
                  Eko Muchamad Haryono
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 max-w-md mx-auto">
              Platform perpustakaan digital terbaik untuk para book lovers 📖
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-700 gap-2">
            <li>
              <a
                href="/"
                className="px-4 py-2 hover:text-red-700 hover:underline font-medium transition-colors"
              >
                Home
              </a>
            </li>
            <li className="text-gray-300">|</li>
            <li>
              <a
                href="/admin"
                className="px-4 py-2 hover:text-red-700 hover:underline font-medium transition-colors"
              >
                Admin Panel
              </a>
            </li>
            <li className="text-gray-300">|</li>
            <li>
              <a
                href="/tentang"
                className="px-4 py-2 hover:text-red-700 hover:underline font-medium transition-colors"
              >
                Tentang
              </a>
            </li>
          </ul>

          {/* Divider */}
          <div className="border-t border-gray-300 my-6"></div>

          {/* Copyright */}
          <div className="text-sm text-gray-600">
            <p className="mb-2">
              © <span className="font-bold text-red-700">2025</span>. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-500">
              Dikembangkan dengan ❤️ oleh <span className="font-semibold">Eko Muchamad Haryono</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">
              NIM: 0110223079 | Teknik Informatika - Software Engineering
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}