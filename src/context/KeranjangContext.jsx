import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const KeranjangContext = createContext();

export function KeranjangProvider({ children }) {
  const [item, setItem] = useLocalStorage("keranjang", []);

  function tambahKeKeranjang(produk) {
    setItem((prev) => {
      const sudahAda = prev.find((p) => p.id === produk.id);
      if (sudahAda) {
        return prev.map((p) =>
          p.id === produk.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...produk, quantity: 1 }];
    });
  }

  function hapusDariKeranjang(id) {
    setItem((prev) => prev.filter((p) => p.id !== id));
  }

  function ubahJumlah(id, quantity) {
    if (quantity < 1) return;
    setItem((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity } : p))
    );
  }

  function kosongkanKeranjang() {
    setItem([]);
  }

  return (
    <KeranjangContext.Provider
      value={{ item, tambahKeKeranjang, hapusDariKeranjang, ubahJumlah, kosongkanKeranjang }}
    >
      {children}
    </KeranjangContext.Provider>
  );
}

export function useKeranjang() {
  return useContext(KeranjangContext);
}