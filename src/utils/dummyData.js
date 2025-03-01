//Nav
export const navItems = [
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
//Stores Section
export const storesSectionData = [
  {
    id: 1,
    title: "اتجاهات",
    icon: "https://couponksa.com/ui/images/fire-green-icon.png",
    stores: [
      {
        name: "امازون",
        image: "https://couponksa.com/img/logo/amazon-sa.jpg",
        coupons: 49,
        link: "/stores/amazon",
      },
      {
        name: "نون",
        image: "https://couponksa.com/img/logo/noon.jpg",
        coupons: 32,
        link: "/stores/noon",
      },
      {
        name: "فارفيتش",
        image: "https://couponksa.com/img/logo/farfetch.jpg",
        coupons: 9,
        link: "/stores/farfetch",
      },
      {
        name: "اديداس",
        image: "https://couponksa.com/img/logo/adidas-1.jpg",
        coupons: 15,
        link: "/stores/adidas",
      },
      {
        name: "علي إكسبريس",
        image: "https://couponksa.com/img/logo/aliexpress-1.jpeg",
        coupons: 24,
        link: "/stores/aliexpress",
      },
      {
        name: "تيمو",
        image: "https://couponksa.com/img/logo/temu.jpg",
        coupons: 19,
        link: "/stores/temu",
      },
      {
        name: "فلاي ناس",
        image: "https://couponksa.com/img/logo/flynas.jpg",
        coupons: 16,
        link: "/stores/flynas",
      },
      {
        name: "بوكينج.كوم",
        image: "https://couponksa.com/img/logo/bookingcom.jpg",
        coupons: 14,
        link: "/stores/booking.com",
      },
    ],
  },
  {
    id: 2,
    title: "الأزياء والإكسسوارات",
    icon: "https://couponksa.com/img/icons/store-category/fashions.png",
    stores: [
      {
        name: "اديداس",
        image: "https://couponksa.com/img/logo/adidas-1.jpg",

        coupons: 15,
        link: "/stores/adidas",
      },
      {
        name: "فارفيتش",
        image: "https://couponksa.com/img/logo/farfetch.jpg",

        coupons: 9,
        link: "/stores/farfetch",
      },
      {
        name: "علي إكسبريس",
        image: "https://couponksa.com/img/logo/aliexpress-1.jpeg",

        coupons: 24,
        link: "/stores/aliexpress",
      },
      {
        name: "تيمو",
        image: "https://couponksa.com/img/logo/temu.jpg",

        coupons: 19,
        link: "/stores/temu",
      },
      {
        name: "ترينديول",
        image: "https://couponksa.com/img/logo/trendyol.jpg",
        coupons: 13,
        link: "/stores/trendyol",
      },
      {
        name: "سن اندساندسبورتس",
        image: "https://couponksa.com/img/logo/sun-sand-sports.jpg",

        coupons: 12,
        link: "/stores/sun-and-sand-sports",
      },
      {
        name: "ريفافاشن",
        image: "https://couponksa.com/img/logo/riva-fashion.jpg",

        coupons: 13,
        link: "/stores/rivafashion",
      },
      {
        name: "ماكس فاشن",
        image: "https://couponksa.com/img/logo/max-fashion.jpg",

        coupons: 11,
        link: "/stores/maxfashion",
      },
    ],
  },
  {
    id: 3,
    title: "صحة وجمال",
    icon: "https://couponksa.com/img/icons/store-category/beauty-health.png",
    stores: [
      {
        name: "سيفورا",
        image: "https://couponksa.com/img/logo/sephora.jpg",

        coupons: 11,
        link: "/stores/sephora",
      },
      {
        name: "باث آندبودي وركس",
        image: "https://couponksa.com/img/logo/bath-and-body-works.jpg",

        coupons: 10,
        link: "/stores/bathandbodyworks",
      },
      {
        name: "فيكتوريا سيكريت",
        image: "https://couponksa.com/img/logo/victorias-secret.jpg",

        coupons: 11,
        link: "/stores/victoriassecret",
      },
      {
        name: "هدى بيوتي",
        image: "https://couponksa.com/img/logo/hudabeauty-new.jpg",

        coupons: 8,
        link: "/stores/hudabeauty",
      },
      {
        name: "لوك فانتاستيك",
        image: "https://couponksa.com/img/logo/lookfantastic.jpg",

        coupons: 12,
        link: "/stores/lookfantastic",
      },
      {
        name: "كيلز",
        image: "https://couponksa.com/img/logo/kiehls.jpg",
        coupons: 12,
        link: "/stores/kiehls",
      },
      {
        name: "ايف سان لوران",
        image: "https://couponksa.com/img/logo/ysl-beauty.jpg",
        coupons: 7,
        link: "/stores/yslbeauty",
      },
      {
        name: "عبد الصمد القرشي",
        image: "https://couponksa.com/img/logo/abdul-samad-al-qurashi.jpg",

        coupons: 8,
        link: "/stores/abdul-samad-al-qurashi",
      },
    ],
  },
  {
    id: 4,
    title: "إلكترونيات",
    icon: "https://couponksa.com/img/icons/store-category/electronic.png",
    stores: [
      {
        name: "علي إكسبريس",
        image: "https://couponksa.com/img/logo/aliexpress-1.jpeg",

        coupons: 24,
        link: "/stores/aliexpress",
      },
      {
        name: "امازون",
        image: "https://couponksa.com/img/logo/amazon-sa.jpg",

        coupons: 49,
        link: "/stores/amazon",
      },
      {
        name: "نون",
        image: "https://couponksa.com/img/logo/noon.jpg",

        coupons: 32,
        link: "/stores/noon",
      },
      {
        name: "تيمو",
        image: "https://couponksa.com/img/logo/temu.jpg",

        coupons: 19,
        link: "/stores/temu",
      },
      {
        name: "هواوي",
        image: "https://couponksa.com/img/logo/huawei-1.jpg",
        coupons: 9,
        link: "/stores/huawei",
      },
      {
        name: "ريفايب",
        image: "https://couponksa.com/img/logo/revibe.jpg",

        coupons: 9,
        link: "/stores/revibe",
      },
      {
        name: "دايسون",
        image: "https://couponksa.com/img/logo/dyson.jpg",

        coupons: 11,
        link: "/stores/dyson",
      },
      {
        name: "كارتلو",
        image: "https://couponksa.com/img/logo/cartlow.jpg",

        coupons: 10,
        link: "/stores/cartlow",
      },
    ],
  },
  {
    id: 5,
    title: "أطفال ورضع",
    icon: "https://couponksa.com/img/icons/store-category/babyandkids.png",
    stores: [
      {
        name: "بيبي شوب",
        image: "https://couponksa.com/img/logo/babyshop.jpg",

        coupons: 9,
        link: "/stores/babyshop",
      },
      {
        name: "فيرست كراي",
        image: "https://couponksa.com/img/logo/firstcry-1.jpg",

        coupons: 13,
        link: "/stores/firstcry",
      },
      {
        name: "ممزورلد",
        image: "https://couponksa.com/img/logo/mumzworld.jpg",

        coupons: 17,
        link: "/stores/mumzworld",
      },
      {
        name: "مامازاند باباز",
        image: "https://couponksa.com/img/logo/mamas-and-papas.jpg",

        coupons: 10,
        link: "/stores/mamasandpapas",
      },
      {
        name: "مذركير",
        image: "https://couponksa.com/img/logo/mothercare.jpg",

        coupons: 9,
        link: "/stores/mothercare",
      },
      {
        name: "بوتري بارن للاطفال",
        image: "https://couponksa.com/img/logo/pottery-barn-kids.jpg",

        coupons: 11,
        link: "/stores/potterybarnkids",
      },
      {
        name: "دبدوب",
        image: "https://couponksa.com/img/logo/dabdoob.jpg",

        coupons: 10,
        link: "/stores/dabdoob",
      },
      {
        name: "ليجو",
        image: "https://couponksa.com/img/logo/lego.jpg",

        coupons: 10,
        link: "/stores/lego",
      },
    ],
  },
  {
    id: 6,
    title: "اقسام المتاجر",
    icon: "https://couponksa.com/img/icons/store-category/departmentstores.png",
    stores: [
      {
        name: "علي إكسبريس",
        image: "https://couponksa.com/img/logo/aliexpress-1.jpeg",

        coupons: 24,
        link: "/stores/aliexpress",
      },
      {
        name: "امازون",
        image: "https://couponksa.com/img/logo/amazon-sa.jpg",

        coupons: 49,
        link: "/stores/amazon",
      },
      {
        name: "نون",
        image: "https://couponksa.com/img/logo/noon.jpg",

        coupons: 32,
        link: "/stores/noon",
      },
      {
        name: "تيمو",
        image: "https://couponksa.com/img/logo/temu.jpg",

        coupons: 19,
        link: "/stores/temu",
      },
      {
        name: "كارفور",
        image: "https://couponksa.com/img/logo/carrefour.jpg",

        coupons: 12,
        link: "/stores/carrefour",
      },
      {
        name: "دي اتش جيت",
        image: "https://couponksa.com/img/logo/dhgate.jpg",

        coupons: 15,
        link: "/stores/dhgate",
      },
      {
        name: "لايت ان ذا بوكس",
        image: "https://couponksa.com/img/logo/light-in-the-box.jpg",

        coupons: 16,
        link: "/stores/lightinthebox",
      },
      {
        name: "يوباي",
        image: "https://couponksa.com/img/logo/ubuy.jpg",

        coupons: 24,
        link: "/stores/ubuy",
      },
    ],
  },
  {
    id: 7,
    title: "سفر",
    icon: "https://couponksa.com/img/icons/store-category/travels.png",
    stores: [
      {
        name: "طيران الاتحاد",
        image: "https://couponksa.com/img/logo/etihadairways.jpg",

        coupons: 13,
        link: "/stores/etihadairways",
      },
      {
        name: "بوكينج.كوم",
        image: "https://couponksa.com/img/logo/bookingcom.jpg",

        coupons: 14,
        link: "/stores/booking.com",
      },
      {
        name: "فلاي ان",
        image: "https://couponksa.com/img/logo/flyin.jpg",

        coupons: 12,
        link: "/stores/flyin",
      },
      {
        name: "فلاي ناس",
        image: "https://couponksa.com/img/logo/flynas.jpg",

        coupons: 16,
        link: "/stores/flynas",
      },
      {
        name: "اجودا",
        image: "https://couponksa.com/img/logo/agoda.jpg",

        coupons: 10,
        link: "/stores/agoda",
      },
      {
        name: "المطار",
        image: "https://couponksa.com/img/logo/almatar.jpg",

        coupons: 3,
        link: "/stores/almatar",
      },
      {
        name: "هوتيلز.كوم",
        image: "https://couponksa.com/img/logo/hotelscom.jpg",

        coupons: 9,
        link: "/stores/hotels.com",
      },
      {
        name: "الخطوط الجوية القطرية",
        image: "https://couponksa.com/img/logo/qatar-airways.jpg",

        coupons: 17,
        link: "/stores/qatarairways",
      },
    ],
  },
];

//Coupons Section
export const couponsSectionData = [
  {
    id: "-coupon-tab",
    href: "#topCouponTab-",
    icon: "https://couponksa.com/ui/images/fire-green-icon.png",
    name: "شائع",
    coupon: [
      {
        store: "صفوة الجوف",
        logo: "/images/coupons/safwat.avif",
        offerImage: "/images/slider/banner.jpg",
        title: "كود خصم صفوة الجوف 2025 أقوى كوبون",
        couponCode: "B1",
        couponType: "open",
      },
      {
        store: "امازون",
        logo: "https://couponksa.com/img/logo/amazon-sa.jpg",
        offerImage: "https://couponksa.com/img/offers/amazon-ramdansale.jpg",
        title: "خصم يصل إلى 80% + خصم إضافي 25% لحاملي بطاقات مصرف الراجحي",
        couponCode: "ARB5 + ARB20",

        couponType: "wrapped",
      },
      {
        store: "تيمو",
        logo: "https://couponksa.com/img/logo/temu.jpg",
        offerImage: "https://couponksa.com/img/offers/temu-ramadanready.jpg",
        title: "حتى 90% خصم + خصم إضافي 30 للمستخدمين الجدد",
        couponCode: "TEM22",

        couponType: "open",
      },
      {
        store: "علي إكسبريس",
        logo: "https://couponksa.com/img/logo/aliexpress-1.jpeg",
        offerImage:
          "https://couponksa.com/img/offers/aliexpress-electronics.jpg",
        title: "كوبون خصم علي إكسبريس: خصم يصل إلى 90% على الكوبونات",
        couponCode: "CAE",
        couponType: "show",
      },
      {
        store: "اديداس",
        logo: "https://couponksa.com/img/logo/adidas-1.jpg",
        offerImage: "https://couponksa.com/img/offers/adidas-foundingday.png",
        title: "خصم ثابت 40% على منتجات مختارة",
        couponCode: "RAN172",
        couponType: "open",
      },
      {
        store: "ريفافاشن",
        logo: "https://couponksa.com/img/logo/riva-fashion.jpg",
        offerImage:
          "https://couponksa.com/img/offers/rivafashion-fashionaccessories.jpg",
        title:
          "كوبون خصم ريفا فاشن: خصم يصل إلى 70% + خصم إضافي 10% على جميع المنتجات",
        couponCode: "CAE",

        couponType: "open",
      },
      {
        store: "فلاي ناس",
        logo: "https://couponksa.com/img/logo/flynas.jpg",
        offerImage: "https://couponksa.com/img/offers/flynas-flights.jpg",
        title: "احجز رحلاتك الداخلية بأسعار تبدأ من 99 ريالًا سعوديًا",
        couponCode: "CAE",

        couponType: "show",
      },
      {
        store: "نون",
        logo: "https://couponksa.com/img/logo/noon.jpg",
        offerImage: "https://couponksa.com/img/offers/noon-ramadan.jpg",
        title: "خصم يصل إلى 60% + خصم إضافي 10% على كل شيء",
        couponCode: "CKSA",

        couponType: "open",
      },
      {
        store: "فارفيتش",
        logo: "https://couponksa.com/img/logo/farfetch.jpg",
        offerImage: "https://couponksa.com/img/offers/farfetch.jpg",
        title:
          "كوبون خصم فارفيتش : خصم يصل إلى 70% + خصم إضافي 15% على العناصر المختارة",
        couponCode: "NC15FF",

        couponType: "wrapped",
      },
    ],
  },
  {
    id: "15-coupon-tab",
    href: "#topCouponTab-15",
    icon: "https://couponksa.com/img/icons/coupon-category/fashion-1.png",
    name: "الأزياء والإكسسوارات",
    coupon: [
      {
        store: "ريفافاشن",
        logo: "https://couponksa.com/img/logo/riva-fashion.jpg",
        offerImage:
          "https://couponksa.com/img/offers/rivafashion-fashionaccessories.jpg",
        title:
          "كوبون خصم ريفا فاشن: خصم يصل إلى 70% + خصم إضافي 10% على جميع المنتجات",
        couponCode: "CAE",

        couponType: "open",
      },
      {
        store: "اديداس",
        logo: "https://couponksa.com/img/logo/adidas-1.jpg",
        offerImage: "https://couponksa.com/img/offers/adidas.jpg",
        title: "خصم يصل إلى 70% + خصم إضافي 15% على كل شيء",
        couponCode: "RAN172",

        couponType: "open",
      },
      {
        store: "فارفيتش",
        logo: "https://couponksa.com/img/logo/farfetch.jpg",
        offerImage: "https://couponksa.com/img/offers/farfetch.jpg",
        title:
          "كوبون خصم فارفيتش : خصم يصل إلى 70% + خصم إضافي 15% على العناصر المختارة",
        couponCode: "NC15FF",

        couponType: "wrapped",
      },
      {
        store: "اتش اندام",
        logo: "https://couponksa.com/img/logo/h-and-m.jpg",
        offerImage: "https://couponksa.com/img/offers/hm-fashion.jpg",
        title: "برومو كود اتش اند ام: خصم 5% على جميع المنتجات",
        couponCode: "A7S4",

        couponType: "open",
      },
      {
        store: "6ستريت",
        logo: "https://couponksa.com/img/logo/6th-street.jpg",
        offerImage: "https://couponksa.com/img/offers/6th-street-women.jpg",
        title:
          "كوبون خصم 6 ستريت: خصم يصل إلى 70% + خصم إضافي 6% على جميع المنتجات",
        couponCode: "COSA",

        couponType: "open",
      },
      {
        store: "نمشي",
        logo: "https://couponksa.com/img/logo/namshi-1.jpg",
        offerImage: "https://couponksa.com/img/offers/namshi-womenclothing.jpg",
        title: "كوبون خصم نمشي: خصم حتى 80% + 15% اضافي على جميع المنتجات",
        couponCode: "CKSA",

        couponType: "open",
      },
      {
        store: "سن اندساندسبورتس",
        logo: "https://couponksa.com/img/logo/sun-sand-sports.jpg",
        offerImage:
          "https://couponksa.com/img/offers/sunandsandsports-fashionaccessories.jpg",
        title:
          "كود خصم سن اند ساند سبورتس: خصم حتى 80% + خصم إضافي 20% على المنتجات غير المخفضة",
        couponCode: "CKSA",

        couponType: "open",
      },
      {
        store: "فوغا كلوسيت",
        logo: "https://couponksa.com/img/logo/vogacloset.jpg",
        offerImage:
          "https://couponksa.com/img/offers/vogacloset-fashionaccessories.jpg",
        title: "كود فوغا كلوسيت: خصم يصل إلى 80% + خصم إضافي 15% على كل شيء",
        couponCode: "CKSA",
        couponType: "open",
      },
    ],
  },
  {
    id: "14-coupon-tab",
    href: "#topCouponTab-14",
    icon: "https://couponksa.com/img/icons/coupon-category/beauty.png",
    name: "صحة وجمال",
    coupon: [
      {
        store: "سيفورا",
        logo: "https://couponksa.com/img/logo/sephora.jpg",
        offerImage: "https://couponksa.com/img/offers/sephora-nd.jpg",
        title: "خصم ثابت 5% على الصحة والجمال",
        couponCode: "CKSA",

        couponType: "open",
      },
      {
        store: "باث آندبودي وركس",
        logo: "https://couponksa.com/img/logo/bath-and-body-works.jpg",
        offerImage: "https://couponksa.com/img/offers/bbnw-bodycare.jpg",
        title: "خصم ثابت 5% على منتجات الاستحمام والعناية بالجسم",
        couponCode: "A4YR",

        couponType: "open",
      },
      {
        store: "فيكتوريا سيكريت",
        logo: "https://couponksa.com/img/logo/victorias-secret.jpg",
        offerImage:
          "https://couponksa.com/img/offers/victoriassecret-beauty.jpg",
        title: "خصم ثابت 15% على مجموعة مستحضرات التجميل الغير مخفضة",
        couponCode: "A5MY",

        couponType: "open",
      },
      {
        store: "اي هيرب",
        logo: "https://couponksa.com/img/logo/iherb.jpg",
        offerImage: "https://couponksa.com/img/offers/iherb-healthbeauty.jpg",
        title: "خصم ثابت 5% على الصحة والجمال",
        couponCode: "MA3",

        couponType: "open",
      },
      {
        store: "هدى بيوتي",
        logo: "https://couponksa.com/img/logo/hudabeauty-new.jpg",
        offerImage:
          "https://couponksa.com/img/offers/huda-beauty-makeup-cosmetics.jpg",
        title: "الرمز الترويجي هدى بيوتي: خصم يصل إلى 50% على كل شيء",
        couponCode: "MA3sa",
        couponType: "show",
      },
      {
        store: "ذابودي شوب",
        logo: "https://couponksa.com/img/logo/the-body-shop.jpg",
        offerImage: "https://couponksa.com/img/offers/thebodyshop-beauty.jpg",
        title: "خصم ثابت 10% على الصحة والجمال",
        couponCode: "CKSA",
        couponType: "open",
      },
      {
        store: "ماي بروتين",
        logo: "https://couponksa.com/img/logo/myprotein-ksa.png",
        offerImage: "https://couponksa.com/img/offers/myprotein-fitness.jpg",
        title: "خصم ثابت 15% على الصحة والجمال",
        couponCode: "CKSA",

        couponType: "wrapped",
      },
      {
        store: "عبد الصمد القرشي",
        logo: "https://couponksa.com/img/logo/abdul-samad-al-qurashi.jpg",
        offerImage:
          "https://couponksa.com/img/offers/abdulsamadalqurashi-beauty.jpg",
        title: "خصم ثابت 5% على العطور والعود",
        couponCode: "CAE",

        couponType: "open",
      },
    ],
  },
];

//Products Section
export const productSectionData = [
  {
    id: "-deals-tab",
    href: "#topDealTab--deals",
    icon: "https://couponksa.com/ui/images/fire-green-icon.png",
    name: "شائع",
    content: [
      {
        store: "امازون",
        logo: "https://couponksa.com/img/logo/amazon-sa.jpg",
        offerImage:
          "https://couponksa.com/img/deals/feature/samsung-galaxy-s24-ultra.jpg",
        title: "Samsung Galaxy S24 Ultra",
        price: "3666.00",
        link: "https://couponksa.com/ar/out/deal/1",
      },
      {
        store: "امازون",
        logo: "https://couponksa.com/img/logo/amazon-sa.jpg",
        offerImage:
          "https://couponksa.com/img/deals/feature/appleiphone16promax.jpg",
        title: "Apple iPhone 16 Pro Max",
        price: "5433.00",
        link: "https://couponksa.com/ar/out/deal/2",
      },
      {
        store: "امازون",
        logo: "https://couponksa.com/img/logo/amazon-sa.jpg",
        offerImage: "https://couponksa.com/img/deals/feature/honor-x9b-5g.jpg",
        title: "Honor X9b 5G",
        price: "1142.00",
        link: "https://couponksa.com/ar/out/deal/3",
      },
      {
        store: "امازون",
        logo: "https://couponksa.com/img/logo/amazon-sa.jpg",
        offerImage:
          "https://couponksa.com/img/deals/feature/apple-iphone-15-pro-max.jpg",
        title: "Apple iPhone 15 Pro Max",
        price: "4799.00",
        link: "https://couponksa.com/ar/out/deal/4",
      },
      {
        store: "امازون",
        logo: "https://couponksa.com/img/logo/amazon-sa.jpg",
        offerImage:
          "https://couponksa.com/img/deals/feature/samsung-galaxy-a55-5g.jpg",
        title: "Samsung Galaxy A55 5G",
        price: "1268.40",
        link: "https://couponksa.com/ar/out/deal/5",
      },
      {
        store: "امازون",
        logo: "https://couponksa.com/img/logo/amazon-sa.jpg",
        offerImage:
          "https://couponksa.com/img/deals/feature/apple-iphone-14.jpg",
        title: "Apple iPhone 14",
        price: "2299.00",
        link: "https://couponksa.com/ar/out/deal/6",
      },
    ],
  },
  {
    id: "3-deals-tab",
    href: "#topDealTab-3-deals",
    icon: "https://couponksa.com/img/icons/deal-category/mobilephones.png",
    name: "جوالات",
    content: [], // No deals provided in the HTML
  },
  {
    id: "6-deals-tab",
    href: "#topDealTab-6-deals",
    icon: "https://couponksa.com/img/icons/deal-category/television-1.png",
    name: "تلفزيونات",
    content: [], // No deals provided in the HTML
  },
  {
    id: "4-deals-tab",
    href: "#topDealTab-4-deals",
    icon: "https://couponksa.com/img/icons/deal-category/perfumes-4.png",
    name: "عطور",
    content: [], // No deals provided in the HTML
  },
  {
    id: "2-deals-tab",
    href: "#topDealTab-2-deals",
    icon: "https://couponksa.com/img/icons/deal-category/laptops.png",
    name: "لابتوب",
    content: [], // No deals provided in the HTML
  },
  {
    id: "1-deals-tab",
    href: "#topDealTab-1-deals",
    icon: "https://couponksa.com/img/icons/deal-category/cameras-2.png",
    name: "كاميرات",
    content: [], // No deals provided in the HTML
  },
  {
    id: "7-deals-tab",
    href: "#topDealTab-7-deals",
    icon: "https://couponksa.com/img/icons/deal-category/videogames-1.png",
    name: "ألعاب الفيديو",
    content: [], // No deals provided in the HTML
  },
];
