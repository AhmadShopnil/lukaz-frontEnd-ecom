'use client';
import React from 'react';
import Link from 'next/link';

export default function VideoSection() {
  return (
    <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/product-ad.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Discover Our New Collection
        </h1>
        <p className="text-white text-lg md:text-xl mb-6">
          Step into style with the latest arrivals
        </p>
        <Link
          href="/shop"
          className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-black hover:text-white transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
