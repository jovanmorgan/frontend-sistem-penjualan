import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside
      className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4"
      id="sidenav-main"
      data-color="warning"
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <a
          className="navbar-brand m-0"
          href="https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="ms-1 font-weight-bold" style={{ fontSize: "20px" }}>
            Sistem Penjualan
          </span>
        </a>
      </div>
      <hr className="horizontal dark mt-0" />
      <div
        className="collapse navbar-collapse w-auto"
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active text-warning" : "nav-link"
              }
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>{" "}
                {/* Ikon Dashboard */}
              </div>
              <span className="nav-link-text ms-1">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Data_Komisi"
              className={({ isActive }) =>
                isActive ? "nav-link active text-warning" : "nav-link"
              }
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fas fa-hand-holding-usd text-warning text-sm opacity-10"></i>{" "}
                {/* Ikon Komisi */}
              </div>
              <span className="nav-link-text ms-1">Komisi</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Data_Pembayaran"
              className={({ isActive }) =>
                isActive ? "nav-link active text-warning" : "nav-link"
              }
            >
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-credit-card text-warning text-sm opacity-10"></i>{" "}
                {/* Ikon Pembayaran */}
              </div>
              <span className="nav-link-text ms-1">Data Pembayaran</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
