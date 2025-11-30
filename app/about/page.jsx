export default function AboutPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[200px,minmax(0,1fr)] items-start">
      <div className="rounded-2xl bg-slate-100 aspect-square flex items-center justify-center text-slate-500">
        <span className="text-sm">Photo</span>
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="text-slate-700 leading-relaxed">
          このサイトは、フロントエンド学習の過程を記録するための個人ブログです。
          Markdown で記事を管理しつつ、一部の記事ではチェックリストや進捗バーなど、
          学習サイトのような UI を取り入れています。
        </p>
        <p className="text-slate-700 leading-relaxed">
          実装のベースは Next.js（App Router）と Tailwind CSS で構成されており、
          デザインの調整やコンポーネントの追加も簡単に行えるようになっています。
        </p>
      </div>
    </div>
  );
}
