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
    <div className="py-10 px-4 bg-white d-contain">
      <div className="border-r-2 border-accent px-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          لا يفوتك أي عرض
        </h2>
        <p className="text-gray-700 mb-6 text-lg">
          سجل لتلقي رسائل البريد الإلكتروني التي تتضمن أحدث كوبونات الخصم
          والعروض الترويجية من متاجرك المفضلة
        </p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto flex flex-col md:flex-row"
        >
          <input
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
            className="w-full md:w-auto flex-1 px-8 py-4 border-2 border-foreground text-2xl shadow-sm focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-gray-800 text-white px-6 py-2 text-2xl shadow-md hover:bg-foreground transition-all"
          >
            {status || "اشترك الآن"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
