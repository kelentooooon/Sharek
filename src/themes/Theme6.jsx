import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLink } from "react-icons/fa";
import profileimg from "../../src/assets/width_304.jpeg";


const Theme6 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4 pb-0 sm:pb-0 sm:p-6 lg:p-8">
      <div className="w-full max-w-sm">
        
        {/* Profile Section - Light Background */}
        <div className="text-center bg-gray-100 pb-8">
          {/* Circular Profile Image */}
          <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-6">
            <div className="w-full h-full rounded-full overflow-hidden shadow-lg">
              <img 
                src={profileimg} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Name and Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">
            Ahmed Mohamed
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-1">title</p>
          <p className="text-gray-600 text-base sm:text-lg">Company</p>
        </div>

        {/* Main Content Card - Black Background */}
        <div className="bg-black rounded-t-[3rem] p-8 sm:p-10 shadow-2xl">
          
          {/* About Me Section */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              About Me
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-center mb-6">
              Description
            </p>
            <div className="w-16 h-0.5 bg-white mx-auto"></div>
          </div>

          {/* Contact Me Section */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              Contact Me
            </h2>
            
            <div className="space-y-8 text-left">
              {/* Call Me */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center">
                  <FaPhone className="mr-3 text-white text-base" />
                  Call Me
                </h3>
                <p className="text-gray-400 text-sm sm:text-base ml-7">05064152216</p>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center">
                  <FaEnvelope className="mr-3 text-white text-base" />
                  Email
                </h3>
                <p className="text-gray-400 text-sm sm:text-base ml-7 break-all">example@email.com</p>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center">
                  <FaMapMarkerAlt className="mr-3 text-white text-base" />
                  Address
                </h3>
                <div className="ml-7 text-gray-400 text-sm sm:text-base space-y-1">
                  <p>street</p>
                  <p>City, State, Zipcode</p>
                  <p>Country</p>
                </div>
              </div>
            </div>
            
            <div className="w-16 h-0.5 bg-white mx-auto mt-8"></div>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              Links
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center group">
                <FaLink className="text-white mr-4 text-lg group-hover:text-gray-300 transition-colors duration-200" />
                <a 
                  href="https://www.examplelink.com" 
                  className="text-white hover:text-gray-300 transition-colors duration-200 text-sm sm:text-base break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.examplelink.com
                </a>
              </div>
              
              <div className="flex items-center group">
                <FaLink className="text-white mr-4 text-lg group-hover:text-gray-300 transition-colors duration-200" />
                <a 
                  href="#" 
                  className="text-white hover:text-gray-300 transition-colors duration-200 text-sm sm:text-base"
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
    </div>
  );
};

export default Theme6;
