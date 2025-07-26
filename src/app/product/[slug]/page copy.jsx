"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Thumbs, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"
import "swiper/css/effect-fade"

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
    { name: "Midnight Black", color: "#1a1a1a", available: true },
    { name: "Pure White", color: "#ffffff", available: true },
    { name: "Crimson Red", color: "#dc2626", available: true },
    { name: "Ocean Blue", color: "#0ea5e9", available: false },
  ],
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
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
    images: ["/placeholder.svg?height=100&width=100"],
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
    images: [],
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
    images: ["/placeholder.svg?height=100&width=100"],
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
    images: [],
  },
]

// Related products data
const relatedProducts = [
  {
    id: 2,
    name: "Nike Air Force 1 '07",
    price: 89.99,
    originalPrice: 109.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviewCount: 1523,
    badge: "Bestseller",
  },
  {
    id: 3,
    name: "Adidas Ultraboost 22",
    price: 179.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviewCount: 892,
    badge: "New",
  },
  {
    id: 4,
    name: "New Balance 990v5",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviewCount: 654,
    badge: "Premium",
  },
  {
    id: 5,
    name: "Converse Chuck Taylor All Star",
    price: 59.99,
    originalPrice: 69.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.3,
    reviewCount: 2156,
    badge: "Classic",
  },
  {
    id: 6,
    name: "Vans Old Skool",
    price: 64.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.4,
    reviewCount: 1789,
    badge: "Trending",
  },
]

