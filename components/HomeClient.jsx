"use client";

import { useState } from "react";
import PostList from "./PostList";
import Sidebar from "./Sidebar";

export default function HomeClient({ posts }) {
  const [filter, setFilter] = useState(null);

  const visiblePosts = !filter
    ? posts
    : posts.filter((p) => {
        if (filter.type === "tag") return p.tags?.includes(filter.value);
        if (filter.type === "month")
          return p.date?.slice(0, 7) === filter.value;
        return true;
      });

  return (
    <div className="space-y-6">
      {/* ←← グリッドの外なので高さが固定され、サイドバーとズレなくなる */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">
          {filter
            ? filter.type === "tag"
              ? `# ${filter.value} の記事`
              : `${filter.value} の記事`
            : "記事一覧"}
        </h1>

        {filter && (
          <button
            onClick={() => setFilter(null)}
            className="text-xs text-slate-600 underline hover:text-slate-900"
          >
            フィルタを解除
          </button>
        )}
      </header>

      {/* ↓↓↓ ここからが 2カラムのグリッドレイアウト ↓↓↓ */}
      <div className="grid gap-8 md:grid-cols-[minmax(0,2.4fr),minmax(260px,1fr)]">
        {/* 記事一覧 */}
        <PostList posts={visiblePosts} setFilter={setFilter} filter={filter} />

        {/* サイドバー */}
        <div className="hidden md:block">
          <Sidebar posts={posts} setFilter={setFilter} filter={filter} />
        </div>
      </div>
    </div>
  );
}
