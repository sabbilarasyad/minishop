import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const PesananContext = createContext();

export function PesananProvider({ children }) {
  const [pesanan, setPesanan] = useLocalStorage("pesanan", []);

  function tambahPesanan(items, total) {
    const pesananBaru = {
      id: Date.now(),
      tanggal: new Date().toLocaleString("id-ID"),
      items,
      total,
    };
    setPesanan((prev) => [pesananBaru, ...prev]);
  }

  return (
    <PesananContext.Provider value={{ pesanan, tambahPesanan }}>
      {children}
    </PesananContext.Provider>
  );
}

export function usePesanan() {
  return useContext(PesananContext);
}