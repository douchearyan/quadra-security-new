/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import SolutionCard from "./SolutionCard";


const solutions = [
  {
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1749295759/Security-Camera-Types-for-Apartment-Buildings_lu2icg.jpg",
    title: "Apartment and Real Estate Security",
    description:
      "Smart surveillance and access control for apartments, gated communities, and real estate properties .",
    features: [
      "Visitor and Resident Management",
      "Perimeter Monitoring",
    ],
    path: "/solutions/apartment-real-estate",
  },
  {
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1749295677/1746437705448_bktnqn.jpg",
    title: "Retail Security",
    description:
      "End-to-end CCTV and theft prevention systems for shops, malls, and showrooms to reduce shrinkage and enhance in-store monitoring.",
    features: [
      "Customer Behavior Analytics",
      "POS Integration",
      "Real-Time Theft Alerts",
    ],
    path: "/solutions/retail",
  },
  {
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1749295974/Security-camera-monitor-Adobe-Andrey-Popov-e1668014100791_v2flei.jpg",
    title: "Campus Security",
    description:
      "Integrated surveillance solutions for schools, colleges, and campuses to ensure a secure learning environment.",
    features: [
      "Entry/Exit Monitoring",
      "Emergency Alert Systems",
      "Perimeter Intrusion Detection",
    ],
    path: "/solutions/campus",
  },
  {
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1749296049/hotel-13-2-c_domjtq.jpg",
    title: "Hotels/Resorts Security",
    description:
      "Discreet and efficient security for hospitality environments to protect guests, staff, and infrastructure.",
    features: [
      "Guest and Staff Access Control",
      "Surveillance with Privacy Zones",
      "Emergency Response Integration",
    ],
    path: "/solutions/hotels-resorts",
  },
  {
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1749296125/1723391449-7497_nc5cfc.jpg",
    title: "Bank Security",
    description:
      "High-level security systems for banks and ATMs to ensure asset protection and operational integrity.",
    features: [
      "Vault and ATM Surveillance",
      "Facial Recognition Access",
      "Alarm Integration and Quick Response",
    ],
    path: "/solutions/bank",
  },
];





const SolutionsCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api || isHovered) {
      return;
    }

    // Set up autoplay
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api, isHovered]);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div 
      className="relative px-6 py-10 w-[300px] md:w-auto rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        setApi={setApi}
        className="w-full max-w-5xl mx-auto"
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {solutions.map((service, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
              <div className="p-1">
                <SolutionCard {...service} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[#211a7d] hover:bg-[#2d26a0] h-6 w-6 m-3 text-white border-none" />
        <CarouselNext className="bg-[#211a7d] hover:bg-[#2d26a0]  m-3 h-6 w-6 text-white border-none" />
      </Carousel>

      {/* Dot indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {solutions.map((_, idx) => (
          <div 
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
              idx === current ? "bg-yellow-400" : "bg-white/80"
            }`}
            onClick={() => api?.scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default SolutionsCarousel;
