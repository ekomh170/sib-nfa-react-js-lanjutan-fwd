/**
 * genresAPI.jsx - Genre Management Page (CRUD)
 * 
 * Halaman admin untuk manage Genre dengan fitur:
 * - READ: Tampil list genre dalam tabel (ID, Name, Slug, Description)
 * - CREATE: Form tambah genre baru (Name & Description)
 * - Loading state & error handling
 * - Success notification
 * 
 * Data dari: genreService (Laravel API)
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

import { useState, useEffect } from "react";
import { genreService } from "../../../services/genreService";

export default function GenresAPI() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  // Fetch genres from API on component mount
  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await genreService.getAll();
      setGenres(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal memuat data genre");
      console.error("Error fetching genres:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage("");
    
    try {
      const response = await genreService.create(formData);
      setSuccessMessage(response.message || "Genre berhasil ditambahkan!");
      setFormData({ name: "", description: "" });
      setShowForm(false);
      // Refresh genre list
      fetchGenres();
    } catch (err) {
      setError(err.response?.data?.message || "Gagal menambahkan genre");
      console.error("Error creating genre:", err);
    }
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Kelola Genre
        </h1>
        <p className="text-gray-600">
          Daftar genre buku yang tersedia di sistem
        </p>
      </div>

      {/* Tombol Tambah Genre */}
      <div className="mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-sm px-5 py-2.5 shadow-lg transition"
        >
          {showForm ? "❌ Batal" : "➕ Tambah Genre"}
        </button>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="mb-4 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
          <p className="text-sm text-green-800 font-medium">✅ {successMessage}</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
          <p className="text-sm text-red-800 font-medium">❌ {error}</p>
        </div>
      )}

      {/* Form Tambah Genre */}
      {showForm && (
        <div className="mb-6 p-6 bg-white border border-gray-200 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-gray-900">
            Tambah Genre Baru
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nama Genre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                placeholder="Masukkan nama genre"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Deskripsi
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                placeholder="Masukkan deskripsi genre"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Simpan Genre
            </button>
          </form>
        </div>
      )}

      {/* Tabel Daftar Genre (Read) */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Nama Genre
              </th>
              <th scope="col" className="px-6 py-3">
                Slug
              </th>
              <th scope="col" className="px-6 py-3">
                Deskripsi
              </th>
              <th scope="col" className="px-6 py-3">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr className="bg-white border-b">
                <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                  <div className="flex justify-center items-center">
                    <svg className="animate-spin h-8 w-8 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="ml-3 text-lg">Loading...</span>
                  </div>
                </td>
              </tr>
            ) : genres.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-4 text-center text-gray-500"
                >
                  📭 Belum ada data genre. Silakan tambahkan genre baru!
                </td>
              </tr>
            ) : (
              genres.map((genre, index) => (
                <tr
                  key={genre.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {genre.name}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {genre.slug}
                  </td>
                  <td className="px-6 py-4">{genre.description || "-"}</td>
                  <td className="px-6 py-4">
                    <button className="font-medium text-red-600 hover:underline mr-3">
                      Edit
                    </button>
                    <button className="font-medium text-red-600 hover:underline">
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
