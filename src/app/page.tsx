import Link from "next/link";
import axios from "axios";

export const revalidate = false;

export default async function HomePage() {
  const postsRes = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const posts = postsRes.data;

  return (
    <main className="bg-gray-50 min-h-screen p-8">

      <h1 className="text-5xl font-extrabold mb-12 tracking-tight text-gray-900 hover:text-pink-600 transition-colors text-gray-900" >
        Mini Blog
      </h1>


<div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
  <div className="rounded-2xl h-64 sm:h-80 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
    ✨ Featured
  </div>
  <div>
    <p className="text-sm text-gray-500">Maret 05, 2021</p>
    <Link href={`/posts/${posts[0].id}`}>
      <h2 className="text-3xl font-bold mt-2 text-black hover:underline">
        {posts[0].title}
      </h2>
    </Link>
    <p className="mt-4 text-gray-600">
      {posts[0].body.length > 150
        ? posts[0].body.slice(0, 150) + "…"
        : posts[0].body}
    </p>
  </div>
</div>


      {/* Other Posts */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(1).map((post: any, idx: number) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition transform p-6 text-white
              ${idx % 3 === 0
                ? "bg-gradient-to-r from-blue-400 to-purple-500"
                : idx % 3 === 1
                ? "bg-gradient-to-r from-pink-400 to-orange-400"
                : "bg-gradient-to-r from-green-400 to-teal-500"
              }`}
          >
            <p className="text-sm opacity-80 mb-2">Februari {24 + idx}, 2021</p>
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <p className="text-sm opacity-90">
              {post.body.length > 100
                ? post.body.slice(0, 100) + "…"
                : post.body}
            </p>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-12 text-center">
        <Link
          href="/posts"
          className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-black transition"
        >
          View All Posts →
        </Link>
      </div>
    </main>
  );
}
