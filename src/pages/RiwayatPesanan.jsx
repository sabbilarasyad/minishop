import { usePesanan } from "../context/PesananContext";
import { formatRupiah } from "../utils/format";

function RiwayatPesanan() {
  const { pesanan } = usePesanan();

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Riwayat Pesanan</h1>

      {pesanan.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 py-20 text-center text-gray-400">
          Belum ada riwayat pesanan.
        </div>
      ) : (
        <div className="space-y-4">
          {pesanan.map((p) => (
            <div key={p.id} className="bg-white border border-gray-100 rounded-2xl p-5">
              <p className="text-xs text-gray-400 mb-3">{p.tanggal}</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {p.items.map((i) => (
                  <li key={i.id} className="flex justify-between">
                    <span>{i.title} <span className="text-gray-400">x{i.quantity}</span></span>
                    <span>{formatRupiah(i.price * i.quantity)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-400">Total</span>
                <span className="font-bold text-blue-600">
                {formatRupiah(p.total)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RiwayatPesanan;