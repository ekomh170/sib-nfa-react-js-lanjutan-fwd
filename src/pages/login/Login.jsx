/**
 * Login.jsx - Halaman Login
 * 
 * Fitur:
 * - Form login dengan email & password
 * - Validasi form
 * - Integration dengan AuthContext
 * - Redirect ke /admin setelah login sukses
 * - Link ke halaman register
 * - Loading state dengan spinner
 * - Error handling dengan notifikasi
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/useAuth';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  // PRODUCTION: Remove auto-fill before deployment!
  // DEVELOPMENT: Prefill form with default credentials for faster testing
  const [form, setForm] = useState({
    email: import.meta.env.DEV ? 'admin@booksales.com' : '',
    password: import.meta.env.DEV ? 'password123' : ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validasi sederhana
    if (!form.email || !form.password) {
      setError('Email dan password wajib diisi.');
      return;
    }
    
    setLoading(true);
    const result = await login(form.email, form.password);
    setLoading(false);
    
    if (result.success) {
      // Redirect ke admin dashboard
      navigate('/admin', { replace: true });
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-white to-red-50 py-12 px-4">
      <div className="w-full max-w-md">
        {/* Back to Home Button */}
        <div className="mb-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-red-700 hover:text-red-800 font-medium transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Kembali ke Beranda
          </a>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-red-700 mb-2">
            🔐 Login Admin
          </h2>
          <p className="text-gray-600">
            Masuk ke BookStore Admin Panel
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-lg border-t-4 border-red-700 p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm flex items-start">
              <span className="mr-2">❌</span>
              <span>{error}</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition"
                placeholder="contoh@email.com"
                required
                autoFocus
              />
            </div>
            
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition"
                placeholder="Masukkan password"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-red-700 text-white font-bold rounded-lg hover:bg-red-800 transition duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Masuk...
                </span>
              ) : (
                "Masuk"
              )}
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm border-t pt-4">
            <p className="text-gray-600">
              Belum punya akun?{" "}
              <a href="/register" className="text-red-700 font-semibold hover:underline">
                Daftar di sini
              </a>
            </p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-4 text-center text-xs text-gray-500">
          <p>BookStore Admin Panel</p>
          <p className="mt-1">Eko Muchamad Haryono (0110223079)</p>
        </div>
      </div>
    </div>
  );
}
