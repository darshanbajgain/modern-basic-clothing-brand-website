import Image from "next/image"

interface ProductImageProps {
  src: string | string[]
  alt: string
  priority?: boolean
  className?: string
}

export default function ProductImage({ src, alt, priority = false, className = "" }: ProductImageProps) {
  // Handle array of images or single image
  const imageSrc = Array.isArray(src) ? src[0] : src

  return (
    <div className="relative w-full h-[350px] overflow-hidden rounded-none">
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={priority}
        className={`object-cover ${className}`}
      />
    </div>
  )
}
