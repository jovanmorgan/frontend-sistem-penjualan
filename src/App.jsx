import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Komisi from "./components/KomisiList";
// import Pembayaran from "./components/Pembayaran";
import Home from "./pages/index";
import Data_Komisi from "./pages/Data_Komisi";
import Data_Pembayaran from "./pages/Data_Pembayaran";
// import Data_Pembayaran from "./pages/Data_Pembayaran";
// import Tambah_Pembayaran from "./components/Tambah_Pembayaran";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Data_Komisi" element={<Data_Komisi />} />
        <Route path="/Data_Pembayaran" element={<Data_Pembayaran />} />
        {/* <Route path="/tambah-pembayaran" element={<Tambah_Pembayaran />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
