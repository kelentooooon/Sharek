import React, { useState } from 'react';
import themeImg1 from '../assets/web design sharek.jpg';
import themeImg2 from '../assets/web design sharek2.jpg';
import { IoIosArrowDown, IoMdCheckmark } from 'react-icons/io';
import { RiDraggable, RiUploadCloud2Line } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa';

const CreateBusinessCard = () => {
    const [activeButton, setActiveButton] = useState(0);
    const [selectedTheme, setSelectedTheme] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [openSections, setOpenSections] = useState({
        profile: true,
        contact: false,
        description: false,
    });
    const [sectionToggles, setSectionToggles] = useState({
        profile: true,
        contact: true,
        description: true,
        contactIcons: true,
    });
    const [profileData, setProfileData] = useState({
        personalImage: null,
        companyLogo: null,
        name: '',
        jobDescription: '',
        companyName: '',
    });
    const [contactFields, setContactFields] = useState([
        { id: 1, type: 'mobile', value: '' },
        { id: 2, type: 'email', value: '' },
    ]);

    const buttons = [
        { id: 0, text: 'التواصل' },
        { id: 1, text: 'التصميم /الإعدادات' },
        { id: 2, text: 'باركود' },
    ];

    const themes = [
        { id: 1, image: themeImg1, name: 'Theme 1' },
        { id: 2, image: themeImg2, name: 'Theme 2' },
        { id: 3, image: themeImg1, name: 'Theme 3' },
        { id: 4, image: themeImg2, name: 'Theme 4' },
        { id: 5, image: themeImg1, name: 'Theme 5' },
        { id: 6, image: themeImg2, name: 'Theme 6' },
        { id: 7, image: themeImg1, name: 'Theme 7' },
        { id: 8, image: themeImg2, name: 'Theme 8' },
        { id: 9, image: themeImg1, name: 'Theme 9' },
        { id: 10, image: themeImg2, name: 'Theme 10' },
        { id: 11, image: themeImg1, name: 'Theme 11' },
        { id: 12, image: themeImg2, name: 'Theme 12' },
    ];

    const slidesToShow = 4;
    const totalSlides = Math.ceil(themes.length / slidesToShow);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
    };

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const toggleSectionSwitch = (section) => {
        setSectionToggles((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({
            ...prev,
            [name]: value.slice(0, 50), // Limit input length
        }));
    };

    const handleImageUpload = (e, type) => {
        const file = e.target.files[0];
        if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileData((prev) => ({
                    ...prev,
                    [type]: e.target.result,
                }));
            };
            reader.readAsDataURL(file);
        } else {
            alert('يرجى تحميل صورة بحجم أقل من 5 ميغابايت');
        }
    };

    const addContactField = () => {
        setContactFields((prev) => [
            ...prev,
            { id: Date.now(), type: 'mobile', value: '' },
        ]);
    };

    const updateContactField = (id, field, value) => {
        setContactFields((prev) =>
            prev.map((contact) =>
                contact.id === id ? { ...contact, [field]: value } : contact
            )
        );
    };

    const removeContactField = (id) => {
        if (contactFields.length > 1) {
            setContactFields((prev) => prev.filter((contact) => contact.id !== id));
        }
    };

    const resetProfileData = () => {
        setProfileData({
            personalImage: null,
            companyLogo: null,
            name: '',
            jobDescription: '',
            companyName: '',
        });
        setContactFields([{ id: 1, type: 'mobile', value: '' }]);
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4 w-full min-h-screen bg-gray-50">
                <div className="md:col-span-3 p-6 mx-auto mt-16 w-full max-w-3xl flex flex-col items-center">
                    <div className="flex bg-[#C9DAE2] text-blue-500 w-full max-w-md mb-6 rounded-full overflow-hidden shadow-md">
                        {buttons.map((button, index) => (
                            <button
                                key={button.id}
                                className={`flex-1 py-4 text-base font-medium transition-all duration-300 
                                    ${index === 0 ? 'rounded-r-full' : ''} 
                                    ${index === 1 ? 'border-x border-gray-400' : ''}
                                    ${index === buttons.length - 1 ? 'rounded-l-full' : ''}
                                    ${activeButton === button.id
                                        ? 'bg-blue-500 text-white shadow-inner'
                                        : 'hover:bg-blue-400 hover:text-white'
                                    }`}
                                onClick={() => setActiveButton(button.id)}
                                aria-pressed={activeButton === button.id}
                            >
                                {button.text}
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-center my-6 space-x-2">
                        {buttons.map((button) => (
                            <span
                                key={button.id}
                                onClick={() => setActiveButton(button.id)}
                                className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 
                                    ${activeButton === button.id ? 'bg-blue-500 w-4' : 'bg-gray-300 hover:bg-blue-400'}`}
                                role="button"
                                aria-label={`Switch to ${button.text}`}
                            ></span>
                        ))}
                    </div>
                    <div className="w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                        {activeButton === 0 && (
                            <div className="space-y-8">
                                <div className="relative w-full overflow-hidden">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">اختر تصميم الثيم</h3>
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-blue-500 rounded-full p-2 shadow-md hover:bg-blue-600 transition-all duration-300"
                                        aria-label="Previous slide"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-blue-500 rounded-full p-2 shadow-md hover:bg-blue-600 transition-all duration-300"
                                        aria-label="Next slide"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                    <div className="overflow-hidden relative w-full">
                                        <div
                                            className="flex transition-transform duration-500 ease-in-out"
                                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                        >
                                            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                                                const start = slideIndex * slidesToShow;
                                                const slideItems = themes.slice(start, start + slidesToShow);
                                                return (
                                                    <div key={slideIndex} className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 flex-shrink-0 w-full">
                                                        {slideItems.map((theme) => (
                                                            <div
                                                                key={theme.id}
                                                                className={`cursor-pointer rounded-lg overflow-hidden shadow-md transition-all duration-300 relative 
                                                                    ${selectedTheme === theme.id ? 'ring-2 ring-blue-500' : 'hover:shadow-xl'}`}
                                                                onClick={() => setSelectedTheme(theme.id)}
                                                                role="button"
                                                                aria-label={`Select theme ${theme.name}`}
                                                            >
                                                                <div className="h-48 bg-gray-200 overflow-hidden relative">
                                                                    <img
                                                                        src={theme.image}
                                                                        alt={theme.name}
                                                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                                                                    />
                                                                    {selectedTheme === theme.id && (
                                                                        <div className="absolute inset-0 bg-blue-500 bg-opacity-30 flex items-center justify-center">
                                                                            <div className="bg-white rounded-full p-2">
                                                                                <IoMdCheckmark className="text-blue-500 text-2xl" />
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <p className="text-center text-sm text-gray-600 mt-2">{theme.name}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="flex justify-center mt-4 space-x-2">
                                        {Array.from({ length: totalSlides }).map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentSlide(index)}
                                                className={`h-2 rounded-full transition-all duration-300 ${
                                                    currentSlide === index ? 'bg-blue-500 w-6' : 'bg-gray-300 w-2 hover:bg-gray-400'
                                                }`}
                                                aria-label={`Go to slide ${index + 1}`}
                                            ></button>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-8 space-y-4">
                                    {['profile', 'contact', 'description'].map((section) => (
                                        <div key={section}>
                                            <div
                                                className="bg-[#C9DAE2] p-4 rounded-2xl px-6 flex items-center justify-between cursor-pointer"
                                                onClick={() => toggleSection(section)}
                                                role="button"
                                                aria-expanded={openSections[section]}
                                                aria-controls={`${section}-content`}
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <RiDraggable className="text-2xl text-blue-500" />
                                                    <h3 className="text-blue-500 text-xl font-medium">
                                                        {section === 'profile' ? 'الملف التعريفي' : section === 'contact' ? 'تواصل معي' : 'الوصف'}
                                                    </h3>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <label className="relative inline-flex items-center cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            checked={sectionToggles[section]}
                                                            onChange={() => toggleSectionSwitch(section)}
                                                            className="sr-only peer"
                                                        />
                                                        <div className="w-11 h-5 bg-gray-400 rounded-full peer peer-checked:bg-blue-500 transition-all duration-300"></div>
                                                        <div className="absolute left-1 top-0.5 bg-white w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-6"></div>
                                                    </label>
                                                    <div className="bg-white rounded-full p-1">
                                                        <IoIosArrowDown
                                                            className={`text-blue-500 text-2xl transition-transform duration-200 ${
                                                                openSections[section] ? 'rotate-180' : ''
                                                            }`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id={`${section}-content`}
                                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                                    openSections[section] && sectionToggles[section] ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                                                }`}
                                            >
                                                <div className="bg-white p-6 border-t border-gray-200 rounded-b-2xl">
                                                    {section === 'profile' && (
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                            <div className="flex flex-col">
                                                                <div className="flex items-center mb-4 justify-between">
                                                                    <label className="text-md font-medium text-gray-600">الصورة الشخصية</label>
                                                                    <label className="relative inline-flex items-center cursor-pointer">
                                                                        <input
                                                                            type="checkbox"
                                                                            checked={sectionToggles.personalImage}
                                                                            onChange={() => toggleSectionSwitch('personalImage')}
                                                                            className="sr-only peer"
                                                                        />
                                                                        <div className="w-11 h-5 bg-gray-400 rounded-full peer peer-checked:bg-blue-500 transition-all duration-300"></div>
                                                                        <div className="absolute left-1 top-0.5 bg-white w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-6"></div>
                                                                    </label>
                                                                </div>
                                                                {sectionToggles.personalImage && (
                                                                    <div className="flex gap-4">
                                                                        {profileData.personalImage && (
                                                                            <div className="relative w-32 h-32 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100">
                                                                                <img
                                                                                    src={profileData.personalImage}
                                                                                    alt="Personal"
                                                                                    className="w-full h-full object-cover border-2 border-gray-200 rounded-xl"
                                                                                />
                                                                            </div>
                                                                        )}
                                                                        <div className="relative w-32 h-32 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100">
                                                                            <div className="text-gray-400 text-center p-4">
                                                                                <RiUploadCloud2Line className="text-5xl text-blue-500" />
                                                                            </div>
                                                                            <input
                                                                                type="file"
                                                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                                                onChange={(e) => handleImageUpload(e, 'personalImage')}
                                                                                accept="image/*"
                                                                                aria-label="Upload personal image"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <div className="flex items-center mb-4 justify-between">
                                                                    <label className="text-md font-medium text-gray-600">شعار الشركة</label>
                                                                    <label className="relative inline-flex items-center cursor-pointer">
                                                                        <input
                                                                            type="checkbox"
                                                                            checked={sectionToggles.companyLogo}
                                                                            onChange={() => toggleSectionSwitch('companyLogo')}
                                                                            className="sr-only peer"
                                                                        />
                                                                        <div className="w-11 h-5 bg-gray-400 rounded-full peer peer-checked:bg-blue-500 transition-all duration-300"></div>
                                                                        <div className="absolute left-1 top-0.5 bg-white w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-6"></div>
                                                                    </label>
                                                                </div>
                                                                {sectionToggles.companyLogo && (
                                                                    <div className="flex gap-4">
                                                                        {profileData.companyLogo && (
                                                                            <div className="relative w-32 h-32 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100">
                                                                                <img
                                                                                    src={profileData.companyLogo}
                                                                                    alt="Company Logo"
                                                                                    className="w-full h-full object-cover border-2 border-gray-200 rounded-xl"
                                                                                />
                                                                            </div>
                                                                        )}
                                                                        <div className="relative w-32 h-32 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100">
                                                                            <div className="text-gray-400 text-center p-4">
                                                                                <RiUploadCloud2Line className="text-5xl text-blue-500" />
                                                                            </div>
                                                                            <input
                                                                                type="file"
                                                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                                                onChange={(e) => handleImageUpload(e, 'companyLogo')}
                                                                                accept="image/*"
                                                                                aria-label="Upload company logo"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div>
                                                                <label className="block text-md font-medium text-gray-600 mb-2">الاسم</label>
                                                                <input
                                                                    type="text"
                                                                    name="name"
                                                                    value={profileData.name}
                                                                    onChange={handleProfileChange}
                                                                    className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                                                    placeholder="أدخل اسمك"
                                                                    required
                                                                    aria-required="true"
                                                                />
                                                            </div>
                                                            <div>
                                                                <label className="block text-md font-medium text-gray-600 mb-2">المسمى الوظيفي</label>
                                                                <input
                                                                    type="text"
                                                                    name="jobDescription"
                                                                    value={profileData.jobDescription}
                                                                    onChange={handleProfileChange}
                                                                    className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                                                    placeholder="المسمى الوظيفي"
                                                                    required
                                                                    aria-required="true"
                                                                />
                                                            </div>
                                                            <div className="md:col-span-2">
                                                                <label className="block text-md font-medium text-gray-600 mb-2">اسم الشركة</label>
                                                                <input
                                                                    type="text"
                                                                    name="companyName"
                                                                    value={profileData.companyName}
                                                                    onChange={handleProfileChange}
                                                                    className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                                                    placeholder="اسم الشركة"
                                                                    required
                                                                    aria-required="true"
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                                    {section === 'contact' && sectionToggles.contact && (
                                                        <div className="space-y-4">
                                                            <div className="flex items-center gap-4">
                                                                <label className="text-md font-medium text-gray-600">أيقونات التواصل</label>
                                                                <label className="relative inline-flex items-center cursor-pointer">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={sectionToggles.contactIcons}
                                                                        onChange={() => toggleSectionSwitch('contactIcons')}
                                                                        className="sr-only peer"
                                                                        aria-label="Toggle contact icons"
                                                                    />
                                                                    <div className="w-11 h-5 bg-gray-400 rounded-full peer peer-checked:bg-blue-500 transition-all duration-300"></div>
                                                                    <div className="absolute left-1 top-0.5 bg-white w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-6"></div>
                                                                </label>
                                                            </div>
                                                            {sectionToggles.contactIcons && (
                                                                <>
                                                                    {contactFields.map((contact) => (
                                                                        <div key={contact.id} className="bg-gray-100 p-4 rounded-lg flex items-center gap-2">
                                                                            <div className="relative w-1/3">
                                                                                <select
                                                                                    value={contact.type}
                                                                                    onChange={(e) => updateContactField(contact.id, 'type', e.target.value)}
                                                                                    className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-full"
                                                                                    aria-label="Select contact type"
                                                                                >
                                                                                    <option value="mobile">جوال</option>
                                                                                    <option value="email">بريد</option>
                                                                                    <option value="sms">رسالة</option>
                                                                                    <option value="whatsapp">واتساب</option>
                                                                                    <option value="location">موقع</option>
                                                                                    <option value="telephone">هاتف</option>
                                                                                </select>
                                                                                <IoIosArrowDown className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-500 pointer-events-none" />
                                                                            </div>
                                                                            <input
                                                                                type="text"
                                                                                value={contact.value}
                                                                                onChange={(e) => updateContactField(contact.id, 'value', e.target.value)}
                                                                                className="w-2/3 px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                                                                placeholder="أدخل المعلومات"
                                                                                aria-label="Enter contact information"
                                                                            />
                                                                            {contactFields.length > 1 && (
                                                                                <button
                                                                                    onClick={() => removeContactField(contact.id)}
                                                                                    className="text-red-500 hover:text-red-700"
                                                                                    aria-label="Remove contact field"
                                                                                >
                                                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                                                    </svg>
                                                                                </button>
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                    <button
                                                                        onClick={addContactField}
                                                                        className="mt-4 px-4 py-2 flex items-center gap-2 rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all"
                                                                        aria-label="Add more contact fields"
                                                                    >
                                                                        <FaPlus className="text-sm" />
                                                                        إضافة المزيد
                                                                    </button>
                                                                </>
                                                            )}
                                                        </div>
                                                    )}
                                                    {section === 'description' && sectionToggles.description && (
                                                        <div>
                                                            <label className="block text-md font-medium text-gray-600 mb-2">الوصف</label>
                                                            <textarea
                                                                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                                                rows="4"
                                                                placeholder="أدخل وصفك هنا"
                                                                aria-label="Enter description"
                                                            ></textarea>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="mt-6 flex justify-end">
                                        <button
                                            onClick={resetProfileData}
                                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                                            aria-label="Reset profile data"
                                        >
                                            إعادة تعيين
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeButton === 1 && (
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">التصميم والإعدادات</h3>
                                <p className="text-gray-600">هنا يمكنك تخصيص التصميم والإعدادات</p>
                            </div>
                        )}
                        {activeButton === 2 && (
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">الباركود</h3>
                                <p className="text-gray-600">هنا يمكنك إنشاء وإدارة الباركود</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="md:col-span-1 bg-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">معاينة البطاقة</h3>
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
                                <p className="mt-3 text-gray-700">{themes.find((t) => t.id === selectedTheme)?.name}</p>
                                <button
                                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                    onClick={() => console.log('Theme confirmed:', selectedTheme)}
                                >
                                    تأكيد الاختيار
                                </button>
                            </div>
                        ) : (
                            <p className="text-gray-600 text-center">لم يتم اختيار تصميم بعد</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateBusinessCard;