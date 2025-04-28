"use client"

import { useState } from "react"

interface SizeSelectorProps {
  sizes: string[]
  availableSizes: string[]
}

export default function SizeSelector({ sizes, availableSizes }: SizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium mb-3">Size</h3>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => {
          const isAvailable = availableSizes.includes(size)
          return (
            <button
              key={size}
              onClick={() => isAvailable && setSelectedSize(size)}
              disabled={!isAvailable}
              className={`
                h-10 min-w-[40px] px-3 border rounded-md flex items-center justify-center
                ${selectedSize === size ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-300"}
                ${isAvailable ? "hover:border-neutral-900" : "opacity-40 cursor-not-allowed"}
                transition-colors
              `}
            >
              {size}
            </button>
          )
        })}
      </div>
      {selectedSize ? (
        <p className="text-sm text-neutral-600 mt-2">Selected size: {selectedSize}</p>
      ) : (
        <p className="text-sm text-neutral-600 mt-2">Please select a size</p>
      )}
    </div>
  )
}
