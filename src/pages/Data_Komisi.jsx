import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Komisi from "../components/KomisiList";

const Data_Komisi = () => {
  return (
    <div>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg">
        <Navbar />
        <Komisi />
      </main>
    </div>
  );
};

export default Data_Komisi;
