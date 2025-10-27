/**
 * axios.js - HTTP Client Configuration
 * 
 * Setup axios instance untuk komunikasi dengan Laravel API Backend.
 * Base URL: http://127.0.0.1:8000/api (DEVELOPMENT)
 * 
 * PRODUCTION: Update baseURL ke production API URL!
 * 
 * Features:
 * - Request interceptor: otomatis tambah token ke header
 * - Response interceptor: handle 401 (unauthorized)
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

import axios from 'axios';

// Instance axios dengan base URL Laravel API
const axiosInstance = axios.create({
  // PRODUCTION: Update baseURL ini dengan production API URL
  baseURL: 'http://127.0.0.1:8000/api', // DEVELOPMENT ONLY!
  
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: false
});

// Request interceptor - Tambahkan token ke semua request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle error 401 (unauthorized)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired atau invalid - redirect ke login
      // DEVELOPMENT: Uncomment console untuk debugging
      // console.warn('⚠️ Unauthorized (401): Token expired or invalid');
      
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // Redirect to login if not already there
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
