/**
 * AuthProvider.jsx - Authentication Provider Component
 * 
 * Provider component untuk mengelola state autentikasi global:
 * - User info (name, email, role)
 * - Token management
 * - Login/Logout functions
 * - Protected route logic
 * 
 * Dipisah dari AuthContext.jsx untuk menghindari Fast Refresh warning.
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

import { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { authService } from '../services/authService';

// Provider component - mengikuti aturan Fast Refresh
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is authenticated on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        try {
          const response = await authService.me();
          // DEVELOPMENT: Uncomment for debugging
          // console.log('✅ Auth check - Full response:', response);
          // console.log('📦 response.data:', response.data);
          // console.log('👤 response.data?.user:', response.data?.user);
          
          let userObject = null;
          
          // Handle Laravel API response format: { success: true, data: { user: {...} } }
          if (response.data && typeof response.data === 'object') {
            if (response.data.user) {
              userObject = response.data.user;
              // console.log('✅ Format 1: response.data.user');
            } else if (response.data.id && response.data.email) {
              // data itself is the user object
              userObject = response.data;
              // console.log('✅ Format 2: response.data is user');
            }
          } 
          // Handle format: { user: {...} }
          else if (response.user) {
            userObject = response.user;
            // console.log('✅ Format 3: response.user');
          } 
          // Handle format: user object directly
          else if (response.id && response.email) {
            userObject = response;
            // console.log('✅ Format 4: response is user directly');
          }
          
          if (userObject) {
            // console.log('✅ User object found:', userObject);
            setUser(userObject);
          } else {
            console.error('❌ Unknown user data format:', response);
            throw new Error('Invalid user data format');
          }
        } catch (error) {
          console.error('❌ Auth check failed:', error);
          // Clear invalid token
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setUser(null);
        }
      }
      
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const data = await authService.login(email, password);
      
      // DEVELOPMENT: Uncomment for debugging
      // console.log('📥 Login Response:', data);
      
      // Handle different response formats from Laravel
      let token, userObject;
      
      // Format Laravel: { success: true, data: { access_token: '...', user: {...} } }
      if (data.data?.access_token && data.data?.user) {
        token = data.data.access_token;
        userObject = data.data.user;
      }
      // Format 1: { token: '...', user: {...} }
      else if (data.token && data.user) {
        token = data.token;
        userObject = data.user;
      }
      // Format 2: { access_token: '...', user: {...} }
      else if (data.access_token) {
        token = data.access_token;
        userObject = data.user;
      }
      else {
        throw new Error('Invalid response format');
      }
      
      // Save token
      localStorage.setItem('token', token);
      
      // Get user info from /me if not included in login response
      if (!userObject) {
        const meResponse = await authService.me();
        if (meResponse.data?.user) {
          userObject = meResponse.data.user;
        } else if (meResponse.user) {
          userObject = meResponse.user;
        } else {
          userObject = meResponse;
        }
      }
      
      setUser(userObject);
      
      return { success: true, user: userObject };
    } catch (error) {
      // DEVELOPMENT: Uncomment for debugging
      // console.error('❌ Login Error:', error);
      // console.error('Response:', error.response?.data);
      
      return { 
        success: false, 
        error: error.response?.data?.message || error.message || 'Login gagal' 
      };
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('token');
      setUser(null);
    }
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
