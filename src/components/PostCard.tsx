import Link from 'next/link';

export default function PostCard({
  id,
  title,
  body,
  authorName,
}: {
  id: number;
  title: string;
  body: string;
  authorName?: string;
}) {
  const truncated = body.length > 120 ? body.slice(0, 120) + '…' : body;

  return (
    <article className="rounded-2xl border p-5 shadow-sm hover:shadow transition bg-white">
      <h3 className="text-lg font-semibold text-black">
  {title}
</h3>
      {authorName && <p className="text-sm text-gray-500 mb-2">By {authorName}</p>}
      <p className="text-gray-700 mb-4">{truncated}</p>
      <Link href={`/posts/${id}`} className="text-blue-600 hover:underline font-medium">
        Read more →
      </Link>
    </article>
  );
}