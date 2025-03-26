import dynamic from 'next/dynamic';

const ProductCatalog = dynamic(
  () => import('@/app/_components/ProductCatalog'),
  { ssr: false },
);

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center rounded-lg">
        <h1 className="text-3xl font-bold">Product Catalog</h1>
      </header>
      <main className="p-6">
        <ProductCatalog />
      </main>
    </div>
  );
}
