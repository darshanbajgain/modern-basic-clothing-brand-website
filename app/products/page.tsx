import type { Metadata } from "next"
import ProductCard from "@/components/product-card"
import { products } from "@/data/products"

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our collection of minimalist, sustainable clothing designed for everyday wear.",
}

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
            image={product.images}
            description={product.description ? product.description.split('\n')[0] : ''}
          />
        ))}
      </div>
    </div>
  )
}
