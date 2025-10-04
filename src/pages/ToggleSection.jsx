import React, { useCallback, useMemo, useState } from 'react'
import { IoIosArrowDown, IoMdCheckmark } from 'react-icons/io';
import { RiDraggable, RiUploadCloud2Line } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa';
import contactLogo from '../assets/contactus.webp';
import { FiTrash2 } from 'react-icons/fi';
import fb_icon from '../assets/fb_icon.webp';
import twitter_icon from '../assets/X_icon.webp';
import linkedin_icon from '../assets/linkedin_icon.webp';
import instagram_icon from '../assets/insta_icon.webp';
import snapchat_icon from '../assets/snap_icon.webp';
import link_icon from '../assets/links.webp'

// Constants
const PLATFORM_DEFAULTS = {
    facebook: { img: fb_icon, title: "Facebook", subtitle: "Follow us on Facebook" },
    twitter: { img: twitter_icon, title: "Twitter", subtitle: "Follow us on Twitter" },
    linkedin: { img: linkedin_icon, title: "LinkedIn", subtitle: "Connect with us on LinkedIn" },
    instagram: { img: instagram_icon, title: "Instagram", subtitle: "Follow us on Instagram" },
    snapchat: { img: snapchat_icon, title: "Snapchat", subtitle: "Follow us on Snapchat" },
};

const CONTACT_TYPES = [
    { value: 'mobile', label: 'جوال' },
    { value: 'email', label: 'بريد' },
    { value: 'sms', label: 'رسالة' },
    { value: 'whatsapp', label: 'واتساب' },
    { value: 'location', label: 'موقع' },
    { value: 'telephone', label: 'هاتف' },
];

const SECTION_KEYS = {
    PROFILE: 'profile',
    CONTACT: 'contact',
    DESCRIPTION: 'description',
    IMAGES: 'images',
    SOCIAL_MEDIA: 'socialMedia',
    LINKS: 'links',
};

// Reusable Components
const ToggleSwitch = ({ checked, onChange }) => (
    <label className="relative inline-flex items-center cursor-pointer" onClick={e => e.stopPropagation()}>
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="sr-only peer"
        />
        <div className="w-11 h-5 bg-gray-600 rounded-full peer peer-checked:bg-[#1D79CF] transition-all duration-300" />
        <div className="absolute left-1 top-1.1 bg-white w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-5" />
    </label>
);

