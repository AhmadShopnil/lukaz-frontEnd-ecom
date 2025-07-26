"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Thumbs } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"

// Product data
const productData = {
  id: 1,
  name: "Nike Air Max 270 React",
  brand: "Nike",
  price: 129.99,
  originalPrice: 159.99,
  discount: 19,
  rating: 4.6,
  reviewCount: 2847,
  description:
    "The Nike Air Max 270 React combines two of Nike's most innovative technologies for a comfortable, lightweight feel. The React foam midsole delivers exceptional comfort and energy return, while the Air Max 270 unit provides maximum cushioning.",
  features: [
    "React foam midsole for lightweight comfort",
    "Air Max 270 unit for maximum cushioning",
    "Breathable mesh upper",
    "Rubber outsole for durability",
    "Heel pull tab for easy on and off",
  ],
  sizes: [
    { size: "6", available: true },
    { size: "6.5", available: true },
    { size: "7", available: true },
    { size: "7.5", available: false },
    { size: "8", available: true },
    { size: "8.5", available: true },
    { size: "9", available: true },
    { size: "9.5", available: true },
    { size: "10", available: true },
    { size: "10.5", available: false },
    { size: "11", available: true },
    { size: "11.5", available: true },
    { size: "12", available: true },
  ],
  colors: [
    { name: "Black/White", color: "#000000", available: true },
    { name: "White/Blue", color: "#ffffff", available: true },
    { name: "Red/Black", color: "#dc2626", available: true },
    { name: "Navy/Gray", color: "#1e40af", available: false },
  ],
  images: [
    "/images/pant/2.jpg",
    "/images/pant/1.jpg",
    "/images/pant/3.jpg",
    "/images/pant/4.jpg",
    "/images/pant/5.jpg",
  ],
  inStock: true,
  stockCount: 23,
}

// Reviews data
const reviewsData = [
  {
    id: 1,
    title: "Amazing comfort and style",
    content:
      "These shoes are incredibly comfortable for daily wear. The Air Max cushioning is perfect for long walks and the design looks great with any outfit.",
    reviewer: "Mike Johnson",
    timeAgo: "2 days ago",
    rating: 5,
    verified: true,
    helpful: 24,
  },
  {
    id: 2,
    title: "Great quality, runs true to size",
    content:
      "Excellent build quality and the sizing is accurate. I ordered my usual size and they fit perfectly. Highly recommend!",
    reviewer: "Sarah Chen",
    timeAgo: "1 week ago",
    rating: 5,
    verified: true,
    helpful: 18,
  },
  {
    id: 3,
    title: "Perfect for running",
    content:
      "I use these for my daily runs and they provide excellent support and cushioning. The React foam really makes a difference.",
    reviewer: "David Wilson",
    timeAgo: "2 weeks ago",
    rating: 4,
    verified: true,
    helpful: 15,
  },
  {
    id: 4,
    title: "Stylish and comfortable",
    content: "Love the design and they're very comfortable for all-day wear. The Air Max technology really works!",
    reviewer: "Emma Davis",
    timeAgo: "3 weeks ago",
    rating: 5,
    verified: true,
    helpful: 12,
  },
]

// Related products data
const relatedProducts = [
  {
    id: 2,
    name: "Nike Air Force 1",
    price: 89.99,
    originalPrice: 109.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviewCount: 1523,
  },
  {
    id: 3,
    name: "Adidas Ultraboost 22",
    price: 179.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviewCount: 892,
  },
  {
    id: 4,
    name: "New Balance 990v5",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviewCount: 654,
  },
  {
    id: 5,
    name: "Converse Chuck Taylor",
    price: 59.99,
    originalPrice: 69.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.3,
    reviewCount: 2156,
  },
  {
    id: 6,
    name: "Vans Old Skool",
    price: 64.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.4,
    reviewCount: 1789,
  },
]



