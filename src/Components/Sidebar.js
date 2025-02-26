import React from "react";
import { IoMdMore, IoMdSettings } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { BsFuelPump } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import { FaCoins } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation(); // Get current route

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="h-screen text-white">
      <nav className="h-screen flex flex-col bg-primary shadow-sm pt-4 pb-2">
        <div className="p-4 pb-2">
          <h1 className="font-bold text-3xl">OctaVion</h1>
        </div>
        <ul className="flex-1 px-3 text-lg gap-6 mt-8 tracking-wide">
          <li
            className={`p-3 rounded-md py-6 ${
              isActive("/dashboard")
                ? "bg-[#022c5b] text-white"
                : "hover:bg-[#03396c]"
            }`}
          >
            <Link to="/dashboard" className="flex items-center gap-6 w-full">
              <RiDashboardLine size={30} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li
            className={`p-3 rounded-md py-6 ${
              isActive("/dashboard/inventory")
                ? "bg-[#022c5b] text-white"
                : "hover:bg-[#03396c]"
            }`}
          >
            <Link
              to="/dashboard/inventory"
              className="flex items-center gap-6 w-full"
            >
              <BsFuelPump size={30} />
              <span>Fuel Inventory</span>
            </Link>
          </li>
          <li
            className={`p-3 rounded-md py-6 ${
              isActive("/dashboard/employee-management")
                ? "bg-[#022c5b] text-white"
                : "hover:bg-[#03396c]"
            }`}
          >
            <Link
              to="/dashboard/employee-management"
              className="flex items-center gap-6 w-full"
            >
              <MdPeople size={30} />
              <span>Employee Management</span>
            </Link>
          </li>
          <li
            className={`p-3 rounded-md py-6 ${
              isActive("/dashboard/sales-analytics")
                ? "bg-[#022c5b] text-white"
                : "hover:bg-[#03396c]"
            }`}
          >
            <Link
              to="/dashboard/sales-analytics"
              className="flex items-center gap-6 w-full"
            >
              <FaCoins size={30} />
              <span>Sales Analytics</span>
            </Link>
          </li>
          <li
            className={`p-3 rounded-md py-6 ${
              isActive("/dashboard/settings")
                ? "bg-[#022c5b] text-white"
                : "hover:bg-[#03396c]"
            }`}
          >
            <Link
              to="/dashboard/settings"
              className="flex items-center gap-6 w-full"
            >
              <IoMdSettings size={30} />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
        <div className="border-t border-[#4d82c2] flex p-4 text-lg">
          <img
            src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div className="flex justify-between items-center ml-3 text-left w-full">
            <div className="leading-5">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-soft-gray">johndoe@gmail.com</span>
            </div>
            <button className="focus:outline-none">
              <IoMdMore size={25} />
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
