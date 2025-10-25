/**
 * authorService.js - Author API Service
 * 
 * Service untuk handle semua operasi CRUD Author (Penulis).
 * Endpoint: /api/authors
 * 
 * Methods:
 * - getAll() - Ambil semua penulis
 * - getById(id) - Ambil penulis by ID dengan relasi buku
 * - create(data) - Tambah penulis baru (Admin)
 * - update(id, data) - Update penulis (Admin)
 * - delete(id) - Hapus penulis (Admin)
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

import axios from '../api/axios';

export const authorService = {
  // Get all authors - Ambil semua data penulis
  getAll: async () => {
    const response = await axios.get('/authors');
    return response.data;
  },

  // Get author by ID - Ambil penulis berdasarkan ID dengan relasi buku
  getById: async (id) => {
    const response = await axios.get(`/authors/${id}`);
    return response.data;
  },

  // Create author - Tambah penulis baru (Admin only)
  create: async (authorData) => {
    const response = await axios.post('/authors', authorData);
    return response.data;
  },

  // Update author - Update data penulis (Admin only)
  update: async (id, authorData) => {
    const response = await axios.put(`/authors/${id}`, authorData);
    return response.data;
  },

  // Delete author - Hapus penulis (Admin only)
  delete: async (id) => {
    const response = await axios.delete(`/authors/${id}`);
    return response.data;
  }
};
