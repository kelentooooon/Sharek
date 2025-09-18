import React, { useState } from 'react';
import Navbar from '../components/dashboard/Navbar';
import Sidebar from '../components/dashboard/Sidebar';

const DashboardLayout = ({ children, activeItem }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      {/* Top Navigation Bar */}
      <Navbar onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div className="flex relative">
        {/* Sidebar */}
        <Sidebar 
          activeItem={activeItem} 
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
        />
        
        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen lg:mr-0">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;