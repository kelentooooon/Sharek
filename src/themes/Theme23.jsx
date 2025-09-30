import React from "react";
import { FaPhone, FaEnvelope, FaComments, FaMapMarkerAlt, FaLink } from "react-icons/fa";
import profileimg from "../assets/width_304.jpeg";
import shareLogo from "../assets/BlackLogo.png";

const Theme23 = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4 font-sans">
      <div className="w-full max-w-sm">
        {/* Green Logo Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-8">
            <div className="text-green-500">
                <img src={shareLogo} alt="Share Logo" className="w-32 h-10 " />
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="text-center mb-6">
          <div className="w-48 h-60 mx-auto rounded-3xl overflow-hidden shadow-lg bg-gray-300">
            <img
              src={profileimg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Green Contact Icons Row */}
        <div className="flex justify-center space-x-6 mb-6">
          <div className="w-12 h-12 text-green-500">
            <FaPhone className="w-full h-full" />
          </div>
          <div className="w-12 h-12 text-green-500">
            <FaEnvelope className="w-full h-full" />
          </div>
          <div className="w-12 h-12 text-green-500">
            <FaComments className="w-full h-full" />
          </div>
          <div className="w-12 h-12 text-green-500">
            <FaMapMarkerAlt className="w-full h-full" />
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-500 mb-2">
            Ahmed
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold text-green-500 mb-4">
            Mohamed
          </h2>
          <p className="text-green-600 text-lg mb-2">title</p>
          <p className="text-green-600 text-lg">Company</p>
        </div>

        {/* Green About Me Section */}
        <div className="bg-green-500 rounded-3xl p-6 mb-8 text-white">
          <div className="text-center mb-4">
            <div className="inline-block bg-white text-green-500 px-6 py-2 rounded-full font-semibold">
              About Me
            </div>
          </div>
          <p className="text-center text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-6 mb-8 text-center">
          {/* Call Me */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-green-500 mb-2">
              Call Me
            </h3>
            <p className="text-green-600 text-lg">05064152216</p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-green-500 mb-2">
              Email
            </h3>
            <p className="text-green-600 text-lg break-all">example@email.com</p>
          </div>

          {/* Address */}
          <div>
            <div className="text-green-600 text-base space-y-1">
              <p>street</p>
              <p>City, State, Zipcode</p>
              <p>Country</p>
            </div>
          </div>
        </div>

        {/* Green Links Section */}
        <div className="space-y-4">
          <div className="bg-green-500 rounded-full py-4 px-6 flex items-center shadow-lg">
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
          <div className="bg-green-500 rounded-full py-4 px-6 flex items-center shadow-lg">
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

export default Theme23;