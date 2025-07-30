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
        <title>Campus Security Solutions | Quadra Security</title>
        <meta
          name="description"
          content="Protect your educational institution with Quadra Security's comprehensive campus security solutions including AI monitoring, face recognition, GPS tracking, and more."
        />
        <Canonical/>
      </Head>
      <div className="bg-white font-[family-name:var(--font-urbanist)] text-gray-800 min-h-screen">
        <HeroBanner title="Campus Security Solutions" />

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
              src="https://res.cloudinary.com/dggsp8ihg/image/upload/v1748621342/solution_03_1_ltom4o.png"
              alt="Campus Security Solutions by Quadra Security"
              className="w-full rounded-lg mb-8 object-contain h-64 md:h-80"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />

            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Campus Security Solutions
              </h1>

              <p className="text-lg sm:text-xl text-gray-700 mb-8">
                Adopting Campus Security Solutions has become a basic duty for
                every educational institution as dangers to student safety keep
                changing. Whether it&apos;s a college or school, educational
                institutions must prioritize student safety and welfare. Given
                that students spend most of their day on campus, it&apos;s
                imperative to install modern campus surveillance systems.
              </p>

              <p className="text-lg sm:text-xl text-gray-700 mb-8">
                Institutions can provide a safe, secure, and well-managed
                learning environment by combining innovative technologies such
                as AI-based campus monitoring, face recognition for campus
                security, and GPS tracking for school and college buses. This
                all-encompassing strategy defends the physical campus and
                improves students&apos; academic concentration, giving parents
                and guardians peace of mind.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-4">
                  Key Areas to Secure in a Campus:
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Main Entrance & Exit",
                    "Perimeter Walls & Fences",
                    "Playgrounds & Outdoor Areas",
                    "Classroom Corridors & Stairways",
                    "Libraries, Labs & Private Zones",
                    "Dining Areas & Kitchens",
                    "Parking Lots",
                    "Dormitories (Hostels)",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                        <svg
                          className="w-4 h-4 text-blue-600"
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

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-10 mb-6">
                Challenges and Security Solutions by Area
              </h2>

              {/* Main Entrance */}
              <div className="mb-12">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                  1. Main Entrance & Exit
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-medium text-red-600 mb-2">Challenges:</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Unauthorized Access</li>
                    <li>Smuggling weapons</li>
                    <li>Entry of unknown people</li>
                  </ul>
                  <h4 className="font-medium text-green-600 mb-2">
                    Solutions:
                  </h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>License plate recognition IP cameras</strong> for
                      schools
                    </li>
                    <li>
                      <strong>Face recognition terminals</strong> for access
                      control
                    </li>
                    <li>
                      <strong>Emergency Panic Buttons</strong> for instant
                      response
                    </li>
                    <li>
                      <strong>Turnstile gates</strong> with card and biometric
                      access
                    </li>
                  </ul>
                </div>
              </div>

              {/* Campus Perimeter */}
              <div className="mb-12">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                  2. Campus Perimeter
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-medium text-red-600 mb-2">Challenges:</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Intruder infiltration during darkness</li>
                    <li>Blind spots and dead angles</li>
                    <li>Vandalism</li>
                  </ul>
                  <h4 className="font-medium text-green-600 mb-2">
                    Solutions:
                  </h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Thermal cameras</strong> to spot low-light
                      movement
                    </li>
                    <li>
                      <strong>AI-Based Intruder Detection</strong> using
                      AcuSense
                    </li>
                    <li>
                      <strong>PTZ cameras</strong> with 30x zoom to monitor
                      suspicious activity
                    </li>
                    <li>
                      <strong>Tripwire alerts</strong> and other video analysis
                      techniques
                    </li>
                  </ul>
                </div>
              </div>

              {/* Playgrounds */}
              <div className="mb-12">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                  3. Playgrounds & Open Spaces
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-medium text-red-600 mb-2">Challenges:</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Bullying and eve-teasing</li>
                    <li>Large crowd monitoring</li>
                    <li>Loitering outside during non-permitted hours</li>
                  </ul>
                  <h4 className="font-medium text-green-600 mb-2">
                    Solutions:
                  </h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>360-Degree Fisheye CCTV</strong> for complete area
                      view
                    </li>
                    <li>
                      <strong>Panoramic CCTV</strong> for high-detail coverage
                    </li>
                    <li>
                      <strong>Bullying Prevention</strong> with smart alert
                      systems
                    </li>
                    <li>
                      <strong>SOS buttons</strong> on emergency intercom poles
                    </li>
                  </ul>
                </div>
              </div>

              {/* Corridors & Classrooms */}
              <div className="mb-12">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                  4. Corridors, Labs & Classrooms
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-medium text-red-600 mb-2">Challenges:</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Misbehavior from students</li>
                    <li>Theft of school assets</li>
                    <li>Privacy violations</li>
                  </ul>
                  <h4 className="font-medium text-green-600 mb-2">
                    Solutions:
                  </h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>4K security cameras</strong> with audio I/O for
                      recording
                    </li>
                    <li>
                      <strong>Dome cameras</strong> covering lengthy passages
                    </li>
                    <li>
                      <strong>Automatic scream or violence detection</strong>{" "}
                      using audio analysis
                    </li>
                    <li>
                      <strong>Lock-controlled access</strong> to sensitive areas
                    </li>
                  </ul>
                </div>
              </div>

              {/* School Transport */}
              <div className="mb-12">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                  5. School Buses & Transport
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-medium text-red-600 mb-2">Challenges:</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Safety of traveling students</li>
                    <li>Unknown vehicle tracking</li>
                    <li>Driver misbehavior</li>
                  </ul>
                  <h4 className="font-medium text-green-600 mb-2">
                    Solutions:
                  </h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>School Bus Surveillance System</strong> covering
                      inside and outside
                    </li>
                    <li>
                      <strong>Mobile DVR</strong> with Wi-fi auto-download and
                      3G/4G
                    </li>
                    <li>
                      <strong>GPS tracking</strong> sharing real-time locations
                      to parents
                    </li>
                    <li>
                      <strong>Panic buttons</strong> and fuel sensors for
                      vehicle safety
                    </li>
                  </ul>
                </div>
              </div>

              {/* Advanced Technologies */}
              <div className="mb-12">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                  Advanced Technologies for Total Security
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "AI-Based Campus Monitoring for behavior recognition",
                    "Video Analytics for Student Safety – detect crowding, fights, falls",
                    "Smoking Detection in Schools Using AI to prevent fire hazards",
                    "Emergency Alarm Stations for Campuses – SOS-enabled for open spaces",
                    "Centralized Security Management for Schools with smart dashboards",
                    "Smart Wall for School Surveillance – live view with real-time alert integration",
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-blue-50 p-8 rounded-lg mt-12">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-6 text-center">
                  Why Choose Quadra Security?
                </h2>
                <p className="text-center text-gray-700 mb-6">
                  At Quadra Security, we don&apos;t just sell security cameras,
                  we deliver end-to-end smart security solutions designed to
                  prevent loss, protect you, and boost operational efficiency.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Campus Security Solutions",
                    "School Security Solutions",
                    "GPS Tracking for School Buses",
                    "School Bus Monitoring System",
                    "Campus Surveillance Systems",
                    "Face Recognition for School Safety",
                    "AI-Based Campus Monitoring",
                    "Real-Time School Bus Tracking",
                    "Centralized Security Management",
                    "Emergency Panic Buttons",
                    "Thermal Cameras",
                    "AI-Based Intruder Detection",
                    "Video Analytics for Safety",
                  ].map((keyword, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
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
              Secure Your Campus Today
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Get a free security assessment and consultation for your
              educational institution.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/contact-us")}
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-full text-lg"
            >
              GET FREE CAMPUS SECURITY ASSESSMENT
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
