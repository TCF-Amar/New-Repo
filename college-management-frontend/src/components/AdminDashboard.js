import React from "react";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import DashboardContent from "./DashboardContent";
import "./css/AdminDashboard.css"; // Optional: Separate CSS file for overall styling

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
     <NavBar/>
      <Sidebar />
      <DashboardContent />
    </div>
  );
};

export default AdminDashboard;
