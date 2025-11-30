export default function ArchiveCard({ posts, setFilter }) {
  const months = [...new Set(posts.map((p) => p.date.slice(0, 7)))].sort(
    (a, b) => (a < b ? 1 : -1)
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
      <h2 className="text-sm font-semibold text-slate-800">投稿月一覧</h2>
      <ul className="text-sm space-y-1">
        {months.map((m) => (
          <li key={m}>
            <button
              onClick={() => setFilter({ type: "month", value: m })}
              className="text-slate-700 hover:text-slate-900"
            >
              {m}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
