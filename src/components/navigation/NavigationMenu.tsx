import React from "react";
import { FaCircle } from "react-icons/fa"; //circle icon in nav bar
import OrangeButton from "../buttons/OrangeButton";
import Image from "next/image";

const NavigationMenu: React.FC = () => {
  return (
    <div>
      {/* Navigation bar desktop */}
      <nav className="hidden md:block  font-themeFont text-xs sticky z-50 top-0">
        <div className="flex justify-between [&>*]:px-5 items-center w-screen h-auto border-white/20 shadow-xl backdrop-blur-md bg-[#08156B]/10">
          {/* logo */}
          <div className="aspect-auto h-10">
            <a href="/">
              <Image
                src="https://www.quadrasecurity.com/logo_white.svg"
                alt="logo"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
          {/* menu items */}
          <div className="py-2">
            <ul className="flex [&>li>svg]:text-[6px] [&>li>a]:p-1.5  items-center text-white gap-3">
              <li className="transition-transform duration-300 ease-in-out hover:scale-110 ">
                <a href="/" className="active:underline">
                  Home
                </a>
              </li>
              <li>
                <FaCircle />
              </li>
              <li className="transition-transform duration-300 ease-in-out hover:scale-110">
                <a href="/">Services</a>
              </li>
              <li>
                <FaCircle />
              </li>
              <li className="transition-transform duration-300 ease-in-out hover:scale-110">
                <a href="/">Blogs</a>
              </li>
              <li>
                <FaCircle />
              </li>
              <li className="transition-transform duration-300 ease-in-out hover:scale-110">
                <a href="/">About Us</a>
              </li>
              <li>
                <FaCircle />
              </li>
              <li className="transition-transform duration-300 ease-in-out hover:scale-110">
                <a href="/">Contact Us</a>
              </li>
              <li>
                <FaCircle />
              </li>
              <li className="transition-transform duration-300 ease-in-out hover:scale-110">
                <a href="/">Solutions</a>
              </li>
              <li>
                {/* CTA(get your quotation button) */}
                <div>
                  <OrangeButton />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="md:hidden">
        <div className="bg-white">

        </div>
      </nav>
    </div>
  );
};

export default NavigationMenu;
