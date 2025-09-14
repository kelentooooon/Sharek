import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    
    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
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
      console.log('Password reset request:', formData);
      setIsSuccess(true);
    } catch (error) {
      console.error('Password reset error:', error);
      setErrors({ email: 'حدث خطأ أثناء إرسال رابط إعادة تعيين كلمة المرور' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToLogin = () => {

        navigate('/login');


    console.log('Navigate back to login');
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-4" dir="rtl">
        <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-2xl shadow-blue-100/50">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-green-100 p-3 text-green-600">
              <FaEnvelope className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900">تم إرسال الرابط!</h1>
            <p className="mt-2 text-gray-600">
              تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              لم تستلم البريد الإلكتروني؟ تحقق من مجلد الرسائل غير المرغوب فيها
            </p>
            <button
              onClick={handleBackToLogin}
              className="w-full cursor-pointer rounded-lg bg-sky-600 py-3 px-5 text-center text-base font-bold text-white shadow-sm transition-all duration-300 hover:bg-sky-700 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              العودة لتسجيل الدخول
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-50 font-sans text-gray-900" dir="rtl">      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center py-12">
        <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          
          {/* Header Section */}
          <div className="flex flex-col items-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 p-3 text-sky-600">
              <FaEnvelope className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">نسيت كلمة المرور؟</h1>
            <p className="mt-2 text-center text-sm text-gray-600">
              أدخل بريدك الإلكتروني وسنرسل لك رابط لإعادة تعيين كلمة المرور
            </p>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="sr-only" htmlFor="email">البريد الإلكتروني</label>
              <input
                autoComplete="email"
                className={`relative block w-full appearance-none rounded-md border bg-gray-50 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm text-right transition-all duration-300 ${
                  errors.email 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50' 
                    : 'border-gray-300 focus:border-green-500 focus:ring-green-500 focus:bg-white'
                } ${isLoading ? 'opacity-60 cursor-not-allowed bg-gray-100' : ''}`}
                id="email"
                name="email"
                placeholder="البريد الإلكتروني"
                required
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 text-right">{errors.email}</p>
              )}
            </div>

            <div>
              <button
                className={`group relative flex w-full justify-center rounded-md border border-transparent bg-sky-600 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isLoading ? 'opacity-70 cursor-not-allowed transform-none hover:transform-none hover:shadow-sm' : ''
                }`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                    جاري الإرسال...
                  </div>
                ) : (
                  'إرسال رابط إعادة التعيين'
                )}
              </button>
            </div>
          </form>

          {/* Back to Login Link */}
          <div className="mt-6 text-center">
            <a 
              className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors duration-200" 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleBackToLogin();
              }}
            >
              العودة لتسجيل الدخول
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgetPassword;
