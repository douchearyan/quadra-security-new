"use client";

import { FaQuoteLeft } from "react-icons/fa";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="lg:w-3/4 lg:h-3/4 h-1/2 bg-gradient-to-b w-full from-[#100756] to-[#210eaf] lg:ml-20 md:flex md:justify-start"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-center bg-[#fff815] lg:h-24 lg:w-24 w-20 h-20 rounded-full z-20 relative lg:-top-12 -top-10 left-6 lg:left-16"
      >
        <FaQuoteLeft className="text-black lg:text-3xl" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="h-full backdrop-blur-sm md:backdrop-blur-none md:w-1/2 flex flex-col md:justify-center space-y-4"
      >
        <div className="lg:space-y-3 space-y-4">
          <h1 className="md:hidden lg:text-3xl text-xl text-center">
            What our clients are saying{" "}
          </h1>
          <h1 className="hidden md:block lg:text-3xl">
            What our clients <br />
            are saying{" "}
          </h1>
          <p className="lg:text-xl hidden md:block">
            From gated societies to local businesses,
            <br /> our clients across Gurugram trust us for fast, reliable,{" "}
            <br />
            and secure CCTV installations.
          </p>
          <p className="md:hidden lg:text-xl text-center w-full">
            From gated societies to local businesses,
            <br /> our clients across{" "}
            <strong className="text-yellow-500">GURGAON</strong> trust
            <br /> us for fast, reliable, and secure
            <br /> CCTV installations.
          </p>

          {/* Button */}
          <div className="text-center md:text-left mt-2">
            <a
              href="/contact-us"
              className="inline-block px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="md:hidden z-20 flex relative lg:justify-center lg:items-center lg:w-1/8 md:-right-[200px]">
          <TestimonialsCarousel />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="hidden md:flex z-20 relative lg:justify-center lg:items-center lg:w-1/8 w-32 md:-right-[200px]"
      >
        <TestimonialsCarousel />
      </motion.div>
    </motion.div>
  );
}
