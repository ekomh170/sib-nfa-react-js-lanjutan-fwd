/**
 * Register.jsx - Halaman Registrasi Pengguna
 *
 * Tugas React JS Lanjutan #3 - Fitur Registrasi Pengguna
 * 
 * Fitur:
 * - Form registrasi: nama lengkap, email, username, password
 * - Validasi sederhana (required, format email, password min 6 karakter)
 * - Request ke API Laravel /api/register
 * - Notifikasi sukses/error dengan icon
 * - Loading state dengan spinner animation
 * - Responsive design (mobile, tablet, desktop)
 * - Tema merah-putih Indonesia 🇮🇩
 * - Auto-focus ke field pertama
 * - Smooth transitions & hover effects
 *
 * @author Eko Muchamad Haryono - 0110223079
 * @tugas Tugas React JS Lanjutan #3
 */
import { useState } from "react";
import { authService } from "../../services/authService";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
    role: "user"
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Validasi sederhana
  const validate = () => {
    // Cek field kosong
    if (!form.name || !form.email || !form.username || !form.password || !form.password_confirmation) {
      return "Semua field wajib diisi.";
    }
    
    // Validasi format email
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      return "Format email tidak valid.";
    }
    
    // Validasi panjang password
    if (form.password.length < 6) {
      return "Password minimal 6 karakter.";
    }
    
    // Validasi konfirmasi password
    if (form.password !== form.password_confirmation) {
      return "Password dan konfirmasi password tidak cocok.";
    }
    
    return "";
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    
    // Validasi form
    const errMsg = validate();
    if (errMsg) {
      setError(errMsg);
      return;
    }
    
    setLoading(true);
    try {
      await authService.register(form);
      setSuccess("Registrasi berhasil! Silakan login untuk melanjutkan.");
      setForm({ name: "", email: "", username: "", password: "", password_confirmation: "", role: "user" });
      
      // Optional: Redirect ke login setelah 2 detik
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (err) {
      setError(
        err.response?.data?.message || "Registrasi gagal. Silakan coba lagi."
      );
    } finally {
      setLoading(false);
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
            📝 Registrasi Pengguna
          </h2>
          <p className="text-gray-600">
            Buat akun baru untuk mengakses BookStore
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
          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded text-green-700 text-sm flex items-start">
              <span className="mr-2">✅</span>
              <span>{success}</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition"
                placeholder="Masukkan nama lengkap"
                required
                autoFocus
              />
            </div>
            
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
              />
            </div>
            
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition"
                placeholder="Masukkan username"
                required
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
                placeholder="Minimal 6 karakter"
                required
                minLength={6}
              />
              <p className="mt-1 text-xs text-gray-500">
                Password harus minimal 6 karakter
              </p>
            </div>
            
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Konfirmasi Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password_confirmation"
                value={form.password_confirmation}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition"
                placeholder="Ulangi password"
                required
                minLength={6}
              />
              <p className="mt-1 text-xs text-gray-500">
                Masukkan kembali password yang sama
              </p>
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
                  Mendaftar...
                </span>
              ) : (
                "Daftar Sekarang"
              )}
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm border-t pt-4">
            <p className="text-gray-600">
              Sudah punya akun?{" "}
              <a href="/login" className="text-red-700 font-semibold hover:underline">
                Login di sini
              </a>
            </p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-4 text-center text-xs text-gray-500">
          <p>Tugas React JS Lanjutan #3 - Fitur Registrasi Pengguna</p>
          <p className="mt-1">Eko Muchamad Haryono (0110223079)</p>
        </div>
      </div>
    </div>
  );
}
