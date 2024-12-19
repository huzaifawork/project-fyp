import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

const AdminManageRooms = () => {
  const [showAddRoom, setShowAddRoom] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleShowAddRoom = () => {
    setShowAddRoom(!showAddRoom);
  };

  const handleShowDetails = (room) => {
    setSelectedRoom(room);
    setShowDetailsModal(true);
  };

  const rooms = [
    { id: "#001", type: "Double bed", floor: "Floor -1", facilities: "AC, shower, Double bed, towel, bathtub, TV", status: "Available" },
    { id: "#002", type: "Single bed", floor: "Floor -2", facilities: "AC, shower, Single bed, towel, bathtub, TV", status: "Booked" },
    { id: "#003", type: "VIP", floor: "Floor -1", facilities: "AC, shower, Double bed, towel, bathtub, TV", status: "Booked" },
    { id: "#004", type: "Triple Seater Suite", floor: "Floor -1", facilities: "AC, shower, Triple bed, towel, bathtub, TV", status: "Reserved" },
    { id: "#005", type: "Single bed", floor: "Floor -1", facilities: "AC, shower, Single bed, towel, bathtub, TV", status: "Reserved" },
    { id: "#006", type: "Double bed", floor: "Floor -2", facilities: "AC, shower, Double bed, towel, bathtub, TV", status: "Waitlist" },
    { id: "#007", type: "Double bed", floor: "Floor -3", facilities: "AC, shower, Double bed, towel, bathtub, TV", status: "Reserved" },
    { id: "#008", type: "Single bed", floor: "Floor -5", facilities: "AC, shower, Single bed, towel, bathtub, TV", status: "Blocked" },
  ];

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Rooms</h2>
        <Button variant="primary" onClick={handleShowAddRoom}>
          Add Room
        </Button>
      </div>

      {showAddRoom && (
        <div className="bg-light p-4 rounded shadow">
          <h4>Add a New Room</h4>
          <form className="needs-validation" noValidate>
            <div className="mb-3">
              <label htmlFor="room-name" className="form-label">
                Room Name
              </label>
              <input
                type="text"
                className="form-control"
                id="room-name"
                placeholder="Enter room name (e.g., Deluxe Suite)"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="room-type" className="form-label">
                Room Type
              </label>
              <select className="form-select" id="room-type" required>
                <option value="">Choose...</option>
                <option value="single">Single Room</option>
                <option value="double">Double Room</option>
                <option value="suite">Suite</option>
                <option value="triple-seater-suite">Triple Seater Suite</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="room-description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="room-description"
                rows="4"
                placeholder="Enter room description"
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="room-price" className="form-label">
                Price per Night ($)
              </label>
              <input
                type="number"
                className="form-control"
                id="room-price"
                placeholder="Enter price per night"
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Add Room
              </button>
            </div>
          </form>
        </div>
      )}

      <table className="table table-bordered mt-4">
        <thead className="table-light">
          <tr>
            <th>Room Number</th>
            <th>Bed Type</th>
            <th>Room Floor</th>
            <th>Room Facility</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.id}>
              <td>{room.id}</td>
              <td>{room.type}</td>
              <td>{room.floor}</td>
              <td>{room.facilities}</td>
              <td>{room.status}</td>
              <td>
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => handleShowDetails(room)}
                >
                  Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Room Details */}
      <Modal show={showDetailsModal} onHide={() => setShowDetailsModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Room Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRoom && (
            <div>
              <p><strong>Room Number:</strong> {selectedRoom.id}</p>
              <p><strong>Type:</strong> {selectedRoom.type}</p>
              <p><strong>Floor:</strong> {selectedRoom.floor}</p>
              <p><strong>Facilities:</strong> {selectedRoom.facilities}</p>
              <p><strong>Status:</strong> {selectedRoom.status}</p>
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

export default AdminManageRooms;
