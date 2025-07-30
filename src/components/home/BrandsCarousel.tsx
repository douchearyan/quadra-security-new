"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: "/brands/cpplus.jpg", name: "CP Plus" },
  { src: "/brands/prama.png", name: "Prama" },
  { src: "/brands/Hikvision.svg", name: "Hikvision" },
  { src: "/brands/beetel.png", name: "Beetel" },
  { src: "/brands/daichi.jpeg", name: "Daichi" },
  { src: "/brands/dlink.png", name: "D-Link" },
  { src: "/brands/essl.jpg", name: "eSSL" },
  { src: "/brands/Godrej.svg", name: "Godrej" },
  { src: "/brands/hawkvision.webp", name: "Hawkvision" },
  { src: "/brands/tenda.png", name: "Tenda" },
  { src: "/brands/Western_ Digital.svg", name: "WD" },
  { src: "/brands/consistent.png", name: "Consistent" },
];

const duplicatedLogos = [...logos, ...logos]; // for infinite loop illusion

export default function ContinuousBrands() {
  return (
    <div className="w-full overflow-hidden  py-8">
      {/* Title */}
      <div className="flex items-center space-x-4 px-4 md:px-8 mb-6">
        <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[20px] border-l-purple-300" />
        <h2 className="text-white md:text-3xl text-xl font-semibold font-serif">
          Brands we Deal In
        </h2>
      </div>

      {/* Scrolling Carousel */}
      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {duplicatedLogos.map((brand, index) => (
          <div
            key={index}
            className="bg-white rounded-xl w-[160px] h-[120px] flex items-center justify-center p-4 shadow-md"
          >
            <Image
              src={brand.src}
              alt={brand.name}
              width={100}
              height={100}
              className="object-contain max-w-full max-h-full"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
