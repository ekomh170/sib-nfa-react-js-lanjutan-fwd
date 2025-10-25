/**
 * index.jsx - Admin Dashboard Page
 * 
 * Halaman dashboard admin dengan:
 * - Stats cards (total Genre & Author)
 * - Quick actions (link ke Genre & Author management)
 * - Info panel tugas ReactJS Lanjutan
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

export default function Dashboard() {
    return (
        <>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    🏠 Dashboard Admin - BookStore
                </h1>
                <p className="text-gray-600">
                    Selamat datang di panel admin BookStore Eko Muchamad Haryono
                </p>
            </div>

            {/* Stats Cards - Fokus Genre dan Author */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-white border-2 border-red-200 rounded-lg shadow-lg hover:shadow-xl transition">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-4xl">🏷️</span>
                        <span className="text-xs font-semibold text-red-700 bg-red-50 px-3 py-1 rounded-full">GENRE</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">24</h3>
                    <p className="text-sm text-gray-600 mb-3">Total Genre Buku</p>
                    <a href="/admin/genres" className="inline-flex items-center text-sm font-medium text-red-700 hover:text-red-800">
                        Kelola Genre →
                    </a>
                </div>

                <div className="p-6 bg-white border-2 border-red-200 rounded-lg shadow-lg hover:shadow-xl transition">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-4xl">✍️</span>
                        <span className="text-xs font-semibold text-red-700 bg-red-50 px-3 py-1 rounded-full">AUTHOR</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">89</h3>
                    <p className="text-sm text-gray-600 mb-3">Total Penulis Buku</p>
                    <a href="/admin/authors" className="inline-flex items-center text-sm font-medium text-red-700 hover:text-red-800">
                        Kelola Penulis →
                    </a>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 bg-linear-to-r from-red-600 to-red-700 rounded-lg shadow-lg text-white mb-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                    <span className="mr-2">⚡</span> Quick Actions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a 
                        href="/admin/genres" 
                        className="p-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition flex items-center"
                    >
                        <div className="text-3xl mr-3">📖</div>
                        <div>
                            <div className="font-semibold">Kelola Genre</div>
                            <div className="text-xs opacity-90">Tambah dan lihat data genre</div>
                        </div>
                    </a>
                    <a 
                        href="/admin/authors" 
                        className="p-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition flex items-center"
                    >
                        <div className="text-3xl mr-3">✍️</div>
                        <div>
                            <div className="font-semibold">Kelola Penulis</div>
                            <div className="text-xs opacity-90">Tambah dan lihat data penulis</div>
                        </div>
                    </a>
                </div>
            </div>

            {/* Info Panel */}
            <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                <div className="flex items-start">
                    <span className="text-2xl mr-3">ℹ️</span>
                    <div>
                        <p className="text-sm text-red-800 font-semibold mb-1">
                            Tugas ReactJS Lanjutan Pertemuan 1
                        </p>
                        <p className="text-sm text-red-700">
                            Sistem ini menyediakan fitur <strong>Read dan Create</strong> untuk data Genre dan Author. 
                            Silakan gunakan menu di sidebar atau quick actions di atas untuk mengelola data.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}