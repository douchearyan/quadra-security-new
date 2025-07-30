"use client";
import Sidebar from "@/components/solutions/Sidebar";
import React from "react";
import { motion } from "framer-motion";
import HeroBanner from "@/components/ui/hero-banner";
import DownSidebar from "@/components/solutions/DownSidebar";
import Canonical from "@/utils/Canonical";
import Head from "next/head";

const SolutionsPage = () => {
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
        <title>Comprehensive Bank Security Solutions - Quadra Security</title>
        <meta
          name="description"
          content="Bank Security solutions by Quadra Security offering CCTV, biometric access, 24/7 monitoring & more."
        />
        <Canonical />
      </Head>
      <div className="bg-white font-[family-name:var(--font-urbanist)] text-gray-800 min-h-screen">
        {/* Header Banner Section */}
        <HeroBanner title="Comprehensive Bank Security Solutions" />

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Sidebar */}
          <motion.div
               className="hidden md:block w-full md:w-1/4 lg:w-2/6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Sidebar items={sidebarItems} />
          </motion.div>

          {/* Main content */}
          <motion.div
             className="w-full md:w-3/4 lg:w-4/5 bg-white rounded-lg p-4 md:p-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.img
              src="https://images.pexels.com/photos/29799518/pexels-photo-29799518.jpeg"
              alt="Bank Security Solutions by Quadra Security"
              className="w-full rounded-lg mb-8 object-cover h-64 md:h-80"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />

            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Security Solutions for Banks: Comprehensive Protection by Quadra
                Security
              </h1>

              <p className="text-lg sm:text-xl text-gray-700 mb-8">
                Banking Security Solutions have to go beyond basic surveillance
                to handle the complexity of current financial environments.
                Every tier of a bank&apos;s network—from branches and ATMs to
                cash vaults and data centers—requires cutting-edge security
                systems that are proactive, dependable, and compliant.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-4">
                  With decades of experience in the BFSI industry, Quadra
                  Security provides:
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    Multi-layered security integrating cutting-edge technology
                  </li>
                  <li>
                    Regulatory compliance solutions for financial institutions
                  </li>
                  <li>End-to-end protection that builds customer trust</li>
                  <li>24/7 monitoring with real-time threat detection</li>
                </ul>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-10 mb-6">
                Key Areas Requiring Security in Banks
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                  "Bank Branches (Lobby, Counters, Entrances)",
                  "ATMs (Standalone and Onsite)",
                  "Vaults & Lockers",
                  "Server Rooms & Data Centers",
                  "Perimeter & Parking Areas",
                  "Employee Areas (Breakrooms, Office Zones)",
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
                Comprehensive Bank Security Solutions
              </h2>

              {/* Bank Branches */}
              <div className="mb-12">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                  1. Bank Branches Security
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-medium text-red-600 mb-2">Challenges:</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Unauthorized after-hours access</li>
                    <li>Customer conflicts or false claims</li>
                    <li>Counter theft or robbery attempts</li>
                  </ul>
                  <h4 className="font-medium text-green-600 mb-2">
                    Quadra Solutions:
                  </h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>AI-powered CCTV surveillance</strong> with
                      intelligent incident detection
                    </li>
                    <li>
                      <strong>Biometric access control systems</strong> to
                      prevent unauthorized entry
                    </li>
                    <li>
                      <strong>Advanced video analytics</strong> to monitor
                      suspicious behavior in real-time
                    </li>
                  </ul>
                </div>
              </div>

              {/* ATMs */}
              <div className="mb-12">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                  2. ATM Security Solutions
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-medium text-red-600 mb-2">Challenges:</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>ATM skimming and vandalism</li>
                    <li>Card fraud and false transaction claims</li>
                    <li>Poor nighttime visibility</li>
                  </ul>
                  <h4 className="font-medium text-green-600 mb-2">
                    Quadra Solutions:
                  </h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Vandal-proof ATM surveillance cameras</strong>{" "}
                      with 360° coverage
                    </li>
                    <li>
                      <strong>Panic button systems</strong> linked to central
                      monitoring
                    </li>
                    <li>
                      <strong>Real-time skimming detection technology</strong>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Vaults & Lockers */}
              <div className="mb-12">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                  3. Vault & Locker Security
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-medium text-red-600 mb-2">Challenges:</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Internal security threats</li>
                    <li>Target for organized crime</li>
                    <li>Lack of real-time monitoring</li>
                  </ul>
                  <h4 className="font-medium text-green-600 mb-2">
                    Quadra Solutions:
                  </h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Glass break and vibration sensors</strong> for
                      tamper detection
                    </li>
                    <li>
                      <strong>Two-way audio systems</strong> for instant
                      communication
                    </li>
                    <li>
                      <strong>Unified security platform</strong> integrating all
                      access controls
                    </li>
                  </ul>
                </div>
              </div>

              {/* Why Choose Quadra Security */}
              <div className="bg-blue-50 p-8 rounded-lg mt-12">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-6 text-center">
                  Why Choose Quadra Security for Your Bank?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Banking security specialists with 15+ years experience",
                    "Regulatory compliance expertise (RBI, PCI DSS)",
                    "End-to-end solutions from installation to monitoring",
                    "24/7 support with rapid response teams",
                    "Custom solutions tailored to each bank's needs",
                    "Future-proof technology with regular upgrades",
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
                  Our Comprehensive Bank Security Services:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Bank Security Solutions India",
                    "ATM Surveillance System",
                    "Biometric Access Control for Banks",
                    "CCTV Camera Installation for Banks",
                    "Bank Cybersecurity Solutions",
                    "Facial Recognition for Banks",
                    "Bank Security Audit Services",
                    "Best Banking Security Providers",
                    "Bank Surveillance System Cost",
                    "Real-Time Transaction Monitoring",
                    "BFSI Security Solutions",
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
              Secure Your Financial Institution Today
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Contact our bank security specialists for a free consultation and
              security assessment of your premises.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-full text-lg"
            >
              GET FREE SECURITY CONSULTATION
            </motion.button>
          </div>
          {/* Mobile Sidebar */}
          <div className="lg:hidden w-full flex justify-center p-6">
            <DownSidebar items={sidebarItems} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsPage;
