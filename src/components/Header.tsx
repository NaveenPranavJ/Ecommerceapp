import { ShoppingCart, User, Menu, Home, Grid, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { Badge } from './ui/badge';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const { user, logout, isAuthenticated } = useAuth();
  const { totalItems } = useCart();

  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="cursor-pointer" onClick={() => onNavigate('home')}>
              ShopHub
            </h1>
            <nav className="hidden md:flex items-center gap-6">
              <Button
                variant={currentPage === 'home' ? 'default' : 'ghost'}
                onClick={() => onNavigate('home')}
                className="gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </Button>
              <Button
                variant={currentPage === 'categories' ? 'default' : 'ghost'}
                onClick={() => onNavigate('categories')}
                className="gap-2"
              >
                <Grid className="w-4 h-4" />
                Categories
              </Button>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <Button
                  variant="ghost"
                  onClick={() => onNavigate('account')}
                  className="gap-2"
                >
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">{user?.name}</span>
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => onNavigate('cart')}
                  className="gap-2 relative"
                >
                  <ShoppingCart className="w-4 h-4" />
                  {totalItems > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                      {totalItems}
                    </Badge>
                  )}
                </Button>
                <Button variant="ghost" onClick={logout} className="gap-2">
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </Button>
              </>
            ) : (
              <Button onClick={() => onNavigate('login')}>Sign In</Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
