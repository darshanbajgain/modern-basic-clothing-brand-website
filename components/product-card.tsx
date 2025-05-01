"use client"

import Link from "next/link"
import ProductImage from "./product-image"

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string | string[]
  description?: string
}

export default function ProductCard({ id, name, price, image, description }: ProductCardProps) {
  return (
    <div className="group relative">
      <Link href={`/products/${id}`} className="block">
        <div className="overflow-hidden rounded-md mb-4 bg-neutral-50">
          <ProductImage
            src={image}
            alt={name}
            className="group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="px-1">
          <h3 className="text-base sm:text-lg font-medium mb-1">{name}</h3>
          <p className="text-neutral-700 font-medium mb-2">NPR {(price * 133).toLocaleString()}</p>
          {description && <p className="text-neutral-500 text-sm line-clamp-2 mb-3">{description}</p>}
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm font-medium text-neutral-900 hover:text-neutral-700 transition-colors">
              View Details
            </span>
            <span className="text-xs px-2 py-1 bg-neutral-100 rounded-full">
              ${price}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
