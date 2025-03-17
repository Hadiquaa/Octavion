import React,{useContext} from 'react'
import StatCard from './StatCard'
import { FaDollarSign } from "react-icons/fa6";
import { BsDroplet } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";
import FuelCard from './FuelCard';
import SalesOverview from './SalesOverview';
import { AppContext } from '../Context/AppContext';
import EmployeeList from './EmployeeList';
const Home = () => {
    const {mockFuelData, mockEmployees} = useContext(AppContext);
  return (
    <div className="flex flex-col gap-4 text-left">
      <h1 className=" uppercase text-2xl font-bold text-primary mt-4 ">
        Fuel Station Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Total Sales Today"
          value="$5,234.50"
          icon={<FaDollarSign className="w-6 h-6 text-green-600" />}
        />
        <StatCard
          title="Fuel Types"
          value={mockFuelData.length}
          icon={<BsDroplet className="w-6 h-6 text-blue-600" />}
        />
        <StatCard
          title="Active Employees"
          value={mockEmployees.length}
          icon={<FaUsers className="w-6 h-6 text-purple-600" />}
        />
        <StatCard
          title="Monthly Revenue"
          value="$157,234"
          icon={<IoBarChart className="w-6 h-6 text-orange-600" />}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <FuelCard />
        <SalesOverview/>
      </div>
      <EmployeeList/>
    </div>
  );
}

export default Home