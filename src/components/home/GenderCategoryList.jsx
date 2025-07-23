// components/CategoryCardList.jsx

import React from 'react';
import GenderCategoryCard from '../shared/GenderCategoryCard';


const cardData = [
  {
    title: "Men's",
    image: '/images/catImg/m1.jpg', // Replace with real image paths
    buttons: ['Shop Shoes', 'Shop Apparel', 'Shop Accessories'],
  },
  {
    title: "Women's",
    image: '/images/catImg/w1.jpg',
    buttons: ['Shop Shoes', 'Shop Apparel', 'Shop Accessories'],
  },
  {
    title: 'Kids',
    image: '/images/catImg/k1.jpg',
    buttons: ['Shop Shoes', 'Shop Apparel', 'Shop Accessories'],
  },
];

export default function GenderCategoryList() {
  return (
  <div className='py-10'>
    <h2 className='font-semibold text-3xl mb-4'>Shop By</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {cardData.map((card, idx) => (
        <GenderCategoryCard
          key={idx}
          title={card.title}
          image={card.image}
          buttons={card.buttons}
        />
      ))}
    </div>
  </div>
  );
}
