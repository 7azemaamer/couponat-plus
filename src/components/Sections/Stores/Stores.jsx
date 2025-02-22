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
    <div className={`${className} p-10 shadow-lg rounded-lg bg-white`}>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <Title className="mb-4 lg:mb-0">أفضل المتاجر للتسوق منها</Title>

        <div className="w-full lg:w-auto overflow-x-auto">
          <ul className="flex space-x-4 pb-2">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center px-4 py-2 cursor-pointer ${
                  tab.isActive
                    ? "border-b bg-opacity-10 text-primary border-primary"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  <img
                    src={tab.icon}
                    alt={tab.title}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-sm font-medium whitespace-nowrap">
                    {tab.title}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        {activeTab && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {activeTab.stores.map((store, index) => (
              <StoreBox store={store} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
