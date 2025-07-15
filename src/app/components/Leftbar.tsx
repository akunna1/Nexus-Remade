"use client";

import React from"react";
import Link from"next/link";

const Leftbar = () => {
  return (
    <div className="shadow-xl bg-white text-black rounded-b-xl sticky top-0 xl:h-screen md:w-auto w-full overflow-y-auto scrollbar-hidden">
      <div className="space-y-3 p-5">
        {/* User profile */}
        <div className="flex items-center space-x-2">
          <Link href="/profile">
            <img
              src="/photos/cake.jpg"
              alt="User"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          </Link>
          <Link href="/profile">
            <span className="hidden md:inline text-sm text-black cursor-pointer hover:text-gray-400 focus:text-gray-400 active:text-gray-400" id="dark-text-hover">
              Astra Quanta
            </span>
          </Link>
        </div>

        {/* Other items */}
        {[
          { src:"/photos/friends.png", alt:"Friends", label:"Friends" },
          { src:"/photos/group.png", alt:"Group", label:"Groups" },
          { src:"/photos/messages.png", alt:"Messages", label:"Messages" },
          { src:"/photos/gallery.png", alt:"Gallery", label:"Gallery" },
          { src:"/photos/videos.png", alt:"Videos", label:"Videos" },
        ].map(({ src, alt, label }) => (
          <div key={label} className="flex items-center space-x-2">
            <img src={src} alt={alt} className="w-8 h-8 rounded-full cursor-pointer" />
            <span className="hidden md:inline text-sm text-black cursor-pointer hover:text-gray-400 focus:text-gray-400 active:text-gray-400" id="dark-text-hover">
              {label}
            </span>
          </div>
        ))}

        <div className="border-t-2 border-t-gray-200 dark:border-t-gray-700 text-xs text-black">
          <div className="mt-2 mb-2">Resources</div>
        </div>

        {[
          { src:"/photos/books.png", alt:"Books", label:"Books" },
          { src:"/photos/quotes.png", alt:"Quotes", label:"Quotes" },
          { src:"/photos/music.png", alt:"Music", label:"Music" },
          { src:"/photos/youtube.png", alt:"Clips", label:"Clips" },
        ].map(({ src, alt, label }) => (
          <div key={label} className="flex items-center space-x-2">
            <img src={src} alt={alt} className="w-8 h-8 rounded-full cursor-pointer" />
            <span className="hidden md:inline text-sm text-black cursor-pointer hover:text-gray-400 focus:text-gray-400 active:text-gray-400" id="dark-text-hover">
              {label}
            </span>
          </div>
        ))}

        <div className="border-t-2 border-t-gray-200 dark:border-t-gray-700 text-xs text-black">
          <div className="mt-2 mb-2">Others</div>
        </div>

        {[
          { src:"/photos/funds.png", alt:"Fundraiser", label:"Fundraiser" },
          { src:"/photos/market.png", alt:"Marketplace", label:"Marketplace" },
          { src:"/photos/courses.png", alt:"Courses", label:"Courses" },
        ].map(({ src, alt, label }) => (
          <div key={label} className="flex items-center space-x-2">
            <img src={src} alt={alt} className="w-8 h-8 rounded-full cursor-pointer" />
            <span className="hidden md:inline text-sm text-black cursor-pointer hover:text-gray-400 focus:text-gray-400 active:text-gray-400" id="dark-text-hover">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leftbar;
