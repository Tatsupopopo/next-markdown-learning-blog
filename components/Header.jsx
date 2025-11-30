"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `text-sm font-medium ${
      pathname === path
        ? "text-slate-900"
        : "text-slate-500 hover:text-slate-900"
    }`;

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-20">
      <div className="main-container flex items-center py-3">
        {/* 左：サイトタイトル */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/images/Blog_logo.png"
            alt="Logo"
            className="w-8 h-8 object-contain" // サイズ調整
          />
          <span className="text-lg font-semibold tracking-tight">
            Web と読書とゲームと
          </span>
        </Link>

        {/* 右：ナビゲーション */}
        <nav className="flex items-center gap-4 ml-auto">
          <Link href="/" className={linkClass("/")}>
            Blog
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
