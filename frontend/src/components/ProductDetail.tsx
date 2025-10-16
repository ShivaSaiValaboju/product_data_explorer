'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Review = {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
};

type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  reviews: Review[];
  metadata: Record<string, string>;
  recommendations: {
    id: string;
    title: string;
    image: string;
    slug: string;
  }[];
};

type Props = {
  productSlug: string;
};

export default function ProductDetail({ productSlug }: Props) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${productSlug}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productSlug]);

  if (loading || !product) return null; // Parent handles loading state

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`w-5 h-5 ${
                  i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                ★
              </span>
            ))}
            <span className="ml-2 text-sm text-gray-600">
              ({product.reviews.length} reviews)
            </span>
          </div>
          <p className="text-2xl font-semibold mb-6">{product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Product Metadata */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-lg font-semibold mb-4">Product Details</h2>
            <dl className="grid grid-cols-1 gap-y-2">
              {Object.entries(product.metadata).map(([key, value]) => (
                <div key={key} className="grid grid-cols-3">
                  <dt className="text-gray-600">{key}</dt>
                  <dd className="col-span-2">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-6">
          {product.reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6">
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-2 font-medium">{review.author}</span>
                <span className="ml-2 text-sm text-gray-500">{review.date}</span>
              </div>
              <p className="text-gray-600">{review.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {product.recommendations.map((recommendation) => (
            <a
              key={recommendation.id}
              href={`/product/${recommendation.slug}`}
              className="group"
            >
              <div className="aspect-square relative mb-2 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={recommendation.image}
                  alt={recommendation.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-sm group-hover:underline">
                {recommendation.title}
              </h3>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}