import React from "react";
import { FaLink, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import profileimg from "../../assets/width_304.jpeg";

const Theme1 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 max-w-sm w-full text-center">
        <div className="mb-8 sm:mb-10">
          <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden mx-auto mb-4 sm:mb-6 ring-4 ring-slate-100">
            <img
              src={profileimg}
              alt="Profile"
              className="w-full h-full rounded-full object-contain"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 leading-tight">
            Ahmed Mohamed
          </h1>
          <p className="text-gray-500 font-medium mb-1 text-sm sm:text-base">
            title
          </p>
          <p className="text-gray-500 font-medium mb-5 text-sm sm:text-base">
            Company
          </p>
        </div>
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-4 sm:p-6 mb-5 text-left shadow-sm hover:shadow-md transition-shadow duration-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 text-center border-b-2 border-slate-200 pb-2">
            About Me
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center">
            Description
          </p>
        </div>
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-4 sm:p-6 mb-5 text-left shadow-sm hover:shadow-md transition-shadow duration-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 text-center border-b-2 border-slate-200 pb-2">
            Contact Me
          </h2>
          <div className="mb-4 sm:mb-5">
            <div className="flex items-center mb-2">
              <FaPhone className="text-indigo-500 mr-3 text-sm sm:text-base" />
              <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                Call Me
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 ml-6 sm:ml-7">
              05064152216
            </p>
          </div>

          <div className="mb-4 sm:mb-5">
            <div className="flex items-center mb-2">
              <FaEnvelope className="text-indigo-500 mr-3 text-sm sm:text-base" />
              <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                Email
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 ml-6 sm:ml-7 break-all">
              example@email.com
            </p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-indigo-500 mr-3 text-sm sm:text-base" />
              <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                Address
              </h3>
            </div>
            <div className="ml-6 sm:ml-7 text-xs sm:text-sm text-gray-600">
              <p className="mb-0.5">street</p>
              <p className="text-gray-500">City, State, Zipcode</p>
              <p className="text-gray-500">Country</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 text-center border-b-2 border-slate-200 pb-2">
            Links
          </h2>

          <div className="space-y-3">
            <div className="flex items-center p-3 bg-white rounded-lg hover:bg-slate-100 hover:shadow-sm transition-all duration-200 group">
              <FaLink className="text-sm sm:text-base mr-3 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
              <a
                href="https://www.examplelink.com"
                className="text-indigo-500 text-xs sm:text-sm break-all hover:text-indigo-600 hover:underline transition-colors flex-1"
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

export default Theme1;
