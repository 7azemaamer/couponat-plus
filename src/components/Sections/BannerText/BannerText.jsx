export default function BannerText() {
  const statsData = [
    {
      image: "https://couponksa.com/img/pages/home/visitors.png",
      alt: "زائر جديد",
      number: "200,000+",
      label: "زائر جديد",
    },
    {
      image: "https://couponksa.com/img/pages/home/retailers.png",
      alt: "بائع تجزئة",
      number: "1000+",
      label: "بائع تجزئة",
    },
    {
      image: "https://couponksa.com/img/pages/home/coupons.png",
      alt: "كوبون جديد أسبوعيًا",
      number: "100+",
      label: "كوبون جديد أسبوعيًا",
    },
    {
      image: "https://couponksa.com/img/pages/home/updated.png",
      alt: "كوبونات تم التحقق منها",
      number: "100%",
      label: "كوبونات تم التحقق منها",
    },
  ];
  return (
    <section className="bg-gray-100 mt-16">
      <div
        className="flex gap-52 items-center py-10 px-8 min-h-52"
        style={{
          background: "url('https://couponksa.com/img/ui/choose-image.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "right",
        }}
      >
        <div className="text-right">
          <h2 className=" hidden md:block text-2xl font-bold ">
            كوبونات بلس بالأرقام
          </h2>
        </div>
        <div className="hidden md:grid grid-cols-2 md:grid-cols-2 gap-6 mt-6 md:mt-0">
          {statsData.map((stat, index) => (
            <div key={index} className="flex gap-10 items-center ">
              <img src={stat.image} alt={stat.alt} width={75} height={75} />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 mt-2">
                  {stat.number}
                </span>
                <p className="text-gray-600 text-xl">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
