import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css"; // Keep this for any other styles you may need
import Dashboardmodule from "./dashboardmodule";
import AdminAddRoom from "./AddRoom";
import AdminAddTable from "./AddTable";
import AdminCustomerManagement from "./CustomerManagement";
import AdminOrderManagement from "./OrderManagement";
import OnlineOrderPlacement from "./OrderPlacement";
import AdminUserManagement from "./UserManagement";
import StaffScheduling from "./StaffScheduling";
import ReportingAnalytics from "./Reporting";
import UserProfileManagement from "./UserProfileManagement";
import RecommendationSystem from "./RecommendationSystem";
import PaymentGateway from "./Settings";

const Dashboard = () => {
    const [selectedModule, setSelectedModule] = useState("Dashboard");

    const renderContent = () => {
        switch (selectedModule) {
            case "Dashboard":
                return <div><Dashboardmodule /></div>;
            case "User Profile Management":
                return <div><UserProfileManagement/></div>;
            case "Room Booking":
                return <div><AdminAddRoom/></div>;
            case "Table Reservation":
                return <div><AdminAddTable/></div>;
            case "Customer Management":
                return <div><AdminCustomerManagement/></div>;
            case "Online Order Placement":
                return <div><OnlineOrderPlacement/></div>;
            case "Staff Scheduling and Management":
                return <div><StaffScheduling/></div>;
            case "Recommendation System":
                return <div><RecommendationSystem/></div>;
            case "Reporting and Analytics":
                return <div><ReportingAnalytics/></div>;
            case "Settings":
                return <div><PaymentGateway/></div>;
            case "Logout":
                return <div>You have been logged out.</div>;
            default:
                return <div>Welcome to the HRMS Dashboard!</div>;
        }
    };

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <aside
                className="sidebar bg-light vh-110 p-3"
                style={{ width: "250px" }}
            >
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
                    <h6 className="text-uppercase text-muted mb-2">Modules</h6>
                    <ul className="list-unstyled">
                        {[
                            "Dashboard",
                            "User Profile Management",
                            "Room Booking",
                            "Table Reservation",
                            "Customer Management",
                            "Online Order Placement",
                            "Staff Scheduling and Management",
                            "Recommendation System",
                            "Reporting and Analytics",
                            "Settings",
                            "Logout",
                        ].map((module) => (
                            <li className="mb-2" key={module}>
                                <a
                                    href="#"
                                    className="d-flex align-items-center text-decoration-none"
                                    style={{
                                        padding: "10px 15px",
                                        borderRadius: "5px",
                                        color:
                                            selectedModule === module
                                                ? "#fff"
                                                : "#000",
                                        backgroundColor:
                                            selectedModule === module
                                                ? "#007bff"
                                                : "",
                                        fontWeight:
                                            selectedModule === module
                                                ? "bold"
                                                : "normal",
                                        boxShadow:
                                            selectedModule === module
                                                ? "0px 4px 8px rgba(0, 0, 0, 0.2)"
                                                : "",
                                        transition: "background-color 0.3s, color 0.3s",
                                    }}
                                    onClick={() => setSelectedModule(module)}
                                >
                                    <i
                                        className={`bi me-2 ${getIconClass(
                                            module
                                        )}`}
                                    ></i>
                                    {module}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

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
                <div className="p-3">{renderContent()}</div>
            </main>
        </div>
    );
};

const getIconClass = (module) => {
    switch (module) {
        case "Dashboard":
            return "bi-speedometer2";
        case "User Profile Management":
            return "bi-person-circle";
        case "Room Booking":
            return "bi-calendar-check";
        case "Table Reservation":
            return "bi-table";
        case "Customer Management":
            return "bi-people";
        case "Online Order Placement":
            return "bi-cart";
        case "Staff Scheduling and Management":
            return "bi-person-workspace";
        case "Recommendation System":
            return "bi-stars";
        case "Reporting and Analytics":
            return "bi-bar-chart";
        case "Settings":
            return "bi-gear";
        case "Logout":
            return "bi-box-arrow-left text-danger";
        default:
            return "bi-dot";
    }
};

export default Dashboard;
