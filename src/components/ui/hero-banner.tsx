"use client";
import { motion } from "framer-motion";

import React from "react";

interface HeroBannerProps {
  title: string;
  backgroundImage?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  backgroundImage = "/hero-bg.png",
}) => {
  return (
    <motion.div
      className="bg-gray-700 bg-opacity-80 bg-blend-overlay bg-cover bg-center py-24 md:py-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl font-bold text-white mt-12"
        >
          {title}
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default HeroBanner;
