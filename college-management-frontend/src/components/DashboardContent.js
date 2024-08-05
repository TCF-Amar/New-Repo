import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/DashboardContent.css"; // Optional: Separate CSS file for dashboard content styling

const DashboardContent = () => {
  const [data, setData] = useState({
    totalStudents: 0,
    totalEmployees: 0,
    totalCourses: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/students")
      .then((response) => {
        const { totalStudents } = response.data;
        setData({ totalStudents });
      })
      .catch((error) => console.error("Error fetching dashboard data:", error));
  }, []); // Empty array ensures the effect runs only once when component mounts

  return (
    <React.Fragment>
      <div className="dashboard-content">
        <h1>Admin Dashboard</h1>
        <div className="dashboard-cards">
          <div className="card">
            <h2>Total Students</h2>
            <p>{data.totalStudents}</p>
          </div>
          <div className="card">
            <h2>Total Employees</h2>
            {/* <p>{data.totalEmployees}</p> */}
          </div>
          <div className="card">
            <h2>Total Courses</h2>
            {/* <p>{data.totalCourses}</p> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardContent;
