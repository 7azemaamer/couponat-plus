import { Alerter } from "./Alerter";

export const Popup = ({ isOpen, onClose, couponData }) => {
  if (!isOpen) return null;

  return (
    // Overlay
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      {/* Popup Container */}
      <div className="relative min-w-[50%] min-h-[80%] max-w-md flex flex-col justify-center bg-white rounded-3xl shadow-lg  overflow-hidden">
        {/* Close Button  */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 text-white bg-accent w-20 text-4xl font-bold rounded-2xl p-5 flex items-end justify-end"
        >
          ✕
        </button>

        {/* Content */}
        <div className="flex flex-col items-center gap-4 p-6">
          {/* Logo or Store Name */}
          <img
            src={couponData?.logo || "/placeholder-logo.png"}
            alt={couponData?.store || "Store Logo"}
            className="w-80 h-auto object-contain"
          />

          {/* Main Discount Title */}
          <p className="text-xl font-bold text-center leading-6">
            {couponData?.title}
          </p>

          {/* Coupon Code with Copy */}
          {couponData?.couponCode && (
            <>
              <div className="flex justify-between border-gray-300 border-dotted border mt-2">
                <div className="py-2 px-14 text-xl font-bold w-[60%] h-full">
                  {couponData.couponCode}
                </div>
                <div
                  className="bg-accent text-[12px] font-medium py-2 px-4 cursor-pointer flex items-center"
                  onClick={() => {
                    navigator.clipboard.writeText(couponData.couponCode);
                    Alerter({ children: "تم نسخ الكود" });
                  }}
                >
                  نسخ الكود
                </div>
              </div>
            </>
          )}

          {/* Subtext or Explanation */}
          <p className="text-sm text-gray-500">{`الصق كود الخصم عند الدفع`}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3  mt-2">
            <a
              href={couponData.link}
              target="_blank"
              className="flex-1 cursor-pointer bg-primary hover:opacity-75 text-white text-2xl font-bold py-4 px-7 rounded-md transition-colors"
            >
              اذهب إلى المتجر
            </a>
            {/* <button className="text-sm text-gray-600 hover:underline">
              عرض المزيد
            </button> */}
          </div>
        </div>
        {/* Footer */}
        <div className="flex flex-col justify-center  items-center border-t-2">
          <br />
          <p className="text-xs text-gray-400 text-center mt-2 ">
            عروض حصرية ومكافآت مع توفيرات قصوى! انضم الآن
          </p>
          <p className="text-xs text-gray-400 text-center mt-2">
            عروض حصرية ومكافآت مع توفيرات قصوى! انضم الآن
          </p>
        </div>
      </div>
    </div>
  );
};
