import { Suspense } from "react"
import ProductsClient from "./products-client"

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsClient />
    </Suspense>
  )
}

function ProductsLoading() {
  return (
    <div className="max-w-7xl mx-auto my-16 py-16">
      <div className="container space-y-4 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            {/* Sidebar skeleton */}
            <div className="h-[600px] bg-gray-200 rounded"></div>

            {/* Products grid skeleton */}
            <div>
              <div className="h-12 bg-gray-200 rounded mb-6"></div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-gray-200 rounded h-80"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
