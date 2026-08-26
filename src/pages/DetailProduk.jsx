import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useKeranjang } from "../context/KeranjangContext";
import { formatRupiah } from "../utils/format";

function DetailProduk() {
  const { id } = useParams();
  const [produk, setProduk] = useState(null);
  const [loading, setLoading] = useState(true);
  const { tambahKeKeranjang } = useKeranjang();

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduk(data);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <p className="text-center text-gray-400 py-24">Memuat...</p>;
  if (!produk)
    return <p className="text-center text-gray-400 py-24">Produk tidak ditemukan</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <Link to="/" className="text-sm text-gray-400 hover:text-gray-700 transition">
        &larr; Kembali ke katalog
      </Link>
      <div className="bg-white rounded-2xl border border-gray-100 p-8 mt-4 flex flex-col sm:flex-row gap-8">
        <div className="bg-gray-50 rounded-xl w-full sm:w-64 h-64 flex items-center justify-center shrink-0">
          <img src={produk.image} alt={produk.title} className="h-48 object-contain" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-wide text-blue-500 font-medium">
            {produk.category}
          </span>
          <h2 className="text-xl font-semibold text-gray-900 mt-2">{produk.title}</h2>
          <p className="text-2xl font-bold text-blue-600 mt-4">
            {formatRupiah(produk.price)}
          </p>
          <p className="text-gray-500 text-sm mt-4 leading-relaxed">{produk.description}</p>
          <button
            onClick={() => tambahKeKeranjang(produk)}
            className="mt-auto bg-gray-900 hover:bg-blue-600 text-white text-sm font-medium py-3 rounded-xl transition-colors w-full sm:w-fit sm:px-8"
          >
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailProduk;