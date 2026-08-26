import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import DetailProduk from "./pages/DetailProduk";
import Login from "./pages/Login";
import RiwayatPesanan from "./pages/RiwayatPesanan";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";


const Keranjang = lazy(() => import("./pages/Keranjang"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/produk/:id" element={<DetailProduk />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/keranjang"
            element={
              <ProtectedRoute>
                <Suspense fallback={<p>Memuat...</p>}>
                  <Keranjang />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route path="/riwayat-pesanan" element={<RiwayatPesanan />} />
          <Route path="*" element={<h2>404 - Halaman Tidak Ditemukan</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;