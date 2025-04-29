// src/lib/blog.jsx
import path from 'path';
import fs from 'fs/promises';

const BLOG_POSTS_DIR = path.join(process.cwd(), 'src/content/blog');

export async function getAllPosts() {
  const files = await fs.readdir(BLOG_POSTS_DIR);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.jsx'))
      .map(async (file) => {
        const { metadata } = await import(`../content/blog/${file}`);
        const slug = file.replace('.jsx', '');

        return {
          ...metadata,
          slug,
        };
      })
  );

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
  try {
    const { metadata, default: Content } = await import(`../content/blog/${slug}.jsx`);
    return {
      ...metadata,
      slug,
      Content,
    };
  } catch (error) {
    console.error(`Error loading post for slug: ${slug}`, error);
    return null;
  }
}
