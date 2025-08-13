'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-gray-900 hover:text-pink-600 transition-colors"
        >
          Mini Blog
        </Link>

        <div className="flex items-center gap-6">

          <span className="font-medium text-gray-400 cursor-not-allowed">
            Home
          </span>


          <Link
            href="/posts"
            className="hover:text-pink-600 font-medium text-gray-700 transition-colors"
          >
            Posts
          </Link>

          <span className="font-medium text-gray-400 cursor-not-allowed">
            About
          </span>
        </div>
      </nav>
    </header>
  );
}
