export default function ProfileCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="w-20 h-20 mx-auto rounded-full bg-slate-200 mb-3" />
      <h2 className="text-center text-sm font-semibold text-slate-800">
        Your Name
      </h2>
      <p className="text-center text-xs mt-2 text-slate-600 leading-relaxed">
        フロントエンド学習の記録をまとめています。
      </p>
    </div>
  );
}
