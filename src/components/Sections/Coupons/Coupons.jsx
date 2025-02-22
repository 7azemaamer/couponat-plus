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
    <div className={`${className} flex flex-col shadow-lg rounded-lg bg-white`}>
      {/* Title and description */}
      <div className="p-10">
        <Title className="mb-4 lg:mb-0"> افضل الكوبونات وعروض الخصم</Title>
        <p className="mt-2">
          احصل على خصومات إضافية مع كوبونات وأكواد الخصم الحصرية، وتسوق من أبرز
          العلامات التجارية بأفضل الأسعار!
        </p>
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

        {/* Coupons */}
        <div className="mt-8 pl-10">
          {activeTab && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
