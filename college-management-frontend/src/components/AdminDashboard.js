import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../logo.svg";

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalStudents: 0,
    totalCourses: 0,
    newRegistrations: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/dashboard")
      .then((response) => setDashboardData(response.data))
      .catch((error) => console.error("Error fetching dashboard data:", error));
  }, []);

  return (
      <div>
      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>
        <div className="dashboard-card">
          <h2>Total Students</h2>
          <p>{dashboardData.totalStudents}</p>
        </div>
        <div className="dashboard-card">
          <h2>Total Courses</h2>
          <p>{dashboardData.totalCourses}</p>
        </div>
        <div className="dashboard-card">
          <h2>New Registrations</h2>
          <p>{dashboardData.newRegistrations}</p>
        </div>
        <div>
          <h1>Jw</h1>
        </div>
      </div>
<img src={logo}></img>
    </div>
  );
};

export default AdminDashboard;
