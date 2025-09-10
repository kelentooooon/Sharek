import React from 'react';
import './Footer.css';
import logo from '../assets/web design sharek صور-01.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Main Footer Content */}
        <div className="footer-content">
          
          {/* Right Section - Navigation Links */}
          <div className="footer-section footer-nav">
            <div className="nav-column">
              <h3>الرئيسية</h3>
              <ul>
                <li><a href="#home">الصفحة الرئيسية</a></li>
                <li><a href="#about">من نحن</a></li>
              </ul>
            </div>
            
            <div className="nav-column">
              <h3>معلومات عنا</h3>
              <ul>
                <li><a href="#about">معلومات الشركة</a></li>
                <li><a href="#team">فريق العمل</a></li>
                <li><a href="#careers">الوظائف</a></li>
              </ul>
            </div>
            
            <div className="nav-column">
              <h3>منتجاتنا</h3>
              <ul>
                <li><a href="#products">جميع المنتجات</a></li>
                <li><a href="#new">الجديد</a></li>
                <li><a href="#featured">المميز</a></li>
              </ul>
            </div>
            
            <div className="nav-column">
              <h3>كتالوج التصاميم</h3>
              <ul>
                <li><a href="#catalog">تصفح الكتالوج</a></li>
                <li><a href="#custom">تصميم مخصص</a></li>
              </ul>
            </div>
            
            <div className="nav-column">
              <h3>الأسئلة الشائعة</h3>
              <ul>
                <li><a href="#faq">الأسئلة المتكررة</a></li>
                <li><a href="#help">المساعدة</a></li>
              </ul>
            </div>
          </div>

          {/* Left Section - Contact & Social */}
          <div className="footer-section footer-contact">
            <div className="contact-info">
              <h3>تواصل معنا</h3>
              <div className="social-icons">
                <a href="#twitter" className="social-icon twitter" aria-label="تويتر">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#instagram" className="social-icon instagram" aria-label="إنستغرام">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#linkedin" className="social-icon linkedin" aria-label="لينكد إن">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <div className="contact-details">
                <p>📧 info@sharek.com</p>
                <p>📞 +966 50 123 4567</p>
                <p>📍 الرياض، المملكة العربية السعودية</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-policies">
            <a href="#privacy">سياسة الخصوصية</a>
            <a href="#returns">سياسة الاسترجاع</a>
            <a href="#terms">الشروط والأحكام</a>
          </div>
          
          <div className="footer-logo">
            <img src={logo} alt="شارك" className="footer-logo-img" />
            <span className="footer-brand">شارك</span>
          </div>
          
          <div className="footer-copyright">
            <p>&copy; 2025 شارك. جميع الحقوق محفوظة.</p>
          </div>
        </div>

        {/* Chat Support Button */}
        <div className="chat-support">
          <button className="chat-btn" aria-label="دردشة مباشرة">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3c5.514 0 10 3.685 10 8.243 0 4.558-4.486 8.243-10 8.243-1.192 0-2.326-.176-3.373-.496L2 21l2.010-6.627C2.75 13.378 2 11.889 2 10.243 2 6.685 6.486 3 12 3zm0-2C5.373 1 0 5.373 0 11c0 2.25.754 4.371 2.127 6.047L0 24l6.953-2.127C8.629 23.246 10.25 24 12 24c6.627 0 12-4.373 12-11S18.627 1 12 1z"/>
              <circle cx="8" cy="11" r="1"/>
              <circle cx="12" cy="11" r="1"/>
              <circle cx="16" cy="11" r="1"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;