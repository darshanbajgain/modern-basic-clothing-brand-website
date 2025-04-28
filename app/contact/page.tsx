import type { Metadata } from "next"
import { Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with our team for any questions about our products or services.",
}

export default function ContactPage() {
  return (
    <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-light mb-4 text-center">CONTACT US</h1>
      <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-8 md:mb-12">
        We'd love to hear from you. Reach out with any questions about our products or the stories behind them.
      </p>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div>
          <h2 className="text-2xl font-light mb-6">Get In Touch</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="w-5 h-5 mt-1 mr-4 text-neutral-700" />
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-neutral-600">hello@manyumi.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="w-5 h-5 mt-1 mr-4 text-neutral-700" />
              <div>
                <h3 className="font-medium mb-1">Location</h3>
                <p className="text-neutral-600">
                  Thamel, Kathmandu
                  <br />
                  Nepal
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-5 h-5 mt-1 mr-4 text-neutral-700" />
              <div>
                <h3 className="font-medium mb-1">Hours</h3>
                <p className="text-neutral-600">
                  Sunday - Friday: 10am - 6pm
                  <br />
                  Saturday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-light mb-6">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-700 hover:text-neutral-900 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-neutral-700 hover:text-neutral-900 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-neutral-700 hover:text-neutral-900 transition-colors">
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="bg-neutral-50 p-8">
          <h2 className="text-2xl font-light mb-6">Visit Our Shop</h2>
          <div className="aspect-video bg-neutral-200 mb-6">
            {/* This would be a map in a real implementation */}
            <div className="w-full h-full flex items-center justify-center text-neutral-500">Map Location</div>
          </div>
          <p className="text-neutral-600 mb-4">
            Our shop is located in the heart of Thamel, Kathmandu. We invite you to visit us and experience our
            collection in person.
          </p>
          <p className="text-neutral-600">
            While in Nepal, you can also arrange to visit our workshop and meet the artisans who create our pieces.
          </p>
        </div>
      </div>
    </div>
  )
}
