/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import ServiceCard from "./ServiceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const services= [
  {
    icon: "📹",
    title: "CCTV & Surveillance",
    description:
      "We provide cutting-edge CCTV solutions including IP, analog, and 4G/WiFi surveillance systems. Ensure round-the-clock monitoring of your premises with high-quality imaging and smart analytics.",
    features: [
      "HD/4K Installation",
      "4G, WiFi, and Solar-Powered Cameras",
      "Remote Monitoring",
      "Night Vision & Motion Detection",
      "Cloud & Local Storage Options",
    ],
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296562/cctv_installation_and_surveillance_sit3ia.jpg",
  },
  {
    icon: "🧬",
    title: "Biometric Systems",
    description:
      "Secure your facility with our biometric access control solutions including fingerprint, facial recognition, and multimodal systems for accurate identification and attendance tracking.",
    features: [
      "Fingerprint & Facial Recognition",
      "Multimodal Biometric Access",
      "Door Lock Integration",
      "Attendance Management",
      "Security & Data Logging",
    ],
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296918/biometric_gc80fv.webp",
  },
  {
    icon: "🚘",
    title: "ANPR (Automatic Number Plate Recognition)",
    description:
      "Deploy ANPR cameras to capture and identify vehicle number plates in real time. Ideal for parking, tolls, and secured entry points.",
    features: [
      "Real-Time Plate Recognition",
      "High-Speed Camera Integration",
      "Database Matching",
      "Barrier Integration",
      "Analytics Dashboard",
    ],
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296559/ANPR-camera_n4y4i9.webp",
  },
  {
    icon: "📞",
    title: "EPABX Systems",
    description:
      "Modernize internal communication with our EPABX systems. Suitable for organizations of all sizes looking for seamless call routing and extension management.",
    features: [
      "Analog & IP EPABX Systems",
      "Scalable Extensions",
      "Voicemail & Call Logs",
      "Intercom & Paging",
      "Repair & Installation Services",
    ],
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296562/epabx_systems_zly2de.jpg",
  },
  {
    icon: "🖥️",
    title: "Interactive Display Panels",
    description:
      "Engage users with high-definition interactive panels designed for conference rooms, education, and command centers.",
    features: [
      "Touch-Enabled Display",
      "Multi-Device Connectivity",
      "Smart Board Capabilities",
      "Integrated OS and Apps",
      "Wall Mount & Stand Options",
    ],
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296568/interactive_panels_bndiiu.png",
  },
  {
    icon: "📞",
    title: "Video Door Phones",
    description:
      "Enhance home or office security with our video door phone systems. See and communicate with visitors before granting access.",
    features: [
      "HD Video Calling",
      "Intercom Support",
      "Remote Unlocking",
      "Wi-Fi Enabled Options",
      "Multiple Indoor Units",
    ],
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296562/video_door_phones_d65vqh.jpg",
  },
  {
    icon: "🛅",
    title: "Baggage Scanners",
    description:
      "Ensure safety with high-resolution X-ray baggage scanners ideal for malls, offices, and transport hubs.",
    features: [
      "Dual View Imaging",
      "Automatic Threat Detection",
      "Real-Time Scanning",
      "Maintenance Support",
      "High Throughput Rate",
    ],
    imageSrc: "/images/baggage-scanner.jpg",
  },
  {
    icon: "🚨",
    title: "Alarm Systems",
    description:
      "Protect property and personnel with advanced alarm systems. Detect intrusion, fire, and unauthorized access instantly.",
    features: [
      "Intruder & Panic Alarms",
      "Door/Window Sensors",
      "24/7 Monitoring",
      "Mobile Notifications",
      "Fire & Smoke Detection",
    ],
    imageSrc: "/images/security-alarms.jpg",
  },
  {
    icon: "🔍",
    title: "Metal Detectors",
    description:
      "Deploy handheld and walkthrough metal detectors for reliable screening in secure environments such as events, schools, and offices.",
    features: [
      "High Sensitivity Scanning",
      "Portable & Walkthrough Options",
      "Gold & Weapon Detection",
      "Adjustable Thresholds",
      "Rechargeable Models",
    ],
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296562/metal_detector_zczuoy.jpg",
  },
  {
    icon: "🧱",
    title: "Access Control Systems",
    description:
      "Control who enters your premises with secure and customizable access control systems for doors, gates, and turnstiles.",
    features: [
      "RFID & Biometric Entry",
      "Centralized Access Management",
      "Time-Based Permissions",
      "Integration with Door Locks",
      "Audit Logs & Reports",
    ],
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296559/Access_Control_enl7ep.webp",
  },
  {
    icon: "⛔",
    title: "Boom Barriers & Toll Solutions",
    description:
      "Automated boom barriers and toll management systems for gated communities, industrial complexes, and parking areas.",
    features: [
      "ANPR Integration",
      "Fast-Action Barriers",
      "Remote Control Access",
      "Toll Payment Systems",
      "Access Logging",
    ],
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296562/boom-barrier-banne_slefin.jpg",
  },
  {
    icon: "🔒",
    title: "Electronic Door Locks",
    description:
      "Upgrade to keyless entry with our range of electronic door locks that support fingerprint, RFID, PIN, and smartphone control.",
    features: [
      "Biometric & PIN Access",
      "Remote Unlocking",
      "Auto-Lock Mechanism",
      "Battery Backup",
      "Tamper Alerts",
    ],
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296561/Electronic-Door-Locks_x73dcl.webp",
  },
];

const ServiceCarousel = () => {
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
          {services.map((service, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
              <div className="p-1">
                <ServiceCard {...service} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[#211a7d] hover:bg-[#2d26a0] h-6 w-6 m-3 text-white border-none" />
        <CarouselNext className="bg-[#211a7d] hover:bg-[#2d26a0]  m-3 h-6 w-6 text-white border-none" />
      </Carousel>

      {/* Dot indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {services.map((_, idx) => (
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

export default ServiceCarousel;
