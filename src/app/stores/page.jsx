"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "@/components/UI/Search";
import SidebarAd from "@/components/Sidebar/SidebarAd";
import { FaStar, FaTag } from "react-icons/fa";

export default function StoresPage() {
  const [stores, setStores] = useState([]);
  const [filteredStores, setFilteredStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchStores = async () => {
      setLoading(true);
      try {
        setTimeout(() => {
          const mockStores = [
            {
              id: 1,
              name: "أمازون",
              slug: "amazon",
              logo: "/images/logo-w.png",
              description:
                "أمازون هو متجر إلكتروني عالمي يوفر ملايين المنتجات بأسعار تنافسية.",
              categories: ["إلكترونيات", "ملابس", "منزل وحديقة"],
              rating: 4.8,
              totalCoupons: 25,
              activeCoupons: 18,
              featured: true,
            },
            {
              id: 2,
              name: "نون",
              slug: "noon",
              logo: "/images/logo-w.png",
              description:
                "نون هو متجر إلكتروني رائد في الشرق الأوسط يوفر مجموعة واسعة من المنتجات.",
              categories: ["إلكترونيات", "ملابس", "مستلزمات أطفال"],
              rating: 4.5,
              totalCoupons: 20,
              activeCoupons: 15,
              featured: true,
            },
            {
              id: 3,
              name: "نمشي",
              slug: "namshi",
              logo: "/images/logo-w.png",
              description: "نمشي هو متجر إلكتروني متخصص في الأزياء والموضة.",
              categories: ["ملابس", "أحذية", "إكسسوارات"],
              rating: 4.3,
              totalCoupons: 15,
              activeCoupons: 10,
              featured: true,
            },
            {
              id: 4,
              name: "علي إكسبرس",
              slug: "aliexpress",
              logo: "/images/logo-w.png",
              description:
                "علي إكسبرس هو متجر إلكتروني عالمي يوفر منتجات متنوعة بأسعار منخفضة.",
              categories: ["إلكترونيات", "ملابس", "منزل وحديقة"],
              rating: 4.0,
              totalCoupons: 18,
              activeCoupons: 12,
              featured: false,
            },
            {
              id: 5,
              name: "شي إن",
              slug: "shein",
              logo: "/images/logo-w.png",
              description:
                "شي إن هو متجر إلكتروني متخصص في الأزياء النسائية بأسعار منافسة.",
              categories: ["ملابس", "أحذية", "إكسسوارات"],
              rating: 4.2,
              totalCoupons: 12,
              activeCoupons: 8,
              featured: false,
            },
            {
              id: 6,
              name: "جرير",
              slug: "jarir",
              logo: "/images/logo-w.png",
              description:
                "جرير هي سلسلة مكتبات ومتاجر إلكترونية رائدة توفر الكتب والقرطاسية والإلكترونيات.",
              categories: ["إلكترونيات", "كتب", "قرطاسية"],
              rating: 4.6,
              totalCoupons: 10,
              activeCoupons: 7,
              featured: false,
            },
            {
              id: 7,
              name: "اكسترا",
              slug: "extra",
              logo: "/images/logo-w.png",
              description:
                "اكسترا هي سلسلة متاجر متخصصة في الإلكترونيات والأجهزة المنزلية.",
              categories: ["إلكترونيات", "أجهزة منزلية"],
              rating: 4.4,
              totalCoupons: 8,
              activeCoupons: 5,
              featured: false,
            },
            {
              id: 8,
              name: "سنتربوينت",
              slug: "centrepoint",
              logo: "/images/logo-w.png",
              description:
                "سنتربوينت هو متجر متخصص في الأزياء والمنتجات المنزلية للعائلة.",
              categories: ["ملابس", "أحذية", "منزل وحديقة"],
              rating: 4.1,
              totalCoupons: 7,
              activeCoupons: 4,
              featured: false,
            },
          ];

          setStores(mockStores);
          setFilteredStores(mockStores);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching stores:", error);
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  useEffect(() => {
    filterStores();
  }, [searchTerm, selectedCategory, stores]);

  const filterStores = () => {
    let filtered = [...stores];

    if (searchTerm) {
      filtered = filtered.filter(
        (store) =>
          store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          store.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((store) =>
        store.categories.includes(selectedCategory)
      );
    }

    setFilteredStores(filtered);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const allCategories = [
    "all",
    ...new Set(stores.flatMap((store) => store.categories)),
  ];

  const featuredStores = stores.filter((store) => store.featured);

  return (
    <div className="d-container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-right">جميع المتاجر</h1>
              <p className="text-gray-600 text-right mt-2">
                تصفح جميع المتاجر المتاحة واحصل على أحدث كوبونات الخصم والعروض
              </p>
            </div>

            <div className="p-6 border-b border-gray-200">
              <div className="mb-4">
                <Search
                  full
                  className
                  label="ابحث عن متجر..."
                  onSearch={handleSearch}
                />
              </div>

              <div className="mt-4">
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
            </div>

            {/* Featured Stores */}
            {featuredStores.length > 0 && (
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold mb-4 text-right">
                  متاجر مميزة
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featuredStores.map((store) => (
                    <Link
                      key={store.id}
                      href={`/stores/${store.slug}`}
                      className="bg-gray-50 rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
                    >
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={store.logo}
                          alt={store.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-grow text-right">
                        <h3 className="font-bold text-lg">{store.name}</h3>
                        <div className="flex items-center justify-end gap-2 text-sm text-gray-600">
                          <span>{store.rating}</span>
                          <FaStar className="text-yellow-400" />
                          <span className="mx-2">|</span>
                          <span>{store.activeCoupons} كوبون نشط</span>
                          <FaTag className="text-accent" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* All Stores */}
            <div className="p-6">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
                </div>
              ) : filteredStores.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredStores.map((store) => (
                    <Link
                      key={store.id}
                      href={`/stores/${store.slug}`}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="p-4 flex flex-col items-center">
                        <div className="relative w-24 h-24 mb-4">
                          <Image
                            src={store.logo}
                            alt={store.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h3 className="font-bold text-lg text-center mb-2">
                          {store.name}
                        </h3>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-3">
                          <span>{store.rating}</span>
                          <FaStar className="text-yellow-400" />
                        </div>
                        <p className="text-gray-600 text-sm text-center mb-4 line-clamp-2">
                          {store.description}
                        </p>
                        <div className="flex items-center justify-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <span className="text-gray-700">
                              {store.activeCoupons} كوبون نشط
                            </span>
                            <FaTag className="text-accent" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-2">
                    لا توجد متاجر مطابقة للبحث
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                    className="text-accent hover:underline"
                  >
                    عرض جميع المتاجر
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 gap-5 flex flex-col">
          <SidebarAd type="store" />
          <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
            <h3 className="text-lg font-bold mb-4 text-right">
              تصفح حسب الفئة
            </h3>
            <ul className="space-y-2 text-right">
              {allCategories
                .filter((category) => category !== "all")
                .map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleCategoryChange(category)}
                      className={`text-${
                        selectedCategory === category ? "accent" : "gray-700"
                      } hover:text-accent transition-colors`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          <SidebarAd type="coupon" />
        </div>
      </div>
    </div>
  );
}
