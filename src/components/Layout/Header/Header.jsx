import { Button } from "@/components/UI/Button";
import { Search } from "@/components/UI/Search";
import Image from "next/image";
export function Header() {
  const navItems = [
    {
      title: "كوبونات",
      submenu: [
        {
          title: "جميع المتاجر",
          href: "/stores",
          children: [
            {
              title: "علي إكسبريس",
              href: "/aliexpress",
            },
            { title: "امازون", href: "/amazon" },
            { title: "فارفيتش", href: "/farfetch" },
            { title: "فلاي ناس", href: "/flynas" },
            { title: "نون", href: "/noon" },
            { title: "تيمو", href: "/temu" },
            { title: "اديداس", href: "/adidas" },
            { title: "كارفور", href: "/carrefour" },
            { title: "ترينديول", href: "/trendyol" },
            { title: "سيفورا", href: "/sephora" },
          ],
        },
        {
          title: "كافة فئات المتجر",
          href: "/categories",
          children: [
            {
              title: "الأزياء والإكسسوارات",
              href: "/categories/fashion-accessories",
            },
            {
              title: "صحة وجمال",
              href: "/categories/health-beauty",
            },
            {
              title: "أطفال ورضع",
              href: "/categories/baby-kids",
            },
            {
              title: "إلكترونيات",
              href: "/categories/electronics",
            },
            {
              title: "اقسام المتاجر",
              href: "/categories/departmental-stores",
            },
            {
              title: "زهور وهدايا",
              href: "/categories/flowers-gifts",
            },
            {
              title: "رياضات ولياقة بدنية",
              href: "/categories/sports-fitness",
            },
            {
              title: "خدمات عبر الإنترنت",
              href: "/categories/online-services",
            },
            {
              title: "خدمات يومية",
              href: "/categories/everyday-services",
            },
            {
              title: "سفر",
              href: "/categories/travel",
            },
          ],
        },
        {
          title: "جميع فئات الكوبونات والعروض",
          href: "/offer-category",
          children: [
            {
              title: "الأزياء والإكسسوارات",
              href: "/fashion/",
            },
            { title: "صحة وجمال", href: "/beauty/" },
            {
              title: "موبايل وأجهزة لوحية",
              href: "/mobiles/",
            },
            {
              title: "أثاث وديكور منزلي",
              href: "/furniture/",
            },
            {
              title: "إلكترونيات",
              href: "/electronics/",
            },
            {
              title: "أجهزة منزلية",
              href: "/appliances/",
            },
            {
              title: "أطفال ورضع",
              href: "/baby-kids/",
            },
            { title: "البقالة", href: "/grocery/" },
            {
              title: "خدمات عبر الإنترنت",
              href: "/online-services/",
            },
            { title: "سفر", href: "/travel/" },
          ],
        },
        {
          title: "كافة فئات الصفقات",
          href: "/deals",
          children: [
            {
              title: "جوالات",
              href: "/deals/mobile-phones",
            },
            {
              title: "عطور",
              href: "/deals/perfumes",
            },
            {
              title: "كاميرات",
              href: "/deals/cameras",
            },
            {
              title: "لابتوب",
              href: "/deals/laptop",
            },
            {
              title: "أجهزة لوحية",
              href: "/deals/tablets",
            },
            {
              title: "تلفزيونات",
              href: "/deals/television",
            },
          ],
        },
      ],
    },
    {
      title: "اكتشف",
      submenu: [
        {
          title: "اتجاهات",
          href: "#",
          children: [
            {
              title: "جميع المتاجر",
              href: "/stores",
            },
            {
              title: "جميع فئات الكوبونات والعروض",
              href: "/offer-category",
            },
            {
              title: "جميع الصفقات",
              href: "/daily-deals",
            },
            {
              title: "جميع فئات الصفقة",
              href: "/deals",
            },
            {
              title: "تخفيضات موسمية",
              href: "/events",
            },
            {
              title: "خريطة الموقع",
              href: "/sitemap-page",
            },
          ],
        },
        {
          title: "النمو والتواصل",
          href: "#",
          children: [
            {
              title: "شارك واكسب",
              href: "/refer-and-earn",
            },
            { title: "مجتمعنا", href: "/community" },
          ],
        },
        {
          title: "المساعدة والدعم",
          href: "#",
          children: [
            {
              title: "الأسئلة الشائعة",
              href: "/faq",
            },
            {
              title: "تواصل معنا",
              href: "/contact-us",
            },
          ],
        },
        {
          title: "شركتنا",
          href: "#",
          children: [
            { title: "من نحن", href: "/about-us" },
            {
              title: "كيف يعمل؟",
              href: "/how-it-works",
            },
            {
              title: "الشروط والأحكام",
              href: "/terms-conditions",
            },
            {
              title: "سياسة الخصوصية",
              href: "/privacy-policy",
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center w-[100%] h-[100px] px-12">
        <Image
          width={200}
          height={200}
          alt="couponat plus"
          src={"/images/couponat.png"}
        />
        <div className="flex items-center gap-10">
          <ul className="flex gap-10">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="group text-[14px] max-lg:border-b max-lg:px-3 max-lg:py-2 relative"
              >
                <a
                  href="javascript:void(0)"
                  className="hover:text-primary hover:fill-primary text-gray-500 font-semibold text-[15px] block"
                >
                  {item.title}
                  {item.submenu && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      className="ml-1 inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                        data-name="16"
                        data-original="#000000"
                      />
                    </svg>
                  )}
                </a>
                {item.submenu && (
                  <div className="absolute lg:top-10 max-lg:top-10 -left-60 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                    {item.submenu.map((submenuItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="lg:min-w-[180px] max-lg:min-w-[140px] mr-8"
                      >
                        <h6 className="text-base text-primary font-semibold">
                          {submenuItem.title}
                        </h6>
                        {submenuItem.children && (
                          <ul className="mt-3 pt-3 border-t border-1 space-y-2">
                            {submenuItem.children.map((child, childIndex) => (
                              <li
                                key={childIndex}
                                className="max-lg:border-b py-1 rounded"
                              >
                                <a
                                  href={child.href}
                                  className="hover:text-primary text-gray-500 font-semibold text-[15px] block"
                                >
                                  {child.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <Search label={"ابحث عن الكوبونات والمتاجر"} />
          <a href="#">تسجيل الدخول</a>
          <Button>إنضم الآن</Button>
        </div>
      </div>
    </>
  );
}
