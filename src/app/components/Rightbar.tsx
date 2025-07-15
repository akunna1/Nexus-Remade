"use client";

import React from "react";

const Rightbar = () => {
  return (
    <div className="sticky top-0 h-screen md:w-auto w-full overflow-y-auto scrollbar-hidden">
      <div className="p-5">
        {/* Suggestions For You */}
        <div className="shadow-xl rounded-xl p-5 mb-5 bg-white">
          <span className="text-gray-500">Suggestions For You</span>

          {[
            { src: "/photos/tired.jpg", name: "Coffee Addict" },
            { src: "/photos/bird.jpg", name: "Birdy Gideon" },
          ].map(({ src, name }) => (
            <div
              key={name}
              className="flex flex-col xl:flex-row xl:items-center xl:justify-between my-3"
            >
              <div className="flex items-center gap-2 relative">
                <img
                  src={src}
                  alt={name}
                  className="w-10 h-10 rounded-full object-cover cursor-pointer"
                />
                <span className="font-medium text-black dark:text-white cursor-pointer hover:text-gray-500">
                  {name}
                </span>
              </div>
              <div className="flex gap-2 mt-2 xl:mt-0">
                <button className="px-3 py-1 text-white bg-[#034a9c] hover:bg-[#022f73] rounded-xl">
                  Follow
                </button>
                <button className="px-3 py-1 text-white bg-red-600 hover:bg-[#a00404] rounded-xl">
                  Dismiss
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Latest Activities */}
        <div className="shadow-xl rounded-xl p-5 mb-5 bg-white">
          <span className="text-gray-500">Latest Activities</span>

          {[
            {
              src: "/photos/sugar.jpg",
              name: "Sugar Cubes",
              action: "made a post",
              time: "22 mins ago",
            },
            {
              src: "/photos/sugar.jpg",
              name: "Sugar Cubes",
              action: "liked a post",
              time: "37 mins ago",
            },
            {
              src: "/photos/hello.jpg",
              name: "Hello You",
              action: "liked a post",
              time: "54 mins ago",
            },
            {
              src: "/photos/rasp.jpeg",
              name: "Ice Cream",
              action: "made a comment",
              time: "1 hour ago",
            },
          ].map(({ src, name, action, time }) => (
            <div
              key={`${name}-${action}-${time}`}
              className="flex flex-col xl:flex-row xl:items-center xl:justify-between my-3"
            >
              <div className="flex items-center gap-2 relative">
                <img
                  src={src}
                  alt={name}
                  className="w-10 h-10 rounded-full object-cover cursor-pointer"
                />
                <p>
                  <span className="font-medium text-black dark:text-white cursor-pointer hover:text-gray-500">
                    {name}{" "}
                  </span>
                  <span className="text-gray-500">{action}</span>
                </p>
              </div>
              <span className="text-gray-500 mt-2 xl:mt-0">{time}</span>
            </div>
          ))}
        </div>

        {/* Online Friends */}
        <div className="shadow-xl rounded-xl p-5 mb-5 bg-white">
          <span className="text-gray-500">Online Friends</span>

          {[
            { src: "/photos/batman.png", name: "Bat Man" },
            { src: "/photos/puffpuff.png", name: "Puff Puff" },
            { src: "/photos/sugar.jpg", name: "Sugar Cubes" },
            { src: "/photos/rasp.jpeg", name: "Ice Cream" },
            { src: "/photos/hello.jpg", name: "Hello You" },
            { src: "/photos/cupcake.jpeg", name: "Pink Icing" },
          ].map(({ src, name }) => (
            <div
              key={name}
              className="flex items-center justify-between my-3"
            >
              <div className="flex items-center gap-2 relative">
                <img
                  src={src}
                  alt={name}
                  className="w-10 h-10 rounded-full object-cover cursor-pointer"
                />
                <div className="absolute top-0 left-7 w-3 h-3 rounded-full bg-lime-500" />
                <span className="font-medium text-black dark:text-white cursor-pointer hover:text-gray-500">
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
