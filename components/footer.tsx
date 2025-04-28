import Link from "next/link"
import { Instagram, Twitter, Facebook, Github } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">MODERNO</h3>
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
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-neutral-600 hover:text-black transition-colors flex items-center gap-2">
                  <Instagram size={16} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-black transition-colors flex items-center gap-2">
                  <Facebook size={16} />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-black transition-colors flex items-center gap-2">
                  <Twitter size={16} />
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Developer Credit - Centered */}
        <div className="mt-12 pt-8 border-t border-neutral-200 text-center">
          <p className="text-sm text-neutral-500 font-medium mb-3">
            Developed by <span className="font-semibold text-neutral-700">Darshan Bajgain</span>
          </p>
          <div className="flex justify-center mb-6">
            <a
              href="https://github.com/darshanbajgain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-2"
            >
              <Github size={16} />
              <span className="text-sm font-medium mt-1">GitHub Profile</span>
            </a>
          </div>
        </div>

        {/* Copyright and Links */}
        <div className="pt-4 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600">
          <p>
            &copy; {currentYear} MODERNO. All rights reserved.
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
