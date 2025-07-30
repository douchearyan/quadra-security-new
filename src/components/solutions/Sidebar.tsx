"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SolutionsSiteVisitForm from "./Form";

interface SidebarProps {
  items: { label: string; path: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const pathname = usePathname();

  // Extract solution key from pathname, e.g. "/solutions/home-security" => "home-security"
  const currentSolutionType = pathname.split("/").pop();

  return (
    <div className="lg:block  hidden h-fit space-y-6 m-5">
        <SolutionsSiteVisitForm solutionType={currentSolutionType} />
      <div className="border shadow-sm p-4">
        <div className="flex flex-col m-2 space-y-3">
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

      {/* Pass the current solution to the form */}
    
    </div>
  );
};

export default Sidebar;
