import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import restaurant ambiance images
import ambiance1 from "@/assets/restaurant-ambiance-1.jpg";
import ambiance2 from "@/assets/restaurant-ambiance-2.jpg";
import ambiance3 from "@/assets/restaurant-ambiance-3.jpg";
import ambiance4 from "@/assets/restaurant-ambiance-4.jpg";

const ambianceImages = [
  {
    src: ambiance1,
    alt: "Elegant dining room with warm ambient lighting"
  },
  {
    src: ambiance2,
    alt: "Cozy corner seating with intimate atmosphere"
  },
  {
    src: ambiance3,
    alt: "Sophisticated bar area with golden lighting"
  },
  {
    src: ambiance4,
    alt: "Beautiful outdoor terrace dining"
  }
];

export const AmbianceGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ambianceImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ambianceImages.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + ambianceImages.length) % ambianceImages.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Gallery Images */}
      <div className="relative w-full h-full">
        {ambianceImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 gallery-fade ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>
        ))}
      </div>

      {/* Restaurant Info Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-primary-foreground z-10 px-6">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Elegante
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 animate-fade-in [animation-delay:0.3s]">
            Fine Dining Experience
          </p>
          <p className="text-lg md:text-xl mt-2 opacity-80 animate-fade-in [animation-delay:0.6s]">
            Scan • Browse • Order
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-white/20 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-white/20 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {ambianceImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary-foreground shadow-elegant"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};