const StarIcon = ({ filled = true, className = "w-5 h-5" }) => (
  <svg
    className={`${className} ${filled ? "text-amber-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const VerifiedIcon = ({ className = "w-4 h-4" }) => (
  <svg className={`${className} text-emerald-500`} fill="currentColor" viewBox="0 0 20 20">
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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[80vh] overflow-y-auto shadow-2xl">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Select Your Size</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {sizes.map((sizeOption) => (
              <button
                key={sizeOption.size}
                onClick={() => sizeOption.available && onSizeSelect(sizeOption.size)}
                disabled={!sizeOption.available}
                className={`relative p-4 border-2 rounded-xl text-center font-semibold transition-all duration-200 ${
                  selectedSize === sizeOption.size
                    ? "border-blue-500 bg-blue-50 text-blue-700 shadow-lg scale-105"
                    : sizeOption.available
                      ? "border-gray-200 hover:border-gray-300 hover:shadow-md hover:scale-102"
                      : "border-gray-100 text-gray-400 cursor-not-allowed bg-gray-50"
                }`}
              >
                <span className="text-lg">{sizeOption.size}</span>
                {!sizeOption.available && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-0.5 bg-red-400 rotate-45"></div>
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Size Guide
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                US sizes shown
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                For wide feet, consider sizing up
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Free returns within 30 days
              </li>
            </ul>
          </div>

          <button
            onClick={onClose}
            disabled={!selectedSize}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {selectedSize ? `Confirm Size ${selectedSize}` : "Choose a Size"}
          </button>
        </div>
      </div>
    </div>
  )
}

const AddReviewModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    rating: 0,
    title: "",
    content: "",
    name: "",
    email: "",
    images: [],
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    if (files.length + formData.images.length > 3) {
      setErrors((prev) => ({ ...prev, images: "Maximum 3 images allowed" }))
      return
    }
    setFormData((prev) => ({ ...prev, images: [...prev.images, ...files] }))
  }

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (formData.rating === 0) newErrors.rating = "Please select a rating"
    if (!formData.title.trim()) newErrors.title = "Title is required"
    if (!formData.content.trim()) newErrors.content = "Review content is required"
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate API call
      onSubmit(formData)
      setFormData({ rating: 0, title: "", content: "", name: "", email: "", images: [] })
      onClose()
    } catch (error) {
      console.error("Error submitting review:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Write a Review</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Rating */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Your Rating *</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleInputChange("rating", star)}
                    className="transition-transform hover:scale-110"
                  >
                    <StarIcon
                      filled={star <= formData.rating}
                      className={`w-8 h-8 ${
                        star <= formData.rating ? "text-amber-400" : "text-gray-300 hover:text-amber-200"
                      }`}
                    />
                  </button>
                ))}
              </div>
              {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Review Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Summarize your experience"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Your Review *</label>
              <textarea
                value={formData.content}
                onChange={(e) => handleInputChange("content", e.target.value)}
                placeholder="Tell others about your experience with this product"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              />
              {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
            </div>

            {/* Images */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Add Photos (Optional)</label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <div className="text-gray-500">
                    <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <p className="font-medium">Click to upload images</p>
                    <p className="text-sm">Maximum 3 images</p>
                  </div>
                </label>
              </div>
              {formData.images.length > 0 && (
                <div className="flex gap-3 mt-3">
                  {formData.images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(image) || "/placeholder.svg"}
                        alt={`Upload ${index + 1}`}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
              {errors.images && <p className="text-red-500 text-sm mt-1">{errors.images}</p>}
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Your Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const ReviewCard = ({ review }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {review.reviewer.charAt(0)}
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} filled={i < review.rating} className="w-4 h-4" />
              ))}
            </div>
            {review.verified && (
              <div className="flex items-center gap-1 text-emerald-600">
                <VerifiedIcon className="w-4 h-4" />
                <span className="text-xs font-medium">Verified</span>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-600">{review.reviewer}</p>
        </div>
      </div>
      <span className="text-xs text-gray-500">{review.timeAgo}</span>
    </div>

    <h4 className="font-bold text-gray-900 mb-3 text-lg">{review.title}</h4>
    <p className="text-gray-700 leading-relaxed mb-4">{review.content}</p>

    {review.images && review.images.length > 0 && (
      <div className="flex gap-2 mb-4">
        {review.images.map((image, index) => (
          <img
            key={index}
            src={image || "/placeholder.svg"}
            alt={`Review image ${index + 1}`}
            className="w-16 h-16 object-cover rounded-lg border border-gray-200"
          />
        ))}
      </div>
    )}

    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          <span className="text-sm font-medium">Helpful ({review.helpful})</span>
        </button>
      </div>
      <button className="text-gray-400 hover:text-gray-600 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01" />
        </svg>
      </button>
    </div>
  </div>
)

const ProductCard = ({ product }) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
    <div className="relative aspect-square overflow-hidden">
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {product.badge}
          </span>
        </div>
      )}
      <img
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
    <div className="p-6">
      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-lg">{product.name}</h3>
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} filled={i < Math.floor(product.rating)} className="w-4 h-4" />
          ))}
        </div>
        <span className="text-sm text-gray-600">({product.reviewCount})</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-bold text-xl text-gray-900">${product.price}</span>
        {product.originalPrice && <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>}
      </div>
    </div>
  </div>
)

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState(productData.colors[0].name)
  const [quantity, setQuantity] = useState(1)
  const [isSizeModalOpen, setIsSizeModalOpen] = useState(false)
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [reviews, setReviews] = useState(reviewsData)

  const handleSizeSelect = (size) => {
    setSelectedSize(size)
    setIsSizeModalOpen(false)
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setIsSizeModalOpen(true)
      return
    }
    alert(`Added ${quantity} x ${productData.name} (Size: ${selectedSize}, Color: ${selectedColor}) to cart!`)
  }

  const handleReviewSubmit = (reviewData) => {
    const newReview = {
      id: reviews.length + 1,
      title: reviewData.title,
      content: reviewData.content,
      reviewer: reviewData.name,
      timeAgo: "Just now",
      rating: reviewData.rating,
      verified: false,
      helpful: 0,
      images: reviewData.images.map((file) => URL.createObjectURL(file)),
    }
    setReviews([newReview, ...reviews])
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Modern Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <a href="#" className="hover:text-blue-600 transition-colors">
          Home
        </a>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <a href="#" className="hover:text-blue-600 transition-colors">
          Shoes
        </a>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <a href="#" className="hover:text-blue-600 transition-colors">
          Sneakers
        </a>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-gray-900 font-medium">{productData.name}</span>
      </nav>

      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Enhanced Image Gallery */}
        <div className="space-y-6">
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Thumbs, EffectFade]}
              thumbs={{ swiper: thumbsSwiper }}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              pagination={{ clickable: true }}
              effect="fade"
              className="aspect-square rounded-3xl overflow-hidden shadow-2xl"
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

            {/* Custom Navigation */}
            <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white transition-all shadow-lg">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white transition-all shadow-lg">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Enhanced Thumbnail Navigation */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={16}
            slidesPerView={4}
            watchSlidesProgress
            className="thumbs-swiper"
          >
            {productData.images.map((image, index) => (
              <SwiperSlide key={index} className="cursor-pointer">
                <div className="aspect-square rounded-xl overflow-hidden border-3 border-transparent hover:border-blue-400 transition-all">
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

        {/* Enhanced Product Info */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {productData.brand}
              </span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm text-emerald-600 font-medium">In Stock</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">{productData.name}</h1>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < Math.floor(productData.rating)} className="w-6 h-6" />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-900">{productData.rating}</span>
                <span className="text-gray-600">({productData.reviewCount} reviews)</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-bold text-gray-900">${productData.price}</span>
              {productData.originalPrice && (
                <>
                  <span className="text-2xl text-gray-500 line-through">${productData.originalPrice}</span>
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {productData.discount}% OFF
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Enhanced Color Selection */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Color: {selectedColor}</h3>
            <div className="flex gap-4">
              {productData.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => color.available && setSelectedColor(color.name)}
                  disabled={!color.available}
                  className={`relative w-12 h-12 rounded-full border-4 transition-all ${
                    selectedColor === color.name ? "border-blue-500 scale-110" : "border-gray-300 hover:border-gray-400"
                  } ${!color.available ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
                  style={{ backgroundColor: color.color }}
                  title={color.name}
                >
                  {selectedColor === color.name && (
                    <div className="absolute inset-0 rounded-full border-2 border-white" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Size Selection */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Size</h3>
            <button
              onClick={() => setIsSizeModalOpen(true)}
              className="w-full p-4 border-2 border-gray-300 rounded-xl text-left hover:border-blue-400 transition-all bg-white font-medium"
            >
              {selectedSize ? `Size ${selectedSize}` : "Select Size"}
            </button>
          </div>

          {/* Enhanced Quantity */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quantity</h3>
            <div className="flex items-center border-2 border-gray-300 rounded-xl w-40 bg-white">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-gray-100 transition-colors rounded-l-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="flex-1 text-center font-semibold text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-gray-100 transition-colors rounded-r-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleAddToCart}
              disabled={!productData.inStock}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Add to Cart - ${(productData.price * quantity).toFixed(2)}
            </button>
            <button className="w-full border-2 border-gray-300 text-gray-900 py-4 px-8 rounded-2xl font-bold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Add to Wishlist
              </div>
            </button>
          </div>

          {/* Enhanced Features */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Key Features
            </h3>
            <ul className="space-y-3">
              {productData.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Enhanced Product Description */}
      <div className="mb-20">
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Description</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">{productData.description}</p>
          </div>
        </div>
      </div>

      {/* Enhanced Reviews Section */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Customer Reviews</h2>
          <button
            onClick={() => setIsReviewModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Write a Review
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reviews.slice(0, 4).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all">
            Load More Reviews
          </button>
        </div>
      </div>

      {/* Enhanced Related Products */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-10">You Might Also Like</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: ".related-next",
            prevEl: ".related-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="relative"
        >
          {relatedProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Related Products Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="related-prev w-12 h-12 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:border-blue-400 hover:bg-blue-50 transition-all shadow-lg">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="related-next w-12 h-12 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:border-blue-400 hover:bg-blue-50 transition-all shadow-lg">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modals */}
      <SizeModal
        isOpen={isSizeModalOpen}
        onClose={() => setIsSizeModalOpen(false)}
        sizes={productData.sizes}
        selectedSize={selectedSize}
        onSizeSelect={handleSizeSelect}
      />

      <AddReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmit={handleReviewSubmit}
      />

      {/* Enhanced Custom Styles */}
      <style jsx global>{`
        .thumbs-swiper .swiper-slide-thumb-active div {
          border-color: #3b82f6 !important;
          transform: scale(1.05);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background: #e5e7eb !important;
          opacity: 1 !important;
        }
        
        .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #3b82f6, #6366f1) !important;
          transform: scale(1.2);
        }
        
        .scale-102 {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  )
}
