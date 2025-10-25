/**
 * authorsAPI.jsx - Author Management Page (CRUD LENGKAP)
 * 
 * Halaman admin untuk manage Author dengan fitur:
 * - READ: Tampil list author dalam card grid (Name, Email, Country, Birth Date, Biography)
 * - CREATE: Form tambah author baru (5 fields)
 * - UPDATE: Edit author dengan form lengkap (Tugas 2)
 * - DELETE: Hapus author dengan konfirmasi dialog (Tugas 2)
 * - Loading state & error handling
 * - Success notification
 * 
 * Data dari: authorService (Laravel API)
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */
import { useState, useEffect } from "react";
import { authorService } from "../../../services/authorService";

export default function AuthorsAPI() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    birth_date: "",
    biography: "",
  });

  // Fetch authors from API on component mount
  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await authorService.getAll();
      setAuthors(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal memuat data penulis");
      console.error("Error fetching authors:", err);
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
      if (isEditing) {
        // Update existing author
        const response = await authorService.update(editingId, formData);
        setSuccessMessage(response.message || "Penulis berhasil diupdate!");
      } else {
        // Create new author
        const response = await authorService.create(formData);
        setSuccessMessage(response.message || "Penulis berhasil ditambahkan!");
      }
      
      setFormData({ name: "", email: "", country: "", birth_date: "", biography: "" });
      setShowForm(false);
      setIsEditing(false);
      setEditingId(null);
      // Refresh author list
      fetchAuthors();
    } catch (err) {
      setError(err.response?.data?.message || `Gagal ${isEditing ? 'mengupdate' : 'menambahkan'} penulis`);
      console.error("Error submitting author:", err);
    }
  };

  const handleEdit = (author) => {
    setFormData({
      name: author.name,
      email: author.email,
      country: author.country || "",
      birth_date: author.birth_date || "",
      biography: author.biography || "",
    });
    setEditingId(author.id);
    setIsEditing(true);
    setShowForm(true);
    setError(null);
    setSuccessMessage("");
  };

  const handleCancelEdit = () => {
    setFormData({ name: "", email: "", country: "", birth_date: "", biography: "" });
    setIsEditing(false);
    setEditingId(null);
    setShowForm(false);
    setError(null);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      setError(null);
      const response = await authorService.delete(deleteId);
      setSuccessMessage(response.message || "Penulis berhasil dihapus!");
      setShowDeleteModal(false);
      setDeleteId(null);
      // Refresh author list
      fetchAuthors();
    } catch (err) {
      setError(err.response?.data?.message || "Gagal menghapus penulis");
      console.error("Error deleting author:", err);
      setShowDeleteModal(false);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setDeleteId(null);
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Kelola Penulis
        </h1>
        <p className="text-gray-600">
          Daftar penulis buku yang terdaftar di sistem
        </p>
      </div>

      {/* Tombol Tambah Penulis */}
      <div className="mb-6">
        <button
          onClick={() => {
            if (showForm && !isEditing) {
              setShowForm(false);
            } else {
              handleCancelEdit();
              setShowForm(!showForm);
            }
          }}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-sm px-5 py-2.5 shadow-lg transition"
        >
          {showForm ? "❌ Batal" : "➕ Tambah Penulis"}
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

      {/* Form Tambah Penulis */}
      {showForm && (
        <div className="mb-6 p-6 bg-white border border-gray-200 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-gray-900">
            {isEditing ? "Edit Penulis" : "Tambah Penulis Baru"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nama Penulis *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                  placeholder="Contoh: Andrea Hirata"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                  placeholder="Contoh: andrea@example.com"
                  required
                />
              </div>
            </div>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="country"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Negara *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                  placeholder="Contoh: Indonesia"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="birth_date"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Tanggal Lahir *
                </label>
                <input
                  type="date"
                  id="birth_date"
                  name="birth_date"
                  value={formData.birth_date}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="biography"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Biografi
              </label>
              <textarea
                id="biography"
                name="biography"
                value={formData.biography}
                onChange={handleInputChange}
                rows="3"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                placeholder="Deskripsi singkat tentang penulis (opsional)"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {isEditing ? "💾 Update Penulis" : "➕ Simpan Penulis"}
            </button>
          </form>
        </div>
      )}

      {/* Grid Daftar Penulis (Read) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <div className="col-span-full flex justify-center items-center py-12">
            <svg className="animate-spin h-12 w-12 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="ml-3 text-lg text-gray-600">Loading...</span>
          </div>
        ) : authors.length === 0 ? (
          <div className="col-span-full text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500">📭 Belum ada data penulis. Silakan tambahkan penulis baru!</p>
          </div>
        ) : (
          authors.map((author) => (
            <div
              key={author.id}
              className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-3">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <h5 className="text-lg font-bold tracking-tight text-gray-900">
                    {author.name}
                  </h5>
                  {author.country && (
                    <span className="text-xs text-gray-500">
                      🌍 {author.country}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                📧 {author.email}
              </p>
              {author.birth_date && (
                <p className="text-sm text-gray-600 mb-2">
                  🎂 {new Date(author.birth_date).toLocaleDateString('id-ID')}
                </p>
              )}
              <p className="font-normal text-sm text-gray-700 mb-4">
                {author.biography || "Belum ada biografi"}
              </p>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleEdit(author)}
                  className="text-xs font-medium text-blue-600 hover:underline"
                >
                  ✏️ Edit
                </button>
                <button 
                  onClick={() => handleDeleteClick(author.id)}
                  className="text-xs font-medium text-red-600 hover:underline"
                >
                  🗑️ Hapus
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Summary */}
      <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
        <p className="text-sm text-red-800">
          <strong>📊 Total Penulis:</strong> {authors.length} penulis terdaftar
        </p>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
          <div className="relative p-8 bg-white w-96 shadow-lg rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              🗑️ Konfirmasi Hapus
            </h3>
            <p className="text-gray-600 mb-6">
              Apakah Anda yakin ingin menghapus penulis ini? Data yang sudah dihapus tidak dapat dikembalikan.
            </p>
            <div className="flex gap-4 justify-end">
              <button
                onClick={handleDeleteCancel}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 font-medium"
              >
                Batal
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
