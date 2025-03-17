import React from "react";
import { IoMdMore, IoMdSettings } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { BsFuelPump } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import { FaCoins } from "react-icons/fa";
import logo from "../Assets/logo-light.png"

const navLinks = [
  { name: "Dashboard", icon: RiDashboardLine, path: "/app/dashboard/home" },
  { name: "Fuel Inventory", icon: BsFuelPump, path: "/app/dashboard/inventory" },
  {
    name: "Employee Management",
    icon: MdPeople,
    path: "/app/dashboard/employee-management",
  },
  {
    name: "Sales Analytics",
    icon: FaCoins,
    path: "/app/dashboard/sales-analytics",
  },
  { name: "Settings", icon: IoMdSettings, path: "/app/dashboard/settings" },
];

const Sidebar = () => {
  const location = useLocation();

const isActive = (path) =>
  location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <aside className="h-screen text-white">
      <nav className="h-screen flex flex-col bg-primary shadow-sm pt-4 pb-2">
        <div className="p-4 pb-2">
          <img src={logo} width="180px" />
        </div>

        <ul className="flex-1 px-3 text-lg gap-6 mt-8 tracking-wide">
          {navLinks.map(({ name, icon: Icon, path }) => (
            <li
              key={name}
              className={`p-3 rounded-md py-3 cursor-pointer ${
                isActive(path)
                  ? "bg-[#022c5b] text-white"
                  : "hover:bg-[#03396c] text-soft-gray"
              }`}
            >
              <Link
                to={path}
                className="flex items-center gap-2 w-full"
                aria-current={isActive(path) ? "page" : undefined}
              >
                <Icon size={20} />
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-t border-[#4d82c2] flex p-4 text-lg">
          <img
            src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&bold=true"
            alt="User Avatar"
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
