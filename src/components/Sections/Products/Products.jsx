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
    <div className={`${className} flex flex-col shadow-lg rounded-lg bg-white`}>
      {/* Title and description, view more */}
      <div className="p-10 flex justify-between">
        <div>
          <Title className="mb-4 lg:mb-0">أفضل العروض لك فقط</Title>
          <p className="mt-2">
            اكتشف العروض الحصرية لمنتجاتك المفضلة واستمتع بخصومات لا حدود لها
            على أكثر الصفقات والعروض الترويجية إثارة.
          </p>
        </div>
        {/* View more button */}
        <div className="mt-4">
          <button className="border-primary hover:bg-primary hover:text-white transition-all duration-150 border-2 text-primary text-sm font-medium py-2 px-4 rounded-xl">
            مشاهدة المزيد
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="flex gap-10 mb-10">
        {/* nav */}
        <ul className="flex flex-col pb-2 gap-1">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`${
                tab.isActive ? "active-nav" : "hover-nav"
              } px-4 py-2 cursor-pointer min-w-60`}
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

        {/* Products */}
        <div className="mt-8 pl-10 w-full">
          {activeTab && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full">
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
