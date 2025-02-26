import React from "react";
import { BsFuelPump } from "react-icons/bs";
import { FaGasPump, FaTruckMoving } from "react-icons/fa";

const FuelCard = () => {
  const fuels = [
    {
      name: "Petrol",
      icon: <BsFuelPump />,
      available: 12500,
      capacity: 20000,
      color: "bg-blue-500",
    },
    {
      name: "Diesel",
      icon: <FaGasPump />,
      available: 9000,
      capacity: 15000,
      color: "bg-green-500",
    },
    {
      name: "CNG",
      icon: <FaTruckMoving />,
      available: 10000,
      capacity: 10000,
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="bg-white dark:bg-dark-bg p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fuels.map((fuel, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col items-center"
          >
            <div className="text-4xl text-primary mb-2">{fuel.icon}</div>
            <h3 className="text-xl font-semibold">{fuel.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {fuel.available.toLocaleString()}L /{" "}
              {fuel.capacity.toLocaleString()}L
            </p>
            {/* Progress Bar */}
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`${fuel.color} h-2 rounded-full`}
                style={{ width: `${(fuel.available / fuel.capacity) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FuelCard;
