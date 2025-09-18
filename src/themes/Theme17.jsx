import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLink } from "react-icons/fa";
import profileimg from "../assets/width_304.jpeg";


const Theme17 = () => {
    return (
        <div className="min-h-screen flex justify-center items-center font-sans">
            <div className="w-full max-w-sm sm:max-w-md bg-black">
                <div className="relative mb-22">
                    <div className="w-full h-86 sm:h-96 overflow-hidden bg-gray-600">
                        <img
                            src={profileimg}
                            alt="Profile"
                            className="w-full h-full object-cove opacity-80"
                        />
                        <div className="absolute inset-0 bg-black"
                            style={{ clipPath: 'polygon(0 60%, 100% 100%, 100% 100%, 0% 100%)' }}
                        ></div>

                    </div>
                    <div className="absolute -bottom-15 left-15 text-white">
                        <div className="-space-y-2">
                            <h2 className="text-2xl sm:text-3xl leading-tight">Ahmed</h2>
                            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">Mohamed</h2>
                        </div>
                        <p className="font-bold text-sm sm:text-base font-mediumbg-opacity-50 mt-1">
                            title
                        </p>
                        <p className="font-medium text-sm sm:text-base mt-1">
                            Company
                        </p>
                    </div>
                </div>
                {/* About Me Section */}
                <div className="w-48 h-50 sm:w-62 sm:h-60 relative ml-auto bg-[#191919] text-white p-6 rounded-md mb-6 shadow-lg mr-8">
                    <span className="absolute text-green-400 text-8xl -top-9 left-3">❝</span>
                    <div className="mb-4 text-center">
                        <h2 className="text-xl sm:text-2xl font-bold">About Me</h2>
                        <p className="text-gray-300 text-base sm:text-md">Description</p>
                    </div>
                </div>
                {/* Contact Me Section */}
                <div className="flex mb-6 overflow-hidden ml-8">
                    <div className="w-2/5 p-3 sm:p-6 text-white bg-[#191919] rounded-md shadow-lg">
                        <div className="mb-8 flex items-center">
                            <FaPhone className="mr-1 sm:mr-2" />
                            <span className="text-base sm:text-lg font-semibold">Call Me</span>
                        </div>
                        <div className="mb-8 flex items-center">
                            <FaEnvelope className="mr-1 sm:mr-2" />
                            <span className="text-base sm:text-lg font-semibold">Email</span>
                        </div>
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="mr-1 sm:mr-2" />
                            <span className="text-base sm:text-lg font-semibold">Address</span>
                        </div>
                    </div>
                    <div className="w-3/5 p-3 sm:p-6">
                        <div className="mb-8">
                            <p className="text-white text-base sm:text-lg font-normal">05064152216</p>
                        </div>
                        <div className="mb-8">
                            <p className="text-white text-base sm:text-lg font-normal break-all">
                                example@email.com
                            </p>
                        </div>
                        <div>
                            <div className="text-white text-base sm:text-lg font-normal space-y-1">
                                <p>street</p>
                                <p>City, State, Zipcode</p>
                                <p>Country</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Links Section */}
                <div className="py-5 mb-8 bg-[#191919] rounded-md mx-8 shadow-lg">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
                        Links
                    </h2>

                    <div className="space-y-6 px-6">
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

export default Theme17;
