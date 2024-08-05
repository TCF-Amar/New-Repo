import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/SideBar.css"; // Custom styles

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: "Dashboard",
    };
    this.toggleActiveClass = this.toggleActiveClass.bind(this);
  }

  toggleActiveClass(buttonName) {
    this.setState({ activeButton: buttonName });
  }

  render() {
    const { activeButton } = this.state;

    return (
      <div className="sidebar text-white h-screen flex flex-col p-4">
        <div className="mb-6 flex flex-col  justify-center items-center">
          <div className="bg-gray-500 rounded-full w-16 h-16 mb-2"></div>
          <span className="block text-xl font-semibold">Amarjeet</span>
        </div>
        <hr className="border-gray-600 mb-4" />
        <div className="mt-5 flex flex-col space-y-2">
          <Link to="/" className="text-center">
            <button
              onClick={() => this.toggleActiveClass("Dashboard")}
              className={`side-btn py-2 px-4 w-full ${
                activeButton === "Dashboard" ? "active" : ""
              }`}
            >
              Dashboard
            </button>
          </Link>
          <Link to="/course" className="text-center">
            <button
              onClick={() => this.toggleActiveClass("Course")}
              className={`side-btn py-2 px-4 w-full ${
                activeButton === "Course" ? "active" : ""
              }`}
            >
              Course
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SideBar;
