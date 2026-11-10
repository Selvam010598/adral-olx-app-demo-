'use client';

import Link from 'next/link';
import { Search, MapPin, MessageCircle, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar } from '@/components/ui/avatar';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white">
      <div className="container flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">
              B
            </div>
            <span className="hidden font-bold text-xl text-neutral-900 md:block">Bazaar</span>
          </Link>

          <button className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-50 transition-colors">
            <MapPin className="h-4 w-4 text-neutral-400" />
            <span className="hidden sm:inline">Mumbai</span>
            <span className="sm:hidden">Location</span>
          </button>
        </div>

        <div className="flex-1 max-w-xl hidden md:block">
          <Input
            placeholder="Search for cars, phones, furniture..."
            icon={<Search className="h-4 w-4" />}
            className="w-full"
          />
        </div>

        <div className="flex items-center gap-2">
          <Link href="/chats">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </Link>

          <Link href="/sell">
            <Button className="hidden md:flex">SELL</Button>
          </Link>

          <Link href="/account">
            <Button variant="ghost" size="icon">
              <Avatar size="sm" fallback="U" />
            </Button>
          </Link>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="border-t border-neutral-100 px-4 py-2 md:hidden">
        <Input placeholder="Search..." icon={<Search className="h-4 w-4" />} className="w-full" />
      </div>
    </header>
  );
}
