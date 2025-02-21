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
      prevIndex === 0 ? (infiniteLoop ? images.length - 1 : 0) : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          return infiniteLoop ? 0 : prevIndex;
        }
        return prevIndex + 1;
      });
    }, interval);

    return () => clearInterval(slideInterval);
  }, [autoPlay, interval, images.length, infiniteLoop]);

  if (!images.length) return null;

  return (
    <div className="relative group w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-full w-full flex-shrink-0 h-[300px] md:h-[400px] lg:h-[500px]"
          >
            <img
              src={img.src}
              alt={img.alt || `Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <FaChevronLeft className="text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <FaChevronRight className="text-gray-800" />
          </button>
        </>
      )}
    </div>
  );
}
