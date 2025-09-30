import React from "react";
import "./Home.css";
import nfcCard from "../assets/card.png";
import nfcSticker from "../assets/sticker.png";
import nfcStand from "../assets/stand.png";
import Scan from "../assets/output.webm";
import aboutPhone from "../assets/aboutphone.png";
import NFCIcon from "../assets/NFCIcon.svg";
import QrCodeIcon from "../assets/QrCodeIcon.svg";
import IOSAndroidIcon from "../assets/IOSAndroidIcon.svg";
import ThinkingIcon from "../assets/ThinkingIcon.svg";
import ProfileIcon from "../assets/ProfileIcon.svg";
import BoxsIcon from "../assets/BoxsIcon.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
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
              <div className="flex flex-col gap-2 text-center border p-6 border-amber-50 pt-25 rounded-lg bg-white shadow-2xl shadow-gray-400 ">
                <Link
                  to="/create-card"
                  className="text-2xl font-semibold text-white border border-blue-500 bg-blue-500 hover:bg-blue-800 transition-all duration-300 px-6 mx-auto mb-3 rounded-xl"
                  aria-label="إنشاء بطاقة NFC"
                >
                  كارت NFC
                </Link>
                <p className="text-gray-600 text-lg">
                  بطاقات NFC هي بطاقات ذكية تحتوي على شريحة NFC مدمجة تتيح تخزين
                  ومشاركة المعلومات الرقمية بسهولة. يمكن استخدامها لمشاركة
                  معلومات الاتصال، الروابط، أو أي بيانات أخرى بمجرد لمسها بهاتف
                  ذكي متوافق مع NFC.
                </p>
              </div>
            </div>
            {/* NFC Stand */}
            <div className="lg:pt-[10px] md:pt-[11px]">
              <div>
                <img
                  className="relative top-25 "
                  src={nfcStand}
                  alt="NFC Stand"
                />
              </div>
              <div className="flex flex-col gap-2  text-center border p-6 border-amber-50 pt-25 rounded-lg bg-white shadow-2xl shadow-gray-400 ">
                <Link
                  to="/create-card"
                  className="text-2xl font-semibold text-white border border-blue-500 bg-blue-500 hover:bg-blue-800 transition-all duration-300 px-6 mx-auto mb-3 rounded-xl"
                  aria-label="إنشاء بطاقة NFC"
                >
                  NFC للهاتف
                </Link>
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
              <div className="flex flex-col gap-2  text-center border p-6 border-amber-50 pt-25 rounded-lg bg-white shadow-2xl shadow-gray-400 ">
                <Link
                  to="/create-card"
                  className="text-2xl font-semibold text-white border border-blue-500 bg-blue-500 hover:bg-blue-800 transition-all duration-300 px-6 mx-auto mb-3 rounded-xl"
                  aria-label="إنشاء بطاقة NFC"
                >
                  NFC ستاند
                </Link>
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
      <section className="features bg-gradient-to-b from-sky-600 to-sky-700 ">
        <div className="absolute flex justify-around mb-8 w-full -top-1/5 xl:-top-11/12 lg:-top-8/12 md:-top-5/12 ">
          <video autoPlay loop muted className="w-full md:w-1/2 h-1/4 ">
            <source src={Scan} type="video/webm" />
          </video>
        </div>
        <div className="container">
          <div className="features-content">
            <div className="features-text">
              <h2 className="text-6xl font-bold text-white mb-4 text-end">
                معلومات عنا
              </h2>
              <p className="text-lg text-white mb-12 max-w-2xl text-end mr-auto ">
                اكتشف لماذا تعتبر منتجات شارك الخيار الأمثل لاحتياجاتك في
                التواصل الرقمي. نقدم لك مجموعة من الميزات الفريدة التي تجعل
                تجربتك معنا لا مثيل لها. التواصل الرقمي. نقدم لك مجموعة من
                الميزات الفريدة التي تجعل تجربتك معنا لا مثيل لها.
              </p>
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">
                    <img src={NFCIcon} alt="NFC Icon" className="w-13 h-13" />
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
                    <img src={QrCodeIcon} alt="QR Code Icon" className="w-13 h-13" />
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
                    <img src={IOSAndroidIcon} alt="iOS Android Icon" className="w-13 h-13" />
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
                    <img src={BoxsIcon} alt="Unique Design Icon" className="w-13 h-13" />
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
                    <img src={ProfileIcon} alt="Digital Profile Icon" className="w-13 h-13" />
                  </div>
                  <div className="feature-content">
                    <h3>بروفايل رقمي</h3>
                    <p>
                      شارك يوفر لك خدمة - في معلومات العميل الشامل الأجهزة
                      الوصول المباشر. بطاقة شركة واحدة. مة - في معلومات العميل
                      الشامل الأجهزة الوصول المباشر. بطاقة شركة واحدة.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img src={ThinkingIcon} alt="No App Required Icon" className="w-13 h-13" />
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

      {/* About Phone Section */}
      <section className="pt-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-left ">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                نوفر لك منتجات مبتكرة تعتمد على تقنية NFC "اتصال المدى القريب"
                نحن شارك ديجيتال، نصنع مستقبل التواصل لتجعل تواصلك مع العالم من
                حولك أسرع وأسهل من أي وقت مضى.
              </p>
            </div>
            {/* Phone Image */}
            <div className="lg:relative flex justify-center lg:justify-around">
              <div className="lg:absolute bottom-57 h-full">
                <img
                  src={aboutPhone}
                  alt="About Phone"
                  className="max-w-full h-auto max-h-[600px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
