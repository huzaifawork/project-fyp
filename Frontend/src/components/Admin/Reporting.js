import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Table,
} from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ReportingAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState({
    bookings: [],
    revenue: [],
    users: [],
  });

  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Simulated data fetch
    fetchAnalyticsData();
  }, []);

  const fetchAnalyticsData = () => {
    const mockData = {
      bookings: [10, 15, 20, 25, 30, 35, 40],
      revenue: [500, 700, 800, 1000, 1200, 1500, 1800],
      users: [100, 120, 140, 160, 180, 200, 220],
    };

    setAnalyticsData(mockData);
    prepareChart(mockData);
  };

  const prepareChart = (data) => {
    const newChartData = {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"],
      datasets: [
        {
          label: "Bookings",
          data: data.bookings,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Revenue",
          data: data.revenue,
          backgroundColor: "rgba(153, 102, 255, 0.6)",
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 1,
        },
        {
          label: "Users",
          data: data.users,
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    };
    setChartData(newChartData);
  };

  return (
    <Container>
      {/* <h2 className="text-center my-1">Reporting & Analytics</h2> */}
      <Row>
        {/* Analytics Cards */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Total Bookings</Card.Title>
              <Card.Text>320</Card.Text>
              <Button variant="success">View Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Total Revenue</Card.Title>
              <Card.Text>$12,000</Card.Text>
              <Button variant="info">View Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Active Users</Card.Title>
              <Card.Text>1,200</Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Charts Section */}
      <Row>
        <Col>
          <Card className="mb-4" >
            <Card.Body>
              <Card.Title>Bookings, Revenue, and Users Trends</Card.Title>
              {chartData?.datasets ? (
                <Bar
                  data={chartData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: "top",
                      },
                      title: {
                        display: true,
                        text: "Weekly Analysis",
                      },
                    },
                  }}
                />
              ) : (
                <p>Loading chart data...</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Table Section */}
      <Row>
        <Col>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Bookings & Revenue Summary</Card.Title>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Week</th>
                    <th>Bookings</th>
                    <th>Revenue</th>
                    <th>Active Users</th>
                  </tr>
                </thead>
                <tbody>
                  {analyticsData.bookings.map((_, index) => (
                    <tr key={index}>
                      <td>Week {index + 1}</td>
                      <td>{analyticsData.bookings[index]}</td>
                      <td>${analyticsData.revenue[index]}</td>
                      <td>{analyticsData.users[index]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ReportingAnalytics;
