"use client"

import { useState } from "react"
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="overflow-hidden">
      {/* Top white Header */}
      <div className="bg-white  text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center h-8">
          
          <p className="text-center ">Free delivery on orders over £50</p>
        </div>
      </div>

    
      {/* Main Header */}
      <header className="bg-black py-2 text-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between  ">
            <div className=" w-2/5 flex gap-6 md:gap-10">
               {/* MegaMenu Icon */}
                 <button className=" " onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
              {/* Logo */}
              <h1 className="text-2xl font-bold ">Lukaz</h1>
            </div>

            

          <div className="flex w-3/5 justify-between">
              {/* Search Bar */}
            <div className="w-2/3 max-w-xl mx-4 hidden sm:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4  py-1.5 bg-white border text-black
                   border-gray-300 rounded-sm focus:outline-none focus:ring-2 
                   focus:ring-sports-orange focus:border-transparent"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2
                 h-5 w-5 text-black" />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2  hover:">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2  hover:">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-2  hover: relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-sports-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
         <div></div>
        )}
      </header>
    </div>
  )
}
