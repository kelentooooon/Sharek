import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLink } from "react-icons/fa";
import profileimg from "../assets/width_304.jpeg";

import bgImage from '../assets/bgfortheme2.jpg';

const Theme20 = () => {
    return (
        <div className="min-h-screen flex justify-center items-center font-sans">
            <div className="w-full max-w-sm bg-black">
                <div className="relative mb-16">
                    <div className="w-full h-66 sm:h-76 overflow-hidden bg-gray-600">
                        <img
                            src={bgImage}
                            alt="background Image"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black"
                            style={{ clipPath: 'polygon(0px 35%, 220% 100%, 100% 71%, 0% 71%)' }}
                        ></div>
                    </div>
                    <div className="absolute bottom-17 left-1/2 transform -translate-1/2 rounded-full overflow-hidden">
                        <img src={profileimg} alt="profile" className="w-30 sm:w-40 h-30 sm:h-40 rounded-full mx-auto object-cover" />
                    </div>
                    <div className="p-4 pt-0 text-white text-center">
                        <div className="-space-y-3">
                            <h2 className="text-2xl sm:text-3xl leading-tight">Ahmed</h2>
                            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">Mohamed</h2>
                        </div>

                    <p className="font-bold text-sm sm:text-base bg-white text-[#3F3F3F] w-fit mx-auto px-2 font-mediumbg-opacity-50">
                            title
                        </p>
                        <p className="font-medium text-sm sm:text-base mt-1">
                            Company
                        </p>
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

export default Theme20;
