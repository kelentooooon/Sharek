import React from "react";
import { FaPhone, FaEnvelope, FaComments, FaMapMarkerAlt, FaLink, FaGlobe } from "react-icons/fa";
import profileimg from "../assets/width_304.jpeg";
import shareLogo from "../assets/BlueLogo.png";

const Theme21 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4 font-sans">
      <div className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl">
        {/* Header with Logo */}
        <div className="bg-white px-6 pt-6 pb-4 text-center">
          <div className="flex justify-center items-center">
            <img src={shareLogo} alt="Sharek Logo" className="w-30 h-20 object-contain" />
          </div>
        </div>

        {/* Profile Section */}
        <div className="bg-white px-6 pb-6 text-center">
          {/* Profile Image */}
          <div className="relative mb-6">
            <div className="w-40 h-48 mx-auto rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
              <img
                src={profileimg}
                alt="Ahmed Mohamed"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Name and Title */}
          <h2 className="text-3xl font-bold text-blue-600 mb-1">Ahmed</h2>
          <h2 className="text-3xl font-bold text-blue-600 mb-3">Mohamed</h2>
          <p className="text-gray-600 text-lg mb-6">Company</p>
        </div>

        {/* Blue Section */}
        <div className="bg-gradient-to-b from-blue-500 to-blue-700 px-6 py-8 text-white">
          {/* Contact Icons Row */}
          <div className="flex justify-center space-x-6 mb-8">
            <div className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group">
              <FaPhone className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
            </div>
            <div className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group">
              <FaEnvelope className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
            </div>
            <div className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group">
              <FaComments className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
            </div>
            <div className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group">
              <FaMapMarkerAlt className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </div>

          {/* About Me Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-4">About Me</h3>
            <p className="text-blue-100 text-base leading-relaxed text-center px-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 mb-8">
            {/* Phone */}
            <div className="text-center">
              <h4 className="text-xl font-bold mb-2">Call Me</h4>
              <p className="text-blue-100 text-lg">05064152216</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <h4 className="text-xl font-bold mb-2">Email</h4>
              <p className="text-blue-100 text-lg">example@email.com</p>
            </div>

            {/* Address */}
            <div className="text-center">
              <p className="text-blue-100 text-base">street</p>
              <p className="text-blue-100 text-base">City, State, Zipcode</p>
              <p className="text-blue-100 text-base">Country</p>
            </div>
          </div>

          {/* Website Links */}
          <div className="space-y-4">
            <div className="bg-white bg-opacity-95 rounded-full py-4 px-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer">
              <FaLink className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
              <span className="text-blue-800 text-sm font-medium truncate">https://www.examplelink.com</span>
            </div>
            <div className="bg-white bg-opacity-95 rounded-full py-4 px-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer">
              <FaGlobe className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
              <span className="text-blue-800 text-sm font-medium truncate">https://www.examplelink.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme21;