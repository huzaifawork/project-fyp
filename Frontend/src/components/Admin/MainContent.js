import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "./Maincontent.css";

// Revenue Chart Data
const revenueData = [
  { date: "Apr 7", value: 30000 },
  { date: "Apr 8", value: 40000 },
  { date: "Apr 9", value: 62000 },
  { date: "Apr 10", value: 52000 },
  { date: "Apr 11", value: 42000 },
  { date: "Apr 12", value: 48000 },
  { date: "Apr 13", value: 42000 },
  { date: "Apr 14", value: 39000 },
];

// Traffic Analysis Data
const trafficData = [
  { age: "10+", female: 20, male: 30 },
  { age: "15+", female: 40, male: 35 },
  { age: "20+", female: 60, male: 55 },
  { age: "30+", female: 30, male: 40 },
  { age: "45+", female: 20, male: 25 },
];

// Products Sold Data
const productsSoldData = [
  { name: "Stools", value: 600 },
  { name: "Sofas", value: 700 },
  { name: "Chairs", value: 500 },
  { name: "Tables", value: 238 },
];

// Top Products Data
const topProducts = [
  { name: "Emerald Velvet", sales: 917, price: "$355.90" },
  { name: "Velvet Coral", sales: 804, price: "$279.00" },
  { name: "Rotterdam", sales: 738, price: "$329.95" },
  { name: "Happy Yellow", sales: 684, price: "$315.50" },
];

const COLORS = ["#00c0ff", "#ff6384", "#36a2eb", "#ff9f40"];

const MainContent = () => {
  return (
    <div className="container-fluid main-container">
      {/* Revenue Graph */}
      <div className="row">
        <div className="col-md-8 mb-4 revenue-card">
          <div className="card shadow-lg">
            <h6 className="mb-2">Total Revenue</h6>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#4e73df" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Traffic Analysis */}
        <div className="col-md-4 mb-4 traffic-card">
          <div className="card shadow-lg">
            <h6 className="mb-3">Traffic Analysis</h6>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="female" fill="#ff6b5f" />
                <Bar dataKey="male" fill="#4d94ff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Products Section */}
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg top-products">
            <h6 className="mb-3 text-center">Top Products</h6>
            {topProducts.map((product, index) => (
              <div key={index} className="product-item mb-3">
                <div className="product-title">{product.name}</div>
                <div className="product-subtitle">Sales: {product.sales}</div>
                <div className="product-price">{product.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Products Sold Pie Chart */}
        <div className="col-md-4 mb-4 products-card">
          <div className="card shadow-lg">
            <h6 className="mb-3 text-center">Products Sold</h6>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={productsSoldData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    label
                  >
                    {productsSoldData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center mt-2 products-count">2,038</div>
          </div>
        </div>
      </div>

      {/* Total Income Section */}
      <div className="row">
        <div className="col-md-4 mb-4 total-income-card">
          <div className="card shadow-lg">
            <h6 className="mb-2 text-center">Total Income</h6>
            <h3 className="text-success text-center">$215,835.89</h3>
            <p className="text-muted text-center">24% increase compared to last week</p>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="row">
        <div className="col-12 mb-4 recent-orders">
          <div className="card shadow-lg">
            <h6 className="mb-3 text-center">Recent Orders</h6>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { date: "May 5", customer: "M-Starlight", amount: "$359.90" },
                  { date: "May 4", customer: "Serene W", amount: "$420.78" },
                ].map((order, index) => (
                  <tr key={index}>
                    <td>{order.date}</td>
                    <td>{order.customer}</td>
                    <td>{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
