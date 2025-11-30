"use client";

import { useMemo, useState, useEffect } from "react";
import PostList from "./PostList";

export default function SearchClient({ initialQuery, posts }) {
  const [query, setQuery] = useState(initialQuery ?? "");

  useEffect(() => {
    setQuery(initialQuery ?? "");
  }, [initialQuery]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter((p) => {
      const inTitle = p.title.toLowerCase().includes(q);
      const inDesc = p.description?.toLowerCase().includes(q);
      const inTags = (p.tags || []).some((t) => t.toLowerCase().includes(q));
      return inTitle || inDesc || inTags;
    });
  }, [posts, query]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Search</h1>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="キーワードやタグで検索"
          className="w-full max-w-md rounded-full border border-slate-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
        <p className="mt-2 text-xs text-slate-500">
          {filtered.length} 件ヒット
        </p>
      </div>
      <PostList posts={filtered} />
    </div>
  );
}
