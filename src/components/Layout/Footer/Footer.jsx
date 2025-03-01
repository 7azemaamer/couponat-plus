"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-accent text-white relative">
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        aria-label="العودة إلى الأعلى"
      >
        <FaArrowUp />
      </button>

      {/* Newsletter Section */}
      <div className="bg-gray-900 py-8">
        <div className="d-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-2">
                اشترك في النشرة البريدية
              </h3>
              <p className="text-white text-sm">
                احصل على أحدث العروض والكوبونات مباشرة إلى بريدك الإلكتروني
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full md:w-64 px-4 py-3 bg-gray-800 text-white rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-l-md hover:bg-primary/90 transition-colors font-medium"
                >
                  اشتراك
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="pt-12 pb-8">
        <div className="d-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <div className="mb-6 flex justify-center md:justify-start">
                <Image
                  src="/images/logo-w.png"
                  alt="كوبونات بلس"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-white mb-6 text-center md:text-right text-sm leading-relaxed">
                كوبونات بلس هو موقع متخصص في توفير كوبونات خصم وعروض من أشهر
                المتاجر الإلكترونية في المملكة العربية السعودية. نسعى دائماً
                لتوفير أفضل العروض لمساعدتك على التوفير في مشترياتك.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors bg-gray-800 p-2 rounded-full"
                  aria-label="فيسبوك"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors bg-gray-800 p-2 rounded-full"
                  aria-label="تويتر"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors bg-gray-800 p-2 rounded-full"
                  aria-label="انستغرام"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors bg-gray-800 p-2 rounded-full"
                  aria-label="يوتيوب"
                >
                  <FaYoutube size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                روابط سريعة
                <span className="absolute bottom-0 right-0 w-12 h-0.5 bg-primary"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-white hover:text-white transition-colors inline-block"
                  >
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stores"
                    className="text-white hover:text-white transition-colors inline-block"
                  >
                    المتاجر
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coupons"
                    className="text-white hover:text-white transition-colors inline-block"
                  >
                    الكوبونات
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-white hover:text-white transition-colors inline-block"
                  >
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-white hover:text-white transition-colors inline-block"
                  >
                    تواصل معنا
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-white hover:text-white transition-colors inline-block"
                  >
                    الأسئلة الشائعة
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular Stores */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                أشهر المتاجر
                <span className="absolute bottom-0 right-0 w-12 h-0.5 bg-primary"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/stores/amazon"
                    className="text-white hover:text-white transition-colors inline-block"
                  >
                    امازون
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stores/noon"
                    className="text-white hover:text-white transition-colors inline-block"
                  >
                    نون
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stores/namshi"
                    className="text-white hover:text-white transition-colors inline-block"
                  >
                    نمشي
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stores/aliexpress"
                    className="text-white hover:text-white transition-colors inline-block"
                  >
                    علي إكسبرس
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stores/shein"
                    className="text-white hover:text-white transition-colors inline-block"
                  >
                    شي إن
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stores"
                    className="text-primary hover:text-primary/80 transition-colors inline-block font-medium"
                  >
                    عرض كل المتاجر
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                معلومات التواصل
                <span className="absolute bottom-0 right-0 w-12 h-0.5 bg-primary"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <FaEnvelope className="text-primary" />
                  <span className="text-white text-sm">
                    info@coponat-plus.com
                  </span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <FaPhone className="text-primary" />
                  <span className="text-white text-sm">+966 12 345 6789</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <FaMapMarkerAlt className="text-primary" />
                  <span className="text-white text-sm">
                    الرياض، المملكة العربية السعودية
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Categories Grid
          <div className="mb-12 border-t border-gray-800 pt-8">
            <h3 className="text-lg font-bold mb-6 text-center">
              تصفح حسب الفئة
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                "إلكترونيات",
                "ملابس",
                "أحذية",
                "منزل وحديقة",
                "مستلزمات أطفال",
                "مطاعم",
                "سفر",
                "رياضة",
                "جمال",
                "صحة",
                "ألعاب",
                "كتب",
              ].map((category, index) => (
                <Link
                  key={index}
                  href={`/category/${category}`}
                  className="bg-gray-800 text-white hover:bg-gray-700 hover:text-white transition-colors py-2 px-3 rounded-md text-center text-sm"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div> */}

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-right order-2 md:order-1">
                <p className="text-white text-sm">
                  &copy; {currentYear} كوبونات بلس. جميع الحقوق محفوظة.
                </p>
              </div>
              <div className="flex gap-4 order-1 md:order-2 mb-4 md:mb-0">
                <Link
                  href="/privacy-policy"
                  className="text-white hover:text-white text-sm transition-colors"
                >
                  سياسة الخصوصية
                </Link>
                <span className="text-gray-600">|</span>
                <Link
                  href="/terms"
                  className="text-white hover:text-white text-sm transition-colors"
                >
                  الشروط والأحكام
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
