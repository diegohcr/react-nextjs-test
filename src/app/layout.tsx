import type { Metadata } from 'next';
import './globals.css';
import Header from '@/app/_components/Header';

export const metadata: Metadata = {
  title: 'Optimized Blog & Product Catalog',
  description:
    'A Next.js 14 test application with optimized Blog and Product Catalog.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
