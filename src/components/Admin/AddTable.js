import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

const AdminManageTables = () => {
  const [showAddTable, setShowAddTable] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);

  const handleShowAddTable = () => {
    setShowAddTable(!showAddTable);
  };

  const handleShowDetails = (table) => {
    setSelectedTable(table);
    setShowDetailsModal(true);
  };

  const tables = [
    { id: "T001", name: "Family Table", type: "Indoor", capacity: 6, status: "Available" },
    { id: "T002", name: "Outdoor Table", type: "Outdoor", capacity: 4, status: "Booked" },
    { id: "T003", name: "Private Booth", type: "Private", capacity: 2, status: "Reserved" },
    { id: "T004", name: "VIP Table", type: "Indoor", capacity: 10, status: "Available" },
    { id: "T005", name: "Garden Table", type: "Outdoor", capacity: 8, status: "Waitlist" },
  ];

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Tables</h2>
        <Button variant="primary" onClick={handleShowAddTable}>
          Add Table
        </Button>
      </div>

      {showAddTable && (
        <div className="bg-light p-4 rounded shadow">
          <h4>Add a New Table</h4>
          <form className="needs-validation" noValidate>
            <div className="mb-3">
              <label htmlFor="table-name" className="form-label">
                Table Name
              </label>
              <input
                type="text"
                className="form-control"
                id="table-name"
                placeholder="Enter table name (e.g., Family Table)"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="table-type" className="form-label">
                Table Type
              </label>
              <select className="form-select" id="table-type" required>
                <option value="">Choose...</option>
                <option value="indoor">Indoor</option>
                <option value="outdoor">Outdoor</option>
                <option value="private">Private</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="table-capacity" className="form-label">
                Capacity (Number of Guests)
              </label>
              <input
                type="number"
                className="form-control"
                id="table-capacity"
                placeholder="Enter maximum number of guests"
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Add Table
              </button>
            </div>
          </form>
        </div>
      )}

      <table className="table table-bordered mt-4">
        <thead className="table-light">
          <tr>
            <th>Table ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Capacity</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((table) => (
            <tr key={table.id}>
              <td>{table.id}</td>
              <td>{table.name}</td>
              <td>{table.type}</td>
              <td>{table.capacity}</td>
              <td>{table.status}</td>
              <td>
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => handleShowDetails(table)}
                >
                  Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Table Details */}
      <Modal show={showDetailsModal} onHide={() => setShowDetailsModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Table Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTable && (
            <div>
              <p><strong>Table ID:</strong> {selectedTable.id}</p>
              <p><strong>Name:</strong> {selectedTable.name}</p>
              <p><strong>Type:</strong> {selectedTable.type}</p>
              <p><strong>Capacity:</strong> {selectedTable.capacity}</p>
              <p><strong>Status:</strong> {selectedTable.status}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDetailsModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminManageTables;
