import Link from 'next/link';

async function fetchPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  return res.json();
}

export default async function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await fetchPost(params.id);

  return (
    <article className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.body}</p>
      <Link href="/blog" className="text-blue-600 hover:underline">
        ← Back to Blog
      </Link>
    </article>
  );
}
