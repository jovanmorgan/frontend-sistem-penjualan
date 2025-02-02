import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Pembayaran from "../components/Pembayaran";

const Data_Komisi = () => {
  return (
    <div>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg">
        <Navbar />
        <Pembayaran />
      </main>
    </div>
  );
};

export default Data_Komisi;
