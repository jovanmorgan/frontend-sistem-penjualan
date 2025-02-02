import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2

const Tambah_Pembayaran = ({ onSuccess }) => {
  // Accept onSuccess prop
  const [penjualanId, setPenjualanId] = useState("");
  const [jumlahBayar, setJumlahBayar] = useState("");
  const [tanggalBayar, setTanggalBayar] = useState("");
  const [penjualanList, setPenjualanList] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/penjualan")
      .then((response) => {
        setPenjualanList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching penjualan data:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/pembayaran", {
        penjualan_id: penjualanId,
        jumlah_bayar: jumlahBayar,
        tanggal_bayar: tanggalBayar,
      })
      .then((response) => {
        const { message } = response.data; // Ambil message dari response
        Swal.fire({
          icon: "success",
          title: "Pembayaran Berhasil",
          text: message, // Menampilkan pesan dari API
        }).then(() => {
          // Reset form fields after successful payment
          setPenjualanId("");
          setJumlahBayar("");
          setTanggalBayar("");
        });
        console.log(response.data);
        onSuccess(); // Trigger parent method to reload data
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.message ||
          "Terjadi kesalahan saat menambahkan pembayaran. Silakan coba lagi.";
        Swal.fire({
          icon: "error",
          title: "Gagal Menambahkan Pembayaran",
          text: errorMessage, // Menampilkan pesan error dari API jika ada
        });
        console.error("Error menambahkan pembayaran:", error);
      });
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Penjualan:</label>
          <select
            className="form-control"
            value={penjualanId}
            onChange={(e) => setPenjualanId(e.target.value)}
            required
          >
            <option value="">Pilih Penjualan</option>
            {penjualanList.map((penjualan) => (
              <option key={penjualan.id} value={penjualan.id}>
                {penjualan.transaction_number} - (Marketing:{" "}
                {penjualan.marketing?.name}) - Total: ({" "}
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(penjualan.grand_total)}
                )
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label>Jumlah Bayar:</label>
          <input
            type="number"
            className="form-control"
            value={jumlahBayar}
            onChange={(e) => setJumlahBayar(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Tanggal Bayar:</label>
          <input
            type="date"
            className="form-control"
            value={tanggalBayar}
            onChange={(e) => setTanggalBayar(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Tambah Pembayaran
        </button>
      </form>
    </div>
  );
};

export default Tambah_Pembayaran;
