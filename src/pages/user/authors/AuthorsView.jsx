/**
 * AuthorsView.jsx - Author View Page (User Read-Only)
 * 
 * Halaman untuk melihat daftar penulis buku.
 * User biasa hanya bisa VIEW, tidak bisa CREATE/UPDATE/DELETE.
 * 
 * Features:
 * - Display all authors in card layout
 * - Search functionality
 * - Filter by name, email, or country
 * - Read-only access
 * - Responsive design
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

import { useState, useEffect } from 'react';
import { authorService } from '../../../services/authorService';

export default function AuthorsView() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch authors on component mount
  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    try {
      setLoading(true);
      const response = await authorService.getAll();
      console.log('👥 Authors API Response:', response);
      
      // Handle different response formats from Laravel API
      // Could be: array directly, or { data: array }, or { authors: array }
      let data = [];
      if (Array.isArray(response)) {
        data = response;
      } else if (response && Array.isArray(response.data)) {
        data = response.data;
      } else if (response && Array.isArray(response.authors)) {
        data = response.authors;
      }
      
      console.log('👥 Processed authors data:', data);
      setAuthors(data);
    } catch (error) {
      console.error('❌ Error fetching authors:', error);
      alert('Gagal memuat data penulis');
      setAuthors([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  // Filter authors by search term
  const filteredAuthors = Array.isArray(authors) ? authors.filter(author =>
    author.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    author.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    author.country?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    author.biography?.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Penulis Buku</h1>
              <p className="text-gray-600 mt-1">Kenali para penulis berbakat di koleksi kami</p>
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
              placeholder="Cari penulis berdasarkan nama, email, atau negara..."
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
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <strong>{filteredAuthors.length}</strong> penulis ditemukan
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

            {/* Authors Cards Grid */}
            {filteredAuthors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAuthors.map((author) => (
                  <div
                    key={author.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    {/* Card Header with Avatar */}
                    <div className="bg-linear-to-r from-red-600 to-red-700 p-6 text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 mb-3">
                        <span className="text-3xl font-bold text-white">
                          {author.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{author.name}</h3>
                      <div className="mt-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                        <span className="text-white text-xs font-semibold">ID: {author.id}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      {/* Contact Info */}
                      <div className="space-y-3 mb-4">
                        {/* Email */}
                        {author.email && (
                          <div className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <span className="text-gray-700 truncate">{author.email}</span>
                          </div>
                        )}

                        {/* Country */}
                        {author.country && (
                          <div className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <span className="text-gray-700">{author.country}</span>
                          </div>
                        )}

                        {/* Birth Date */}
                        {author.birth_date && (
                          <div className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <span className="text-gray-700">
                              {new Date(author.birth_date).toLocaleDateString('id-ID', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                              })}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Biography */}
                      {author.biography && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Biografi</h4>
                          <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
                            {author.biography}
                          </p>
                        </div>
                      )}

                      {/* Metadata */}
                      <div className="border-t pt-4 space-y-2">
                        {author.created_at && (
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Ditambahkan: {new Date(author.created_at).toLocaleDateString('id-ID')}</span>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tidak ada penulis ditemukan</h3>
                <p className="text-gray-600">
                  {searchTerm
                    ? `Tidak ada hasil untuk pencarian "${searchTerm}"`
                    : 'Belum ada penulis yang tersedia'}
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
                Halaman ini menampilkan semua penulis buku yang tersedia dalam mode <strong>read-only</strong>. 
                Hanya administrator yang dapat menambah, mengubah, atau menghapus data penulis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
