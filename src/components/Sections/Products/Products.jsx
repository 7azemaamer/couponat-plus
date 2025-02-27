"use client";
import { ProductBox } from "@/components/UI/Product/ProductBox";
import { Title } from "@/components/UI/Title";
import { productSectionData } from "@/utils/dummyData";
import { useEffect, useState } from "react";

export default function Products({ className }) {
  const [tabs, setTabs] = useState(productSectionData);

  useEffect(() => {
    setTabs((prev) =>
      prev.map((tab) => ({
        ...tab,
        isActive: tab.id === "-deals-tab",
      }))
    );
  }, []);

  const handleTabChange = (tabId) => {
    setTabs((prev) =>
      prev.map((tab) => ({
        ...tab,
        isActive: tab.id === tabId,
      }))
    );
  };

  const activeTab = tabs.find((tab) => tab.isActive);

  return (
    <div
      className={`${className} flex flex-col shadow-lg rounded-lg bg-white d-container`}
    >
      {/* Title and description, view more */}
      <div className="p-4 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <Title className="mb-2 md:mb-0">أفضل العروض لك فقط</Title>
          <p className="mt-1 text-sm md:text-base">
            اكتشف العروض الحصرية لمنتجاتك المفضلة واستمتع بخصومات لا حدود لها
            على أكثر الصفقات والعروض الترويجية إثارة.
          </p>
        </div>
        {/* View more button */}
        <div className="mt-4 md:mt-0">
          <button className="border-primary hover:bg-primary hover:text-white transition-all duration-150 border-2 text-primary text-sm font-medium py-2 px-4 rounded-xl">
            مشاهدة المزيد
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col md:flex-row gap-6 mb-10 px-4 md:px-10">
        {/* Nav */}
        <div className="md:w-60">
          <ul className="flex overflow-x-auto md:overflow-visible flex-row md:flex-col gap-2 pb-2">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`cursor-pointer px-4 py-2 whitespace-nowrap transition-all duration-200 ${
                  tab.isActive ? "active-nav text-white" : "hover-nav"
                }`}
              >
                <div className="flex items-center gap-2">
                  <img
                    src={tab.icon}
                    alt={tab.name}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-sm font-medium">{tab.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Products */}
        <div className="w-full">
          {activeTab && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {activeTab.content.map((product) => (
                <ProductBox product={product} key={product.title} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
