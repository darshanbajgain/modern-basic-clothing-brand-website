import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Home",
  description: "Discover our minimalist clothing collection designed for the modern individual.",
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="MANYUMI clothing collection"
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
            <div className="group">
              <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-md">
                <Image
                  src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
                  alt="Nepali Cotton Dress"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-medium">Nepali Cotton Dress</h3>
              <p className="text-neutral-600 mb-2">NPR 11,837</p>
              <p className="text-neutral-500 text-sm mb-3 line-clamp-2">
                Handcrafted cotton dress made from locally sourced materials with traditional embroidery.
              </p>
              <Link
                href="/products/1"
                className="text-sm underline underline-offset-4 hover:text-neutral-500 transition-colors"
              >
                View Details
              </Link>
            </div>
            <div className="group">
              <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-md">
                <Image
                  src="https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
                  alt="Handwoven Scarf"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-medium">Handwoven Scarf</h3>
              <p className="text-neutral-600 mb-2">NPR 5,985</p>
              <p className="text-neutral-500 text-sm mb-3 line-clamp-2">
                Soft, lightweight scarf handwoven by skilled artisans using traditional techniques.
              </p>
              <Link
                href="/products/2"
                className="text-sm underline underline-offset-4 hover:text-neutral-500 transition-colors"
              >
                View Details
              </Link>
            </div>
            <div className="group">
              <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-md">
                <Image
                  src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80"
                  alt="Himalayan Wool Jacket"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-medium">Himalayan Wool Jacket</h3>
              <p className="text-neutral-600 mb-2">NPR 17,157</p>
              <p className="text-neutral-500 text-sm mb-3 line-clamp-2">
                Warm and durable jacket made from authentic Himalayan wool with modern styling.
              </p>
              <Link
                href="/products/3"
                className="text-sm underline underline-offset-4 hover:text-neutral-500 transition-colors"
              >
                View Details
              </Link>
            </div>
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
