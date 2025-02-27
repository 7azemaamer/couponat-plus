import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-accent text-white py-12 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 ">
          {/* Company Info */}
          <div className="flex flex-col items-center">
            <p className="mb-4  max-w-md">
              استمتع بأكواد الخصم الحصرية والعروض على أفضل العلامات التجارية في
              كافة أنحاء المملكة العربية السعودية.
            </p>
            <div className="flex gap-2 justify-center md:justify-end">
              <Link
                href="https://www.facebook.com"
                className="text-white hover:text-gray-300"
              >
                <div className="bg-blue-600 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </div>
              </Link>
              <Link
                href="https://www.youtube.com"
                className="text-white hover:text-gray-300"
              >
                <div className="bg-red-600 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                </div>
              </Link>
              <Link
                href="https://www.instagram.com"
                className="text-white hover:text-gray-300"
              >
                <div className="bg-pink-600 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </div>
              </Link>
              <Link
                href="https://www.pinterest.com"
                className="text-white hover:text-gray-300"
              >
                <div className="bg-red-700 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
                  </svg>
                </div>
              </Link>
              <Link
                href="https://www.snapchat.com"
                className="text-white hover:text-gray-300"
              >
                <div className="bg-yellow-400 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.943 11.526c-.111-.303-.323-.465-.564-.599a1.416 1.416 0 0 0-.123-.064l-.219-.111c-.752-.399-1.339-.902-1.746-1.498a3.387 3.387 0 0 1-.3-.531c-.034-.1-.032-.156-.008-.207a.338.338 0 0 1 .097-.1c.129-.086.262-.173.352-.231.162-.104.289-.187.371-.245.309-.216.525-.446.66-.702a1.397 1.397 0 0 0 .069-1.16c-.205-.538-.713-.872-1.329-.872a1.829 1.829 0 0 0-.487.065c.006-.368-.002-.757-.035-1.139-.116-1.344-.587-2.048-1.077-2.61a4.294 4.294 0 0 0-1.095-.881C9.764.216 8.92 0 7.999 0c-.92 0-1.76.216-2.505.641-.412.232-.782.53-1.097.883-.49.562-.96 1.267-1.077 2.61-.033.382-.04.772-.036 1.138a1.83 1.83 0 0 0-.487-.065c-.615 0-1.124.335-1.328.873a1.398 1.398 0 0 0 .067 1.161c.136.256.352.486.66.701.082.058.21.14.371.246l.339.221a.38.38 0 0 1 .109.11c.026.053.027.11-.012.217a3.363 3.363 0 0 1-.295.52c-.398.583-.968 1.077-1.696 1.472-.385.204-.786.34-.955.8-.128.348-.044.743.28 1.075.119.125.257.23.409.31a4.43 4.43 0 0 0 1 .4.66.66 0 0 1 .202.09c.118.104.102.26.259.488.079.118.18.22.296.3.33.229.701.243 1.095.258.355.014.758.03 1.217.18.19.064.389.186.618.328.55.338 1.305.802 2.566.802 1.262 0 2.02-.466 2.576-.806.227-.14.424-.26.609-.321.46-.152.863-.168 1.218-.181.393-.015.764-.03 1.095-.258a1.14 1.14 0 0 0 .336-.368c.114-.192.11-.327.217-.42a.625.625 0 0 1 .19-.087 4.446 4.446 0 0 0 1.014-.404c.16-.087.306-.2.429-.336l.004-.005c.304-.325.38-.709.256-1.047Zm-1.121.602c-.684.378-1.139.337-1.493.565-.3.193-.122.6-.298.8-.448.513-1.49.404-2.61.43-1.11.026-1.649.637-2.415 1.18-.767-.542-1.305-1.153-2.415-1.18-1.121-.025-2.162.084-2.61-.43-.177-.2-.1-.607-.3-.8-.353-.228-.808-.187-1.492-.563-.436-.24-.189-.39-.044-.46 2.478-1.199 2.873-3.05 2.89-3.188.022-.166.045-.297-.138-.466-.177-.164-.962-.65-1.18-.802-.36-.252-.52-.503-.402-.812.082-.214.281-.295.49-.295a.93.93 0 0 1 .197.022c.396.086.78.285 1.002.338.027.007.054.01.082.011.118 0 .16-.06.152-.195-.026-.433-.087-1.277-.019-2.066.094-1.084.444-1.622.859-2.097.2-.229 1.137-1.22 2.93-1.22 1.792 0 2.732.987 2.931 1.215.416.475.766 1.013.859 2.098.068.788.009 1.632-.019 2.065-.01.142.034.195.152.195a.35.35 0 0 0 .082-.01c.222-.054.607-.253 1.002-.338a.912.912 0 0 1 .197-.023c.21 0 .409.082.49.295.117.309-.04.56-.401.812-.218.152-1.003.638-1.18.802-.184.169-.16.3-.139.466.018.137.413 1.988 2.89 3.189.147.07.394.22-.041.46Z" />
                  </svg>
                </div>
              </Link>
              <Link
                href="https://www.tiktok.com"
                className="text-white hover:text-gray-300"
              >
                <div className="bg-black rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <h3 className="text-xl mb-4">شركتنا</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-gray-300">
                  كيف نعمل؟
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-300">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-300">
                  الشروط والأحكام
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-300">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Start */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl mb-4">ابدء</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/join" className="hover:text-gray-300">
                  كن شريكاً معنا
                </Link>
              </li>
              <li>
                <Link href="/influencers" className="hover:text-gray-300">
                  برنامج المؤثرين
                </Link>
              </li>
              <li>
                <Link href="/loyalty" className="hover:text-gray-300">
                  برنامج الولاء
                </Link>
              </li>
              <li>
                <Link href="/share" className="hover:text-gray-300">
                  شارك واكسب
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-gray-300">
                  المجتمع
                </Link>
              </li>
              <li>
                <Link href="/store-management" className="hover:text-gray-300">
                  إدارة المتجر
                </Link>
              </li>
            </ul>
          </div>

          {/* Best Stores */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl mb-4">أفضل المتاجر</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/stores/amazon" className="hover:text-gray-300">
                  أمازون
                </Link>
              </li>
              <li>
                <Link href="/stores/aliexpress" className="hover:text-gray-300">
                  علي إكسبرس
                </Link>
              </li>
              <li>
                <Link href="/stores/noon" className="hover:text-gray-300">
                  نون
                </Link>
              </li>
              <li>
                <Link href="/stores/namshi" className="hover:text-gray-300">
                  نمشي
                </Link>
              </li>
              <li>
                <Link href="/stores/trendyol" className="hover:text-gray-300">
                  ترينديول
                </Link>
              </li>
            </ul>
          </div>

          {/* Best Categories */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl mb-4">افضل الفئات</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/store" className="hover:text-gray-300">
                  كافة فئات المتجر
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/electronics"
                  className="hover:text-gray-300"
                >
                  كافة فئات الكترونيا
                </Link>
              </li>
              <li>
                <Link href="/categories/pages" className="hover:text-gray-300">
                  كافة فئات الصفحات
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/discounts"
                  className="hover:text-gray-300"
                >
                  تخفيضات موسمية
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer and Social Links */}
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center">
          <div className="order-2 md:order-1 text-center mt-4 md:mt-0">
            <p className="text-gray-100">
              حقوق الطبع والنشر © 2025 CouponKSA.com جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
