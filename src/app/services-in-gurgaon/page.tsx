// app/cctv-camera-installation-gurgaon/page.jsx
import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "CCTV Camera Installation Gurgaon | CCTV Dealers | Quadra Security",
  description:
    "Quadra Security offers professional CCTV camera installation in Gurgaon. Authorized dealers for Hikvision, CP Plus & Dahua. Covering all sectors & nearby cities with fast service & expert consultation.",
  keywords: [
    "CCTV camera installation Gurgaon",
    "CCTV installation near me",
    "CCTV camera near me",
    "CCTV repair near me",
    "CCTV dealers in Gurgaon",
    "Hikvision CCTV camera",
    "CP Plus CCTV camera",
    "Dahua CCTV camera",
    "CCTV security system Gurgaon",
    "CCTV camera for home",
    "CCTV camera shop near me",
    "CCTV service provider near me",
    "CCTV installer near me",
    "CCTV shop near me",
    "Outdoor CCTV camera",
    "Indoor CCTV camera",
    "Night vision CCTV camera",
    "CCTV installation DLF Phase 1/2/3",
    "CCTV camera dealer Sohna Road",
    "CCTV supplier Cyber City",
    "CCTV in Gurgaon",
    "CCTV Camera in Gurgaon",
    "CCTV Camera Dealer in Gurgaon",
    "CCTV Camera Dealers in Gurgaon",
    "CCTV Dealer in Gurgaon",
    "CCTV Dealers in Gurgaon",
    "CCTV Camera Supplier in Gurgaon",
    "CCTV Camera Suppliers in Gurgaon",
    "CCTV Suppliers in Gurgaon",
    "CCTV Distributor in Gurgaon",
    "CCTV Camera Distributor in Gurgaon",
    "CCTV Camera Service Provider",
    "CCTV Camera Installation",
    "CCTV Camera Price List",
    "CCTV Camera Provider",
    "CCTV Camera Shop in Gurgaon",
    "CCTV Camera Company in Gurgaon",
    "CCTV Camera for Home in Gurgaon",
    "CCTV Camera for Office in Gurgaon",
    "CCTV Camera for Factory in Gurgaon",
    "CCTV Camera Online in Gurgaon",
    "CCTV Camera System in Gurgaon",
    "Hikvision Dealers in Gurgaon",
    "Hikvision CCTV in Gurgaon",
    "Hikvision CCTV Camera Dealer in Gurgaon",
    "Hikvision Distributor in Gurgaon",
    "Hikvision Gurgaon",
    "Hikvision Camera Dealer in Gurgaon",
    "Hikvision Camera Price in Gurgaon",
    "Hikvision Camera Price List in Gurgaon",
    "Hikvision CCTV Camera Suppliers in Gurgaon",
    "CCTV Camera in Manesar",
    "CCTV Camera in Bhiwadi",
    "CCTV Camera in Faridabad",
    "CCTV Camera in Neemrana",
    "CCTV Dealer in Faridabad",
    "CCTV Camera in Bawal",
    "CCTV Camera in Udyog Vihar",
    "CCTV Camera in Delhi",
    "CCTV Camera in Dharuhera",
    "CCTV Camera in Rewari",
    "DLF Phase 1",
    "DLF Phase 2",
    "DLF Phase 3",
    "DLF Phase 4",
    "DLF Phase 5",
    "New Palam Vihar",
    "Ashok Vihar Phase II",
    "Ashok Vihar Phase III",
    "Bhondsi",
    "Civil Lines",
    "Dwarka Expressway",
    "Golf Course Extn",
    "Golf Course Road",
    "Gurgaon-Faridabad Road",
    "Gwal Pahari",
    "Khandsa Road",
    "Manesar",
    "MG Road",
    "New Gurgaon",
    "NH 8",
    "Palam Vihar",
    "Palam Vihar Extension",
    "Pataudi",
    "Patel Nagar",
    "Sector-1",
    "Sector-2",
    "Sector-3",
    "Sector-3 A",
    "Sector-4",
    "Sector-5",
    "Sector-10",
    "Sector-10 A",
    "Sector-11",
    "Sector-12",
    "Sector-12 A",
    "Sector-13",
    "Sector-14",
    "Sector-15",
    "Sector-16",
    "Sector-17",
    "Sector-18",
    "Sector-19",
    "Sector-20",
    "Sector-21",
    "Sector-22",
    "Sector-23",
    "Sector-23 A",
    "Sector-24",
    "Sector-24 A",
    "Sector-25",
    "Sector-26",
    "Sector-27",
    "Sector-28",
    "Sector-29",
    "Sector-30",
    "Sector-31",
    "Sector-32",
    "Sector-33",
    "Sector-34",
    "Sector-35",
    "Sector-36",
    "Sector-37",
    "Sector-37 A",
    "Sector-37 B",
    "Sector-37 C",
    "Sector-37 D",
    "Sector-38",
    "Sector-39",
    "Sector-40",
    "Sector-41",
    "Sector-42",
    "Sector-43",
    "Sector-44",
    "Sector-45",
    "Sector-46",
    "Sector-47",
    "Sector-48",
    "Sector-49",
    "Sector-50",
    "Sector-51",
    "Sector-52",
    "Sector-53",
    "Sector-54",
    "Sector-55",
    "Sector-56",
    "Sector-94",
    "Sector-95",
    "Sector-100",
    "Sector-101",
    "Sector-102",
    "Sector-103",
    "Sector-103A",
    "Sector-104",
    "Sector-105",
    "Sector-106",
    "Sector-107",
    "Sector-108",
    "Sector-109",
    "Sector-110",
    "Sector-110 A",
    "Sector-111",
    "Sector-112",
    "Sector-113",
    "Sector-114",
    "Sector-116",
    "Sohna",
    "Sohna Road",
    "South City",
    "Sikanderpur",
    "Sushant Lok Phase 1",
    "Sushant Lok Phase 2",
    "Sushant Lok Phase 3",
  ],
};

