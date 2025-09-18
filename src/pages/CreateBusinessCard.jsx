import React, { useState } from "react";
import themeImg1 from "../assets/web design sharek.jpg";
import themeImg2 from "../assets/web design sharek2.jpg";
import { IoMdCheckmark } from "react-icons/io";
import ToggleSection from "./ToggleSection";

const CreateBusinessCard = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const buttons = [
    { id: 0, text: "التواصل" },
    { id: 1, text: "التصميم /الاعدادات" },
    { id: 2, text: "باركود" },
  ];

  // Sample theme data with placeholder images
  const themes = [
    { id: 1, image: themeImg1 },
    { id: 2, image: themeImg2 },
    { id: 3, image: themeImg1 },
    { id: 4, image: themeImg2 },
    { id: 5, image: themeImg1 },
    { id: 6, image: themeImg2 },
    { id: 7, image: themeImg1 },
    { id: 8, image: themeImg2 },
    { id: 9, image: themeImg1 },
    { id: 10, image: themeImg2 },
    { id: 11, image: themeImg1 },
    { id: 12, image: themeImg2 },
  ];

  // Number of slides to show
  const slidesToShow = 4;
  const totalSlides = Math.ceil(themes.length / slidesToShow);

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  // Previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 w-full">
        <div className="md:col-span-3 p-4 mx-auto mt-20 w-full flex flex-col items-center">
          <div className="flex bg-[#C9DAE2] text-blue-500 w-full max-w-md mb-6 rounded-full overflow-hidden">
            {buttons.map((button, index) => (
              <button
                key={button.id}
                className={`w-full py-4 text-base font-medium transition-all duration-300 
                                    ${index === 0 ? "rounded-r-full" : ""} 
                                    ${
                                      index === 1
                                        ? "border-x border-gray-400"
                                        : ""
                                    }
                                    ${
                                      index === buttons.length - 1
                                        ? "rounded-l-full"
                                        : ""
                                    }
                                    ${
                                      activeButton === button.id
                                        ? "bg-blue-500 text-white shadow-md"
                                        : "hover:bg-blue-400 hover:text-white"
                                    }`}
                onClick={() => setActiveButton(button.id)}
              >
                {button.text}
              </button>
            ))}
          </div>
          {/* Dots Indicator */}
          <div className="flex justify-center my-8 space-x-8">
            {buttons.map((button) => (
              <span
                key={button.id}
                onClick={() => setActiveButton(button.id)}
                className={`h-2 w-2 rounded-full transition-all duration-300 
                                    ${
                                      activeButton === button.id
                                        ? "bg-blue-500 w-4"
                                        : "bg-gray-300 hover:bg-blue-400"
                                    }`}
              ></span>
            ))}
          </div>
          {/* Content */}
          <div className="w-full bg-white p-6 mt-7">
            {activeButton === 0 && (
              <div className="w-full">
                {/* Theme selection slider */}
                <div className="relative w-full overflow-hidden">
                  {/* Navigation arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#1D79CF]  rounded-full p-2 shadow-md hover:bg-[#1a6bc5]  transition-all duration-300"
                    araia-label="Previous slide"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#1D79CF] rounded-full p-2 shadow-md hover:bg-[#1a6bc5]  transition-all duration-300"
                    aria-label="Next slide"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* Theme thumbnails */}
                  <div className="overflow-hidden relative w-full">
                    <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{
                        transform: `translateX(${
                          (currentSlide * 100) / totalSlides
                        }%)`,
                        width: `${totalSlides * 100}%`,
                      }}
                    >
                      {Array.from({ length: totalSlides }).map(
                        (_, slideIndex) => {
                          const start = slideIndex * slidesToShow;
                          const slideItems = themes.slice(
                            start,
                            start + slidesToShow
                          );
                          return (
                            <div
                              key={slideIndex}
                              className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5 w-full"
                              style={{ width: `${100 / totalSlides}%` }}
                            >
                              {slideItems.map((theme) => (
                                <div
                                  key={theme.id}
                                  className="cursor-pointer rounded-lg overflow-hidden shadow-md transition-all duration-300 relative 
                                                     hover:shadow-lg
                                                    "
                                  onClick={() => setSelectedTheme(theme.id)}
                                >
                                  <div className="h-60 bg-gray-200 overflow-hidden relative">
                                    <img
                                      src={theme.image}
                                      alt={theme.name}
                                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                                    />
                                    {/* Overlay and check mark for selected theme */}
                                    {selectedTheme === theme.id && (
                                      <div className="absolute inset-0 bg-[#33333394] bg-opacity-40 flex items-center justify-center">
                                        <div className="bg-white rounded-full p-1">
                                          <IoMdCheckmark className="text-blue-500 text-2xl" />
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>

                  {/* Slider indicators */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentSlide === index
                            ? "bg-blue-500 w-6"
                            : "bg-gray-300 w-2 hover:bg-gray-400"
                        }`}
                      ></button>
                    ))}
                  </div>
                </div>
                {/* Toggle and draggable section */}
                <ToggleSection />
              </div>
            )}

            {activeButton === 1 && (
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  التصميم والإعدادات
                </h3>
                <p className="text-gray-600">
                  هنا يمكنك تخصيص التصميم والإعدادات
                </p>
              </div>
            )}

            {activeButton === 2 && (
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  الباركود
                </h3>
                <p className="text-gray-600">هنا يمكنك إنشاء وإدارة الباركود</p>
              </div>
            )}
          </div>
        </div>
        <div className="md:col-span-1 bg-[#F7FAFA] p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            معاينة البطاقة
          </h3>
          <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
            {selectedTheme ? (
              <div className="flex flex-col items-center">
                <div className="w-full h-48 bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src={themes.find((t) => t.id === selectedTheme)?.image}
                    alt="Selected theme"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-3 text-gray-700">
                  {themes.find((t) => t.id === selectedTheme)?.name}
                </p>
                <button
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={() => console.log("Theme confirmed:", selectedTheme)}
                >
                  تأكيد الاختيار
                </button>
              </div>
            ) : (
              <p className="text-gray-600 text-center">
                لم يتم اختيار تصميم بعد
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBusinessCard;
