import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { TiUser } from "react-icons/ti";
import "./Navbar.css";
// import logo from "../assets/web design sharek صور-01.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <nav className="navbar @container">
      <div className="navbar-container ">
        {/* Logo */}
        <div className="navbar-logo">
          {/* <img src={logo} alt="شارك" className="logo-image" /> */}
          <span className="logo-text">شارك</span>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                من نحن
              </a>
            </li>
            <li className="nav-item dropdown" onClick={toggleProducts}>
              <a href="#" className="nav-link">
                المنتجات
                <span className="dropdown-arrow">▼</span>
              </a>
              {isProductsOpen && (
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">
                    منتج 1
                  </a>
                  <a href="#" className="dropdown-item">
                    منتج 2
                  </a>
                  <a href="#" className="dropdown-item">
                    منتج 3
                  </a>
                </div>
              )}
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                الأسئلة الشائعة
              </a>
            </li>
          </ul>
        </div>

        {/* Auth Section */}
        <div className="navbar-auth @max-[769px]:absolute left-1/7">
          <div className="cart-icon">
            <CiShoppingCart size={24} />
          </div>
          <button className="login-btn">تسجيل الدخول</button>
          <button className="signup-btn">إنشاء حساب</button>
          <div className="profile-icon">
            <TiUser size={24} />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav">
            <li className="mobile-nav-item">
              <a href="#" className="mobile-nav-link">
                من نحن
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#" className="mobile-nav-link">
                المنتجات
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#" className="mobile-nav-link">
                الأسئلة الشائعة
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#" className="mobile-nav-link">
                تسجيل الدخول
              </a>
            </li>
            <li className="mobile-nav-item">
              <a href="#" className="mobile-nav-link">
                إنشاء حساب
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
