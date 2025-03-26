'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div>{children}</div>
    </QueryClientProvider>
  );
}
