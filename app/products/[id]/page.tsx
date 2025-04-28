import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import ImageCarousel from "@/components/image-carousel"
import SizeSelector from "@/components/size-selector"

// Update the product data to use real images
const products = [
  {
    id: 1,
    name: "Nepali Cotton Dress",
    price: 89,
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      "https://images.unsplash.com/photo-1551163943-3f7253a95a3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    ],
    description:
      "Handcrafted cotton dress made from locally sourced materials with traditional embroidery. This elegant piece combines traditional Nepali craftsmanship with modern design sensibilities.\n\nThe fabric is hand-loomed by skilled artisans in rural Nepal, creating a unique texture that can't be replicated by machines. Each dress features subtle variations that make it one-of-a-kind.\n\nThe embroidery details are inspired by traditional Nepali motifs, reimagined for contemporary style. This versatile dress can be dressed up or down for various occasions.",
    material: "100% Organic Cotton",
    care: "Hand wash cold, line dry",
    sizes: ["XS", "S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L"],
    stock: 12,
    sku: "NCD-001",
  },
  {
    id: 2,
    name: "Handwoven Scarf",
    price: 45,
    images: [
      "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
      "https://images.unsplash.com/photo-1599733687773-14a79e3a48fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    ],
    description:
      "Soft, lightweight scarf handwoven by skilled artisans using traditional techniques. This beautiful accessory adds a touch of Nepali craftsmanship to any outfit.\n\nWoven on traditional looms in the Kathmandu Valley, each scarf takes several days to complete. The intricate patterns are inspired by centuries-old designs passed down through generations of weavers.\n\nThe natural fibers make this scarf both warm and breathable, perfect for year-round wear. It can be styled in multiple ways - draped, wrapped, or tied - to complement different looks.",
    material: "70% Cotton, 30% Silk",
    care: "Dry clean only",
    sizes: ["One Size"],
    availableSizes: ["One Size"],
    stock: 25,
    sku: "HWS-002",
  },
  {
    id: 3,
    name: "Himalayan Wool Jacket",
    price: 129,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
      "https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    ],
    description:
      "Warm and durable jacket made from authentic Himalayan wool with modern styling. Perfect for cold weather, this jacket combines traditional materials with contemporary design.\n\nThe wool is sourced from sheep raised in the high Himalayan regions of Nepal, known for producing exceptionally warm and durable fibers. Each jacket is carefully constructed by skilled tailors who blend traditional techniques with modern construction methods.\n\nFeaturing clean lines and a minimalist aesthetic, this versatile jacket works equally well for outdoor adventures or urban settings. The natural properties of the wool make it water-resistant and temperature-regulating.",
    material: "90% Himalayan Wool, 10% Nylon",
    care: "Dry clean recommended",
    sizes: ["S", "M", "L", "XL", "XXL"],
    availableSizes: ["M", "L", "XL"],
    stock: 8,
    sku: "HWJ-003",
  },
  {
    id: 4,
    name: "Traditional Kurta",
    price: 75,
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    ],
    description:
      "Elegant kurta with intricate detailing, perfect for special occasions or casual wear. This versatile piece honors traditional Nepali garment design while incorporating modern elements.\n\nCrafted from lightweight, breathable cotton, this kurta features hand-embroidered details around the neckline and cuffs. The subtle geometric patterns are inspired by traditional Nepali architecture.\n\nThe relaxed fit and thoughtful design make this kurta comfortable for all-day wear. It can be paired with traditional bottoms for a classic look or with jeans for a contemporary fusion style.",
    material: "100% Cotton",
    care: "Machine wash cold, gentle cycle",
    sizes: ["S", "M", "L", "XL"],
    availableSizes: ["S", "M", "XL"],
    stock: 15,
    sku: "TK-004",
  },
  {
    id: 5,
    name: "Pashmina Shawl",
    price: 65,
    images: [
      "https://images.unsplash.com/photo-1599733687773-14a79e3a48fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    ],
    description:
      "Luxuriously soft pashmina shawl in a versatile neutral tone that complements any outfit. This premium accessory showcases the finest of Nepali textile traditions.\n\nMade from the ultra-fine undercoat of the Himalayan mountain goat, this pashmina shawl offers exceptional softness and warmth without bulk. The fibers are carefully collected, spun, and woven by skilled artisans in Nepal.\n\nThe subtle herringbone weave adds visual interest while maintaining the shawl's versatility. Large enough to be worn in multiple ways - as a wrap, scarf, or even a light blanket for travel.",
    material: "70% Pashmina, 30% Silk",
    care: "Dry clean only",
    sizes: ["One Size"],
    availableSizes: ["One Size"],
    stock: 20,
    sku: "PS-005",
  },
  {
    id: 6,
    name: "Hemp Blend Top",
    price: 59,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    ],
    description:
      "Sustainable hemp blend top that's breathable, durable and gets softer with each wash. This eco-friendly garment represents our commitment to sustainable fashion.\n\nHemp has been cultivated in Nepal for centuries and is one of the most environmentally friendly fibers available. It requires minimal water and no pesticides to grow, making it an excellent sustainable choice.\n\nThe relaxed silhouette and clean lines make this top a versatile addition to any wardrobe. The natural properties of hemp ensure excellent breathability and durability, while the cotton blend adds softness for comfort.",
    material: "55% Hemp, 45% Organic Cotton",
    care: "Machine wash cold, tumble dry low",
    sizes: ["XS", "S", "M", "L", "XL"],
    availableSizes: ["XS", "S", "M", "L"],
    stock: 18,
    sku: "HBT-006",
  },
  {
    id: 7,
    name: "Dhaka Fabric Bag",
    price: 39,
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80",
      "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1990&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    ],
    description:
      "Colorful bag made from traditional Dhaka fabric, perfect for everyday use. This functional accessory celebrates Nepal's vibrant textile heritage.\n\nDhaka is a traditional handwoven fabric from Nepal known for its distinctive geometric patterns and bright colors. Each piece is woven on a backstrap loom, a technique that has remained largely unchanged for centuries.\n\nThis durable bag features a spacious main compartment, an interior pocket, and comfortable straps. The cotton lining protects your belongings while the sturdy construction ensures this bag will be a lasting addition to your collection.",
    material: "Outer: Traditional Dhaka Fabric, Lining: 100% Cotton",
    care: "Spot clean only",
    sizes: ["One Size"],
    availableSizes: ["One Size"],
    stock: 30,
    sku: "DFB-007",
  },
  {
    id: 8,
    name: "Organic Cotton Pants",
    price: 79,
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    ],
    description:
      "Comfortable, versatile pants made from organic cotton with a relaxed fit. These pants combine ethical production with timeless style.\n\nCrafted from certified organic cotton grown without harmful chemicals or pesticides, these pants represent our commitment to both environmental sustainability and worker welfare. The fabric is soft yet durable, becoming even more comfortable with each wear.\n\nThe clean, minimalist design features a relaxed fit through the leg with a slight taper, creating a silhouette that works for various occasions. Thoughtful details include deep pockets and reinforced stitching at stress points.",
    material: "100% Organic Cotton",
    care: "Machine wash cold, line dry",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    availableSizes: ["S", "M", "L", "XXL"],
    stock: 22,
    sku: "OCP-008",
  },
  {
    id: 9,
    name: "Embroidered Vest",
    price: 95,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    ],
    description:
      "Beautifully embroidered vest that adds a touch of Nepali craftsmanship to any outfit. This statement piece showcases traditional handiwork with contemporary styling.\n\nEach vest features intricate hand embroidery that takes several days to complete. The patterns are inspired by traditional Nepali motifs, with each artisan adding their own creative interpretation to make each piece unique.\n\nThe structured silhouette and versatile design allow this vest to be styled in multiple ways - over a simple shirt for a casual look, or with more formal attire for special occasions. The natural fabric breathes well while the quality construction ensures durability.",
    material: "Outer: 100% Cotton, Lining: 100% Viscose, Embroidery: Cotton Thread",
    care: "Dry clean only",
    sizes: ["S", "M", "L", "XL"],
    availableSizes: ["S", "L", "XL"],
    stock: 10,
    sku: "EV-009",
  },
]

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = Number.parseInt(params.id)
  const product = products.find((p) => p.id === id)

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    }
  }

  return {
    title: product.name,
    description: product.description.split("\n")[0],
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  // Convert price to NPR (approximate exchange rate)
  const priceNPR = product.price * 133

  // Stock status
  const stockStatus =
    product.stock > 10 ? "In Stock" : product.stock > 0 ? `Low Stock (${product.stock} left)` : "Out of Stock"

  const stockStatusColor = product.stock > 10 ? "text-green-600" : product.stock > 0 ? "text-amber-600" : "text-red-600"

  return (
    <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="mb-6">
        <Link href="/products" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
          ← Back to Products
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div>
          <ImageCarousel images={product.images} alt={product.name} />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-light mb-2">{product.name}</h1>

          <div className="flex items-center gap-4 mb-4">
            <p className="text-xl font-medium">NPR {priceNPR.toLocaleString()}</p>
            <p className="text-sm text-neutral-500">(USD ${product.price})</p>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className={`text-sm font-medium ${stockStatusColor}`}>{stockStatus}</span>
            <span className="text-sm text-neutral-500">SKU: {product.sku}</span>
          </div>

          {/* Description - first paragraph */}
          <p className="text-neutral-700 mb-6">{product.description.split("\n")[0]}</p>

          {/* Size Selector */}
          <SizeSelector sizes={product.sizes} availableSizes={product.availableSizes} />

          {/* Material & Care */}
          <div className="mt-10 pt-6 border-t border-neutral-200">
            <h2 className="text-lg font-medium mb-4">Details</h2>
            <div className="grid gap-4">
              <div>
                <h3 className="text-sm font-medium">Material</h3>
                <p className="text-neutral-600">{product.material}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium">Care</h3>
                <p className="text-neutral-600">{product.care}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Description */}
      <div className="mt-12 pt-8 border-t border-neutral-200">
        <h2 className="text-xl font-medium mb-6">About this product</h2>
        <div className="prose max-w-none text-neutral-700">
          {product.description.split("\n\n").map((paragraph, i) => (
            <p key={i} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Related Products would go here */}
    </div>
  )
}
