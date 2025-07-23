// components/GenderCategoryCard.jsx

import Link from 'next/link';
import React from 'react';

export default function GenderCategoryCard({ title, image, buttons = [] }) {
  return (
    <div className="relative h-[370px] w-full overflow-hidden rounded-md group cursor-pointer">
      {/* Zoomable image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-100 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center  px-6">
      
         

         <div className='px-4 absolute bottom-8 left-4 right-4 text-white  w-full'>
           <h2 className="text-4xl font-bold mb-4 ">{title}</h2>
           <div className="  flex flex-wrap gap-3 ">
            <Link
              href=""
              className="w-auto border border-white text-white px-4 
              py-2 rounded hover:bg-white hover:text-black transition"
            >
              Shop Shoes
            </Link>
            <Link
              href=""
              className="border border-white text-white px-4 py-2 
              rounded hover:bg-white hover:text-black transition"
            >
              Shop Apparel
            </Link>
            <Link
              href=""
              className="border border-white text-white px-4 py-2
               rounded hover:bg-white hover:text-black transition"
            >
              Shop Accessories
            </Link>
          
         </div>
        </div>
      </div>
    </div>
  );
}
