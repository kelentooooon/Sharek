import React, { useState } from 'react';
import {
  FaUser,
  FaSignOutAlt,
  FaChevronDown,
  FaBell,
  FaCog,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import logo from '../../assets/BlueLogo.png';

const Navbar = ({ onToggleSidebar, isSidebarOpen }) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  // User data
  const currentUser = {
    name: 'أحمد محمد',
    email: 'ahmed@sharek.com',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxj7HAvnHLbN-6oUmHIgBXA4AuMGZj2htdqkg6l2yy097utez58uqis13VWLg2WD2eBMujPmvWsMFxLjnNgIqBB9QuyOFvvyhS86XzaByOln0ipE297bKbElsPvyYTChamqzSf6v8QgmPQXoea4jJ3GkSgh2-paTOuuBu9yi4H2XOH3fPe6QP7Vu1Yh2h-LFYY0cSbx7VpD-hsciqIW29iMfUvmT6NkBiK5MhOlg_3jHNpCX3owYGtvUPCpM-5HKQoVIQ20eoI0CKa'
  };

  const handleLogout = () => {
    // Add logout logic here
    if (window.confirm('هل أنت متأكد من تسجيل الخروج؟')) {
      console.log('Logging out...');
      // Clear user session, redirect to login, etc.
      // navigate('/login');
    }
    setIsUserDropdownOpen(false);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Left Side - Mobile Menu Button + Logo */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          {/* Blue Logo */}
          <div className="flex-1">
            <img 
              src={logo}
              alt="Sharek Logo" 
              className="h-8 sm:h-10 w-auto"
            />
          </div>
        </div>

        {/* Right Side - Notifications and User */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
            <FaBell size={18} className="sm:w-5 sm:h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={toggleUserDropdown}
              className="flex items-center gap-2 sm:gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <img
                src={currentUser.avatar}
                alt="صورة المستخدم"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
              />
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-gray-800">{currentUser.name}</p>
                <p className="text-xs text-gray-600">{currentUser.email}</p>
              </div>
              <FaChevronDown 
                className={`text-gray-600 transition-transform duration-200 hidden sm:block ${
                  isUserDropdownOpen ? 'rotate-180' : ''
                }`} 
                size={12} 
              />
            </button>

            {/* Dropdown Menu */}
            {isUserDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 sm:w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="text-sm font-semibold text-gray-800">{currentUser.name}</p>
                  <p className="text-xs text-gray-600">{currentUser.email}</p>
                </div>
                
                <div className="py-2">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <FaUser size={16} />
                    الملف الشخصي
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <FaCog size={16} />
                    الإعدادات
                  </a>
                </div>
                
                <div className="border-t border-gray-200 pt-2">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-right"
                  >
                    <FaSignOutAlt size={16} />
                    تسجيل الخروج
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;