export default function CCTVInstallationGurgaon() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Quadra Security",
    image: "https://www.quadrasecurity.com/images/logo.jpg",
    description: "Professional CCTV camera installation services in Gurgaon",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      postalCode: "122001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.4595",
      longitude: "77.0266",
    },
    url: "https://www.quadrasecurity.com/cctv-camera-installation-gurgaon",
    telephone: "+911234567890",
    openingHours: "Mo,Tu,We,Th,Fr,Sa 09:00-18:00",
    priceRange: "₹₹",
    sameAs: [
      "https://www.facebook.com/quadrasecurity",
      "https://www.instagram.com/quadrasecurity",
    ],
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>

      <main className="bg-gray-50 font-[family-name:var(--font-urbanist)]">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white md:py-28 p-10 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional CCTV Installation in Gurgaon
            </h1>
            <p className="text-xl mb-8">
              CP Plus, Hikvision & Dahua Dealers | 24/7 Support
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact-us"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-lg text-center transition duration-300"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* New service section */}
        <section className="py-16 bg-gray-50 text-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
              Services Provided by Quadra Security
            </h2>
            <p className="mb-4">
              At Quadra Security, we are proud to be the most
              trusted name when it comes to{" "}
              CCTV Distributor in Gurgaon, offering an
              unmatched range of CCTV Camera Systems, surveillance technologies,
              and end-to-end security solutions.
            </p>
            <p className="mb-4">
              Our services are designed to cater to the ever-evolving needs of
              urban societies, commercial businesses, and industrial setups.
              Whether you are looking for{" "}
              CCTV installation near me for a small residence
              or a complete{" "}
              CCTV camera security system in Gurgaon for a
              large commercial project, our expert team delivers quality
              products, professional consultations, and reliable post-sales
              service.
            </p>
            <p>
              We work closely with our clients to understand their specific
              security concerns and provide them with customized surveillance
              systems backed by the latest technologies.
            </p>
          </div>
        </section>

        {/* Comprehensive solution section */}
        <section className="py-16 bg-white text-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
              Comprehensive CCTV Solutions in Gurgaon
            </h2>
            <p className="mb-4">
              At Quadra Security, we specialize in
              full-spectrum CCTV camera installation in Gurgaon
              , ranging from basic home setups to complex multi-site industrial
              surveillance. We offer both wired CCTV cameras{" "}
              known for their reliability and{" "}
              wireless CCTV cameras for flexible installation
              and remote access.
            </p>
            <p className="mb-4">Our diverse product catalog includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Outdoor CCTV camera systems with weatherproof
                casings and wide-angle lenses
              </li>
              <li>
                Indoor CCTV camera setups designed for discreet
                surveillance
              </li>
              <li>
                Night vision CCTV camera models equipped with
                infrared sensors for 24/7 protection
              </li>
              <li>
                CCTV camera for home security with mobile
                viewing features
              </li>
              <li>
                CCTV camera for office premises with motion
                detection and cloud backup
              </li>
              <li>
                CCTV camera for factory spaces with rugged
                build and AI alerting systems
              </li>
              <li>
                CCTV camera system in Gurgaon suitable for all
                property types — from apartments to business parks
              </li>
            </ul>
            <p className="mt-6">
              As a dedicated CCTV service provider near me, we
              serve across Gurgaon’s prime areas, including{" "}
              DLF Phase 1/2/3,{" "}
              Golf Course Road, Cyber City,{" "}
              Sohna Road, and Manesar,
              ensuring each client receives local expertise and prompt on-site
              service.
            </p>
          </div>
        </section>

        {/* top brands */}
        <section className="py-16 bg-gray-50 text-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
              Top Brands – Wide Availability
            </h2>
            <p className="mb-4">
              Recognized as a leading{" "}
              CCTV Camera Dealer in Gurgaon, Quadra Security
              proudly offers surveillance systems from the most reliable and
              reputed global brands. Our partnerships with top manufacturers
              allow us to deliver high-performance solutions with guaranteed
              authenticity.
            </p>
            <p className="mb-4">We provide:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Genuine Hikvision CCTV camera systems for both
                home and enterprise applications
              </li>
              <li>
                Advanced CP Plus CCTV camera options featuring
                smart video analytics
              </li>
              <li>
                Robust Dahua CCTV camera installations for
                industry-grade surveillance requirements
              </li>
            </ul>
            <p className="mt-6">
              As an authorized Hikvision Dealer in Gurgaon and
              official Hikvision Distributor in Gurgaon, we
              ensure:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Direct-to-customer pricing</li>
              <li>Factory warranty on all purchases</li>
              <li>Original firmware and software updates</li>
            </ul>
            <p className="mt-6">
              Whether youre comparing{" "}
              Hikvision Camera Price in Gurgaon or need the
              latest Hikvision Camera Price List in Gurgaon,
              Quadra Security is your one-stop solution — backed by certified
              professionals, expert recommendations, and local support.
            </p>
          </div>
        </section>

        {/* Local search experts section */}
        <section className="py-16 bg-white text-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
              Local Search Experts – Always Near You
            </h2>
            <p className="mb-4">
              Are you searching for CCTV camera near me,{" "}
              CCTV camera shop near me,{" "}
              CCTV repair near me, or{" "}
              CCTV installer near me? Your search ends here!
            </p>
            <p className="mb-4">
              At Quadra Security, we take pride in being your
              trusted, local security solution provider in Gurgaon. We serve as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                A premium CCTV Camera Shop in Gurgaon
              </li>
              <li>
                A reliable CCTV Camera Company in Gurgaon
              </li>
              <li>
                An experienced CCTV Camera Provider with quick
                turnarounds
              </li>
              <li>
                Trusted CCTV Camera Suppliers in Gurgaon and
                verified CCTV Dealers in Gurgaon
              </li>
              <li>
                A leading CCTV Camera Distributor in Gurgaon{" "}
                with direct sourcing and bulk availability
              </li>
            </ul>
            <p className="mt-6">
              Our team is locally based, well-trained, and equipped to respond
              quickly to installation and maintenance requests — ensuring
              minimal downtime and maximum protection for your home or business.
            </p>
          </div>
        </section>

        {/* About Section for SEO */}
        <section className="py-16 bg-white text-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Services Provided by Quadra Security in Gurgaon
            </h2>
            <p className="mb-4">
              At Quadra Security, we are the most trusted{" "}
              CCTV Distributor in Gurgaon, providing
              comprehensive security solutions including{" "}
              <Link href="/">Hikvision</Link>,{" "}
              <Link href="/">CP Plus</Link>, and{" "}
              <Link href="/">Dahua</Link> systems. Whether you need{" "}
              CCTV installation near me for home or advanced
              industrial surveillance, we provide full support — from selection
              to installation and after-sales service.
            </p>
            <p className="mb-4">
              We offer weatherproof outdoor cameras, indoor discreet cameras,
              night vision units, wireless systems with mobile access, and
              industrial-grade setups with AI alerting. All systems are backed
              by expert consultation and fast local service across Gurgaon
              sectors and nearby cities.
            </p>
            <p>
              Our expertise covers residential homes, corporate offices, retail
              spaces, factories, and educational institutions. We ensure each{" "}
              CCTV security system in Gurgaon is tailored for
              optimal coverage and future scalability.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our CCTV Services in Gurgaon
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">CCTV Installation</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Home CCTV Installation
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Office CCTV Setup
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Industrial Solutions
                </li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Repair & Maintenance
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Quick CCTV Repair
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  System Upgrades
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Preventive Maintenance
                </li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Brands</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Hikvision CCTV
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  CP Plus CCTV
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Dahua CCTV
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Coverage Areas */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Areas We Serve in Gurgaon
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  Residential Areas
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    DLF Phases 1-5
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Sohna Road
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Golf Course Road
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  Commercial Hubs
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Cyber City
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Udyog Vihar
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    MG Road
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  Nearby Cities
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Faridabad
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Manesar
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Delhi NCR
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Installation and service in every sector section */}
        <section className="py-16 bg-gray-50 text-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
              Installation and Services in Every Sector
            </h2>
            <p className="mb-4">
              At Quadra Security, we provide professional-grade{" "}
              CCTV Camera in Gurgaon solutions for both
              residential and commercial environments. Our expert installation
              team ensures precise camera placement, complete system
              configuration, and user training for optimal usage and security.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Top Residential and Commercial Areas We Serve:
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>DLF Phase 1 to Phase 5</li>
              <li>Palam Vihar, New Palam Vihar, Palam Vihar Extension</li>
              <li>Golf Course Road & Extension, Dwarka Expressway, MG Road</li>
              <li>Sohna, South City, Civil Lines, Khandsa Road</li>
              <li>Sushant Lok Phases 1/2/3, Ashok Vihar Phase II/III</li>
              <li>New Gurgaon, Gurgaon-Faridabad Road and more</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Full Sector Coverage Across Gurgaon:
            </h3>
            <p className="mb-4">
              From Sector-1 to Sector-116, we provide quick and
              professional service across key locations such as:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sector-14, Sector-15, Sector-21, Sector-23</li>
              <li>Sector-29, Sector-31, Sector-46, Sector-49</li>
              <li>Sector-56, Sector-102, Sector-104, and many more</li>
            </ul>
            <p className="mt-4">
              Our dedicated sector-wise deployment teams help us meet{" "}
              urgent surveillance requirements with speed and
              reliability.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              CCTV Coverage in Nearby Cities:
            </h3>
            <p className="mb-4">
              Our reach goes beyond Gurgaon — we are among the top providers of:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                CCTV Camera in Delhi,{" "}
                Faridabad, and Manesar
              </li>
              <li>
                Also serving Neemrana, Bawal, Dharuhera, Rewari, Udyog Vihar,
                Sohna Road
              </li>
              <li>
                CCTV Dealer in Faridabad and{" "}
                CCTV Camera Dealer in Sohna Road
              </li>
            </ul>
            <p className="mt-4">
              Our regional presence ensures uniform service quality, fast
              installations, and consistent post-sales support throughout the
              NCR region.
            </p>
          </div>
        </section>

        {/* specialized offering */}
        <section className="py-16 bg-white text-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Specialized Offerings by Quadra Security
            </h2>
            <p className="mb-4">
              As a trusted CCTV Camera Service Provider in
              Gurgaon, Quadra Security goes beyond basic
              product delivery. We offer an all-inclusive suite of services to
              make your surveillance journey simple, secure, and seamless.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                CCTV Camera Online in Gurgaon – Enjoy doorstep
                delivery with complete setup assistance.
              </li>
              <li>
                Easy-to-understand CCTV Camera Price List with
                expert advice on choosing the right system.
              </li>
              <li>
                Professional CCTV Camera Installation handled
                by our certified, skilled technicians.
              </li>
              <li>
                Fast-response CCTV Installer near me teams
                available for local and urgent installations.
              </li>
              <li>
                Reliable CCTV Repair near me support for quick
                issue resolution and minimal downtime.
              </li>
            </ul>
            <p className="mt-4">
              Whether youre setting up a new system, upgrading an old one, or
              need maintenance support, Quadra Security ensures
              hassle-free service across the full lifecycle of your CCTV setup.
            </p>
          </div>
        </section>

        {/* why choose us section */}
        <section className="py-16 bg-gray-100 text-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Why Choose Quadra Security?
            </h2>
            <p className="mb-4">
              As a leading CCTV Camera Supplier in Gurgaon,
              Quadra Security has built a reputation for trust, quality, and
              service excellence. Here’s why we’re the preferred partner for
              thousands of clients across residential, commercial, and
              industrial sectors:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Free on-site inspection and expert consultation
                — with zero hidden charges.
              </li>
              <li>
                Authorized distributorship for brands like{" "}
                Hikvision Gurgaon, including full technical and
                software support.
              </li>
              <li>
                Certified engineers ensuring correct placement,
                configuration, and compliance with security standards.
              </li>
              <li>
                Affordable maintenance and repair packages for
                long-term performance and reliability.
              </li>
              <li>
                Tailored security systems for homes, offices,
                factories, schools, societies, and warehouses.
              </li>
            </ul>
            <p className="mt-4">
              Our mission is to provide lasting peace of mind by deploying
              surveillance systems that truly fit your environment — whether
              it’s a single-family home or a sprawling industrial plant.
            </p>
          </div>
        </section>

        {/* book now section */}
        <section id="contact" className="py-16 bg-white text-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Book Now</h2>
            <p className="mb-4">
              Looking to secure your property with the most trusted{" "}
              CCTV Camera in Gurgaon? Choose Quadra Security —
              the go-to name trusted by thousands across homes, businesses, and
              industrial setups.
            </p>
            <p className="mb-6">
              As established CCTV Dealers in Gurgaon, certified{" "}
              CCTV Camera Dealers in Gurgaon, and verified{" "}
              CCTV Camera Distributors in Gurgaon, we bring
              everything under one roof — from product selection to
              post-installation support.
            </p>
            <p className="mb-6 font-medium">
              Secure your home. Safeguard your business. Protect what matters
              most — with Quadra Security, your local experts
              in surveillance solutions.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Get a Free Consultation
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
