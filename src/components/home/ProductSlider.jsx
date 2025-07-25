'use client';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../Cards/ProductCard';

const products = [
  {
    id: 1,
    name: "ASICS Superblast 2",
    price: "199",
    image: "/images/shoe/2.jpg",
  },
  {
    id: 2,
    name: "Nike Air Max 90",
    price: "149",
    image: "/images/pant/3.jpg",
  },
  {
    id: 3,
    name: "Adidas Ultraboost 22",
    price: "180",
    image: "/images/shoe/shoe.png"
  },
  {
    id: 4,
    name: "ASICS Superblast 2",
    price: "199",
    image: "/images/pant/2.jpg",
  },
  {
    id: 5,
    name: "Nike Air Max 90",
    price: "149",
    image: "/images/shoe/3.jpg",
  },
  {
    id: 6,
    name: "Adidas Ultraboost 22",
    price: "180",
    image: "/images/shoe/shoe.png"
  },
  {
    id: 7,
    name: "ASICS Superblast 2",
    price: "199",
    image: "/images/pant/6.jpg",
  },
  {
    id: 8,
    name: "Nike Air Max 90",
    price: "149",
    image: "/images/pant/5.jpg",
  },
  {
    id: 9,
    name: "Adidas Ultraboost 22",
    price: "180",
    image: "/images/pant/4.jpg"
  },
];


export default function ProductSlider() {
  useEffect(() => {
    // Ensure swiper navigation elements are mounted
  }, []);

  return (
    <div className="py-10 relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Shop by</h2>
        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button className="swiper-button-prev-custom w-10 h-10   hover:text-teal-500 cursor-pointer flex items-center justify-center">
            <ChevronLeft />
          </button>
          <button className="swiper-button-next-custom w-10 h-10  hover:text-teal-500 cursor-pointer flex items-center justify-center">
            <ChevronRight />
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={1.2}
        spaceBetween={16}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: 6.2 },
        }}
        modules={[Navigation]}
        onInit={(swiper) => {
          // Manually attach navigation buttons on mount
          swiper.params.navigation.prevEl = '.swiper-button-prev-custom';
          swiper.params.navigation.nextEl = '.swiper-button-next-custom';
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
           <ProductCard item={item}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
