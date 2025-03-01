"use client";
import { useState, useEffect } from "react";
import { Search } from "@/components/UI/Search";
import { CouponBox } from "@/components/UI/Coupon/CouponBox";
import SidebarAd from "@/components/Sidebar/SidebarAd";
import {
  FaFilter,
  FaTimes,
  FaFire,
  FaRegClock,
  FaPercent,
  FaTag,
} from "react-icons/fa";

export default function CouponsPage() {
  const [coupons, setCoupons] = useState([]);
  const [filteredCoupons, setFilteredCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStore, setSelectedStore] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const fetchCoupons = async () => {
      setLoading(true);
      try {
        // This would be replaced with an actual API call
        // Simulating API response with mock data
        setTimeout(() => {
          // Mock coupons data
          const mockCoupons = [
            {
              id: 1,
              title: "كوبون خصم أمازون 15%",
              description: "خصم 15% على جميع منتجات أمازون",
              couponCode: "SAVE15",
              couponType: "code",
              expiryDate: "2025-12-31",
              store: "أمازون",
              storeSlug: "amazon",
              logo: "/images/logo-w.png",
              category: "إلكترونيات",
              isVerified: true,
              usedCount: 1250,
              isPopular: true,
              isNew: false,
            },
            {
              id: 2,
              title: "عرض خاص أمازون",
              description:
                "خصم 100 ريال على المشتريات بقيمة 500 ريال أو أكثر من أمازون",
              couponCode: "SPECIAL100",
              couponType: "code",
              expiryDate: "2025-11-30",
              store: "أمازون",
              storeSlug: "amazon",
              logo: "/images/logo-w.png",
              category: "ملابس",
              isVerified: true,
              usedCount: 980,
              isPopular: true,
              isNew: false,
            },
            {
              id: 3,
              title: "توصيل مجاني من أمازون",
              description: "توصيل مجاني على جميع الطلبات من أمازون",
              couponCode: "FREESHIP",
              couponType: "code",
              expiryDate: "2025-10-15",
              store: "أمازون",
              storeSlug: "amazon",
              logo: "/images/logo-w.png",
              category: "أحذية",
              isVerified: true,
              usedCount: 2100,
              isPopular: false,
              isNew: true,
            },
            {
              id: 4,
              title: "خصم 20% على الأجهزة المنزلية من أمازون",
              description: "خصم 20% على جميع الأجهزة المنزلية من أمازون",
              couponCode: "HOME20",
              couponType: "code",
              expiryDate: "2025-09-30",
              store: "أمازون",
              storeSlug: "amazon",
              logo: "/images/logo-w.png",
              category: "منزل وحديقة",
              isVerified: true,
              usedCount: 1560,
              isPopular: false,
              isNew: false,
            },
            {
              id: 5,
              title: "خصم 10% على جميع منتجات نون",
              description: "خصم 10% على جميع منتجات نون",
              couponCode: "NOON10",
              couponType: "code",
              expiryDate: "2025-08-31",
              store: "نون",
              storeSlug: "noon",
              logo: "/images/logo-w.png",
              category: "إلكترونيات",
              isVerified: true,
              usedCount: 3200,
              isPopular: false,
              isNew: false,
            },
            {
              id: 6,
              title: "خصم 15% على الملابس من نمشي",
              description: "خصم 15% على جميع الملابس من نمشي",
              couponCode: "FASHION15",
              couponType: "code",
              expiryDate: "2025-07-31",
              store: "نمشي",
              storeSlug: "namshi",
              logo: "/images/logo-w.png",
              category: "ملابس",
              isVerified: true,
              usedCount: 1800,
              isPopular: false,
              isNew: false,
            },
            {
              id: 7,
              title: "خصم 5% على الإلكترونيات من جرير",
              description: "خصم 5% على جميع الإلكترونيات من جرير",
              couponCode: "JARIR5",
              couponType: "code",
              expiryDate: "2025-06-30",
              store: "جرير",
              storeSlug: "jarir",
              logo: "/images/logo-w.png",
              category: "إلكترونيات",
              isVerified: true,
              usedCount: 950,
              isPopular: false,
              isNew: false,
            },
            {
              id: 8,
              title: "خصم 25% على الأحذية من نمشي",
              description: "خصم 25% على جميع الأحذية من نمشي",
              couponCode: "SHOES25",
              couponType: "code",
              expiryDate: "2025-05-31",
              store: "نمشي",
              storeSlug: "namshi",
              logo: "/images/logo-w.png",
              category: "أحذية",
              isVerified: true,
              usedCount: 1100,
              isPopular: false,
              isNew: false,
            },
          ];

          setCoupons(mockCoupons);
          setFilteredCoupons(mockCoupons);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching coupons:", error);
        setLoading(false);
      }
    };

    fetchCoupons();
  }, []);

  useEffect(() => {
    let filtered = [...coupons];

    if (searchTerm) {
      filtered = filtered.filter(
        (coupon) =>
          coupon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coupon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coupon.store.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (coupon) => coupon.category === selectedCategory
      );
    }

    if (selectedStore !== "all") {
      filtered = filtered.filter((coupon) => coupon.store === selectedStore);
    }

    if (activeTab === "popular") {
      filtered = filtered.filter((coupon) => coupon.isPopular);
    } else if (activeTab === "new") {
      filtered = filtered.filter((coupon) => coupon.isNew);
    } else if (activeTab === "expiring") {
      const today = new Date();
      const nextWeek = new Date();
      nextWeek.setDate(today.getDate() + 7);

      filtered = filtered.filter((coupon) => {
        const expiryDate = new Date(coupon.expiryDate);
        return expiryDate > today && expiryDate <= nextWeek;
      });
    }

    setFilteredCoupons(filtered);
  }, [coupons, searchTerm, selectedCategory, selectedStore, activeTab]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleStoreChange = (store) => {
    setSelectedStore(store);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedStore("all");
    setActiveTab("all");
  };

  const allCategories = [
    "all",
    ...new Set(coupons.map((coupon) => coupon.category)),
  ];

  const allStores = ["all", ...new Set(coupons.map((coupon) => coupon.store))];

  return (
    <div className="d-container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 justify-end mt-6">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-4 py-2 rounded-md text-sm flex items-center gap-2 ${
                    activeTab === "all"
                      ? "bg-accent text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <FaTag />
                  <span>جميع الكوبونات</span>
                </button>
                <button
                  onClick={() => setActiveTab("popular")}
                  className={`px-4 py-2 rounded-md text-sm flex items-center gap-2 ${
                    activeTab === "popular"
                      ? "bg-accent text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <FaFire />
                  <span>الأكثر استخداماً</span>
                </button>
                <button
                  onClick={() => setActiveTab("new")}
                  className={`px-4 py-2 rounded-md text-sm flex items-center gap-2 ${
                    activeTab === "new"
                      ? "bg-accent text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <FaPercent />
                  <span>كوبونات جديدة</span>
                </button>
                <button
                  onClick={() => setActiveTab("expiring")}
                  className={`px-4 py-2 rounded-md text-sm flex items-center gap-2 ${
                    activeTab === "expiring"
                      ? "bg-accent text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <FaRegClock />
                  <span>تنتهي قريباً</span>
                </button>
              </div>

              {/* Mobile Filters Toggle */}
              <div className="mt-4 lg:hidden">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md flex items-center justify-center gap-2"
                >
                  {showFilters ? (
                    <>
                      <FaTimes />
                      <span>إخفاء الفلاتر</span>
                    </>
                  ) : (
                    <>
                      <FaFilter />
                      <span>عرض الفلاتر</span>
                    </>
                  )}
                </button>

                {showFilters && (
                  <div className="mt-4">
                    <div className="mb-4">
                      <h3 className="text-md font-bold mb-2 text-right">
                        تصفية حسب الفئة:
                      </h3>
                      <div className="flex flex-wrap gap-2 justify-end">
                        {allCategories.map((category, index) => (
                          <button
                            key={index}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-3 py-1 rounded-md text-sm ${
                              selectedCategory === category
                                ? "bg-accent text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {category === "all" ? "الكل" : category}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-md font-bold mb-2 text-right">
                        تصفية حسب المتجر:
                      </h3>
                      <div className="flex flex-wrap gap-2 justify-end">
                        {allStores.map((store, index) => (
                          <button
                            key={index}
                            onClick={() => handleStoreChange(store)}
                            className={`px-3 py-1 rounded-md text-sm ${
                              selectedStore === store
                                ? "bg-accent text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {store === "all" ? "الكل" : store}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Coupons List */}
            <div className="p-6">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
                </div>
              ) : filteredCoupons.length > 0 ? (
                <div className="space-y-6">
                  {filteredCoupons.map((coupon) => (
                    <CouponBox key={coupon.id} coupon={coupon} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-2">
                    لا توجد كوبونات مطابقة للبحث
                  </p>
                  <button
                    onClick={resetFilters}
                    className="text-accent hover:underline"
                  >
                    عرض جميع الكوبونات
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 hidden lg:block">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 className="text-lg font-bold mb-4 text-right">
              تصفية حسب الفئة
            </h3>
            <ul className="space-y-2 text-right">
              {allCategories.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleCategoryChange(category)}
                    className={`text-${
                      selectedCategory === category ? "accent" : "gray-700"
                    } hover:text-accent transition-colors`}
                  >
                    {category === "all" ? "جميع الفئات" : category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 className="text-lg font-bold mb-4 text-right">
              تصفية حسب المتجر
            </h3>
            <ul className="space-y-2 text-right">
              {allStores.map((store, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleStoreChange(store)}
                    className={`text-${
                      selectedStore === store ? "accent" : "gray-700"
                    } hover:text-accent transition-colors`}
                  >
                    {store === "all" ? "جميع المتاجر" : store}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <SidebarAd type="coupon" />
          <SidebarAd type="store" />
        </div>
      </div>
    </div>
  );
}
