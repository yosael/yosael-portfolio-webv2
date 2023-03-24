"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageLogoApp from "@/public/images/PageLogoApp.jpeg";
import WorkWithMeModal from "./WorkWithMeModal";

type MenuItems = {
  name: string;
  link: string;
};

const menuItems: MenuItems[] = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "About", link: "/about" },
];

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onWorkWithMeClick = () => {
    // set Open Modal true
    console.log("Open Modal");
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    // set Open Modal false
    console.log("Close Modal");
    setIsModalOpen(false);
  };

  return (
    <div className="sm:container sm:mx-auto  pb-8 px-9">
      <nav className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        <div className="w-full flex justify-between items-center px-4 sm:px-0">
          <div className="flex items-center  text-black mr-8 cursor-pointer">
            {/* text next to an image */}
            <Link href={"/"}>
              <Image
                src={PageLogoApp}
                alt="Edwin Icon"
                width={120}
                height={100}
                className="rounded-full shadow-gray-800"
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
              onClick={onWorkWithMeClick}
            >
              Contact me
            </button>
          </div>
        </div>
      </nav>
      <div>
        {isModalOpen && (
          <WorkWithMeModal isOpen={isModalOpen} onClose={onModalClose} />
        )}
      </div>
    </div>
  );
}
