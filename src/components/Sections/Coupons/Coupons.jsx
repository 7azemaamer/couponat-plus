"use client";
import { CouponBox } from "@/components/UI/Coupon/CouponBox";

import { Title } from "@/components/UI/Title";
import { couponsSectionData } from "@/utils/dummyData";
import { useEffect, useState } from "react";

export default function Coupons({ className }) {
  const [tabs, setTabs] = useState(couponsSectionData);

  useEffect(() => {
    setTabs((prev) =>
      prev.map((tab) => ({
        ...tab,
        isActive: tab.id === "15-coupon-tab",
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
      {/* Title and description */}
      <div className="p-4 md:p-10">
        <Title className="mb-4 lg:mb-0"> افضل الكوبونات وعروض الخصم</Title>
        <p className="mt-2 text-sm md:text-base">
          احصل على خصومات إضافية مع كوبونات وأكواد الخصم الحصرية، وتسوق من أبرز
          العلامات التجارية بأفضل الأسعار!
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row md:gap-10 mb-6 md:mb-10">
        <div className="w-full md:w-auto overflow-x-auto md:overflow-x-visible mb-4 md:mb-0">
          <ul className="flex md:flex-col pb-2 gap-1 min-w-max">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`${
                  tab.isActive ? "active-nav text-white" : "hover-nav"
                } px-3 md:px-4 py-2 cursor-pointer md:min-w-60 `}
              >
                <div className="flex items-center gap-2">
                  <img
                    src={tab.icon}
                    alt={tab.name}
                    className="w-5 h-5 md:w-6 md:h-6 object-contain"
                  />
                  <span className="text-xs md:text-sm font-medium">
                    {tab.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Coupons */}
        <div className="px-4 md:pl-10 md:px-0 w-full">
          {activeTab && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
              {activeTab.coupon.map((coupon, index) => (
                <CouponBox coupon={coupon} key={`coupon-${index}`} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
