import { Suspense } from 'react';
import ProductGrid from '@/components/ProductGrid';
import LoadingState from '@/components/ui/LoadingState';

type Props = {
  params: {
    slug: string;
  };
};

export default function CategoryPage({ params }: Props) {
  return (
    <main className="container mx-auto px-4 py-8">
      <Suspense fallback={<LoadingState />}>
        <ProductGrid categorySlug={params.slug} />
      </Suspense>
    </main>
  );
}