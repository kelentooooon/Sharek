import React, { useState } from 'react';
import { FaCheck, FaPlus } from 'react-icons/fa';
import DashboardLayout from '../../layout/DashboardLayout';

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState('basic'); // Default selected plan

  const plansData = [
    {
      id: 'free',
      name: 'مجاني',
      price: '0',
      period: 'للأبد',
      popular: false,
      features: [
        'بطاقة واحدة',
        'تخصيصات أساسية',
        'دعم المجتمع'
      ],
      buttonText: 'ابدأ الآن',
      buttonStyle: 'bg-blue-50 text-blue-600 hover:bg-blue-100'
    },
    {
      id: 'starter',
      name: 'المبتدئ',
      price: '29',
      period: 'شهرياً',
      popular: false,
      features: [
        '5 بطاقات',
        'تخصيصات متقدمة',
        'دعم محدود',
        'إحصائيات أساسية'
      ],
      buttonText: 'اختر الخطة',
      buttonStyle: 'bg-blue-50 text-blue-600 hover:bg-blue-100'
    },
    {
      id: 'basic',
      name: 'أساسي',
      price: '59',
      period: 'شهرياً',
      popular: true,
      features: [
        '15 بطاقة',
        'تخصيصات كاملة',
        'دعم عبر البريد الإلكتروني',
        'إحصائيات متقدمة',
        'روابط مخصصة'
      ],
      buttonText: 'اختر الخطة',
      buttonStyle: 'bg-blue-600 text-white shadow-lg hover:bg-blue-700'
    },
    {
      id: 'pro',
      name: 'احترافي',
      price: '99',
      period: 'شهرياً',
      popular: false,
      features: [
        '50 بطاقة',
        'تخصيص كامل',
        'دعم أولوية',
        'تحليلات شاملة',
        'API متقدم',
        'نسخ احتياطي'
      ],
      buttonText: 'اختر الخطة',
      buttonStyle: 'bg-blue-50 text-blue-600 hover:bg-blue-100'
    },
    {
      id: 'enterprise',
      name: 'المؤسسات',
      price: '199',
      period: 'شهرياً',
      popular: false,
      features: [
        'بطاقات غير محدودة',
        'ميزات المؤسسات',
        'دعم مخصص',
        'تقارير مفصلة',
        'إدارة فريق',
        'أمان متقدم'
      ],
      buttonText: 'تواصل معنا',
      buttonStyle: 'bg-blue-50 text-blue-600 hover:bg-blue-100'
    }
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  return (
    <DashboardLayout activeItem="الخطط والاشتراكات">
      <div className="py-4 sm:py-8 lg:py-12">
        <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
            {/* Header */}
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                اختر خطتك المناسبة
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                ابدأ مجاناً، ثم أضف خطة مدفوعة للحصول على المزيد من الميزات والتخصيصات المتقدمة
              </p>
            </div>

            {/* Plans Grid */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {plansData.map((plan) => (
                <div
                  key={plan.id}
                  className={`
                    group relative flex flex-col rounded-xl border bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl xl:col-span-1
                    ${plan.popular ? 'border-2 border-blue-500 shadow-2xl' : 'border-gray-200'}
                  `}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 transform rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                      الأكثر شعبية
                    </div>
                  )}

                  {/* Radio Button */}
                  <div className="absolute left-4 top-4">
                    <input
                      type="radio"
                      name="selectedPlan"
                      checked={selectedPlan === plan.id}
                      onChange={() => handlePlanSelect(plan.id)}
                      className="h-5 w-5 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex-1">
                    {/* Plan Name */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-5xl font-extrabold tracking-tight text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-base font-medium text-gray-600">
                        {plan.price === '0' ? '' : 'ر.س'} {plan.period}
                      </span>
                    </div>

                    {/* Features List */}
                    <ul className="mt-6 space-y-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="size-5 text-green-500">
                            <FaCheck />
                          </div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <button
                    className={`
                      mt-8 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200
                      ${plan.buttonStyle}
                      ${selectedPlan === plan.id ? 'ring-2 ring-blue-300' : ''}
                    `}
                    onClick={() => handlePlanSelect(plan.id)}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>

            {/* Selected Plan Summary */}
            {selectedPlan && (
              <div className="mt-12 mx-auto max-w-2xl">
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    الخطة المختارة
                  </h3>
                  {(() => {
                    const plan = plansData.find(p => p.id === selectedPlan);
                    return (
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2">
                          <span className="font-medium text-gray-800">{plan.name}</span>
                          <span className="font-bold text-gray-900">
                            {plan.price === '0' ? 'مجاني' : `${plan.price} ر.س/${plan.period}`}
                          </span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-gray-900">السعر:</span>
                            <span className="text-2xl font-bold text-blue-600">
                              {plan.price === '0' ? 'مجاني' : `${plan.price} ر.س`}
                            </span>
                          </div>
                          <button className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                            {plan.price === '0' ? 'ابدأ الآن' : 'متابعة للدفع'}
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Plans;
