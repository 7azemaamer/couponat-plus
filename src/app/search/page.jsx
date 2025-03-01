"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { CouponBox } from "@/components/UI/Coupon/CouponBox";
import { StoreBox } from "@/components/UI/Store/StoreBox";
import SidebarAd from "@/components/Sidebar/SidebarAd";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState({ coupons: [], stores: [] });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        setTimeout(() => {
          const mockCoupons = [
            {
              id: 1,
              title: `كوبون خصم ${query}`,
              description: "خصم 15% على جميع المنتجات",
              couponCode: "SAVE15",
              couponType: "open",
              expiryDate: "2025-12-31",
              store: "امازون",
              logo: "/images/logo-w.png",
            },
            {
              id: 2,
              title: `عرض خاص ${query}`,
              description: "خصم 25% على الإلكترونيات",
              couponCode: "TECH25",
              couponType: "show",
              expiryDate: "2025-10-15",
              store: "نون",
              logo: "/images/logo-w.png",
            },
          ];

          const mockStores = [
            {
              id: 1,
              name: `متجر ${query}`,
              image: "/images/logo-w.png",
              coupons: 15,
              link: "/stores/amazon",
            },
            {
              id: 2,
              name: "نون",
              image: "/images/logo-w.png",
              coupons: 10,
              link: "/stores/noon",
            },
          ];

          setResults({
            coupons: mockCoupons,
            stores: mockStores,
          });
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    } else {
      setLoading(false);
    }
  }, [query]);

  const filteredResults = () => {
    if (activeTab === "all") return results;
    if (activeTab === "coupons") return { ...results, stores: [] };
    if (activeTab === "stores") return { ...results, coupons: [] };
    return results;
  };

  return (
    <div className="d-container py-8">
      <h1 className="text-2xl font-bold mb-6 text-right">
        نتائج البحث عن: {query}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          {/* Tabs */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <div className="flex gap-4 border-b pb-3">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-full ${
                  activeTab === "all"
                    ? "bg-accent text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                الكل
              </button>
              <button
                onClick={() => setActiveTab("coupons")}
                className={`px-4 py-2 rounded-full ${
                  activeTab === "coupons"
                    ? "bg-accent text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                كوبونات
              </button>
              <button
                onClick={() => setActiveTab("stores")}
                className={`px-4 py-2 rounded-full ${
                  activeTab === "stores"
                    ? "bg-accent text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                متاجر
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
              <p className="mt-2 text-gray-600">جاري البحث...</p>
            </div>
          ) : (
            <>
              {/* Coupons Results */}
              {filteredResults().coupons.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-right">كوبونات</h2>
                  <div className="space-y-4">
                    {filteredResults().coupons.map((coupon) => (
                      <CouponBox key={coupon.id} coupon={coupon} />
                    ))}
                  </div>
                </div>
              )}

              {/* Stores Results */}
              {filteredResults().stores.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold mb-4 text-right">متاجر</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {filteredResults().stores.map((store) => (
                      <StoreBox key={store.id} store={store} />
                    ))}
                  </div>
                </div>
              )}

              {/* No Results */}
              {filteredResults().coupons.length === 0 &&
                filteredResults().stores.length === 0 && (
                  <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                    <p className="text-gray-600">لا توجد نتائج مطابقة لبحثك</p>
                    <p className="mt-2 text-sm text-gray-500">
                      حاول البحث بكلمات مختلفة أو تصفح الفئات المتاحة
                    </p>
                  </div>
                )}
            </>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 gap-5 flex flex-col">
          <SidebarAd type="coupon" />
          <SidebarAd type="share" />
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="d-container py-8 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
          <p className="mt-2 text-gray-600">جاري تحميل الصفحة...</p>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
