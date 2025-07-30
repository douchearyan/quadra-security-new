"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import DownSolutionsSiteVisitForm from "./DownForm";

interface SidebarProps {
  items: { label: string; path: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const pathname = usePathname();

    const currentSolutionType = pathname.split("/").pop();

  return (
    <div className="w-full  md:w-2/5 border shadow-sm lg:m-5 h-fit p-4">
        <DownSolutionsSiteVisitForm solutionType={currentSolutionType}/>
        <hr className="w-full"/>
      <div className="flex flex-col m-2 space-y-3 p-3">
        {items.map((item, index) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={index}
              href={item.path}
              className={`py-3 px-4 text-left text-sm font-medium rounded ${
                isActive
                  ? "bg-[#2b388f] text-white"
                  : "bg-[#f0f0f0] hover:bg-gray-200"
              }`}
            >
              {isActive ? "> " : ""}
              {item.label}
            </Link>
          );
        })}
      </div>
   
    </div>
  );
};

export default Sidebar;
