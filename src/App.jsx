/**
 * App.jsx - Main Application Component
 * 
 * Router utama aplikasi BookStore dengan 2 layout:
 * 1. PublicLayout - untuk halaman publik (Home, About)
 * 2. AdminLayout - untuk halaman admin (Dashboard, Genres, Authors)
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Layouts
import PublicLayout from './layouts/public'
import AdminLayout from './layouts/admin'

// Public Pages
import Home from './pages/public/index'
import About from './pages/about'

// Admin Pages
import Dashboard from './pages/admin/index'
import GenresAPI from './pages/admin/genres/genresAPI'
import AuthorsAPI from './pages/admin/authors/authorsAPI'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes - Halaman yang bisa diakses semua orang */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="tentang" element={<About />} />
        </Route>

        {/* Admin Routes - Halaman untuk manajemen data */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="genres" element={<GenresAPI />} />
          <Route path="authors" element={<AuthorsAPI />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
