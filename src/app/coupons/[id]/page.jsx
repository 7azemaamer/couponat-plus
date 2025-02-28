"use client";
import { useState } from "react";
import { Alerter } from "@/components/UI/Alerter";
import { FaShareAlt } from "react-icons/fa";

export default function CouponPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    Alerter({ children: "تم نسخ الكود" });
    setCopied(true);
  };

  return (
    <div className="d-container py-8">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Store Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/images/logo-w.png"
                alt="Store Logo"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold mb-2">كود خصم امازون</h1>
                <p className="text-gray-600">36046 مرات الاستخدام</p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-accent hover:text-primary transition-colors">
              <FaShareAlt />
              <span>مشاركة</span>
            </button>
          </div>
        </div>

        {/* Coupon Content */}
        <div className="p-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold mb-4">
                خصم يصل إلى 80% + خصم إضافي 25% لحاملي بطاقات مصرف الراجحي
              </h2>
              <p className="text-gray-600">
                احصل على عضوية أمازون برايم في السعودية واستفد من التخصومات
                الكبيرة المتاحة لحاملي بطاقات الراجحي. هذا العرض الرائع متوفر
                لفترة محدودة فقط، فسارع للإستفادة منه وتسوق بلا حدود لمنتجاتك
                المفضلة على أمازون.
              </p>
            </div>

            {/* Coupon Code Box */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-8">
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">ARB5</div>
                <button
                  onClick={() => handleCopyCode("ARB5")}
                  className="bg-accent hover:bg-primary text-white px-8 py-3 rounded-full text-sm font-medium transition-colors"
                >
                  {copied ? "تم النسخ" : "نسخ الكود"}
                </button>
              </div>
            </div>

            {/* Expiry Date */}
            <div className="text-center text-gray-500">
              تاريخ انتهاء الصلاحية: 27-02-2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
