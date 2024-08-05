import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Employee from "./pages/Employee";
import Courses from "./pages/Courses";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
