/**
 * about.jsx - About Page Component
 * 
 * Halaman Tentang BookStore dengan informasi:
 * - Deskripsi proyek & tujuan
 * - Fitur utama aplikasi (Genre, Author, UI, API)
 * - Teknologi yang digunakan (React, Vite, Tailwind, Laravel)
 * - Informasi pengembang (foto, nama, NIM, program)
 * - Link ke GitHub (profile, frontend repo, backend repo)
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

import logo from "../assets/logo.svg";
import developer from "../assets/developer/profile_eko.jpg";

export default function About() {
    return (
        <div className="min-h-screen bg-linear-to-b from-white to-red-50">
            {/* Hero Section */}
            <div className="bg-red-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <img
                            src={logo}
                            alt="BookStore Logo"
                            className="w-32 h-32 drop-shadow-2xl"
                        />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                        Tentang BookStore
                    </h1>
                    <p className="text-xl text-red-100 max-w-2xl mx-auto">
                        Platform Manajemen Buku Digital untuk Perpustakaan Modern
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Deskripsi Proyek */}
                    <div className="bg-red-700 rounded-lg shadow-lg p-8 mb-8 border-t-4 border-white">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                            <span className="mr-3">🎯</span> Tentang Proyek
                        </h2>
                        <p className="text-white leading-relaxed mb-4">
                            <strong>BookStore</strong> adalah aplikasi web berbasis ReactJS yang dikembangkan untuk 
                            memenuhi tugas <strong>ReactJS Lanjutan Pertemuan 1 & 2</strong> dengan fokus pada implementasi 
                            CRUD (Create, Read, Update, Delete) <strong>lengkap</strong> untuk data Genre dan Author.
                        </p>
                        <p className="text-white leading-relaxed mb-4">
                            <strong>Tugas 1 (Pertemuan 1):</strong> Implementasi fitur READ dan CREATE untuk Genre dan Author 
                            dengan integrasi Laravel API.
                        </p>
                        <p className="text-white leading-relaxed">
                            <strong>Tugas 2 (Pertemuan 2):</strong> Implementasi fitur UPDATE dan DELETE dengan modal edit 
                            dan confirmation dialog. Aplikasi ini dibangun menggunakan teknologi modern seperti React 19, 
                            Vite, Tailwind CSS, dan terintegrasi dengan backend Laravel API untuk manajemen data yang efisien.
                        </p>
                    </div>

                    {/* Fitur Utama */}
                    <div className="bg-red-700 rounded-lg shadow-lg p-8 mb-8 border-t-4 border-white">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <span className="mr-3">✨</span> Fitur Utama
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-4 bg-red-800 rounded-lg border border-white">
                                <div className="text-3xl mb-2">📖</div>
                                <h3 className="font-semibold text-white mb-2">Manajemen Genre</h3>
                                <ul className="text-sm text-white space-y-1">
                                    <li>✓ Lihat daftar genre buku</li>
                                    <li>✓ Tambah genre baru</li>
                                    <li>✓ Edit genre (Tugas 2)</li>
                                    <li>✓ Hapus genre (Tugas 2)</li>
                                    <li>✓ Slug otomatis</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-red-800 rounded-lg border border-white">
                                <div className="text-3xl mb-2">✍️</div>
                                <h3 className="font-semibold text-white mb-2">Manajemen Penulis</h3>
                                <ul className="text-sm text-white space-y-1">
                                    <li>✓ Lihat daftar penulis</li>
                                    <li>✓ Tambah penulis baru</li>
                                    <li>✓ Edit penulis (Tugas 2)</li>
                                    <li>✓ Hapus penulis (Tugas 2)</li>
                                    <li>✓ Data lengkap penulis</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-red-800 rounded-lg border border-white">
                                <div className="text-3xl mb-2">🎨</div>
                                <h3 className="font-semibold text-white mb-2">UI Modern</h3>
                                <ul className="text-sm text-white space-y-1">
                                    <li>✓ Tema Merah-Putih Indonesia</li>
                                    <li>✓ Responsive Design</li>
                                    <li>✓ Modal Edit Form</li>
                                    <li>✓ Confirmation Dialog</li>
                                    <li>✓ User-friendly Interface</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-red-800 rounded-lg border border-white">
                                <div className="text-3xl mb-2">🔌</div>
                                <h3 className="font-semibold text-white mb-2">API Integration</h3>
                                <ul className="text-sm text-white space-y-1">
                                    <li>✓ Laravel Backend API</li>
                                    <li>✓ Axios HTTP Client</li>
                                    <li>✓ RESTful CRUD Lengkap</li>
                                    <li>✓ Error Handling</li>
                                    <li>✓ Loading States</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Teknologi */}
                    <div className="bg-red-700 rounded-lg shadow-lg p-8 mb-8 border-t-4 border-white">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <span className="mr-3">⚙️</span> Teknologi yang Digunakan
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-red-800 rounded-lg">
                                <div className="text-2xl mb-2">⚛️</div>
                                <div className="font-semibold text-white">React 19.1.1</div>
                                <div className="text-xs text-red-100">Frontend Framework</div>
                            </div>
                            <div className="text-center p-4 bg-red-800 rounded-lg">
                                <div className="text-2xl mb-2">⚡</div>
                                <div className="font-semibold text-white">Vite 7.1.7</div>
                                <div className="text-xs text-red-100">Build Tool</div>
                            </div>
                            <div className="text-center p-4 bg-red-800 rounded-lg">
                                <div className="text-2xl mb-2">🎨</div>
                                <div className="font-semibold text-white">Tailwind 4.1.15</div>
                                <div className="text-xs text-red-100">CSS Framework</div>
                            </div>
                            <div className="text-center p-4 bg-red-800 rounded-lg">
                                <div className="text-2xl mb-2">🔄</div>
                                <div className="font-semibold text-white">React Router</div>
                                <div className="text-xs text-red-100">Routing</div>
                            </div>
                            <div className="text-center p-4 bg-red-800 rounded-lg">
                                <div className="text-2xl mb-2">🌐</div>
                                <div className="font-semibold text-white">Axios</div>
                                <div className="text-xs text-red-100">HTTP Client</div>
                            </div>
                            <div className="text-center p-4 bg-red-800 rounded-lg">
                                <div className="text-2xl mb-2">🐘</div>
                                <div className="font-semibold text-white">Laravel API</div>
                                <div className="text-xs text-red-100">Backend</div>
                            </div>
                        </div>
                    </div>

                    {/* Informasi Pengembang */}
                    <div className="bg-linear-to-r from-red-700 to-red-800 rounded-lg shadow-lg p-8 text-white">
                        <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
                            <span className="mr-3">👨‍💻</span> Informasi Pengembang
                        </h2>
                        
                        {/* Developer Photo */}
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <img
                                    src={developer}
                                    alt="Eko Muchamad Haryono"
                                    className="w-40 h-40 rounded-full border-4 border-white shadow-2xl object-cover"
                                />
                                <div className="absolute -bottom-2 -right-2 bg-white text-red-700 rounded-full p-2 shadow-lg">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div className="mb-4">
                                    <div className="text-sm text-red-100 mb-1">Nama</div>
                                    <div className="text-lg font-semibold">Eko Muchamad Haryono</div>
                                </div>
                                <div className="mb-4">
                                    <div className="text-sm text-red-100 mb-1">NIM</div>
                                    <div className="text-lg font-semibold">0110223079</div>
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <div className="text-sm text-red-100 mb-1">Program</div>
                                    <div className="text-lg font-semibold">Studi Independen Bersertifikat</div>
                                </div>
                                <div className="mb-4">
                                    <div className="text-sm text-red-100 mb-1">Tugas</div>
                                    <div className="text-lg font-semibold">ReactJS Lanjutan - Pertemuan 1 & 2</div>
                                    <div className="text-sm text-red-100 mt-1">
                                        • Tugas 1: READ & CREATE<br/>
                                        • Tugas 2: UPDATE & DELETE
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-red-600">
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <a 
                                    href="https://github.com/ekomh170" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-white text-red-700 rounded-lg font-semibold hover:bg-red-50 transition shadow-lg"
                                >
                                    GitHub Profile
                                </a>
                                <a 
                                    href="https://github.com/ekomh170/sib-nfa-react-js-lanjutan-fwd" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-white text-red-700 rounded-lg font-semibold hover:bg-red-50 transition shadow-lg"
                                >
                                    Frontend Repo
                                </a>
                                <a 
                                    href="https://github.com/ekomh170/booksales-api-laravel" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-white text-red-700 rounded-lg font-semibold hover:bg-red-50 transition shadow-lg"
                                >
                                    Backend Repo
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Back to Home Button */}
                    <div className="text-center mt-8">
                        <a 
                            href="/" 
                            className="inline-flex items-center px-8 py-3 bg-white text-red-700 rounded-lg font-semibold hover:bg-red-50 transition shadow-lg"
                        >
                            <span className="mr-2">🏠</span>
                            Kembali ke Beranda
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
