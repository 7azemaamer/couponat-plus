"use client";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Alerter } from "@/components/UI/Alerter";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await login(email, password);

      if (result.success) {
        Alerter({ children: "تم تسجيل الدخول بنجاح" });
      } else {
        Alerter({
          children: "فشل تسجيل الدخول، يرجى التحقق من بياناتك",
          className: "bg-red-500 text-white px-6 py-4 shadow-md rounded-full",
        });
      }
    } catch (error) {
      Alerter({
        children: "حدث خطأ أثناء تسجيل الدخول",
        className: "bg-red-500 text-white px-6 py-4 shadow-md rounded-full",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-right">تسجيل الدخول</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <div className="text-right">
          <a href="#" className="text-accent hover:text-primary text-sm">
            نسيت كلمة المرور؟
          </a>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all disabled:opacity-50"
        >
          {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
