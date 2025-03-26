import PostListClient from './PostListClient';

export async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function PostList() {
  const posts = await fetchPosts();

  return <PostListClient posts={posts} />;
}
