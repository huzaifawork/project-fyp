import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { FaBed, FaUtensils, FaComments, FaDollarSign, FaExclamationTriangle } from "react-icons/fa";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const Dashboardmodule = () => {
    const [dateRange, setDateRange] = useState("Monthly");

    // Sample data for charts and statistics
    const lineChartData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Revenue",
                data: [3000, 5000, 7000, 6500, 8500, 9000],
                borderColor: "rgba(54, 162, 235, 1)",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                tension: 0.4,
            },
        ],
    };

    const barChartData = {
        labels: ["Rooms Occupied", "Restaurant Orders", "Feedback"],
        datasets: [
            {
                label: "Activity Summary",
                data: [120, 300, 70],
                backgroundColor: ["#4caf50", "#2196f3", "#ff9800"],
            },
        ],
    };

    const pieChartData = {
        labels: ["Positive", "Negative", "Neutral"],
        datasets: [
            {
                label: "Customer Feedback",
                data: [75, 15, 10],
                backgroundColor: ["#4caf50", "#f44336", "#ffeb3b"],
            },
        ],
    };

    const alerts = [
        { message: "Only 5 rooms available!", type: "warning" },
        { message: "10 orders pending delivery.", type: "info" },
        { message: "Negative feedback increased by 5%.", type: "danger" },
    ];

    const recentOrders = [
        { id: 1, customer: "John Doe", order: "Pizza", status: "Delivered" },
        { id: 2, customer: "Jane Smith", order: "Pasta", status: "Pending" },
        { id: 3, customer: "Mark Lee", order: "Burger", status: "Delivered" },
        { id: 4, customer: "Rachel Adams", order: "Salad", status: "Delivered" },
        { id: 5, customer: "Tom Brown", order: "Sushi", status: "Pending" },
    ];

    return (
        <div className="container mt-3">
            {/* Alerts Section */}
            <div className="row mb-2">
                <div className="col-12">
                    <div className="alert alert-warning p-2 mb-2 d-flex align-items-center" style={{marginTop:"-50px"}}>
                        <FaExclamationTriangle size={24} className="me-2" />
                        <strong>Alerts:</strong>
                        <ul className="mb-0 d-flex">
                            {alerts.map((alert, index) => (
                                <li key={index} className={`text-${alert.type}`}>
                                    {alert.message}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Metrics Overview */}
            <div className="row mb-4 text-center">
                <div className="col-md-3 col-sm-6 mb-3">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <FaBed size={28} className="text-primary mb-2" />
                            <h6>Total Rooms</h6>
                            <p className="h5 text-primary">120</p>
                            <small>Occupied: 95 | Available: 25</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <FaUtensils size={28} className="text-success mb-2" />
                            <h6>Restaurant Orders</h6>
                            <p className="h5 text-success">854</p>
                            <small>Dine-in: 654 | Takeaway: 200</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <FaComments size={28} className="text-warning mb-2" />
                            <h6>Customer Feedback</h6>
                            <p className="h5 text-warning">150</p>
                            <small>Positive: 75%</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <FaDollarSign size={28} className="text-danger mb-2" />
                            <h6>Monthly Revenue</h6>
                            <p className="h5 text-danger">$78,524</p>
                            <small>Daily: $2,524</small>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h6>Monthly Revenue Trends</h6>
                            <Line data={lineChartData} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h6>Activity Summary</h6>
                            <Bar data={barChartData} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Feedback Sentiment and Recent Orders */}
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h6>Feedback Sentiment Analysis</h6>
                            <Pie data={pieChartData} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h6>Recent Orders</h6>
                            <ul className="list-group">
                                {recentOrders.map((order) => (
                                    <li
                                        key={order.id}
                                        className="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                        {order.customer} - {order.order}
                                        <span
                                            className={`badge ${
                                                order.status === "Delivered"
                                                    ? "bg-success"
                                                    : "bg-warning"
                                            }`}
                                        >
                                            {order.status}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboardmodule;
