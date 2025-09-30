import React from "react";
import { FaPhone, FaEnvelope, FaComments, FaMapMarkerAlt, FaLink } from "react-icons/fa";
import profileimg from "../assets/width_304.jpeg";
import shareLogo from "../assets/WhiteLogo.png";

const Theme5 = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-4 font-sans">
      <div className="w-full max-w-sm">
        {/* Logo Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-8">
            <img
              src={shareLogo}
              alt="Sharek Logo"
              className="w-32 h-20 object-contain"
            />
          </div>
        </div>

        {/* White Profile Card */}
        <div className="bg-white rounded-3xl p-6 mb-8 shadow-2xl">
          <div className="flex items-center space-x-4">
            <div className="w-32 h-40 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-200">
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
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
                Mohamed
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-2">title</p>
              <p className="text-gray-600 text-base sm:text-lg">Company</p>
            </div>
          </div>
        </div>

        {/* Blue Contact Icons Row */}
        <div className="flex justify-center space-x-6 mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
            <FaPhone className="w-8 h-8 text-white" />
          </div>
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
            <FaEnvelope className="w-8 h-8 text-white" />
          </div>
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
            <FaComments className="w-8 h-8 text-white" />
          </div>
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
            <FaMapMarkerAlt className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* About Me Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 mb-6">
            About Me
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-8 mb-8">
          {/* Call Me */}
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Call Me
            </h3>
            <p className="text-gray-400 text-lg">05064152216</p>
          </div>

          {/* Email */}
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Email
            </h3>
            <p className="text-gray-400 text-lg break-all">example@email.com</p>
          </div>

          {/* Address */}
          <div className="text-left">
            <div className="text-gray-400 text-base space-y-1">
              <p>street</p>
              <p>City, State, Zipcode</p>
              <p>Country</p>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <div className="bg-gray-200 rounded-full py-4 px-6 flex items-center shadow-lg">
            <FaLink className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0" />
            <a
              href="https://www.examplelink.com"
              className="text-gray-800 text-sm font-medium truncate"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.examplelink.com
            </a>
          </div>
          <div className="bg-gray-200 rounded-full py-4 px-6 flex items-center shadow-lg">
            <FaLink className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0" />
            <a
              href="https://www.examplelink.com"
              className="text-gray-800 text-sm font-medium truncate"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.examplelink.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme5;