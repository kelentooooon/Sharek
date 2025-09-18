import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLink } from "react-icons/fa";
import profileimg from "../assets/width_304.jpeg";


const Theme10 = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-sm">
        <div className="relative mb-25">
          <div className="w-full h-80 sm:h-96 overflow-hidden bg-gray-600">
            <img
              src={profileimg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-15 left-0 right-0">
            <div
              className="relative w-4/5  text-white px-6 py-4 "
              style={{
                borderBottom: "150px solid red",
                borderRight: "50px solid transparent",
              }}
            >
              <div className="flex flex-col absolute top-9">
                <h2 className="text-2xl sm:text-3xl leading-tight">Ahmed</h2>
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                  Mohamed
                </h2>

                <p className="text-black font-bold text-sm sm:text-base font-mediumbg-opacity-50 rounded">
                  title
                </p>
                <p className="text-black text-sm sm:text-base  bg-opacity-50 rounded mt-1">
                  Company
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            About Me
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-center mb-6">
            Description
          </p>
          <div className="w-20 h-0.5 bg-white mx-auto"></div>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            Contact Me
          </h2>

          <div className="space-y-8 text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Call Me
              </h3>
              <p className="text-gray-400 text-base sm:text-lg">05064152216</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Email
              </h3>
              <p className="text-gray-400 text-base sm:text-lg break-all">
                example@email.com
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Address
              </h3>
              <div className="text-gray-400 text-base sm:text-lg space-y-1">
                <p>street</p>
                <p>City, State, Zipcode</p>
                <p>Country</p>
              </div>
            </div>
          </div>

          <div className="w-20 h-0.5 bg-white mx-auto mt-8"></div>
        </div>
        <div className="pb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            Links
          </h2>

          <div className="space-y-6">
            <div className="flex items-center group">
              <FaLink className="text-white mr-4 text-xl group-hover:text-red-400 transition-colors duration-200" />
              <a
                href="https://www.examplelink.com"
                className="text-white hover:text-red-400 transition-colors duration-200 text-base sm:text-lg break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.examplelink.com
              </a>
            </div>

            <div className="flex items-center group">
              <FaLink className="text-white mr-4 text-xl group-hover:text-red-400 transition-colors duration-200" />
              <a
                href="#"
                className="text-white hover:text-red-400 transition-colors duration-200 text-base sm:text-lg"
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

export default Theme10;