export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState(productData.colors[0].name)
  const [quantity, setQuantity] = useState(1)
  const [isSizeModalOpen, setIsSizeModalOpen] = useState(false)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const handleSizeSelect = (size) => {
    setSelectedSize(size)
    setIsSizeModalOpen(false)
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setIsSizeModalOpen(true)
      return
    }
    // Add to cart logic here
    alert(`Added ${quantity} x ${productData.name} (Size: ${selectedSize}, Color: ${selectedColor}) to cart!`)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <a href="#" className="hover:text-gray-700">
          Home
        </a>
        <span>/</span>
        <a href="#" className="hover:text-gray-700">
          Shoes
        </a>
        <span>/</span>
        <a href="#" className="hover:text-gray-700">
          Sneakers
        </a>
        <span>/</span>
        <span className="text-gray-900">{productData.name}</span>
      </nav>

      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <Swiper
            modules={[Navigation, Pagination, Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            navigation
            pagination={{ clickable: true }}
            className="aspect-square rounded-lg overflow-hidden"
          >
            {productData.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${productData.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail Navigation */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress
            className="thumbs-swiper"
          >
            {productData.images.map((image, index) => (
              <SwiperSlide key={index} className="cursor-pointer">
                <div className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-gray-300">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 mb-2">{productData.brand}</p>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{productData.name}</h1>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < Math.floor(productData.rating)} />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({productData.reviewCount} reviews)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-gray-900">${productData.price}</span>
              {productData.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">${productData.originalPrice}</span>
                  <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                    {productData.discount}% OFF
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Color: {selectedColor}</h3>
            <div className="flex gap-3">
              {productData.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => color.available && setSelectedColor(color.name)}
                  disabled={!color.available}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color.name ? "border-gray-900" : "border-gray-300"
                  } ${!color.available ? "opacity-50 cursor-not-allowed" : "hover:border-gray-500"}`}
                  style={{ backgroundColor: color.color }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
            <button
              onClick={() => setIsSizeModalOpen(true)}
              className="w-full p-3 border border-gray-300 rounded-lg text-left hover:border-gray-400 transition-colors"
            >
              {selectedSize ? `Size ${selectedSize}` : "Select Size"}
            </button>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
            <div className="flex items-center border border-gray-300 rounded-lg w-32">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:bg-gray-100">
                -
              </button>
              <span className="flex-1 text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-gray-100">
                +
              </button>
            </div>
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${productData.inStock ? "bg-green-500" : "bg-red-500"}`} />
            <span className="text-sm text-gray-600">
              {productData.inStock ? `In Stock (${productData.stockCount} left)` : "Out of Stock"}
            </span>
          </div>

          {/* Add to Cart */}
          <div className="space-y-3">
            <button
              onClick={handleAddToCart}
              disabled={!productData.inStock}
              className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Add to Cart
            </button>
            <button className="w-full border border-gray-300 text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Add to Wishlist
            </button>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Key Features</h3>
            <ul className="space-y-2">
              {productData.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Description</h2>
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">{productData.description}</p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium">Write a Review</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Load More Reviews
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {relatedProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Size Selection Modal */}
      <SizeModal
        isOpen={isSizeModalOpen}
        onClose={() => setIsSizeModalOpen(false)}
        sizes={productData.sizes}
        selectedSize={selectedSize}
        onSizeSelect={handleSizeSelect}
      />

      {/* Custom Styles */}
      <style jsx global>{`
        .thumbs-swiper .swiper-slide-thumb-active div {
          border-color: #374151 !important;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}




const StarIcon = ({ filled = true, className = "w-4 h-4" }) => (
  <svg
    className={`${className} ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const VerifiedIcon = ({ className = "w-4 h-4" }) => (
  <svg className={`${className} text-green-500`} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
)

const SizeModal = ({ isOpen, onClose, sizes, selectedSize, onSizeSelect }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Select Size</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {sizes.map((sizeOption) => (
              <button
                key={sizeOption.size}
                onClick={() => sizeOption.available && onSizeSelect(sizeOption.size)}
                disabled={!sizeOption.available}
                className={`p-3 border rounded-lg text-center font-medium transition-colors ${
                  selectedSize === sizeOption.size
                    ? "border-black bg-black text-white"
                    : sizeOption.available
                      ? "border-gray-300 hover:border-gray-400"
                      : "border-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                {sizeOption.size}
                {!sizeOption.available && <div className="text-xs mt-1">Out of Stock</div>}
              </button>
            ))}
          </div>

          <div className="text-sm text-gray-600 mb-4">
            <p className="font-medium mb-2">Size Guide:</p>
            <ul className="space-y-1">
              <li>• US sizes shown</li>
              <li>• For wide feet, consider sizing up</li>
              <li>• Free returns within 30 days</li>
            </ul>
          </div>

          <button
            onClick={onClose}
            disabled={!selectedSize}
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            {selectedSize ? `Select Size ${selectedSize}` : "Choose a Size"}
          </button>
        </div>
      </div>
    </div>
  )
}

const ReviewCard = ({ review }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200">
    <div className="flex items-center gap-2 mb-3">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < review.rating} />
        ))}
      </div>
      {review.verified && (
        <div className="flex items-center gap-1 text-green-600">
          <VerifiedIcon />
          <span className="text-xs font-medium">Verified Purchase</span>
        </div>
      )}
    </div>

    <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
    <p className="text-gray-700 text-sm leading-relaxed mb-4">{review.content}</p>

    <div className="flex items-center justify-between text-xs text-gray-500">
      <div>
        <span className="font-medium">{review.reviewer}</span> • {review.timeAgo}
      </div>
      <div className="text-green-600">{review.helpful} people found this helpful</div>
    </div>
  </div>
)

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
    <div className="aspect-square overflow-hidden">
      <img
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
      <div className="flex items-center gap-1 mb-2">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} filled={i < Math.floor(product.rating)} className="w-3 h-3" />
          ))}
        </div>
        <span className="text-xs text-gray-500">({product.reviewCount})</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-bold text-gray-900">${product.price}</span>
        {product.originalPrice && <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>}
      </div>
    </div>
  </div>
)