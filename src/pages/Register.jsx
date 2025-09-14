import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    
    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = 'اسم المستخدم مطلوب';
    } else if (formData.username.length < 3) {
      newErrors.username = 'اسم المستخدم يجب أن يكون 3 أحرف على الأقل';
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username = 'اسم المستخدم يجب أن يحتوي على أحرف وأرقام فقط';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (formData.password.length < 8) {
      newErrors.password = 'كلمة المرور يجب أن تكون 8 أحرف على الأقل';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'كلمة المرور يجب أن تحتوي على حرف كبير وصغير ورقم';
    }
    
    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'تأكيد كلمة المرور مطلوب';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'كلمة المرور غير متطابقة';
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
      console.log('Sign-up attempt:', formData);
      // Handle successful sign-up here
    } catch (error) {
      console.error('Sign-up error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50 font-sans text-gray-900" dir="rtl">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 text-2xl font-bold text-sky-700">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319)">
                  <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor" />
                </g>
                <defs>
                  <clipPath id="clip0_6_319">
                    <rect fill="white" height="48" width="48" />
                  </clipPath>
                </defs>
              </svg>
              <span>شارك</span>
            </div>
            
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">إنشاء حساب جديد</h2>
            <p className="mt-2 text-sm text-gray-600">
              هل لديك حساب بالفعل؟
              <a className="font-medium text-sky-600 hover:text-sky-500 mr-1" href="/login">
                تسجيل الدخول
              </a>
            </p>
          </div>

          {/* Sign Up Form */}
          <div className="mt-8">
            <div className="mt-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                
                {/* Username Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                    اسم المستخدم
                  </label>
                  <div className="mt-1">
                    <input
                      autoComplete="username"
                      className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm ${errors.username ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
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
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                    البريد الإلكتروني
                  </label>
                  <div className="mt-1">
                    <input
                      autoComplete="email"
                      className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                    كلمة المرور
                  </label>
                  <div className="mt-1">
                    <input
                      autoComplete="new-password"
                      className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm ${errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                      id="password"
                      name="password"
                      placeholder="••••••••"
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
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
                    تأكيد كلمة المرور
                  </label>
                  <div className="mt-1">
                    <input
                      autoComplete="new-password"
                      className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm ${errors.confirmPassword ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="••••••••"
                      required
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                    {errors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-200 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                        جاري إنشاء الحساب...
                      </div>
                    ) : (
                      'إنشاء حساب'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-sky-500 to-green-300 opacity-70"></div>
        <img
          alt="صورة تسجيل"
          className="absolute inset-0 h-full w-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfRr_N8jbbe1RnYPVGlr16-m6Y7if69Cgtcyp-hoTuuyLxeoff7w0eLTPr7finyZsmBCT57dt3B7h3iSZxDJOhfFeHS35egJWOdMK1OUYjG3WDfwccFtqHMrG4x1NiL0ef4_mOcbCw44cxN9HgmXM2hyK9zj-naJd44rOWITXQwjGJl1LYNteAwBITw-73dvYgxSq_3eTHkyXeiGRuvlaFxVcl6rI-nwBjqF4_nBRO_CHjHgpr1108FwVJrlCGHsAslAaVoERJKTQ"
        />
      </div>
    </div>
  );
};

export default SignUp;
