"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CouponBox } from "@/components/UI/Coupon/CouponBox";
import { Alerter } from "@/components/UI/Alerter";

export default function ProfilePage() {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("saved");
  const [savedCoupons, setSavedCoupons] = useState([]);
  const [usedCoupons, setUsedCoupons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated && !loading) {
      router.push("/login");
    }
  }, [isAuthenticated, router, loading]);

  useEffect(() => {
    const fetchUserCoupons = async () => {
      setLoading(true);
      try {
        setTimeout(() => {
          setSavedCoupons([
            {
              id: 1,
              title: "كوبون خصم امازون",
              description: "خصم 15% على جميع المنتجات",
              couponCode: "SAVE15",
              couponType: "open",
              expiryDate: "2025-12-31",
              store: "امازون",
              logo: "/images/logo-w.png",
            },
            {
              id: 2,
              title: "عرض خاص نون",
              description: "خصم 25% على الإلكترونيات",
              couponCode: "TECH25",
              couponType: "show",
              expiryDate: "2025-10-15",
              store: "نون",
              logo: "/images/logo-w.png",
            },
          ]);

          setUsedCoupons([
            {
              id: 3,
              title: "كوبون خصم نمشي",
              description: "خصم 30% على الملابس",
              couponCode: "FASHION30",
              couponType: "open",
              expiryDate: "2025-08-20",
              store: "نمشي",
              logo: "/images/logo-w.png",
              usedDate: "2023-05-15",
            },
          ]);

          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching user coupons:", error);
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchUserCoupons();
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    logout();
    Alerter({ children: "تم تسجيل الخروج بنجاح" });
    router.push("/");
  };

  if (!isAuthenticated && !loading) {
    return null;
  }

  return (
    <div className="d-container py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold mb-2">الملف الشخصي</h1>
              <p className="text-gray-600">{user?.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="mt-4 md:mt-0 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              تسجيل الخروج
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("saved")}
            className={`flex-1 py-3 font-medium ${
              activeTab === "saved"
                ? "border-b-2 border-accent text-accent"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            الكوبونات المحفوظة
          </button>
          <button
            onClick={() => setActiveTab("used")}
            className={`flex-1 py-3 font-medium ${
              activeTab === "used"
                ? "border-b-2 border-accent text-accent"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            الكوبونات المستخدمة
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
              <p className="mt-2 text-gray-600">جاري التحميل...</p>
            </div>
          ) : (
            <>
              {activeTab === "saved" && (
                <div className="space-y-4">
                  {savedCoupons.length > 0 ? (
                    savedCoupons.map((coupon) => (
                      <CouponBox key={coupon.id} coupon={coupon} />
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-600">لا توجد كوبونات محفوظة</p>
                      <p className="mt-2 text-sm text-gray-500">
                        ابدأ بحفظ الكوبونات المفضلة لديك للوصول إليها بسهولة
                      </p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "used" && (
                <div className="space-y-4">
                  {usedCoupons.length > 0 ? (
                    usedCoupons.map((coupon) => (
                      <div key={coupon.id} className="relative">
                        <div className="absolute inset-0 bg-gray-200 bg-opacity-50 z-10 flex items-center justify-center">
                          <div className="bg-white px-4 py-2 rounded-md shadow-md">
                            <p className="text-gray-700">
                              تم استخدامه بتاريخ: {coupon.usedDate}
                            </p>
                          </div>
                        </div>
                        <CouponBox coupon={coupon} />
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-600">لا توجد كوبونات مستخدمة</p>
                      <p className="mt-2 text-sm text-gray-500">
                        ستظهر هنا الكوبونات التي قمت باستخدامها
                      </p>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
