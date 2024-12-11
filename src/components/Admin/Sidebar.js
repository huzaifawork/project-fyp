import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css"; // Custom CSS file for styling
import MainContent from "./MainContent";

const Dashboard = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <aside className="sidebar bg-light vh-100 p-3">
        <div className="sidebar-header d-flex align-items-center mb-3">
          <img
            src="/images/logo.webp"
            alt=""
            className="me-2"
            style={{ width: "44px", height: "44px" }}
          />
          <h5 className="m-0">HRMS</h5>
        </div>
        <div className="menu">
          <h6 className="text-uppercase text-muted mb-2">Menu</h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#" className="d-flex align-items-center text-decoration-none text-dark">
                <i className="bi bi-house me-2"></i> Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="d-flex align-items-center text-decoration-none text-dark">
                <i className="bi bi-people me-2"></i> Customers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="d-flex align-items-center text-decoration-none text-dark">
                <i className="bi bi-cart me-2"></i> Orders
                <span className="badge bg-primary ms-auto">12</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="d-flex align-items-center text-decoration-none text-dark">
                <i className="bi bi-file-earmark me-2"></i> Documents
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="d-flex align-items-center text-decoration-none text-dark">
                <i className="bi bi-graph-up-arrow me-2"></i> Analytics
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="d-flex align-items-center text-decoration-none text-dark">
                <i className="bi bi-box me-2"></i> Products
              </a>
            </li>
          </ul>
        </div>
        <div className="sales mt-4">
          <h6 className="text-uppercase text-muted mb-2">Sales</h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#" className="d-flex align-items-center text-decoration-none text-dark">
                <i className="bi bi-shop me-2"></i> My Store
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="d-flex align-items-center text-decoration-none text-dark">
                <i className="bi bi-tag me-2"></i> Discounts
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="d-flex align-items-center text-decoration-none text-dark">
                <i className="bi bi-truck me-2"></i> Shipments
              </a>
            </li>
          </ul>
        </div>
        <div className="settings mt-1">
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#" className="d-flex align-items-center text-decoration-none text-dark">
                <i className="bi bi-gear me-2"></i> Settings
              </a>
            </li>
            <li>
              <a href="#" className="d-flex align-items-center text-decoration-none text-danger">
                <i className="bi bi-box-arrow-left me-2"></i> Log out
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      {/* Main Content */}
<main className="flex-grow-1 d-flex flex-column main-content-card">
  <nav className="navbar bg-white shadow-sm p-3 mb-4">
    <div className="container-fluid">
      <div className="d-flex align-items-center">
        <input
          type="text"
          placeholder="Search"
          className="form-control me-2"
          style={{ width: "250px" }}
        />
        <button className="btn btn-primary">
          <i className="bi bi-search"></i>
        </button>
      </div>
      <div className="d-flex align-items-center">
        <button className="btn btn-light me-2">
          <i className="bi bi-envelope"></i>
        </button>
        <button className="btn btn-light me-2">
          <i className="bi bi-bell"></i>
        </button>
        <div className="d-flex align-items-center">
          <img
            src="images/staff-icon.png"
            alt=""
            className="rounded-circle me-2"
            style={{ width: "36px", height: "36px" }}
          />
          <span>Michelle Arnold</span>
        </div>
      </div>
    </div>
  </nav>
  <div className="p-3">
    {/* Add additional main content here */}
    <MainContent/>
  </div>
</main>

    </div>
  );
};

export default Dashboard;
