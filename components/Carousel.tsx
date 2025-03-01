"use client"
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface CarouselProps {
  images: string[];
  interval?: number;
  altTexts?: string[];
  width?: number;
  height?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  interval = 3000,
  altTexts = [],
  width = 1200,
  height = 600,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const numImages = images.length;

  if (numImages === 0) {
    return <div>No images provided.</div>;
  }

  useEffect(() => {
    if (numImages > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % numImages);
      }, interval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [interval, numImages]);

  const variants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <div className="relative w-full max-w-6xl overflow-hidden rounded-lg shadow-md" style={{ height: height }}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt={altTexts[currentIndex] || `Slide ${currentIndex + 1}`}
            width={width}
            height={height}
            className="object-cover w-full h-full"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              } hover:bg-blue-300 transition-colors duration-200`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
