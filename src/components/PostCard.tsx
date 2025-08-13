import Link from "next/link";

const gradients = [
  "from-pink-500 via-red-500 to-yellow-500",
  "from-purple-500 via-pink-500 to-red-500",
  "from-blue-500 via-indigo-500 to-purple-500",
  "from-teal-400 via-cyan-400 to-blue-500",
  "from-orange-400 via-pink-500 to-red-500",
  "from-green-400 via-emerald-500 to-teal-500"
];

interface PostCardProps {
  id: number;
  title: string;
  body: string;
  authorName?: string;
}

export default function PostCard({ id, title, body, authorName }: PostCardProps) {
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <Link
      href={`/posts/${id}`}
      className={`block rounded-xl p-6 shadow-lg bg-gradient-to-r ${randomGradient} text-white hover:scale-[1.02] transition-transform`}
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm mb-4 opacity-90">
        {body.length > 100 ? body.slice(0, 100) + "…" : body}
      </p>
      {authorName && <span className="text-xs opacity-75">By {authorName}</span>}
    </Link>
  );
}
