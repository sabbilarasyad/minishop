const KURS = 15000; // asumsi kurs 1 USD ≈ Rp 15.000

export function formatRupiah(hargaUSD) {
  const rupiah = Math.round(hargaUSD * KURS);
  return "Rp " + rupiah.toLocaleString("id-ID");
}