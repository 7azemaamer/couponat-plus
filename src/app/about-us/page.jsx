import Image from "next/image";

export const metadata = {
  title: "من نحن - كوبونات بلس",
  description:
    "تعرف على كوبونات بلس، الموقع الرائد في مجال كوبونات الخصم والعروض في المملكة العربية السعودية",
};

export default function AboutUsPage() {
  return (
    <div className="d-container py-12">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6 text-right">من نحن</h1>

          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/2">
              <Image
                src="/images/logo-w.png"
                alt="كوبونات بلس"
                width={300}
                height={200}
                className="mx-auto"
              />
            </div>
            <div className="md:w-1/2 text-right">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                كوبونات بلس هو موقع رائد في مجال كوبونات الخصم والعروض في
                المملكة العربية السعودية، نسعى لتوفير أفضل العروض والخصومات من
                أشهر المتاجر الإلكترونية المحلية والعالمية.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                تأسس موقعنا بهدف مساعدة المتسوقين على توفير أموالهم من خلال
                الاستفادة من أكواد الخصم والعروض الحصرية التي نوفرها بشكل مستمر
                ومتجدد.
              </p>
            </div>
          </div>

          <div className="mb-12 text-right">
            <h2 className="text-2xl font-bold mb-4">رؤيتنا</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              نطمح أن نكون الوجهة الأولى للمتسوقين في المملكة العربية السعودية
              للحصول على أفضل كوبونات الخصم والعروض من مختلف المتاجر
              الإلكترونية، وأن نساهم في تعزيز ثقافة التسوق الذكي وتوفير المال.
            </p>
          </div>

          <div className="mb-12 text-right">
            <h2 className="text-2xl font-bold mb-4">مهمتنا</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              نسعى جاهدين لتوفير أحدث وأفضل كوبونات الخصم والعروض من مختلف
              المتاجر الإلكترونية، وضمان صلاحيتها وفعاليتها، لنساعد المتسوقين
              على توفير أموالهم وتحسين تجربة التسوق الإلكتروني.
            </p>
          </div>

          <div className="text-right">
            <h2 className="text-2xl font-bold mb-4">
              لماذا تختار كوبونات بلس؟
            </h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-center gap-2">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  ✓
                </span>
                <span>كوبونات وعروض حصرية من أشهر المتاجر الإلكترونية</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  ✓
                </span>
                <span>تحديث مستمر للكوبونات والعروض</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  ✓
                </span>
                <span>سهولة البحث والتصفح للعثور على أفضل العروض</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  ✓
                </span>
                <span>خدمة عملاء متميزة للرد على استفساراتكم</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  ✓
                </span>
                <span>مجتمع متنامي من المتسوقين الأذكياء</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
