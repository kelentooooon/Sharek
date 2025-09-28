import React from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";

const Customers = () => {
  return (
    <DashboardLayout activeItem="العملاء">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
        إدارة العملاء
      </h1>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
        <Link
          to="/digital-business-cards"
          className="text-blue-600 hover:underline "
        >
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            إضافة عميل جديد
          </button>
        </Link>
        <p className="text-gray-600">صفحة إدارة العملاء قيد التطوير...</p>
      </div>
    </DashboardLayout>
  );
};

export default Customers;
