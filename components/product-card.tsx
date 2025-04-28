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
    <div className="group">
      <Link href={`/products/${id}`} className="block">
        <div className="mb-4">
          <ProductImage
            src={image}
            alt={name}
            className="group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h3 className="text-base sm:text-lg font-medium">{name}</h3>
        <p className="text-neutral-600 mb-2">NPR {(price * 133).toLocaleString()}</p>
        {description && <p className="text-neutral-500 text-sm line-clamp-2 mb-2">{description}</p>}
        <span className="text-sm underline underline-offset-4 hover:text-neutral-500 transition-colors">
          View Details
        </span>
      </Link>
    </div>
  )
}
