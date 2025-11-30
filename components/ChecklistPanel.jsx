"use client";

import { useEffect, useMemo, useState } from "react";

function loadState(key) {
  if (typeof window === "undefined") return [];
  try {
    const saved = window.localStorage.getItem(key);
    if (!saved) return [];
    return JSON.parse(saved);
  } catch {
    return [];
  }
}

function saveState(key, value) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore
  }
}

export default function ChecklistPanel({ slug, title, items }) {
  const storageKey = useMemo(() => `checklist_${slug}`, [slug]);
  const [checkedIndexes, setCheckedIndexes] = useState([]);

  useEffect(() => {
    const initial = loadState(storageKey);
    setCheckedIndexes(initial);
  }, [storageKey]);

  const toggle = (index) => {
    setCheckedIndexes((prev) => {
      const exists = prev.includes(index);
      const next = exists ? prev.filter((i) => i !== index) : [...prev, index];
      saveState(storageKey, next);
      return next;
    });
  };

  const progress =
    items.length === 0 ? 0 : Math.round((checkedIndexes.length / items.length) * 100);

  return (
    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h2 className="text-sm font-semibold text-emerald-900">{title}</h2>
        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white text-emerald-700 border border-emerald-100">
          {progress}% 完了
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-emerald-100 overflow-hidden mb-3">
        <div
          className="h-full bg-emerald-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <ul className="space-y-1.5 text-sm">
        {items.map((item, index) => {
          const active = checkedIndexes.includes(index);
          return (
            <li
              key={index}
              className={`flex items-start gap-2 rounded-xl px-2 py-1.5 ${
                active ? "bg-emerald-100" : "hover:bg-emerald-100/70"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className={`mt-0.5 flex h-4 w-4 items-center justify-center rounded border ${
                  active
                    ? "border-emerald-600 bg-emerald-500 text-white"
                    : "border-emerald-400 bg-white text-transparent"
                }`}
                aria-pressed={active}
                aria-label={item}
              >
                ✓
              </button>
              <span
                className={active ? "text-emerald-900 line-through opacity-75" : "text-emerald-900"}
              >
                {item}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-[11px] text-emerald-800">
        チェック状態はブラウザのローカルストレージにのみ保存されます。
      </p>
    </div>
  );
}
