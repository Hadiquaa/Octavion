import React from "react";

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-gray-500 text-sm">{title}</h3>
        {icon}
      </div>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}

export default StatCard;
