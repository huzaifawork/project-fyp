import React from "react";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";
import Header from "./components/common/Header";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import {
  Home,
  Booking,
  AboutUs,
  Contact,
  PageNotFound,
  Room,
  Services,
  Team,
  Testimonial,
} from "./pages/index";
import Footer from "./components/common/Footer";
import Dashboard from "./components/Admin/Sidebar";

// Layout Component for Header and Footer
const Layout = ({ children }) => {
  const location = useLocation();

  // Exclude Header and Footer on /dashboard route
  const excludeHeaderFooter = location.pathname === "/dashboard";

  return (
    <>
      {!excludeHeaderFooter && <Header />}
      {children}
      {!excludeHeaderFooter && <Footer />}
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/rooms" element={<Room />} />
          <Route path="/services" element={<Services />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}
