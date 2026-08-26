import { useNavigate } from "react-router-dom";
import { useKeranjang } from "../context/KeranjangContext";
import { usePesanan } from "../context/PesananContext";
import { formatRupiah } from "../utils/format";

function Keranjang() {
  const { item, hapusDariKeranjang, ubahJumlah, kosongkanKeranjang } = useKeranjang();
  const { tambahPesanan } = usePesanan();
  const navigate = useNavigate();
  const total = item.reduce((sum, p) => sum + p.price * p.quantity, 0);

  function handleCheckout() {
    if (item.length === 0) return;
    tambahPesanan(item, total);
    kosongkanKeranjang();
    navigate("/riwayat-pesanan");
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Keranjang Belanja</h1>

      {item.length === 0 && (
        <div className="bg-white rounded-2xl border border-gray-100 py-20 text-center text-gray-400">
          Keranjang masih kosong.
        </div>
      )}

      <div className="space-y-3">
        {item.map((p) => (
          <div
            key={p.id}
            className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-4"
          >
            <img src={p.image} alt={p.title} className="w-14 h-14 object-contain shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-gray-800 truncate">{p.title}</p>
              <p className="text-blue-600 text-sm font-medium">
                {formatRupiah(p.price)}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => ubahJumlah(p.id, p.quantity - 1)}
                className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500"
              >
                −
              </button>
              <span className="w-6 text-center text-sm">{p.quantity}</span>
              <button
                onClick={() => ubahJumlah(p.id, p.quantity + 1)}
                className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500"
              >
                +
              </button>
              <button
                onClick={() => hapusDariKeranjang(p.id)}
                className="ml-2 text-xs text-red-400 hover:text-red-600 transition"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>

      {item.length > 0 && (
        <div className="bg-white border border-gray-100 rounded-2xl p-5 mt-6 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Total belanja</p>
            <p className="text-xl font-bold text-gray-900">
              {formatRupiah(total)}
            </p>
          </div>
          <button
            onClick={handleCheckout}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-colors"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Keranjang;