import React from 'react';
import {
  FaMobile,
  FaDesktop
} from 'react-icons/fa';
import DashboardLayout from '../../layout/DashboardLayout';
import DonutChart from '../../components/dashboard/DonutChart';

const DashboardHome = () => {
  // Sample data for the dashboard
  const cardViewData = {
    total: 78542,
    growth: '+15.3%'
  };

  const deviceData = [
    { name: 'iOS', value: 47125, color: '#3b82f6', icon: FaMobile },
    { name: 'Android', value: 23562, color: '#10b981', icon: FaMobile },
    { name: 'Computer', value: 7855, color: '#9ca3af', icon: FaDesktop }
  ];

  // Prepare chart data and legend data
  const chartData = deviceData.map(device => ({
    name: device.name,
    value: device.value,
    color: device.color
  }));

  const legendData = deviceData.map(device => {
    const total = deviceData.reduce((sum, d) => sum + d.value, 0);
    const percentage = Math.round((device.value / total) * 100);
    return {
      ...device,
      percentage,
      colorClass: device.color === '#3b82f6' ? 'bg-blue-500' : 
                 device.color === '#10b981' ? 'bg-green-500' : 'bg-gray-400'
    };
  });

  const topCustomers = [
    {
      id: 1,
      name: 'أحمد محمد',
      email: 'ahmed@example.com',
      amount: '$3,450',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxj7HAvnHLbN-6oUmHIgBXA4AuMGZj2htdqkg6l2yy097utez58uqis13VWLg2WD2eBMujPmvWsMFxLjnNgIqBB9QuyOFvvyhS86XzaByOln0ipE297bKbElsPvyYTChamqzSf6v8QgmPQXoea4jJ3GkSgh2-paTOuuBu9yi4H2XOH3fPe6QP7Vu1Yh2h-LFYY0cSbx7VpD-hsciqIW29iMfUvmT6NkBiK5MhOlg_3jHNpCX3owYGtvUPCpM-5HKQoVIQ20eoI0CKa'
    },
    {
      id: 2,
      name: 'فاطمة علي',
      email: 'fatima@example.com',
      amount: '$2,980',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxTy54hJb1xxwqx_wwZFNMVYJPdqQoWvZdgiMNO4vtXpaQ7JE1k7ZX-mkAFSe3y7yMDhI0WniHvOBfoJb9mFhLAg39kewfL5if2sawBnqikCdbdaRy3jMKcAnN2SeH9pFoUMpkbADizKBpaTJgCewQfBuCPB2tz9SLst9Fe4C56CNR5bEt_InNfMxAxvVAhFegBTjgWpyH7Psj6_-l0XdhcVA-Ps8FfA3fiiyVTUUuD9_Mrnt44gQlkiwdlfqPnX96yWKH6HIeTou5'
    },
    {
      id: 3,
      name: 'عمر حسن',
      email: 'omar@example.com',
      amount: '$2,540',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9zMru46wl8lGaam5dJ9jQkLp94HJEykgAopobm2yyeBPpSLUHNhFdbz4AcVrrLpUSy0cqyp5flxzDYqrIWFICwEWBK1M3CqscPIA1KW9cbJoiCd7jlcOPKJjMjQ0b7H79SiefXvCW2mJ1kXgppIUveBcwxfE_JQ_Bht7fGWnznT_01pbmqNzw5vgDdwtqXQRaELAm21fBOJXpqGxXwraMe-qT3C0Kt4cKhbMyO6-Lx8c_S9E7YYifVF83Vzd3txmKJjk_XN96Vt5Y'
    },
    {
      id: 4,
      name: 'نور الدين',
      email: 'nour@example.com',
      amount: '$1,990',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCy5b4OE3yh6UArIoMlNuDRPWhDDnDug8p0-xtpo7RjqMTs491y6JJjxpK1m20orIB-xd-DOXPm9tFkueXYFMcpregMm9wSFOrBe5QYUhc7tbD0N9n8yh37NzGD9FaUwcq3TdDlNEgbERgYOpQ71mrbwLtR_uF5gxNq5gmjZO8IakJwMQuPWrQepLe54enDfQTvqs1ZYH01W16tM6R_bmPdR3S3An6aAkFLBuCNcO_ieE6mUrt-l-SpMRYzhR89Uui8wrisAwrc2Z7t'
    }
  ];

  return (
    <DashboardLayout activeItem="التحليلات">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">تحليل البيانات</h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          
            {/* Total Card Views */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-600 text-sm font-medium">إجمالي مشاهدات البطاقة</p>
              <p className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">
                {cardViewData.total.toLocaleString()}
              </p>
              <p className="text-green-600 text-sm font-medium mt-1">
                {cardViewData.growth} من الشهر الماضي
              </p>
            </div>

            {/* Device Analytics */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm col-span-1 lg:col-span-2 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">من أين يتم فتح البطاقة</h2>
              <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6">
                
                {/* Optimized Donut Chart */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <DonutChart
                    data={chartData}
                    size={200}
                    strokeWidth={25}
                    centerText={{
                      main: `${Math.round(cardViewData.total / 1000)}k`,
                      sub: "إجمالي المشاهدات"
                    }}
                    showAnimation={true}
                    className="mx-auto"
                  />
                </div>

                {/* Enhanced Legend */}
                <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4">
                  {legendData.map((device, index) => {
                    const IconComponent = device.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <span 
                        className={`w-4 h-4 rounded-full ${device.colorClass} shadow-sm`}
                        style={{ backgroundColor: device.color }}
                      ></span>
                      <div className="flex items-center gap-2 flex-1">
                        <IconComponent className="text-gray-600" size={16} />
                        <div className="flex-1">
                          <p className="font-medium text-gray-800">{device.name}</p>
                          <p className="text-gray-600 text-sm">
                            {device.value.toLocaleString()} ({device.percentage}%)
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full transition-all duration-500 ease-out"
                            style={{
                              width: `${device.percentage}%`,
                              backgroundColor: device.color
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

          {/* Top Customers */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">أهم العملاء المشاهدين</h2>
            <div className="space-y-3 sm:space-y-4">
              {topCustomers.map((customer) => (
                <div key={customer.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      alt="صورة العميل"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                      src={customer.avatar}
                    />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">{customer.name}</p>
                      <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">{customer.email}</p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">{customer.amount}</p>
                </div>
              ))}
            </div>
          </div>
    </DashboardLayout>
  );
};

export default DashboardHome;
