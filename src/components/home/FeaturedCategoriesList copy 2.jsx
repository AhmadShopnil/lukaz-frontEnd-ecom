import RoundOnHoverCard from "../Cards/RoundOnHoverCard";



const products = [
  {
    mainImage: '/images/shoe/2.jpg',
    hoverImage: '/images/shoe/10.jpg',
    category: 'Shoes',
  },
  {
     mainImage: '/images/shoe/2.jpg',
    hoverImage: '/images/shoe/10.jpg',
    category: 'Jackets',
  },
  {
    mainImage: '/product5.jpg',
    hoverImage: '/product6.jpg',
    category: 'Watches',
  },
];

export default function ProductSection() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Collections</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {products.map((product, index) => (
            <RoundOnHoverCard
              key={index}
              mainImage={product.mainImage}
              hoverImage={product.hoverImage}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
