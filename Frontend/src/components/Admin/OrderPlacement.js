import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Sample mock order data for the admin view
const mockOrders = [
  {
    id: 1,
    customerName: "John Doe",
    orderItem: "Pizza",
    orderQuantity: 2,
    deliveryAddress: "123 Main Street",
    deliveryTime: "12:30 PM",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    orderItem: "Burger",
    orderQuantity: 1,
    deliveryAddress: "456 Elm Street",
    deliveryTime: "1:15 PM",
  },
  {
    id: 3,
    customerName: "Alice Johnson",
    orderItem: "Pasta",
    orderQuantity: 3,
    deliveryAddress: "789 Pine Avenue",
    deliveryTime: "2:45 PM",
  },
];

const OnlineOrderManagement = () => {
  const [orders, setOrders] = useState(mockOrders);

  return (
    <div className="container mt-5">
      {/* Page Title */}
      <div className="text-center mb-4">
        <h1 className="h3">Online Ordering</h1>
        <p className="text-muted">Browse menu, place orders, and track delivery in real-time.</p>
      </div>

      {/* Order Management Section */}
      <section className="bg-white p-4 rounded shadow">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h5">View & Manage Orders</h2>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Customer Name</th>
                <th>Order Item</th>
                <th>Quantity</th>
                <th>Delivery Address</th>
                <th>Delivery Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.customerName || "N/A"}</td>
                    <td>{order.orderItem || "N/A"}</td>
                    <td>{order.orderQuantity || "N/A"}</td>
                    <td>{order.deliveryAddress || "N/A"}</td>
                    <td>{order.deliveryTime || "N/A"}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-info me-2"
                        onClick={() => alert(`Viewing details for order ID: ${order.id}`)}
                      >
                        View
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => {
                          setOrders(orders.filter((o) => o.id !== order.id));
                          alert(`Deleted order ID: ${order.id}`);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default OnlineOrderManagement;
