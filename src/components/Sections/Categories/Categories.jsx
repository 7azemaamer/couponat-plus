import Category from "@/components/UI/Category/Category";

export default function Categories() {
  const categoriesData = [
    {
      title: "الأزياء والإكسسوارات",
      icon: "https://couponksa.com/img/icons/store-category/fashions.png",
    },
    {
      title: "صحة وجمال",
      icon: "https://couponksa.com/img/icons/store-category/beauty-health.png",
    },
    {
      title: "اقسام المتاجر",
      icon: "https://couponksa.com/img/icons/store-category/departmentstores.png",
    },
    {
      title: "إلكترونيات",
      icon: "https://couponksa.com/img/icons/store-category/electronic.png",
    },
    {
      title: "خدمات عبر الإنترنت",
      icon: "https://couponksa.com/img/icons/store-category/onlineservices.png",
    },
    {
      title: "سفر",
      icon: "https://couponksa.com/img/icons/store-category/travels.png",
    },
  ];
  const categoriesData2 = [
    {
      title: "الأزياء والإكسسوارات",
      icon: "https://couponksa.com/img/icons/coupon-category/fashion-1.png",
    },
    {
      title: "موبايل وأجهزة لوحية",
      icon: "https://couponksa.com/img/icons/coupon-category/mobiles.png",
    },
    {
      title: "أثاث وديكور منزلي",
      icon: "https://couponksa.com/img/icons/coupon-category/furniture-2.png",
    },
    {
      title: "أطفال ورضع",
      icon: "https://couponksa.com/img/icons/coupon-category/babyandkids.png",
    },
    {
      title: "صحة وجمال",
      icon: "https://couponksa.com/img/icons/coupon-category/beauty.png",
    },
    {
      title: "طيران",
      icon: "https://couponksa.com/img/icons/coupon-category/travel-flights-1.jpg",
    },
  ];

  const cat = [
    {
      title: "جوالات",
      icon: "https://couponksa.com/img/icons/deal-category/mobilephones.png",
    },
    {
      title: "عطور",
      icon: "https://couponksa.com/img/icons/deal-category/perfumes-4.png",
    },
    {
      title: "كاميرات",
      icon: "https://couponksa.com/img/icons/deal-category/cameras-2.png",
    },
    {
      title: "لابتوب",
      icon: "https://couponksa.com/img/icons/deal-category/laptops.png",
    },
    {
      title: "تلفزيونات",
      icon: "https://couponksa.com/img/icons/deal-category/television-1.png",
    },
    {
      title: "أجهزة لوحية",
      icon: "https://couponksa.com/img/icons/deal-category/tablets-2.png",
    },
  ];

  return (
    <div className="d-container">
      <Category data={categoriesData} title={"افضل فئات المتاجر"} />
      <Category data={categoriesData2} title={"افضل فئات الكوبونات والعروض"} />
      <Category data={cat} title={"افضل فئات الصفقات"} />
    </div>
  );
}
