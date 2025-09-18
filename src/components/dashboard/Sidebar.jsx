import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaUsers,
  FaTh,
  FaClipboardList,
  FaChartLine,
  FaCog,
  FaTimes,
  FaPalette
} from 'react-icons/fa';
import BlueLogo from '../../assets/BlueLogo.png';

const Sidebar = ({ activeItem = 'التحليلات', isOpen, onClose }) => {
  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('aside') && !event.target.closest('button[data-sidebar-toggle]')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  const navigationItems = [
    { 
      name: 'التحليلات', 
      icon: FaChartLine, 
      active: activeItem === 'التحليلات',
      path: '/dashboard'
    },
    { 
      name: 'العملاء', 
      icon: FaUsers, 
      active: activeItem === 'العملاء',
      path: '/dashboard/customers'
    },
    { 
      name: 'الخطط والاشتراكات', 
      icon: FaClipboardList, 
      active: activeItem === 'الخطط والاشتراكات',
      path: '/dashboard/plans'
    },
    { 
      name: 'البطاقات', 
      icon: FaTh, 
      active: activeItem === 'البطاقات',
      path: '/dashboard/cards'
    },
    { 
      name: 'القوالب', 
      icon: FaPalette, 
      active: activeItem === 'testthemes',
      path: '/dashboard/themes'
    },
    { 
      name: 'الإعدادات', 
      icon: FaCog, 
      active: activeItem === 'الإعدادات',
      path: '/dashboard/settings'
    }
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 right-0 z-50 w-64 bg-white border-l border-gray-200 
        transform transition-transform duration-300 ease-in-out lg:transform-none
        ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        lg:flex-shrink-0
      `}>
        {/* Mobile Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 lg:hidden">
          <img 
            src={BlueLogo} 
            alt="Sharek Logo" 
            className="h-8 w-auto"
          />
          <button
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FaTimes size={18} />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => {
                    // Close sidebar on mobile when clicking a link
                    if (window.innerWidth < 1024) {
                      onClose();
                    }
                  }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors duration-200 ${
                    item.active
                      ? 'bg-blue-100 text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                  }`}
                >
                  <IconComponent size={20} />
                  <span className="text-sm sm:text-base">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;