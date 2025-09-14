import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLink } from "react-icons/fa";
import profileimg from "../../src/assets/width_304.jpeg";


const Theme3 = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-sm bg-black overflow-hidden">
        <div className="relative">
          <div className="h-80 sm:h-96 bg-gray-300 overflow-hidden relative">
            <img
              src={profileimg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-3/4 text-white border-t-[60px] md:border-t-[80px] border-r-[50px] border-t-blue-600 border-r-transparent">
              <h2 className="absolute bottom-0 left-2.5 text-2xl sm:text-3xl leading-tight">Ahmed
                <br />
                <span className="font-bold">Mohamed</span>
              </h2>
            </div>
          </div>
          <div className="bg-white text-black p-2 w-1/2 shadow-lg">
            <p className="text-base sm:text-lg font-semibold mb-1">title</p>
            <p className="text-base sm:text-lg font-medium">Company</p>
          </div>
        </div>
        <div className="px-6 py-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
            Description
          </p>
          <div className="w-16 h-0.5 bg-white mx-auto"></div>
        </div>
        <div className="px-6 py-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Contact Me
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center">
                <FaPhone className="mr-3 text-white" />
                Call Me
              </h3>
              <p className="text-gray-400 text-sm sm:text-base ml-8">
                05064152216
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center">
                <FaEnvelope className="mr-3 text-white" />
                Email
              </h3>
              <p className="text-gray-400 text-sm sm:text-base ml-8 break-all">
                example@email.com
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-3 text-white" />
                Address
              </h3>
              <div className="ml-8 text-gray-400 text-sm sm:text-base space-y-1">
                <p>street</p>
                <p>City, State, Zipcode</p>
                <p>Country</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6">
          <div className="w-16 h-0.5 bg-white mx-auto mb-8"></div>
        </div>
        <div className="px-6 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Links
          </h2>

          <div className="space-y-6">
            <div className="flex items-center group">
              <FaLink className="text-white mr-4 text-lg group-hover:text-blue-400 transition-colors" />
              <a
                href="https://www.examplelink.com"
                className="text-white hover:text-blue-400 transition-colors text-sm sm:text-base break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.examplelink.com
              </a>
            </div>

            <div className="flex items-center group">
              <FaLink className="text-white mr-4 text-lg group-hover:text-blue-400 transition-colors" />
              <a
                href="#"
                className="text-white hover:text-blue-400 transition-colors text-sm sm:text-base"
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

export default Theme3;
