"use client";
import { useState } from "react";
import { Alerter } from "@/components/UI/Alerter";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      setTimeout(() => {
        Alerter({ children: "تم إرسال رسالتك بنجاح، سنتواصل معك قريبًا" });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error sending message:", error);
      Alerter({
        children: "حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة مرة أخرى",
        className: "bg-red-500 text-white px-6 py-4 shadow-md rounded-full",
      });
      setLoading(false);
    }
  };

  return (
    <div className="d-container py-12">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6 text-right">تواصل معنا</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="text-right">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                نحن نقدر تواصلك معنا ونسعى دائمًا للرد على استفساراتك واقتراحاتك
                في أسرع وقت ممكن. يمكنك التواصل معنا من خلال النموذج التالي أو
                عبر وسائل الاتصال المباشرة.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-accent text-white p-3 rounded-full">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">رقم الهاتف</h3>
                    <p className="text-gray-600">+966 12 345 6789</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-accent text-white p-3 rounded-full">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">
                      البريد الإلكتروني
                    </h3>
                    <p className="text-gray-600">info@couponplus.sa</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-accent text-white p-3 rounded-full">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">العنوان</h3>
                    <p className="text-gray-600">
                      الرياض، المملكة العربية السعودية
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-right mb-2"
                  >
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 text-right mb-2"
                  >
                    الموضوع
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-right mb-2"
                  >
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-accent text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-all disabled:opacity-50"
                >
                  {loading ? "جاري الإرسال..." : "إرسال"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
