"use client";
import React, { useState } from "react";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // For drawer icons

const Navbar = () => {
  const [path, setPath] = useState("/");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer

  const navItems = [
    {
      itemName: "Home",
      itemPath: "/#home",
    },
    {
      itemName: "About Me",
      itemPath: "/#aboutMe",
    },
    {
      itemName: "Experience",
      itemPath: "/#experience",
    },
    {
      itemName: "Projects",
      itemPath: "/#projects",
    },
    {
      itemName: "Skills",
      itemPath: "/#skills",
    },
    {
      itemName: "Education",
      itemPath: "/#education",
    },
    {
      itemName: "Contact",
      itemPath: "/#contact",
    },
  ];

  // Function to toggle drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="w-full fixed shadow-sm z-50 bg-[#030712] text-white shadow-[#66ec97]">
      <div className="lg:container lg:mx-auto lg:px-10 mx-5 my-4 flex justify-between items-center">
        <div>
          {" "}
          <a href="#home">
            {" "}
            <p className="cursor-pointer text-2xl">
              Kausar<span className="text-xs">Ahmad Tasin</span>
            </p>
          </a>
        </div>

        {/* Large screen nav links */}
        <div className="hidden lg:flex justify-end">
          <ul className="flex items-center gap-x-6">
            {navItems.map((item) => (
              <a
                onClick={() => setPath(item.itemPath)}
                className={`hover:text-[#66ec97]  duration-200 ${path === item.itemPath
                  ? "text-[#66ec97] underline-offset-2 underline"
                  : "text-gray-300"
                  }`}
                href={item.itemPath}
                key={item.itemName}
              >
                {item.itemName}
              </a>
            ))}

            <a
              href="https://drive.google.com/file/d/169nlqqlRYAkchtCA8Ix69uXm8Sv9XW6m/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex button border-[#66ec97] hover:bg-black shadow-md  shadow-[#66ec97] hover:border-[#66ec97] bg-[#66ec97] text-black hover:text-[#66ec97] px-3 py-2 rounded-lg font-medium duration-200 ml-10 items-center gap-x-2">
                Resume <RxExternalLink className="text-lg" />
              </button>
            </a>
          </ul>
        </div>

        {/* Drawer for smaller screens */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleDrawer} className="text-gray-300 text-3xl">
            {isDrawerOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Drawer content (for smaller screens) */}
      <div
        className={`lg:hidden absolute top-16 right-0 w-2/3 bg-[#030712] z-40 p-5 shadow-md shadow-[#66ec97] transform transition-transform duration-3  00 ${isDrawerOpen ? "translate-y-0" : "-translate-y-[35rem]"
          }`}
      >
        <ul className="flex flex-col items-start gap-y-4 ">
          {navItems.map((item) => (
            <a
              onClick={() => {
                setPath(item.itemPath);
                setIsDrawerOpen(false); // Close drawer after selection
              }}
              className={`hover:text-[#66ec97] duration-200 ${path === item.itemPath
                ? "text-[#66ec97] underline-offset-2 underline"
                : "text-gray-300"
                }`}
              href={item.itemPath}
              key={item.itemName}
            >
              {item.itemName}
            </a>
          ))}

          <a
            href="https://drive.google.com/file/d/169nlqqlRYAkchtCA8Ix69uXm8Sv9XW6m/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex button border-[#66ec97] hover:bg-black shadow-md  shadow-[#66ec97] hover:border-[#66ec97] bg-[#66ec97] text-black hover:text-[#66ec97] px-3 py-2 rounded-lg font-medium duration-200 mt-4 items-center gap-x-2">
              Resume <RxExternalLink className="text-lg" />
            </button>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
