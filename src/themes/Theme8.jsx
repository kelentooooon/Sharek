import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLink } from "react-icons/fa";
import profileimg from '../../assets/width_304.jpeg';

const Theme8 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-pink-300 to-red-400 flex justify-center items-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <div className="w-48 h-72 sm:w-52 sm:h-80 mx-auto mb-6 overflow-hidden rounded-tl-full bg-gray-600 shadow-2xl">
            <img 
              src={profileimg} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2 leading-tight">
              Ahmed
            </h1>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Mohamed
            </h2>
            <div className="inline-block bg-red-500 text-white px-4 py-1 rounded text-sm sm:text-base font-medium mb-2">
              title
            </div>
            <p className="text-gray-700 text-base sm:text-lg font-medium">Company</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center border-b-2 border-gray-800 pb-2">
            About Me
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed text-center mt-6">
            Description
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center border-b-2 border-gray-800 pb-2">
            Contact Me
          </h2>
          
          <div className="space-y-6 text-left mt-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                Call Me
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                05064152216
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                Email
              </h3>
              <p className="text-gray-600 text-sm sm:text-base break-all">
                example@email.com
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                Address
              </h3>
              <div className="text-gray-600 text-sm sm:text-base space-y-1">
                <p>street</p>
                <p className="text-gray-500">City, State, Zipcode</p>
                <p className="text-gray-500">Country</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Links
          </h2>
          
          <div className="space-y-4 mt-6">
            <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-all duration-200 group">
              <FaLink className="text-gray-600 mr-3 text-lg group-hover:text-gray-800 transition-colors" />
              <a 
                href="https://www.examplelink.com" 
                className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base break-all flex-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.examplelink.com
              </a>
            </div>
            
            <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-all duration-200 group">
              <FaLink className="text-gray-600 mr-3 text-lg group-hover:text-gray-800 transition-colors" />
              <a 
                href="#" 
                className="text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                Another Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme8;
