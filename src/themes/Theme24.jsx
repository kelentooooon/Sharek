import React from "react";
import { FaPhone, FaEnvelope, FaComments, FaMapMarkerAlt, FaLink } from "react-icons/fa";
import profileimg from "../assets/width_304.jpeg";
import shareLogo from "../assets/BlackLogo.png";

const Theme24 = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center font-sans relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute top-30 right-30 w-96 h-96 bg-white rounded-full transform translate-x-48 -translate-y-48">        
        {/* Logo Header */}
        <div className="absolute bottom-25 left-15 w-50 text-center z-100">
          <div className="flex justify-center items-center mb-8">
            <img
              src={shareLogo}
              alt="Sharek Logo"
              className="w-50 h-20 object-contain"
            />
          </div>
        </div>
    </div>
     
      
      <div className="w-full max-w-sm relative z-10 pt-50">
        {/* Circular Profile Image */}
        <div className="text-center mb-8">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl bg-gray-600 border-4 border-white">
            <img
              src={profileimg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-2">
            Ahmed
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-4">
            Mohamed
          </h2>
          <p className="text-cyan-300 text-lg mb-2">title</p>
          <p className="text-cyan-300 text-lg">Company</p>
        </div>

        {/* White Contact Icons Row */}
        <div className="flex justify-center space-x-6 mb-8">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <FaPhone className="w-8 h-8 text-black" />
          </div>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <FaEnvelope className="w-8 h-8 text-black" />
          </div>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <FaComments className="w-8 h-8 text-black" />
          </div>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <FaMapMarkerAlt className="w-8 h-8 text-black" />
          </div>
        </div>

        {/* Cyan About Me Circle */}
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto bg-cyan-400 rounded-full flex items-center justify-center shadow-2xl mb-6">
            <h2 className="text-2xl font-bold text-white">
              About Me
            </h2>
          </div>
          <p className="text-white text-sm sm:text-base leading-relaxed px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-8 mb-8 text-center">
          {/* Email */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">
              Email
            </h3>
            <p className="text-cyan-300 text-lg break-all">example@email.com</p>
          </div>
        </div>

        {/* Cyan Links Section */}
        <div className="bg-cyan-400 rounded-t-3xl p-6 -mx-4 space-y-4">
          <div className="flex items-center justify-center py-4">
            <FaLink className="w-6 h-6 text-white mr-3" />
            <a
              href="https://www.examplelink.com"
              className="text-white text-lg font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.examplelink.com
            </a>
          </div>
          <div className="flex items-center justify-center py-4">
            <FaLink className="w-6 h-6 text-white mr-3" />
            <a
              href="https://www.examplelink.com"
              className="text-white text-lg font-medium"
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

export default Theme24;