import React, { useState, useCallback } from 'react';
import { RiUploadCloud2Line } from 'react-icons/ri';
import { SectionHeader, ToggleSwitch } from './ToggleSection';

// Import background images
import bg_page_1 from '../assets/bg_page_1.webp';
import bg_page_2 from '../assets/bg_page_2.webp';
import bg_page_3 from '../assets/bg_page_3.webp';
import bg_page_4 from '../assets/bg_page_4.webp';
import bg_page_5 from '../assets/bg_page_5.webp';
import bg_page_6 from '../assets/bg_page_6.webp';
import bg_page_7 from '../assets/bg_page_7.webp';
import bg_page_8 from '../assets/bg_page_8.webp';
import bg_page_9 from '../assets/bg_page_9.webp';
import bg_page_10 from '../assets/bg_page_10.webp';
import bg_page_11 from '../assets/bg_page_11.webp';
import bg_page_12 from '../assets/bg_page_12.webp';
import { FaTimes } from 'react-icons/fa';

// Constants
const BACKGROUND_IMAGES = [
    bg_page_1, bg_page_2, bg_page_3, bg_page_4, bg_page_5, bg_page_6,
    bg_page_7, bg_page_8, bg_page_9, bg_page_10, bg_page_11, bg_page_12
];

const DEFAULT_COLOR = [
    {
        id: 1,
        primaryColor: '#517AFA',
        secondaryColor: '#C5FEFF',
        primaryProfileTextColor: '#061244',
        secondaryProfileTextColor: '#76839B',
        primaryTextColor: '#061244',
        secondaryTextColor: '#76839B',
    },
    {
        id: 2,
        primaryColor: '#374793',
        secondaryColor: '#C5FEFF',
        primaryProfileTextColor: '#061244',
        secondaryProfileTextColor: '#76839B',
        primaryTextColor: '#061244',
        secondaryTextColor: '#76839B',
    },
    {
        id: 3,
        primaryColor: '#D51A47',
        secondaryColor: '#FFB1DB',
        primaryProfileTextColor: '#061244',
        secondaryProfileTextColor: '#76839B',
        primaryTextColor: '#061244',
        secondaryTextColor: '#76839B',
    },
    {
        id: 4,
        primaryColor: '#FF8F03',
        secondaryColor: '#FFD5A1',
        primaryProfileTextColor: '#432806',
        secondaryProfileTextColor: '#805F37',
        primaryTextColor: '#432806',
        secondaryTextColor: '#805F37',
    },
    {
        id: 5,
        primaryColor: '#805F37',
        secondaryColor: '#CCFFAC',
        primaryProfileTextColor: '#1C380A',
        secondaryProfileTextColor: '#485540',
        primaryTextColor: '#1C380A',
        secondaryTextColor: '#485540',
    },
    {
        id: 6,
        primaryColor: '#469EA6',
        secondaryColor: '#BAF9FF',
        primaryProfileTextColor: '#0A2F33',
        secondaryProfileTextColor: '#647374',
        primaryTextColor: '#0A2F33',
        secondaryTextColor: '#647374',
    },
    {
        id: 7,
        primaryColor: '#7749F8',
        secondaryColor: '#E5D7FF',
        primaryProfileTextColor: '#1C0A40',
        secondaryProfileTextColor: '#5D4C85',
        primaryTextColor: '#1C0A40',
        secondaryTextColor: '#5D4C85',
    },
    {
        id: 8,
        primaryColor: '#009688',
        secondaryColor: '#B2DFDB',
        primaryProfileTextColor: '#002925',
        secondaryProfileTextColor: '#4F6664',
        primaryTextColor: '#002925',
        secondaryTextColor: '#4F6664',
    },
    {
        id: 9,
        primaryColor: '#1E88E5',
        secondaryColor: '#BBDEFB',
        primaryProfileTextColor: '#062847',
        secondaryProfileTextColor: '#5E738F',
        primaryTextColor: '#062847',
        secondaryTextColor: '#5E738F',
    },
    {
        id: 10,
        primaryColor: '#8E24AA',
        secondaryColor: '#E1BEE7',
        primaryProfileTextColor: '#30013E',
        secondaryProfileTextColor: '#694E6E',
        primaryTextColor: '#30013E',
        secondaryTextColor: '#694E6E',
    },
    {
        id: 11,
        primaryColor: '#E53935',
        secondaryColor: '#FFCDD2',
        primaryProfileTextColor: '#400101',
        secondaryProfileTextColor: '#6B4E4E',
        primaryTextColor: '#400101',
        secondaryTextColor: '#6B4E4E',
    },
    {
        id: 12,
        primaryColor: '#43A047',
        secondaryColor: '#C8E6C9',
        primaryProfileTextColor: '#06220B',
        secondaryProfileTextColor: '#4A6B4B',
        primaryTextColor: '#06220B',
        secondaryTextColor: '#4A6B4B',
    },
    {
        id: 13,
        primaryColor: '#FDD835',
        secondaryColor: '#FFF9C4',
        primaryProfileTextColor: '#3A3200',
        secondaryProfileTextColor: '#736E46',
        primaryTextColor: '#3A3200',
        secondaryTextColor: '#736E46',
    },
    {
        id: 14,
        primaryColor: '#607D8B',
        secondaryColor: '#CFD8DC',
        primaryProfileTextColor: '#0B1417',
        secondaryProfileTextColor: '#4C5A5F',
        primaryTextColor: '#0B1417',
        secondaryTextColor: '#4C5A5F',
    },

    // --- Added 5 new color sets ---
    {
        id: 15,
        primaryColor: '#2C2C54',
        secondaryColor: '#474787',
        primaryProfileTextColor: '#FFFFFF',
        secondaryProfileTextColor: '#E0E0E0',
        primaryTextColor: '#FFFFFF',
        secondaryTextColor: '#D1D1D1',
    },
    {
        id: 16,
        primaryColor: '#222831',
        secondaryColor: '#393E46',
        primaryProfileTextColor: '#EEEEEE',
        secondaryProfileTextColor: '#B0B0B0',
        primaryTextColor: '#EEEEEE',
        secondaryTextColor: '#B0B0B0',
    },
    {
        id: 17,
        primaryColor: '#3F72AF',
        secondaryColor: '#DBE2EF',
        primaryProfileTextColor: '#0B1A34',
        secondaryProfileTextColor: '#6C7A92',
        primaryTextColor: '#0B1A34',
        secondaryTextColor: '#6C7A92',
    },
    {
        id: 18,
        primaryColor: '#FF6B6B',
        secondaryColor: '#FFE66D',
        primaryProfileTextColor: '#3A0A0A',
        secondaryProfileTextColor: '#7E6A28',
        primaryTextColor: '#3A0A0A',
        secondaryTextColor: '#7E6A28',
    },
    {
        id: 19,
        primaryColor: '#1B262C',
        secondaryColor: '#0F4C75',
        primaryProfileTextColor: '#F0F8FF',
        secondaryProfileTextColor: '#C2E0F2',
        primaryTextColor: '#F0F8FF',
        secondaryTextColor: '#C2E0F2',
    }
];


