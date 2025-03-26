// app/blog/page.tsx
import PostList from '@/app/_components/PostList';

export default function BlogPage() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <PostList />
    </section>
  );
}
