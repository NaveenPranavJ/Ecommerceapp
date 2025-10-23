import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';
import { Product } from '../data/products';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CartItemProps {
  item: Product & { quantity: number };
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 py-4 border-b">
      <div className="w-24 h-24 rounded-md overflow-hidden bg-muted flex-shrink-0">
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="mb-1">{item.name}</h3>
        <p className="text-muted-foreground mb-2">${item.price.toFixed(2)}</p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => removeFromCart(item.id)}
        >
          <Trash2 className="w-4 h-4 text-destructive" />
        </Button>
        <p>${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
}
