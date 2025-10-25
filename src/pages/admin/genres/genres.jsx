import { useState } from "react";

export default function Genres() {
  // State untuk menyimpan list genre
  const [genres, setGenres] = useState([
    { id: 1, name: "Fiction", description: "Karya fiksi dan imajinatif" },
    { id: 2, name: "Non-Fiction", description: "Berdasarkan fakta dan kenyataan" },
    { id: 3, name: "Mystery", description: "Cerita misteri dan detektif" },
  ]);

  // State untuk form input
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  // State untuk toggle form
  const [showForm, setShowForm] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle submit form (Create)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name.trim() === "") {
      alert("Nama genre tidak boleh kosong!");
      return;
    }

    // Buat genre baru
    const newGenre = {
      id: genres.length + 1,
      name: formData.name,
      description: formData.description,
    };

    // Tambahkan ke list
    setGenres([...genres, newGenre]);

    // Reset form
    setFormData({ name: "", description: "" });
    setShowForm(false);

    alert("Genre berhasil ditambahkan!");
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Kelola Genre
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
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

      {/* Form Tambah Genre */}
      {showForm && (
        <div className="mb-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Tambah Genre Baru
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Simpan Genre
            </button>
          </form>
        </div>
      )}

      {/* Tabel Daftar Genre (Read) */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Nama Genre
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
            {genres.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                >
                  Belum ada data genre
                </td>
              </tr>
            ) : (
              genres.map((genre, index) => (
                <tr
                  key={genre.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {genre.name}
                  </td>
                  <td className="px-6 py-4">{genre.description || "-"}</td>
                  <td className="px-6 py-4">
                    <button className="font-medium text-red-600 dark:text-red-500 hover:underline mr-3">
                      Edit
                    </button>
                    <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
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
