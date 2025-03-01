"use client";
import { StoreBox } from "@/components/UI/Store/StoreBox";
import { Title } from "@/components/UI/Title";
import { storesSectionData } from "@/utils/dummyData";
import { useEffect, useState } from "react";

export default function Stores({ className }) {
  const [tabs, setTabs] = useState(storesSectionData);

  useEffect(() => {
    setTabs((prev) =>
      prev.map((tab) => ({
        ...tab,
        isActive: tab.id === 2,
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
      className={`${className} p-4 md:p-6 lg:p-10 shadow-lg rounded-lg bg-white d-container`}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 md:mb-6">
        <Title className="mb-3 lg:mb-0">أفضل المتاجر للتسوق منها</Title>

        <div className="w-full lg:w-auto overflow-x-auto rounded-lg shadow-sm border border-gray-100">
          <ul className="flex flex-nowrap min-w-max bg-gray-50 p-1 rounded-lg">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center px-3 md:px-4 py-2 cursor-pointer rounded-md whitespace-nowrap transition-all duration-200 ${
                  tab.isActive
                    ? "bg-white text-primary shadow-sm font-medium"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                <div className="flex items-center gap-1.5 md:gap-2">
                  <img
                    src={tab.icon}
                    alt={tab.title}
                    className="w-4 h-4 md:w-5 md:h-5 object-contain"
                  />
                  <span className="text-xs md:text-sm">{tab.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 md:mt-6 lg:mt-8">
        {activeTab && (
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {activeTab.stores.map((store, index) => (
              <StoreBox store={store} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
