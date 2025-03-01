"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  trackCouponView,
  trackCouponCopy,
  trackStoreClick,
} from "@/utils/analytics";
import {
  FaCopy,
  FaExternalLinkAlt,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaHeart,
  FaRegHeart,
  FaShareAlt,
} from "react-icons/fa";
import { Alerter } from "@/components/UI/Alerter";
import { useAuth } from "@/context/AuthContext";
import SidebarAd from "@/components/Sidebar/SidebarAd";
import { CouponBox } from "@/components/UI/Coupon/CouponBox";

export default function CouponDetailPage({ params }) {
  const { id } = params;
  const [coupon, setCoupon] = useState(null);
  const [relatedCoupons, setRelatedCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    const fetchCouponData = async () => {
      setLoading(true);
      try {
        setTimeout(() => {
          const mockCoupon = {
            id: parseInt(id),
            title: "كوبون خصم أمازون 15%",
            description:
              "خصم 15% على جميع منتجات أمازون. هذا العرض متاح لفترة محدودة، استفد من الخصم الآن على مجموعة واسعة من المنتجات بما في ذلك الإلكترونيات والملابس والأحذية ومستلزمات المنزل.",
            couponCode: "SAVE15",
            couponType: "code",
            expiryDate: "2025-12-31",
            store: "أمازون",
            storeSlug: "amazon",
            logo: "/images/logo-w.png",
            category: "إلكترونيات",
            isVerified: true,
            usedCount: 1250,
            terms: [
              "الخصم متاح على المنتجات المؤهلة فقط",
              "لا يمكن استخدام الكوبون مع عروض أخرى",
              "الحد الأقصى للخصم 200 ريال",
              "صالح للاستخدام مرة واحدة لكل عميل",
              "قد لا يكون الكوبون متاحًا في بعض المناطق",
            ],
            website: "https://www.amazon.sa",
            rating: 4.5,
          };

          // Mock related coupons
          const mockRelatedCoupons = [
            {
              id: 2,
              title: "عرض خاص أمازون",
              description:
                "خصم 100 ريال على المشتريات بقيمة 500 ريال أو أكثر من أمازون",
              couponCode: "SPECIAL100",
              couponType: "code",
              expiryDate: "2025-11-30",
              store: "أمازون",
              logo: "/images/logo-w.png",
              category: "ملابس",
              isVerified: true,
              usedCount: 980,
            },
            {
              id: 3,
              title: "توصيل مجاني من أمازون",
              description: "توصيل مجاني على جميع الطلبات من أمازون",
              couponCode: "FREESHIP",
              couponType: "code",
              expiryDate: "2025-10-15",
              store: "أمازون",
              logo: "/images/logo-w.png",
              category: "أحذية",
              isVerified: true,
              usedCount: 2100,
            },
            {
              id: 4,
              title: "خصم 20% على الأجهزة المنزلية من أمازون",
              description: "خصم 20% على جميع الأجهزة المنزلية من أمازون",
              couponCode: "HOME20",
              couponType: "code",
              expiryDate: "2025-09-30",
              store: "أمازون",
              logo: "/images/logo-w.png",
              category: "منزل وحديقة",
              isVerified: true,
              usedCount: 1560,
            },
          ];

          setCoupon(mockCoupon);
          setRelatedCoupons(mockRelatedCoupons);
          setLoading(false);

          // Track coupon view
          trackCouponView(mockCoupon);

          // Check if coupon is saved (would be from API in real implementation)
          if (isAuthenticated) {
            // Mock saved status
            setIsSaved(false);
          }
        }, 1000);
      } catch (error) {
        console.error("Error fetching coupon data:", error);
        setLoading(false);
      }
    };

    fetchCouponData();
  }, [id, isAuthenticated]);

  const handleCopyCode = () => {
    if (coupon) {
      navigator.clipboard.writeText(coupon.couponCode);
      setCopied(true);
      Alerter({ children: "تم نسخ الكود" });
      trackCouponCopy(coupon);

      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  };

  const handleStoreClick = () => {
    if (coupon) {
      trackStoreClick(coupon, coupon.store);
      window.open(coupon.website, "_blank");
    }
  };

  const handleSaveCoupon = () => {
    if (!isAuthenticated) {
      Alerter({ children: "يرجى تسجيل الدخول لحفظ الكوبون", type: "error" });
      return;
    }

    setIsSaved(!isSaved);

    Alerter({
      children: isSaved
        ? "تم إزالة الكوبون من المحفوظات"
        : "تم حفظ الكوبون في المحفوظات",
      type: isSaved ? "info" : "success",
    });
  };

  const handleShareCoupon = () => {
    if (navigator.share) {
      navigator
        .share({
          title: coupon.title,
          text: `استخدم كود الخصم: ${coupon.couponCode} للحصول على ${coupon.title}`,
          url: window.location.href,
        })
        .then(() => Alerter({ children: "تمت المشاركة بنجاح" }))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      Alerter({ children: "تم نسخ رابط الكوبون" });
    }
  };

  const calculateDaysLeft = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("ar-SA", options);
  };

  const daysLeft = coupon ? calculateDaysLeft(coupon.expiryDate) : 0;

  if (loading) {
    return (
      <div className="d-container py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
        </div>
      </div>
    );
  }

  if (!coupon) {
    return (
      <div className="d-container py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">الكوبون غير موجود</h1>
          <p className="text-gray-600 mb-6">
            عذراً، الكوبون الذي تبحث عنه غير موجود أو تم إزالته.
          </p>
          <Link
            href="/coupons"
            className="bg-accent text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
          >
            عرض جميع الكوبونات
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="d-container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Coupon Card */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
            {/* Coupon Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={coupon.logo}
                    alt={coupon.store}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow text-center md:text-right">
                  <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                    <Link
                      href={`/stores/${coupon.storeSlug}`}
                      className="text-accent hover:underline"
                    >
                      {coupon.store}
                    </Link>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-500">{coupon.category}</span>
                  </div>
                  <h1 className="text-2xl font-bold mb-2">{coupon.title}</h1>
                  <p className="text-gray-600 mb-4">{coupon.description}</p>
                  <div className="flex items-center justify-center md:justify-end gap-4">
                    <div className="flex items-center gap-1 text-sm">
                      <FaClock className="text-gray-500" />
                      <span className="text-gray-600">
                        ينتهي في {formatDate(coupon.expiryDate)}
                      </span>
                      {daysLeft > 0 && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          متبقي {daysLeft} يوم
                        </span>
                      )}
                    </div>
                    {coupon.isVerified && (
                      <div className="flex items-center gap-1 text-sm">
                        <FaCheckCircle className="text-green-500" />
                        <span className="text-gray-600">تم التحقق</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Coupon Code Section */}
              <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-dashed border-gray-300">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex-grow text-center sm:text-right">
                    <div className="text-sm text-gray-500 mb-1">كود الخصم</div>
                    <div className="text-xl font-bold font-mono bg-white px-4 py-2 rounded border border-gray-200 inline-block">
                      {coupon.couponCode}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleCopyCode}
                      className="bg-accent text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors flex items-center gap-2"
                    >
                      <span>{copied ? "تم النسخ" : "نسخ الكود"}</span>
                      <FaCopy />
                    </button>
                    <button
                      onClick={handleStoreClick}
                      className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors flex items-center gap-2"
                    >
                      <span>زيارة المتجر</span>
                      <FaExternalLinkAlt />
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-center sm:text-right text-sm text-gray-500">
                  تم استخدامه {coupon.usedCount} مرة
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex justify-between">
                <button
                  onClick={handleShareCoupon}
                  className="flex items-center gap-2 text-gray-700 hover:text-accent transition-colors"
                >
                  <span>مشاركة</span>
                  <FaShareAlt />
                </button>

                <button
                  onClick={handleSaveCoupon}
                  className="flex items-center gap-2 text-gray-700 hover:text-accent transition-colors"
                >
                  <span>{isSaved ? "إزالة من المحفوظات" : "حفظ الكوبون"}</span>
                  {isSaved ? (
                    <FaHeart className="text-accent" />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4 text-right flex items-center gap-2">
                <FaInfoCircle className="text-accent" />
                <span>شروط وأحكام الكوبون</span>
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-right pr-4">
                {coupon.terms.map((term, index) => (
                  <li key={index}>{term}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Coupons */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-right">كوبونات ذات صلة</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {relatedCoupons.map((relatedCoupon) => (
                  <CouponBox key={relatedCoupon.id} coupon={relatedCoupon} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 flex flex-col gap-5">
          <SidebarAd type="coupon" />
          <SidebarAd type="store" />
          <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
            <h3 className="text-lg font-bold mb-4 text-right">
              معلومات المتجر
            </h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-grow">
                <Link
                  href={`/stores/${coupon.storeSlug}`}
                  className="font-bold text-accent hover:underline"
                >
                  {coupon.store}
                </Link>
              </div>
              <div className="relative w-12 h-12">
                <Image
                  src={coupon.logo}
                  alt={coupon.store}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-right text-sm text-gray-600 mb-4">
              <p>زيارة المتجر للاستفادة من أحدث العروض والكوبونات المتاحة.</p>
            </div>
            <button
              onClick={handleStoreClick}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              زيارة المتجر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
