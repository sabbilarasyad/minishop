import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white/80 backdrop-blur border-b border-gray-100 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-gray-900">
          Mini<span className="text-blue-600">Shop</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-900 transition">Beranda</Link>
          <Link to="/keranjang" className="hover:text-gray-900 transition">Keranjang</Link>
          {user && (
            <Link to="/riwayat-pesanan" className="hover:text-gray-900 transition">
              Riwayat
            </Link>
          )}
          {user ? (
            <button
              onClick={logout}
              className="text-gray-500 hover:text-red-500 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;