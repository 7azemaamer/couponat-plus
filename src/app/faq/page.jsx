"use client";
import { useState, useRef, useEffect } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
  FaSearch,
} from "react-icons/fa";
import Image from "next/image";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFaqItems, setFilteredFaqItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const accordionRefs = useRef([]);

  const faqCategories = [
    { id: "all", name: "جميع الأسئلة" },
    { id: "general", name: "أسئلة عامة" },
    { id: "coupons", name: "كوبونات الخصم" },
    { id: "account", name: "الحساب والعضوية" },
    { id: "technical", name: "مشاكل تقنية" },
  ];

  const faqItems = [
    {
      question: "ما هو موقع كوبونات بلس؟",
      answer:
        "كوبونات بلس هو موقع متخصص في توفير كوبونات خصم وعروض من أشهر المتاجر الإلكترونية في المملكة العربية السعودية. نهدف إلى مساعدة المتسوقين على توفير أموالهم من خلال الاستفادة من أكواد الخصم والعروض الحصرية التي نوفرها بشكل مستمر ومتجدد.",
      category: "general",
    },
    {
      question: "كيف يمكنني استخدام كوبون الخصم؟",
      answer:
        "استخدام كوبون الخصم سهل للغاية. ما عليك سوى النقر على زر 'نسخ الكود' للكوبون الذي ترغب في استخدامه، ثم الانتقال إلى موقع المتجر المعني، وإضافة المنتجات التي ترغب في شرائها إلى سلة التسوق. عند إتمام عملية الشراء، ستجد خانة لإدخال كود الخصم، قم بلصق الكود الذي نسخته وستحصل على الخصم مباشرة.",
      category: "coupons",
    },
    {
      question: "هل كوبونات الخصم مجانية؟",
      answer:
        "نعم، جميع كوبونات الخصم والعروض المتوفرة على موقعنا مجانية تمامًا. لا نفرض أي رسوم على استخدام الكوبونات أو الوصول إلى العروض.",
      category: "coupons",
    },
    {
      question: "هل كوبونات الخصم صالحة دائمًا؟",
      answer:
        "نحرص على تحديث كوبونات الخصم والعروض بشكل مستمر للتأكد من صلاحيتها. ومع ذلك، قد تنتهي صلاحية بعض الكوبونات أو تتغير شروطها من قبل المتاجر نفسها. لذلك، نوصي دائمًا بالتحقق من تاريخ انتهاء الصلاحية وشروط الاستخدام المذكورة مع كل كوبون.",
      category: "coupons",
    },
    {
      question: "كيف يمكنني البحث عن كوبون خصم لمتجر معين؟",
      answer:
        "يمكنك البحث عن كوبون خصم لمتجر معين من خلال استخدام شريط البحث في أعلى الموقع، أو من خلال تصفح قائمة المتاجر المتوفرة على موقعنا والنقر على المتجر الذي ترغب في الحصول على كوبون خصم له.",
      category: "coupons",
    },
    {
      question: "هل يمكنني استخدام أكثر من كوبون خصم في نفس الطلب؟",
      answer:
        "هذا يعتمد على سياسة المتجر نفسه. بعض المتاجر تسمح باستخدام كوبون خصم واحد فقط لكل طلب، بينما قد تسمح متاجر أخرى باستخدام أكثر من كوبون. ننصح بالاطلاع على شروط وأحكام المتجر قبل محاولة استخدام أكثر من كوبون.",
      category: "coupons",
    },
    {
      question: "ماذا أفعل إذا لم يعمل كوبون الخصم؟",
      answer:
        "إذا واجهت مشكلة في استخدام كوبون الخصم، يمكنك التحقق من الآتي: تأكد من نسخ الكود بشكل صحيح، تأكد من أن الكوبون لا يزال ساري المفعول، تحقق من شروط استخدام الكوبون (مثل الحد الأدنى للطلب أو المنتجات المشمولة). إذا استمرت المشكلة، يمكنك التواصل معنا من خلال صفحة 'تواصل معنا' وسنساعدك في حل المشكلة.",
      category: "technical",
    },
    {
      question: "كيف يمكنني الاشتراك في النشرة البريدية؟",
      answer:
        "يمكنك الاشتراك في النشرة البريدية من خلال إدخال بريدك الإلكتروني في النموذج المخصص لذلك في أسفل الصفحة الرئيسية أو في قسم 'النشرة البريدية'. بعد الاشتراك، ستصلك آخر العروض والكوبونات مباشرة إلى بريدك الإلكتروني.",
      category: "account",
    },
    {
      question: "هل يمكنني إنشاء حساب على موقع كوبونات بلس؟",
      answer:
        "نعم، يمكنك إنشاء حساب مجاني على موقعنا. سيتيح لك ذلك حفظ الكوبونات المفضلة لديك، والحصول على إشعارات بأحدث العروض، والوصول إلى عروض حصرية للأعضاء المسجلين.",
      category: "account",
    },
    {
      question: "كيف يمكنني تغيير كلمة المرور الخاصة بي؟",
      answer:
        "يمكنك تغيير كلمة المرور الخاصة بك من خلال تسجيل الدخول إلى حسابك، ثم الانتقال إلى صفحة 'إعدادات الحساب'، ثم النقر على 'تغيير كلمة المرور'. ستحتاج إلى إدخال كلمة المرور الحالية وكلمة المرور الجديدة.",
      category: "account",
    },
    {
      question: "هل يمكنني اقتراح متجر لإضافته إلى الموقع؟",
      answer:
        "بالتأكيد! نرحب دائمًا باقتراحاتكم. يمكنك اقتراح متجر لإضافته إلى موقعنا من خلال صفحة 'تواصل معنا' أو من خلال إرسال بريد إلكتروني إلى فريق الدعم الخاص بنا.",
      category: "general",
    },
    {
      question: "كيف يمكنني الإبلاغ عن مشكلة تقنية في الموقع؟",
      answer:
        "يمكنك الإبلاغ عن أي مشكلة تقنية تواجهها في الموقع من خلال صفحة 'تواصل معنا' أو من خلال إرسال بريد إلكتروني إلى فريق الدعم الفني. يرجى تقديم وصف تفصيلي للمشكلة وإرفاق لقطة شاشة إن أمكن.",
      category: "technical",
    },
  ];

  useEffect(() => {
    let filtered = [...faqItems];

    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeCategory !== "all") {
      filtered = filtered.filter((item) => item.category === activeCategory);
    }

    setFilteredFaqItems(filtered);
  }, [searchTerm, activeCategory]);

  useEffect(() => {
    setFilteredFaqItems(faqItems);
  }, []);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);

      setTimeout(() => {
        if (accordionRefs.current[index]) {
          accordionRefs.current[index].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
      }, 300);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setOpenIndex(-1);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="d-container">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            الأسئلة الشائعة
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نجيب على جميع استفساراتكم حول كوبونات بلس وكيفية استخدام كوبونات
            الخصم للتوفير في مشترياتكم
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن سؤال..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-5 py-4 pr-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent shadow-sm"
            />
            <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4 text-right">الفئات</h3>
              <ul className="space-y-2">
                {faqCategories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full text-right py-2 px-4 rounded-lg transition-colors ${
                        activeCategory === category.id
                          ? "bg-accent text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>

              {/* FAQ Image */}
              <div className="mt-8 hidden lg:block">
                <div className="relative h-48 w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/logo-w.png"
                    alt="كوبونات بلس"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-4">
                  لم تجد إجابة لسؤالك؟
                  <br />
                  <a
                    href="/contact-us"
                    className="text-accent hover:underline mt-1 inline-block"
                  >
                    تواصل معنا
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Accordions */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {filteredFaqItems.length > 0 ? (
                <div className="divide-y divide-gray-100">
                  {filteredFaqItems.map((item, index) => (
                    <div
                      key={index}
                      ref={(el) => (accordionRefs.current[index] = el)}
                      className="transition-all duration-300"
                    >
                      <button
                        className="w-full flex justify-between items-center p-6 text-right hover:bg-gray-50 transition-colors gap-3"
                        onClick={() => toggleFAQ(index)}
                      >
                        <div className="flex items-center gap-3">
                          {openIndex === index ? (
                            <FaChevronUp className="text-accent flex-shrink-0" />
                          ) : (
                            <FaChevronDown className="text-primary flex-shrink-0" />
                          )}
                        </div>
                        <span className="text-lg font-medium flex-grow text-right">
                          {item.question}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <FaQuestionCircle className="text-accent" />
                        </div>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 ${
                          openIndex === index
                            ? "max-h-96 opacity-100 p-6"
                            : "max-h-0 opacity-0 p-0"
                        }`}
                      >
                        <p className="text-gray-700 leading-relaxed text-right">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaSearch className="text-gray-400 text-xl" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">
                    لم يتم العثور على نتائج
                  </h3>
                  <p className="text-gray-500 mb-4">
                    لم نتمكن من العثور على إجابات تطابق بحثك. يرجى تجربة كلمات
                    مختلفة.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setActiveCategory("all");
                    }}
                    className="text-accent hover:underline"
                  >
                    عرض جميع الأسئلة
                  </button>
                </div>
              )}
            </div>

            {/* Contact CTA - Mobile Only */}
            <div className="mt-8 bg-accent text-white p-6 rounded-xl lg:hidden">
              <h3 className="text-xl font-bold mb-2 text-center">
                لم تجد إجابة لسؤالك؟
              </h3>
              <p className="text-white/80 text-center mb-4">
                يمكنك التواصل معنا مباشرة وسنقوم بالرد على استفسارك في أقرب وقت
                ممكن.
              </p>
              <a
                href="/contact"
                className="block w-full bg-white text-accent text-center py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
