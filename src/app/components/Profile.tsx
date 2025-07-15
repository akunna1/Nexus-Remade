'use client';

import React from 'react';

export default function Profile() {
  return (
    <div className="p-3 mt-2 text-black lg:ml-5">
      {/* Profile Content */}
      <div className="bg-white shadow-xl rounded-xl p-4 mb-6">
        <div className="relative h-[350px]">
          {/* Cover Picture */}
          <img
            src="/photos/horse.jpg"
            alt="cover picture"
            className="w-full h-[400px] object-cover rounded-lg"
          />

          {/* Profile Picture */}
          <img
            src="/photos/cake.jpg"
            alt="profile picture"
            className="w-[150px] h-[150px] rounded-full object-cover absolute left-0 right-0 m-auto top-[150px] border-4 border-white"
          />
        </div>

        {/* User Details */}
        <div className="mt-[75px] text-center">
          <h1 className="font-bold text-2xl">Astra Quanta</h1>
          <div className="flex justify-between mt-5 w-full px-4">
            <p className="text-left text-sm">
              <span className="font-extrabold">Age:</span> 43
            </p>
            <p className="text-left text-sm">
              <span className="font-extrabold">Location:</span> Tampa, Florida
            </p>
          </div>

          {/* Placeholder: Who are you? Why are you here? */}
          <span className="block mt-6">
            I am a recovering alcoholic, struggling with PTSD. I'm here to find some support resources.
          </span>
        </div>
      </div>
    </div>
  );
}
