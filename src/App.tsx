import { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { Header } from './components/Header';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { HomePage } from './pages/HomePage';
import { CategoriesPage } from './pages/CategoriesPage';
import { AccountPage } from './pages/AccountPage';
import { CartPage } from './pages/CartPage';
import { PaymentPage } from './pages/PaymentPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onNavigate={setCurrentPage} />;
      case 'signup':
        return <SignUpPage onNavigate={setCurrentPage} />;
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'categories':
        return <CategoriesPage />;
      case 'account':
        return <AccountPage onNavigate={setCurrentPage} />;
      case 'cart':
        return <CartPage onNavigate={setCurrentPage} />;
      case 'payment':
        return <PaymentPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  const isAuthPage = currentPage === 'login' || currentPage === 'signup';

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          {!isAuthPage && <Header currentPage={currentPage} onNavigate={setCurrentPage} />}
          <main className="flex-1">
            {renderPage()}
          </main>
          {!isAuthPage && <footer className="border-t bg-muted/30 py-8 mt-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="mb-3">ShopHub</h3>
                  <p className="text-muted-foreground">
                    Your one-stop shop for everything you need.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3">Shop</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><button onClick={() => setCurrentPage('categories')}>All Products</button></li>
                    <li><button onClick={() => setCurrentPage('categories')}>Categories</button></li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3">Support</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Contact Us</li>
                    <li>FAQs</li>
                    <li>Shipping Info</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3">Legal</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Returns</li>
                  </ul>
                </div>
              </div>
              <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
                <p>&copy; 2025 ShopHub. All rights reserved.</p>
              </div>
            </div>
          </footer>}
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
