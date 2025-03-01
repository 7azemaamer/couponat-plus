"use client";

import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("تم الاشتراك بنجاح!");
    setEmail("");
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-white d-contain">
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        <div className="border-r-0 lg:border-r-2 border-accent px-4 lg:px-10 w-full lg:w-1/2">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            لا يفوتك أي عرض
          </h2>
          <p className="text-gray-700 mb-6 text-base sm:text-lg">
            سجل لتلقي رسائل البريد الإلكتروني التي تتضمن أحدث كوبونات الخصم
            والعروض الترويجية من متاجرك المفضلة
          </p>
        </div>
        <div className="w-full lg:w-1/2 ">
          <form
            onSubmit={handleSubmit}
            className="flex gap-3 w-full items-center"
          >
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="w-full flex-1 px-4 sm:px-6 py-3 border-2 border-foreground text-base sm:text-lg md:text-xl shadow-sm focus:outline-none rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-gray-800  text-white px-4 sm:px-6 py-3 text-base sm:text-lg md:text-xl shadow-md hover:bg-foreground transition-all whitespace-nowrap rounded-md"
            >
              {status || "اشترك الآن"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
