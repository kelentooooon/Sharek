import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLink } from "react-icons/fa";
import profileimg from "../assets/width_304.jpeg";


const Theme5 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 via-gray-900 to-blue-700 flex justify-center items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-6">
            <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-white ring-opacity-20 shadow-2xl">
              <img 
                src={profileimg} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Ahmed Mohamed
          </h1>
          <p className="text-blue-200 text-base sm:text-lg mb-1">title</p>
          <p className="text-blue-200 text-base sm:text-lg">Company</p>
        </div>
        <div className=" bg-white/[var(--bg-opacity)] [--bg-opacity:50%] rounded-3xl p-6 sm:p-8 border-0 border-opacity-20 shadow-xl">
          <h2 className="text-xl opacity-100 sm:text-2xl font-bold text-white mb-4 text-center">
            About Me
          </h2>
          <div className="w-12 h-0.5 bg-white opacity-100 mx-auto mb-6"></div>
          <p className="text-white text-sm sm:text-base leading-relaxed text-center">
            Description
          </p>
        </div>
        <div className="backdrop-blur-md bg-white/[var(--bg-opacity)] [--bg-opacity:50%] rounded-3xl p-6 sm:p-8 border-0 border-opacity-20 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
            Contact Me
          </h2>
          <div className="w-16 h-0.5 bg-white bg-opacity-60 mx-auto mb-8"></div>
          
          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center">
                <FaPhone className="mr-3 text-blue-200 text-base" />
                Call Me
              </h3>
              <p className="text-white text-sm sm:text-base ml-7">05064152216</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center">
                <FaEnvelope className="mr-3 text-blue-200 text-base" />
                Email
              </h3>
              <p className="text-white text-sm sm:text-base ml-7 break-all">example@email.com</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-3 text-blue-200 text-base" />
                Address
              </h3>
              <div className="ml-7 text-white text-sm sm:text-base space-y-1">
                <p>street</p>
                <p>City, State, Zipcode</p>
                <p>Country</p>
              </div>
            </div>
          </div>
        </div>
        <div className="backdrop-blur-md bg-white/[var(--bg-opacity)] [--bg-opacity:50%] rounded-3xl p-6 sm:p-8 border-0 border-opacity-20 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 text-center">
            Links
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center p-3 rounded-xl  transition-all duration-200 group">
              <FaLink className="mr-4 text-lg text-white" />
              <a
                href="https://www.examplelink.com"
                className="text-white text-sm sm:text-base break-all"
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

export default Theme5;
