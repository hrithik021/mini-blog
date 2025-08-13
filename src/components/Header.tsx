'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-green-100 border-b border-green-200">
      <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-green-700">Mini Blog</Link>
        <div className="flex items-center gap-4">
          <Link href="/posts" className="hover:underline text-green-600">Posts</Link>
          <a
            href="https://jsonplaceholder.typicode.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-green-600 hover:underline"
          >API</a>
        </div>
      </nav>
    </header>
  );
}