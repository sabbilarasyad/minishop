import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useKeranjang } from "../context/KeranjangContext";
import { usePesanan } from "../context/PesananContext";
import { useAuth } from "../context/AuthContext";
import { formatRupiah } from "../utils/format";

function ProdukCard({ produk }) {
  const { tambahKeKeranjang } = useKeranjang();
  const { tambahPesanan } = usePesanan();
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleBeliSekarang() {
    if (!user) {
      navigate("/login");
      return;
    }
    tambahPesanan([{ ...produk, quantity: 1 }], produk.price);
    navigate("/riwayat-pesanan");
  }

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
      <Link to={`/produk/${produk.id}`} className="block">
        <div className="bg-gray-50 rounded-xl h-40 flex items-center justify-center mb-4 overflow-hidden">
          <img
            src={produk.image}
            alt={produk.title}
            className="h-32 object-contain group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-[2.5rem]">
          {produk.title}
        </h3>
      </Link>
      <p className="text-blue-600 font-semibold mt-2 mb-4">
  {formatRupiah(produk.price)}
</p>

      <div className="flex gap-2 mb-2">
        <Link
          to={`/produk/${produk.id}`}
          className="flex-1 text-center border border-gray-200 text-gray-600 text-sm font-medium py-2.5 rounded-xl hover:bg-gray-50 transition"
        >
          Lihat Detail
        </Link>
        <button
          onClick={() => tambahKeKeranjang(produk)}
          aria-label="Tambah ke keranjang"
          className="shrink-0 w-11 flex items-center justify-center border border-gray-200 rounded-xl hover:bg-gray-50 transition text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 2-1.58l1.65-7.43H5.12" />
          </svg>
        </button>
      </div>

      <button
        onClick={handleBeliSekarang}
        className="bg-gray-900 hover:bg-blue-600 text-white text-sm font-medium py-2.5 rounded-xl transition-colors"
      >
        Beli Sekarang
      </button>
    </div>
  );
}

export default memo(ProdukCard);