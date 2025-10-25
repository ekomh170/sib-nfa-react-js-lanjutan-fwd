import { useState } from "react";

export default function Authors() {
  // State untuk menyimpan list author
  const [authors, setAuthors] = useState([
    { id: 1, name: "Tere Liye", bio: "Penulis novel Indonesia terkenal", country: "Indonesia" },
    { id: 2, name: "Andrea Hirata", bio: "Penulis Laskar Pelangi", country: "Indonesia" },
    { id: 3, name: "Dee Lestari", bio: "Penulis Filosofi Kopi dan Supernova", country: "Indonesia" },
    { id: 4, name: "Raditya Dika", bio: "Penulis komedi dan Stand Up Comedian", country: "Indonesia" },
  ]);

  // State untuk form input
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    country: "",
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
      alert("Nama penulis tidak boleh kosong!");
      return;
    }

    // Buat author baru
    const newAuthor = {
      id: authors.length + 1,
      name: formData.name,
      bio: formData.bio,
      country: formData.country,
    };

    // Tambahkan ke list
    setAuthors([...authors, newAuthor]);

    // Reset form
    setFormData({ name: "", bio: "", country: "" });
    setShowForm(false);

    alert("Penulis berhasil ditambahkan!");
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          ✍️ Kelola Penulis/Author
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Daftar penulis dan author buku yang terdaftar di sistem
        </p>
      </div>

      {/* Tombol Tambah Author */}
      <div className="mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-sm px-5 py-2.5 shadow-lg transition"
        >
          {showForm ? "❌ Batal" : "➕ Tambah Penulis"}
        </button>
      </div>

      {/* Form Tambah Author */}
      {showForm && (
        <div className="mb-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            ➕ Tambah Penulis Baru
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nama Penulis <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                  placeholder="Contoh: Pramoedya Ananta Toer"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Negara Asal
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                  placeholder="Contoh: Indonesia"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="bio"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Biografi Singkat
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows="3"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                placeholder="Deskripsi singkat tentang penulis (opsional)"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              💾 Simpan Penulis
            </button>
          </form>
        </div>
      )}

      {/* Grid Card Daftar Author (Read) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {authors.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500 dark:text-gray-400">
            📭 Belum ada data penulis
          </div>
        ) : (
          authors.map((author) => (
            <div
              key={author.id}
              className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-3">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {author.name}
                  </h5>
                  {author.country && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      🌍 {author.country}
                    </span>
                  )}
                </div>
              </div>
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400 mb-4">
                {author.bio || "Belum ada biografi"}
              </p>
              <div className="flex gap-2">
                <button className="text-xs font-medium text-red-600 dark:text-red-500 hover:underline">
                  📝 Edit
                </button>
                <button className="text-xs font-medium text-red-600 dark:text-red-500 hover:underline">
                  🗑️ Hapus
                </button>
                <button className="text-xs font-medium text-gray-600 dark:text-gray-400 hover:underline ml-auto">
                  📚 {Math.floor(Math.random() * 20) + 1} Buku
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Summary Card */}
      <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
        <p className="text-sm text-red-800">
          <strong>📊 Total Penulis:</strong> {authors.length} penulis terdaftar
        </p>
      </div>
    </>
  );
}
