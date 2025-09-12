import React, { useState } from 'react'
import { IoIosArrowDown, IoMdCheckmark } from 'react-icons/io';
import { RiDraggable, RiUploadCloud2Line } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa';

const ToggleSection = () => {
    const [openSections, setOpenSections] = useState({
        profile: true,  // Profile section open by default
        contact: false,
        description: false,
        images: false,
        socialMedia: false,
        links: false,
        videos: false
    });
    const [toggleStates, setToggleStates] = useState({
        profileSection: true,
        personalImage: true,
        companyLogo: true,
        communicationIcons: true,
        contactSection: true,
        descriptionSection: true
    });
    const [profileData, setProfileData] = useState({
        personalImage: null,
        companyLogo: null,
        name: '',
        jobDescription: '',
        companyName: ''
    });
    const [contactFields, setContactFields] = useState([
        { id: 1, type: 'mobile', value: '' },
        { id: 2, type: 'email', value: '' },
    ]);

    // Toggle section
    const toggleSection = (section) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    // Toggle individual checkbox
    const toggleCheckbox = (checkbox) => {
        setToggleStates((prev) => ({
            ...prev,
            [checkbox]: !prev[checkbox],
        }));
    };

    // Handle profile data change
    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle image upload
    const handleImageUpload = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileData(prev => ({
                    ...prev,
                    [type]: e.target.result
                }));
            };
            reader.readAsDataURL(file);
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

    return (
        <div className='mt-12 space-y-4'>
            <div className='bg-[#C9DAE2] p-4 rounded-4xl px-6 flex align-baseline justify-between cursor-pointer'
                onClick={() => toggleSection('profile')}
            >
                <div className='flex align-baseline space-x-2'>
                    <RiDraggable className='text-2xl text-[#1D79CF]' />

                    <h3 className='text-[#1D79CF] text-xl font-medium'>الملف التعريفي</h3>
                </div>
                <div className='flex align-baseline space-x-8'>
                    <label className="relative inline-flex items-center cursor-pointer" onClick={(e) => e.stopPropagation()}>
                        <input
                            type="checkbox"
                            checked={toggleStates.profileSection}
                            onChange={() => toggleCheckbox('profileSection')}
                            className="sr-only peer"
                        />
                        <div
                            className="w-11 h-5 bg-gray-600 rounded-full peer peer-checked:bg-[#1D79CF] 
                                on-all duration-300"
                        ></div>
                        <div
                            className="absolute left-1 top-1.1 bg-white w-4 h-4 rounded-full 
                                n-all duration-300 peer-checked:translate-x-5"
                        ></div>
                    </label>
                    <div className="bg-white rounded-full p-1">
                        {openSections.profile ? <IoIosArrowDown className='text-[#1D79CF] text-2xl transform rotate-180 duration-200' />
                            :
                            <IoIosArrowDown className='text-[#1D79CF] text-2xl' />
                        }
                    </div>
                </div>
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out 
                            ${openSections.profile ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"}`
            }
            >
                <div className="bg-white p-6 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Personal Image Upload */}
                        <div className="flex flex-col">
                            <div className='flex items-center mb-4 gap-30 '>
                                <label className="block text-md font-medium text-gray-400 mb-2">الصورة الشخصية</label>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleStates.personalImage}
                                        onChange={() => toggleCheckbox('personalImage')}
                                        className="sr-only peer"
                                    />
                                    <div
                                        className="w-11 h-5 bg-gray-600 rounded-full peer peer-checked:bg-[#1D79CF] on-all duration-300"
                                    ></div>
                                    <div
                                        className="absolute left-1 top-1.1 bg-white w-4 h-4 rounded-full on-all duration-300 peer-checked:translate-x-5"
                                    ></div>
                                </label>
                            </div>
                            <div className='flex gap-4'>
                                {profileData.personalImage && (
                                    <div className="relative w-32 h-32 flex items-center justify-center overflow-hidden rounded-xl bg-[#DBDBDB]">
                                        <img
                                            src={profileData.personalImage}
                                            alt="Personal"
                                            className="w-full h-full object-cover border-2 border-[#DBDBDB] rounded-xl"
                                        />
                                    </div>
                                )}
                                <div className="relative w-32 h-32 flex items-center justify-center overflow-hidden rounded-xl bg-[#DBDBDB]">
                                    <div className="text-gray-400 text-center p-4">
                                        <RiUploadCloud2Line className='text-5xl text-[#1D79CF]' />
                                    </div>
                                    <input
                                        type="file"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        onChange={(e) => handleImageUpload(e, 'personalImage')}
                                        accept="image/*"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Company Logo Upload */}
                        <div className="flex flex-col">
                            <div className='flex items-center mb-4 gap-30 '>
                                <label className="block text-md font-medium text-gray-400 mb-2">شعار الشركة</label>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={toggleStates.companyLogo}
                                        onChange={() => toggleCheckbox('companyLogo')}
                                        className="sr-only peer"
                                    />
                                    <div
                                        className="w-11 h-5 bg-gray-600 rounded-full peer peer-checked:bg-[#1D79CF] on-all duration-300"
                                    ></div>
                                    <div
                                        className="absolute left-1 top-1.1 bg-white w-4 h-4 rounded-full on-all duration-300 peer-checked:translate-x-5"
                                    ></div>
                                </label>
                            </div>
                            <div className="flex gap-4">
                                {profileData.companyLogo && (
                                    <div className="relative w-32 h-32 flex items-center justify-center overflow-hidden rounded-xl bg-[#DBDBDB]">
                                        <img
                                            src={profileData.companyLogo}
                                            alt="Company Logo"
                                            className="w-full h-full object-cover border-2 border-[#DBDBDB] rounded-xl"
                                        />
                                    </div>
                                )}
                                <div className="relative w-32 h-32 flex items-center justify-center overflow-hidden rounded-xl bg-[#DBDBDB]">
                                    <div className="text-gray-400 text-center p-4">
                                        <RiUploadCloud2Line className='text-5xl text-[#1D79CF]' />
                                    </div>
                                    <input
                                        type="file"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        onChange={(e) => handleImageUpload(e, 'companyLogo')}
                                        accept="image/*"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-md font-medium text-gray-400 mb-2">الاسم</label>
                            <input
                                type="text"
                                name="name"
                                value={profileData.name}
                                onChange={handleProfileChange}
                                className="w-full px-4 py-2 bg-[#F0F1F2] border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-0"
                                placeholder="أدخل اسمك"
                            />
                        </div>

                        <div>
                            <label className="block text-md font-medium text-gray-400 mb-2">المسمى الوظيفي</label>
                            <input
                                type="text"
                                name="jobDescription"
                                value={profileData.jobDescription}
                                onChange={handleProfileChange}
                                className="w-full px-4 py-2 bg-[#F0F1F2] border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-0"
                                placeholder="المسمى الوظيفي"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-md font-medium text-gray-400 mb-2">اسم الشركة</label>
                            <input
                                type="text"
                                name="companyName"
                                value={profileData.companyName}
                                onChange={handleProfileChange}
                                className="w-full px-4 py-2 bg-[#F0F1F2] border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-0"
                                placeholder="اسم الشركة"
                            />
                        </div>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-4">
                        <label className="text-md font-medium text-gray-400 mb-2 flex gap-5 items-center">
                            أيقونات التواصل
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={toggleStates.communicationIcons}
                                    onChange={() => toggleCheckbox('communicationIcons')}
                                    className="sr-only peer"
                                />
                                <div
                                    className="w-11 h-5 bg-gray-600 rounded-full peer peer-checked:bg-[#1D79CF] on-all duration-300"
                                ></div>
                                <div
                                    className="absolute left-1 top-1.1 bg-white w-4 h-4 rounded-full on-all duration-300 peer-checked:translate-x-5"
                                ></div>
                            </label> </label>
                        {toggleStates.communicationIcons && (
                            <>

                                {contactFields.map((contact) => (
                                    <div key={contact.id} className="bg-[#EEF3F6] p-4 rounded-lg flex items-center gap-2">
                                        <div className="relative w-1/3">
                                            <select
                                                value={contact.type}
                                                onChange={(e) => updateContactField(contact.id, 'type', e.target.value)}
                                                className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none w-full"
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
                                            className="w-2/3 px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                            placeholder="أدخل المعلومات"
                                            maxLength={100}
                                            aria-label="Enter contact information"
                                        />
                                        {contactFields.length > 2 && (
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

                                {/* Add more button */}
                                <button
                                    onClick={addContactField}
                                    className="mt-4 px-2 flex items-center gap-2 w-30 h-8 rounded-lg text-white font-medium duration-300 transition-all bg-[#20846c] hover:bg-[#3abf99] text-sm cursor-pointer">
                                    <FaPlus className='text-sm' />
                                    إضافة المزيد
                                </button>
                            </>)}
                    </div>
                </div>
            </div>
            {/* Description Section */}
            <div className='bg-[#C9DAE2] p-4 rounded-4xl px-6 flex align-baseline justify-between cursor-pointer'
                onClick={() => toggleSection('description')}
            >
                <div className='flex align-baseline space-x-2'>
                    <RiDraggable className='text-2xl text-[#1D79CF]' />

                    <h3 className='text-[#1D79CF] text-xl font-medium'>الوصف</h3>
                </div>
                <div className='flex align-baseline space-x-8'>
                    <label className="relative inline-flex items-center cursor-pointer" onClick={(e) => e.stopPropagation()}>
                        <input
                            type="checkbox"
                            checked={toggleStates.descriptionSection}
                            onChange={() => toggleCheckbox('descriptionSection')}
                            className="sr-only peer"
                        />
                        <div
                            className="w-11 h-5 bg-gray-600 rounded-full peer peer-checked:bg-[#1D79CF] 
                                on-all duration-300"
                        ></div>
                        <div
                            className="absolute left-1 top-1.1 bg-white w-4 h-4 rounded-full 
                                n-all duration-300 peer-checked:translate-x-5"
                        ></div>
                    </label>
                    <div className="bg-white rounded-full p-1">
                        <IoIosArrowDown
                            className={`text-[#1D79CF] text-2xl transition-transform duration-200 ${openSections.description ? 'rotate-180' : ''
                                }`}
                        />
                    </div>
                </div>
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openSections.description && toggleStates.descriptionSection ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                id="description-content"
            >
                <div className="bg-white p-6 border-t border-gray-200 rounded-b-2xl">
                    <label className="block text-md font-medium text-gray-600 mb-2">الوصف</label>
                    <textarea
                        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        rows="4"
                        placeholder="أدخل وصفك هنا"
                        maxLength={500}
                        aria-label="Enter description"
                    ></textarea>
                </div>
            </div>
            {/* Contact Section */}
            <div className='bg-[#C9DAE2] p-4 rounded-4xl px-6 flex align-baseline justify-between cursor-pointer'
                onClick={() => toggleSection('contact')}
            >
                <div className='flex align-baseline space-x-2'>
                    <RiDraggable className='text-2xl text-[#1D79CF]' />

                    <h3 className='text-[#1D79CF] text-xl font-medium'>تواصل معي</h3>
                </div>
                <div className='flex align-baseline space-x-8'>
                    <label className="relative inline-flex items-center cursor-pointer" onClick={(e) => e.stopPropagation()}>
                        <input
                            type="checkbox"
                            checked={toggleStates.contactSection}
                            onChange={() => toggleCheckbox('contactSection')}
                            className="sr-only peer"
                        />
                        <div
                            className="w-11 h-5 bg-gray-600 rounded-full peer peer-checked:bg-[#1D79CF] 
                                on-all duration-300"
                        ></div>
                        <div
                            className="absolute left-1 top-1.1 bg-white w-4 h-4 rounded-full 
                                n-all duration-300 peer-checked:translate-x-5"
                        ></div>
                    </label>
                    <div className="bg-white rounded-full p-1">
                        <IoIosArrowDown
                            className={`text-[#1D79CF] text-2xl transition-transform duration-200 ${openSections.contact ? 'rotate-180' : ''
                                }`}
                        />
                    </div>
                </div>
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openSections.contact && toggleStates.contactSection ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                id="contact-content"
            >
                <div className="bg-white p-6 border-t border-gray-200 rounded-b-2xl">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <label className="text-md font-medium text-gray-600">أيقونات التواصل</label>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={toggleStates.communicationIcons}
                                    onChange={() => toggleCheckbox('communicationIcons')}
                                    className="sr-only peer"
                                    aria-label="Toggle communication icons"
                                />
                                <div className="w-11 h-5 bg-gray-400 rounded-full peer peer-checked:bg-[#1D79CF] transition-all duration-300"></div>
                                <div className="absolute left-1 top-0.5 bg-white w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-6"></div>
                            </label>
                        </div>
                        {toggleStates.communicationIcons && (
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
                                            maxLength={100}
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
                </div>
            </div>
            {/* Images Section */}
            <div className='bg-[#C9DAE2] p-4 rounded-4xl px-6 flex align-baseline justify-between cursor-pointer'
                onClick={() => toggleSection('images')}
            >
                <div className='flex align-baseline space-x-2'>
                    <RiDraggable className='text-2xl text-[#1D79CF]' />

                    <h3 className='text-[#1D79CF] text-xl font-medium'>الصور</h3>
                </div>
                <div className='flex align-baseline space-x-8'>
                    <label className="relative inline-flex items-center cursor-pointer" onClick={(e) => e.stopPropagation()}>
                        <input
                            type="checkbox"
                            checked={toggleStates.imagesSection}
                            onChange={() => toggleCheckbox('descriptionSection')}
                            className="sr-only peer"
                        />
                        <div
                            className="w-11 h-5 bg-gray-600 rounded-full peer peer-checked:bg-[#1D79CF] 
                                on-all duration-300"
                        ></div>
                        <div
                            className="absolute left-1 top-1.1 bg-white w-4 h-4 rounded-full 
                                n-all duration-300 peer-checked:translate-x-5"
                        ></div>
                    </label>
                    <div className="bg-white rounded-full p-1">
                        <IoIosArrowDown
                            className={`text-[#1D79CF] text-2xl transition-transform duration-200 ${openSections.images ? 'rotate-180' : ''
                                }`}
                        />
                    </div>
                </div>
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openSections.images ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                id="description-content"
            >
                <div className="bg-white p-6 border-t border-gray-200 rounded-b-2xl">
                    <label className="block text-md font-medium text-gray-600 mb-2">الوصف</label>
                    <textarea
                        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        rows="4"
                        placeholder="أدخل وصفك هنا"
                        maxLength={500}
                        aria-label="Enter description"
                    ></textarea>
                </div>
            </div>
            {/* Social Media Section */}
            <div className='bg-[#C9DAE2] p-4 rounded-4xl px-6 flex align-baseline justify-between cursor-pointer'
                onClick={() => toggleSection('socialMedia')}
            >
                <div className='flex align-baseline space-x-2'>
                    <RiDraggable className='text-2xl text-[#1D79CF]' />

                    <h3 className='text-[#1D79CF] text-xl font-medium'>مواقع التواصل الاحتماعي</h3>
                </div>
                <div className='flex align-baseline space-x-8'>
                    <label className="relative inline-flex items-center cursor-pointer" onClick={(e) => e.stopPropagation()}>
                        <input
                            type="checkbox"
                            checked={toggleStates.socialMedia}
                            onChange={() => toggleCheckbox('descriptionSection')}
                            className="sr-only peer"
                        />
                        <div
                            className="w-11 h-5 bg-gray-600 rounded-full peer peer-checked:bg-[#1D79CF] 
                                on-all duration-300"
                        ></div>
                        <div
                            className="absolute left-1 top-1.1 bg-white w-4 h-4 rounded-full 
                                n-all duration-300 peer-checked:translate-x-5"
                        ></div>
                    </label>
                    <div className="bg-white rounded-full p-1">
                        <IoIosArrowDown
                            className={`text-[#1D79CF] text-2xl transition-transform duration-200 ${openSections.description ? 'rotate-180' : ''
                                }`}
                        />
                    </div>
                </div>
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openSections.socialMedia ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                id="description-content"
            >
                <div className="bg-white p-6 border-t border-gray-200 rounded-b-2xl">
                    <label className="block text-md font-medium text-gray-600 mb-2">الوصف</label>
                    <textarea
                        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        rows="4"
                        placeholder="أدخل وصفك هنا"
                        maxLength={500}
                        aria-label="Enter description"
                    ></textarea>
                </div>
            </div>
            {/* Links Section */}
            <div className='bg-[#C9DAE2] p-4 rounded-4xl px-6 flex align-baseline justify-between cursor-pointer'
                onClick={() => toggleSection('description')}
            >
                <div className='flex align-baseline space-x-2'>
                    <RiDraggable className='text-2xl text-[#1D79CF]' />

                    <h3 className='text-[#1D79CF] text-xl font-medium'>روابط</h3>
                </div>
                <div className='flex align-baseline space-x-8'>
                    <label className="relative inline-flex items-center cursor-pointer" onClick={(e) => e.stopPropagation()}>
                        <input
                            type="checkbox"
                            checked={toggleStates.links}
                            onChange={() => toggleCheckbox('descriptionSection')}
                            className="sr-only peer"
                        />
                        <div
                            className="w-11 h-5 bg-gray-600 rounded-full peer peer-checked:bg-[#1D79CF] 
                                on-all duration-300"
                        ></div>
                        <div
                            className="absolute left-1 top-1.1 bg-white w-4 h-4 rounded-full 
                                n-all duration-300 peer-checked:translate-x-5"
                        ></div>
                    </label>
                    <div className="bg-white rounded-full p-1">
                        <IoIosArrowDown
                            className={`text-[#1D79CF] text-2xl transition-transform duration-200 ${openSections.links ? 'rotate-180' : ''
                                }`}
                        />
                    </div>
                </div>
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openSections.links ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                id="description-content"
            >
                <div className="bg-white p-6 border-t border-gray-200 rounded-b-2xl">
                    <label className="block text-md font-medium text-gray-600 mb-2">الوصف</label>
                    <textarea
                        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        rows="4"
                        placeholder="أدخل وصفك هنا"
                        maxLength={500}
                        aria-label="Enter description"
                    ></textarea>
                </div>
            </div>
            {/* Videos Section */}
            <div className='bg-[#C9DAE2] p-4 rounded-4xl px-6 flex align-baseline justify-between cursor-pointer'
                onClick={() => toggleSection('videos')}
            >
                <div className='flex align-baseline space-x-2'>
                    <RiDraggable className='text-2xl text-[#1D79CF]' />

                    <h3 className='text-[#1D79CF] text-xl font-medium'>فيديو</h3>
                </div>
                <div className='flex align-baseline space-x-8'>
                    <label className="relative inline-flex items-center cursor-pointer" onClick={(e) => e.stopPropagation()}>
                        <input
                            type="checkbox"
                            checked={toggleStates.videos}
                            onChange={() => toggleCheckbox('descriptionSection')}
                            className="sr-only peer"
                        />
                        <div
                            className="w-11 h-5 bg-gray-600 rounded-full peer peer-checked:bg-[#1D79CF] 
                                on-all duration-300"
                        ></div>
                        <div
                            className="absolute left-1 top-1.1 bg-white w-4 h-4 rounded-full 
                                n-all duration-300 peer-checked:translate-x-5"
                        ></div>
                    </label>
                    <div className="bg-white rounded-full p-1">
                        <IoIosArrowDown
                            className={`text-[#1D79CF] text-2xl transition-transform duration-200 ${openSections.videos ? 'rotate-180' : ''
                                }`}
                        />
                    </div>
                </div>
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openSections.videos ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                id="description-content"
            >
                <div className="bg-white p-6 border-t border-gray-200 rounded-b-2xl">
                    <label className="block text-md font-medium text-gray-600 mb-2">الوصف</label>
                    <textarea
                        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        rows="4"
                        placeholder="أدخل وصفك هنا"
                        maxLength={500}
                        aria-label="Enter description"
                    ></textarea>
                </div>
            </div>
        </div>
    )
}

export default ToggleSection
