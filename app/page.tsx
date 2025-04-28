import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getNewArrivals } from "@/data/products"
import ProductImage from "@/components/product-image"

export const metadata: Metadata = {
  title: "Home",
  description: "Discover our minimalist clothing collection designed for the modern individual.",
}

export default function Home() {
  // Get new arrivals from centralized data
  const newArrivals = getNewArrivals(3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="MODERNO clothing collection"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8">
          <div className="bg-white/90 p-6 sm:p-8 md:p-12 max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 tracking-wider">NEPALI CRAFTSMANSHIP</h1>
            <p className="text-lg md:text-xl mb-8 text-neutral-700">
              Authentic handcrafted clothing from the heart of Nepal
            </p>
            <Link
              href="/products"
              className="inline-block px-6 sm:px-8 py-3 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light mb-8 md:mb-12 text-center">OUR PHILOSOPHY</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center p-4 sm:p-6">
            <h3 className="text-xl mb-4 font-medium">Handcrafted</h3>
            <p className="text-neutral-600">
              Each piece is carefully handcrafted by skilled Nepali artisans using traditional techniques.
            </p>
          </div>
          <div className="text-center p-4 sm:p-6">
            <h3 className="text-xl mb-4 font-medium">Sustainable</h3>
            <p className="text-neutral-600">
              We use locally sourced, eco-friendly materials that honor Nepal's natural resources.
            </p>
          </div>
          <div className="text-center p-4 sm:p-6">
            <h3 className="text-xl mb-4 font-medium">Authentic</h3>
            <p className="text-neutral-600">
              Our designs blend traditional Nepali aesthetics with modern, minimalist sensibilities.
            </p>
          </div>
        </div>
      </section>

      {/* New Arrivals Preview */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light mb-8 md:mb-12 text-center">NEW ARRIVALS</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {newArrivals.map((product) => (
              <div key={product.id} className="group">
                <div className="mb-4">
                  <ProductImage
                    src={product.images}
                    alt={product.name}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-neutral-600 mb-2">NPR {(product.price * 133).toLocaleString()}</p>
                <p className="text-neutral-500 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                <Link
                  href={`/products/${product.id}`}
                  className="text-sm underline underline-offset-4 hover:text-neutral-500 transition-colors"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block px-8 py-3 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>


    </div>
  )
}
