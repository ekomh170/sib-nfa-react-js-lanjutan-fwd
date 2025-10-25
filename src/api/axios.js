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

// Instance axios dengan base URL Laravel API
const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
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
      // Token expired atau invalid, redirect ke login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/admin';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
