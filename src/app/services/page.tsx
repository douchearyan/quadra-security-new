"use client";
import type { NextPage } from "next";
import { ReactNode, useEffect, useRef } from "react";
import ServiceSection from "@/components/ServiceSection";
import ContactForm from "@/components/ContactForm";
import { initLineAnimation } from "@/animations/lineAnimation";
import HeroBanner from "@/components/ui/hero-banner";
import {
  FaVideo,
  FaFingerprint,
  FaCar,
  FaPhone,
  FaChalkboardTeacher,
  FaDoorOpen,
  FaSuitcase,
  FaBell,
  FaSearch,
  FaShieldAlt,
  FaRoad,
  FaLock,
} from "react-icons/fa";
import Canonical from "@/utils/Canonical";
import Head from "next/head";
import Link from "next/link";

interface ServiceItem {
  serviceId : string;
  icon: ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  detailedContent?: string; // optional extended content if needed
}

const Services: NextPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  const services: ServiceItem[] = [
    {
      serviceId : "Cctv",
      icon: <FaVideo />,
      title: "CCTV & Surveillance",
      description:
        "We provides the best CCTV cameras for offices, shops, homses and outdoor surveillance. Our range includes wireless CCTV cameras, solar CCTV cameras, and branded options like Hikvision CCTV cameras and CP Plus CCTV cameras, ensuring 24/7 security coverage. We distribute certified CCTV cameras with flexible pricing and help customers choose the right solution for CCTV camera installation at any scale.",
      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296562/cctv_installation_and_surveillance_sit3ia.jpg",
    },
    {
      serviceId : "Biometric",
      icon: <FaFingerprint />,
      title: "Biometric Systems",
      description:
        "Quadra Security offers advanced biometric systems to ensure seamless and secure identity verification. We provide biometric attendance systems for schools, offices, and factories to enhance workforce management. Our biometric devices and solutions ensure precise access control at corporate buildings, hospitals, and government institutions. We supply top-rated biometric systems from leading brands and ensure smooth installation with expert support. Trust our solutions for secure and scalable identity access management.",
      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296918/biometric_gc80fv.webp",
    },
    {
      serviceId : "ANPR",
      icon: <FaCar />,
      title: "ANPR (Automatic Number Plate Recognition)",
      description:
        "Quadra Security installs high-quality ANPR cameras to automate number plate recognition for traffic management, parking lots, toll plazas, and residential societies. Whether you need ANPR systems for commercial security or public safety, our cutting-edge services ensures accurate vehicle tracking and monitoring. We supply and integrate branded ANPR camera solutions with expert deployment, ensuring compliance and performance across all environments.",

      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296559/ANPR-camera_n4y4i9.webp",
    },
    {
      serviceId : "EPABX",
      icon: <FaPhone />,
      title: "EPABX Systems",
      description:
        "We provides reliable EPABX systems for smooth internal communication across businesses, hospitals, hotels, and educational institutions. We provide EPABX machines that are ideal for enhancing productivity, streamlining operations, and connecting departments efficiently with secure voice channels. We offer a variety of EPABX systems tailored to your infrastructure, backed by technical assistance and seamless integration.",

      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296562/epabx_systems_zly2de.jpg",
    },
    {
      serviceId : "InteractiveDisplayPanels",
      icon: <FaChalkboardTeacher />,
      title: "Interactive Display Panels",
      description:
        "We offers high-performance interactive display panels and digital display panel solutions for corporate boardrooms, educational institutes, training centers, and conference hall. We provide displays that have stunning visuals and interactive functionality, ideal for smart learning and professional presentations. We source advanced interactive flat-panel displays from trusted brands, ensuring long-lasting performance and easy setup for your business or classroom.",

      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296568/interactive_panels_bndiiu.png",
    },
    {
      serviceId : "VideoDoorPhones",
      icon: <FaDoorOpen />,
      title: "Video Door Phones",
      description:
        "Enhance your property’s security with Quadra Security’s premium video door phones. We provide services of wireless video door phones and video door phone intercom systems ideal for residential buildings, villas, apartments, and corporate offices, ensuring safe visitor verification before access. We provide top-tier video door phones for home and offices with expert guidance on model selection, ensuring seamless installation and long-term performance.",

      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296562/video_door_phones_d65vqh.jpg",
    },
    {
      serviceId : "BaggageScanners",
      icon: <FaSuitcase />,
      title: "Baggage Scanners",
      description:
        "We provides advanced baggage scanners and x-ray baggage scanner machines for airports, metro stations, corporate offices, shopping malls, and hotels. baggage scanner machines detect prohibited items efficiently, ensuring complete security and safety at entry points. We supply high-performance x ray baggage scanners from certified manufacturers, ensuring reliable results and full support for integration and maintenance.",

      imageUrl: "/images/baggage-scanner.jpg",
    },
    {
      serviceId : "AlarmSystems",
      icon: <FaBell />,
      title: "Alarm Systems",
      description:
        "We supplies and installs high-quality home security alarm systems and fire alarm systems for homes, offices, shops, and warehouses. We offer reliable burglar alarm systems and alarm systems for apartments to ensure prompt alerts and complete protection against threats. We source and distribute branded alarm systems with quick response features, customizable alerts, and expert after-sales support.",

      imageUrl: "/images/security-alarms.jpg",
    },
    {
      serviceId : "MetalDetectors",
      icon: <FaSearch />,
      title: "Metal Detectors",
      description:
        "We deliver reliable metal detectors and metal detector machines designed for use in malls, hotels, public events, airports, and schools. gold metal detectors and metal detector sensors ensure the highest level of security screening for both public and private premises. As a supplier, we offer competitive metal detector prices and provide equipment that meets safety standards for high-traffic security zones",
      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296562/metal_detector_zczuoy.jpg",
    },
    {
      serviceId : "AccessControlSystems",
      icon: <FaShieldAlt />,
      title: "Access Control Systems",
      description:
        "We specializes in modern access control systems for door security at offices, residential complexes, educational institutes, and industrial facilities. From biometric door access control systems to RFID access control systems, we ensure authorized entry and seamless security management. As distributors, we provide scalable access control solutions for all property types, including door access control systems for office environments.",

      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296559/Access_Control_enl7ep.webp",
    },
    {
      serviceId : "BoomBarries",
      icon: <FaRoad />,
      title: "Boom Barriers & Toll Solutions",
      description:
        "We offers reliable boom barriers and automatic boom barriers for secured entry at gated communities, parking areas, corporate offices, and toll booths. We provide RFID boom barriers ensure smooth and automated vehicle access control. Our distributorship covers installation-ready boom barrier systems, supporting both residential and industrial access automation needs.",

      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296562/boom-barrier-banne_slefin.jpg",
    },
    {
      serviceId : "ElectronicDoorLocks",
      icon: <FaLock />,
      title: "Electronic Door Locks",
      description:
        "We installs smart electronic door locks and smart door locks for offices, hotels, and apartments. We provide best door locks to ensure enhanced safety with biometric, password, RFID, and remote unlocking features for modern security needs. As a distributor, we offer a wide range of door locks for home and commercial use, combining innovation, security, and ease of installation",

      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296561/Electronic-Door-Locks_x73dcl.webp",
    },
  ];

  useEffect(() => {
    if (pageRef.current) {
      initLineAnimation();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Our Services | Quadra Security</title>
        <meta
          name="description"
          content="Explore Quadra Security's advanced security solutions including CCTV installation, biometric systems, video door phones, and more."
        />
        <Canonical />
      </Head>

      <main
        className="w-full font-[family-name:var(--font-urbanist)]"
        ref={pageRef}
      >
        <HeroBanner title="Our Services" />

        <section className="max-w-6xl mx-auto px-5 py-10 font-sans text-gray-800">
          <article className="mb-12 max-w-4xl mx-auto px-4 md:px-0 prose prose-lg prose-blue prose-headings:text-[#00246C] prose-headings:font-extrabold prose-headings:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6">
            <h1 className="text-3xl md:text-4xl leading-tight mb-6">
              Quadra Security: Committed to Safeguarding Your Home, Business,
              and Community
            </h1>

            <p>
              Quadra Security is dedicated to delivering cutting-edge security
              systems designed for reliability, efficiency, and peace of mind.
              Serving Gurugram and nearby regions, we specialize in the design,
              installation, and maintenance of state-of-the-art security
              solutions tailored to your needs.
            </p>

            <p >
              We provide comprehensive security solutions for industrial,
              residential, and commercial properties to protect against
              unauthorized access, theft, and other threats. Whether you want to
              secure your business, apartment, or high-traffic area, we have you
              covered.
            </p>

            <blockquote  className="border-l-4 border-blue-500 pl-4 italic text-blue-500 mb-6">
              <p id="aboveCctv">Choosing Quadra Security means choosing peace of mind. We help you
              secure your assets and people while ensuring smooth day-to-day
              operations with our efficient and scalable access control systems
              for office or home use.</p>
            </blockquote>
          </article>

          {services.map((service, index) => (
            <ServiceSection
            serviceId={service.serviceId}
              key={index}
              icon={service.icon}
              title={service.title}
              imageUrl={service.imageUrl}
              description={
                service.description +
                (service.detailedContent ? " " + service.detailedContent : "")
              }
              index={index}
            />
          ))}
          <div className="max-w-4xl mt-16 mx-auto px-4 md:px-0 prose prose-lg prose-blue prose-headings:text-[#00246C] prose-headings:font-extrabold prose-headings:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6">
            <p>
              In addition to providing advanced security systems, we also share
              valuable tips and insights on enhancing safety at home and in the
              workplace. Visit our blog for the latest updates, expert advice,
              and industry best practices to stay informed and protected.
            </p>

            <p>
              <strong>
                Not sure which security solution is right for you?
              </strong>{" "}
              Our <Link href="/services-in-gurgaon">team</Link>  is here to help. Reach out for a free consultation or
              on-site assessment, and let us recommend a tailored solution that
              fits your unique needs.
            </p>
          </div>
          <div className="mt-16">
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
