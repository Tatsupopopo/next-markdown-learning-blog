"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react"; // 👈 useEffect 追加
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // 👇 open の状態に応じて body にクラスを付け外しする
  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    // 万が一アンマウントされたときの掃除
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  const linkClass = (path) =>
    `text-base font-medium ${
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
            className="w-8 h-8 object-contain"
          />
          <span className="text-lg font-semibold tracking-tight">
            Web と読書とゲームと
          </span>
        </Link>

        {/* 右：ナビゲーション（PC） */}
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
        <div className="fixed inset-0 z-30 md:hidden flex justify-end">
          <div className="h-screen w-40 bg-white shadow-xl flex flex-col">
            {/* 上部バー */}
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

            {/* 中身 */}
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
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
