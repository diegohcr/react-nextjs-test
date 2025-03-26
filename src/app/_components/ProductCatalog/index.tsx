'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useRef, useCallback, memo } from 'react';
import ProductItem from '../ProductItem';

const fetchProducts = async ({ pageParam = 1 }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`,
  );
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
};

const ProductCatalog = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) =>
      allPages.length + 1 <= 10 ? allPages.length + 1 : undefined,
  });

  const observerRef = useRef<IntersectionObserver | null>(null);

  const loadMoreRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage || !hasNextPage) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) fetchNextPage();
      });

      if (node) observerRef.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage],
  );

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error)
    return <div>An error occurred: {error.message}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Product Catalog</h2>
      <ul className="space-y-4">
        {data?.pages.flat().map((product: { id: number; title: string }) => (
          //   <li key={product.id} className="border p-4 rounded shadow">
          //     <h3 className="text-xl font-semibold text-gray-800">
          //       {product.title}
          //     </h3>
          //     <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
          //   </li>
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>

      {/* Elemento sentinela para ativar o carregamento automático */}
      <div ref={loadMoreRef} className="h-10" />
    </div>
  );
};

export default memo(ProductCatalog);
