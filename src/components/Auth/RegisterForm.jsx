"use client";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Alerter } from "@/components/UI/Alerter";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Alerter({
        children: "كلمات المرور غير متطابقة",
        className: "bg-red-500 text-white px-6 py-4 shadow-md rounded-full",
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = await register(name, email, password);

      if (result.success) {
        Alerter({ children: "تم إنشاء الحساب بنجاح" });
      } else {
        Alerter({
          children: "فشل إنشاء الحساب، يرجى المحاولة مرة أخرى",
          className: "bg-red-500 text-white px-6 py-4 shadow-md rounded-full",
        });
      }
    } catch (error) {
      Alerter({
        children: "حدث خطأ أثناء إنشاء الحساب",
        className: "bg-red-500 text-white px-6 py-4 shadow-md rounded-full",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-right">إنشاء حساب جديد</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 text-right mb-2">
            الاسم
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 text-right mb-2"
          >
            البريد الإلكتروني
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 text-right mb-2"
          >
            كلمة المرور
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 text-right mb-2"
          >
            تأكيد كلمة المرور
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all disabled:opacity-50"
        >
          {isLoading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
