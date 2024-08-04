import React from "react";
import "./css/Sidebar.css"; // Optional: Separate CSS file for sidebar styling

const Sidebar = () => {
  return (
    <div className="sidebar fixed top-14 w-52 h-screen">
      <ul>
        <li>Dashboard</li>
        <li>Students</li>
        <li>Employees</li>
        <li>Courses</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
