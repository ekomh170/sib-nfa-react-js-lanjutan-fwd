# SIB Fullstack Web Developer - React JS Lanjutan

## Identitas Mahasiswa
- **NIM**: 0110223079
- **Nama**: Eko Muchamad Haryono
- **Program**: Studi Independen Bersertifikat
- **Aktivitas**: SIB Fullstack Web Developer (NFA)
- **Topik**: React JS Lanjutan
- **Group**: 2
- **Ruangan**: Zoom Mentoring Kelompok 02 Fullstack Web Developer - Gedung NF Academy Training Center
- **Prodi & Peminatan**: Teknik Informatika - Software Engineering
- **Semester**: 5

## Deskripsi Project
Repository ini berisi tugas-tugas React JS Lanjutan yang dikerjakan selama mengikuti program SIB (Studi Independen Bersertifikat) Fullstack Web Developer di Nurul Fikri Academy. Project ini merupakan kelanjutan dari materi React JS Dasar dengan fokus pada integrasi API dan state management.

### Tujuan Repository:
- Mengumpulkan tugas React JS Lanjutan
- Dokumentasi progress pembelajaran React JS tingkat lanjut
- Portfolio project untuk integrasi Frontend-Backend
- Referensi untuk pembelajaran berkelanjutan

---

## 📚 Daftar Tugas

