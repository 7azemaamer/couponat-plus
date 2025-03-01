"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CouponBox } from "@/components/UI/Coupon/CouponBox";
import { trackStoreClick } from "@/utils/analytics";
import SidebarAd from "@/components/Sidebar/SidebarAd";
import {
  FaCopy,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaCheck,
  FaRegClock,
} from "react-icons/fa";
import { Alerter } from "@/components/UI/Alerter";

// Custom StoreCouponBox component optimized for the store page
function StoreCouponBox({ coupon }) {
  const [copied, setCopied] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    Alerter.success("تم نسخ الكود بنجاح");

    // Track coupon usage
    if (typeof window !== "undefined") {
      const couponUsage = JSON.parse(
        localStorage.getItem("couponUsage") || "{}"
      );
      couponUsage[coupon.id] = (couponUsage[coupon.id] || 0) + 1;
      localStorage.setItem("couponUsage", JSON.stringify(couponUsage));
    }

    // Reset copied state after 3 seconds
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const handleStoreClick = () => {
    trackStoreClick(coupon.id, coupon.store);
    window.open(
      coupon.couponType === "link"
        ? coupon.couponCode
        : coupon.storeUrl || `https://www.${coupon.storeSlug}.com`,
      "_blank"
    );
  };

  // Calculate days remaining until expiry
  const getDaysRemaining = () => {
    const today = new Date();
    const expiryDate = new Date(coupon.expiryDate);
    const diffTime = expiryDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const daysRemaining = getDaysRemaining();
  const isExpired = daysRemaining <= 0;

  return (
    <div
      className={`bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow ${
        isExpired ? "opacity-70" : ""
      }`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Coupon Info Section */}
        <div className="flex-grow p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 relative flex-shrink-0 bg-white rounded-lg shadow-sm p-2 hidden md:block">
              <Image
                src={coupon.logo}
                alt={coupon.store}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                {coupon.isVerified && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                    <FaCheck className="ml-1" size={10} />
                    تم التحقق
                  </span>
                )}
                {isExpired ? (
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    منتهي الصلاحية
                  </span>
                ) : (
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    نشط
                  </span>
                )}
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                  {coupon.category}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{coupon.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{coupon.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <FaRegClock className="ml-1" />
                <span>
                  {daysRemaining > 0
                    ? `ينتهي خلال ${daysRemaining} يوم`
                    : "انتهت الصلاحية"}
                </span>
                <span className="mx-2">•</span>
                <span>استخدم {coupon.usedCount} مرة</span>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="mr-2 text-accent hover:underline flex items-center"
                >
                  <FaInfoCircle className="ml-1" />
                  {showDetails ? "إخفاء التفاصيل" : "عرض التفاصيل"}
                </button>
              </div>

              {/* Expandable details section */}
              {showDetails && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm">
                  <p className="mb-2">
                    <strong>شروط الاستخدام:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>صالح على جميع المنتجات باستثناء العروض الخاصة</li>
                    <li>لا يمكن استخدامه مع كوبونات أخرى</li>
                    <li>صالح للاستخدام مرة واحدة لكل عميل</li>
                    <li>قد تطبق شروط وأحكام إضافية</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Coupon Action Section */}
        <div className="bg-gray-50 p-6 flex flex-col justify-center items-center md:w-64 border-t md:border-t-0 md:border-r border-gray-100">
          {coupon.couponType === "code" ? (
            <>
              <div className="bg-white border border-dashed border-accent rounded-md px-4 py-2 text-center w-full mb-4 relative group">
                <p className="text-sm text-gray-500 mb-1">كود الخصم</p>
                <p className="font-mono font-bold text-lg select-all">
                  {coupon.couponCode}
                </p>
                <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-accent font-bold">انقر للنسخ</span>
                </div>
              </div>
              <button
                onClick={() => handleCopyCode(coupon.couponCode)}
                className={`${
                  copied ? "bg-green-600" : "bg-accent"
                } text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors w-full flex items-center justify-center gap-2`}
                disabled={isExpired}
              >
                <span>{copied ? "تم النسخ!" : "نسخ الكود"}</span>
                {copied ? <FaCheck /> : <FaCopy />}
              </button>
              <button
                onClick={handleStoreClick}
                className="mt-3 bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors w-full flex items-center justify-center gap-2 text-sm"
                disabled={isExpired}
              >
                <span>الذهاب للمتجر</span>
                <FaExternalLinkAlt size={12} />
              </button>
            </>
          ) : (
            <>
              <div className="bg-white border border-dashed border-accent rounded-md px-4 py-2 text-center w-full mb-4">
                <p className="text-sm text-gray-500 mb-1">عرض خاص</p>
                <p className="font-bold text-accent">اضغط للحصول على الخصم</p>
              </div>
              <button
                onClick={handleStoreClick}
                className="bg-accent text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors w-full flex items-center justify-center gap-2"
                disabled={isExpired}
              >
                <span>الذهاب للعرض</span>
                <FaExternalLinkAlt />
              </button>
            </>
          )}
          <div className="mt-3 text-xs text-gray-500 text-center">
            تم التحقق من هذا الكوبون {new Date().toLocaleDateString("ar-SA")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StorePage({ params }) {
  const { storeId } = params;
  const [store, setStore] = useState(null);
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const fetchStoreData = async () => {
      setLoading(true);
      try {
        const timeoutId = setTimeout(() => {
          const mockStore = {
            id: 1,
            name:
              storeId === "amazon"
                ? "أمازون"
                : storeId === "noon"
                ? "نون"
                : storeId === "namshi"
                ? "نمشي"
                : storeId === "aliexpress"
                ? "علي إكسبرس"
                : storeId === "shein"
                ? "شي إن"
                : "متجر",
            slug: storeId,
            logo: "/images/logo-w.png",
            website: `https://www.${storeId}.com`,
            description: `${
              storeId === "amazon"
                ? "أمازون"
                : storeId === "noon"
                ? "نون"
                : storeId === "namshi"
                ? "نمشي"
                : storeId === "aliexpress"
                ? "علي إكسبرس"
                : storeId === "shein"
                ? "شي إن"
                : "متجر"
            } هو متجر إلكتروني رائد يوفر مجموعة واسعة من المنتجات بأسعار تنافسية. استخدم كوبونات الخصم لتوفير المزيد على مشترياتك.`,
            categories: [
              "إلكترونيات",
              "ملابس",
              "أحذية",
              "منزل وحديقة",
              "مستلزمات أطفال",
            ],
            rating: 4.5,
            totalCoupons: 25,
            activeCoupons: 18,
          };

          // Mock coupons data
          const mockCoupons = [
            {
              id: 1,
              title: `كوبون خصم ${mockStore.name} 15%`,
              description: `خصم 15% على جميع منتجات ${mockStore.name}`,
              couponCode: "SAVE15",
              couponType: "code",
              expiryDate: "2025-12-31",
              store: mockStore.name,
              storeSlug: storeId,
              logo: "/images/logo-w.png",
              category: "إلكترونيات",
              isVerified: true,
              usedCount: 1250,
            },
            {
              id: 2,
              title: `عرض خاص ${mockStore.name}`,
              description: `خصم 100 ريال على المشتريات بقيمة 500 ريال أو أكثر من ${mockStore.name}`,
              couponCode: "SPECIAL100",
              couponType: "code",
              expiryDate: "2025-11-30",
              store: mockStore.name,
              storeSlug: storeId,
              logo: "/images/logo-w.png",
              category: "ملابس",
              isVerified: true,
              usedCount: 980,
            },
            {
              id: 3,
              title: `توصيل مجاني من ${mockStore.name}`,
              description: `توصيل مجاني على جميع الطلبات من ${mockStore.name}`,
              couponCode: "FREESHIP",
              couponType: "code",
              expiryDate: "2025-10-15",
              store: mockStore.name,
              storeSlug: storeId,
              logo: "/images/logo-w.png",
              category: "أحذية",
              isVerified: true,
              usedCount: 2100,
            },
            {
              id: 4,
              title: `خصم 20% على الأجهزة المنزلية من ${mockStore.name}`,
              description: `خصم 20% على جميع الأجهزة المنزلية من ${mockStore.name}`,
              couponCode: "HOME20",
              couponType: "code",
              expiryDate: "2025-09-30",
              store: mockStore.name,
              storeSlug: storeId,
              logo: "/images/logo-w.png",
              category: "منزل وحديقة",
              isVerified: true,
              usedCount: 750,
            },
            {
              id: 5,
              title: `خصم 25% على ملابس الأطفال من ${mockStore.name}`,
              description: `خصم 25% على جميع ملابس الأطفال من ${mockStore.name}`,
              couponCode: "KIDS25",
              couponType: "code",
              expiryDate: "2025-08-31",
              store: mockStore.name,
              storeSlug: storeId,
              logo: "/images/logo-w.png",
              category: "مستلزمات أطفال",
              isVerified: true,
              usedCount: 620,
            },
          ];

          setStore(mockStore);
          setCoupons(mockCoupons);
          setLoading(false);
        }, 1000);

        return () => clearTimeout(timeoutId);
      } catch (error) {
        console.error("Error fetching store data:", error);
        setLoading(false);
      }
    };

    fetchStoreData();
  }, [storeId]);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    Alerter.success("تم نسخ الرابط بنجاح");
  };

  const handleStoreClick = () => {
    if (store) {
      trackStoreClick(null, store.name);
      window.open(store.website, "_blank");
    }
  };

  const filteredCoupons = () => {
    if (activeTab === "all") return coupons;
    return coupons.filter((coupon) => coupon.category === activeTab);
  };

  if (loading) {
    return (
      <div className="d-container py-12">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
        </div>
      </div>
    );
  }

  if (!store) {
    return (
      <div className="d-container py-12">
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <p className="text-gray-600">لم يتم العثور على المتجر</p>
          <p className="mt-2 text-sm text-gray-500">
            يرجى التحقق من الرابط أو تصفح المتاجر المتاحة
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="d-container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Store Header */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 relative flex-shrink-0 bg-white rounded-lg shadow-sm p-2">
                  <Image
                    src={store.logo}
                    alt={store.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow text-center md:text-right">
                  <h1 className="text-2xl font-bold mb-2">{store.name}</h1>
                  <p className="text-gray-600 mb-4">{store.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-end mb-4">
                    {store.categories.map((category, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleStoreClick}
                  className="bg-accent text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
                >
                  <span>زيارة المتجر</span>
                  <FaExternalLinkAlt />
                </button>
                <button
                  onClick={() => handleCopyCode(store.website)}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <span>نسخ رابط المتجر</span>
                  <FaCopy />
                </button>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-8 overflow-x-auto">
              <div className="flex space-x-4 rtl:space-x-reverse">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-4 py-2 rounded-md whitespace-nowrap ${
                    activeTab === "all"
                      ? "bg-accent text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  جميع الكوبونات
                </button>
                {store.categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(category)}
                    className={`px-4 py-2 rounded-md whitespace-nowrap ${
                      activeTab === category
                        ? "bg-accent text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Coupons */}
            <div className="space-y-6">
              {filteredCoupons().length > 0 ? (
                filteredCoupons().map((coupon) => (
                  <StoreCouponBox key={coupon.id} coupon={coupon} />
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                  <p className="text-gray-600">لا توجد كوبونات في هذه الفئة</p>
                  <p className="mt-2 text-sm text-gray-500">
                    يرجى اختيار فئة أخرى أو العودة لاحقًا
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-lg font-bold mb-4 text-right">
                معلومات المتجر
              </h3>
              <div className="space-y-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <span className="text-gray-700">الموقع الإلكتروني:</span>
                  <a
                    href={store.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {store.website.replace("https://www.", "")}
                  </a>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <span className="text-gray-700">عدد الكوبونات النشطة:</span>
                  <span className="font-bold">{store.activeCoupons}</span>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <span className="text-gray-700">التقييم:</span>
                  <div className="flex items-center">
                    <span className="mr-1">{store.rating}</span>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(store.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleStoreClick}
                  className="bg-accent text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors w-full"
                >
                  زيارة المتجر
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <SidebarAd type="store" />
              <SidebarAd type="coupon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
