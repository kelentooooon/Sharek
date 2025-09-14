import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'اسم المستخدم مطلوب';
    }
    
    if (!formData.password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (formData.password.length < 6) {
      newErrors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Login attempt:', formData);
      // Handle successful login here
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-4" dir="rtl">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-2xl shadow-blue-100/50">
        {/* Header */}
        <div className="text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 p-3 text-sky-600">
            <FaLock className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">أهلاً بعودتك</h1>
          <p className="mt-2 text-gray-600">سجل دخولك إلى حساب شارك</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Username Field */}
          <div>
            <label className="sr-only" htmlFor="username">اسم المستخدم</label>
            <input
              className={`w-full rounded-lg border p-4 text-base text-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 text-right ${errors.username ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 bg-gray-50 focus:border-sky-500 focus:ring-sky-500 focus:bg-white'} ${isLoading ? 'opacity-60 cursor-not-allowed bg-gray-100' : ''}`}
              id="username"
              name="username"
              placeholder="اسم المستخدم"
              required
              type="text"
              value={formData.username}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-600">{errors.username}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="sr-only" htmlFor="password">كلمة المرور</label>
            <input
              className={`w-full rounded-lg border p-4 text-base text-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 text-right ${errors.password ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 bg-gray-50 focus:border-sky-500 focus:ring-sky-500 focus:bg-white'} ${isLoading ? 'opacity-60 cursor-not-allowed bg-gray-100' : ''}`}
              id="password"
              name="password"
              placeholder="كلمة المرور"
              required
              type="password"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          {/* Forgot Password Link */}
          <div className="flex items-center justify-end">
            <a 
              className="text-sm font-medium text-green-600 hover:text-green-700 transition-colors duration-200" 
              href="/forget-password"
            >
              نسيت كلمة المرور؟
            </a>
          </div>

          {/* Submit Button */}
          <div>
            <button
              className={`w-full cursor-pointer rounded-lg bg-sky-600 py-3 px-5 text-center text-base font-bold text-white shadow-sm transition-all duration-300 hover:bg-sky-700 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${isLoading ? 'opacity-70 cursor-not-allowed transform-none hover:transform-none hover:shadow-sm' : ''}`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  جاري تسجيل الدخول...
                </div>
              ) : (
                'تسجيل الدخول'
              )}
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600">
          لا تملك حساباً؟
          <a 
            className="font-medium text-sky-600 hover:text-sky-700 mr-1 transition-colors duration-200" 
            href="/register"
          >
            إنشاء حساب جديد
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
