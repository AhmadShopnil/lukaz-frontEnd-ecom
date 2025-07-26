'use client';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { name: 'Running Shoes', image: '/images/shoe/2.jpg' },
  { name: 'Sneakers', image: '/images/shoe/shoe.png' },
  { name: 'Boots', image: '/images/shoe/5.jpg' },
  { name: 'Formal Shoes', image: '/images/shoe/3.jpg' },
  { name: 'Casual Shoes', image: '/images/shoe/4.jpg' },
  { name: 'Sandals', image: '/images/shoe/shoe_2.png' },
  { name: 'Pants', image: '/images/catImg/pant.webp' },
  { name: 'Shirts', image: '/images/catImg/shirt.webp' },
  { name: 'Accessories', image: '/images/catImg/accessories.webp' },
  { name: 'Panjabi', image: '/images/catImg/panjabi.webp' },
  { name: 'T-Shirts', image: '/images/catImg/shirt.webp' },
  { name: 'Jackets', image: '/images/catImg/jacket.png' },
];

export default function ShopByCategoriesSlider() {
  useEffect(() => {
    // Ensure swiper navigation elements are mounted
  }, []);

  return (
    <div className="py-10 relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Shop by Categories</h2>
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
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: 5.2 },
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
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[350px] rounded-md bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute text-center bottom-7 left-4 right-4 text-white text-2xl font-bold">
                {cat.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
