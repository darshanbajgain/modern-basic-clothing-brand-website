"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageCarouselProps {
  images: string[] | string
  alt: string
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Convert string to array if needed
  const imageArray = Array.isArray(images) ? images : [images]

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? imageArray.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === imageArray.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="relative w-full">
      <div className="relative w-full h-[400px] overflow-hidden rounded-md">
        <Image
          src={imageArray[currentIndex] || "/placeholder.svg"}
          alt={`${alt} - View ${currentIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          className="object-contain"
        />

        {/* Navigation arrows */}
        <button
          type="button"
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex mt-4 space-x-2 overflow-x-auto pb-2">
        {imageArray.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
              currentIndex === index ? "border-neutral-900" : "border-transparent"
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${alt} thumbnail ${index + 1}`}
              fill
              sizes="64px"
              className="object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
