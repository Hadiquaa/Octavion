import React, { useState,useEffect } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { CiDark } from "react-icons/ci";
import { BsSun,BsMoon } from "react-icons/bs"; // Sun Icon

const Topbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <header className="w-full bg-white shadow-md rounded px-4 py-2 flex items-center justify-between">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-96">
        <FiSearch className="text-gray-500 text-lg" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none px-2 w-full"
        />
      </div>

      {/* Profile & Notifications */}
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <button className="relative">
          <IoMdNotificationsOutline className="text-2xl text-gray-600 hover:text-blue-500 transition-colors duration-200" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            0
          </span>
        </button>

        {/* Dark Mode Toggle with Sun/Moon Icons */}
        <button onClick={()=>setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? (
            <BsSun className="text-2xl text-gray-600 hover:text-blue-500 transition-colors duration-200" />
          ) : (
            <BsMoon className="text-2xl text-yellow-400 hover:text-yellow-500 transition-colors duration-200" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Topbar;
