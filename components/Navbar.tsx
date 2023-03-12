import React from "react";
import Link from "next/link";
import Image from "next/image";
import MyLogo from "@/public/images/logo-light.svg";

type MenuItems = {
  name: string;
  link: string;
};

const menuItems: MenuItems[] = [
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

export default function Navbar() {
  return (
    <div className="sm:container sm:mx-auto">
      <nav className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        <div className="w-full flex justify-between items-center px-4 sm:px-0">
          <div className="flex items-center  text-black mr-8 cursor-pointer">
            {/* text next to an image */}
            <Link href={"/"}>
              <Image
                src={MyLogo}
                alt="Edwin Icon"
                width={150}
                height={120}
                className="w-36  mr-0 pr-0"
              />
            </Link>
          </div>
          <div className="flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              {menuItems.map((item) => (
                <Link
                  className="p-5 text-lg text-primary-dark dark:text-secondary-light font-general-medium hover:text-primary-light dark:hover:text-secondary-dark"
                  href={item.link}
                  key={`menu-item${item.link}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <button
              className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
              aria-label="Hire Me Button"
            >
              Hire Me
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
