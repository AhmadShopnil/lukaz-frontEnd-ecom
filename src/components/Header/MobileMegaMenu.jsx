import React from 'react'

export default function MobileMegaMenu() {
  return (
     <div className="md:hidden bg-white text-black border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-base font-medium  hover:">
                MEN
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium  hover:">
                WOMEN
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium  hover:">
                KIDS
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium  hover:">
                BRANDS
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-sports-red">
                SALE
              </a>
            </div>
          </div>
  )
}
