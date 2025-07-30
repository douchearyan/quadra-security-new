"use client";

import Sidebar from "@/components/solutions/Sidebar";
import DownSidebar from "@/components/solutions/DownSidebar";
import React from "react";
import { motion } from "framer-motion";
import HeroBanner from "@/components/ui/hero-banner";
import { useRouter } from "next/navigation";
import Canonical from "@/utils/Canonical";
import Head from "next/head";

const SolutionsPage = () => {
  const router = useRouter();
  const sidebarItems = [
    {
      label: "Apartment and Real Estate Security",
      path: "/solutions/apartment-real-estate",
    },
    { label: "Retail Security", path: "/solutions/retail" },
    { label: "Campus Security", path: "/solutions/campus" },
    { label: "Hotels/Resorts Security", path: "/solutions/hotels-resorts" },
    { label: "Bank Security", path: "/solutions/bank" },
  ];

  return (
    <>
      <Head>
        <title>Retail Security Solutions | Quadra Security</title>
        <meta
          name="description"
          content="Protect your retail business with Quadra Security's advanced security solutions. AI-powered surveillance, access control, and 24/7 monitoring tailored for retail environments."
        />
        <Canonical />
      </Head>

      <div className="bg-white font-[family-name:var(--font-urbanist)] text-gray-800 min-h-screen">
        <HeroBanner title="Retail Security" />

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Sidebar - Desktop */}
          <motion.div
            className="hidden md:block w-full md:w-1/4 lg:w-2/6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Sidebar items={sidebarItems} />
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="w-full md:w-3/4 lg:w-4/5 bg-white rounded-lg p-4 md:p-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.img
              src="https://res.cloudinary.com/dggsp8ihg/image/upload/v1748621145/solution_02_1_a9eo0k.png"
              alt="Apartment Security Solutions by Quadra Security"
              className="w-full rounded-lg mb-8 object-contain h-64 md:h-80"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />

            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Security Solutions for Retail
              </h1>

              <p className="text-lg sm:text-xl text-gray-700 mb-8">
                In today&apos;s residential environments,{" "}
                <strong>security is no longer optional</strong>. Our specialized
                surveillance systems combine{" "}
                <strong>AI-powered analytics</strong>, high-definition
                monitoring, and smart access control to protect every corner of
                your property - from high-rise apartments to gated communities
                and commercial developments.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-4">
                  Key Benefits for Property Managers & Residents:
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    24/7 monitoring with{" "}
                    <strong>real-time intrusion alerts</strong>
                  </li>
                  <li>
                    <strong>Reduced liability</strong> with comprehensive video
                    evidence
                  </li>
                  <li>
                    <strong>Increased property value</strong> with advanced
                    security features
                  </li>
                  <li>
                    <strong>Peace of mind</strong> for residents and owners
                  </li>
                </ul>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-10 mb-6">
                Critical Security Areas for Residential Properties
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                  "Main Entrances & Lobbies",
                  "Parking Lots & Vehicle Gates",
                  "Elevators & Stairwells",
                  "Common Areas & Amenities",
                  "Perimeter & Landscape",
                  "Service & Delivery Areas",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                  >
                    <h3 className="font-medium text-blue-700">{item}</h3>
                  </div>
                ))}
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-10 mb-6">
                Residential Security Challenges & Solutions
              </h2>

              {/* Main Entrances */}
              <div className="mb-12">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                  1. Main Entrances & Lobby Security
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-medium text-red-600 mb-2">Challenges:</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Unauthorized building access</li>
                    <li>Tailgating through secured doors</li>
                    <li>Visitor verification difficulties</li>
                  </ul>
                  <h4 className="font-medium text-green-600 mb-2">
                    Our Solutions:
                  </h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Video intercom systems</strong> with facial
                      recognition
                    </li>
                    <li>
                      <strong>Anti-tailgating detection</strong> with AI
                      analytics
                    </li>
                    <li>
                      <strong>Mobile-based access</strong> for residents and
                      guests
                    </li>
                  </ul>
                </div>
              </div>

              {/* Parking Areas */}
              <div className="mb-12">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                  2. Parking Lot & Vehicle Security
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-medium text-red-600 mb-2">Challenges:</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Vehicle theft and vandalism</li>
                    <li>Unauthorized parking</li>
                    <li>Poor nighttime visibility</li>
                  </ul>
                  <h4 className="font-medium text-green-600 mb-2">
                    Our Solutions:
                  </h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>ANPR cameras</strong> for automatic license plate
                      recognition
                    </li>
                    <li>
                      <strong>360° panoramic cameras</strong> for complete
                      coverage
                    </li>
                    <li>
                      <strong>Smart lighting integration</strong> with motion
                      detection
                    </li>
                  </ul>
                </div>
              </div>

              {/* Elevators */}
              <div className="mb-12">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                  3. Elevator & Stairwell Security
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-medium text-red-600 mb-2">Challenges:</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Vandalism and misuse</li>
                    <li>Safety concerns in enclosed spaces</li>
                    <li>Limited camera angles</li>
                  </ul>
                  <h4 className="font-medium text-green-600 mb-2">
                    Our Solutions:
                  </h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Fisheye cameras</strong> for complete elevator
                      coverage
                    </li>
                    <li>
                      <strong>Emergency call buttons</strong> linked to security
                    </li>
                    <li>
                      <strong>Vandal-proof dome cameras</strong> in stairwells
                    </li>
                  </ul>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-blue-50 p-8 rounded-lg mt-12">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-6 text-center">
                  Why Property Managers Choose Our Security Solutions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Specialized in residential security for 10+ years",
                    "Custom solutions for each property's unique needs",
                    "Integration with existing building systems",
                    "24/7 professional monitoring available",
                    "Regular system maintenance & updates",
                    "Competitive pricing for HOAs & developers",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEO Keywords Section */}
              <div className="mt-12">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                  Our Residential Security Services:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Apartment Security Systems",
                    "CCTV Installation for Housing Societies",
                    "Gated Community Security Solutions",
                    "Real Estate Security Cameras",
                    "Smart Home Security Integration",
                    "Video Intercom Systems",
                    "Residential Access Control",
                    "Apartment Surveillance Cost",
                    "Best Security for Apartments",
                    "24/7 Property Monitoring",
                    "HOA Security Solutions",
                  ].map((keyword, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="w-full py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Secure Your Residential Property Today
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Get a free security assessment and consultation for your apartment
              complex or real estate development.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/contact-us")}
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-full text-lg"
            >
              GET FREE SECURITY ASSESSMENT
            </motion.button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className="lg:hidden w-full flex justify-center p-6">
          <DownSidebar items={sidebarItems} />
        </div>
      </div>
    </>
  );
};

export default SolutionsPage;
