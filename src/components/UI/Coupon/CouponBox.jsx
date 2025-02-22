"use client";
import { useState } from "react";
import { Alerter } from "../Alerter";
import { Popup } from "../Popup";

export const CouponBox = ({ coupon }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-200">
      <div className="flex flex-col h-full w-full">
        {/* Image and Logo  */}
        <div className="grid grid-flow-col">
          <div className="flex border-b border-lightGray items-center">
            <img
              src={coupon.logo}
              alt={`${coupon.name} logo`}
              className="max-w-full px-2 h-auto"
            />
          </div>
          <div className="flex border-b border-lightGray items-center">
            <img
              src={coupon.offerImage}
              alt={`${coupon.name} logo`}
              className="max-w-full  h-auto object-cover object-center"
            />
          </div>
        </div>

        {/* Content  */}
        <div className="p-4">
          <h3 className="text-sm text-center font-bold text-gray-800 mb-4 line-clamp-2 min-h-[40px]">
            {coupon.title}
          </h3>

          {/* Action Buttonssssssssss */}
          {coupon.couponType === "open" ? (
            <>
              <div className="flex justify-between border-gray-300 border-dotted border">
                <div className="py-2 px-14 text-xl font-bold w-[60%] h-full">
                  {coupon.couponCode}
                </div>
                <div
                  className="bg-accent text-[12px] font-medium py-2 px-4 cursor-pointer flex items-center"
                  onClick={() => {
                    navigator.clipboard.writeText(coupon.couponCode);
                    Alerter({ children: "تم نسخ الكود" });
                  }}
                >
                  نسخ الكود
                </div>
              </div>
            </>
          ) : coupon.couponType === "show" ? (
            <>
              <div className="relative flex justify-end border-gray-300 border-dotted border">
                <button
                  onClick={() => setIsOpen(true)}
                  className="absolute top-0 bottom-0 right-0 left-10 hover:left-14 transition-all duration-200 bg-accent text-[12px] font-medium py-2 px-4 cursor-pointer flex items-center"
                >
                  عرض الكوبون
                </button>
                <div className="py-2 text-black px-20 text-xl font-bold w-[60%] h-full">
                  {coupon.couponCode}
                </div>
                <Popup
                  isOpen={isOpen}
                  onClose={() => setIsOpen(false)}
                  couponData={coupon}
                />
              </div>
            </>
          ) : (
            <div className="bg-accent text-[12px] font-medium py-2 px-2 text-center cursor-pointer w-full">
              <a target="_blank" href={coupon.href || coupon.link}></a>
              احصل على العرض
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
