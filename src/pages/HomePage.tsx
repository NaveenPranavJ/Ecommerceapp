import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Button } from '../components/ui/button';
import { ShoppingBag } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-12 mb-12 text-center">
        <h1 className="mb-4">Welcome to ShopHub</h1>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Discover amazing products at unbeatable prices. Shop the latest trends in electronics, fashion, home goods, and more.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" onClick={() => onNavigate('categories')} className="gap-2">
            <ShoppingBag className="w-5 h-5" />
            Shop Now
          </Button>
          <Button size="lg" variant="outline" onClick={() => onNavigate('categories')}>
            Browse Categories
          </Button>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2>Featured Products</h2>
          <Button variant="link" onClick={() => onNavigate('categories')}>
            View All →
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Categories Preview */}
      <div className="mt-16">
        <h2 className="mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Electronics', 'Fashion', 'Home & Furniture', 'Sports & Outdoors', 'Beauty', 'Books'].map(
            (category) => (
              <button
                key={category}
                onClick={() => onNavigate('categories')}
                className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow text-center"
              >
                <p>{category}</p>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
