import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about our brand story, values, and commitment to sustainable, minimalist fashion.",
}

export default function AboutPage() {
  return (
    <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-light mb-4 text-center">OUR STORY</h1>
      <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-8 md:mb-12">
        Founded on the principles of preserving Nepali craftsmanship while embracing modern design.
      </p>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
        <div>
          <Image src="/images/owner.png" alt="MANYUMI founder" width={600} height={800} className="w-full h-auto" />
        </div>
        <div>
          <h2 className="text-2xl font-light mb-6">The Beginning</h2>
          <p className="text-neutral-600 mb-4">
            MANYUMI was founded in 2019 by a young Nepali entrepreneur with a vision to showcase the beauty of
            traditional Nepali textiles and craftsmanship to the world. Growing up surrounded by the rich textile
            heritage of Nepal, our founder was inspired to create a brand that would honor these traditions while making
            them relevant for the modern consumer.
          </p>
          <p className="text-neutral-600 mb-4">
            What began as a small collection of handwoven scarves has evolved into a comprehensive range of clothing and
            accessories, each piece thoughtfully designed and ethically produced in Nepal.
          </p>
          <p className="text-neutral-600">
            Today, MANYUMI continues to work directly with local artisans, ensuring fair wages and preserving
            traditional techniques that have been passed down through generations.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-light mb-6">Our Values</h2>
          <p className="text-neutral-600 mb-4">
            At MANYUMI, we believe in honoring tradition while embracing innovation. Our designs celebrate the intricate
            patterns and techniques of Nepali textiles, reimagined for contemporary wardrobes.
          </p>
          <p className="text-neutral-600 mb-4">
            Sustainability is at the core of everything we do. We work with natural, locally-sourced materials and
            traditional, low-impact production methods that have been used in Nepal for centuries.
          </p>
          <p className="text-neutral-600">
            We value community and are committed to supporting the livelihoods of Nepali artisans. By choosing MANYUMI,
            you're not just buying a garment – you're supporting a sustainable ecosystem of craft and culture.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="/images/workshop.png"
            alt="Nepali artisans at work"
            width={600}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-light mb-6">Our Promise</h2>
        <p className="text-neutral-600 mb-4">
          We promise to create clothing that connects you to the rich cultural heritage of Nepal. Pieces that tell a
          story and make you feel part of something meaningful, while minimizing their impact on our planet.
        </p>
        <p className="text-neutral-600">
          Thank you for being part of our journey toward preserving traditional craftsmanship in a modern world.
        </p>
      </div>
    </div>
  )
}
