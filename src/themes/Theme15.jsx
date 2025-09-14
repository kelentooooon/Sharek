import React from "react";
import { FaLink } from "react-icons/fa";
import profileimg from "../../src/assets/width_304.jpeg";

import bgImage from '../../assets/bgfortheme2.jpg';

const Theme15 = () => {
    return (
        <div className="min-h-screen flex justify-center items-center font-sans">
            <div className="w-full max-w-sm bg-[#0F2D44]">
                <div className="relative mb-16">
                    <div className="w-full h-86 sm:h-96 overflow-hidden bg-gray-600">
                        <img
                            src={bgImage}
                            alt="background Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 ">
                        <img src={profileimg} alt="profile" className="w-30 sm:w-35 h-30 sm:h-35 rounded-full mx-auto object-cover" />
                        <div className="bg-gradient-to-b from-transparent to-[#0F2D44] p-4 text-white">
                            <div className="-space-y-3">
                                <h2 className="text-2xl sm:text-3xl leading-tight">Ahmed</h2>
                                <h2 className="text-2xl sm:text-3xl font-bold leading-tight">Mohamed</h2>
                            </div>
                            <p className="font-bold text-[#0F2D44] bg-white  text-sm sm:text-base font-mediumbg-opacity-50 w-fit px-2">
                                title
                            </p>
                            <p className="font-medium text-sm sm:text-base mt-1">
                                Company
                            </p>
                        </div>
                    </div>
                </div>
                {/* About me */}
                <div className="mb-8 bg-white mx-4 p-4 rounded-2xl shadow-md">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#3F3F3F] mb-4 mx-auto border-b-2 border-gray-500 w-fit">
                        About Me
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-center mb-6">
                        Description
                    </p>
                </div>
                {/* Contact Me */}
                <div className="mb-8 bg-white mx-4 p-4 rounded-2xl shadow-md">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#3F3F3F] mb-4 mx-auto border-b-2 border-gray-500 w-fit">
                        Contact Me
                    </h2>

                    <div className="space-y-4 py-4 px-3 sm:px-6 text-left">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#3F3F3F]">
                                Call Me
                            </h3>
                            <p className="text-gray-400 text-base sm:text-lg">05064152216</p>
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#3F3F3F]">
                                Email
                            </h3>
                            <p className="text-gray-400 text-base sm:text-lg break-all">
                                example@email.com
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#3F3F3F]">
                                Address
                            </h3>
                            <div className="text-gray-400 text-base sm:text-lg -space-y-1">
                                <p>street</p>
                                <p>City, State, Zipcode</p>
                                <p>Country</p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Links */}
                <div className="mb-8 bg-white mx-4 p-4 rounded-2xl shadow-md">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#3F3F3F] mb-4 mx-auto border-b-2 border-gray-500 w-fit">
                        Links
                    </h2>

                    <div className="space-y-6 px-3 sm:px-6">
                        <div className="flex items-center group">
                            <FaLink className="text-[#3F3F3F] mr-4 text-xl group-hover:text-red-400 transition-colors duration-200" />
                            <a
                                href="https://www.examplelink.com"
                                className="text-[#3F3F3F] hover:text-red-400 transition-colors duration-200 text-base sm:text-lg break-all"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://www.examplelink.com
                            </a>
                        </div>

                        <div className="flex items-center group">
                            <FaLink className="text-[#3F3F3F] mr-4 text-xl group-hover:text-red-400 transition-colors duration-200" />
                            <a
                                href="#"
                                className="text-[#3F3F3F] hover:text-red-400 transition-colors duration-200 text-base sm:text-lg"
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

export default Theme15;
