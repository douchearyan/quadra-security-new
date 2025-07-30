"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import FancyButton from "../home/FancyButton";
import SolutionsDropdown from "./SolutionsDropdown"; // ✅ Adjust path as needed
import { AnimatePresence, motion } from "framer-motion";
import QuotationDialog from "../home/QuotationDialog";

const HomeNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div
      className={`fixed z-50 w-screen font-[family-name:var(--font-urbanist)] transition-all bg-white duration-300 ${
        scrolled || isMenuOpen
          ? "md:bg-[#0B0146]/95 md:backdrop-blur-lg"
          : "md:bg-transparent md:backdrop-blur-2xl"
      }`}
    >
      <div className="md:h-18 h-14 w-full flex items-center justify-between px-4 md:px-6 lg:px-10">
        {/* Mobile Menu Toggle */}
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

        {/* Logo */}
        <div className="flex gap-1 items-center h-full w-full md:w-auto justify-center md:justify-start">
          <Link href="/">
            <Image
              src="/logo_white.svg"
              width={24}
              height={24}
              alt="Quadra Security Logo"
              className="md:w-[200px] w-[150px] hidden md:block mt-3"
            />
          </Link>

          <Link href="/">
            <Image
              src="/logo_color.svg"
              width={24}
              height={24}
              alt="Quadra Security Logo"
              className="md:w-[200px] w-[150px] md:hidden mt-3 "
            />
          </Link>
          <div className="flex flex-col justify-start">
            {/* <p className="text-white font-semibold text-md">
              Quadra <span className="text-yellow-500">Security</span>
            </p> */}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ul className="flex text-white text-md justify-evenly gap-4 md:gap-3 lg:gap-10">
              {/* Static nav items */}
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`px-3 py-2 rounded-2xl transition-colors duration-300 ${
                      pathname === item.path
                        ? "bg-yellow-500 text-black"
                        : "hover:bg-white hover:text-black"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {/* Solutions dropdown */}
              <SolutionsDropdown />
            </ul>
          </motion.nav>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex">
          <QuotationDialog>
            <FancyButton className="w-full py-2 px-3 text-sm rounded-sm">
              Get your Quotation Today
            </FancyButton>
          </QuotationDialog>
        </div>
      </div>

      {/* Mobile Menu */}
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
              {/* Logo and Close Button */}
              <div className="flex w-full justify-between items-center">
                <div></div> {/* empty div to push logo to right */}
                <Image
                  src="/logo_color.svg"
                  width={24}
                  height={24}
                  alt="Quadra Security Logo"
                  className="md:w-[200px] w-[150px] md:hidden mt-3"
                />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={28} className="text-black" />
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
                    <FancyButton className="w-full py-2 px-3 text-sm rounded-sm">
                      Get your Quotation Today
                    </FancyButton>
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
