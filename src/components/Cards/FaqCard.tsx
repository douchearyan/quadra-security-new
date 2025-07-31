"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

interface FaqCardProps {
  question: string;
  answer: string;
}

const FaqCard: React.FC<FaqCardProps>  = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#171A86]/20 rounded-2xl m-5 p-4 mx-auto border-gray-300 w-[90%] ">
      {/* Question Row clicking over any part of this element change the isOpen state ---> if open it closes and if closed it opens*/}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex gap-2 items-center">
          <span className="text-white">
            {/* arrow icon change depending whether it the card is open or closed */}
            {isOpen ? <MdKeyboardArrowDown size={24} /> : <MdKeyboardArrowRight size={24} />}
          </span>
          <h3 className="text-lg font-medium text-white">{question}</h3>
        </div>
        <span className="text-white px-1">
          {/* plus/minus icon change depending whether it the card is open or closed */}
          {isOpen ? <FaMinus size={18} /> : <FaPlus size={18} />}
        </span>
      </div>

      {/* Animated Answer - the card expands when it is clicked */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="w-[90%] h-[1px] bg-white/20 m-3 mx-auto"></div>
            <p className="mt-2 text-white text-base">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqCard;
