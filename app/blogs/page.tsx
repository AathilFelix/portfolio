import Link from "next/link";
import { getAllPosts, type Post } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="">
      <h1 className="text-3xl font-bold">Blogs</h1>

      {posts.map((post: Post) => (
        <Link key={post.slug} href={`/blogs/${post.slug}`} >
            <div className="gap-2 mt-3">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-xs mt-2">{post.date}</p>
            </div>
        </Link>
      ))}
    </main>
  );
}
