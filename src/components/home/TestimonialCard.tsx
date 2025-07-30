/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

interface TestimonialCardProps {
  name: string;
  location: string;
  description: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  description,
  rating,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-md h-full w-full max-w-[250px]">
      {/* Star Rating Section (instead of image) */}
      <div className="flex justify-center items-center gap-1 bg-gray-100 py-2">
        {Array.from({ length: rating }, (_, i) => (
          <FaStar key={i} className="text-yellow-500 text-sm" />
        ))}
      </div>

      {/* Quote + description */}
      <div className="p-3 flex flex-col flex-1 justify-between">
        {/* Quote icon */}
        <div className="text-white flex justify-center items-center bg-blue-500 w-10 h-10 rounded-full relative z-30 -top-9 mx-auto">
          <FaQuoteLeft />
        </div>

        {/* Description */}
        <p className="text-gray-700 text-xs leading-relaxed text-center -mt-4 flex-1">
          &quot;{description}&quot;
        </p>

        {/* Name and Location */}
        <h3 className="text-black font-semibold text-xs mt-2 uppercase text-center">
          {name}
        </h3>
        <p className="text-gray-500 text-xs text-center">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
