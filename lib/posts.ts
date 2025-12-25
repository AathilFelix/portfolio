import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export type Post = {
  slug: string;
  content: string;
  title: string;
  date: string;
  description?: string;
  author: string | string[];
  lastModified: string;
};


export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory);

  return files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    const filePath = path.join(postsDirectory, file);
    const source = fs.readFileSync(filePath, "utf-8");
    const stats = fs.statSync(filePath);

    const { data, content } = matter(source);

    return {
      slug,
      content,
      title: data.title,
      date: data.date,
      author: data.author || "Aathil Felix",
      description: data.description,
      lastModified: stats.mtime.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
  });
}

export function getPostBySlug(slug: string) {
  let filePath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    filePath = path.join(postsDirectory, `${slug}.md`);
  }

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const source = fs.readFileSync(filePath, "utf-8");
  const stats = fs.statSync(filePath); // Get file stats

  const { data, content } = matter(source);

  return {
    slug,
    content,
    title: data.title,
    date: data.date,
    author: data.author || "Aathil Felix",
    description: data.description,
    lastModified: stats.mtime.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}
