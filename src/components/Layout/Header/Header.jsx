import { Button } from "@/components/UI/Button";
import { Search } from "@/components/UI/Search";
import { navItems } from "@/utils/dummyData";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed z-50 bg-white right-0 left-0 px-10 top-0">
      <div className="flex justify-between items-center w-[100%] h-[100px] ">
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
    </header>
  );
}
