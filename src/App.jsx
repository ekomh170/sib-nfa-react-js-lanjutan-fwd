/**
 * App.jsx - Main Application Component
 * 
 * Router utama aplikasi BookStore dengan 2 layout:
 * 1. PublicLayout - untuk halaman publik (Home, About)
 * 2. AdminLayout - untuk halaman admin (Dashboard, Genres, Authors)
 * 
 * Development Mode: Auto-login saat app start (untuk testing Tugas 2)
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'

// Development Auth Helper (TEMPORARY - hapus saat production)
import { autoLoginDevelopment } from './utils/devAuth'

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
  const [isAuthReady, setIsAuthReady] = useState(false);

  // TEMPORARY: Auto-login development mode
  useEffect(() => {
    const initAuth = async () => {
      // Comment baris ini jika tidak mau auto-login
      await autoLoginDevelopment();
      setIsAuthReady(true);
    };
    
    initAuth();
  }, []);

  // Wait for auth to be ready
  if (!isAuthReady) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{ 
          width: '50px', 
          height: '50px', 
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #b91c1c',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <p style={{ color: '#666' }}>🔄 Initializing authentication...</p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

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
