import React from "react";
import { Link } from "react-router-dom";  
import "./css/Sidebar.css"; // Optional: Separate CSS file for sidebar styling

const Sidebar = () => {
  return (
    <div className="sidebar ">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/students">Students</Link>
        </li>
        <li>
          <Link to="/employee">Employee</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
