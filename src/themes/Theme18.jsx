import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLink } from "react-icons/fa";
import profileimg from "../../src/assets/width_304.jpeg";


const Theme18 = () => {
    return (
        <div className="min-h-screen flex justify-center items-center font-sans">
            <div className="w-full max-w-sm"
                style={{background: 'radial-gradient(rgba(3, 20, 19, 1) 0%, rgba(50, 77, 77, 1) 89%)'}}>
                <div className="relative mb-16">
                    <div className="w-full h-86 sm:h-96 overflow-hidden bg-gray-600">
                        <img
                            src={profileimg}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 ">
                        <div className="bg-gradient-to-b from-transparent to-[#324D4D] p-4 text-white">
                            <div className="space-y-1">
                                <h2 className="text-2xl sm:text-3xl leading-tight">Ahmed</h2>
                                <h2 className="text-2xl sm:text-3xl font-bold leading-tight">Mohamed</h2>
                            </div>

                            <p className="font-bold text-sm sm:text-base font-mediumbg-opacity-50">
                                title
                            </p>
                            <p className="font-medium text-sm sm:text-base mt-1">
                                Company
                            </p>
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

                    <div className="space-y-8 px-6 text-left">
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

export default Theme18;
