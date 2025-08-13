'use client';

import { useEffect, useMemo, useState } from 'react';
import { fetchPosts, fetchUsers, Post, User } from '@/lib/api';
import Loader from '@/components/Loader';
import ErrorState from '@/components/ErrorState';
import PostCard from '@/components/PostCard';

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const [p, u] = await Promise.all([fetchPosts(), fetchUsers()]);
        if (!mounted) return;
        setPosts(p);
        setUsers(u);
      } catch (err) {
        setError('Failed to load posts. Please try again.');
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const authorMap = useMemo(() => {
    const map = new Map<number, string>();
    users.forEach((u) => map.set(u.id, u.name));
    return map;
  }, [users]);

  if (loading) return <Loader />;
  if (error) return <ErrorState message={error} />;

  return (
    <section className="min-h-screen bg-gray-50 p-6 rounded-lg">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-900">
        Latest Posts
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <PostCard
            key={p.id}
            id={p.id}
            title={p.title}
            body={p.body}
            authorName={authorMap.get(p.userId)}
          />
        ))}
      </div>
    </section>
  );
}
