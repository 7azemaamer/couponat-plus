"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Slider({
  images = [],
  autoPlay = true,
  interval = 3000,
  infiniteLoop = true,
  showArrows = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1
        ? infiniteLoop
          ? 0
          : prevIndex
        : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? infiniteLoop
          ? images.length - 1
          : prevIndex
        : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1
          ? infiniteLoop
            ? 0
            : prevIndex
          : prevIndex + 1
      );
    }, interval);
    return () => clearInterval(slideInterval);
  }, [autoPlay, interval, images.length, infiniteLoop]);

  if (!images.length) return null;

  return (
    <div className="group relative w-full h-[300px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg">
      {images.map((img, index) => {
        let positionClasses =
          "absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-out";
        if (index === currentIndex) {
          positionClasses += " translate-x-0";
        } else if (index < currentIndex) {
          positionClasses += " -translate-x-full";
        } else {
          positionClasses += " translate-x-full";
        }

        return (
          <div key={index} className={positionClasses}>
            <img
              src={img.src}
              alt={img.alt || `Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}

      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow opacity-0 group-hover:opacity-100 group-hover:left-2 transition-all duration-300 z-10"
          >
            <FaChevronLeft className="text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-300 z-10"
          >
            <FaChevronRight className="text-gray-800" />
          </button>
        </>
      )}
    </div>
  );
}
