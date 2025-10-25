# BookStore Assets

## Folder Structure

```
public/
└── images/
    ├── logo.svg          - Logo BookStore (buku merah dengan halaman)
    └── developer.svg     - Avatar developer (Eko Muchamad Haryono)
```

## Cara Penggunaan

### Logo BookStore
```jsx
<img src="/images/logo.svg" alt="BookStore Logo" className="h-12 w-12" />
```

Digunakan di:
- Navbar (public)
- Navbar (admin)
- Footer
- Halaman Tentang

### Developer Avatar
```jsx
<img src="/images/developer.svg" alt="Developer" className="w-40 h-40 rounded-full" />
```

Digunakan di:
- Admin navbar (avatar dropdown)
- Halaman Tentang (section developer)

## Custom SVG Assets

### Logo Design
- **Warna utama**: Red (#DC2626, #EF4444, #B91C1C)
- **Elemen**: Buku dengan sampul merah, halaman putih, bookmark
- **Style**: Modern, minimalist, flat design

### Developer Avatar Design
- **Warna**: Red background (#DC2626) dengan silhouette putih
- **Elemen**: Person icon dengan badge nama developer
- **Dekorasi**: Code symbols (`</>`, `{}`, `=>`, `()`)

## Notes

Jika ingin mengganti dengan foto asli:
1. Simpan foto di folder `public/images/`
2. Update path di komponen yang menggunakan
3. Pastikan foto sudah dioptimasi (max 500KB recommended)
