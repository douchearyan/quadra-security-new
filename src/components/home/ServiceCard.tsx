/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
  features,
}) => {
  return (
    <div className="bg-[#06044E] rounded-2xl overflow-hidden shadow-lg w-[250px] md:w-[300px] h-[420px] flex flex-col">
      {/* Image section */}
      <div className="w-full h-36 md:h-[180px] relative shrink-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="h-[4px] bg-yellow-400" />
      </div>

      {/* Content section */}
      <div className="p-4 flex flex-col flex-grow overflow-hidden">
        <h3 className="text-yellow-400 font-bold text-lg">{title}</h3>
        <p className="text-white text-sm mt-1 line-clamp-3">{description}</p>

        <ul className="text-white text-sm mt-2 overflow-auto flex-grow space-y-1 pr-1">
          {features.map((feature, idx) => (
            <li key={idx}>✔ {feature}</li>
          ))}
        </ul>

        <Link
          href="/services"
          className="text-yellow-400 font-bold mt-2 hover:underline self-start"
        >
          More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
