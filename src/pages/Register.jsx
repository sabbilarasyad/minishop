import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const [form, setForm] = useState({ email: "", password: "", konfirmasi: "" });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.email.includes("@")) {
      setError("Email tidak valid");
      return;
    }
    if (form.password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }
    if (form.password !== form.konfirmasi) {
      setError("Konfirmasi password tidak cocok");
      return;
    }
    setError("");
    login(form.email);
    navigate("/keranjang");
  }

  return (
    <div className="max-w-sm mx-auto mt-8">
      <div className="bg-white border border-gray-100 rounded-2xl p-8">
        <h1 className="text-xl font-bold text-gray-900 text-center">Daftar Akun</h1>
        <p className="text-center text-sm text-gray-400 mt-1 mb-6">
          Buat akun baru untuk mulai belanja
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Konfirmasi Password"
            value={form.konfirmasi}
            onChange={(e) => setForm({ ...form, konfirmasi: e.target.value })}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
          />
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-blue-600 text-white py-3 rounded-xl text-sm font-medium transition-colors"
          >
            Daftar
          </button>
        </form>
        <p className="text-center text-xs text-gray-400 mt-4">
          Sudah punya akun? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;