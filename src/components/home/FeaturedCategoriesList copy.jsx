"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    title: "BESTSELLERS",
    image: "/images/shoe/10.jpg", // Replace with your image
    bg: "bg-[#7a8b96]",
  },
  {
    id: 2,
    title: "NEW ARRIVALS",
    image: "/images/shoe/12.webp",
    bg: "bg-[#606c5b]",
  },
  {
    id: 3,
    title: "MENS",
    image: "/shoes3.png",
    bg: "bg-[#7d7c8c]",
  },
  {
    id: 4,
    title: "WOMENS",
    image: "/shoes4.png",
    bg: "bg-[#8c8683]",
  },
];

export default function FeaturedCategoriesList() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {categories.map((item) => (
        <div
          key={item.id}
          className={`${item.bg} relative flex flex-col items-center justify-center transition-all duration-500 ease-in-out p-6 
                      cursor-pointer rounded-2xl hover:rounded-[50%] h-96`}
          onMouseEnter={() => setHovered(item.id)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Shoe Image */}
          <div className="relative w-56 h-32">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Category Title */}
          <span className="absolute bottom-10 text-white text-lg font-bold bg-black/30 px-4 py-2 rounded-full">
            {item.title}
          </span>

          {/* Extra Buttons (visible on hover) */}
          {hovered === item.id && (
            <div className="absolute bottom-4 flex gap-3 animate-fadeIn">
              <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">
                For Men
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">
                For Women
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
