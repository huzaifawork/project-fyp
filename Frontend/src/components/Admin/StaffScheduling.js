import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Table, Row, Col, Alert } from "react-bootstrap";

const StaffScheduling = () => {
  const [staffName, setStaffName] = useState("");
  const [shiftDate, setShiftDate] = useState("");
  const [shiftTime, setShiftTime] = useState("");
  const [shiftDuration, setShiftDuration] = useState("");
  const [scheduledShifts, setScheduledShifts] = useState([
    {
      staffName: "John Doe",
      date: "2024-12-15",
      time: "Morning (9:00 AM - 1:00 PM)",
      duration: "4 hours",
      attended: false,
    },
    {
      staffName: "Jane Smith",
      date: "2024-12-16",
      time: "Afternoon (1:00 PM - 5:00 PM)",
      duration: "4 hours",
      attended: false,
    },
  ]);
  const [errorMessage, setErrorMessage] = useState("");

  // Real-time validation for form fields
  const isFormValid = () => {
    return staffName && shiftDate && shiftTime && shiftDuration;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    // Check for shift conflict
    const isConflict = scheduledShifts.some(
      (shift) =>
        shift.staffName === staffName &&
        shift.date === shiftDate &&
        shift.time === shiftTime
    );

    if (isConflict) {
      setErrorMessage("This shift conflicts with an existing one.");
      return;
    }

    const newShift = {
      staffName,
      date: shiftDate,
      time: shiftTime,
      duration: `${shiftDuration} hours`,
      attended: false,
    };

    setScheduledShifts([...scheduledShifts, newShift]);
    alert("Shift Scheduled Successfully!");
    setStaffName("");
    setShiftDate("");
    setShiftTime("");
    setShiftDuration("");
  };

  const handleAttendanceToggle = (index) => {
    const updatedShifts = [...scheduledShifts];
    updatedShifts[index].attended = !updatedShifts[index].attended;
    setScheduledShifts(updatedShifts);
  };

  const handleDeleteShift = (index) => {
    const updatedShifts = scheduledShifts.filter((_, i) => i !== index);
    setScheduledShifts(updatedShifts);
  };

  const handleEditShift = (index) => {
    const shift = scheduledShifts[index];
    setStaffName(shift.staffName);
    setShiftDate(shift.date);
    setShiftTime(shift.time);
    setShiftDuration(shift.duration.replace(" hours", ""));
    handleDeleteShift(index); // Delete existing shift to allow edit
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setScheduledShifts(
      scheduledShifts.filter(
        (shift) =>
          shift.staffName.toLowerCase().includes(query) ||
          shift.date.toLowerCase().includes(query) ||
          shift.time.toLowerCase().includes(query)
      )
    );
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Staff Scheduling</h2>
      <p className="text-muted text-center">Schedule staff shifts, track attendance, and view productivity reports.</p>

      {/* Error message */}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

      {/* Form for scheduling shift */}
      <Form onSubmit={handleSubmit} className="mb-5 p-4 bg-light rounded shadow">
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="staffName">
              <Form.Label>Staff Member</Form.Label>
              <Form.Control
                as="select"
                value={staffName}
                onChange={(e) => setStaffName(e.target.value)}
                required
              >
                <option value="">Select Staff Member</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
                <option value="Mark Jones">Mark Jones</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="shiftDate">
              <Form.Label>Shift Date</Form.Label>
              <Form.Control
                type="date"
                value={shiftDate}
                onChange={(e) => setShiftDate(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="shiftTime">
              <Form.Label>Shift Time</Form.Label>
              <Form.Control
                as="select"
                value={shiftTime}
                onChange={(e) => setShiftTime(e.target.value)}
                required
              >
                <option value="">Select Shift Time</option>
                <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM - 1:00 PM)</option>
                <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                <option value="Night (5:00 PM - 9:00 PM)">Night (5:00 PM - 9:00 PM)</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="shiftDuration">
              <Form.Label>Shift Duration (hours)</Form.Label>
              <Form.Control
                type="number"
                min="1"
                max="8"
                value={shiftDuration}
                onChange={(e) => setShiftDuration(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Button
          variant="primary"
          type="submit"
          className="w-100"
          disabled={!isFormValid()}
        >
          Schedule Shift
        </Button>
      </Form>

      {/* Search bar */}
      <Form.Control
        type="text"
        placeholder="Search shifts..."
        onChange={handleSearch}
        className="mb-4"
      />

      {/* Scheduled Shifts Table */}
      <div className="mt-5">
        <h3 className="text-center mb-3">Scheduled Shifts</h3>
        <Table striped bordered hover responsive className="shadow-sm">
          <thead className="table-light">
            <tr>
              <th>Staff Member</th>
              <th>Date</th>
              <th>Time</th>
              <th>Duration</th>
              <th>Attendance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {scheduledShifts.map((shift, index) => (
              <tr key={index}>
                <td>{shift.staffName}</td>
                <td>{shift.date}</td>
                <td>{shift.time}</td>
                <td>{shift.duration}</td>
                <td>
                  <Button
                    variant={shift.attended ? "success" : "warning"}
                    onClick={() => handleAttendanceToggle(index)}
                  >
                    {shift.attended ? "Attended" : "Mark as Attended"}
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" onClick={() => handleEditShift(index)}>
                    Edit
                  </Button>{" "}
                  <Button variant="danger" onClick={() => handleDeleteShift(index)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Footer */}
      <footer className="text-center mt-5 py-3 bg-dark text-white rounded">
        <p className="mb-0">&copy; 2024 Hotel and Restaurant Management System</p>
      </footer>
    </Container>
  );
};

export default StaffScheduling;
