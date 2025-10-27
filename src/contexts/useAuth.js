/**
 * useAuth.js - Custom Hook for Authentication
 * 
 * Hook untuk mengakses AuthContext.
 * Dipisah dari AuthContext.jsx untuk menghindari Fast Refresh warning.
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

import { useContext } from 'react';
import { AuthContext } from './AuthContext';

/**
 * Custom hook untuk menggunakan auth context
 * 
 * @returns {Object} { user, loading, login, logout, isAuthenticated }
 * @throws {Error} jika digunakan di luar AuthProvider
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
