import type { Metadata } from "next"
import ProductCard from "@/components/product-card"

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our collection of minimalist, sustainable clothing designed for everyday wear.",
}

// Mock product data with real image URLs
const products = [
  {
    id: 1,
    name: "Nepali Cotton Dress",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    description: "Handcrafted cotton dress made from locally sourced materials with traditional embroidery.",
  },
  {
    id: 2,
    name: "Handwoven Scarf",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    description: "Soft, lightweight scarf handwoven by skilled artisans using traditional techniques.",
  },
  {
    id: 3,
    name: "Himalayan Wool Jacket",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
    description: "Warm and durable jacket made from authentic Himalayan wool with modern styling.",
  },
  {
    id: 4,
    name: "Traditional Kurta",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    description: "Elegant kurta with intricate detailing, perfect for special occasions or casual wear.",
  },
  {
    id: 5,
    name: "Pashmina Shawl",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1599733687773-14a79e3a48fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    description: "Luxuriously soft pashmina shawl in a versatile neutral tone that complements any outfit.",
  },
  {
    id: 6,
    name: "Hemp Blend Top",
    price: 59,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    description: "Sustainable hemp blend top that's breathable, durable and gets softer with each wash.",
  },
  {
    id: 7,
    name: "Dhaka Fabric Bag",
    price: 39,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80",
    description: "Colorful bag made from traditional Dhaka fabric, perfect for everyday use.",
  },
  {
    id: 8,
    name: "Organic Cotton Pants",
    price: 79,
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    description: "Comfortable, versatile pants made from organic cotton with a relaxed fit.",
  },
  {
    id: 9,
    name: "Embroidered Vest",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    description: "Beautifully embroidered vest that adds a touch of Nepali craftsmanship to any outfit.",
  },
]

export default function ProductsPage() {
  return (
    <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-light mb-4 text-center">OUR COLLECTION</h1>
      <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-8 md:mb-12">
        Authentic Nepali clothing crafted with traditional techniques and sustainable materials. Each piece tells a
        story of Nepal's rich cultural heritage.
      </p>

      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-12 md:gap-x-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
    </div>
  )
}
