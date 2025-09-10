import React from "react";
import "./Footer.css";
import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaComments } from "react-icons/fa";
// import logo from '../assets/web design sharek صور-01.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Right Section - Navigation Links */}
          <div className="footer-section footer-nav">
            <div className="nav-column">
              <ul>
                <li>
                  <a href="#home">الصفحة الرئيسية</a>
                </li>
                <li>
                  <a href="#about">معلومات عنا</a>
                </li>
                <li>
                  <a href="#about">منتجاتنا</a>
                </li>
                <li>
                  <a href="#about">كتالوج التصاميم</a>
                </li>
                <li>
                  <a href="#about">الأسئلة الشائعة</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Left Section - Contact & Social */}
          <div className="footer-section footer-contact">
            <div className="contact-info">
              <h3>تواصل معنا</h3>
              <div className="social-icons">
                <a
                  href="#twitter"
                  className="social-icon twitter"
                  aria-label="تويتر"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#instagram"
                  className="social-icon instagram"
                  aria-label="إنستغرام"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#linkedin"
                  className="social-icon linkedin"
                  aria-label="لينكد إن"
                >
                  <FaLinkedin />
                </a>
              </div>
              <div className="contact-details">
                <p><FaEnvelope className="contact-icon" /> info@sharek.com</p>
                <p><FaPhone className="contact-icon" /> +966 50 123 4567</p>
                <p><FaMapMarkerAlt className="contact-icon" /> الرياض، المملكة العربية السعودية</p>
              </div>
            </div>
          </div>

          {/* Chat Support Button */}
          <div className="chat-support">
            <button className="chat-btn" aria-label="دردشة مباشرة">
              <FaComments />
            </button>
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
              {/* <img src={logo} alt="شارك" className="footer-logo-img" /> */}
              <span className="footer-brand">شارك</span>
            </div>

            <div className="footer-copyright">
              <p>&copy; 2025 شارك. جميع الحقوق محفوظة.</p>
            </div>
          </div>
    </footer>
  );
};

export default Footer;
