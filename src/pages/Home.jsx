import React from 'react';
import './Home.css';
import nfcStandImg from '../assets/web design sharek صور-01.png';
import nfcPhoneImg from '../assets/web design sharek صور-02.png';
import nfcCardImg from '../assets/web design sharek صور-03.png';
import phoneDemo from '../assets/web design sharek صور-04.png';
import featuresImg from '../assets/web design sharek صور-05.png';
import profileImg from '../assets/web design sharek صور-06.png';

const Home = () => {
  return (
    <div className="home">

      {/* Products Section */}
      <section className="products-section">
        <div className="section">          
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <img src={nfcStandImg} alt="NFC ستاند" />
                <div className="nfc-badge">NFC ستاند</div>
              </div>
              <div className="product-content">
                <h3 className="product-title">NFC ستاند</h3>
                <p className="product-description">
                  حامل بيانات NFC بتصميم عصري وأنيق لعرض معلوماتك بطريقة احترافية. 
                  مناسب للمطاعم والمحال التجارية ومكاتب الاستقبال.
                </p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src={nfcPhoneImg} alt="NFC للهاتف" />
                <div className="nfc-badge">NFC للهاتف</div>
              </div>
              <div className="product-content">
                <h3 className="product-title">NFC للهاتف</h3>
                <p className="product-description">
                  أفكار ذكية لدمج تقنية NFC بشكل عملي ومفيد. 
                  يمكن لصقها خلف الهاتف مع إمكانية تخصيص المحتوى والتصميم بالكامل.
                </p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src={nfcCardImg} alt="NFC كارت" />
                <div className="nfc-badge">NFC كارت</div>
              </div>
              <div className="product-content">
                <h3 className="product-title">NFC كارت</h3>
                <p className="product-description">
                  أسرع من الطرق التقليدية لتبادل المعلومات بطريقة احترافية. 
                  مع تصميم أنيق وإمكانية التخصيص الكامل والطباعة عالية الجودة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-container">
          <div className="info-content">
            <h2 className="info-title">معلومات عنا</h2>
            <p className="info-description">
              في شارك، نحن نؤمن بقوة التقنية الذكية في تطوير الأعمال وتحسين التواصل. 
              نقدم حلولاً مبتكرة باستخدام تقنية NFC لمساعدتك في بناء هويتك الرقمية 
              والتواصل مع عملائك بطريقة عصرية وفعالة.
            </p>
            <div className="info-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">عميل راضي</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">منتج مباع</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">دعم فني</span>
              </div>
            </div>
          </div>
          <div className="info-image">
            <img src={phoneDemo} alt="عرض تطبيق شارك" className="phone-demo" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section">
          <h2 className="section-title">مميزات خدماتنا</h2>
          
          <div className="features-grid">
            <div className="feature-card blue">
              <div className="feature-icon">📡</div>
              <h3 className="feature-title">تقنية NFC</h3>
              <p className="feature-description">
                تقنية منتجات شارك على أحدث تقنية NFC المتقدمة في المنطقة وآمنة ومتطورة
              </p>
            </div>

            <div className="feature-card green">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">قراءة QR</h3>
              <p className="feature-description">
                نوفر خدمات شارك عبر تقنية NFC وقراءة الباركود والمتطلبات المحلية كل ما تحتاجه
              </p>
            </div>

            <div className="feature-card blue">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">لا يحتاج تطبيق</h3>
              <p className="feature-description">
                لا يحتاج لتطبيق كما لا يشترط وجود إنترنت بياناتك متاح شارك على هذا الأساس
              </p>
            </div>

            <div className="feature-card green">
              <div className="feature-icon">📲</div>
              <h3 className="feature-title">iOS & Android</h3>
              <p className="feature-description">
                متاح بشكل مجاني مع جميع الهواتف الذكية الحديثة التي تدعم تقنية NFC منذ عدة سنوات
              </p>
            </div>

            <div className="feature-card blue">
              <div className="feature-icon">👤</div>
              <h3 className="feature-title">بروفايل رقمي</h3>
              <p className="feature-description">
                شارك بياناتك كاملة من معلومات التواصل إلى روابط التواصل الاجتماعي بطريقة رقمية واحدة
              </p>
            </div>

            <div className="feature-card green">
              <div className="feature-icon">🎨</div>
              <h3 className="feature-title">تصميم فريد</h3>
              <p className="feature-description">
                نقوم بتطوير تقنا ليد جود شارك مع احترافية لتصميم اسمك وشعارك بطريقة مميزة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Demo Section */}
      <section className="profile-section">
        <div className="profile-container">
          <div className="profile-content">
            <h2 className="profile-title">جرّب شارك ديجيتال</h2>
            <p className="profile-description">
              جرب شارك ديجيتال - جربوا مستقبل التواصل مع تقنية NFC الحديثة والعالية 
              لتبادل المعلومات مع العالم في ثوانِ معدودة.
            </p>
            <button className="btn btn-primary profile-btn">
              جرب الآن مجاناً
            </button>
          </div>
          
          <div className="profile-demo">
            <img src={profileImg} alt="عرض البروفايل الرقمي" className="profile-demo-img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;