import axios from "axios";
import Link from "next/link";

export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // ✅ await params

  const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const authorRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`);
  const commentsRes = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Back Button */}
      <Link
        href="/posts"
        className="inline-block mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
      >
        ← Back to Posts
      </Link>

      <h1 className="text-2xl font-bold">{postRes.data.title}</h1>
      <p className="text-gray-600">By {authorRes.data.name}</p>
      <p className="mb-4">{postRes.data.body}</p>

      <h2 className="text-xl font-semibold mb-2">Comments ({commentsRes.data.length})</h2>
      {commentsRes.data.map((c: any) => (
        <div key={c.id} className="mb-3 border-b pb-2">
          <p className="font-semibold text-gray-700 hover:text-black transition-colors">{c.name}</p>
          <p className="text-sm text-gray-600">{c.email}</p>
          <p>{c.body}</p>
        </div>
      ))}
    </div>
  );
}
