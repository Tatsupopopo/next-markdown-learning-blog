"use client";
import { useEffect, useState } from "react";

export default function Toc({ html }) {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // markdownからh2/h3を抽出
    const container = document.createElement("div");
    container.innerHTML = html;
    const hs = Array.from(container.querySelectorAll("h2, h3")).map((el) => ({
      text: el.textContent,
      id:
        el.id ||
        el.textContent
          ?.replace(/[\s　]+/g, "-")
          .replace(/[^\w\-]/g, "")
          .toLowerCase(),
      level: el.tagName === "H2" ? 2 : 3,
    }));
    setHeadings(hs);
  }, [html]);

  // 本文側の見出し要素にIDを付与（リンクジャンプ用）
  useEffect(() => {
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (!el) return;
      el.id = h.id;
    });
  }, [headings]);

  if (!headings.length) return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="text-sm font-semibold text-slate-800 mb-2">目次</h2>
      <ul className="space-y-1 text-sm">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "ml-4" : ""}>
            <a
              href={`#${h.id}`}
              className="text-slate-600 hover:text-slate-900"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
