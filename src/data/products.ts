export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
}

export const categories = [
  'Electronics',
  'Fashion',
  'Home & Furniture',
  'Sports & Outdoors',
  'Beauty',
  'Books',
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 89.99,
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    image: 'https://images.unsplash.com/photo-1758914223866-d4c278a26849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJvbmljcyUyMGdhZGdldHxlbnwxfHx8fDE3NjExNDc5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Electronics',
    rating: 4.5,
    inStock: true,
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    price: 299.99,
    description: 'Advanced fitness tracking and health monitoring',
    image: 'https://images.unsplash.com/photo-1758914223866-d4c278a26849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJvbmljcyUyMGdhZGdldHxlbnwxfHx8fDE3NjExNDc5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Electronics',
    rating: 4.8,
    inStock: true,
  },
  {
    id: '3',
    name: 'Designer T-Shirt',
    price: 39.99,
    description: 'Premium cotton t-shirt with modern design',
    image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYxMTYxNTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Fashion',
    rating: 4.3,
    inStock: true,
  },
  {
    id: '4',
    name: 'Casual Sneakers',
    price: 79.99,
    description: 'Comfortable all-day wear sneakers',
    image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYxMTYxNTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Fashion',
    rating: 4.6,
    inStock: true,
  },
  {
    id: '5',
    name: 'Modern Sofa',
    price: 899.99,
    description: 'Elegant 3-seater sofa with premium fabric',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZnVybml0dXJlfGVufDF8fHx8MTc2MTE4NTc2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Home & Furniture',
    rating: 4.7,
    inStock: true,
  },
  {
    id: '6',
    name: 'Coffee Table',
    price: 199.99,
    description: 'Minimalist wooden coffee table',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZnVybml0dXJlfGVufDF8fHx8MTc2MTE4NTc2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Home & Furniture',
    rating: 4.4,
    inStock: true,
  },
  {
    id: '7',
    name: 'Yoga Mat',
    price: 29.99,
    description: 'Non-slip exercise yoga mat',
    image: 'https://images.unsplash.com/photo-1602211844066-d3bb556e983b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYxMjA5MzU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sports & Outdoors',
    rating: 4.5,
    inStock: true,
  },
  {
    id: '8',
    name: 'Running Shoes',
    price: 119.99,
    description: 'Professional running shoes with advanced cushioning',
    image: 'https://images.unsplash.com/photo-1602211844066-d3bb556e983b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYxMjA5MzU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sports & Outdoors',
    rating: 4.9,
    inStock: true,
  },
];
