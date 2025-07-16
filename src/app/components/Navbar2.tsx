"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdOutlineHome } from "react-icons/md";
import { IoMoonOutline, IoSunnyOutline, IoClose } from "react-icons/io5";
import { BsGrid } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Navbar2 = () => {
  const [isDarkMode, setIsDarkMode] = useState<undefined | boolean>(undefined);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);

  useEffect(() => {
    // Runs on mount
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleResourcesMenu = () => setIsResourcesOpen((prev) => !prev);
  const toggleOthersMenu = () => setIsOthersOpen((prev) => !prev);

  return (
    <div className="lg:hidden bg-white text-black shadow-lg flex justify-between items-center p-4 fixed bottom-0 left-0 right-0 z-50">
      <div className="flex items-center space-x-4">
        <div onClick={toggleMenu} className="cursor-pointer select-none">
          {isMenuOpen ? (
            <IoClose size={24} className="hover:text-gray-400 focus:text-gray-400 active:text-gray-400 cursor-pointer" id="dark-text-hover" />
          ) : (
            <FaBars size={24} className="hover:text-gray-400 focus:text-gray-400 active:text-gray-400 cursor-pointer" id="dark-text-hover" />
          )}
        </div>

        <Link href="/home">
          <MdOutlineHome
            size={24}
            className="hover:text-gray-400 focus:text-gray-400 active:text-gray-400 cursor-pointer"
          />
        </Link>

        {/* Render toggle only when loaded */}
        {isDarkMode !== undefined && (
          isDarkMode ? (
            <IoSunnyOutline
              size={24}
              className="hover:text-gray-400 cursor-pointer focus:text-gray-400 active:text-gray-400"
              onClick={toggleTheme}
            />
          ) : (
            <IoMoonOutline
              size={24}
              className="hover:text-gray-400 cursor-pointer focus:text-gray-400 active:text-gray-400"
              onClick={toggleTheme}
            />
          )
        )}

        <BsGrid size={24} className="hover:text-gray-400 cursor-pointer focus:text-gray-400 active:text-gray-400" />
      </div>

      <div className="flex items-center space-x-2">
        <Link href="/profile">
          <img
            src="/photos/cake.jpg"
            alt="User"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        </Link>
        <Link href="/profile" className="hover:text-gray-400 cursor-pointer focus:text-gray-400 active:text-gray-400">
          Astra Quanta
        </Link>
      </div>

      {isMenuOpen && (
        <div className="absolute bottom-16 left-4 right-4 bg-white w-[230px] shadow-xl rounded-xl p-4 z-40">
          <ul className="space-y-2">
            {[
              { src: "/photos/friends.png", alt: "Friends", label: "Friends" },
              { src: "/photos/group.png", alt: "Groups", label: "Groups" },
              { src: "/photos/messages.png", alt: "Messages", label: "Messages" },
              { src: "/photos/gallery.png", alt: "Gallery", label: "Gallery" },
              { src: "/photos/videos.png", alt: "Videos", label: "Videos" },
            ].map(({ src, alt, label }) => (
              <li key={label} className="border-b-2 border-gray-500 pb-2 cursor-pointer">
                <div className="flex items-center space-x-2">
                  <img src={src} alt={alt} className="w-8 h-8 rounded-full" />
                  <span className="hover:text-gray-400 focus:text-gray-400 active:text-gray-400 cursor-pointer" id="dark-text-hover">
                    {label}
                  </span>
                </div>
              </li>
            ))}

            <li className="border-b-2 border-gray-500 pb-2">
              <div
                className="hover:text-gray-400 cursor-pointer focus:text-gray-400 active:text-gray-400"
                onClick={toggleResourcesMenu}
              >
                Resources...
              </div>
              {isResourcesOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  {[
                    { src: "/photos/books.png", alt: "Books", label: "Books" },
                    { src: "/photos/quotes.png", alt: "Quotes", label: "Quotes" },
                    { src: "/photos/music.png", alt: "Music", label: "Music" },
                    { src: "/photos/youtube.png", alt: "Clips", label: "Clips" },
                  ].map(({ src, alt, label }) => (
                    <li key={label} className="cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <img src={src} alt={alt} className="w-8 h-8 rounded-full" />
                        <span className="hover:text-gray-400" id="dark-text-hover">
                          {label}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <div
                className="hover:text-gray-400 cursor-pointer focus:text-gray-400 active:text-gray-400"
                onClick={toggleOthersMenu}
              >
                Others...
              </div>
              {isOthersOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  {[
                    { src: "/photos/funds.png", alt: "Fundraiser", label: "Fundraiser" },
                    { src: "/photos/market.png", alt: "Marketplace", label: "Marketplace" },
                    { src: "/photos/courses.png", alt: "Courses", label: "Courses" },
                  ].map(({ src, alt, label }) => (
                    <li key={label} className="cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <img src={src} alt={alt} className="w-8 h-8 rounded-full" />
                        <span className="hover:text-gray-400 focus:text-gray-400 active:text-gray-400" id="dark-text-hover">
                          {label}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar2;
