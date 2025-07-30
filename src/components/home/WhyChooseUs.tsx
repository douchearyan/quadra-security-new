/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { ShieldCheck, Users, Wrench, Camera, Headset, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Hook to detect mobile view
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const WhyChooseUs = () => {
  const isMobile = useIsMobile();

  const features = [
    {
      icon: <ShieldCheck />,
      title: "Free Consultation & Site Visit",
      desc: "Expert recommendations with a free site survey tailored to your security needs.",
    },
    {
      icon: <Wrench />,
      title: "Skilled Technicians",
      desc: "Reliable CCTV installations by professional experts every time.",
    },
    {
      icon: <Camera />,
      title: "Advanced Security Equipment",
      desc: "Smart cameras with night vision, motion detection & remote monitoring.",
    },
    {
      icon: <Users />,
      title: "Customized Security Solutions",
      desc: "Surveillance systems built for homes, offices, shops, and large properties.",
    },
    {
      icon: <Headset />,
      title: "24/7 Customer Support",
      desc: "Round-the-clock help with troubleshooting, assistance, and maintenance.",
    },
    {
      icon: <Zap />,
      title: "Transparent Pricing",
      desc: "No hidden charges — just fair rates for top-quality security services.",
    },
  ];

  const motto = [
    {
      keyword: "Security",
      desc: "We safeguard your space with the most reliable security technology.",
    },
    {
      keyword: "Safety",
      desc: "Your family, staff, and property deserve protection you can trust.",
    },
    {
      keyword: "Surveillance",
      desc: "Eyes everywhere — smart cameras with real-time monitoring.",
    },
    {
      keyword: "Support",
      desc: "We’re with you before, during, and after installation.",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-screen flex flex-col items-center justify-center gap-y-10  px-4 py-10"
    >
      {/* Title */}
      <div className="flex items-center space-x-4 mb-2">
        <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[18px] border-l-purple-500" />
        <h1 className="text-white text-3xl md:text-4xl font-bold">
          Why Choose <span className="text-yellow-500">Quadra Security?</span>
        </h1>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-yellow-400 text-[#180648] p-2 rounded-full">
                {React.cloneElement(feature.icon, { className: "w-5 h-5" })}
              </div>
              <h2 className="text-white font-semibold text-lg">{feature.title}</h2>
            </div>
            <p className="text-white/80 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Our Motto */}
      <div className="flex flex-col items-center gap-y-6 mt-8 max-w-4xl w-full">
        <h2 className="text-white text-2xl font-semibold border-b border-yellow-400 pb-2">
          Our Motto
        </h2>

        {/* Optional Illustration */}
        {/* <div className="relative w-full h-64 md:h-80">
          <Image
            src="/illustrations/security-motto.png" // Replace with the generated image path
            alt="Security Motto Illustration"
             width={600}
    height={300}
            objectFit="contain"
            className="rounded-xl"
          />
        </div> */}

        {/* Motto Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {motto.map((item, index) => (
            <motion.div
              key={item.keyword}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/10 p-4 rounded-xl border border-white/20"
            >
              <h3 className="text-yellow-400 text-lg font-bold mb-1">{item.keyword}</h3>
              <p className="text-white/80 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
