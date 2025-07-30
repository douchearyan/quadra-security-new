/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link"; // for routing

interface SolutionCardProps {
  imageSrc: string;
  title: string;
  description: string;
  features: string[];
  path: string; // to route to specific solution page
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  imageSrc,
  title,
  description,
  features,
  path,
}) => {
  return (
    <div className="bg-[#06044E] rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg w-[250px] md:w-auto">
      <div className="w-full md:h-[180px] h-36 relative">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        <div className="h-[4px] bg-yellow-400" />
      </div>

      <div className="p-4 space-y-3">
        <h3 className="text-yellow-400 font-bold text-lg">{title}</h3>
        <p className="text-white text-sm">{description}</p>

        <ul className="text-white text-sm space-y-1">
          {features.map((feature, idx) => (
            <li key={idx}>✔ {feature}</li>
          ))}
        </ul>

        <Link href={path}>
          <button className="text-yellow-400 font-bold mt-2 hover:underline">
            Explore Solution
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SolutionCard;
