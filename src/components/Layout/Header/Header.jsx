"use client";
import { Button } from "@/components/UI/Button";
import { Search } from "@/components/UI/Search";
import { navItems } from "@/utils/dummyData";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import { FaUser, FaSignOutAlt } from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const pathname = usePathname();

  const toggleSubmenu = (index) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setIsUserMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  return (
    <header className="fixed z-50 bg-white right-0 left-0 px-4 md:px-10 top-0">
      <div className="flex justify-between items-center w-full h-[70px] md:h-[100px]">
        <Link href={"/"}>
          <Image
            width={150}
            height={150}
            alt="couponat plus"
            src={"/images/logo-w.png"}
            className="w-32 md:w-auto"
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
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
          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={toggleUserMenu}
                className="flex items-center gap-2 text-gray-700 hover:text-accent transition-colors"
              >
                <span className="text-sm font-medium">
                  {user?.name || "المستخدم"}
                </span>
                <FaUser />
              </button>

              {isUserMenuOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-right"
                  >
                    الملف الشخصي
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 text-sm text-red-500 hover:bg-gray-100 text-right"
                  >
                    تسجيل الخروج
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="text-gray-700 hover:text-accent transition-colors"
              >
                تسجيل الدخول
              </Link>
            </div>
          )}
          <Button>
            <Link href="/register" className="font-bold">
              إنضم الآن
            </Link>
          </Button>
        </div>
      </div>

      <div
        className={`md:hidden bg-white w-full transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-screen shadow-lg" : "max-h-0"
        }`}
      >
        <div className="px-4 py-2">
          <Search full label={"ابحث عن الكوبونات والمتاجر"} />
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
          {isAuthenticated ? (
            <>
              <Link href="/profile" className="text-center py-2 text-gray-700">
                الملف الشخصي
              </Link>
              <button
                onClick={handleLogout}
                className="text-center py-2 text-red-500"
              >
                تسجيل الخروج
              </button>
            </>
          ) : (
            <div className="flex flex-col space-y-2">
              <Link href="/login" className="text-center py-2 text-gray-700">
                تسجيل الدخول
              </Link>
            </div>
          )}
          <Button className="w-full">
            <Link
              href="/register"
              className="bg-accent text-white px-4 py-2 rounded-md text-center"
            >
              إنضم الآن
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
