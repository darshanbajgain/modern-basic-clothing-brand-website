import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">MANYUMI</h3>
            <p className="text-neutral-600 text-sm">Authentic Nepali clothing with a modern, minimalist approach.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-neutral-600 hover:text-black transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-neutral-600 hover:text-black transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-neutral-600 hover:text-black transition-colors">
                  Bestsellers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-black transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-black transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-black transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-neutral-600 hover:text-black transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-black transition-colors">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-black transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600">
          <p>
            &copy; {currentYear} MANYUMI. All rights reserved.{" "}
            <span className="block md:inline mt-1 md:mt-0">Developer: Darshan Bajgain</span>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-black transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
