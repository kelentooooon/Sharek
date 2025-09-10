import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import nfcCard from "../assets/card.png";
import nfcSticker from "../assets/sticker.png";
import nfcStand from "../assets/Stand.png";
import {
  FaQrcode,
  FaWifi,
  FaMobileAlt,
  FaUserTie,
  FaBolt,
  FaGem,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      {/* Products Section */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* NFC Cards */}
            <div>
              <div>
                <img
                  className="relative top-25 right-4"
                  src={nfcCard}
                  alt="NFC Card"
                />
              </div>
              <div className="text-center border p-6 border-amber-50 pt-25 rounded-lg bg-white shadow-2xl shadow-gray-400 ">
                <h3 className="text-2xl font-semibold text-gray-800 border border-blue-500 bg-blue-500 w-1/3 mx-auto mb-3 rounded-2xl">
                  بطاقة NFC
                </h3>
                <p className="text-gray-600 text-lg">
                  بطاقات NFC هي بطاقات ذكية تحتوي على شريحة NFC مدمجة تتيح تخزين
                  ومشاركة المعلومات الرقمية بسهولة. يمكن استخدامها لمشاركة
                  معلومات الاتصال، الروابط، أو أي بيانات أخرى بمجرد لمسها بهاتف
                  ذكي متوافق مع NFC.
                </p>
              </div>
            </div>
            {/* NFC Stand */}
            <div>
              <div>
                <img
                  className="relative top-25"
                  src={nfcStand}
                  alt="NFC Stand"
                />
              </div>
              <div className="text-center border p-6 border-amber-50 pt-25 rounded-lg bg-white shadow-2xl shadow-gray-400 ">
                <h3 className="text-2xl font-semibold text-gray-800 border border-blue-500 bg-blue-500 w-1/3 mx-auto mb-3 rounded-2xl">
                  بطاقة NFC
                </h3>
                <p className="text-gray-600 text-lg">
                  بطاقات NFC هي بطاقات ذكية تحتوي على شريحة NFC مدمجة تتيح تخزين
                  ومشاركة المعلومات الرقمية بسهولة. يمكن استخدامها لمشاركة
                  معلومات الاتصال، الروابط، أو أي بيانات أخرى بمجرد لمسها بهاتف
                  ذكي متوافق مع NFC.
                </p>
              </div>
            </div>

             {/* NFC Sticker */}
            <div>
              <div>
                <img
                  className="relative top-25 right-4"
                  src={nfcSticker}
                  alt="NFC Sticker"
                />
              </div>
              <div className="text-center border p-6 border-amber-50 pt-25 rounded-lg bg-white shadow-2xl shadow-gray-400 ">
                <h3 className="text-2xl font-semibold text-gray-800 border border-blue-500 bg-blue-500 w-1/3 mx-auto mb-3 rounded-2xl">
                  بطاقة NFC
                </h3>
                <p className="text-gray-600 text-lg">
                  بطاقات NFC هي بطاقات ذكية تحتوي على شريحة NFC مدمجة تتيح تخزين
                  ومشاركة المعلومات الرقمية بسهولة. يمكن استخدامها لمشاركة
                  معلومات الاتصال، الروابط، أو أي بيانات أخرى بمجرد لمسها بهاتف
                  ذكي متوافق مع NFC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="features bg-gradient-to-b from-sky-600 to-sky-700"
        
      >
        <div className="container">
          <div className="features-content">
            <div className="features-text">
              
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">
                    <FaWifi />
                  </div>
                  <div className="feature-content">
                    <h3>تقنية NFC</h3>
                    <p>
                      تقدم منتجات شارك مع تقنية NFC المتقدمة البطاقات والمنتجات
                      المبتكرة. كل ما عليك فعله هو مسح جهازك بسرعة على البطاقة
                      أو تطبيق منتج المساعد ليحصل على جميع معلوماتك من معلومات
                      الاتصال إلى حساباتك على منصات التواصل الاجتماعي.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <FaQrcode />
                  </div>
                  <div className="feature-content">
                    <h3>قراءة QR</h3>
                    <p>
                      تقدم منتجات شارك مع تقنية QR و NFC البطاقات والمنتجات
                      المبتكرة بجودة عالية المساعد بأحدث تقنيات الطباعة لجميع
                      منتجاتنا التي تضمن جودة عالية لفترة طويلة.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <FaMobileAlt />
                  </div>
                  <div className="feature-content">
                    <h3>iOS & Android</h3>
                    <p>
                      متاحين شارك. متوافقة مع جميع الأجهزة الذكية والتي تدعم
                      تقنية NFC منها الهواتف الذكية بكامل تطبيقها مهيأ لتعمل
                      وتتوافق مع جميع الأجهزة.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <FaBolt />
                  </div>
                  <div className="feature-content">
                    <h3>لا يحتاج تطبيق</h3>
                    <p>
                      لا يحتاج إلى تنزيل أو تطبيق أي تطبيق على جهازك، فقط بسط
                      جهازك الذكي على منتج شارك على هذا المنتجان. وأحد.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <FaUserTie />
                  </div>
                  <div className="feature-content">
                    <h3>بروفايل رقمي</h3>
                    <p>
                      شارك يوفر لك خدمة - في معلومات العميل الشامل الأجهزة
                      الوصول المباشر. بطاقة شركة واحدة. مة - في معلومات العميل الشامل الأجهزة
                      الوصول المباشر. بطاقة شركة واحدة.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <FaGem />
                  </div>
                  <div className="feature-content">
                    <h3>تصميم فريد</h3>
                    <p>
                      نحن في شارك، نعد أمحد. وضمان شركات فقدان التعريف مع شرشح
                      في Black شارك يدعم تصميم السوق وسهولة وطبيعة.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
