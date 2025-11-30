# Learning Blog Template (Next.js + Markdown)

このプロジェクトは、Markdown で記事を管理しつつ、  
チェックリスト付きの学習記事などリッチな UI を組み込めるブログのテンプレートです。

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いてください。

## 主な機能

- Markdown (.md) ファイルで記事管理
- トップページに記事一覧
- `/blog/[slug]` で記事詳細
- `/about` で About ページ
- `/tags/[tag]` でタグ別一覧
- `/search` で簡易検索
- 学習記事ではチェックリスト付きのサイドパネル
  - 進捗率バー
  - チェック状態は localStorage に保存

## 記事の追加

`posts/` ディレクトリに Markdown ファイルを追加します。

フロントマター（先頭の `---` ブロック）に以下のような情報を書きます。

```yaml
---
title: "タイトル"
date: "2025-01-20"
tags: ["tag1", "tag2"]
description: "一覧に表示する短い説明"
isLearning: true
checklist:
  - 項目1
  - 項目2
---
```

`checklist` を指定すると、その記事では自動的にチェックリスト UI が表示されます。
