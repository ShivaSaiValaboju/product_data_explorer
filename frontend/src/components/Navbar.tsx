'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold hover:text-blue-600 transition-colors"
          >
            WoB Explorer
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className={`hover:text-blue-600 transition-colors ${
                pathname === '/' ? 'text-blue-600' : ''
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`hover:text-blue-600 transition-colors ${
                pathname === '/products' ? 'text-blue-600' : ''
              }`}
            >
              Products
            </Link>
            <Link
              href="/about"
              className={`hover:text-blue-600 transition-colors ${
                pathname === '/about' ? 'text-blue-600' : ''
              }`}
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}