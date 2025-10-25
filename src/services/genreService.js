/**
 * genreService.js - Genre API Service
 * 
 * Service untuk handle semua operasi CRUD Genre.
 * Endpoint: /api/genres
 * 
 * Methods:
 * - getAll() - Ambil semua genre
 * - getById(id) - Ambil genre by ID
 * - create(data) - Tambah genre baru (Admin)
 * - update(id, data) - Update genre (Admin)
 * - delete(id) - Hapus genre (Admin)
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

import axios from '../api/axios';

export const genreService = {
  // Get all genres - Ambil semua data genre
  getAll: async () => {
    const response = await axios.get('/genres');
    return response.data;
  },

  // Get genre by ID - Ambil genre berdasarkan ID
  getById: async (id) => {
    const response = await axios.get(`/genres/${id}`);
    return response.data;
  },

  // Create genre - Tambah genre baru (Admin only)
  create: async (genreData) => {
    const response = await axios.post('/genres', genreData);
    return response.data;
  },

  // Update genre - Update data genre (Admin only)
  update: async (id, genreData) => {
    const response = await axios.put(`/genres/${id}`, genreData);
    return response.data;
  },

  // Delete genre - Hapus genre (Admin only)
  delete: async (id) => {
    const response = await axios.delete(`/genres/${id}`);
    return response.data;
  }
};
