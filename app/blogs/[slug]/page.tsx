import { getPostBySlug, getAllPosts, type Post } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import remarkGfm from "remark-gfm";


export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug) as Post;
  const authors = Array.isArray(post.author) ? post.author : [post.author];

  return (
    <main className="">
      {/* Back button */}
      <div className="">
        <Link
          href="/blogs"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Back to Blog
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-3xl mx-auto py-4">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            {/* Stacked avatars */}
            <div className="flex -space-x-3">
              {authors.map((author, index) => (
                <div
                  key={author}
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border-2 border-background ring-1 ring-border"
                  style={{ zIndex: authors.length - index }}>
                  <span className="text-xs font-medium">
                    {author.charAt(0).toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
            {/* Author names */}
            <span>
              {authors.length === 1
                ? authors[0]
                : authors.length === 2
                ? `${authors[0]} & ${authors[1]}`
                : `${authors[0]} & ${authors.length - 1} others`}
            </span>
          </div>
          <span>•</span>
          <time>{post.date}</time>
        </div>
      </header>

      {/* Content */}
      <article className="prose prose-neutral dark:prose-invert mt-6">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </article>

      {/* Footer */}
      <footer className="mx-auto py-4">
        <div className="flex flex-row max-md:flex-col justify-between items-center">
          <p className="text-sm text-muted-foreground">
            Written by {authors.join(", ")}
          </p>
          <p className="text-sm text-muted-foreground italic">
            Last updated: {post.lastModified}
          </p>
        </div>
      </footer>
    </main>
  );
}