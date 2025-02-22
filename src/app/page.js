import Coupons from "@/components/Sections/Coupons/Coupons";
import Products from "@/components/Sections/Products/Products";
import Stores from "@/components/Sections/Stores/Stores";
import Slider from "@/components/Slider/Slider";

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
    </>
  );
}
