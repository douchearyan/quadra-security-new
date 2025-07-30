/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ReactNode, useEffect, useRef } from "react";
import Image from "next/image";

interface ServiceSectionProps {
  serviceId: string;
  icon: ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  serviceId,
  icon,
  title,
  description,
  imageUrl,
  index,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            const lineElement = entry.target.querySelector(".icon-line");
            if (lineElement) {
              lineElement.classList.add("h-full");
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      data-section-id={index}
      className={`
        flex flex-col md:flex-row 
        ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
        mb-12 py-5 opacity-0 translate-y-5 transition-all duration-[600ms] ease-in-out relative
        gap-6
      `}
    >
      {/* Icon and line */}
      <div className="flex md:flex-col items-center md:items-start md:mr-5 relative z-10 w-full md:w-auto">
        <div className="p-2 text-md flex items-center justify-center text-3xl bg-blue-800 text-white rounded-full relative z-20">
          {icon}
        </div>
        {/* Line positioned differently on mobile and desktop */}
        <div
          className={`
            icon-line bg-blue-800 absolute
            md:static
            md:w-0.5 md:h-full
            w-full h-0.5
            top-6 left-0 md:left-auto
            md:mt-2
            transition-all duration-[1500ms] ease-out
          `}
        ></div>
      </div>

      {/* Text content */}
      <div  className={`flex-1 max-w-full md:max-w-[55%]`}>
        <h2 className="text-xl font-bold text-blue-800 mb-3 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#f0b100]">
          {title}
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed whitespace-pre-line">{description}</p>
        {/* {features.length > 0 && (
          <ul className="list-none p-0 m-0">
            {features.map((feature, i) => (
              <li key={i} className="mb-2 flex items-center">
                <span className="text-[#00246C] font-bold mr-2 select-none">✓</span> {feature}
              </li>
            ))}
          </ul>
        )} */}
      </div>

      {/* Image container */}
      <div className="w-full md:w-[40%] rounded-lg overflow-hidden shadow-md min-h-[240px] relative">
        <Image
        id={serviceId}
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 40vw"
          priority={index < 2} // prioritize first two images for faster load
        />
      </div>
    </div>
  );
};

export default ServiceSection;
