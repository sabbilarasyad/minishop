import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import ProdukCard from "../ProdukCard";
import { KeranjangProvider } from "../../context/KeranjangContext";

describe("ProdukCard", () => {
  it("menampilkan nama produk dengan benar", () => {
    const produk = { id: 1, title: "Kaos Polos", price: 75000, image: "" };
    render(
      <BrowserRouter>
        <KeranjangProvider>
          <ProdukCard produk={produk} />
        </KeranjangProvider>
      </BrowserRouter>
    );
    expect(screen.getByText("Kaos Polos")).toBeInTheDocument();
  });

  it("menampilkan harga produk dengan format Rupiah", () => {
    const produk = { id: 1, title: "Kaos Polos", price: 75000, image: "" };
    render(
      <BrowserRouter>
        <KeranjangProvider>
          <ProdukCard produk={produk} />
        </KeranjangProvider>
      </BrowserRouter>
    );
    expect(screen.getByText("Rp 75.000")).toBeInTheDocument();
  });

  it("menampilkan tombol Tambah ke Keranjang", () => {
    const produk = { id: 1, title: "Kaos Polos", price: 75000, image: "" };
    render(
      <BrowserRouter>
        <KeranjangProvider>
          <ProdukCard produk={produk} />
        </KeranjangProvider>
      </BrowserRouter>
    );
    expect(screen.getByText("Tambah ke Keranjang")).toBeInTheDocument();
  });
});