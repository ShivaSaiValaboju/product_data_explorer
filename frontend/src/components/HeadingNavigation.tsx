'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Heading = {
  id: string;
  title: string;
  slug: string;
};

export default function HeadingNavigation() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeadings = async () => {
      try {
        const response = await fetch('/api/headings');
        const data = await response.json();
        setHeadings(data);
      } catch (error) {
        console.error('Error fetching headings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeadings();
  }, []);

  if (loading) return null; // Parent component handles loading state

  return (
    <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {headings.map((heading) => (
        <Link
          key={heading.id}
          href={`/category/${heading.slug}`}
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold">{heading.title}</h2>
        </Link>
      ))}
    </nav>
  );
}