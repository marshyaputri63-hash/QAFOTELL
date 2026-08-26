"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/i18n";

interface RoomGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  roomName: string;
  images: { src: string; alt: string }[];
}

export default function RoomGallery({
  isOpen,
  onClose,
  roomName,
  images,
}: RoomGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  if (!isOpen) return null;

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const goPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full mx-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Room name */}
        <div className="absolute top-4 left-4 z-20 bg-brand/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
          <h3 className="font-serif font-bold text-lg">{roomName}</h3>
          <p className="text-xs text-white/80">
            {currentIndex + 1} {t(translations.roomGallery, "of")}{" "}
            {images.length}
          </p>
        </div>

        {/* Image slider */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-500 ${
                idx === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 py-4 bg-white">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentIndex
                  ? "bg-brand w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
