"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import FancyButton2 from "../home/FancyButton2";
import SolutionsDropdown2 from "./SolutionsDropdown2";
import { AnimatePresence, motion } from "framer-motion";
import QuotationDialog from "../home/QuotationDialog";

const HomeNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMobileSolutions, setShowMobileSolutions] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blog" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const solutionItems = [
    {
      name: "Solutions for Apartment and Real Estate",
      path: "/solutions/apartment-real-estate",
    },
    { name: "Solutions for Retail", path: "/solutions/retail" },
    { name: "Solutions for Campus", path: "/solutions/campus" },
    { name: "Solutions for Hotels/Resorts", path: "/solutions/hotels-resorts" },
    { name: "Solutions for Bank", path: "/solutions/bank" },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
    setShowMobileSolutions(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 z-50 font-[family-name:var(--font-urbanist)] w-full transition-all duration-300 bg-white shadow-sm`}
    >
      <div className="md:h-18 h-14 w-full flex items-center justify-between px-4 md:px-6 lg:px-10">
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            ""
          ) : (
            <Menu size={24} className="text-black fixed top-4" />
          )}
        </button>
        <div className="flex gap-1 items-center h-full justify-center w-full md:w-auto md:justify-start">
          {/* Mobile Menu Toggle */}

          <Link href={"/"}>
            <Image
              src="/logo_color.svg"
              width={24}
              height={24}
              alt="Quadra Security Logo"
              className="md:w-[200px] w-[150px] mt-3"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ul className="flex text-black text-md justify-evenly gap-4 md:gap-3 lg:gap-10">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`px-3 py-2 rounded-2xl transition-colors duration-300 ${
                      pathname === item.path
                        ? "bg-[#291a92] text-white"
                        : "hover:bg-gray-500 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <SolutionsDropdown2 />
            </ul>
          </motion.nav>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex">
          <QuotationDialog>
            <FancyButton2 className="w-full py-2 px-3 text-sm rounded-sm">
              Get your Quotation Today
            </FancyButton2>
          </QuotationDialog>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide-in menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-full h-full bg-white z-50 shadow-lg p-4 flex flex-col"
            >
              {/* Close Button */}
              <div className="flex  w-full justify-center">
                <Link href={"/"}>
                  <Image
                    src="/logo_color.svg"
                    width={24}
                    height={24}
                    alt="Quadra Security Logo"
                    className="md:w-[200px] w-[150px] md:hidden  "
                  />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={28} className="text-black fixed right-4 top-4" />
                </button>
              </div>

              {/* Nav Items */}
              <ul className="flex flex-col gap-4 mt-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                        pathname === item.path
                          ? "text-[#2b1ca0]"
                          : "hover:bg-gray-200 text-black"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

                {/* Solutions Toggle */}
                <li>
                  <button
                    onClick={() => setShowMobileSolutions(!showMobileSolutions)}
                    className="flex justify-between items-center w-full px-3 py-2 rounded-xl text-left  hover:bg-gray-200 text-black"
                  >
                    <span className="font-medium">Solutions</span>
                    {showMobileSolutions ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  {showMobileSolutions && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 mt-2 flex flex-col gap-2"
                    >
                      {solutionItems.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.path}
                            className={`block px-3 py-2 rounded-md text-sm ${
                              pathname === item.path
                                ? " text-[#2e1dae] font-semibold"
                                : "hover:bg-white text-black"
                            }`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>

                {/* CTA Button */}
                <li>
                  <QuotationDialog>
                    <FancyButton2 className="w-full py-2 px-3 text-sm rounded-sm">
                      Get your Quotation Today
                    </FancyButton2>
                  </QuotationDialog>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {isMenuOpen && <div className="w-screen h-screen backdrop-blur-lg"></div>}
    </div>
  );
};

export default HomeNavbar;
