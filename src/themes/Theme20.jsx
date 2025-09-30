import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLink, FaStar, FaFacebook, FaTwitter, FaInstagram, FaClock } from "react-icons/fa";
import profileimg from "../assets/width_304.jpeg";
import shareLogo from "../assets/BlackLogo.png";

const Theme20 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4 font-sans">
      <div className="w-full max-w-sm space-y-4">
        {/* Header Card with Profile */}
        <div className="bg-indigo-600 rounded-3xl p-6 text-white shadow-2xl">
          {/* Logo */}
          <div className="flex justify-start mb-4">
            <img
              src={shareLogo}
              alt="Sharek Logo"
              className="w-16 h-10 object-contain filter invert"
            />
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center mb-4">
            <div className="w-32 h-40 rounded-2xl overflow-hidden shadow-lg bg-gray-600">
              <img
                src={profileimg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-1">
              Ahmed Mohamed
            </h1>
            <p className="text-indigo-200 text-base mb-1">title</p>
            <p className="text-indigo-200 text-base">Company</p>
          </div>
        </div>

        {/* White Contact Icons */}
        <div className="flex justify-center space-x-6 py-4">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <FaPhone className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <FaEnvelope className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <FaMapMarkerAlt className="w-6 h-6 text-indigo-600" />
          </div>
        </div>

        {/* About Me Section */}
        <div className="bg-indigo-600 rounded-3xl p-6 text-white shadow-2xl">
          <div className="text-center mb-4">
            <div className="inline-block bg-indigo-800 text-white text-3xl px-6 py-2 rounded-2xl font-semibold">
              About Me
            </div>
          </div>
          <p className="text-center text-sm leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          </p>

          {/* Call Me Button */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center bg-indigo-800 text-3xl px-6 py-3 rounded-2xl font-semibold">
              Call Me
              <FaPhone className="w-4 h-4 mr-2" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-end mx-auto space-y-3 w-1/2">
            <p className="text-lg font-semibold  text-black">Call Me</p>
            <p className="text-lg font-semibold">05064152216</p>
            <p className="text-lg font-semibold  text-black">Email</p>
            <p className="text-lg font-semibold">example@email.com</p>
          </div>

          {/* Links */}
          <div className="space-y-3 mt-6">
            <div className="bg-indigo-800 rounded-2xl py-3 px-4 flex items-center">
              <FaLink className="w-4 h-4 mr-3 flex-shrink-0" />
              <a
                href="https://www.examplelink.com"
                className="text-white text-sm truncate"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.examplelink.com
              </a>
            </div>
            <div className="bg-indigo-800 rounded-2xl py-3 px-4 flex items-center">
              <FaLink className="w-4 h-4 mr-3 flex-shrink-0" />
              <a
                href="https://www.examplelink.com"
                className="text-white text-sm truncate"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.examplelink.com
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 py-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <FaFacebook className="w-5 h-5 text-white" />
          </div>
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <FaTwitter className="w-5 h-5 text-white" />
          </div>
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <FaInstagram className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Rate Me Section */}
        <div className="text-center py-2">
          <p className="text-gray-600 text-sm mb-2">rate me</p>
          <div className="flex justify-center space-x-1">
            <FaStar className="w-6 h-6 text-yellow-400" />
            <FaStar className="w-6 h-6 text-yellow-400" />
            <FaStar className="w-6 h-6 text-yellow-400" />
            <FaStar className="w-6 h-6 text-yellow-400" />
            <FaStar className="w-6 h-6 text-yellow-400" />
          </div>
        </div>

        {/* Opening Hours */}
        <div className="bg-indigo-600 rounded-2xl p-4 text-white shadow-lg">
          <div className="text-center mb-3">
            <h3 className="font-semibold text-lg">Opening Hours</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-white text-black bg-opacity-10 rounded-lg p-2">
              <span className="text-sm">Monday</span>
              <span className="text-sm">1:00 AM - 2:00 AM</span>
            </div>
            <div className="flex justify-between items-center bg-white text-black bg-opacity-10 rounded-lg p-2">
              <span className="text-sm">Monday</span>
              <span className="text-sm">1:00 AM - 2:00 AM</span>
            </div>
          </div>
        </div>

        {/* Business Images */}
        <div className="space-y-3">
          <div className="w-full h-32 bg-gray-300 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={profileimg}
              alt="Business"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <div className="w-full h-32 bg-gray-300 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={profileimg}
              alt="Business"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Theme20;