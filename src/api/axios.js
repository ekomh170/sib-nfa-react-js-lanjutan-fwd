/**
 * axios.js - HTTP Client Configuration
 * 
 * Setup axios instance untuk komunikasi dengan Laravel API Backend.
 * Base URL: http://127.0.0.1:8000/api
 * 
 * Features:
 * - Request interceptor: otomatis tambah token ke header
 * - Response interceptor: handle 401 (unauthorized)
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

import axios from 'axios';

// ==================== DEVELOPMENT MODE - FAKE TOKEN ====================
// TEMPORARY: Set fake token untuk bypass auth sementara
// Uncomment baris ini untuk development tanpa login
// localStorage.setItem('token', 'fake-token-for-development');
// localStorage.setItem('user', JSON.stringify({ id: 1, name: 'Admin', role: 'admin' }));
// ========================================================================

// Instance axios dengan base URL Laravel API
const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // Temporary bypass untuk development (hapus saat production)
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: false // Disable credentials untuk bypass CORS
});

// Request interceptor - Tambahkan token ke semua request (OPTIONAL untuk development)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // Untuk development tanpa auth, comment bagian di atas
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle error 401 (unauthorized)
// TEMPORARY: Disabled redirect untuk development
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired atau invalid
      console.warn('⚠️ Unauthorized (401): API memerlukan authentication');
      console.log('💡 Solusi: Nonaktifkan middleware auth di backend Laravel atau tambahkan login');
      // Temporary: tidak redirect dulu
      // localStorage.removeItem('token');
      // localStorage.removeItem('user');
      // window.location.href = '/admin';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
