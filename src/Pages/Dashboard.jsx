import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Routes,Route } from 'react-router-dom';
import Home from '../Components/Home';
import FuelInventory from '../Components/FuelInventory';
import EmployeeManagement from '../Components/EmployeeManagement';
import SalesAnalytics from '../Components/SalesAnalytics';
import Settings from '../Components/Settings';
import Topbar from "../Components/Topbar";


const Dashboard = () => {
  return (
    <div className="w-full flex h-screen">
      <div className="w-[17%] h-screen sticky top-0 ">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col h-screen ">
        <div className="sticky top-0 w-full z-10 bg-white shadow-md">
          <Topbar />
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto px-6 py-2">
          <Routes>
            <Route path='home' element={<Home />} />
            <Route path="inventory" element={<FuelInventory />} />
            <Route
              path="employee-management"
              element={<EmployeeManagement />}
            />
            <Route path="sales-analytics" element={<SalesAnalytics />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard