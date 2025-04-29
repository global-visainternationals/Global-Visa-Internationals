// src/app/blog/[slug]/page.jsx
import { getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { Content } = post;

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>{post.title}</h1>
      <p><strong>Category:</strong> {post.category} | <strong>Author:</strong> {post.author}</p>
      <p><em>{new Date(post.date).toLocaleDateString()}</em></p>

      <Content />
    </article>
  );
}
