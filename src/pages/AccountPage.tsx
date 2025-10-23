import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { User, Package, MapPin, CreditCard } from 'lucide-react';
import { Separator } from '../components/ui/separator';

interface AccountPageProps {
  onNavigate: (page: string) => void;
}

export function AccountPage({ onNavigate }: AccountPageProps) {
  const { user } = useAuth();

  const mockOrders = [
    {
      id: '1',
      date: '2025-10-20',
      total: 299.99,
      status: 'Delivered',
      items: 3,
    },
    {
      id: '2',
      date: '2025-10-15',
      total: 159.98,
      status: 'Shipped',
      items: 2,
    },
    {
      id: '3',
      date: '2025-10-10',
      total: 89.99,
      status: 'Delivered',
      items: 1,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8">My Account</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h3>Profile</h3>
                <CardDescription>{user?.email}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="text-muted-foreground">Name</p>
                <p>{user?.name}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Email</p>
                <p>{user?.email}</p>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Addresses */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3>Addresses</h3>
                <CardDescription>Manage shipping addresses</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p>123 Main Street</p>
                <p className="text-muted-foreground">New York, NY 10001</p>
              </div>
              <Button variant="outline" className="w-full">
                Manage Addresses
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h3>Payment</h3>
                <CardDescription>Manage payment methods</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p>Visa ending in 4242</p>
                <p className="text-muted-foreground">Expires 12/2026</p>
              </div>
              <Button variant="outline" className="w-full">
                Manage Payment Methods
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Order History */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Package className="w-6 h-6" />
              <div>
                <h2>Order History</h2>
                <CardDescription>View and track your orders</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockOrders.map((order, index) => (
                <div key={order.id}>
                  <div className="flex items-center justify-between py-3">
                    <div className="space-y-1">
                      <p>Order #{order.id}</p>
                      <p className="text-muted-foreground">
                        {new Date(order.date).toLocaleDateString()} • {order.items} items
                      </p>
                    </div>
                    <div className="text-right space-y-1">
                      <p>${order.total.toFixed(2)}</p>
                      <p className="text-muted-foreground">{order.status}</p>
                    </div>
                  </div>
                  {index < mockOrders.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
