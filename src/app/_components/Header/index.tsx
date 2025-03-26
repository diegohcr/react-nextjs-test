// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">Test Application</h1>
        <div className="space-x-4">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/catalog" className="hover:underline">
            Product Catalog
          </Link>
        </div>
      </nav>
    </header>
  );
}
