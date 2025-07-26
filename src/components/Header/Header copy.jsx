// Updated Header component with Mega Menu on hamburger click
"use client";

import { useState } from "react";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

const mainMenu = [
  {
    label: "Summer Sale",
    submenu: null,
  },
  {
    label: "Men's",
    submenu: ["Shoes", "Clothing", "Accessories", "Sports", "Brands"],
  },
  {
    label: "Women's",
    submenu: ["Road Running", "Clothing", "Accessories", "Sports", "Top Brands"],
  },
  {
    label: "Kids'",
    submenu: ["Running Shoes", "Sportswear"],
  },
  {
    label: "Run",
    submenu: ["Trainers", "Racing Shoes", "Energy Gels"],
  },
  {
    label: "Trail",
    submenu: ["Trail Shoes", "Hydration Packs"],
  },
  {
    label: "Hike",
    submenu: ["Boots", "Jackets", "Backpacks"],
  },
  {
    label: "Sports",
    submenu: ["Football", "Gym", "Swimming", "Tennis"],
  },
  {
    label: "Brands",
    submenu: ["Nike", "ASICS", "adidas", "New Balance", "HOKA"],
  },
  {
    label: "Advice",
    submenu: ["Running Tips", "Training Plans", "Gear Guides"],
  },
  {
    label: "Vitality",
    submenu: ["Health Articles", "Supplements"],
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="overflow-hidden">
      {/* Top white Header */}
      <div className="bg-white text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center h-8">
          <p className="text-center">Free delivery on orders over £50</p>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-black py-2 text-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="w-2/5 flex gap-6 md:gap-10">
              {/* MegaMenu Icon */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
              {/* Logo */}
              <h1 className="text-2xl font-bold">Lukaz</h1>
            </div>

            {/* Search + Icons */}
            <div className="flex w-3/5 justify-between">
              <div className="w-2/3 max-w-xl mx-4 hidden sm:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products, brands..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-4 py-1.5 bg-white border text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-sports-orange focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2">
                  <User className="h-5 w-5" />
                </button>
                <button className="p-2">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="p-2 relative">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-sports-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mega Menu Panel */}
        {isMenuOpen && (
          <div className="flex bg-white text-black min-h-[400px] border-t mt-2 ">
            {/* Left Side Menu */}
            <div className="w-1/4 border-r">
              {mainMenu.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveMenu(index)}
                  className={`px-6 py-3 cursor-pointer hover:bg-gray-100 flex justify-between items-center ${
                    activeMenu === index ? "bg-gray-100 font-semibold" : ""
                  }`}
                >
                  {item.label}
                  {item.submenu && <ChevronRight className="h-4 w-4" />}
                </div>
              ))}
            </div>

            {/* Right Side Submenu */}
            <div className="w-3/4 p-6">
              {mainMenu[activeMenu]?.submenu ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {mainMenu[activeMenu].submenu.map((sub, idx) => (
                    <div key={idx} className="text-sm hover:underline cursor-pointer">
                      {sub}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No submenu available</p>
              )}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
