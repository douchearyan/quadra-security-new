'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const SolutionsDropdown = () => {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

const solutions = [
  { name: "Solutions for Apartment and Real Estate", path: "/solutions/apartment-real-estate" },
  { name: "Solutions for Retail", path: "/solutions/retail" },
  { name: "Solutions for Campus", path: "/solutions/campus" },
  { name: "Solutions for Hotels/Resorts", path: "/solutions/hotels-resorts" },
  { name: "Solutions for Bank", path: "/solutions/bank" },
];


  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative font-[family-name:var(--font-urbanist)]"
    >
      <span
        className={`px-3 py-2 rounded-2xl cursor-pointer transition-colors duration-300 ${
          pathname?.startsWith("/solutions")
            ? "bg-yellow-500 text-black"
            : "hover:bg-white hover:text-black"
        }`}
      >
        Solutions
      </span>

      <AnimatePresence>
        {showDropdown && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 6 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="absolute top-full mt-2 left-0 w-60 bg-white backdrop-blur-md text-black shadow-xl z-10 py-2 rounded-md"
          >
            {solutions.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

export default SolutionsDropdown;
