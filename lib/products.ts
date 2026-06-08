export type Product = {
  id: string
  name: string
  category: string
  price: number
  rating: number
  reviews: number
  image: string
  benefit: string
}

export const products: Product[] = [
  {
    id: 'chhurpi-classic',
    name: 'Himalayan Chhurpi Dog Chews',
    category: 'Chhurpi Dog Chews',
    price: 24,
    rating: 4.9,
    reviews: 1842,
    image: '/images/product-chhurpi.png',
    benefit: 'Long-lasting, protein-rich natural chew',
  },
  {
    id: 'ghee-traditional',
    name: 'Traditional Himalayan Ghee',
    category: 'Himalayan Ghee',
    price: 32,
    rating: 4.8,
    reviews: 967,
    image: '/images/product-ghee.png',
    benefit: 'Slow-clarified, rich golden aroma',
  },
  {
    id: 'cheese-artisanal',
    name: 'Artisanal Himalayan Cheese',
    category: 'Himalayan Cheese',
    price: 28,
    rating: 4.7,
    reviews: 612,
    image: '/images/product-cheese.png',
    benefit: 'Aged in mountain air, deeply savory',
  },
  {
    id: 'dairy-specialties',
    name: 'Mountain Dairy Specialties',
    category: 'Dairy Specialties',
    price: 21,
    rating: 4.8,
    reviews: 438,
    image: '/images/product-dairy.png',
    benefit: 'Wholesome staples from high pastures',
  },
]

export const categories = [
  'All',
  'Chhurpi Dog Chews',
  'Himalayan Ghee',
  'Himalayan Cheese',
  'Dairy Specialties',
]
