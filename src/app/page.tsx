import Link from "next/link";
import axios from "axios";

export const revalidate = false; // fully static SSG page

export default async function HomePage() {
  // Fetch first 3 posts for preview
  const postsRes = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=3");
  const posts = postsRes.data;

  return (
    <section className="text-center py-20">
      {/* Intro */}
      <h1 className="text-4xl font-bold mb-4">Welcome to Mini Blog</h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        A minimal blog built with Next.js App Router, Tailwind CSS, and Axios. Browse posts, view details, and read
        comments.
      </p>

      {/* Posts Preview Section with Gradient + Arc Pattern */}
      <section className="min-h-screen bg-gradient-to-b from-green-50 to-white bg-[url('/arc-pattern.svg')] bg-no-repeat bg-top bg-cover p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-green-700">Latest Posts</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="block rounded-xl border bg-white p-6 shadow-sm hover:shadow-lg transition-shadow hover:-translate-y-1 transform"
            >
              <h3 className="text-lg font-semibold text-gray-700 hover:text-black transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600">
                {post.body.length > 100 ? post.body.slice(0, 100) + "…" : post.body}
              </p>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="mt-8">
          <Link
            href="/posts"
            className="inline-block px-6 py-2 bg-gray-900 text-white rounded hover:bg-black transition"
          >
            View All Posts →
          </Link>
        </div>
      </section>
    </section>
  );
}
