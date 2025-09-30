import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import TwoCard from '../assets/output2.webm';
import phoneFrame from '../assets/phonefrem.png';

// Import theme components
import Theme1 from '../themes/Theme1';
import Theme2 from '../themes/Theme2';
import Theme3 from '../themes/Theme3';
import Theme4 from '../themes/Theme4';
import Theme5 from '../themes/Theme5';
import Theme6 from '../themes/Theme6';
import Theme7 from '../themes/Theme7';
import Theme8 from '../themes/Theme8';
import Theme9 from '../themes/Theme9';
import Theme10 from '../themes/Theme10';
import Theme21 from '../themes/Theme21';
import Theme22 from '../themes/Theme21';

const CreateCard = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  // Array of theme components for the slider
  const themes = [
    { component: Theme1, name: 'التصميم الكلاسيكي', description: 'أنيق وبسيط' },
    { component: Theme2, name: 'التصميم العصري', description: 'داكن وحديث' },
    { component: Theme3, name: 'التصميم الاحترافي', description: 'مناسب للأعمال' },
    { component: Theme4, name: 'التصميم الملون', description: 'مفعم بالألوان' },
    { component: Theme5, name: 'التصميم البسيط', description: 'مينيمال وأنيق' },
    { component: Theme6, name: 'التصميم الناعم', description: 'ألوان هادئة' },
    { component: Theme7, name: 'التصميم الدافئ', description: 'ألوان دافئة' },
    { component: Theme8, name: 'التصميم البارد', description: 'ألوان باردة' },
    { component: Theme9, name: 'التصميم المتدرج', description: 'تدرجات جميلة' },
    { component: Theme10, name: 'التصميم المتميز', description: 'فريد ومبتكر' },
    { component: Theme21, name: 'تصميم شارك الأزرق', description: 'تصميم شارك المميز' },
    { component: Theme22, name: 'تصميم شارك الاحترافي', description: 'نسخة احترافية من شارك' },
  ];

  return (
    <>
    <div className="min-h-screen" style={{backgroundColor: 'var(--color-white)'}}>
      
      {/* Header - Create Button */}
      <div className="text-center py-12">
        <button 
          type="button"
          onClick={() => navigate('/digital-business-cards')}
          className="px-12 py-4 rounded-full text-white text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          style={{backgroundColor: 'var(--color-primary-green)'}}
        >
          إنشاء
        </button>
      </div>

      {/* Cards Section */}
      <div className="text-center mb-16">
        <div className="relative inline-block mb-8 w100 -top-40">
          <video autoPlay loop muted className=" h-auto">
            <source src={TwoCard} type="video/webm" />
          </video>
        </div>
      </div>

        {/* Themes Section */}
        <div className="py-16 bg-gray-50 relative -top-70">
          {/* Swiper Theme Slider */}
          <div className="relative max-w-7xl mx-auto px-4">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              spaceBetween={50}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination-custom',
                bulletClass: 'swiper-pagination-bullet-custom',
                bulletActiveClass: 'swiper-pagination-bullet-active-custom',
              }}
              effect="coverflow"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
              className="theme-swiper"
            >
              {themes.map((theme, index) => {
                const ThemeComponent = theme.component;
                return (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-center">
                      {/* Phone Frame with Theme */}
                      <div className="relative mb-6">
                        <div className="relative w-100 h-auto ">
                          {/* Theme Content Inside Phone */}
                          <div className="absolute top-0 left-0 w-100 h-full overflow-hidden rounded-[65px] px-4.5 py-2 bg-white  z-0">
                            <div className="w-full h-full">
                              <ThemeComponent />
                            </div>
                          </div>
                          
                          {/* Phone Frame Overlay */}
                          <img
                            src={phoneFrame}
                            alt="Phone Frame"
                            className="w-full h-auto relative z-10"
                          />
                        </div>
                      </div>


                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev-custom absolute top-1/2 left-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-110 transform -translate-y-1/2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{color: 'var(--color-primary-blue)'}}>
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="swiper-button-next-custom absolute top-1/2 right-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-110 transform -translate-y-1/2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{color: 'var(--color-primary-blue)'}}>
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Custom Pagination */}
            <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-1 mt-6 mx-auto max-w-xs">
              <div 
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-primary-green)',
                  width: `${((activeSlide + 1) / themes.length) * 100}%`
                }}
              />
            </div>
          </div>
        </div>


      {/* Bottom Section */}
      <div className="text-center px-8 pb-20">
        <h2 className="text-4xl font-bold mb-6" style={{color: 'var(--color-primary-blue)'}}>
          اختر من بين 20 بروفايل
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed" style={{color: 'var(--color-gray)'}}>
            يقدم موقع شارك عدة تقنية NFC الطباعة المتقدمة في بطاقاتنا وتطبيقاته الجديدة في ما يخص عليك
            هاتفية هو بين رنين البطاقة أو في عهدي على المستخدم إيجاد، أو في حق جميع المعلومات اللي ثرية، في شارتي في
            بطاقة المال وصول معلومات قليلة للجميع
          </p>
        </div>
      </div>
      
    </div>

    </>
  );
};

export default CreateCard;

// Custom styles for Swiper
const styles = `
  .theme-swiper {
    padding: 50px 0;
  }

  .theme-swiper .swiper-slide {
    transition: transform 0.3s ease;
  }

  .theme-swiper .swiper-slide-active {
    transform: scale(1.05);
  }

  .swiper-pagination-bullet-custom {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #d1d5db;
    opacity: 0.7;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active-custom {
    background: var(--color-primary-blue);
    opacity: 1;
    transform: scale(1.2);
  }

  .swiper-button-prev-custom:hover,
  .swiper-button-next-custom:hover {
    transform: translateY(-50%) scale(1.1);
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}