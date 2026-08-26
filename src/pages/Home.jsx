import { useState, useEffect } from "react";
import ProdukCard from "../components/ProdukCard";

function Home() {
  const [produk, setProduk] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [kataKunci, setKataKunci] = useState("");
  const [kategori, setKategori] = useState("");
  const [daftarKategori, setDaftarKategori] = useState([]);
  const [halaman, setHalaman] = useState(1);
  const perHalaman = 8;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduk(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Gagal memuat produk. Coba refresh halaman.");
        setLoading(false);
      });

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setDaftarKategori(data));
  }, []);

  const produkTersaring = produk
    .filter((p) => p.title.toLowerCase().includes(kataKunci.toLowerCase()))
    .filter((p) => (kategori ? p.category === kategori : true));

  const totalHalaman = Math.ceil(produkTersaring.length / perHalaman);
  const produkHalamanIni = produkTersaring.slice(
    (halaman - 1) * perHalaman,
    halaman * perHalaman
  );

  if (loading)
    return <p className="text-center text-gray-400 py-24">Memuat produk...</p>;
  if (error)
    return <p className="text-center text-red-500 py-24">{error}</p>;

  return (
  <div>
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Selamat Datang di <span className="text-blue-600">MiniShop!</span>
      </h1>
      <p className="text-gray-400 text-sm mt-2">
        Silakan pilih produk favoritmu di bawah ini.
      </p>
    </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          placeholder="Cari produk..."
          value={kataKunci}
          onChange={(e) => {
            setKataKunci(e.target.value);
            setHalaman(1);
          }}
          className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
        />
        <select
          value={kategori}
          onChange={(e) => {
            setKategori(e.target.value);
            setHalaman(1);
          }}
          className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600"
        >
          <option value="">Semua Kategori</option>
          {daftarKategori.map((k) => (
            <option key={k} value={k}>{k}</option>
          ))}
        </select>
      </div>

      {produkHalamanIni.length === 0 ? (
        <p className="text-center text-gray-400 py-24">Produk tidak ditemukan.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {produkHalamanIni.map((p) => (
            <ProdukCard key={p.id} produk={p} />
          ))}
        </div>
      )}

      {totalHalaman > 1 && (
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setHalaman((h) => h - 1)}
            disabled={halaman === 1}
            className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-xl disabled:opacity-30 hover:bg-gray-50 transition"
          >
            Sebelumnya
          </button>
          <span className="text-sm text-gray-400">
            {halaman} / {totalHalaman}
          </span>
          <button
            onClick={() => setHalaman((h) => h + 1)}
            disabled={halaman === totalHalaman}
            className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-xl disabled:opacity-30 hover:bg-gray-50 transition"
          >
            Selanjutnya
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;