'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useRef, useCallback, memo } from 'react';
import ProductItem from '../ProductItem';

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const fetchProducts = async ({ pageParam = 1 }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${pageParam}&_limit=10`,
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
    queryKey: ['photos'],
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

  if (isLoading) return <div className="text-center p-6">Loading...</div>;
  if (error instanceof Error)
    return (
      <div className="text-destructive p-6">
        An error occurred: {error.message}
      </div>
    );

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data?.pages.flat().map((photo: Photo) => (
          <ProductItem key={photo.id} product={photo} />
        ))}
      </div>

      <div ref={loadMoreRef} className="h-10" />

      {isFetchingNextPage && (
        <div className="text-center p-4 text-muted-foreground">
          Loading more...
        </div>
      )}
    </div>
  );
};

export default memo(ProductCatalog);
