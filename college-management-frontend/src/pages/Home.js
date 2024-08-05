import React from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import DashboardContent from "../components/DashboardContent";

const AdminDashboard = () => {
  
  return (
    <div className="admin-dashboard">
      <NavBar />
      <Sidebar />
      <DashboardContent />
    </div>
  );
};

export default AdminDashboard;
