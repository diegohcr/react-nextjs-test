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
      <div className="grid grid-cols-1 gap-4 py-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="card p-4 overflow-hidden rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:scale-[1.02]"
          >
            <Link
              href={`/blog/${post.id}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <button
              onClick={() => toggleFavorite(post.id)}
              className={`ml-4 px-3 py-1.5 rounded-full font-medium transition-colors duration-300 ${
                favorites.includes(post.id)
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {favorites.includes(post.id) ? 'Unfavorite' : 'Favorite'}
            </button>
          </li>
        ))}
      </div>
    </ul>
  );
}
