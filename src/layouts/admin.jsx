/**
 * admin.jsx - Admin Layout Component
 * 
 * Layout untuk halaman admin dengan:
 * - Navbar sticky top (logo, user info, logout)
 * - Sidebar kiri (menu: Home, Dashboard, Genres, Authors)
 * - Main content area (dengan Outlet untuk nested routes)
 * - Tema: Merah-putih Indonesia
 * - Protected: hanya bisa diakses setelah login
 * 
 * Fitur Admin:
 * - Genre Management: CRUD lengkap (Create, Read, Update, Delete)
 * - Author Management: CRUD lengkap (Create, Read, Update, Delete)
 * - Dashboard: Statistik dan overview
 * - User Info: Menampilkan info user yang login
 * - Logout: Keluar dari sistem
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";
import logo from "../assets/logo.svg";
import developer from "../assets/developer/profile_eko.jpg";

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/', { replace: true });
  };
  return (
    <>
      <div className="antialiased bg-white">
        <nav className="bg-red-700 border-b-4 border-red-800 px-4 py-2.5 fixed left-0 right-0 top-0 z-50 shadow-lg">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-start items-center">
              <button
                data-drawer-target="drawer-navigation"
                data-drawer-toggle="drawer-navigation"
                aria-controls="drawer-navigation"
                className="p-2 mr-2 text-white rounded-lg cursor-pointer md:hidden hover:bg-red-800 focus:bg-red-800 focus:ring-2 focus:ring-red-300"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Toggle sidebar</span>
              </button>
              <a
                href="/admin"
                className="flex items-center justify-between mr-4"
              >
                <img
                  src={logo}
                  alt="BookStore Logo"
                  className="h-12 w-12 mr-3"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white drop-shadow-lg">
                    BookStore Admin
                  </span>
                  <span className="text-xs text-red-100">
                    Eko Muchamad Haryono
                  </span>
                </div>
              </a>
            </div>
            <div className="flex items-center lg:order-2 gap-3">
              {/* User Info - Desktop */}
              <div className="hidden md:flex items-center gap-3 bg-red-800 px-4 py-2 rounded-lg">
                <div className="text-right">
                  <p className="text-sm font-semibold text-white">
                    {user?.name || 'Admin User'}
                  </p>
                  <p className="text-xs text-red-100">
                    {user?.email || 'admin@bookstore.com'}
                  </p>
                </div>
                <img
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  src={developer}
                  alt={user?.name || 'Admin User'}
                />
              </div>

              {/* Logout Button - Desktop */}
              <button
                onClick={handleLogout}
                className="hidden md:flex items-center gap-2 bg-white text-red-700 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition shadow-md"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Keluar
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                data-drawer-toggle="drawer-navigation"
                aria-controls="drawer-navigation"
                className="p-2 text-white rounded-lg md:hidden hover:bg-red-800 focus:ring-4 focus:ring-red-300"
              >
                <span className="sr-only">Toggle search</span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  ></path>
                </svg>
              </button>

              {/* Mobile User Avatar */}
              <button
                type="button"
                className="flex md:hidden text-sm bg-white rounded-full focus:ring-4 focus:ring-red-300 border-2 border-white"
                id="user-menu-button-mobile"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-mobile"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src={developer}
                  alt={user?.name || 'Admin User'}
                />
              </button>

              {/* Mobile Dropdown */}
              <div
                className="hidden z-50 my-4 w-56 text-base list-none bg-white divide-y divide-gray-100 shadow-lg rounded-xl"
                id="dropdown-mobile"
              >
                <div className="py-3 px-4 bg-red-50">
                  <span className="block text-sm font-semibold text-gray-900">
                    {user?.name || 'Admin User'}
                  </span>
                  <span className="block text-sm text-gray-600 truncate">
                    {user?.email || 'admin@bookstore.com'}
                  </span>
                  {user?.username && (
                    <span className="block text-xs text-gray-500 mt-1">
                      @{user.username}
                    </span>
                  )}
                </div>
                <ul className="py-1" aria-labelledby="dropdown-mobile">
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left flex items-center gap-2 py-2 px-4 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Keluar
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* <!-- Sidebar --> */}

        <aside
          className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r-4 border-red-700 md:translate-x-0"
          aria-label="Sidenav"
          id="drawer-navigation"
        >
          <div className="overflow-y-auto py-5 px-3 h-full bg-white flex flex-col">
            {/* User Profile Section - Sidebar */}
            <div className="mb-4 p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded-full object-cover border-2 border-red-700"
                  src={developer}
                  alt={user?.name || 'Admin User'}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    {user?.name || 'Admin User'}
                  </p>
                  <p className="text-xs text-gray-600 truncate">
                    {user?.email || 'admin@bookstore.com'}
                  </p>
                  {user?.role && (
                    <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-red-700 text-white rounded">
                      {user.role === 'admin' ? 'Administrator' : 'User'}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <ul className="space-y-2 flex-1">
              <li>
                <a
                  href="/"
                  className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-red-50 hover:text-red-700 group transition"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-red-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  <span className="ml-3">Beranda</span>
                </a>
              </li>
              <li>
                <a
                  href="/admin"
                  className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-red-50 hover:text-red-700 group transition"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-red-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">Dasbor</span>
                </a>
              </li>
              <li>
                <a
                  href="/admin/genres"
                  className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-red-50 hover:text-red-700 group"
                >
                  <svg
                    aria-hidden="true"
                    className="shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-red-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-3">Genre Buku</span>
                </a>
              </li>
              <li>
                <a
                  href="/admin/authors"
                  className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-red-50 hover:text-red-700 group"
                >
                  <svg
                    aria-hidden="true"
                    className="shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-red-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-3">Penulis</span>
                </a>
              </li>
            </ul>

            {/* Logout Button - Sidebar (Mobile) */}
            <div className="mt-4 md:hidden border-t pt-4">
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 p-3 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition shadow-md"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Keluar
              </button>
            </div>
          </div>
        </aside>

        <main className="p-4 md:ml-64 h-auto pt-20">
          <div className="border-2 border-dashed rounded-lg border-red-200 bg-white h-auto px-4 pt-4 pb-6">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
