import type { Metadata } from "next"
import { Mail, Clock, Phone, MessageCircle, ShoppingBag, Truck, RefreshCcw } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Us | MODERNO",
  description: "Need help with your order? Have questions about sizing or returns? Contact our customer service team for assistance with your MODERNO clothing purchase.",
}

export default function ContactPage() {
  return (
    <div className="my-16 py-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-light mb-4 text-center">CONTACT US</h1>
      <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-8 md:mb-12">
        We're here to help with any questions about your order, our products, or the stories behind them.
      </p>

      {/* Customer Service Boxes */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="bg-neutral-50 p-6 flex flex-col items-center text-center">
          <div className="bg-white p-3 rounded-full mb-4">
            <MessageCircle className="w-6 h-6 text-neutral-700" />
          </div>
          <h3 className="font-medium mb-2">General Inquiries</h3>
          <p className="text-neutral-600 text-sm mb-3">Questions about our brand or products</p>
          <Link href="#contact-form" className="text-sm underline underline-offset-4 mt-auto">
            Send a Message
          </Link>
        </div>

        <div className="bg-neutral-50 p-6 flex flex-col items-center text-center">
          <div className="bg-white p-3 rounded-full mb-4">
            <ShoppingBag className="w-6 h-6 text-neutral-700" />
          </div>
          <h3 className="font-medium mb-2">Order Support</h3>
          <p className="text-neutral-600 text-sm mb-3">Help with existing orders or payments</p>
          <Link href="#contact-form" className="text-sm underline underline-offset-4 mt-auto">
            Order Help
          </Link>
        </div>

        <div className="bg-neutral-50 p-6 flex flex-col items-center text-center">
          <div className="bg-white p-3 rounded-full mb-4">
            <Truck className="w-6 h-6 text-neutral-700" />
          </div>
          <h3 className="font-medium mb-2">Shipping</h3>
          <p className="text-neutral-600 text-sm mb-3">Delivery times and tracking information</p>
          <Link href="#shipping-info" className="text-sm underline underline-offset-4 mt-auto">
            Shipping Details
          </Link>
        </div>

        <div className="bg-neutral-50 p-6 flex flex-col items-center text-center">
          <div className="bg-white p-3 rounded-full mb-4">
            <RefreshCcw className="w-6 h-6 text-neutral-700" />
          </div>
          <h3 className="font-medium mb-2">Returns & Exchanges</h3>
          <p className="text-neutral-600 text-sm mb-3">Policy and process information</p>
          <Link href="#returns-policy" className="text-sm underline underline-offset-4 mt-auto">
            Return Policy
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div id="contact-form">
          <h2 className="text-2xl font-light mb-6">Get In Touch</h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="order" className="block text-sm font-medium text-neutral-700 mb-1">
                Order Number (if applicable)
              </label>
              <input
                type="text"
                id="order"
                name="order"
                className="w-full px-4 py-2 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
                placeholder="e.g. MNY12345"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
              >
                <option value="">Select a topic</option>
                <option value="order">Order Status</option>
                <option value="returns">Returns & Exchanges</option>
                <option value="product">Product Information</option>
                <option value="sizing">Sizing Questions</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information and Policies */}
        <div>
          <div className="space-y-6 mb-10">
            <div className="flex items-start">
              <Mail className="w-5 h-5 mt-1 mr-4 text-neutral-700" />
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-neutral-600">
                  <a href="mailto:support@MODERNO.com" className="hover:underline">support@MODERNO.com</a> - Customer Support
                </p>
                <p className="text-neutral-600">
                  <a href="mailto:orders@MODERNO.com" className="hover:underline">orders@MODERNO.com</a> - Order Inquiries
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-5 h-5 mt-1 mr-4 text-neutral-700" />
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-neutral-600">+977 1 4123456</p>
                <p className="text-neutral-600 text-sm">Available Sunday - Friday, 10am - 6pm NPT</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-5 h-5 mt-1 mr-4 text-neutral-700" />
              <div>
                <h3 className="font-medium mb-1">Customer Service Hours</h3>
                <p className="text-neutral-600">
                  Sunday - Friday: 10am - 6pm NPT
                  <br />
                  Saturday: Closed
                </p>
                <p className="text-neutral-600 text-sm mt-1">
                  We aim to respond to all inquiries within 24 hours.
                </p>
              </div>
            </div>
          </div>

          <div id="shipping-info" className="mb-10">
            <h2 className="text-2xl font-light mb-4">Shipping Information</h2>
            <div className="bg-neutral-50 p-6">
              <p className="text-neutral-600 mb-3">
                <strong>Domestic Shipping (Nepal):</strong> 2-3 business days
              </p>
              <p className="text-neutral-600 mb-3">
                <strong>International Shipping:</strong> 7-14 business days
              </p>
              <p className="text-neutral-600">
                All orders are processed within 1-2 business days after payment confirmation.
                Tracking information will be provided via email once your order ships.
              </p>
            </div>
          </div>

          <div id="returns-policy">
            <h2 className="text-2xl font-light mb-4">Returns & Exchanges</h2>
            <div className="bg-neutral-50 p-6">
              <p className="text-neutral-600 mb-3">
                We accept returns within 30 days of delivery for unworn items in original packaging.
              </p>
              <p className="text-neutral-600 mb-3">
                Exchanges are available for size issues. Please contact our customer service team to arrange an exchange.
              </p>
              <p className="text-neutral-600">
                <Link href="/returns" className="underline underline-offset-4">
                  View our full returns policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-light mb-6">Follow Our Journey</h2>
        <div className="flex justify-center space-x-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-12 h-12 flex items-center justify-center border border-neutral-300 rounded-full group-hover:border-neutral-900 transition-colors mb-2">
              <span className="text-xl">📸</span>
            </div>
            <span className="text-sm text-neutral-700">Instagram</span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-12 h-12 flex items-center justify-center border border-neutral-300 rounded-full group-hover:border-neutral-900 transition-colors mb-2">
              <span className="text-xl">👍</span>
            </div>
            <span className="text-sm text-neutral-700">Facebook</span>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-12 h-12 flex items-center justify-center border border-neutral-300 rounded-full group-hover:border-neutral-900 transition-colors mb-2">
              <span className="text-xl">🎵</span>
            </div>
            <span className="text-sm text-neutral-700">TikTok</span>
          </a>
        </div>
        <p className="text-neutral-600 mt-6 max-w-xl mx-auto">
          Follow us on social media for styling tips, behind-the-scenes content, and to be the first to know about new arrivals and special promotions.
        </p>
      </div>
    </div>
  )
}
