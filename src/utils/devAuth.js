/**
 * devAuth.js - Development Authentication Helper
 * 
 * TEMPORARY: Auto-login untuk development/testing Tugas 2
 * Fungsi ini akan otomatis login dengan kredensial development
 * sehingga tidak perlu login manual setiap kali testing
 * 
 * IMPORTANT: HAPUS file ini saat production!
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

import axios from 'axios';

/**
 * Auto login dengan kredensial development
 * Dipanggil saat aplikasi pertama kali load
 */
export const autoLoginDevelopment = async () => {
  // Cek apakah sudah ada token
  const existingToken = localStorage.getItem('token');
  
  if (existingToken) {
    console.log('✅ Token sudah ada, skip auto-login');
    return true;
  }

  // Prevent multiple login attempts
  if (window.__isLoggingIn) {
    console.log('⏳ Login sedang berjalan...');
    return false;
  }

  window.__isLoggingIn = true;

  try {
    // Kredensial development (sesuai UserSeeder backend)
    const credentials = {
      email: 'eko@booksales.com',     // Admin: Eko Muchamad Haryono
      password: 'password123'          // Password dari UserSeeder
    };

    console.log('🔄 Auto-login development...');
    
    // Login ke backend
    const response = await axios.post('http://127.0.0.1:8000/api/login', credentials);
    
    // Backend Laravel return: { success: true, message: '...', data: { user: {...}, access_token: '...' } }
    if (response.data.data && response.data.data.access_token) {
      const { access_token, user } = response.data.data;
      
      // Simpan token dan user ke localStorage
      localStorage.setItem('token', access_token);
      localStorage.setItem('user', JSON.stringify(user));
      
      console.log('✅ Auto-login berhasil!', user);
      console.log('🔑 Token:', access_token.substring(0, 20) + '...');
      console.log('👤 User:', user.name, '(', user.role, ')');
      
      window.__isLoggingIn = false;
      return true;
    } else {
      console.error('❌ Response format tidak sesuai:', response.data);
      window.__isLoggingIn = false;
      return false;
    }
  } catch (error) {
    console.error('❌ Auto-login gagal:', error.response?.data?.message || error.message);
    console.log('💡 Solusi:');
    console.log('   1. Pastikan backend Laravel running: php artisan serve');
    console.log('   2. Pastikan database sudah di-seed: php artisan migrate:fresh --seed');
    console.log('   3. Cek kredensial di UserSeeder backend');
    
    window.__isLoggingIn = false;
    return false;
  }
};

/**
 * Logout dan hapus token
 */
export const devLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  console.log('🚪 Logout development');
};

/**
 * Cek apakah user sudah login
 */
export const isDevAuthenticated = () => {
  return !!localStorage.getItem('token');
};
