import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2
import Tambah_Pembayaran from "./Tambah_Pembayaran"; // Import the Tambah_Pembayaran component

const Pembayaran = () => {
  const [pembayaran, setPembayaran] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false); // State to toggle modal visibility

  // Function to fetch data from API
  const fetchPembayaranData = () => {
    axios
      .get("http://127.0.0.1:8000/api/pembayaran")
      .then((response) => {
        console.log("Data received:", response.data);
        setPembayaran(response.data);
      })
      .catch((error) => {
        console.error("Error fetching pembayaran:", error);
      });
  };

  // Fetch pembayaran data when component mounts
  useEffect(() => {
    fetchPembayaranData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPembayaran = pembayaran.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Function to toggle modal visibility
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-body px-3 pt-3 pb-2">
              <div className="card-header pb-0 text-center">
                <h4>Daftar Pembayaran</h4>
                <p className="text-sm">
                  Berikut adalah tabel data pembayaran yang dapat Anda kelola.
                  Gunakan fitur pencarian untuk menemukan data dengan cepat,
                  atau tambahkan data baru menggunakan tombol di bawah.
                </p>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cari Data Pembayaran..."
                  style={{ height: "50px" }}
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button
                  className="btn btn-outline-secondary"
                  style={{ height: "50px" }}
                >
                  Cari
                </button>
              </div>
              {/* Button to open the modal */}
              <button className="btn btn-success mt-4" onClick={toggleModal}>
                Tambah Pembayaran
              </button>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card mb-4">
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
                {filteredPembayaran.length > 0 ? (
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          ID
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Nomor Transaksi
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Jumlah Yang Dibayar
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Tanggal Pembayaran
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Total Tagihan
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Sisa Tagihan
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPembayaran.map((item, index) => (
                        <tr key={index}>
                          <td className="align-middle text-center text-secondary text-xs font-weight-bold">
                            {item.id}
                          </td>
                          <td className="align-middle text-center text-secondary text-xs font-weight-bold">
                            {item.penjualan?.transaction_number}
                          </td>
                          <td className="align-middle text-center text-secondary text-xs font-weight-bold">
                            {new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            }).format(item.jumlah_bayar)}
                          </td>
                          <td className="align-middle text-center text-secondary text-xs font-weight-bold">
                            {item.tanggal_bayar}
                          </td>
                          <td className="align-middle text-center text-secondary text-xs font-weight-bold">
                            {new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            }).format(item.penjualan?.grand_total)}
                          </td>
                          <td className="align-middle text-center text-secondary text-xs font-weight-bold">
                            {new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            }).format(
                              item.penjualan?.grand_total - item.jumlah_bayar
                            )}
                          </td>
                          <td className="align-middle text-center text-secondary text-xs font-weight-bold">
                            {item.status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-center mt-4">Data tidak ditemukan 🗂️.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for adding new payment */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Tambah Pembayaran</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={toggleModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Tambah_Pembayaran onSuccess={fetchPembayaranData} />{" "}
                {/* Pass function to reload data */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pembayaran;
