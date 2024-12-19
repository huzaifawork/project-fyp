import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminOrderManagement = () => {
  const [orders, setOrders] = useState([
    {
      id: "ORD001",
      customerName: "John Doe",
      details: "Room Booking - Deluxe Suite",
      status: "Pending",
    },
    {
      id: "ORD002",
      customerName: "Jane Smith",
      details: "Restaurant Order - Table for 2",
      status: "Completed",
    },
  ]);

  const handleDelete = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
    alert("Order deleted successfully");
  };

  const handleEdit = (id) => {
    const order = orders.find((order) => order.id === id);
    if (order) {
      alert(`Edit functionality triggered for Order ID: ${order.id}`);
      // Implement modal for editing order here
    }
  };

  const handleAddOrder = () => {
    alert("Add Order functionality triggered");
    // Implement modal for adding a new order here
  };

  return (
    <div className="container mt-5 mb-5">
      <header className="bg-dark text-white p-3 rounded mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="h3">Admin Panel - Manage Orders</h1>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="/dashboard">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/manage-orders">
                  Manage Orders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/logout">
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="bg-light p-4 rounded shadow">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-center">Order List</h2>
          <button className="btn btn-primary" onClick={handleAddOrder}>
            Add Order
          </button>
        </div>

        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Order Details</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.details}</td>
                <td>{order.status}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => handleEdit(order.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(order.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer className="bg-dark text-white text-center py-3 mt-4 rounded">
        <p className="mb-0">&copy; 2024 Hotel and Restaurant Management System - Admin Panel</p>
      </footer>
    </div>
  );
};

export default AdminOrderManagement;
