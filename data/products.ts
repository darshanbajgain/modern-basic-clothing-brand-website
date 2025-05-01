// Product categories
export const categories = [
  { id: "tops", name: "Tops", description: "T-shirts & Casual Tops" },
  { id: "bottoms", name: "Bottoms", description: "Jeans & Chinos" },
  { id: "outerwear", name: "Outerwear", description: "Jackets & Coats" },
  { id: "formal", name: "Formal", description: "Blazers & Dress Shirts" }
];

// Centralized product data
export const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29,
    category: "tops",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1622445275576-721325763afe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    ],
    description: "Essential crew neck t-shirt made from premium cotton. Features a comfortable regular fit and durable construction that gets softer with each wash.\n\nPerfect for everyday wear, this versatile piece can be dressed up or down for any occasion.\n\nMade from high-quality cotton that's both breathable and comfortable against the skin.",
    material: "100% Cotton",
    care: "Machine wash cold, tumble dry low",
    sizes: ["XS", "S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L", "XL"],
    stock: 50,
    sku: "CWT-001"
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 79,
    category: "bottoms",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    ],
    description: "Modern slim fit jeans with just the right amount of stretch for comfort. Features a classic five-pocket design and subtle whiskering.\n\nThe perfect balance between comfort and style, these jeans are versatile enough for both casual and semi-formal occasions.\n\nMade with premium denim that maintains its shape throughout the day.",
    material: "98% Cotton, 2% Elastane",
    care: "Machine wash cold, inside out",
    sizes: ["28", "30", "32", "34", "36"],
    availableSizes: ["30", "32", "34"],
    stock: 35,
    sku: "SFJ-002"
  },
  {
    id: 3,
    name: "Casual Blazer",
    price: 129,
    category: "formal",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    ],
    description: "Versatile casual blazer perfect for both office wear and evening occasions. Features a modern fit with subtle structural details.\n\nCrafted with a lightweight fabric that provides comfort without sacrificing style. Two-button closure and notched lapels add classic appeal.\n\nFully lined with interior pockets for functionality.",
    material: "65% Polyester, 35% Cotton",
    care: "Dry clean only",
    sizes: ["36", "38", "40", "42", "44"],
    availableSizes: ["38", "40", "42"],
    stock: 20,
    sku: "CBL-003"
  },
  {
    id: 4,
    name: "Knit Sweater",
    price: 89,
    category: "tops",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      "https://images.unsplash.com/photo-1434510423563-c7e99bbc5bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    ],
    description: "Cozy knit sweater with a classic crew neck design. Perfect for layering during colder months.\n\nSoft and warm without being bulky, this sweater features ribbed cuffs and hem for a snug fit.\n\nTimeless design that pairs well with both casual and dressy outfits.",
    material: "80% Wool, 20% Polyamide",
    care: "Hand wash cold, lay flat to dry",
    sizes: ["XS", "S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L"],
    stock: 25,
    sku: "KSW-004"
  },
  {
    id: 5,
    name: "Chino Pants",
    price: 69,
    category: "bottoms",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    ],
    description: "Classic chino pants with a straight leg fit. Versatile enough for both casual and business casual settings.\n\nFeaturing a comfortable mid-rise waist and clean front styling. Made from durable twill fabric that maintains its shape.\n\nIncludes side slash pockets and welted back pockets for functionality.",
    material: "98% Cotton, 2% Elastane",
    care: "Machine wash cold, tumble dry low",
    sizes: ["28", "30", "32", "34", "36"],
    availableSizes: ["30", "32", "34", "36"],
    stock: 40,
    sku: "CHP-005"
  },
  {
    id: 8,
    name: "Himalayan Wool Jacket",
    price: 129,
    category: "outerwear",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80"
    ],
    description: "Warm and durable jacket made from authentic Himalayan wool with modern styling.",
    material: "90% Wool, 10% Polyester",
    care: "Dry clean only",
    sizes: ["S", "M", "L", "XL"],
    availableSizes: ["M", "L", "XL"],
    stock: 10,
    sku: "HWJ-008"
  }
];

// Helper function to get featured products (for homepage)
export const getFeaturedProducts = (count = 3) => {
  // Return the last few products for the homepage
  return products.slice(-count);
};

// Helper function to get new arrivals
export const getNewArrivals = (count = 3) => {
  // For now, we're using the same products as featured
  return getFeaturedProducts(count);
};

// Helper function to get a product by ID
export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};

// Helper function to get products by category
export const getProductsByCategory = (categoryId: string) => {
  return products.filter(product => product.category === categoryId);
};

// Helper function to get all categories
export const getAllCategories = () => {
  return categories;
};
