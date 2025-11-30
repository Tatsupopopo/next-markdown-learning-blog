import { notFound } from "next/navigation";
import { getPost, getAllPosts } from "../../../lib/posts";
import ChecklistPanel from "../../../components/ChecklistPanel";
import ProfileCard from "../../../components/sidebar/ProfileCard";
import Toc from "../../../components/Toc"; // このあと作成

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
    // <article className="space-y-8">
    //   <div>
    //     <div className="mb-4">
    //       <p className="text-sm text-slate-500">
    //         {post.date} ・ {post.tags?.join(" / ")}
    //       </p>
    //       <h1 className="text-3xl font-bold mt-1 mb-4">{post.title}</h1>
    //     </div>

    //     <div
    //       className="prose-custom"
    //       dangerouslySetInnerHTML={{ __html: post.contentHtml }}
    //     />
    //   </div>

    //   {hasChecklist && (
    //     <ChecklistPanel
    //       slug={post.slug}
    //       title="学習チェックリスト"
    //       items={post.checklist}
    //     />
    //   )}

    // </article>

    // <div className="grid gap-8 lg:grid-cols-[minmax(0,2.4fr),minmax(260px,1fr)]">
    //   {/* 左：記事本文 */}
    //   <article>
    //     <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
    //     <div
    //       className="prose prose-custom"
    //       dangerouslySetInnerHTML={{ __html: post.contentHtml }}
    //     />
    //   </article>

    //   {/* 右：サイドバー */}
    //   <aside className="space-y-4">
    //     <ProfileCard />
    //     <Toc html={post.contentHtml} />
    //   </aside>
    // </div>

    <div className="space-y-6">
      {/* タイトル行：トップページと同じ左端 */}
      <header>
        <p className="text-sm text-slate-500">
          {post.date} ・ {post.tags?.join(" / ")}
        </p>
        <h1 className="text-3xl font-bold mt-1">{post.title}</h1>
      </header>

      {/* 本文 + サイドバーの 2 カラム */}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,2.4fr),minmax(260px,1fr)]">
        <article
          className="prose-custom" // ★ ここに max-w-* や mx-auto は付けない
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
        <aside className="space-y-4">
          <ProfileCard />
          <Toc html={post.contentHtml} />
        </aside>
      </div>
    </div>
  );
}
