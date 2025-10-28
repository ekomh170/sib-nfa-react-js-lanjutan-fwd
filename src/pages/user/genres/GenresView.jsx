/**
 * GenresView.jsx - Genre View Page (User Read-Only)
 * 
 * Halaman untuk melihat daftar genre buku.
 * User biasa hanya bisa VIEW, tidak bisa CREATE/UPDATE/DELETE.
 * 
 * Features:
 * - Display all genres in card layout
 * - Search functionality
 * - Filter by name
 * - Read-only access
 * - Responsive design
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

import { useState, useEffect } from 'react';
import { genreService } from '../../../services/genreService';

export default function GenresView() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch genres on component mount
  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    try {
      setLoading(true);
      const response = await genreService.getAll();
      console.log('📚 Genres API Response:', response);
      
      // Handle different response formats from Laravel API
      // Could be: array directly, or { data: array }, or { genres: array }
      let data = [];
      if (Array.isArray(response)) {
        data = response;
      } else if (response && Array.isArray(response.data)) {
        data = response.data;
      } else if (response && Array.isArray(response.genres)) {
        data = response.genres;
      }
      
      console.log('📚 Processed genres data:', data);
      setGenres(data);
    } catch (error) {
      console.error('❌ Error fetching genres:', error);
      alert('Gagal memuat data genre');
      setGenres([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  // Filter genres by search term
  const filteredGenres = Array.isArray(genres) ? genres.filter(genre =>
    genre.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    genre.description?.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Genre Buku</h1>
              <p className="text-gray-600 mt-1">Jelajahi berbagai kategori buku yang tersedia</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Mode: Read Only</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Cari genre berdasarkan nama atau deskripsi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="mb-6 flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <strong>{filteredGenres.length}</strong> genre ditemukan
              </span>
              {searchTerm && (
                <span className="flex items-center gap-2 text-red-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Filter aktif: "{searchTerm}"
                </span>
              )}
            </div>

            {/* Genre Cards Grid */}
            {filteredGenres.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGenres.map((genre) => (
                  <div
                    key={genre.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    {/* Card Header */}
                    <div className="bg-linear-to-r from-red-600 to-red-700 p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">{genre.name}</h3>
                        <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-white text-xs font-semibold">ID: {genre.id}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      {/* Slug */}
                      {genre.slug && (
                        <div className="mb-4 flex items-center gap-2 text-sm">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          <span className="text-gray-600 italic">{genre.slug}</span>
                        </div>
                      )}

                      {/* Description */}
                      <div className="mb-4">
                        <p className="text-gray-700 leading-relaxed">
                          {genre.description || 'Tidak ada deskripsi'}
                        </p>
                      </div>

                      {/* Metadata */}
                      <div className="border-t pt-4 space-y-2">
                        {genre.created_at && (
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Dibuat: {new Date(genre.created_at).toLocaleDateString('id-ID')}</span>
                          </div>
                        )}
                        {genre.updated_at && genre.created_at !== genre.updated_at && (
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span>Diperbarui: {new Date(genre.updated_at).toLocaleDateString('id-ID')}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // No Results
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tidak ada genre ditemukan</h3>
                <p className="text-gray-600">
                  {searchTerm
                    ? `Tidak ada hasil untuk pencarian "${searchTerm}"`
                    : 'Belum ada genre yang tersedia'}
                </p>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="mt-4 text-red-600 hover:text-red-700 font-semibold"
                  >
                    Hapus Filter
                  </button>
                )}
              </div>
            )}
          </>
        )}

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex gap-4">
            <div className="shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-blue-900 mb-1">Informasi</h4>
              <p className="text-sm text-blue-800">
                Halaman ini menampilkan semua genre buku yang tersedia dalam mode <strong>read-only</strong>. 
                Hanya administrator yang dapat menambah, mengubah, atau menghapus genre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
