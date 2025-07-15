"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdOutlineHome } from "react-icons/md";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { BsGrid } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser, FaRegEnvelope, FaRegBell } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync dark mode class on <html>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div className="bg-white text-black flex items-center justify-between p-4 shadow-lg z-50 sticky top-0">
      {/* Left section */}
      <div className="flex items-center space-x-6">
        <Link
          href="/home"
          className="text-3xl font-bold text-[#034a9c] hover:text-[#022f73]"
        >
          Nexus
        </Link>

        <div className="hidden lg:flex space-x-5">
          <Link href="/home">
            <MdOutlineHome
              size={24}
              className="cursor-pointer hover:text-gray-400 dark:hover:text-gray-500"
            />
          </Link>

          {isDarkMode ? (
            <IoSunnyOutline
              size={24}
              className="cursor-pointer hover:text-gray-400 dark:hover:text-gray-500"
              onClick={toggleTheme}
            />
          ) : (
            <IoMoonOutline
              size={24}
              className="cursor-pointer hover:text-gray-400 dark:hover:text-gray-500"
              onClick={toggleTheme}
            />
          )}

          <BsGrid
            size={24}
            className="cursor-pointer hover:text-gray-400 dark:hover:text-gray-500"
          />
        </div>
      </div>

      {/* Search bar */}
      <div className="relative flex items-center flex-1 max-w-md mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 pl-10 rounded-lg border-2 border-black dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 w-full"
        />
        <IoIosSearch
          size={24}
          className="absolute left-3"
        />
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-5 mr-2 relative">
        {/* Notifications */}
        <div className="relative cursor-pointer">
          <FaRegUser
            size={20}
            className="hover:text-gray-400 dark:hover:text-gray-500"
          />
          <span className="w-[15px] h-[15px] bg-red-500 rounded-full text-white absolute top-[-7px] right-[-5px] flex items-center justify-center text-xs">
            3
          </span>
        </div>
        <div className="relative cursor-pointer">
          <FaRegEnvelope
            size={20}
            className="hover:text-gray-400 dark:hover:text-gray-500"
          />
          <span className="w-[15px] h-[15px] bg-red-500 rounded-full text-white absolute top-[-7px] right-[-5px] flex items-center justify-center text-xs">
            5
          </span>
        </div>
        <div className="relative cursor-pointer">
          <FaRegBell
            size={20}
            className="hover:text-gray-400 dark:hover:text-gray-500"
          />
          <span className="w-[15px] h-[15px] bg-red-500 rounded-full text-white absolute top-[-7px] right-[-5px] flex items-center justify-center text-xs">
            7
          </span>
        </div>

        {/* User profile */}
        <div className="hidden lg:flex items-center space-x-2">
          <Link href="/profile/123">
            <img
              src="/photos/cake.jpg"
              alt="User"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          </Link>
          <Link
            href="/profile/123"
            className="hidden lg:inline cursor-pointer hover:text-gray-400 dark:hover:text-gray-500"
          >
            Astra Quanta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
