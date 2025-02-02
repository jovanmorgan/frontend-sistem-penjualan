import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import axios from "axios";
import { FaFileInvoice, FaHandshake, FaShoppingCart } from "react-icons/fa"; // Import icons

const Home = () => {
  // State for counting data from each API
  const [pembayaranCount, setPembayaranCount] = useState(0);
  const [komisiCount, setKomisiCount] = useState(0);
  const [penjualanCount, setPenjualanCount] = useState(0);

  // Fetch data from APIs and set counts
  useEffect(() => {
    // Fetch data for pembayaran
    axios
      .get("http://127.0.0.1:8000/api/pembayaran")
      .then((response) => setPembayaranCount(response.data.length))
      .catch((error) =>
        console.error("Error fetching pembayaran data:", error)
      );

    // Fetch data for komisi
    axios
      .get("http://127.0.0.1:8000/api/komisi")
      .then((response) => setKomisiCount(response.data.length))
      .catch((error) => console.error("Error fetching komisi data:", error));

    // Fetch data for penjualan
    axios
      .get("http://127.0.0.1:8000/api/penjualan")
      .then((response) => setPenjualanCount(response.data.length))
      .catch((error) => console.error("Error fetching penjualan data:", error));
  }, []);

  return (
    <div>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg">
        <Navbar />

        {/* Card Penyambutan */}
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h4 className="card-title text-center">Selamat Datang!</h4>
                  <p className="card-text text-center">
                    Kami senang Anda bergabung dengan kami. Temukan berbagai
                    informasi, produk, dan layanan terbaik hanya di sini. Semoga
                    Anda betah dan menikmati pengalaman berbelanja di platform
                    kami.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cards for Counting Data */}
          <div className="row mt-4">
            {/* Card Pembayaran */}
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <FaFileInvoice size={40} />
                  <h5 className="card-title mt-2">Pembayaran</h5>
                  <p className="card-text">{pembayaranCount} Data</p>
                </div>
              </div>
            </div>

            {/* Card Komisi */}
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <FaHandshake size={40} />
                  <h5 className="card-title mt-2">Komisi</h5>
                  <p className="card-text">{komisiCount} Data</p>
                </div>
              </div>
            </div>

            {/* Card Penjualan */}
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <FaShoppingCart size={40} />
                  <h5 className="card-title mt-2">Penjualan</h5>
                  <p className="card-text">{penjualanCount} Data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
