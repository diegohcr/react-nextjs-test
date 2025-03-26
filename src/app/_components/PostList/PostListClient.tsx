'use client';

import Link from 'next/link';
import { useFavoritesPostStore } from '@/app/_stores/useFavoritesPostStore';

type Post = {
  id: number;
  title: string;
};

type PostListClientProps = {
  posts: Post[];
};

export default function PostListClient({ posts }: PostListClientProps) {
  const { favorites, toggleFavorite } = useFavoritesPostStore();

  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id} className="border p-4 rounded shadow">
          <Link
            href={`/blog/${post.id}`}
            className="text-blue-600 hover:underline"
          >
            {post.title}
          </Link>
          <button
            onClick={() => toggleFavorite(post.id)}
            className={`ml-4 px-2 py-1 rounded ${
              favorites.includes(post.id)
                ? 'bg-red-500 text-white'
                : 'bg-gray-200'
            }`}
          >
            {favorites.includes(post.id) ? 'Unfavorite' : 'Favorite'}
          </button>
        </li>
      ))}
    </ul>
  );
}
