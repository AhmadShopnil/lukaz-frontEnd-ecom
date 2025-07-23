import React from 'react'

export default function CardWithFullImage({ item }) {
  return (
    <div className="h-[420px] rounded-md relative overflow-hidden group cursor-pointer">
      {/* Zoomable background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform
         duration-700 scale-100  group-hover:scale-105"
        style={{ backgroundImage: `url(${item?.image})` }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

      {/* Text */}
      <div className="absolute bottom-8 left-4 right-4 text-white text-2xl font-bold z-10">
        {item?.name}
      </div>
    </div>
  )
}
