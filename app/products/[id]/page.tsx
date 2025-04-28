"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import ImageCarousel from "@/components/image-carousel"
import SizeSelector from "@/components/size-selector"
import { getProductById } from "@/data/products"

export default function ProductPage() {
  const params = useParams()
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const id = Number(params.id)
      const foundProduct = getProductById(id)
      setProduct(foundProduct)
      setLoading(false)
    }
  }, [params.id])

  if (loading) {
    return <div className="py-12 px-4 text-center">Loading...</div>
  }

  if (!product) {
    return <div className="py-12 px-4 text-center">Product not found</div>
  }

  // Convert price to NPR (approximate exchange rate)
  const priceNPR = product.price * 133

  // Stock status
  const stockStatus =
    product.stock > 10 ? "In Stock" : product.stock > 0 ? `Low Stock (${product.stock} left)` : "Out of Stock"

  const stockStatusColor = product.stock > 10 ? "text-green-600" : product.stock > 0 ? "text-amber-600" : "text-red-600"

  return (
    <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="mb-6">
        <Link href="/products" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
          ← Back to Products
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div>
          <ImageCarousel images={product.images} alt={product.name} />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-light mb-2">{product.name}</h1>

          <div className="flex items-center gap-4 mb-4">
            <p className="text-xl font-medium">NPR {priceNPR.toLocaleString()}</p>
            <p className="text-sm text-neutral-500">(USD ${product.price})</p>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className={`text-sm font-medium ${stockStatusColor}`}>{stockStatus}</span>
            <span className="text-sm text-neutral-500">SKU: {product.sku}</span>
          </div>

          {/* Description - first paragraph */}
          <p className="text-neutral-700 mb-6">{product.description.split("\n")[0]}</p>

          {/* Size Selector */}
          <SizeSelector sizes={product.sizes} availableSizes={product.availableSizes} />

          {/* Material & Care */}
          <div className="mt-10 pt-6 border-t border-neutral-200">
            <h2 className="text-lg font-medium mb-4">Details</h2>
            <div className="grid gap-4">
              <div>
                <h3 className="text-sm font-medium">Material</h3>
                <p className="text-neutral-600">{product.material}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium">Care</h3>
                <p className="text-neutral-600">{product.care}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Description */}
      <div className="mt-12 pt-8 border-t border-neutral-200">
        <h2 className="text-xl font-medium mb-6">About this product</h2>
        <div className="prose max-w-none text-neutral-700">
          {product.description.split("\n\n").map((paragraph: string, i: number) => (
            <p key={i} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Related Products would go here */}
    </div>
  )
}
