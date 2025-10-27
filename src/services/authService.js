import axios from '../api/axios';

export const authService = {
  // Register
  register: async (userData) => {
    // DEVELOPMENT: Uncomment for debugging
    // console.log('📤 Register Request:', userData);
    const response = await axios.post('/register', userData);
    // console.log('📥 Register Response:', response.data);
    return response.data;
  },

  // Login
  login: async (email, password) => {
    const payload = { email, password };
    // DEVELOPMENT: Uncomment for debugging
    // console.log('📤 Login Request:', payload);
    // console.log('📥 Login Response:', response.data);
    // console.error('❌ Login Error:', error.response?.data);
    
    const response = await axios.post('/login', payload);
    return response.data;
  },

  // Logout
  logout: async () => {
    const response = await axios.post('/logout');
    return response.data;
  },

  // Get current user
  me: async () => {
    // DEVELOPMENT: Uncomment for debugging
    // console.log('📤 Fetching current user...');
    // console.log('📥 /me Response:', response.data);
    // console.error('❌ /me Error:', error.response?.data);
    
    const response = await axios.get('/me');
    return response.data;
  }
};
