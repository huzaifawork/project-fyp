import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserCircle } from "react-icons/fa";

const UserProfileTable = () => {
    const users = [
        { id: 1, name: "Michelle Arnold", email: "michelle.arnold@example.com", role: "Administrator", status: "Active", phone: "+1 234 567 890" },
        { id: 2, name: "John Doe", email: "john.doe@example.com", role: "Manager", status: "Active", phone: "+1 345 678 901" },
        { id: 3, name: "Emily Smith", email: "emily.smith@example.com", role: "Staff", status: "Inactive", phone: "+1 456 789 012" },
        { id: 4, name: "Robert Brown", email: "robert.brown@example.com", role: "Staff", status: "Active", phone: "+1 567 890 123" },
        { id: 5, name: "Sarah Johnson", email: "sarah.johnson@example.com", role: "Manager", status: "Active", phone: "+1 678 901 234" },
        { id: 6, name: "Michael Lee", email: "michael.lee@example.com", role: "Administrator", status: "Inactive", phone: "+1 789 012 345" },
    ];

    const [hoveredUser, setHoveredUser] = useState(null);
    const [roleFilter, setRoleFilter] = useState("All");

    const filteredUsers = roleFilter === "All" ? users : users.filter(user => user.role === roleFilter);

    return (
        <div className="container mt-4" style={{ backgroundColor: "#ffffff", borderRadius: "10px", padding: "20px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            {/* Page Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="text-primary mb-0">Guests</h4>
                <div>
                    <button className="btn btn-outline-primary me-2">Check in</button>
                    <button className="btn btn-outline-secondary">Check out</button>
                </div>
            </div>

            {/* Role Filter */}
            <div className="mb-3">
                <label className="form-label">Filter by Role:</label>
                <select className="form-select" value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Administrator">Administrator</option>
                    <option value="Manager">Manager</option>
                    <option value="Staff">Staff</option>
                </select>
            </div>

            {/* Table */}
            <div className="table-responsive">
                <table className="table table-hover border">
                    <thead style={{ backgroundColor: "#eaf3ff", color: "#6c757d" }}>
                        <tr>
                            <th>Reservation ID</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Total Amount</th>
                            <th>Amount Paid</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr
                                key={user.id}
                                onMouseEnter={() => setHoveredUser(user)}
                                onMouseLeave={() => setHoveredUser(null)}
                                style={{ cursor: "pointer" }}
                            >
                                <td>#{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>${(user.id * 200).toFixed(2)}</td>
                                <td>${(user.id * 100).toFixed(2)}</td>
                                <td>
                                    <span
                                        className={`badge ${
                                            user.status === "Active"
                                                ? "bg-success"
                                                : "bg-danger"
                                        }`}
                                    >
                                        {user.status === "Active" ? "Ready" : "Needs Service"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Hover Modal */}
            {hoveredUser && (
                <div
                    className="position-fixed shadow rounded p-3"
                    style={{
                        top: "10%",
                        right: "5%",
                        width: "300px",
                        backgroundColor: "#ffffff",
                        border: "1px solid #ddd",
                        zIndex: 1050,
                    }}
                >
                    <div className="text-center mb-3">
                        <img
                            src={`https://i.pravatar.cc/100?u=${hoveredUser.id}`}
                            alt="User Avatar"
                            className="rounded-circle mb-2"
                            style={{ width: "80px", height: "80px" }}
                        />
                        <h6 className="mb-0">{hoveredUser.name}</h6>
                        <small className="text-muted">{hoveredUser.role}</small>
                    </div>
                    <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                            <strong>Registration #:</strong> {hoveredUser.id * 12345}
                        </li>
                        <li className="mb-2">
                            <strong>Check-in Date:</strong> 18/12/23
                        </li>
                        <li className="mb-2">
                            <strong>Room Type:</strong> Single
                        </li>
                        <li className="mb-2">
                            <strong>Stay:</strong> 4 nights
                        </li>
                        <li>
                            <strong>Discount:</strong> $100
                        </li>
                    </ul>
                    <div className="text-end mt-3">
                        <button className="btn btn-sm btn-outline-danger">Check Out</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfileTable;
