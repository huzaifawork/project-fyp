// import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Line } from "react-chartjs-2";
// import "bootstrap/dist/css/bootstrap.min.css";

// // Register required Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );
// const Dashboard = () => {
//   // Chart Data
//   const salesData = {
//     labels: ["Dec 2", "Dec 3", "Dec 4", "Dec 5", "Dec 6", "Dec 7", "Dec 8"],
//     datasets: [
//       {
//         label: "Sales",
//         data: [5000, 7000, 6500, 8000, 8500, 9000, 9500],
//         borderColor: "#5c6bc0",
//         backgroundColor: "rgba(92, 107, 192, 0.2)",
//         borderWidth: 2,
//       },
//     ],
//   };

//   // Chart Options
//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: true,
//     animation: { duration: 500 },
//     plugins: {
//       legend: {
//         display: true,
//         labels: {
//           color: "#333",
//         },
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Dates",
//           color: "#333",
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: "Sales ($)",
//           color: "#333",
//         },
//       },
//     },
//   };

//   return (
//     <div className="container-fluid d-flex">
//       {/* Sidebar */}
//       <aside className="bg-dark text-white vh-100 p-3">
//         <h3 className="text-center">HRMS</h3>
//         <nav>
//           <button className="btn btn-dark w-100 text-start mb-2" data-bs-toggle="collapse" data-bs-target="#dashboardMenu">
//             Dashboard
//           </button>
//           <button className="btn btn-dark w-100 text-start mb-2" data-bs-toggle="collapse" data-bs-target="#employeesMenu">
//             Employees
//           </button>
//           <div id="employeesMenu" className="collapse">
//             <a href="#" className="d-block text-white ms-4">Employee List</a>
//             <a href="#" className="d-block text-white ms-4">Add Employee</a>
//           </div>
//           <button className="btn btn-dark w-100 text-start mb-2" data-bs-toggle="collapse" data-bs-target="#attendanceMenu">
//             Attendance
//           </button>
//           <div id="attendanceMenu" className="collapse">
//             <a href="#" className="d-block text-white ms-4">Daily Attendance</a>
//             <a href="#" className="d-block text-white ms-4">Attendance Report</a>
//           </div>
//           <button className="btn btn-dark w-100 text-start mb-2" data-bs-toggle="collapse" data-bs-target="#payrollMenu">
//             Payroll
//           </button>
//           <div id="payrollMenu" className="collapse">
//             <a href="#" className="d-block text-white ms-4">Salary</a>
//             <a href="#" className="d-block text-white ms-4">Bonuses</a>
//           </div>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-grow-1 p-4">
//         {/* Top Bar */}
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h1>Welcome, Admin</h1>
//           <input
//             type="text"
//             placeholder="Search..."
//             className="form-control w-25"
//           />
//         </div>

//         {/* Stats Section */}
//         <div className="row mb-4">
//           <div className="col-md-3">
//             <div className="card text-center shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title">Total Employees</h5>
//                 <p className="card-text">120</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3">
//             <div className="card text-center shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title">Attendance Today</h5>
//                 <p className="card-text">98%</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3">
//             <div className="card text-center shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title">Leaves Pending</h5>
//                 <p className="card-text">15</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3">
//             <div className="card text-center shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title">Payroll Processed</h5>
//                 <p className="card-text">$150,000</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Chart Section */}
//         <div className="card shadow-sm">
//           <div className="card-body">
//             <h4 className="card-title">Sales Performance</h4>
//             <div style={{ height: "300px" }}>
//               <Line data={salesData} options={chartOptions} />
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;
