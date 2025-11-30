import { notFound } from "next/navigation";
import { getPost, getAllPosts } from "../../../lib/posts";
import ChecklistPanel from "../../../components/ChecklistPanel";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const hasChecklist =
    Array.isArray(post.checklist) && post.checklist.length > 0;

  return (
    <article className="space-y-8">
      <div>
        <div className="mb-4">
          <p className="text-sm text-slate-500">
            {post.date} ・ {post.tags?.join(" / ")}
          </p>
          <h1 className="text-3xl font-bold mt-1 mb-4">{post.title}</h1>
        </div>

        <div
          className="prose-custom"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>

      {hasChecklist && (
        <ChecklistPanel
          slug={post.slug}
          title="学習チェックリスト"
          items={post.checklist}
        />
      )}
    </article>
  );
}
