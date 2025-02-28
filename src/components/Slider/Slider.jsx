"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Slider({
  images = [],
  autoPlay = true,
  interval = 5000,
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
    <div className="relative w-full overflow-hidden rounded-lg">
      <div className="relative w-full min-h-[80px] md:min-h-[200px]">
        {images.map((img, index) => {
          let positionClasses =
            "absolute top-0 left-0 w-full transition-transform duration-1500 ease-in-out";
          if (index === currentIndex) {
            positionClasses += " translate-x-0";
          } else if (index < currentIndex) {
            positionClasses += " -translate-x-full";
          } else {
            positionClasses += " translate-x-full";
          }

          return (
            <div key={index} className={positionClasses}>
              <Link
                href={img.href || "#"}
                className="w-full flex items-center justify-center"
              >
                <img
                  src={img.src}
                  alt={img.alt || `Slide ${index + 1}`}
                  className="w-auto h-auto max-w-[95%] object-contain rounded-md"
                />
              </Link>
            </div>
          );
        })}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-1 sm:gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white scale-110" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {showArrows && images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 sm:p-1.5 md:p-2 rounded-full shadow opacity-70 hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-gray-800 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 sm:p-1.5 md:p-2 rounded-full shadow opacity-70 hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-gray-800 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
          </button>
        </>
      )}
    </div>
  );
}
