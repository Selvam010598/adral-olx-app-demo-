import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PriceTag } from '@/components/ui/price-tag';
import { EmptyState } from '@/components/ui/empty-state';
import { Skeleton } from '@/components/ui/skeleton';
import { Package, Search } from 'lucide-react';

const categories = [
  { name: 'Mobiles', count: '12,453', color: 'bg-blue-50 text-blue-700' },
  { name: 'Cars', count: '3,210', color: 'bg-green-50 text-green-700' },
  { name: 'Bikes', count: '5,678', color: 'bg-orange-50 text-orange-700' },
  { name: 'Electronics', count: '8,901', color: 'bg-purple-50 text-purple-700' },
  { name: 'Furniture', count: '2,345', color: 'bg-pink-50 text-pink-700' },
  { name: 'Property', count: '1,234', color: 'bg-indigo-50 text-indigo-700' },
];

const featuredAds = [
  { id: 1, title: 'iPhone 14 Pro Max', price: 89999, location: 'Mumbai', category: 'Mobiles' },
  { id: 2, title: 'Honda City 2020', price: 850000, location: 'Delhi', category: 'Cars' },
  { id: 3, title: 'MacBook Pro M2', price: 125000, location: 'Bangalore', category: 'Electronics' },
  { id: 4, title: 'Sofa Set (L-shaped)', price: 35000, location: 'Pune', category: 'Furniture' },
];

export default function Home() {
  return (
    <div className="container px-4 py-6 md:px-6 md:py-8 space-y-8">
      <section>
        <h2 className="text-xl font-bold text-neutral-900 mb-4">Browse Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {categories.map((cat) => (
            <Card key={cat.name} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${cat.color} mb-2`}
                >
                  <Package className="h-6 w-6" />
                </div>
                <p className="font-medium text-sm text-neutral-900">{cat.name}</p>
                <p className="text-xs text-neutral-500">{cat.count} ads</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-neutral-900">Featured Ads</h2>
          <Button variant="ghost" size="sm">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredAds.map((ad) => (
            <Card
              key={ad.id}
              className="cursor-pointer hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="aspect-square bg-neutral-100" />
              <CardContent className="p-3">
                <Badge variant="secondary" className="mb-2">
                  {ad.category}
                </Badge>
                <h3 className="font-medium text-sm text-neutral-900 line-clamp-1">{ad.title}</h3>
                <PriceTag amount={ad.price} size="md" className="mt-1" />
                <p className="text-xs text-neutral-500 mt-1">{ad.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="hidden md:block">
        <h2 className="text-xl font-bold text-neutral-900 mb-4">Component Showcase</h2>
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="outline">Outline</Button>
              <Button loading>Loading</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
            <div className="flex items-center gap-4">
              <PriceTag amount={125000} size="lg" />
              <PriceTag amount={89999} size="md" />
              <PriceTag amount={5000} size="sm" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <EmptyState
              icon={<Search className="h-12 w-12" />}
              title="No results found"
              description="Try adjusting your search or filters"
              action={<Button>Clear Filters</Button>}
            />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
