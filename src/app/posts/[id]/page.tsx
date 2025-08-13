import axios from "axios";
import Link from "next/link";

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const postRes = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const authorRes = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`
  );
  const commentsRes = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );

  return (
    <div className="min-h-screen bg-[#f7f8fc] p-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link
          href="/posts"
          className="inline-block mb-8 px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-lg shadow hover:opacity-90 transition"
        >
          ← Back to Posts
        </Link>

        {/* Post Card */}
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-1 rounded-2xl shadow-lg mb-10">
          <div className="bg-white rounded-2xl p-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
              {postRes.data.title}
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              By <span className="font-semibold">{authorRes.data.name}</span>
            </p>
            <p className="text-lg text-gray-700 whitespace-pre-line">
              {postRes.data.body}
            </p>
          </div>
        </div>

        {/* Comments Section */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Comments ({commentsRes.data.length})
        </h2>
        <div className="grid gap-6">
          {commentsRes.data.map((c: any, index: number) => (
            <div
              key={c.id}
              className={`p-6 rounded-xl text-white shadow-lg ${
                index % 3 === 0
                  ? "bg-gradient-to-r from-blue-500 to-teal-400"
                  : index % 3 === 1
                  ? "bg-gradient-to-r from-purple-500 to-pink-500"
                  : "bg-gradient-to-r from-orange-400 to-red-500"
              }`}
            >
              <p className="font-semibold text-lg">{c.name}</p>
              <p className="text-sm opacity-80">{c.email}</p>
              <p className="mt-2">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
