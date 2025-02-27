"use client";
import { useState } from "react";
import { Alerter } from "@/components/UI/Alerter";
import { FaChevronDown, FaWifi, FaShareAlt } from "react-icons/fa";

const OtherCoupon = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    Alerter({ children: "تم نسخ الكود" });
    setCopied(true);
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <img
            src="/images/couponat.png"
            alt="Store Logo"
            className="w-16 h-16 object-contain"
          />
          <div className="text-xs text-gray-600">36046 مرات الاستخدام</div>
        </div>
        <button className="text-xs text-accent hover:text-primary">مشاركة</button>
      </div>

      <div className="text-right mb-4">
        <h3 className="text-lg font-bold mb-2">خصم يصل إلى 80% + خصم إضافي 25% لحاملي بطاقات مصرف الراجحي</h3>
        <p className="text-sm text-gray-600">
          احصل على عضوية أمازون برايم في السعودية واستفد من التخصومات الكبيرة المتاحة لحاملي بطاقات الراجحي. هذا العرض الرائع متوفر لفترة محدودة فقط، فسارع للإستفادة منه وتسوق بلا حدود لمنتجاتك المفضلة على أمازون.
        </p>
      </div>

      <div className="flex justify-between items-center border border-dashed border-gray-300 rounded p-2">
        <div className="text-xl font-bold">ARB5</div>
        <button
          onClick={() => handleCopyCode("ARB5")}
          className="bg-accent text-white px-6 py-2 rounded-full text-sm hover:bg-primary transition-colors"
        >
          عرض الكوبون
        </button>
      </div>

      <div className="text-xs text-gray-500 mt-4 text-right">
        تاريخ انتهاء الصلاحية 27-02-2025
      </div>
    </div>
  );
};

export default OtherCoupon;
