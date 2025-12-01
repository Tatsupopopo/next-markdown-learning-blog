"use client";

import { useEffect, useState } from "react";
import slugify from "slugify";

export default function Toc({ html }) {
  const [headings, setHeadings] = useState([]);

  // ① Markdown HTML から見出し（h2/h3）を抜き出す
  useEffect(() => {
    if (!html) {
      setHeadings([]);
      return;
    }

    const container = document.createElement("div");
    container.innerHTML = html;

    const nodes = Array.from(container.querySelectorAll("h2, h3"));

    const hs = nodes.map((el, index) => {
      const text = (el.textContent || "").trim();

      // ★ 日本語を含めテキストそのままをベースにする
      //   - 空白だけ "-" に変換
      //   - 何も残らなければ "heading-0" みたいなフォールバック
      const base = text.replace(/\s+/g, "-");
      const id = base.length > 0 ? base : `heading-${index}`;

      return {
        index,
        text,
        id,
        level: el.tagName === "H2" ? 2 : 3,
      };
    });

    setHeadings(hs);
  }, [html]);

  // ② 実際の記事本文の h2/h3 に ID を振る
  useEffect(() => {
    if (!headings.length) return;

    const article = document.querySelector("article");
    if (!article) return;

    const articleHeadings = Array.from(article.querySelectorAll("h2, h3"));

    headings.forEach((h) => {
      const el = articleHeadings[h.index];
      if (el) el.id = h.id;
    });
  }, [headings]);

  if (!headings.length) return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="text-sm font-semibold text-slate-800 mb-2">目次</h2>
      <ul className="space-y-1 text-xs">
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
