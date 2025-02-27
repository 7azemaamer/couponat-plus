"use client";
import { Button } from "@/components/UI/Button";
import { Search } from "@/components/UI/Search";
import { navItems } from "@/utils/dummyData";
import Image from "next/image";
import React, { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(index);
    }
  };

  return (
    <header className="fixed z-50 bg-white right-0 left-0 px-4 md:px-10 top-0">
      <div className="flex justify-between items-center w-full h-[70px] md:h-[100px]">
        <Image
          width={150}
          height={150}
          alt="couponat plus"
          src={"/images/logo-w.png"}
          className="w-32 md:w-auto"
        />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Navigation - Keeping your original design */}
        <div className="hidden md:flex items-center gap-4 lg:gap-10">
          <ul className="flex gap-4 lg:gap-10">
            {navItems.map((item, index) => (
              <li key={index} className="group text-[14px] relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-primary hover:fill-primary text-gray-500 font-semibold text-[15px] block"
                >
                  {item.title}
                  {item.submenu && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      className="ml-1 inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                        data-name="16"
                        data-original="#000000"
                      />
                    </svg>
                  )}
                </a>
                {item.submenu && (
                  <div className="absolute lg:top-10 -left-60 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                    {item.submenu.map((submenuItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="lg:min-w-[180px] max-lg:min-w-[140px] mr-8"
                      >
                        <h6 className="text-base text-primary font-semibold">
                          {submenuItem.title}
                        </h6>
                        {submenuItem.children && (
                          <ul className="mt-3 pt-3 border-t border-1 space-y-2">
                            {submenuItem.children.map((child, childIndex) => (
                              <li key={childIndex} className="py-1 rounded">
                                <a
                                  href={child.href}
                                  className="hover:text-primary text-gray-500 font-semibold text-[15px] block"
                                >
                                  {child.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <Search label={"ابحث عن الكوبونات والمتاجر"} />
          <a href="#" className="whitespace-nowrap">
            تسجيل الدخول
          </a>
          <Button>إنضم الآن</Button>
        </div>
      </div>

      {/* Mobile Menu - Improved for better mobile usability */}
      <div
        className={`md:hidden bg-white w-full transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-screen shadow-lg" : "max-h-0"
        }`}
      >
        <div className="px-4 py-2">
          <Search label={"ابحث عن الكوبونات والمتاجر"} />
        </div>
        <nav className="px-4 py-2">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index} className="border-b py-2">
                <div className="flex justify-between items-center">
                  <a
                    href="javascript:void(0)"
                    className="text-gray-500 font-semibold text-[15px] block"
                  >
                    {item.title}
                  </a>
                  {item.submenu && (
                    <button
                      className="p-1"
                      onClick={() => toggleSubmenu(index)}
                      aria-expanded={activeSubmenu === index}
                      aria-controls={`submenu-${index}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                        className={`transition-transform duration-300 ${
                          activeSubmenu === index ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                          data-name="16"
                          data-original="#000000"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {item.submenu && (
                  <div
                    id={`submenu-${index}`}
                    className={`transition-all duration-300 overflow-y-auto ${
                      activeSubmenu === index ? "max-h-64 py-2" : "max-h-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 gap-4">
                      {item.submenu.map((submenuItem, subIndex) => (
                        <div key={subIndex} className="border-b pb-3">
                          <h6 className="text-base text-primary font-semibold mb-2 px-2">
                            {submenuItem.title}
                          </h6>
                          {submenuItem.children && (
                            <div className="px-4">
                              <ul className="mt-2 pt-2 border-t border-1 space-y-2">
                                {submenuItem.children.map(
                                  (child, childIndex) => (
                                    <li key={childIndex} className="py-1">
                                      <a
                                        href={child.href}
                                        className="text-gray-500 font-semibold text-[15px] block"
                                      >
                                        {child.title}
                                      </a>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-4 p-4 border-t">
          <a href="#" className="text-center py-2">
            تسجيل الدخول
          </a>
          <Button className="w-full">إنضم الآن</Button>
        </div>
      </div>
    </header>
  );
}
