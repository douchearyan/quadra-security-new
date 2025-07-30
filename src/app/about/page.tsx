"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import HeroBanner from "@/components/ui/hero-banner";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaShieldAlt, FaDesktop, FaBrain, FaCheck } from "react-icons/fa";
import Canonical from "@/utils/Canonical";;
import ConsultationForm from "@/components/blog/ConsultationForm";
import  Link  from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs: React.FC = () => {
  const router = useRouter();
  const handleContactUs = () => {
    router.push("/contact-us");
  };

  return (
    <>
      <Head>
        <title>About Us | Quadra Security</title>
        <meta
          name="description"
          content="Learn about Quadra Security – your trusted partner in home and commercial surveillance, offering innovative and reliable security solutions in Gurugram."
        />
        <Canonical />
      </Head>

      <motion.div
        className="flex flex-col min-h-screen font-[family-name:var(--font-urbanist)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Head>
          <title>About Us | Quadra Security</title>
          <meta
            name="description"
            content="About Quadra Security - Guarding homes & businesses with innovation"
          />
        </Head>

        {/* Header Banner Section */}
        <HeroBanner title="About Us" />

        {/* Main Content Section */}
        <main className="flex-grow">
          <motion.section
            className="py-10 px-6 grid md:grid-cols-2 gap-8 items-center md:ml-20"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                About Quadra Security
              </h2>
              <h3 className="text-3xl font-bold text-indigo-800 mb-4">
                Security . Surveillance . Safety . Support .
              </h3>
              <p className="text-gray-600 mb-6">
                At <strong>Quadra Security</strong>, we believe true peace of
                mind comes from knowing your world is protected - not just by
                systems but by people who care . As a leading{" "}
                <strong>security <Link href="/services-in-gurgaon">provider in Gurugram</Link> </strong>, our
                mission is to protect your homes, offices, retail spaces, and
                commercial properties with smart, reliable, and customized{" "}
                <strong>security solutions</strong>. Whether you&apos;re looking
                for the <strong>best home security systems</strong> or
                professional <strong>business surveillance</strong>, our
                commitment is to safeguard what matters most to you using the
                latest in <strong>CCTV camera systems</strong> and advanced
                monitoring technology.
              </p>
              <p className="text-gray-600 mb-6">
                Our strength lies in our four core pillars:
              </p>
              <ul className="text-gray-600 mb-6 list-disc pl-6">
                <li>
                  <strong>Security</strong> – We deploy robust protection using{" "}
                  <strong>high-definition CCTV cameras</strong>,{" "}
                  <strong>wireless home security cameras</strong>, and smart
                  alarm systems, ensuring 24/7 surveillance of every critical
                  zone.
                </li>
                <li>
                  <strong>Surveillance</strong> – With{" "}
                  <strong>remote access CCTV monitoring</strong>,{" "}
                  <strong>night vision cameras</strong>, and mobile-enabled
                  systems, you stay connected to your space from anywhere,
                  anytime.
                </li>
                <li>
                  <strong>Safety</strong> – We design and install intelligent{" "}
                  <strong>home alarm systems</strong> and{" "}
                  <strong>intrusion detection systems</strong> to deter, detect,
                  and prevent threats in real-time, enhancing your
                  environment&apos;s safety.
                </li>
                <li>
                  <strong>Support</strong> – From consultation to{" "}
                  <strong>CCTV installation</strong>,{" "}
                  <strong>system upgrades</strong>, or{" "}
                  <strong>CCTV camera repair</strong>, our dedicated support
                  team ensures seamless service and guidance — before, during,
                  and after installation.
                </li>
              </ul>
              <p className="text-gray-600 mb-6">
                Choose <strong>Quadra Security</strong> — your trusted partner
                for <strong>home security cameras</strong>,{" "}
                <strong>commercial surveillance systems</strong>, and expert{" "}
                <strong>security services in Gurugram</strong>. With our blend of
                technology, strategy, and genuine care, we protect what you
                value most.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { text: "Advanced & Trusted Protection", Icon: FaShieldAlt },
                  { text: "Innovative Remote Monitoring", Icon: FaDesktop },
                  { text: "Smart AI Integration", Icon: FaBrain },
                  { text: "100% Commitment", Icon: FaCheck },
                ].map(({ text, Icon }, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start"
                    variants={fadeInUp}
                  >
                    <Icon className="text-indigo-600 mr-2 mt-1" />
                    <span className="text-gray-700">{text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={handleContactUs}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-md"
              >
                Contact Us
              </motion.button>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-2">
                <Image
                  src="/images/grid.png"
                  alt="Security"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
                <Image
                  src="/images/security-technician.png"
                  alt="Security"
                  width={231}
                  height={50}
                  className="rounded-lg"
                />
              </div>
            </motion.div>
          </motion.section>

          {/* WHAT WE OFFER Section */}
          <motion.section
            className="bg-indigo-900 text-white py-12 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.h2
              className="text-2xl font-bold mb-8 text-center"
              variants={fadeInUp}
            >
              WHAT WE OFFER
            </motion.h2>
            <motion.p
              className="text-center max-w-3xl mx-auto mb-12"
              variants={fadeInUp}
            >
              From <strong>high-definition CCTV cameras</strong> with night
              vision and remote monitoring, to complete{" "}
              <strong>customized security solutions</strong>
              for offices, retail shops, warehouses, homes, factories, and
              institutions — we deliver systems tailored to your space, needs,
              and budget. Our offerings also include{" "}
              <strong>AMC services</strong>, system upgrades,
              <strong>professional CCTV installation</strong>, cabling, and
              continuous support to ensure your security system is always
              active.
            </motion.p>

            <motion.h2
              className="text-2xl font-bold mb-8 text-center"
              variants={fadeInUp}
            >
              WHY CHOOSE US
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                [
                  "Customized Quotation",
                  "We deliver affordable CCTV installation packages tailored to each client’s needs — whether it’s a home security camera setup or a full-scale factory surveillance system.",
                ],
                [
                  "Free Consultation & Site Visit",
                  "Our experts offer free site surveys and consultations to determine the most effective CCTV solutions — including services in Gurugram, DLF Phase 1, and more.",
                ],
                [
                  "Transparent Pricing",
                  "Enjoy affordable and upfront CCTV installation pricing with no hidden charges — just fair rates for the best-in-class security camera setup.",
                ],
                [
                  "Skilled Technicians",
                  "Our certified technicians specialize in home, office, retail, and maid monitoring camera installations, ensuring efficient and professional service.",
                ],
                [
                  "Tailored Security Systems",
                  "We design fully personalized security solutions using the latest outdoor cameras, indoor cameras, and PTZ camera setups for maximum coverage.",
                ],
                [
                  "24/7 Customer Support",
                  "Our support team offers around-the-clock assistance — from troubleshooting and maintenance to technical help and local CCTV repair services.",
                ],
                [
                  "Advanced Equipment",
                  "We deploy state-of-the-art IP cameras, 4K CCTV setups, motion detection systems, and mobile-access surveillance to enhance your protection.",
                ],
              ].map(([title, desc], i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center text-center"
                  variants={fadeInUp}
                >
                  <div className="bg-indigo-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="font-bold text-xl">{`0${i + 1}`}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p>{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section
            className="py-12 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
              {(
                [
                  {
                    Icon: FaShieldAlt,
                    title: "Trusted Protection",
                    desc: "Reliable security systems you can count on",
                  },
                  {
                    Icon: FaDesktop,
                    title: "24/7 Monitoring",
                    desc: "Round-the-clock surveillance for complete peace of mind",
                  },
                  {
                    Icon: FaBrain,
                    title: "Smart Integration",
                    desc: "Seamlessly connect with your existing smart home systems",
                  },
                  {
                    Icon: FaCheck,
                    title: "100% Commitment",
                    desc: "Dedicated service from start to finish",
                  },
                ] as const
              ).map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center"
                  variants={fadeInUp}
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-indigo-900 text-2xl" />
                  </div>
                  <h3 className="font-bold mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Expert Security Section */}
          <motion.section
            className="py-12 px-6 bg-indigo-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center md:items-start">
                  <Image
                    src="/images/security-monitoring.png"
                    alt="Security Monitoring Center"
                    width={270}
                    height={400}
                    className="object-cover rounded-md m-3 mt-[-19px] md:ml-[100px]"
                  />
                  <Image
                    src="/images/security-monitoring.png"
                    alt="Security Monitoring Center"
                    width={270}
                    height={400}
                    className="object-cover rounded-md hidden md:block m-3 md:ml-[100px]"
                  />
                </div>
              </motion.div>

              <motion.div
                className="md:ml-[-160px]"
                variants={fadeInUp}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Our Expert Security
                </h2>
                <p className="text-white mb-8">
                  At Quadra Security, our mission is simple — to safeguard your
                  world through
                  <strong> innovation</strong>, <strong>integrity</strong>, and
                  <strong> intelligent security systems</strong>. Whether
                  you&apos;re protecting a high-traffic business, school campus,
                  or an entire building with a complete CCTV camera system, we
                  deliver tailored solutions that provide not just protection —
                  but confidence and peace of mind.
                </p>

                <p className="text-white mb-8">
                  We employ only the most qualified security professionals to
                  design, install, and monitor our advanced security systems.
                  Our team stays updated with the latest industry developments
                  to provide{" "}
                  <strong>
                    cutting-edge surveillance and safety solutions
                  </strong>
                  .
                </p>

                <h3 className="text-xl font-bold text-white mb-4">
                  Our Values
                </h3>
                <ul className="text-white mb-8 list-disc pl-5 space-y-2">
                  <li>
                    <strong>Integrity:</strong> Transparent communication,
                    honest dealings, and trust are the foundations of our
                    service.
                  </li>
                  <li>
                    <strong>Innovation:</strong> We leverage smart technology to
                    deliver reliable and adaptive security solutions.
                  </li>
                  <li>
                    <strong>Customer Centricity:</strong> Your safety and
                    satisfaction are always our top priority.
                  </li>
                  <li>
                    <strong>Excellence:</strong> We aim to exceed industry
                    standards through superior service, advanced systems, and
                    expert support.
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-4">
                  Connect with Us
                </h3>
                <p className="text-white mb-4">
                  Join the Quadra Security family and experience{" "}
                  <strong>complete peace of mind</strong>. Whether you&apos;re
                  exploring options for
                  <strong>retail security cameras</strong>,{" "}
                  <strong>business CCTV systems</strong>, or the
                  <strong>best home security cameras</strong> and{" "}
                  <strong>outdoor surveillance systems</strong>, our experts are
                  ready to guide you every step of the way.
                </p>
                <p className="text-white">
                  <strong>Quadra Security</strong> – Because your safety
                  deserves more than just surveillance. It deserves unwavering
                  support with the <strong>best home security systems</strong>.
                </p>

                <div className="space-y-4">
                  {[
                    ["Response Time", "95%"],
                    ["Monitoring", "100%"],
                    ["Support", "90%"],
                  ].map(([label, value], i) => (
                    <div key={i}>
                      <h4 className="font-bold mb-2 text-white">{label}</h4>
                      <div className="w-full bg-gray-300 rounded-full h-2">
                        <motion.div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: value }}
                          initial={{ width: 0 }}
                          whileInView={{ width: value }}
                          transition={{ duration: 0.6 }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>
        </main>
      </motion.div>
      <div className="flex flex-col items-center justify-center m-5">
        <h1 className="m-4 font-bold text-4xl text-indigo-600">Contact Us</h1>
        <ConsultationForm  />
      </div>
    </>
  );
};

export default AboutUs;
