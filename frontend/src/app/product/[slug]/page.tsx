import { Suspense } from 'react';
import ProductDetail from '@/components/ProductDetail';
import LoadingState from '@/components/ui/LoadingState';

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: Props) {
  return (
    <main className="container mx-auto px-4 py-8">
      <Suspense fallback={<LoadingState />}>
        <ProductDetail productSlug={params.slug} />
      </Suspense>
    </main>
  );
}