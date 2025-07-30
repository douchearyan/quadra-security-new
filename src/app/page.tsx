"use client";
import { motion } from "framer-motion";
import SiteVisitForm from "@/components/home/Form";
import FancyButton from "@/components/home/FancyButton";
import ServiceCarousel from "@/components/home/ServiceCarousel";
import SolutionsCarousel from "@/components/home/SolutionsCrousel";
import BrandsCarousel from "@/components/home/BrandsCarousel";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import { useRouter } from "next/navigation";
import Chatbot from "@/components/Chatbot";
import Canonical from "@/utils/Canonical";
import Head from "next/head";
import  Link  from "next/link";

export default function Home() {
  const router = useRouter();
  const handleConsultationClick = () => {
    router.push("/contact-us");
  };

  return (
    <>
      <Head>
        <title>
          CCTV Installation in Gurugram | CCTV Cameras & Security Services
        </title>
        <meta
          name="description"
          content="Quadra Security offers expert CCTV installation in Gurugram, high-quality CCTV cameras, and complete security services for homes, offices, and commercial spaces."
        />
        <Canonical />
      </Head>

      <div className="font-[family-name:var(--font-urbanist)]">
        {/* Section 1 - Hero */}
        <section className="-mb-px min-h-screen md:h-screen bg-gradient-to-b from-[#0D053F] to-[#210fc8] md:flex justify-evenly items-center pt-20 md:pt-0">
          <div className="flex flex-col justify-center md:justify-start md:space-y-10 space-y-4 py-10 md:py-0">
            <div className="md:space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
              >
                <h1 className="md:hidden text-white text-center text-xl font-semibold px-4">
                  Your Trusted Partner for CCTV, Biometric & Security Systems in Gurugram
                </h1>
                <h1 className="hidden md:block text-white lg:text-5xl font-semibold">
                  Complete Security Solutions for Your <br /> Home & Office in
                  <span className="ml-2 font-bold text-yellow-500">
                    Gurugram
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <h2 className="md:hidden text-white text-lg text-center px-4">
                  CCTV, Biometric Systems, Video Door Phones <br /> and More —
                  Installed by Experts
                </h2>
                <h2 className="hidden md:block text-white text-3xl">
                  Professional CCTV & Biometric Installation <br /> with Free
                  Site Visit in Gurugram
                </h2>
              </motion.div>
            </div>

            <motion.div
              className="flex w-full justify-center items-center md:w-auto md:block md:justify-start md:items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <FancyButton
                className="py-2 md:py-4 px-8 md:px-10"
                onClick={handleConsultationClick}
              >
                Book Your Free Consultation
              </FancyButton>
            </motion.div>
          </div>

          <div className="w-full md:w-auto flex justify-center pb-10 md:pb-0">
            <SiteVisitForm />
          </div>
        </section>

        {/* Section 2 - Solutions */}
        <section className="-mb-px min-h-screen w-full bg-gradient-to-b from-[#210fc8] via-[#4f178a] to-[#310f6a] flex flex-col items-center md:py-0">
          <motion.div className="space-y-4 md:w-1/2 w-full px-4 md:px-0">
            <h2 className="text-white md:text-4xl text-2xl text-center md:text-start">
              What We Offer
            </h2>
            <h1 className="text-yellow-500 md:text-5xl text-3xl font-semibold text-center md:text-start">
              Smart & Reliable Security Solutions
            </h1>
            <p className="text-white text-center md:text-start">
              From advanced CCTV camera setups and biometric attendance systems
              to video door phones and access control — we provide reliable,
              scalable, and future-ready solutions for homes, businesses, and
              institutions.
            </p>
          </motion.div>
          <div className="flex justify-center w-full px-4 md:px-0">
            <SolutionsCarousel />
          </div>
        </section>

        {/* Section 3 - Services */}
        <section className="-mb-px min-h-screen w-full bg-gradient-to-b from-[#310f6a]  via-[#4821a3] to-[#5423e6] flex flex-col justify-center items-center md:py-0">
          <motion.div className="space-y-4 md:w-1/2 w-full px-4 md:px-0">
            <h2 className="text-white md:text-4xl text-2xl text-center md:text-start">
              Explore Our Services
            </h2>
            <h1 className="text-yellow-500 md:text-5xl text-3xl font-semibold text-center md:text-start">
              End-to-End Installation & Support
            </h1>
            <p className="text-white text-center md:text-start">
              We handle everything — from product recommendation and planning to
              installation, repair, and ongoing maintenance. Get peace of mind
              with Quadra Security’s trusted services in <Link href="/services-in-gurgaon"></Link> Gurugram.
            </p>
          </motion.div>
          <div className="flex justify-center w-full px-4 md:px-0">
            <ServiceCarousel />
          </div>
        </section>

        {/* Brands Section */}
        <section className="-mb-px w-full bg-gradient-to-b from-[#5423e6] via-[#370d99] to-[#500a89]  flex flex-col justify-evenly items-center py-10 md:py-0">
          <BrandsCarousel />
        </section>

        {/* Why Choose Us */}
        <section className="-mb-px bg-gradient-to-b from-[#500a89]  via-[#2e023a] to-[#2a0456] w-full text-white flex justify-center items-center md:py-20">
          <WhyChooseUs />
        </section>

        {/* Testimonials */}
        <section
          className="-mb-px text-white h-screen w-full py-20 px-4 flex justify-center md:justify-start md:items-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/home/bg_img.png')" }}
        >
          <Testimonials />
        </section>

        <Chatbot />
      </div>
    </>
  );
}