const FONT_OPTIONS = [
    { name: 'Work Sans', value: 'work sans' },
    { name: 'open sans', value: 'open sans' },
    { name: 'Roboto', value: 'roboto' },
    { name: 'Montserrat', value: 'montserrat' },
    { name: 'Poppins', value: 'poppins' },
    { name: 'Helvetica', value: 'Helvetica' },
    { name: 'Verdana', value: 'Verdana' },
    { name: 'Calibri', value: 'Calibri' },
    { name: 'Courier New', value: 'Courier New' },
    { name: 'Arial', value: 'Arial' },
    { name: 'Tahoma', value: 'Tahoma' },
    { name: 'Times New Roman', value: 'Times New Roman' },
    { name: 'Georgia', value: 'Georgia' },
    { name: 'Cairo', value: 'Cairo' },
    { name: 'Trebuchet MS', value: 'Trebuchet MS' },
    { name: 'Garamond', value: 'Garamond' },
    { name: 'Palatino', value: 'Palatino' },
    { name: 'Cambria', value: 'Cambria' },
];

// Reusable Components
const ImageUploadButton = ({ onUpload, className = "w-18 h-18" }) => (
    <div className={`relative rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-blue-400 hover:scale-105 transition-all duration-200 ${className}`}>
        <RiUploadCloud2Line className="text-4xl text-blue-500" />
        <input
            type="file"
            accept="image/*"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={onUpload}
        />
    </div>
);

