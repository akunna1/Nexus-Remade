'use client';

import React from 'react';
import Link from 'next/link';
import { MdLabel, MdPermMedia, MdEmojiEmotions, MdLocationPin } from 'react-icons/md';

const Upload = () => {
  return (
    <div className="w-full bg-white mt-3 mb-5 p-4 rounded-xl shadow-xl">
      <div className="flex flex-col space-y-3">
        <div className="flex items-center">
          <Link href="/profile">
            <img 
              src="/photos/cake.jpg" 
              alt="User profile picture" 
              className="w-12 h-12 rounded-full mr-3 object-cover cursor-pointer"
            />
          </Link>
          <input 
            type="text" 
            placeholder="What did you learn at therapy?" 
            className="flex-1 focus:outline-none bg-white p-2 rounded-md text-black"
          />
        </div>

        <hr className="my-5 text-gray-300" />

        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-wrap space-x-4 mb-3 sm:mb-0">
            <div className="flex items-center cursor-pointer space-x-2 hover:text-gray-500">
              <MdPermMedia className="text-red-600" />
              <span className="text-sm text-black hover:text-gray-400 focus:text-gray-400 active:text-gray-400" id="dark-text-hover">Media</span>
            </div>
            <div className="flex items-center cursor-pointer space-x-2 hover:text-gray-500">
              <MdLabel className="text-[#034a9c]" />
              <span className="text-sm text-black hover:text-gray-400 focus:text-gray-400 active:text-gray-400" id="dark-text-hover">Tags</span>
            </div>
            <div className="flex items-center cursor-pointer space-x-2 hover:text-gray-500">
              <MdEmojiEmotions className="text-yellow-500" />
              <span className="text-sm text-black hover:text-gray-400 focus:text-gray-400 active:text-gray-400" id="dark-text-hover">Emoji</span>
            </div>
            <div className="flex items-center cursor-pointer space-x-2 hover:text-gray-500">
              <MdLocationPin className="text-green-600" />
              <span className="text-sm text-black hover:text-gray-400 focus:text-gray-400 active:text-gray-400" id="dark-text-hover">Location</span>
            </div>
          </div>
          <button className="bg-green-600 hover:bg-green-800 focus:bg-green-800 active:bg-green-800 text-white px-3 py-1 rounded-xl">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
