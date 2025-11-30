export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-8">
      <div className="main-container py-4 text-xs text-slate-500 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Learning Blog</span>
        <span>Built with Next.js & Tailwind CSS</span>
      </div>
    </footer>
  );
}
