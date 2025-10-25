import axios from '../api/axios';

export const authService = {
  // Login
  login: async (email, password) => {
    const response = await axios.post('/login', { email, password });
    return response.data;
  },

  // Logout
  logout: async () => {
    const response = await axios.post('/logout');
    return response.data;
  },

  // Get current user
  me: async () => {
    const response = await axios.get('/me');
    return response.data;
  }
};
