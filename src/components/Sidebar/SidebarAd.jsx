import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaTwitter, FaPinterest, FaFacebook } from "react-icons/fa";
import Image from "next/image";

const SidebarAd = ({ type }) => {
  const adContent = {
    store: {
      title: "تسوق من أفضل المتاجر",
      description: "احصل على خصومات حصرية من أشهر المتاجر الإلكترونية",
      image: "/images/logo-w.png",
      link: "/stores",
      linkText: "تصفح المتاجر",
    },
    coupon: {
      title: "وفر في مشترياتك",
      description: "استخدم أحدث كوبونات الخصم وادخر المال على مشترياتك",
      image: "/images/logo-w.png",
      link: "/coupons",
      linkText: "تصفح الكوبونات",
    },
  };

  const content = adContent[type] || adContent.coupon;

  return (
    <div className="bg-accent text-white rounded-lg overflow-hidden shadow-sm">
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 text-right">{content.title}</h3>
        <p className="text-white text-opacity-90 text-sm mb-4 text-right">
          {content.description}
        </p>
        <div className="flex justify-center mb-4">
          <div className="relative w-24 h-24">
            <Image
              src={content.image}
              alt={content.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <Link
          href={content.link}
          className="block bg-white text-accent text-center py-2 rounded-md hover:bg-opacity-90 transition-colors"
        >
          {content.linkText}
        </Link>
      </div>
    </div>
  );
};

export default SidebarAd;
