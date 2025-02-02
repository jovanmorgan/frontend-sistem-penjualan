import React, { useEffect, useState } from "react";
import axios from "axios";

const KomisiList = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/komisi")
      .then((response) => {
        console.log("Data received:", response.data); // Tambahkan log untuk memeriksa data
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter data based on the search query
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-body px-3 pt-3 pb-2">
              <div className="card-header pb-0 text-center">
                <h4>Data Komisi</h4>
                <p className="text-sm">
                  Berikut adalah tabel data komisi yang diambil dari api
                  marketing dan penjualan yang dapat Anda kelola. Gunakan fitur
                  pencarian untuk menemukan data dengan cepat, atau tambahkan
                  data baru menggunakan tombol di bawah.
                </p>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cari Data..."
                  style={{ height: "50px" }}
                  value={searchQuery} // Set the value of the input field to the state
                  onChange={handleSearchChange} // Update search query on input change
                />
                <button
                  className="btn btn-outline-secondary"
                  style={{ height: "50px" }}
                >
                  Cari
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card mb-4">
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
                {filteredData.length > 0 ? (
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Nomor
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Marketing
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Bulan
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Omzet
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Komisi %
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Komisi Nominal
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((item, index) => (
                        <tr key={index}>
                          <td className="align-middle text-center text-secondary text-xs font-weight-bold">
                            {index + 1}
                          </td>
                          <td className="align-middle text-center text-secondary text-xs font-weight-bold">
                            {item.marketing}
                          </td>
                          <td className="align-middle text-center text-secondary text-xs font-weight-bold">
                            {item.bulan}
                          </td>
                          <td className="align-middle text-center text-secondary text-xs font-weight-bold">
                            Rp {Number(item.omzet).toLocaleString()}
                          </td>
                          <td className="align-middle text-center text-secondary text-xs font-weight-bold">
                            {item.komisi_persen}%
                          </td>
                          <td className="align-middle text-center text-secondary text-xs font-weight-bold">
                            Rp {Number(item.komisi_nominal).toLocaleString()}
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
    </div>
  );
};

export default KomisiList;
