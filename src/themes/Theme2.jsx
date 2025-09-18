import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLink } from "react-icons/fa";
import profileimg from "../assets/width_304.jpeg";


const Theme2 = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-sm space-y-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8">
          <div className="flex items-center space-x-4">
            <div className="w-30 h-40 sm:w-32 sm:h-48 rounded-2xl overflow-hidden flex-shrink-0">
              <img
                src={profileimg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-black mb-1">
                Ahmed
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                Mohamed
              </h2>
              <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                title
              </div>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">Company</p>
            </div>
          </div>
        </div>
        <div className="bg-green-500 rounded-3xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2 text-center">
            About Me
          </h2>
          <div className="border-b-2 border-black w-20 mx-auto mb-4"></div>
          <p className="text-gray-200 text-center text-sm sm:text-base leading-relaxed">
            Description
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2 text-center">
            Contact Me
          </h2>
          <div className="border-b-2 border-black w-24 mx-auto mb-6"></div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center mb-2">
                <FaPhone className="text-black mr-3 text-lg" />
                <h3 className="text-lg font-semibold text-black">Call Me</h3>
              </div>
              <p className="text-gray-600 ml-8 text-sm sm:text-base">
                05064152216
              </p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <FaEnvelope className="text-black mr-3 text-lg" />
                <h3 className="text-lg font-semibold text-black">Email</h3>
              </div>
              <p className="text-gray-600 ml-8 text-sm sm:text-base break-all">
                example@email.com
              </p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-black mr-3 text-lg" />
                <h3 className="text-lg font-semibold text-black">Address</h3>
              </div>
              <div className="ml-8 text-gray-600 text-sm sm:text-base">
                <p>street</p>
                <p>City, State, Zipcode</p>
                <p>Country</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-500 rounded-3xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 text-center">
            Links
          </h2>

          <div className="space-y-4">
            <div className="flex items-center p-3 bg-opacity-10 rounded-xl hover:bg-opacity-20 transition-all duration-200 group">
              <FaLink className="text-black mr-4 text-lg group-hover:text-green-200 transition-colors" />
              <a
                href="https://www.examplelink.com"
                className="text-white hover:text-green-200 transition-colors text-sm sm:text-base break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.examplelink.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme2;
