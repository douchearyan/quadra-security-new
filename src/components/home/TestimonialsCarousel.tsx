/* eslint-disable @typescript-eslint/no-explicit-any */
// components/TestimonialsCarousel.tsx
"use client";

import * as React from "react";
import { useRef, useState, useEffect } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Amit S.",
    location: "DLF Phase 2",
    description:
      "Excellent service and top-class cameras. Installation was quick and clean.",
    rating: 5,
  },
  {
    name: "Preeti R.",
    location: "Sushant Lok",
    description:
      "Affordable, professional, and very responsive support. Highly recommend!",
    rating: 5,
  },
    {
    name: "Gargi",
    location: "DLF Phase 2",
    description:
      "Quality products at affordable rates. Highly recommend!",
    rating: 5,
  },
      {
    name: "Sushant Bharadwaj",
    location: "Sushant Lok",
    description:
      "Excellent services and trained professionals .",
    rating: 5,
  },
];


export function TestimonialsCarousel() {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  const autoplayPlugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="flex flex-col items-center md:max-w-2xl md:w-auto w-56 mx-auto">
      <Carousel
        setApi={setApi}
        plugins={[autoplayPlugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2 md:h-55 lg:h-60">
                <TestimonialCard {...testimonial} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-purple-600 h-6 w-6 m-3 hover:bg-purple-700 text-white" />
        <CarouselNext className="bg-purple-600 h-6 w-6 m-3 hover:bg-purple-700 text-white" />
      </Carousel>

      {/* Dot indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => api?.scrollTo(idx)}
            className={`md:w-3 md:h-3 w-2 h-2 rounded-full transition-colors ${
              idx === current ? "bg-purple-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
