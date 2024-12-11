import React from "react";
import "./App.css"

import Footer from "./components/footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import Landingpage from "./components/landingpage";
import Products from "./components/products";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Admin/Sidebar";
function App() {
  return (
    <div>
    {/* <Landingpage/>
    <Products/>
<Footer/> */}
  {/* <Dashboard/> */}
  
      <Sidebar/>
</div>
  );
}

export default App;
