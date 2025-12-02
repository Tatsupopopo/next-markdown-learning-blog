"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (path) =>
    `text-sm font-medium ${
      pathname === path
        ? "text-slate-900"
        : "text-slate-500 hover:text-slate-900"
    }`;

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-20">
      <div className="main-container flex items-center h-[68px]">
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
        <nav className="hidden md:flex items-center gap-4 ml-auto">
          <Link href="/" className={linkClass("/")}>
            Blog
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
        </nav>

        {/* 右：SP用ハンバーガー */}
        <button
          className="md:hidden ml-auto p-2 rounded-lg border border-slate-200"
          onClick={() => setOpen(true)}
          aria-label="メニューを開く"
        >
          <FiMenu className="w-5 h-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-30 bg-black/40 md:hidden flex justify-end">
          {/* 👇 h-full → h-screen に変更 */}
          <div className="h-screen w-64 bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-4 py-5 border-b border-slate-200">
              <span className="text-lg font-semibold">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded hover:bg-slate-100"
                aria-label="メニューを閉じる"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col gap-3 px-4 py-4 bg-white overflow-y-auto">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={linkClass("/")}
              >
                Blog
              </Link>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className={linkClass("/about")}
              >
                About
              </Link>

              <div className="h-px bg-slate-200 my-3" />

              <button
                type="button"
                className="px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-50 rounded-lg"
              >
                タグ一覧
              </button>
              <button
                type="button"
                className="mt-1 px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-50 rounded-lg"
              >
                投稿月一覧
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
