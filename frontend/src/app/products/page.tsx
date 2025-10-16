'use client';

import { useState } from 'react';

// Sample product data
const sampleProducts = [
  {
    id: 1,
    name: "The Great Gatsby",
    description: "F. Scott Fitzgerald's masterpiece about the American Dream",
    price: 9.99,
    category: "books",
    imageUrl: "/book1.jpg"
  },
  {
    id: 2,
    name: "To Kill a Mockingbird",
    description: "Harper Lee's classic novel about justice and racial equality",
    price: 12.99,
    category: "books",
    imageUrl: "/book2.jpg"
  },
  {
    id: 3,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with long battery life",
    price: 24.99,
    category: "electronics",
    imageUrl: "/mouse.jpg"
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with Cherry MX switches",
    price: 89.99,
    category: "electronics",
    imageUrl: "/keyboard.jpg"
  },
  {
    id: 5,
    name: "1984",
    description: "George Orwell's dystopian masterpiece",
    price: 11.99,
    category: "books",
    imageUrl: "/book3.jpg"
  },
  {
    id: 6,
    name: "Bluetooth Headphones",
    description: "Over-ear wireless headphones with noise cancellation",
    price: 129.99,
    category: "electronics",
    imageUrl: "/headphones.jpg"
  }
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'books', name: 'Books' },
    { id: 'electronics', name: 'Electronics' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Product Explorer</h1>
            <p className="mt-2 text-sm text-gray-700">
              Search and filter through our product catalog
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-lg shadow p-6 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              {/* Category Filter */}
              <div className="w-full md:w-48">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProducts
              .filter(product => 
                (category === 'all' || product.category === category) &&
                (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                 product.description.toLowerCase().includes(searchTerm.toLowerCase()))
              )
              .map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-medium">£{product.price.toFixed(2)}</span>
                      <button 
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        onClick={() => alert(`Viewing details for ${product.name}`)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {sampleProducts.filter(product => 
            (category === 'all' || product.category === category) &&
            (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             product.description.toLowerCase().includes(searchTerm.toLowerCase()))
          ).length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}