import React from "react";

const navBar = () => {
  return (
    <nav className=" bg-gray-800 fixed top-0 left-0 w-full text-3xl font-bold flex justify-center text-white h-14 items-center">
      <i class="fa-solid fa-bars absolute left-3"></i>
      <div className="flex justify-between items-center h-16 mx-4">
        Management
      </div>
    </nav>
  );
};
export default navBar;
