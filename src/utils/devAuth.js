/**
 * devAuth.js - Development Authentication Helper
 * 
 * ⚠️ DEPRECATED - File ini sudah tidak digunakan lagi!
 * 
 * Sebelumnya digunakan untuk auto-login development mode pada Tugas 2.
 * Sejak Tugas 3, aplikasi menggunakan sistem autentikasi yang proper:
 * - AuthContext untuk global state management
 * - Protected routes untuk halaman admin
 * - Login & Register pages yang real
 * - Authentication dengan Laravel backend (Sanctum)
 * 
 * File ini dipertahankan hanya untuk referensi sejarah.
 * JANGAN DIGUNAKAN lagi dalam kode!
 * 
 * @deprecated Since Tugas 3 - Use AuthContext instead
 * @author Eko Muchamad Haryono - 0110223079
 */

/**
 * ⚠️ DEPRECATED: Auto login dengan kredensial development
 * 
 * JANGAN DIGUNAKAN! Function ini sudah di-disable.
 * Gunakan AuthContext dan login melalui halaman /login
 * 
 * @deprecated
 */
export const autoLoginDevelopment = async () => {
  console.warn('⚠️ devAuth.autoLoginDevelopment is DEPRECATED!');
  console.warn('Please use AuthContext and login through /login page');
  
  // Function disabled - do nothing
  return false;
};
