import React, { useContext } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { AppContext } from "../Context/AppContext";



export default function FuelCard() {
    const { mockFuelData } = useContext(AppContext);
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Fuel Inventory
      </h2>
      <div className="space-y-4">
        {mockFuelData.map((fuel) => (
          <div key={fuel.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-gray-900">{fuel.name}</h3>
              <span className="text-gray-600">${fuel.pricePerLiter}/L</span>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-gray-600">
                    Stock Level: {fuel.currentStock}L
                  </span>
                </div>
                {fuel.currentStock < fuel.minimumStock && (
                  <div className="flex items-center text-red-500 text-xs">
                    <FiAlertTriangle className="w-4 h-4 mr-1" />
                    Low Stock
                  </div>
                )}
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <div
                  style={{ width: `${(fuel.currentStock / 20000) * 100}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