const ImageUpload = ({ image, onUpload, alt, className = "w-32 h-32" }) => (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-[#DBDBDB] ${className}`}>
        {image ? (
            <img src={image} alt={alt} className="w-full h-full object-cover border-2 border-[#DBDBDB] rounded-xl" />
        ) : (
            <div className="text-gray-400 text-center p-4">
                <RiUploadCloud2Line className='text-5xl text-[#1D79CF]' />
            </div>
        )}
        <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={onUpload}
            accept="image/*"
        />
    </div>
);

const SectionHeader = ({ title, isOpen, onToggle, isEnabled, onToggleEnabled }) => (
    <div
        className='bg-[#C9DAE2] p-4 rounded-4xl px-6 flex align-baseline justify-between cursor-pointer'
        onClick={onToggle}
    >
        <div className='flex align-baseline space-x-2'>
            <RiDraggable className='text-2xl text-[#1D79CF]' />
            <h3 className='text-[#1D79CF] text-xl font-medium'>{title}</h3>
        </div>
        <div className='flex align-baseline space-x-8'>
            <ToggleSwitch checked={isEnabled} onChange={onToggleEnabled} />
            <div className="bg-white rounded-full p-1">
                <IoIosArrowDown className={`text-[#1D79CF] text-2xl transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
        </div>
    </div>
);

const ToggleSection = () => {
    const [openSections, setOpenSections] = useState({
        [SECTION_KEYS.PROFILE]: true,
        [SECTION_KEYS.CONTACT]: false,
        [SECTION_KEYS.DESCRIPTION]: false,
        [SECTION_KEYS.IMAGES]: false,
        [SECTION_KEYS.SOCIAL_MEDIA]: false,
        [SECTION_KEYS.LINKS]: false,
    });
    const [toggleStates, setToggleStates] = useState({
        profileSection: true,
        personalImage: true,
        companyLogo: true,
        communicationIcons: true,
        descriptionSection: true,
        contactSection: true,
        contactLogo: true,
        imagesSection: true,
        socialMediaSection: true,
        socialMediaTitleandDescription: true,
        linksSection: true,
        linksTitleandDescription: true,
    });

    const [profileData, setProfileData] = useState({
        personalImage: null,
        companyLogo: null,
        name: '',
        jobDescription: '',
        companyName: '',
        title: '',
        titleDescription: '',
        contactLogo: contactLogo,
        titleContact: '',
        contactNumberLabel: '',
        contactNumber: '',
        contactEmailLabel: '',
        contactEmail: '',
        contactAddressLabel: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        governorate: '',
        country: '',
        postalCode: '',
        images: [],
        socialMediaTitle: '',
        socialMediaDescription: '',
        linksTitle: '',
        linksDescription: '',
    });

    const [contactFields, setContactFields] = useState([
        { id: 1, type: 'mobile', value: '' },
        { id: 2, type: 'email', value: '' },
    ]);

    const [socialMediaLinks, setSocialMediaLinks] = useState([
        { id: 1, platform: "facebook", url: "", ...PLATFORM_DEFAULTS.facebook, default: true, active: true },
        { id: 2, platform: "instagram", url: "", ...PLATFORM_DEFAULTS.instagram, default: true, active: true },
        { id: 3, platform: "twitter", url: "", ...PLATFORM_DEFAULTS.twitter, default: true, active: true },
        { id: 4, platform: "linkedin", url: "", ...PLATFORM_DEFAULTS.linkedin, default: false, active: false },
        { id: 5, platform: "snapchat", url: "", ...PLATFORM_DEFAULTS.snapchat, default: false, active: false },
    ]);

    const [links, setLinks] = useState([
        { id: 1, title: '', subTitle: '', url: '', image: link_icon }
    ]);

    // Only visible links (defaults + active)
    const visibleLinks = useMemo(() =>
        socialMediaLinks.filter(link => link.default || link.active),
        [socialMediaLinks]
    );


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
    const handleProfileChange = useCallback((e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    // Handle image upload
    const handleImageUpload = useCallback((e, type) => {
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
    }, []);

    const handleMultipleImagesUpload = useCallback((e) => {
        const files = Array.from(e.target.files);
        if (!files.length) return;

        const newImages = files.map((file) => URL.createObjectURL(file));
        setProfileData((prev) => ({
            ...prev,
            images: [...prev.images, ...newImages],
        }));
    }, []);

    const handleDeleteImage = useCallback((index) => {
        setProfileData((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
        }));
    }, []);


    // Contact Fields Management
    const addContactField = useCallback(() => {
        setContactFields((prev) => [
            ...prev,
            { id: Date.now(), type: 'mobile', value: '' },
        ]);
    }, []);

    const updateContactField = useCallback((id, field, value) => {
        setContactFields((prev) =>
            prev.map((contact) =>
                contact.id === id ? { ...contact, [field]: value } : contact
            )
        );
    }, []);

    const removeContactField = useCallback((id) => {
        if (contactFields.length > 1) {
            setContactFields((prev) => prev.filter((contact) => contact.id !== id));
        }
    }, [contactFields.length]);


    // Social Media Links Management
    const updateLinkById = useCallback((id, updates) => {
        setSocialMediaLinks(prev =>
            prev.map(link => (link.id === id ? { ...link, ...updates } : link))
        );
    }, []);

    // Add new link
    const addNewLink = useCallback(() => {
        const visibleLinksCount = socialMediaLinks.filter(link => link.default || link.active).length;
        if (visibleLinksCount >= 7) return;

        const defaultPlatform = "facebook";
        const defaults = PLATFORM_DEFAULTS[defaultPlatform];

        setSocialMediaLinks(prev => [
            ...prev,
            {
                id: Date.now(),
                platform: defaultPlatform,
                url: "",
                ...defaults,
                default: false,
                active: true,
            },
        ]);
    }, [socialMediaLinks]);

    const removeLink = useCallback((id) => {
        setSocialMediaLinks(prev =>
            prev.map(link => (link.id === id ? { ...link, active: false } : link))
        );
    }, []);

    // Links Management
    const handleLinkChange = useCallback((id, field, value) => {
        setLinks(prev =>
            prev.map(link =>
                link.id === id ? { ...link, [field]: value } : link
            )
        );
    }, []);

    const handleLinkImageUpload = useCallback((e, id) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = ev => {
                setLinks(prev =>
                    prev.map(link =>
                        link.id === id ? { ...link, image: ev.target.result } : link
                    )
                );
            };
            reader.readAsDataURL(file);
        }
    }, []);

    // Add new link
    const addLink = useCallback(() => {
        setLinks(prev => [
            ...prev,
            { id: Date.now(), url: "", image: link_icon, title: "", subtitle: "" }
        ]);
    }, []);

    // Delete link
    const deleteLink = useCallback((id) => {
        setLinks(prev => prev.filter(link => link.id !== id));
    }, []);

    const handleShowAllData = useCallback(() => {
        console.log('=== All Component State Dump ===');
        console.log('openSections:', openSections);
        console.log('toggleStates:', toggleStates);
        console.log('profileData:', profileData);
        console.log('contactFields:', contactFields);
        console.log('socialMediaLinks:', socialMediaLinks);
        console.log('links:', links);
        console.log('visibleLinks:', visibleLinks);
        console.log('=== End State Dump ===');
    }, [openSections, toggleStates, profileData, contactFields, socialMediaLinks, links, visibleLinks]);

    // Render Mehthods
    const renderContactFields = () => (
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
                            {CONTACT_TYPES.map(type => (
                                <option key={type.value} value={type.value}>{type.label}</option>
                            ))}
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
        </>
    );

    const renderSocialMediaLinks = () => (
        <>
            {visibleLinks.map((link) => (
                <div key={link.id} className="bg-[#EEF3F6] py-7 px-5 rounded-lg mb-6 relative">
                    {!link.default && (
                        <button
                            onClick={() => removeLink(link.id)}
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                        >
                            <FiTrash2 size={16} />
                        </button>
                    )}
                    <div className='flex items-center'>
                        {/* Platform Dropdown */}
                        <div className='relative w-1/4'>
                            <select
                                value={link.platform}
                                onChange={(e) => {
                                    const newPlatform = e.target.value;
                                    const defaults = PLATFORM_DEFAULTS[newPlatform];

                                    updateLinkById(link.id, {
                                        platform: newPlatform,
                                        img: defaults.img,
                                        title: defaults.title,
                                        subtitle: defaults.subtitle,
                                    });
                                }}
                                className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none w-full"
                                aria-label="Select contact type"
                            >
                               {Object.keys(PLATFORM_DEFAULTS).map(platform => (
                                    <option key={platform} value={platform}>
                                        {PLATFORM_DEFAULTS[platform].title}
                                    </option>
                                ))}
                            </select>
                            <IoIosArrowDown className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-500 pointer-events-none" />
                        </div>

                        {/* URL Input */}
                        <input
                            type="text"
                            placeholder="ادخل الرابط هنا"
                            value={link.url || ''}
                            onChange={(e) => updateLinkById(link.id, { url: e.target.value })}
                            className="w-3/4 px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                    </div>

                    {/* Show Icon */}
                    <div className='my-6'>
                        <img
                            src={link.img}
                            alt={link.platform}
                            className="w-12 h-12 object-contain"
                        />
                    </div>
                    <div className='flex gap-4'>
                        {/* Title Input */}
                        <div className='w-1/2'>
                            <label className="block text-md font-medium text-gray-400 mb-2">العنوان    </label>                         <input
                                type="text"
                                placeholder="العنوان"
                                value={link.title}
                                onChange={(e) => updateLinkById(link.id, { title: e.target.value })}
                                className="w-full px-4 py-2 text-black-500 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            />
                        </div>


                        {/* Subtitle Input */}
                        <div className='w-1/2'>
                            <label className="block text-md font-medium text-gray-400 mb-2">العنوان الفرعي</label>
                            <input
                                type="text"
                                placeholder="العنوان الفرعي"
                                value={link.subtitle}
                                onChange={(e) => updateLinkById(link.id, { subtitle: e.target.value })}
                                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            />
                        </div>

                    </div>
                </div>
            ))}

            {socialMediaLinks.length < 7 && (
                <button
                    onClick={addNewLink}
                    className="mt-4 px-2 flex items-center gap-2 w-34 h-8 rounded-lg text-white font-medium duration-300 transition-all bg-[#20846c] hover:bg-[#3abf99] text-sm cursor-pointer">

                    <FaPlus className='text-sm' />
                    اضافة رابط جديد
                </button>
            )}</>
    );


    return (
        <div className='mt-12 space-y-4'>
            {/* Profile Section */}
            <SectionHeader
                title="الملف التعريفي"
                isOpen={openSections.profile}
                onToggle={() => toggleSection(SECTION_KEYS.PROFILE)}
                isEnabled={toggleStates.profileSection}
                onToggleEnabled={() => toggleCheckbox('profileSection')}
            />
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
                                    <ToggleSwitch
                                        checked={toggleStates.personalImage}
                                        onChange={() => toggleCheckbox('personalImage')}
                                    />
                                </label>
                            </div>
                            <div className='flex gap-4'>
                                {profileData.personalImage && (
                                    <ImageUpload image={profileData.personalImage} onUpload={() => { }} alt="Personal" />
                                )}
                                <ImageUpload
                                    image={null}
                                    onUpload={(e) => handleImageUpload(e, 'personalImage')}
                                    alt="Upload personal"
                                />
                            </div>
                        </div>

                        {/* Company Logo Upload */}
                        <div className="flex flex-col">
                            <div className='flex items-center mb-4 gap-30 '>
                                <label className="block text-md font-medium text-gray-400 mb-2">شعار الشركة</label>
                                <ToggleSwitch
                                    checked={toggleStates.companyLogo}
                                    onChange={() => toggleCheckbox('companyLogo')}
                                />
                            </div>
                            <div className="flex gap-4">
                                {profileData.companyLogo && (
                                    <ImageUpload image={profileData.companyLogo} onUpload={() => { }} alt="Company Logo" />
                                )}
                                <ImageUpload
                                    image={null}
                                    onUpload={(e) => handleImageUpload(e, 'companyLogo')}
                                    alt="Upload company logo"
                                />
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

                            <ToggleSwitch
                                checked={toggleStates.communicationIcons}
                                onChange={() => toggleCheckbox('communicationIcons')}
                            />
                        </label>
                        {toggleStates.communicationIcons && renderContactFields()}

                    </div>
                </div>
            </div>
            {/* Description Section */}
            <SectionHeader
                title="الوصف"
                isOpen={openSections.description}
                onToggle={() => toggleSection(SECTION_KEYS.DESCRIPTION)}
                isEnabled={toggleStates.descriptionSection}
                onToggleEnabled={() => toggleCheckbox('descriptionSection')}
            />
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openSections.description ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                id="description-content"
            >
                <div className="bg-white p-6 border-t border-gray-200">
                    <label className="block text-md font-medium text-gray-400 mb-2">العنوان</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="أدخل العنوان"
                        aria-label="Enter title"
                        value={profileData.title}
                        onChange={handleProfileChange}
                    ></input>
                    <label className="block text-md font-medium text-gray-400 mb-2 mt-5">الوصف</label>
                    <textarea
                        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        rows="4"
                        placeholder="أدخل وصفك هنا"
                        maxLength={500}
                        aria-label="Enter description"
                        name="titleDescription"
                        value={profileData.titleDescription}
                        onChange={handleProfileChange}
                    ></textarea>

                </div>
            </div>
            {/* Contact Section */}
            <SectionHeader
                title="تواصل معي"
                isOpen={openSections.contact}
                onToggle={() => toggleSection(SECTION_KEYS.CONTACT)}
                isEnabled={toggleStates.contactSection}
                onToggleEnabled={() => toggleCheckbox('contactSection')}
            />
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openSections.contact ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                id="contact-content"
            >
                <div className="bg-white p-6 border-t border-gray-200 rounded-b-2xl">
                    {/* Title */}
                    <div className='mb-4'>
                        <label className="block text-md font-medium text-gray-400 mb-2">العنوان</label>
                        <input
                            type="text"
                            name="titleContact"
                            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="أدخل العنوان"
                            aria-label="Enter title"
                            value={profileData.titleContact}
                            onChange={handleProfileChange}
                        ></input>
                    </div>
                    {/* Logo Upload */}
                    <div className="flex flex-col mb-8">
                        <div className='flex items-center mb-4 gap-4 '>
                            <label className="text-md font-medium text-gray-400 mb-2 flex gap-5 items-center">الشعار
                                <ToggleSwitch
                                    checked={toggleStates.contactLogo}
                                    onChange={() => toggleCheckbox('contactLogo')}
                                />
                            </label>
                        </div>
                        <div className='flex gap-4'>
                            {profileData.contactLogo && (
                                <ImageUpload image={profileData.contactLogo} onUpload={() => { }} alt="Contact Logo" className="w-18 h-18" />
                            )}
                            <ImageUpload
                                image={null}
                                onUpload={(e) => handleImageUpload(e, 'contactLogo')}
                                alt="Upload contact logo"
                                className="w-18 h-18"
                            />
                        </div>
                    </div>
                    {/* Contact */}
                    <label className="block text-md font-medium text-gray-400 ">رقم الاتصال</label>
                    <div className="bg-[#EEF3F6] p-4 rounded-lg flex items-center gap-6">
                        <div className="w-1/3">
                            <label className="block text-md font-medium text-gray-400 mb-2">الاسم</label>
                            <input
                                type="text"
                                name='contactNumberLabel'
                                value={profileData.contactNumberLabel}
                                onChange={handleProfileChange}
                                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                placeholder="أدخل المعلومات"
                            />
                        </div>
                        <div className='w-2/3'>
                            <label className="block text-md font-medium text-gray-400 mb-2">الرقم</label>
                            <input
                                type="number"
                                name='contactNumber'
                                value={profileData.contactNumber}
                                onChange={handleProfileChange}
                                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                placeholder="123 456 7890"
                            />
                        </div>
                    </div>
                    <label className="block text-md font-medium text-gray-400 ">البريد الألكتروني</label>
                    <div className="bg-[#EEF3F6] p-4 rounded-lg flex items-center gap-6">
                        <div className="w-1/3">
                            <label className="block text-md font-medium text-gray-400 mb-2">الاسم</label>
                            <input
                                type="text"
                                name='contactEmailLabel'
                                value={profileData.contactEmailLabel}
                                onChange={handleProfileChange}
                                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                placeholder="الايميل"
                            />
                        </div>
                        <div className='w-2/3'>
                            <label className="block text-md font-medium text-gray-400 mb-2">البريد الألكتروني</label>
                            <input
                                type="email"
                                name='contactEmail'
                                value={profileData.contactEmail}
                                onChange={handleProfileChange}
                                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                placeholder="contactme@domain.com"
                            />
                        </div>
                    </div>
                    <label className="block text-md font-medium text-gray-400 ">العنوان</label>

                    <div className="bg-[#EEF3F6] p-4 rounded-lg">
                        <div className='mb-4'>
                            <label className="block text-md font-medium text-gray-400 mb-2">العنوان</label>
                            <input
                                type="text"
                                name="contactAddressLabel"
                                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                placeholder="أدخل العنوان"
                                aria-label="Enter title"
                                value={profileData.contactAddressLabel}
                                onChange={handleProfileChange}
                            ></input>
                        </div>
                        <div className='flex items-center gap-6 mb-2'>
                            <div className="w-1/2">
                                <label className="block text-md font-medium text-gray-400 mb-2">العنوان الاول</label>
                                <input
                                    type="text"
                                    name='addressLine1'
                                    value={profileData.addressLine1}
                                    onChange={handleProfileChange}
                                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    placeholder="الشارع"
                                />
                            </div>
                            <div className='w-1/2'>
                                <label className="block text-md font-medium text-gray-400 mb-2">العنوان الثاني</label>
                                <input
                                    type="text"
                                    name='addressLine2'
                                    value={profileData.addressLine2}
                                    onChange={handleProfileChange}
                                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                />
                            </div>
                        </div>
                        <div className='flex items-center gap-6 mb-2'>
                            <div className="w-1/2">
                                <label className="block text-md font-medium text-gray-400 mb-2">المدينة</label>
                                <input
                                    type="text"
                                    name='city'
                                    value={profileData.city}
                                    onChange={handleProfileChange}
                                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    placeholder="المدينة"
                                />
                            </div>
                            <div className='w-1/2'>
                                <label className="block text-md font-medium text-gray-400 mb-2">المحافظة</label>
                                <input
                                    type="text"
                                    name='governorate'
                                    value={profileData.governorate}
                                    onChange={handleProfileChange}
                                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    placeholder="المحافظة"
                                />
                            </div>
                        </div>
                        <div className='flex items-center gap-6'>
                            <div className="w-1/2">
                                <label className="block text-md font-medium text-gray-400 mb-2">الدولة</label>
                                <input
                                    type="text"
                                    name='country'
                                    value={profileData.country}
                                    onChange={handleProfileChange}
                                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    placeholder="الدولة"
                                />
                            </div>
                            <div className='w-1/2'>
                                <label className="block text-md font-medium text-gray-400 mb-2">رمز البريد</label>
                                <input
                                    type="number"
                                    name='postalCode'
                                    value={profileData.postalCode}
                                    onChange={handleProfileChange}
                                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    placeholder="رمز البريد"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Images Section */}
            <SectionHeader
                title="الصور"
                isOpen={openSections.images}
                onToggle={() => toggleSection(SECTION_KEYS.IMAGES)}
                isEnabled={toggleStates.imagesSection}
                onToggleEnabled={() => toggleCheckbox('imagesSection')}
            />
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openSections.images ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                id="images-content"
            >
                <div className="bg-white p-6 border-t border-gray-200 rounded-b-2xl">
                    <div className="flex gap-4">
                        {profileData.images.length > 0 &&
                            profileData.images.map((img, index) => (
                                <div
                                    key={index}
                                    className="relative w-18 h-18 flex items-center justify-center overflow-hidden rounded-md bg-[#DBDBDB] group">
                                    <img
                                        src={img}
                                        alt={`Uploaded ${index}`}
                                        className="w-full h-full object-cover border-2 border-[#DBDBDB] rounded-md"
                                    />
                                    {/* Trash Icon */}
                                    <button
                                        onClick={() => handleDeleteImage(index)}
                                        className="absolute top-1 right-1 bg-white p-1 rounded-full shadow-md text-red-500 opacity-0 group-hover:opacity-100 transition cursor-pointer"
                                    >
                                        <FiTrash2 size={16} />
                                    </button>
                                </div>
                            ))
                        }

                        <div className="relative w-18 h-18 flex items-center justify-center overflow-hidden rounded-md bg-[#DBDBDB]">
                            <div className="text-gray-400 text-center p-4">
                                <RiUploadCloud2Line className="text-3xl text-[#1D79CF]" />
                            </div>
                            <input
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                onChange={handleMultipleImagesUpload}
                                accept="image/*"
                                multiple
                            />
                        </div>
                    </div>

                </div>
            </div>
            {/* Social Media Section */}
            <SectionHeader
                title="مواقع التواصل الاحتماعي"
                isOpen={openSections.socialMedia}
                onToggle={() => toggleSection(SECTION_KEYS.SOCIAL_MEDIA)}
                isEnabled={toggleStates.socialMediaSection}
                onToggleEnabled={() => toggleCheckbox('socialMediaSection')}
            />
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openSections.socialMedia ? 'max-h-[5000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                id="socialMedia-content"
            >
                <label className="text-md font-medium text-gray-400 mb-2 flex gap-5 items-center">
                    العنوان والوصف
                    <ToggleSwitch
                        checked={toggleStates.socialMediaTitleandDescription}
                        onChange={() => toggleCheckbox('socialMediaTitleandDescription')}
                    />
                </label>
                {toggleStates.socialMediaTitleandDescription &&
                    <div className="bg-[#EEF3F6]  p-4 rounded-lg mb-8">
                        <label className="block text-md font-medium text-gray-400 mb-2">العنوان</label>
                        <input
                            type="text"
                            name="socialMediaTitle"
                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="لينك"
                            aria-label="Enter title"
                            value={profileData.socialMediaTitle}
                            onChange={handleProfileChange}
                        ></input>
                        <label className="block text-md font-medium text-gray-400 mb-2 mt-5">الوصف</label>
                        <textarea
                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            rows="4"
                            placeholder="أدخل وصفك هنا"
                            maxLength={500}
                            aria-label="Enter description"
                            name="socialMediaDescription"
                            value={profileData.socialMediaDescription}
                            onChange={handleProfileChange}
                        ></textarea>

                    </div>}
                {renderSocialMediaLinks()}

            </div>
            {/* Links Section */}
            <SectionHeader
                title="روابط"
                isOpen={openSections.links}
                onToggle={() => toggleSection(SECTION_KEYS.LINKS)}
                isEnabled={toggleStates.linksSection}
                onToggleEnabled={() => toggleCheckbox('linksSection')}
            />
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openSections.links ? 'max-h-[1500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                id="links-content"
            >
                <label className="text-md font-medium text-gray-400 mb-2 flex gap-5 items-center">
                    العنوان والوصف
                    <ToggleSwitch 
                            checked={toggleStates.linksTitleandDescription} 
                            onChange={() => toggleCheckbox('linksTitleandDescription')} 
                        />
                         </label>
                {toggleStates.linksTitleandDescription && (
                    <div className="bg-[#EEF3F6]  p-4 rounded-lg mb-8">
                        <label className="block text-md font-medium text-gray-400 mb-2">العنوان</label>
                        <input
                            type="text"
                            name="linksTitle"
                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="لينك"
                            aria-label="Enter title"
                            value={profileData.linksTitle}
                            onChange={handleProfileChange}
                        ></input>
                        <label className="block text-md font-medium text-gray-400 mb-2 mt-5">الوصف</label>
                        <textarea
                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            rows="4"
                            placeholder="أدخل وصفك هنا"
                            maxLength={500}
                            aria-label="Enter description"
                            name="linksDescription"
                            value={profileData.linksDescription}
                            onChange={handleProfileChange}
                        ></textarea>
                    </div>
                )}
                {
                links.map((link) => <div key={link.id} className="bg-[#EEF3F6] py-7 px-5 rounded-lg mb-6 relative">
                    {links.length > 1 && (
                        <button
                            onClick={() => deleteLink(link.id)}
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                        >
                            <FiTrash2 size={16} />
                        </button>
                    )}
                    <label className="block text-md font-medium text-gray-400 mb-2">الرابط</label>
                    <input
                        type="text"
                        placeholder="ادخل الرابط هنا"
                        value={link.url}
                        onChange={(e) => handleLinkChange(link.id, "url", e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                    <div className='flex gap-4 my-5'>
                        <div className="relative w-18 h-18 flex items-center justify-center overflow-hidden rounded-xl bg-[#DBDBDB]">
                            <img
                                src={link.image} alt="link image"
                                className="w-full h-full object-cover border-2 border-[#DBDBDB] rounded-xl p-1"
                            />
                        </div>
                        <div className="relative w-18 h-18 flex items-center justify-center overflow-hidden rounded-xl bg-[#DBDBDB]">
                            <div className="text-gray-400 text-center p-4">
                                <RiUploadCloud2Line className='text-3xl text-[#1D79CF]' />
                            </div>
                            <input
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                onChange={(e) => handleLinkImageUpload(e, link.id)}
                                accept="image/*"
                            />
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        {/* Title Input */}
                        <div className='w-1/2'>
                            <label className="block text-md font-medium text-gray-400 mb-2">العنوان    </label>                         <input
                                type="text"
                                placeholder="العنوان"
                                value={link.title}
                                onChange={(e) => handleLinkChange(link.id, "title", e.target.value)}
                                className="w-full px-4 py-2 text-black-500 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            />
                        </div>


                        {/* Subtitle Input */}
                        <div className='w-1/2'>
                            <label className="block text-md font-medium text-gray-400 mb-2">العنوان الفرعي</label>
                            <input
                                type="text"
                                placeholder="العنوان الفرعي"
                                value={link.subtitle}
                                onChange={(e) => handleLinkChange(link.id, "subtitle", e.target.value)}
                                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            />
                        </div>

                    </div>

                </div>)}
                <button
                    onClick={addLink}
                    className="mt-4 px-2 flex items-center gap-2 w-28 h-8 rounded-lg text-white font-medium duration-300 transition-all bg-[#20846c] hover:bg-[#3abf99] text-sm cursor-pointer">

                    <FaPlus className='text-sm' />
                    اضافة رابط
                </button>
            </div>
            <button
                onClick={handleShowAllData}
                className="mt-8 px-4 py-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
            >
                عرض جميع البيانات
            </button>
        </div>
    )
}

export default ToggleSection
