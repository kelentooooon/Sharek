import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLink, FaMobileAlt } from "react-icons/fa";
import profileimg from "../assets/width_304.jpeg";
import shareLogo from "../assets/BlackLogo.png";

const Theme25 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4 font-sans">
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

        {/* Main Card with Gradient Background */}
        <div className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 rounded-3xl p-6 mb-6 shadow-2xl relative overflow-hidden">
          {/* Name and Title */}
          <div className="text-left mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-lime-400 mb-2">
              Ahmed Mohamed
            </h1>
            <p className="text-lime-300 text-lg mb-1">title</p>
            <p className="text-lime-300 text-lg">Company</p>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="w-64 h-80 rounded-3xl overflow-hidden shadow-2xl bg-gray-600">
              <img
                src={profileimg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Lime Contact Icons Row */}
          <div className="flex justify-center space-x-8 mb-6">
            <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center shadow-lg">
              <FaPhone className="w-8 h-8 text-black" />
            </div>
            <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center shadow-lg">
              <FaEnvelope className="w-8 h-8 text-black" />
            </div>
            <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center shadow-lg">
              <FaMapMarkerAlt className="w-8 h-8 text-black" />
            </div>
          </div>
        </div>

        {/* Black About Me Section */}
        <div className="bg-black rounded-3xl p-6 mb-6 shadow-2xl">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              About Me
            </h2>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6 mb-6 text-center">
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
          </p>

          {/* Phone Icon and Info */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center shadow-lg mb-4">
              <FaMobileAlt className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-lime-500 mb-2">
              Call Me
            </h3>
            <p className="text-gray-700 text-lg">05064152216</p>
          </div>

          {/* Email */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-lime-500 mb-2">
              Email
            </h3>
            <p className="text-gray-700 text-lg break-all">example@email.com</p>
          </div>
        </div>

        {/* Lime Links Section */}
        <div className="space-y-4">
          <div className="bg-lime-400 rounded-full py-4 px-6 flex items-center shadow-lg">
            <FaLink className="w-5 h-5 text-black mr-3 flex-shrink-0" />
            <a
              href="https://www.examplelink.com"
              className="text-black text-sm font-medium truncate"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.examplelink.com
            </a>
          </div>
          <div className="bg-lime-400 rounded-full py-4 px-6 flex items-center shadow-lg">
            <FaLink className="w-5 h-5 text-black mr-3 flex-shrink-0" />
            <a
              href="https://www.examplelink.com"
              className="text-black text-sm font-medium truncate"
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

export default Theme25;