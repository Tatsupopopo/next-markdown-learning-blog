---
title: "React の基本をざっくりつかむ"
date: "2025-01-10"
tags: ["react", "frontend"]
description: "React コンポーネントと JSX のイメージをつかむための入門記事。"
isLearning: false
---

React は UI をコンポーネントという単位で分割して考えるライブラリです。  
ひとつひとつのコンポーネントは **状態（state）** と **見た目（render）** を持っており、
状態が変わると自動的に画面が更新されます。

```jsx
function Hello() {
  return <h1>Hello React</h1>;
}
```

上のようなシンプルなコンポーネントでも、実際には関数の戻り値として
UI を宣言しているだけです。  

- 「コンポーネント = ただの関数」
- 「UI は return された JSX で表現される」

というイメージを持つと理解しやすくなります。
