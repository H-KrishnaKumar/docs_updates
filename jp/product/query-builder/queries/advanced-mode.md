# 詳細モード

JSON形式の設定を使用すると、利用可能なすべてのクエリパラメータを手動で編集して複雑なクエリを作成できます。以下の記事では、[詳細モードを利用してクエリをセットアップする方法](#/manuel_utilisation?id=tableaux)について説明します。

## 標準的なJSON形式の設定

基本的なクエリ構成は、次の通りです。

```json
 {
    "data": {
      "fields": {
      }
    },
    "filter": {},
    "scale": {
      "fields": []
    },
    "order": {}
  }

```
デフォルトで、`data`、`filter`、`scale`、および`order`のパラメータが示されますが、クエリを実行するのに**必須**なのは`data`だけです。

> JSON形式の設定でインデントやパラメータの順序は可読性を高めるためのもので、クエリの実行に影響はありません。

---

## クエリ構成の例

以下は、利用可能なすべてのパラメータを使用したJSON形式のクエリの設定例です。

```json
 {
  "data": {
    "fields": {
      "a": ["sum"],
      "b": ["sum", "avg"]
    },
    "skip": 10,
    "limit": 10
  },
  "filter": {
    "h": {
      "between": ["1420066800,1428962399"]
    },
    "c": {
      "in": [1, 2, 3]
    },
    "g": {
      "eq": [1]
    },
    "x": {
      "is_null": []
    }
  },
  "scale": {
    "fields": ["d", ["e", "f"]]
  },
  "evol": {
    "scale": "year",
    "mode": "date",
    "depth": 5
  },
  "total": {
    "all": [],
    "x": ["d"]
  },
  "order": { //order module to order query output (asc or desc, asc by default)
    "c": "asc"
  },
  "table_name": "TABLE_NAME" //force table_name for the query
}
```

---

詳細モードでのクエリの設定については、次のガイドの手順を参照してください。 

{詳細モードのすべてのクエリパラメータを確認する}(#/jp/product/query-builder/queries/parameters/index.md)