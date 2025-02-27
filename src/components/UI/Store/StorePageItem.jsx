import {
  FaFacebook,
  FaGlobe,
  FaStar,
  FaWhatsapp,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const StorePageItem = () => {
  return (
    <div className="d-container overflow-hidden">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl p-6 mb-6">
        {/* Store Logo */}
        <div className="flex flex-col items-center text-center md:w-1/4">
          <a
            href="https://couponksa.com/ar/out/store/3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://couponksa.com/img/logo/amazon-sa.jpg"
              alt="امازون"
              className="w-40 h-auto object-contain mb-2"
            />
          </a>
          <div className="flex justify-center items-center space-x-1 rtl:space-x-reverse">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={15} className="text-yellow-500" />
            ))}
            <span className="text-sm text-gray-500 ml-1">(4603)</span>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-start items-center gap-3 mt-4 text-gray-600">
            <a href="#" className="hover:text-blue-500">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-green-500">
              <FaWhatsapp size={20} />
            </a>
            <a href="#" className="hover:text-black">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-red-400">
              <FaPinterest size={20} />
            </a>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 md:pl-6 text-right">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              كوبون خصم <strong>امازون</strong> - فبراير 2025
            </h1>
          </div>

          {/* Website Link */}
          <div className="flex items-center gap-2 text-blue-600 hover:underline text-sm mb-3">
            <FaGlobe size={18} />
            <a
              href="https://couponksa.com/ar/out/store/3"
              target="_blank"
              rel="noopener noreferrer"
            >
              amazon.sa
            </a>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-3">
            موقع أمازون متجر التجزئة الأول في العالم كله، يتيح لك تسوق كافة
            المنتجات التي تأتي في ذهنك، حيث تجد بداخله ملابس، أجهزة المنزل
            والمطبخ، الكمبيوتر واللاب توب، أيضًا مستلزمات الأطفال وغيرهم الكثير.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            أيضًا يقدم أمازون السعودية خيارات واسعة من الإلكترونيات مثل أجهزة
            التلفزيون، سماعات الرأس، الجوالات لأشهر البراندات، أجهزة الصوت،
            الكاميرات والمزيد.
          </p>
          <p className="text-gray-700 leading-relaxed">
            باختيارك التسوق من أمازون، فأنت مستعد تمامًا لتجربة تسوق رائعة
            للعديد من مستلزمات العناية الشخصية، العطور، مستحضرات التجميل، منتجات
            العناية بالشعر والبشرة، وغير ذلك الكثير.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StorePageItem;
