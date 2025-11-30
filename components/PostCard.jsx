import Link from "next/link";

export default function PostCard({ post, setFilter, filter }) {
  return (
    <article className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
      {/* サムネイル */}
      <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
        <img
          src={post.thumbnail ?? "/images/no-image.png"}
          alt={post.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* テキスト */}
      <div className="flex flex-col gap-2 flex-1">
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-lg font-semibold text-slate-800 group-hover:text-slate-900">
            {post.title}
          </h2>
        </Link>

        <p className="text-sm text-slate-600 line-clamp-2">
          {post.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-1">
          <p className="text-xs text-slate-500">{post.date}</p>
          <div className="flex flex-wrap gap-1">
            {post.tags?.map((tag) => (
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
      </div>
    </article>
  );
}
