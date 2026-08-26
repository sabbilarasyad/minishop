# MiniShop

Aplikasi toko online sederhana dibangun dengan React (Vite), menampilkan katalog produk, keranjang belanja, autentikasi, dan riwayat transaksi.

## Fitur

- **Katalog Produk** — data diambil langsung dari Fake Store API, lengkap dengan pencarian, filter kategori, dan pagination
- **Detail Produk** — halaman khusus per produk dengan deskripsi lengkap
- **Keranjang Belanja** — tambah, hapus, ubah jumlah item; data tersimpan otomatis di localStorage (tidak hilang saat refresh)
- **Transaksi & Riwayat Pesanan** — checkout dari keranjang, otomatis tersimpan sebagai riwayat pesanan lengkap dengan tanggal dan total
- **Autentikasi** — form Login & Register dengan validasi (email, password, konfirmasi password)
- **Proteksi Halaman** — halaman Keranjang hanya bisa diakses setelah login
- **Testing Otomatis** — unit test untuk komponen ProdukCard dan FormLogin menggunakan Vitest & Testing Library
- **Optimasi** — `React.memo` untuk komponen produk, lazy loading halaman Keranjang

## Tech Stack

- React 18 + Vite
- React Router DOM (routing & navigasi)
- Context API (state management: Keranjang, Auth, Pesanan)
- Tailwind CSS (styling)
- Vitest + React Testing Library (testing)
- Fake Store API (sumber data produk)

## Cara Instalasi

```bash
git clone <url-repo-kamu>
cd minishop
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

## Menjalankan Test

```bash
npm run test
```

## Build untuk Production

```bash
npm run build
```

Hasil build akan ada di folder `dist/`, siap untuk di-deploy.

## Struktur Folder

```
src/
├── components/       # Komponen reusable
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── ProdukCard.jsx
│   ├── ProtectedRoute.jsx
│   └── __tests__/    # Unit test komponen
├── pages/            # Halaman utama aplikasi
│   ├── Home.jsx
│   ├── DetailProduk.jsx
│   ├── Keranjang.jsx
│   ├── RiwayatPesanan.jsx
│   ├── Login.jsx
│   └── Register.jsx
├── context/           # State management global
│   ├── KeranjangContext.jsx
│   ├── AuthContext.jsx
│   └── PesananContext.jsx
├── hooks/              # Custom hooks
│   └── useLocalStorage.js
├── utils/              # Fungsi bantu
│   └── format.js       # Format harga ke Rupiah
├── data/               # Data dummy (fase awal, sudah tidak dipakai)
├── App.jsx
└── main.jsx
```

## Cara Pakai

1. Buka halaman utama, cari/filter produk sesuai kebutuhan
2. Klik **Lihat Detail** untuk melihat deskripsi lengkap produk
3. Klik ikon keranjang atau **Beli Sekarang** untuk menambah produk
4. **Login/Register** untuk bisa mengakses halaman Keranjang
5. Di halaman Keranjang, atur jumlah barang lalu klik **Checkout**
6. Pesanan akan otomatis muncul di halaman **Riwayat Pesanan**

## Tautan Live

https://minishopsie.netlify.app/

---

Proyek ini dibuat sebagai latihan pengembangan aplikasi React satu semester, mencakup fondasi komponen, routing, state management, integrasi API, autentikasi, testing, hingga deployment.
