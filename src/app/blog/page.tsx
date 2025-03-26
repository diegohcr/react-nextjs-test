import PostList from '@/app/_components/PostList';

export default function BlogPage() {
  return (
    <section>
      <header className="bg-blue-600 text-white p-4 text-center rounded-lg">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
      </header>
      <PostList />
    </section>
  );
}
