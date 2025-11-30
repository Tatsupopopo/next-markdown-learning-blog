export default function TagListCard({ posts = [], setFilter, filter }) {
  const tags = [...new Set(posts.flatMap((p) => p.tags || []))];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
      <h2 className="text-sm font-semibold text-slate-800">タグ一覧</h2>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter({ type: "tag", value: tag })}
            className={`text-[11px] px-2 py-0.5 rounded-full transition-colors ${
              filter?.type === "tag" && filter.value === tag
                ? "bg-slate-800 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>
    </div>
  );
}
