import React, { useState } from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import { FaEye, FaCheck, FaPalette } from "react-icons/fa";

// Import all theme components
import Theme1 from "../../themes/Theme1";
import Theme2 from "../../themes/Theme2";
import Theme3 from "../../themes/Theme3";
import Theme4 from "../../themes/Theme4";
import Theme5 from "../../themes/Theme5";
import Theme6 from "../../themes/Theme6";
import Theme7 from "../../themes/Theme7";
import Theme8 from "../../themes/Theme8";
import Theme9 from "../../themes/Theme9";
import Theme10 from "../../themes/Theme10";
import Theme11 from "../../themes/Theme11";
import Theme12 from "../../themes/Theme12";
import Theme13 from "../../themes/Theme13";
import Theme14 from "../../themes/Theme14";
import Theme15 from "../../themes/Theme15";
import Theme16 from "../../themes/Theme16";
import Theme17 from "../../themes/Theme17";
import Theme18 from "../../themes/Theme18";
import Theme19 from "../../themes/Theme19";
import Theme20 from "../../themes/Theme20";

const TestTemes = () => {
  const [selectedTheme, setSelectedTheme] = useState("Theme1");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'preview'

  // Map theme names to components
  const themeComponents = {
    Theme1: Theme1,
    Theme2: Theme2,
    Theme3: Theme3,
    Theme4: Theme4,
    Theme5: Theme5,
    Theme6: Theme6,
    Theme7: Theme7,
    Theme8: Theme8,
    Theme9: Theme9,
    Theme10: Theme10,
    Theme11: Theme11,
    Theme12: Theme12,
    Theme13: Theme13,
    Theme14: Theme14,
    Theme15: Theme15,
    Theme16: Theme16,
    Theme17: Theme17,
    Theme18: Theme18,
    Theme19: Theme19,
    Theme20: Theme20,
  };

  // Theme metadata for better presentation
  const themeMetadata = {
    Theme1: {
      name: "قالب كلاسيكي",
      description: "تصميم أنيق وبسيط",
      color: "from-slate-50 to-blue-100",
    },
    Theme2: {
      name: "قالب عصري",
      description: "تصميم داكن وحديث",
      color: "from-black to-gray-800",
    },
    Theme3: {
      name: "قالب احترافي",
      description: "مناسب للأعمال",
      color: "from-blue-50 to-indigo-100",
    },
    Theme4: {
      name: "قالب ناعم",
      description: "ألوان هادئة",
      color: "from-green-50 to-teal-100",
    },
    Theme5: {
      name: "قالب دافئ",
      description: "ألوان دافئة",
      color: "from-orange-50 to-red-100",
    },
    Theme6: {
      name: "قالب بارد",
      description: "ألوان باردة",
      color: "from-cyan-50 to-blue-100",
    },
    Theme7: {
      name: "قالب عملي",
      description: "للاستخدام اليومي",
      color: "from-amber-50 to-yellow-100",
    },
    Theme8: {
      name: "قالب أنيق",
      description: "تصميم راقي",
      color: "from-rose-50 to-pink-100",
    },
    Theme9: {
      name: "قالب حديث",
      description: "مواكب للعصر",
      color: "from-emerald-50 to-green-100",
    },
    Theme10: {
      name: "قالب مبتكر",
      description: "تصميم إبداعي",
      color: "from-sky-50 to-cyan-100",
    },
    Theme11: {
      name: "قالب مميز",
      description: "يلفت الأنظار",
      color: "from-indigo-50 to-blue-100",
    },
    Theme12: {
      name: "قالب فاخر",
      description: "للمناسبات الخاصة",
      color: "from-purple-50 to-violet-100",
    },
    Theme13: {
      name: "قالب جذاب",
      description: "تصميم لافت",
      color: "from-pink-50 to-rose-100",
    },
    Theme14: {
      name: "قالب شارك الأزرق",
      description: "تصميم شارك المميز",
      color: "from-gray-100 to-blue-600",
    },
    Theme15: {
      name: "قالب جالاكسي",
      description: "تصميم مستقبلي بالتدرجات",
      color: "from-purple-900 to-blue-900",
    },
    Theme16: {
      name: "قالب شارك الأخضر",
      description: "تصميم أخضر منعش",
      color: "from-green-50 to-green-500",
    },
    Theme17: {
      name: "قالب سايان",
      description: "تصميم أسود وفيروزي",
      color: "from-black to-cyan-500",
    },
    Theme18: {
      name: "قالب ليموني",
      description: "تصميم رمادي وليموني",
      color: "from-gray-800 to-lime-400",
    },
    Theme19: {
      name: "قالب وردي",
      description: "تصميم أسود ووردي",
      color: "from-black to-pink-500",
    },
    Theme20: {
      name: "قالب الأعمال",
      description: "قالب شامل للأعمال",
      color: "from-indigo-600 to-indigo-800",
    },
  };

  const SelectedThemeComponent = themeComponents[selectedTheme];

  const handleThemeSelect = (themeName) => {
    setSelectedTheme(themeName);
    if (window.innerWidth < 1024) {
      setViewMode("preview");
    }
  };

  return (
    <DashboardLayout activeItem="testthemes">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaPalette className="text-2xl text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">معاينة القوالب</h1>
          </div>
          <p className="text-gray-600 mb-6">
            اختر من مجموعة واسعة من القوالب المصممة خصيصاً لبطاقات الأعمال
            الرقمية
          </p>

          {/* View Mode Toggle */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === "grid"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              عرض الشبكة
            </button>
            <button
              onClick={() => setViewMode("preview")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === "preview"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              معاينة مفصلة
            </button>
          </div>
        </div>

        {viewMode === "grid" ? (
          // Grid View - Show all themes in a grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.keys(themeComponents).map((themeName) => {
              const metadata = themeMetadata[themeName];
              const isSelected = selectedTheme === themeName;

              return (
                <div
                  key={themeName}
                  className={`relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-xl ${
                    isSelected ? "ring-4 ring-blue-500 ring-opacity-50" : ""
                  }`}
                  onClick={() => handleThemeSelect(themeName)}
                >
                  {/* Theme Preview */}
                  <div
                    className={`h-48 bg-gradient-to-br ${metadata.color} p-4 flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="transform scale-50 origin-center">
                      <div className="bg-white rounded-lg shadow-sm p-3 max-w-xs">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                          <div>
                            <div className="w-16 h-2 bg-gray-300 rounded mb-1"></div>
                            <div className="w-12 h-2 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="w-full h-2 bg-gray-200 rounded"></div>
                          <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                          <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Selected Badge */}
                    {isSelected && (
                      <div className="absolute top-2 left-2 bg-blue-600 text-white p-2 rounded-full">
                        <FaCheck className="w-3 h-3" />
                      </div>
                    )}

                    {/* Preview Button */}
                    <div className="absolute bottom-2 right-2 bg-white bg-opacity-90 p-2 rounded-full">
                      <FaEye className="w-3 h-3 text-gray-600" />
                    </div>
                  </div>

                  {/* Theme Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-1">
                      {metadata.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {metadata.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-blue-600 font-medium">
                        {themeName}
                      </span>
                      {isSelected && (
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          محدد
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Preview View - Show selected theme with sidebar
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Theme Selector Sidebar */}
            <div className="w-full lg:w-80 bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                اختر القالب
              </h2>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {Object.keys(themeComponents).map((themeName) => {
                  const metadata = themeMetadata[themeName];
                  const isSelected = selectedTheme === themeName;

                  return (
                    <button
                      key={themeName}
                      onClick={() => setSelectedTheme(themeName)}
                      className={`w-full p-3 rounded-lg text-right transition-colors ${
                        isSelected
                          ? "bg-blue-600 text-white"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{metadata.name}</div>
                          <div
                            className={`text-sm ${
                              isSelected ? "text-blue-100" : "text-gray-500"
                            }`}
                          >
                            {themeName}
                          </div>
                        </div>
                        {isSelected && <FaCheck className="text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Theme Preview */}
            <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {themeMetadata[selectedTheme].name}
                    </h2>
                    <p className="text-gray-600">
                      {themeMetadata[selectedTheme].description}
                    </p>
                  </div>
                  <div className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                    {selectedTheme}
                  </div>
                </div>
              </div>

              {/* Live Theme Preview */}
              <div className="p-6 bg-gray-50">
                <div className="transform origin-top scale-75 lg:scale-100">
                  {SelectedThemeComponent && <SelectedThemeComponent />}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default TestTemes;
