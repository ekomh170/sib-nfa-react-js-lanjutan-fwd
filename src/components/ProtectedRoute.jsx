/**
 * ProtectedRoute.jsx - Protected Route Component with Role-Based Access
 * 
 * Komponen untuk melindungi route yang memerlukan autentikasi dan otorisasi.
 * 
 * Features:
 * - Authentication check (user harus login)
 * - Role-based authorization (admin only, user only, atau both)
 * - Loading state saat checking auth
 * - Auto redirect jika tidak memenuhi syarat
 * 
 * Props:
 * - children: Component yang akan di-render jika akses diizinkan
 * - requiredRole: 'admin' | 'user' | null (default: null, artinya semua role yang login bisa akses)
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth';

export default function ProtectedRoute({ children, requiredRole = null }) {
  const { user, loading } = useAuth();

  // Debug log
  console.log('🔐 ProtectedRoute Check:', { 
    user: user?.email, 
    role: user?.role, 
    requiredRole, 
    loading 
  });

  // Show loading while checking auth
  if (loading) {
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
        <p style={{ color: '#666' }}>🔒 Checking authentication...</p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Check role-based authorization
  if (requiredRole) {
    const userRole = user.role?.toLowerCase();
    const required = requiredRole.toLowerCase();
    
    if (userRole !== required) {
      // Jika user bukan admin tapi coba akses halaman admin
      // Redirect ke halaman user-friendly
      if (required === 'admin' && userRole === 'user') {
        return <Navigate to="/genres" replace />;
      }
      
      // Jika admin coba akses halaman khusus user (jarang terjadi)
      if (required === 'user' && userRole === 'admin') {
        return <Navigate to="/admin" replace />;
      }
      
      // Jika role tidak dikenali, tampilkan Access Denied
      return (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          flexDirection: 'column',
          gap: '1rem',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{ 
            fontSize: '5rem',
            marginBottom: '1rem'
          }}>🚫</div>
          <h1 style={{ 
            fontSize: '2rem',
            color: '#b91c1c',
            marginBottom: '0.5rem'
          }}>Access Denied</h1>
          <p style={{ 
            color: '#666',
            fontSize: '1.1rem',
            marginBottom: '2rem'
          }}>
            Anda tidak memiliki akses ke halaman ini.<br/>
            Halaman ini hanya dapat diakses oleh <strong>Administrator</strong>.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a 
              href="/" 
              style={{ 
                padding: '0.75rem 1.5rem',
                backgroundColor: '#b91c1c',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.5rem',
                fontWeight: '600'
              }}
            >
              🏠 Kembali ke Beranda
            </a>
            <a 
              href="/profile" 
              style={{ 
                padding: '0.75rem 1.5rem',
                backgroundColor: '#fff',
                color: '#b91c1c',
                textDecoration: 'none',
                borderRadius: '0.5rem',
                fontWeight: '600',
                border: '2px solid #b91c1c'
              }}
            >
              👤 Profil Saya
            </a>
          </div>
        </div>
      );
    }
  }

  // Render children if authenticated and authorized
  return children;
}
