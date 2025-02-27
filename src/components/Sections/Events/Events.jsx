import Link from "next/link";

export default function Events() {
  const saleData = {
    title: "تخفيضات موسمية على مدار السنة",
    description:
      "استفد من تخفيضاتنا الموسمية الاستثنائية على مدار السنة، وزد من توفيرك باستخدام كوبونات الخصم وعروضنا الخاصة!",
    buttonText: "المزيد",
    buttonLink: "https://couponksa.com/events",
    banners: [
      {
        link: "/ar/saudi-founding-day/",
        imgSrc:
          "https://couponksa.com/img/banners/home/ksafoundingday-hp-sale-ar.png",
      },
      {
        link: "https://couponksa.com/ar/payday/",
        imgSrc: "https://couponksa.com/img/banners/home/ar/paydaysale-ar.png",
      },
      {
        link: "https://couponksa.com/ar/11-11-singles-day/",
        imgSrc: "https://couponksa.com/img/banners/home/ar/1111sale-ar.png",
      },
    ],
  };

  return (
    <section
      className="w-full bg-cover bg-center py-10 px-4"
      style={{
        backgroundImage:
          "url('https://couponksa.com/img/ui/seasonal-sale.png')",
      }}
    >
      <div className="">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0 md:pr-4 text-white border-r-4 border-accent">
            <h2 className="text-xl md:text-xl font-bold mb-4">
              {saleData.title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              {saleData.description}
            </p>
          </div>

          {/* Button */}
          <div>
            <Link href={saleData.buttonLink}>
              <div className="inline-block border text-white font-bold py-2 px-4 text-sm rounded-lg transition-colors">
                المزيد
              </div>
            </Link>
          </div>
        </div>

        {/* Banners Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          {saleData.banners.map((banner, index) => (
            <div key={index} className="text-center">
              <Link href={"/"}>
                <img
                  src={banner.imgSrc}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-auto mx-auto"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
