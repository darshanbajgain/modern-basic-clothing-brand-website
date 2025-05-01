"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import ProductCard from "@/components/product-card"
import { products, categories } from "@/data/products"

export default function ProductsClient() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')

  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200])
  const [filteredProducts, setFilteredProducts] = useState(products)

  // Apply filters when they change
  useEffect(() => {
    let result = products

    // Filter by category
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory)
    }

    // Filter by price
    result = result.filter(product =>
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    )

    setFilteredProducts(result)
  }, [selectedCategory, priceRange])

  // Update category from URL parameter when it changes
  useEffect(() => {
    setSelectedCategory(categoryParam)
  }, [categoryParam])

  // Handle price range change
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max])
  }

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory(null)
    setPriceRange([0, 200])
  }

  return (
    <div className="max-w-7xl mx-auto my-16 py-16">
      {/* Main content with filters and products */}
      <div className="container space-y-4 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 relative">
          {/* Sidebar with filters */}
          <div className="md:w-72 flex-shrink-0 static">
            <div className="sticky top-24 bg-white p-6 border border-neutral-200 rounded-md shadow-sm">
              <h2 className="font-medium text-lg mb-6 pb-2 border-b border-neutral-100">Filters</h2>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-medium text-sm mb-4 uppercase text-neutral-500 tracking-wider">Categories</h3>
                <div className="space-y-3">
                  {categories.map(category => (
                    <div key={category.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`category-${category.id}`}
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                        className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-500"
                      />
                      <label htmlFor={`category-${category.id}`} className="ml-3 text-sm text-neutral-700">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-medium text-sm mb-4 uppercase text-neutral-500 tracking-wider">Price Range (USD)</h3>
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-800">${priceRange[0]}</span>
                    <span className="text-sm font-medium text-neutral-800">${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(priceRange[0], parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-800"
                    aria-label="Maximum price range"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => handlePriceChange(0, 50)}
                      className={`text-xs px-3 py-2 border ${priceRange[0] === 0 && priceRange[1] === 50 ? 'bg-neutral-800 text-white border-neutral-800' : 'border-neutral-300 hover:border-neutral-400'} rounded-md transition-colors`}
                    >
                      Under $50
                    </button>
                    <button
                      type="button"
                      onClick={() => handlePriceChange(50, 100)}
                      className={`text-xs px-3 py-2 border ${priceRange[0] === 50 && priceRange[1] === 100 ? 'bg-neutral-800 text-white border-neutral-800' : 'border-neutral-300 hover:border-neutral-400'} rounded-md transition-colors`}
                    >
                      $50-$100
                    </button>
                    <button
                      type="button"
                      onClick={() => handlePriceChange(100, 200)}
                      className={`text-xs px-3 py-2 border ${priceRange[0] === 100 && priceRange[1] === 200 ? 'bg-neutral-800 text-white border-neutral-800' : 'border-neutral-300 hover:border-neutral-400'} rounded-md transition-colors`}
                    >
                      $100+
                    </button>
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              <button
                type="button"
                onClick={clearFilters}
                className="w-full py-3 text-sm font-medium bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>
          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-md border border-neutral-200 shadow-sm">
              <p className="text-sm font-medium text-neutral-700">
                <span className="font-bold text-neutral-900">{filteredProducts.length}</span> products found
              </p>
              {(selectedCategory || priceRange[0] > 0 || priceRange[1] < 200) && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm text-neutral-700 hover:text-neutral-900 flex items-center gap-1"
                >
                  <span>Clear filters</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-16 text-center bg-white rounded-md border border-neutral-200 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-neutral-400">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                <p className="text-neutral-500 mb-4">No products match your filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-2 px-4 py-2 text-sm bg-neutral-800 text-white rounded-md hover:bg-neutral-700 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-12 md:gap-x-8">
                {filteredProducts.map((product) => (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
