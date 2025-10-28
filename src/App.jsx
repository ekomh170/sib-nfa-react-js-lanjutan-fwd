/**
 * App.jsx - Main Application Component
 * 
 * Router utama aplikasi BookStore dengan 3 layout:
 * 1. PublicLayout - untuk halaman publik (Home, About)
 * 2. Auth Pages - untuk Login & Register
 * 3. AdminLayout - untuk halaman admin (Dashboard, Genres, Authors) [PROTECTED]
 * 
 * Authentication:
 * - Menggunakan AuthContext untuk global state management
 * - Protected routes untuk halaman admin
 * - Auto-redirect jika belum login
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Auth Context Provider
import { AuthProvider } from './contexts/AuthProvider'

// Protected Route Component
import ProtectedRoute from './components/ProtectedRoute'

// Layouts
import PublicLayout from './layouts/public'
import AdminLayout from './layouts/admin'

// Public Pages
import Home from './pages/public/index'
import About from './pages/about'

// Auth Pages
import Login from './pages/login/Login'
import Register from './pages/register/Register'

// User Pages (All authenticated users)
import Profile from './pages/profile/Profile'
import GenresView from './pages/user/genres/GenresView'
import AuthorsView from './pages/user/authors/AuthorsView'

// Admin Pages (Admin only)
import Dashboard from './pages/admin/index'
import GenresAPI from './pages/admin/genres/genresAPI'
import AuthorsAPI from './pages/admin/authors/authorsAPI'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes - Halaman yang bisa diakses semua orang */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="tentang" element={<About />} />
            
            {/* View-Only Routes - User biasa bisa lihat data (Read-Only) - dengan navbar */}
            <Route path="genres" element={
              <ProtectedRoute>
                <GenresView />
              </ProtectedRoute>
            } />
            <Route path="authors" element={
              <ProtectedRoute>
                <AuthorsView />
              </ProtectedRoute>
            } />
          </Route>

          {/* Auth Routes - Login & Register */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* User Routes - Protected (semua user yang login bisa akses) */}
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />

          {/* Admin Routes - Protected & Admin Only */}
          <Route path="/admin" element={
            <ProtectedRoute requiredRole="admin">
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="genres" element={<GenresAPI />} />
            <Route path="authors" element={<AuthorsAPI />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
