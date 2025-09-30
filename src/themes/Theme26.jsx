import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLink,
  FaMobileAlt,
} from "react-icons/fa";
import profileimg from "../assets/width_304.jpeg";
import shareLogo from "../assets/BlackLogo.png";

const Theme26 = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center font-sans">
      {/* Logo Header */}
      <div className="absolute py-40 text-center bg-white w-full right-0 left-0 top-0">
        <div className="flex justify-center items-center relative -top-20">
          <img
            src={shareLogo}
            alt="Sharek Logo"
            className="w-40 h-20 object-contain "
          />
        </div>
      </div>
      <div className="w-full max-w-sm z-10 pt-50 px-6">
        {/* Rounded Profile Image */}
        <div className="text-center mb-8">
          <div className="w-72 h-96 mx-auto rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl bg-gray-600">
            <img
              src={profileimg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-left mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-pink-500 mb-2">
            Ahmed Mohamed
          </h1>
          <p className="text-pink-400 text-lg mb-1">title</p>
          <p className="text-pink-400 text-lg">Company</p>
        </div>

        {/* Pink Contact Icons Row */}
        <div className="flex justify-center space-x-6 mb-8">
          <div className="w-16 h-16 bg-pink-500 rounded-tl-[30px] rounded-br-[30px] flex items-center justify-center shadow-lg">
            <FaPhone className="w-8 h-8 text-white" />
          </div>
          <div className="w-16 h-16 bg-pink-500 rounded-tl-[30px] rounded-br-[30px] flex items-center justify-center shadow-lg">
            <FaEnvelope className="w-8 h-8 text-white" />
          </div>
          <div className="w-16 h-16 bg-pink-500 rounded-tl-[30px] rounded-br-[30px] flex items-center justify-center shadow-lg">
            <FaMapMarkerAlt className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Pink About Me Button */}
        <div className="text-center mb-8">
          <div className="inline-block bg-pink-500 text-white px-8 py-4 rounded-tr-[40px] rounded-bl-[40px] font-bold text-xl shadow-lg">
            About Me
          </div>
        </div>

        {/* About Text */}
        <div className="text-center mb-8">
          <p className="text-white text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          </p>
        </div>

        {/* Pink Call Me Button */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-pink-500 text-white px-6 py-3 rounded-tr-[40px] rounded-bl-[40px] font-bold text-lg shadow-lg">
            <FaMobileAlt className="w-6 h-6 mr-3" />
            Call Me
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6 mb-8 text-center">
          {/* Call Me */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-pink-500 mb-2">
              Call Me
            </h3>
            <p className="text-white text-lg">05064152216</p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-pink-500 mb-2">
              Email
            </h3>
            <p className="text-white text-lg break-all">example@email.com</p>
          </div>
        </div>

        {/* Pink Links Section */}
        <div className="space-y-4">
          <div className="bg-pink-500 rounded-tr-[40px] rounded-bl-[40px] py-4 px-6 flex items-center shadow-lg">
            <FaLink className="w-5 h-5 text-white mr-3 flex-shrink-0" />
            <a
              href="https://www.examplelink.com"
              className="text-white text-sm font-medium truncate"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.examplelink.com
            </a>
          </div>
          <div className="bg-pink-500 rounded-tr-[40px] rounded-bl-[40px] py-4 px-6 flex items-center shadow-lg">
            <FaLink className="w-5 h-5 text-white mr-3 flex-shrink-0" />
            <a
              href="https://www.examplelink.com"
              className="text-white text-sm font-medium truncate"
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

export default Theme26;
