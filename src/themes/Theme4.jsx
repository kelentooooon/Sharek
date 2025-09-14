import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLink } from "react-icons/fa";
import profileimg from "../../src/assets/width_304.jpeg";


const Theme4 = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-6 relative">
            <div className="w-full h-full rounded-full p-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={profileimg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Ahmed Mohamed
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-1">title</p>
          <p className="text-gray-400 text-base sm:text-lg">Company</p>
        </div>
        <div className="border border-yellow-500 rounded-3xl p-6 sm:p-8 bg-black bg-opacity-50">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">
            About Me
          </h2>
          <div className="w-12 h-0.5 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-center">
            Description
          </p>
        </div>
        <div className="border border-yellow-500 rounded-3xl p-6 sm:p-8 bg-black bg-opacity-50">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
            Contact Me
          </h2>
          <div className="w-16 h-0.5 bg-white mx-auto mb-8"></div>

          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center">
                <FaPhone className="mr-3 text-white text-base" />
                Call Me
              </h3>
              <p className="text-gray-400 text-sm sm:text-base ml-7">
                05064152216
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center">
                <FaEnvelope className="mr-3 text-white text-base" />
                Email
              </h3>
              <p className="text-gray-400 text-sm sm:text-base ml-7 break-all">
                example@email.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center">
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
        </div>
        <div className="border border-yellow-500 rounded-3xl p-6 sm:p-8 bg-black bg-opacity-50">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 text-center">
            Links
          </h2>

          <div className="space-y-4">
            <div className="flex items-center group">
              <FaLink className="text-white mr-4 text-lg group-hover:text-yellow-400 transition-colors duration-200" />
              <a
                href="https://www.examplelink.com"
                className="text-white hover:text-yellow-400 transition-colors duration-200 text-sm sm:text-base break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.examplelink.com
              </a>
            </div>

            <div className="flex items-center group">
              <FaLink className="text-white mr-4 text-lg group-hover:text-yellow-400 transition-colors duration-200" />
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors duration-200 text-sm sm:text-base"
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

export default Theme4;
