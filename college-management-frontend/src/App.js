import React from "react";
import SideBar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";

const DashboardContent = () => {
  return (
    <Router>
      <div className="app-container">
        <SideBar />
        <div className="main-container absolute top-0 left-60 p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default DashboardContent;