### 🎯 Tugas 1: React JS Lanjutan - Pertemuan 1
- **Branch**: `tugas1-reactjs-lanjutan-eko`
- **GitHub Link**: [https://github.com/ekomh170/sib-nfa-react-js-lanjutan-fwd/tree/tugas1-reactjs-lanjutan-eko](https://github.com/ekomh170/sib-nfa-react-js-lanjutan-fwd/tree/tugas1-reactjs-lanjutan-eko)
- **Backend API**: [https://github.com/ekomh170/booksales-api-laravel](https://github.com/ekomh170/booksales-api-laravel)
- **Status**: ✅ SUDAH SUBMIT
- **Deadline**: Jumat, 24 Oktober 2025, 23:59 WIB
- **File Submitted**: `tugas1-react-js-lanjutan-eko-muchamad-haryono-fwd-nfa.pdf`
- **Teknologi**: React 19.1.1, Vite 7.1.7, Tailwind CSS 4.1.15, Axios, React Router v7.9.4
- **Deskripsi**:
  - Buatlah fitur **Read** dan **Create** data untuk **Genre** dan **Author** pada tampilan Admin.
  - Desain antarmuka sesuai kreativitas masing-masing (tema: Merah-Putih Indonesia 🇮🇩).
  - Integrasi dengan Laravel Backend API.
  - Upload kode ke GitHub dengan repository **private** dan invite username mentor.
  - Copy paste link GitHub ke dalam MS Word dan kumpulkan ke LMS dalam format PDF.

### Fitur yang Dikerjakan:
#### 📗 Genre Management
- **Read**: Menampilkan daftar genre dari API dengan tabel (ID, Nama, Slug, Deskripsi)
- **Create**: Form tambah genre baru (Nama & Deskripsi) dengan validasi

#### 👤 Author Management
- **Read**: Menampilkan daftar penulis dari API dengan card layout (Nama, Email, Negara, Tanggal Lahir, Biografi)
- **Create**: Form tambah penulis baru dengan 5 field (Name, Email, Country, Birth Date, Biography)

#### 🎨 Tema & Design
- Tema Merah-Putih Indonesia 🇮🇩
- Responsive design (Desktop, Tablet, Mobile)
- Loading states & error handling
- Success/Error notifications
- Modern & clean UI

---

### 🎯 Tugas 2: React JS Lanjutan - Pertemuan 2
- **Branch**: `tugas2-reactjs-lanjutan-eko`
- **GitHub Link**: [https://github.com/ekomh170/sib-nfa-react-js-lanjutan-fwd/tree/tugas2-reactjs-lanjutan-eko](https://github.com/ekomh170/sib-nfa-react-js-lanjutan-fwd/tree/tugas2-reactjs-lanjutan-eko)
- **Backend API**: [https://github.com/ekomh170/booksales-api-laravel](https://github.com/ekomh170/booksales-api-laravel)
- **Status**: ✅ SUDAH SUBMIT
- **Tanggal Submit**: Sabtu, 25 Oktober 2025, 11:39 AM
- **Deadline**: Sabtu, 25 Oktober 2025, 23:59 WIB
- **File Submitted**: `tugas2-react-js-lanjutan-eko-muchamad-haryono-fwd-nfa.pdf`
- **Teknologi**: React 19.1.1, Vite 7.1.7, Tailwind CSS 4.1.15, Axios, React Router v7.9.4
- **Deskripsi**:
  - Buatlah fitur **Update** dan **Delete** data untuk **Genre** dan **Author** pada tampilan Admin.
  - Desain antarmuka sesuai kreativitas masing-masing (tema: Merah-Putih Indonesia 🇮🇩).
  - Upload kode ke GitHub dengan repository **private** dan invite username mentor.
  - Copy paste link GitHub ke dalam MS Word dan kumpulkan ke LMS dalam format PDF.

### Fitur yang Dikerjakan:
#### 📗 Genre Management (UPDATE & DELETE)
- **Update**: Edit data genre dengan form modal/inline editing
- **Delete**: Hapus genre dengan konfirmasi dialog
- Validasi form untuk update data
- Refresh otomatis setelah update/delete

#### 👤 Author Management (UPDATE & DELETE)
- **Update**: Edit data author dengan form lengkap (Name, Email, Country, Birth Date, Biography)
- **Delete**: Hapus author dengan konfirmasi dialog
- Validasi form untuk update data
- Refresh otomatis setelah update/delete

#### 🎨 UI Enhancement
- Modal/Dialog untuk form edit
- Confirmation dialog untuk delete
- Icon buttons untuk aksi (Edit & Delete)
- Loading states saat proses update/delete
- Success/Error notifications
- Tema konsisten Merah-Putih Indonesia 🇮🇩

---

## 🚀 Cara Menjalankan Project

### Prerequisites
- Node.js (versi 18+)
- npm atau yarn
- Backend Laravel API running di `http://127.0.0.1:8000`

### Instalasi
```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Aplikasi akan berjalan di: **http://localhost:5173**

### Akses Halaman
- Homepage: `http://localhost:5173/`
- Admin Dashboard: `http://localhost:5173/admin`
- Genres: `http://localhost:5173/admin/genres`
- Authors: `http://localhost:5173/admin/authors`
- About: `http://localhost:5173/tentang`

---

## 📁 Struktur Project

```
src/
├── api/
│   └── axios.js                   # Axios instance dengan interceptors
├── services/
│   ├── genreService.js            # Genre API calls (CRUD lengkap)
│   └── authorService.js           # Author API calls (CRUD lengkap)
├── components/
│   ├── navbar.jsx                 # Navbar komponen
│   ├── footer.jsx                 # Footer komponen
│   ├── hero.jsx                   # Hero section
│   └── testimonial.jsx            # Testimonial section
├── layouts/
│   ├── admin.jsx                  # Admin layout dengan sidebar
│   └── public.jsx                 # Public layout wrapper
├── pages/
│   ├── admin/
│   │   ├── index.jsx              # Dashboard admin
│   │   ├── genres/genresAPI.jsx   # Genre CRUD (CREATE, READ, UPDATE, DELETE)
│   │   └── authors/authorsAPI.jsx # Author CRUD (CREATE, READ, UPDATE, DELETE)
│   ├── public/index.jsx           # Homepage
│   └── about.jsx                  # About page
├── assets/
│   ├── logo.svg                   # BookStore logo
│   └── developer/profile_eko.jpg  # Developer photo
├── App.jsx                        # Router configuration
└── main.jsx                       # Entry point
```

---

## 🔌 API Integration

### Base URL
```
http://127.0.0.1:8000/api
```

### Endpoints yang Digunakan

**Genre:**
- `GET /api/genres` - Get all genres (Tugas 1 & 2)
- `POST /api/genres` - Create new genre (Tugas 1)
- `GET /api/genres/{id}` - Get genre by ID (Tugas 2)
- `PUT /api/genres/{id}` - Update genre (Tugas 2)
- `DELETE /api/genres/{id}` - Delete genre (Tugas 2)

**Author:**
- `GET /api/authors` - Get all authors (Tugas 1 & 2)
- `POST /api/authors` - Create new author (Tugas 1)
- `GET /api/authors/{id}` - Get author by ID (Tugas 2)
- `PUT /api/authors/{id}` - Update author (Tugas 2)
- `DELETE /api/authors/{id}` - Delete author (Tugas 2)

---

## 🛠️ Teknologi yang Digunakan

- **React**: 19.1.1 (Frontend Framework)
- **Vite**: 7.1.7 (Build Tool)
- **Tailwind CSS**: 4.1.15 (CSS Framework)
- **React Router**: 7.9.4 (Client-side Routing)
- **Axios**: HTTP Client untuk API Integration
- **Laravel API**: Backend RESTful API

---

*Repository dibuat untuk program SIB Fullstack Web Developer (NFA) - Batch 2025*

**Dikembangkan dengan ❤️ dan tema 🇮🇩 oleh Eko Muchamad Haryono**

