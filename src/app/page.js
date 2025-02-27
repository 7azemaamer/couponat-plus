import BannerText from "@/components/Sections/BannerText/BannerText";
import Categories from "@/components/Sections/Categories/Categories";
import Coupons from "@/components/Sections/Coupons/Coupons";
import Events from "@/components/Sections/Events/Events";
import MarketingSection from "@/components/Sections/Marketing/Marketing";
import Products from "@/components/Sections/Products/Products";
import Stores from "@/components/Sections/Stores/Stores";
import { TwoBanner } from "@/components/Sections/TwoBanner/TwoBanner";
import Slider from "@/components/Slider/Slider";
import Newsletter from "@/components/UI/Newsletter/Newsletter";

export default function Home() {
  return (
    <>
      <Slider
        images={[
          {
            src: "/images/slider/slide1.png",
            alt: "Ramadan Banner",
          },
          {
            src: "/images/slider/slide2.jpg",
            alt: "Second Banner",
          },
        ]}
      />
      {/* Stores Section */}
      <Stores className={"my-10"} />
      {/* Coupns Section */}
      <Coupons className={"my-10"} />
      {/* Products Section */}
      <Products className={"my-10"} />
      {/* Products Section */}
      <Events className={"my-10"} />
      {/* Categories Section */}
      <Categories className={"my-10"} />
      {/* Banner (one with text) */}
      <BannerText />
      {/* Newsletter */}
      <Newsletter />
      {/* Two Banner Section */}
      <TwoBanner />
      {/* Marketing Section */}
      <MarketingSection />
    </>
  );
}