const BackgroundImageGrid = ({ images, selectedImage, onSelect, onUpload }) => (
    <div className="flex flex-wrap gap-3 max-h-[230px] overflow-y-auto p-3">
        {images.map((bgImg, index) => (
            <button
                key={index}
                onClick={() => onSelect(bgImg)}
                className={`relative w-18 h-18 rounded-lg border-2 overflow-hidden transition-all duration-200 cursor-pointer ${selectedImage === bgImg
                    ? 'border-blue-500 scale-110 shadow-lg'
                    : 'border-gray-300 hover:scale-105 hover:border-blue-300'
                    }`}
            >
                <img
                    src={bgImg}
                    alt={`خلفية ${index + 1}`}
                    className="object-cover w-full h-full"
                />
                {selectedImage === bgImg && (
                    <div className="absolute inset-0  bg-opacity-20 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-blue-500 bg-white  rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>
                )}
            </button>
        ))}
        <ImageUploadButton onUpload={onUpload} />
    </div>
);

const DesignSettings = () => {
    // State Management
    const [openSections, setOpenSections] = useState({
        backgrounds: true,
        colors: false,
        typography: false,
        pageLoader: false,
        cardStyle: false,
    });

    const [toggleStates, setToggleStates] = useState({
        cardStyleSection: true,
    });

    const [designData, setDesignData] = useState({
        primaryColor: '#333333',
        secondaryColor: '#000000',
        primaryProfileTextColor: '#FFFFFF',
        secondaryProfileTextColor: '#FFFFFF',
        primaryTextColor: '#333333',
        secondaryTextColor: '#656b6c',
        backgroundImage: null,
        fontFamily: 'Arial',
        layoutStyle: 'modern',
        pageLoaderImage: null,
        cardBackground: '#FFFFFF',
        Dropshadow: '#64646f33',
       cardRadius: 10,
        shadowX: 0,
        shadowY: 4,
        shadowBlur: 10,
        shadowSpread: 0,
    });

    const [uploadedImages, setUploadedImages] = useState([]);

    // Event Handlers
    const toggleSection = useCallback((section) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    }, []);

    const toggleCheckbox = useCallback((checkbox) => {
        setToggleStates((prev) => ({
            ...prev,
            [checkbox]: !prev[checkbox],
        }));
    }, []);

    const handleDesignChange = useCallback((name, value) => {
        setDesignData(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    const handleBackgroundImageSelect = useCallback((image) => {
        handleDesignChange('backgroundImage', image);
    }, [handleDesignChange]);

    const handleImageUpload = useCallback((event) => {
        const file = event.target.files[0];
        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                alert('الرجاء اختيار ملف صورة فقط');
                return;
            }
            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('حجم الصورة يجب أن يكون أقل من 5MB');
                return;
            }
            const imageUrl = URL.createObjectURL(file);

            // Add to uploaded images list
            setUploadedImages(prev => [...prev, imageUrl]);

            // Set as current background
            handleDesignChange('backgroundImage', imageUrl);
        }
    }, [handleDesignChange]);



    const clearBackgroundImage = useCallback(() => {
        handleDesignChange('backgroundImage', null);
    }, [handleDesignChange]);

    // Combined images: predefined + uploaded
    const allBackgroundImages = [...BACKGROUND_IMAGES, ...uploadedImages];


    return (
        <div className="space-y-4">
            {/* Backgrounds Section */}
            <SectionHeader
                title="الخلفيات"
                isOpen={openSections.backgrounds}
                onToggle={() => toggleSection('backgrounds')}
                showToggle={false}
            />

            <div className={`overflow-hidden transition-all duration-500 ease-in-out 
        ${openSections.backgrounds ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
            >
                <div className="bg-white p-6 pt-0">
                    <div className="flex items-center justify-between mb-3">
                        <label className="block text-md font-medium text-gray-400 text-start">
                            الصور المحددة
                        </label>
                        {designData.backgroundImage && (
                            <button
                                onClick={clearBackgroundImage}
                                className="text-sm text-red-500 hover:text-red-700 transition-colors"
                            >
                                إزالة الصورة
                            </button>
                        )}
                    </div>

                    <BackgroundImageGrid
                        images={allBackgroundImages}
                        selectedImage={designData.backgroundImage}
                        onSelect={handleBackgroundImageSelect}
                        onUpload={handleImageUpload}
                    />

                </div>
            </div>

            {/* Colors Section */}
            <SectionHeader
                title="الألوان"
                isOpen={openSections.colors}
                onToggle={() => toggleSection('colors')}
                showToggle={false}
            />

            <div className={`overflow-hidden transition-all duration-500 ease-in-out
        ${openSections.colors ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
            >
                <div className="bg-white p-6 pt-0">
                    <div className="flex flex-wrap gap-3 p-3">
                        {DEFAULT_COLOR.map((color) => (
                            <div
                                key={color.id}
                                onClick={() => setDesignData((prev) => ({
                                    ...prev,
                                    primaryColor: color.primaryColor,
                                    secondaryColor: color.secondaryColor,
                                    primaryProfileTextColor: color.primaryProfileTextColor,
                                    secondaryProfileTextColor: color.secondaryProfileTextColor,
                                    primaryTextColor: color.primaryTextColor,
                                    secondaryTextColor: color.secondaryTextColor,
                                }))}
                                className={`flex items-center justify-center w-[70px] h-[70px] rounded-full cursor-pointer border-2 transition-all duration-200
        ${designData.primaryColor === color.primaryColor &&
                                        designData.secondaryColor === color.secondaryColor
                                        ? 'border-blue-500 scale-110 shadow-md'
                                        : 'border-gray-200 hover:border-blue-300 hover:scale-105'
                                    }`}
                            >
                                <div className="w-[60px] h-[60px] rounded-full overflow-hidden border border-gray-200">
                                    <div
                                        style={{ backgroundColor: color.primaryColor }}
                                        className="w-full h-[44px]"
                                    ></div>
                                    <div
                                        style={{ backgroundColor: color.secondaryColor }}
                                        className="w-full h-[16px]"
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-3 mb-4">
                        <div>
                            <label className="block text-md font-medium text-gray-400 mb-2 text-start">
                                اللون الأساسي
                            </label>
                            <div className="flex items-center">
                                <input
                                    type='color'
                                    value={designData.primaryColor}
                                    onChange={(e) => handleDesignChange('primaryColor', e.target.value)}
                                    className="w-12 h-11 appearance-none  px-4 py-2 rounded-r-md hover:bg-blue-600 border border-gray-300"
                                    style={{
                                        backgroundColor: designData.primaryColor,
                                    }}
                                />
                                <input
                                    type="text"
                                    value={designData.primaryColor}
                                    onChange={(e) => handleDesignChange('primaryColor', e.target.value)}
                                    placeholder="#1D79CF"
                                    className="flex-1 h-11 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 "
                                />
                            </div>

                        </div>

                        <div>
                            <label className="block text-md font-medium text-gray-400 mb-2 text-start">
                                اللون الثانوي
                            </label>
                            <div className="flex items-center">
                                <input
                                    type='color'
                                    value={designData.secondaryColor}
                                    onChange={(e) => handleDesignChange('secondaryColor', e.target.value)}
                                    className="w-12 h-11 appearance-none  px-4 py-2 rounded-r-md hover:bg-blue-600 border border-gray-300"
                                    style={{
                                        backgroundColor: designData.secondaryColor,
                                    }}
                                />
                                <input
                                    type="text"
                                    value={designData.secondaryColor}
                                    onChange={(e) => handleDesignChange('secondaryColor', e.target.value)}
                                    placeholder="#1D79CF"
                                    className="flex-1 h-11 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-3 mb-4">
                        <div>
                            <label className="block text-md font-medium text-gray-400 mb-2 text-start">
                                اللون الأساسي للملف الشخصي
                            </label>
                            <div className="flex items-center">
                                <input
                                    type='color'
                                    value={designData.primaryProfileTextColor}
                                    onChange={(e) => handleDesignChange('primaryProfileTextColor', e.target.value)}
                                    className="w-12 h-11 appearance-none  px-4 py-2 rounded-r-md hover:bg-blue-600 border border-gray-300"
                                    style={{
                                        backgroundColor: designData.primaryProfileTextColor,
                                    }}
                                />
                                <input
                                    type="text"
                                    value={designData.primaryProfileTextColor}
                                    onChange={(e) => handleDesignChange('primaryProfileTextColor', e.target.value)}
                                    placeholder="#1D79CF"
                                    className="flex-1 h-11 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 "
                                />
                            </div>

                        </div>

                        <div>
                            <label className="block text-md font-medium text-gray-400 mb-2 text-start">
                                اللون الثانوي للملف الشخصي
                            </label>
                            <div className="flex items-center">
                                <input
                                    type='color'
                                    value={designData.secondaryProfileTextColor}
                                    onChange={(e) => handleDesignChange('secondaryProfileTextColor', e.target.value)}
                                    className="w-12 h-11 appearance-none  px-4 py-2 rounded-r-md hover:bg-blue-600 border border-gray-300"
                                    style={{
                                        backgroundColor: designData.secondaryProfileTextColor,
                                    }}
                                />
                                <input
                                    type="text"
                                    value={designData.secondaryProfileTextColor}
                                    onChange={(e) => handleDesignChange('secondaryProfileTextColor', e.target.value)}
                                    placeholder="#1D79CF"
                                    className="flex-1 h-11 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-3 mb-4">
                        <div>
                            <label className="block text-md font-medium text-gray-400 mb-2 text-start">
                                اللون النص الأساسي
                            </label>
                            <div className="flex items-center">
                                <input
                                    type='color'
                                    value={designData.primaryTextColor}
                                    onChange={(e) => handleDesignChange('primaryTextColor', e.target.value)}
                                    className="w-12 h-11 appearance-none  px-4 py-2 rounded-r-md hover:bg-blue-600 border border-gray-300"
                                    style={{
                                        backgroundColor: designData.primaryTextColor,
                                    }}
                                />
                                <input
                                    type="text"
                                    value={designData.primaryTextColor}
                                    onChange={(e) => handleDesignChange('primaryTextColor', e.target.value)}
                                    placeholder="#1D79CF"
                                    className="flex-1 h-11 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 "
                                />
                            </div>

                        </div>

                        <div>
                            <label className="block text-md font-medium text-gray-400 mb-2 text-start">
                                اللون النص الثانوي
                            </label>
                            <div className="flex items-center">
                                <input
                                    type='color'
                                    value={designData.secondaryTextColor}
                                    onChange={(e) => handleDesignChange('secondaryTextColor', e.target.value)}
                                    className="w-12 h-11 appearance-none  px-4 py-2 rounded-r-md hover:bg-blue-600 border border-gray-300"
                                    style={{
                                        backgroundColor: designData.secondaryTextColor,
                                    }}
                                />
                                <input
                                    type="text"
                                    value={designData.secondaryTextColor}
                                    onChange={(e) => handleDesignChange('secondaryTextColor', e.target.value)}
                                    placeholder="#1D79CF"
                                    className="flex-1 h-11 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Typography Section */}
            <SectionHeader
                title="الخطوط"
                isOpen={openSections.typography}
                onToggle={() => toggleSection('typography')}
                showToggle={false}
            />

            <div className={`overflow-hidden transition-all duration-500 ease-in-out
        ${openSections.typography ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
            >
                <div className="bg-white p-6 pt-0">
                    <div className="flex flex-wrap gap-3 p-3 max-h-[300px] overflow-y-auto">
                        {FONT_OPTIONS.map((font) => (
                            <div
                                key={font.value}
                                onClick={() => handleDesignChange('fontFamily', font.value)}
                                className={`flex flex-col items-center justify-center w-[110px] h-[100px] cursor-pointer rounded-md border-2 transition-all duration-200 ${designData.fontFamily === font.value
                                    ? 'border-blue-500 scale-105 shadow-md'
                                    : 'border-gray-200 hover:border-blue-300 hover:scale-105'
                                    }`}
                            >
                                <div
                                    className="flex items-center justify-center h-[60px] w-full"
                                    style={{ fontFamily: font.value }}
                                >
                                    <span className="text-2xl">Aa</span>
                                </div>
                                <p className="text-xs text-gray-500 text-center mt-1 truncate w-full px-1">
                                    {font.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Card Style Section */}
            <SectionHeader
                title="نمط البطاقات"
                isOpen={openSections.cardStyle}
                onToggle={() => toggleSection('cardStyle')}
                showToggle={false}
            />

            <div className={`overflow-hidden transition-all duration-500 ease-in-out
                ${openSections.cardStyle ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
            >
                <div className="bg-white p-6 pt-0 space-y-6">
                    <div className='flex align-baseline gap-2'>
                        <label className=" text-md font-semibold text-gray-400 mb-2">لون خلفية البطاقة</label>
                        <ToggleSwitch
                            checked={toggleStates.cardStyleSection}
                            onChange={() => toggleCheckbox('cardStyleSection')}
                        />
                    </div>
                    <div className='flex gap-2'>
                        {/* Background Color */}
                        <div className="w-1/2">
                            <label className="block text-md font-medium text-gray-400 mb-2 text-start">
                                لون خلفية
                            </label>
                            <div className="flex items-center">
                                <input
                                    type='color'
                                    value={designData.cardBackground}
                                    onChange={(e) => handleDesignChange('cardBackground', e.target.value)}
                                    className="w-12 h-11 appearance-none px-4 py-2 rounded-r-md border border-gray-300"
                                    style={{ backgroundColor: designData.cardBackground }}
                                />
                                <input
                                    type="text"
                                    value={designData.cardBackground}
                                    onChange={(e) => handleDesignChange('cardBackground', e.target.value)}
                                    className="flex-1 h-11 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        {/* Corner Radius */}
                        <div className="w-1/2">
                            <label className="block text-md font-medium text-gray-400 mb-2 text-start">
                                حواف البطاقة
                            </label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="range"
                                    min="0"
                                    max="50"
                                    value={designData.cardRadius || 10}
                                    onChange={(e) => handleDesignChange('cardRadius', e.target.value)}
                                    className="w-full accent-blue-500"
                                />
                                <span className="text-gray-600 text-sm w-10 text-center">
                                    {designData.cardRadius || 10}px
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Box Shadow Controls */}
                    <div className='flex align-baseline gap-2'>
                        <div className="w-1/2">
                            <label className="block text-md font-medium text-gray-400 mb-2 text-start">
                                الظل (Box Shadow)
                            </label>
                            <div className="flex items-center">
                                <input
                                    type='color'
                                    value={designData.Dropshadow}
                                    onChange={(e) => handleDesignChange('Dropshadow', e.target.value)}
                                    className="w-12 h-11 appearance-none px-4 py-2 rounded-r-md border border-gray-300"
                                    style={{ backgroundColor: designData.Dropshadow }}
                                />
                                <input
                                    type="text"
                                    value={designData.Dropshadow}
                                    onChange={(e) => handleDesignChange('Dropshadow', e.target.value)}
                                    className="flex-1 h-11 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div>
                                    <label className="block text-md font-medium text-gray-400 mb-2">X</label>
                                    <input
                                        type="number"
                                        value={designData.shadowX}
                                        onChange={(e) => handleDesignChange('shadowX', e.target.value)}
                                        className="w-full border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-md font-medium text-gray-400 mb-2">Y</label>
                                    <input
                                        type="number"
                                        value={designData.shadowY}
                                        onChange={(e) => handleDesignChange('shadowY', e.target.value)}
                                        className="w-full border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-md font-medium text-gray-400 mb-2">Blur</label>
                                    <input
                                        type="number"
                                        value={designData.shadowBlur}
                                        onChange={(e) => handleDesignChange('shadowBlur', e.target.value)}
                                        className="w-full border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-md font-medium text-gray-400 mb-2">Spread</label>
                                    <input
                                        type="number"
                                        value={designData.shadowSpread}
                                        onChange={(e) => handleDesignChange('shadowSpread', e.target.value)}
                                        className="w-full border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Page Loader Section */}
            <SectionHeader
                title="التحميل"
                isOpen={openSections.pageLoader}
                onToggle={() => toggleSection('pageLoader')}
                showToggle={false}
            />

            <div className={`overflow-hidden transition-all duration-500 ease-in-out
        ${openSections.pageLoader ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
            >
                <div className="bg-white p-6 pt-0">
                    <div className="flex gap-2 p-3">
                        {designData.pageLoaderImage && (
                            <div className="relative w-18 h-18 border border-[#ddd] p-1 rounded-lg">
                                <img
                                    src={designData.pageLoaderImage}
                                    alt="Page Loader"
                                    className="object-cover w-full h-full rounded-lg"
                                />
                                <button
                                    onClick={() => handleDesignChange('pageLoaderImage', null)}
                                    className="absolute inset-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
                                >
                                    <FaTimes />
                                </button>
                            </div>
                        )}
                        <ImageUploadButton onUpload={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                                const imageUrl = URL.createObjectURL(file);
                                handleDesignChange('pageLoaderImage', imageUrl);
                            }
                        }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignSettings;