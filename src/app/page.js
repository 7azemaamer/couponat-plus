import Slider from "@/components/Slider/Slider";
import Image from "next/image";

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
    </>
  );
}
