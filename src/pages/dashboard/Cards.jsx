import React from 'react';
import DashboardLayout from '../../layout/DashboardLayout';

const Cards = () => {
  return (
    <DashboardLayout activeItem="البطاقات">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">إدارة البطاقات</h1>
      
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
        <p className="text-gray-600">صفحة إدارة البطاقات قيد التطوير...</p>
      </div>
    </DashboardLayout>
  );
};

export default Cards;