import React from 'react';
import Link from 'next/link';

const menuItems = [
  { label: 'Summer Sale', href: '/sale' },
  { label: "Men's", href: '/mens' },
  { label: "Women's", href: '/womens' },
  { label: "Kids'", href: '/kids' },
  { label: 'Run', href: '/run' },
  { label: 'Trail', href: '/trail' },
  { label: 'Hike', href: '/hike' },
  { label: 'Sports', href: '/sports' },
  { label: 'Brands', href: '/brands' },
  { label: 'Partners', href: '/partners' },
  { label: 'Advice', href: '/advice' },
  { label: 'Vitality', href: '/vitality' },
];

export default function TopBanner() {
  return (
    <div className="w-full">
      {/* Top menu */}
      <div className="hidden lg:flex justify-center gap-1 py-1 bg-white shadow-sm flex-wrap">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`text-sm font-medium px-4 py-2 rounded-md transition ${
              item.label === 'Summer Sale'
                ? 'bg-[#ff5b2e] text-white font-semibold'
                : 'text-black hover:text-[#ff5b2e]'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Hero banner */}
      <div className="bg-[#FE5B34] w-full text-center py-10 relative overflow-hidden">
        <h1 className="text-white text-7xl font-extrabold  ">
          SUMMER <br /> SALE
        </h1>

        {/* Decorative icons */}
        {/* <div className="absolute left-[35%] top-[50%] transform -translate-y-1/2 text-4xl">
          <span className="text-sky-400">✴️</span>
        </div> */}
        {/* <div className="absolute right-[35%] top-[50%] transform -translate-y-1/2 text-4xl">
          <span className="text-sky-400">⬇️</span>
        </div> */}

        {/* CTA Button */}
        <div className="mt-8">
          <Link
            href="/sale"
            className="bg-white text-[#ff5b2e] font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
