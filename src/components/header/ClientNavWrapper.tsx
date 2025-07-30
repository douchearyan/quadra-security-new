"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import HomeNavbar from "./HomeNavbar";
import Footer from "../footer/Footer";

export default function ClientNavWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome =
    pathname === "/" ||
    pathname.startsWith("/studio/") ||
    pathname === "/studio";

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={isHome ? "home" : "main"}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {isHome ? <HomeNavbar /> : <Navbar />}
        </motion.div>
      </AnimatePresence>
      {children}
      <Footer />
    </>
  );
}
