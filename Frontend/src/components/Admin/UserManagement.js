import React, { useState } from "react";
import {
  Container,
  Table,
  Button,
  Modal,
  Form,
} from "react-bootstrap";

const initialUsers = [
  { id: 1, name: "John Doe", email: "johndoe@example.com", phone: "+1234567890", address: "123 Main St, Springfield" },
  { id: 2, name: "Jane Smith", email: "janesmith@example.com", phone: "+9876543210", address: "456 Elm Street, Shelbyville" },
  { id: 3, name: "Alice Johnson", email: "alicejohnson@example.com", phone: "+1029384756", address: "789 Pine Ave, Capital City" },
];

const AdminUserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Handle opening the Edit modal
  const handleEditClick = (user) => {
    setCurrentUser(user);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setCurrentUser(null);
  };

  // Handle user updates
  const handleUserSave = () => {
    setUsers(
      users.map((user) =>
        user.id === currentUser.id
          ? { ...user, name: currentUser.name, email: currentUser.email, phone: currentUser.phone, address: currentUser.address }
          : user
      )
    );
    handleCloseModal();
  };

  const handleDeleteUser = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Admin - User Management</h2>
      {/* Users Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleEditClick(user)}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      {currentUser && (
        <Modal show={showEditModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={currentUser.name}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, name: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={currentUser.email}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, email: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  value={currentUser.phone}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, phone: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  value={currentUser.address}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, address: e.target.value })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="success" onClick={handleUserSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default AdminUserManagement;
