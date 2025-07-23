import CardWithFullImage from "../shared/CardWithFullImage";

  const products = [
  { name: 'Gray Pant', image: '/images/pant/2.jpg' },
  { name: 'Jins Pant', image: '/images/pant/5.jpg' },
  { name: 'Black Pant', image: '/images/pant/3.jpg' },
  { name: 'Formal Shoes', image: '/images/pant/4.jpg' },
  { name: 'Casual Shoes', image: '/images/shoe/4.jpg' },
  { name: 'Sandals', image: '/images/shoe/shoe_2.png' },
  { name: 'Pants', image: '/images/catImg/pant.webp' },
  { name: 'Shirts', image: '/images/catImg/shirt.webp' },
  { name: 'Accessories', image: '/images/catImg/accessories.webp' },
  { name: 'Panjabi', image: '/images/catImg/panjabi.webp' },
  { name: 'T-Shirts', image: '/images/catImg/shirt.webp' },
  { name: 'Jackets', image: '/images/catImg/jacket.png' },
];

export default function JustDroppedSection() {

  return (
    <section className="py-12 ">
      <h1 className="font-semibold text-3xl mb-3">
Just Dropped</h1>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
     {
    products?.slice(0,3).map((product,i)=>(
      <CardWithFullImage key={i} item={product}/>
    ))
   }
  </div>
    </section>
  )
}
