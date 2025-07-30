import {
  FaInstagram,
  // FaYoutube,
  FaLinkedin,
  FaMapMarkerAlt,
  FaFacebook
} from "react-icons/fa";

import logo from "/public/logo_white.svg"; // replace with actual path if different
import Link from "next/link"; // if using Next.js
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b to-[#0e0542] from-[#2716be] text-white pt-12 pb-6 px-4 font-[family-name:var(--font-urbanist)]">
      <div className="max-w-7xl justify-items-center mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left">
        {/* Important Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">IMPORTANT LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/solutions/apartment-real-estate">Solutions</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">OUR SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services#aboveCctv">CCTV & Surveillance</Link>
            </li>
            <li>
              <Link href="/services#Cctv">Biometric Systems</Link>
            </li>
            <li>
              <Link href="/services#Biometric">ANPR</Link>
            </li>
            <li>
              <Link href="/services#ANPR">EPABX Systems</Link>
            </li>
            <li>
              <Link href="/services">View All →</Link>
            </li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <div className="flex items-center mb-3">
            <img
              src={logo.src || "/logo.png"}
              alt="Quadra Logo"
              className="h-6 mr-2"
            />
          </div>
          <p className="text-sm mb-3">Protecting What Matters Most</p>
          <div className="text-sm space-y-1">
            <p className="flex items-center gap-2">
              <FaLocationDot /> Gurugram, Delhi NCR, Noida
            </p>
            <p className="flex items-center gap-2">
              <MdEmail className=" text-white" />
              <span>
                <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=accounts@quadrasecurity.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                accounts@quadrasecurity.com
              </a>
              </span>
              
            </p>

            <a
              href="https://maps.app.goo.gl/UHFq6mFBaGgDoGm76"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-1 hover:underline text-sm text-blue-300"
            >
              <FaMapMarkerAlt className="mr-1" /> View on Google Maps
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-4">FOLLOW US</h3>
          <div className="flex gap-5 text-2xl">
            <a
              href="https://www.instagram.com/quadra_security?igsh=MWlvb3Q5bTFja2ZmaQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            {/* <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a> */}
            <a
              href="https://www.linkedin.com/company/quadra-security/posts/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577161615068"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-white mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Quadra Security. All rights reserved.
      </div>
    </footer>
  );
}
