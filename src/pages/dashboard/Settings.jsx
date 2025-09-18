import { useState } from 'react';
import { FaSave, FaUser, FaCog, FaGlobe, FaLock, FaBell, FaPalette } from 'react-icons/fa';
import DashboardLayout from '../../layout/DashboardLayout';

const Settings = () => {
  const [settings, setSettings] = useState({
    // General Settings
    companyName: 'شارك',
    contactEmail: 'contact@sharek.com',
    website: 'https://sharek.com',
    
    // System Settings
    language: 'ar',
    currency: 'SAR',
    timezone: 'Asia/Riyadh',
    
    // User Profile
    userName: 'أحمد محمد',
    userEmail: 'ahmed@sharek.com',
    password: '',
    
    // Notification Settings
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: true,
    
    // Theme Settings
    theme: 'light',
    primaryColor: '#2563EB'
  });

  const handleInputChange = (section, field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveSettings = () => {
    // Handle save logic here
    console.log('Settings saved:', settings);
    // Show success message or handle API call
  };

  return (
    <DashboardLayout activeItem="الإعدادات">
      <div className="max-w-4xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">الإعدادات</h1>
        
        <div className="space-y-6">
          {/* General Settings */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
              <FaCog className="text-blue-600" size={20} />
              <h3 className="text-xl font-semibold text-gray-800">الإعدادات العامة</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-600" htmlFor="company-name">
                  اسم الشركة
                </label>
                <input
                  className="w-full h-11 px-4 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                  id="company-name"
                  placeholder="شارك"
                  type="text"
                  value={settings.companyName}
                  onChange={(e) => handleInputChange('general', 'companyName', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-600" htmlFor="contact-email">
                  البريد الإلكتروني للتواصل
                </label>
                <input
                  className="w-full h-11 px-4 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                  id="contact-email"
                  placeholder="contact@sharek.com"
                  type="email"
                  value={settings.contactEmail}
                  onChange={(e) => handleInputChange('general', 'contactEmail', e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2 text-gray-600" htmlFor="website">
                  الموقع الإلكتروني
                </label>
                <input
                  className="w-full h-11 px-4 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                  id="website"
                  placeholder="https://sharek.com"
                  type="url"
                  value={settings.website}
                  onChange={(e) => handleInputChange('general', 'website', e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* System Settings */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
              <FaGlobe className="text-green-600" size={20} />
              <h3 className="text-xl font-semibold text-gray-800">إعدادات النظام</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-600" htmlFor="language">
                  اللغة الافتراضية
                </label>
                <select
                  className="w-full h-11 px-4 rounded-lg appearance-none bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                  id="language"
                  value={settings.language}
                  onChange={(e) => handleInputChange('system', 'language', e.target.value)}
                >
                  <option value="ar">العربية</option>
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-600" htmlFor="currency">
                  العملة الافتراضية
                </label>
                <select
                  className="w-full h-11 px-4 rounded-lg appearance-none bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                  id="currency"
                  value={settings.currency}
                  onChange={(e) => handleInputChange('system', 'currency', e.target.value)}
                >
                  <option value="SAR">ريال سعودي (SAR)</option>
                  <option value="USD">دولار أمريكي (USD)</option>
                  <option value="EUR">يورو (EUR)</option>
                  <option value="GBP">جنيه إسترليني (GBP)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2 text-gray-600" htmlFor="timezone">
                  المنطقة الزمنية
                </label>
                <select
                  className="w-full h-11 px-4 rounded-lg appearance-none bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                  id="timezone"
                  value={settings.timezone}
                  onChange={(e) => handleInputChange('system', 'timezone', e.target.value)}
                >
                  <option value="Asia/Riyadh">الرياض (GMT+3)</option>
                  <option value="Asia/Dubai">دبي (GMT+4)</option>
                  <option value="Africa/Cairo">القاهرة (GMT+2)</option>
                  <option value="UTC">التوقيت العالمي (UTC)</option>
                </select>
              </div>
            </div>
          </section>

          {/* User Profile */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
              <FaUser className="text-purple-600" size={20} />
              <h3 className="text-xl font-semibold text-gray-800">الملف الشخصي</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-600" htmlFor="user-name">
                  الاسم
                </label>
                <input
                  className="w-full h-11 px-4 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                  id="user-name"
                  placeholder="أحمد محمد"
                  type="text"
                  value={settings.userName}
                  onChange={(e) => handleInputChange('profile', 'userName', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-600" htmlFor="user-email">
                  البريد الإلكتروني
                </label>
                <input
                  className="w-full h-11 px-4 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                  id="user-email"
                  placeholder="ahmed@sharek.com"
                  type="email"
                  value={settings.userEmail}
                  onChange={(e) => handleInputChange('profile', 'userEmail', e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2 text-gray-600" htmlFor="password">
                  كلمة المرور الجديدة
                </label>
                <input
                  className="w-full h-11 px-4 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  value={settings.password}
                  onChange={(e) => handleInputChange('profile', 'password', e.target.value)}
                />
              </div>
            </div>
          </section>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSaveSettings}
            className="flex items-center gap-2 h-12 px-6 rounded-lg bg-green-600 text-white font-semibold text-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
          >
            <FaSave size={16} />
            حفظ التغييرات
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;