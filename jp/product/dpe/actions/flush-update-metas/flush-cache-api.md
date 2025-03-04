# Flush Cache APIアクション

このアクションは、[キャッシュ](https://developer.mozilla.org/en-US/docs/Web/API/Cache)を**フラッシュするためにフロントAPIを呼び出す**のに使用します。アクションの実行は、ワークフローの最後とすることを強くお勧めします。これにより、APIは事前に設定されたクエリや属性の最新の値を表示することができます。

| パラメータ名 | 説明                 | 例               | 必須／任意               |
| :--------------- | :--------------------- | :-----------------  | :----------------- |
| params.timeout | アクションの最大時間（秒単位）を設定し、アクションの実行が長引く場合は終了前に実行を中断。この場合、データが部分的にしか追加されない場合やその他の問題が生じる可能性あり。特定の状況でのみ十分に注意して使用 | 書式：Xd Xh Xm Xsを使用 | 任意 |


アクションのタイムアウトを追加するには、「*Preferences（基本設定）*」に移動し、タイムアウトパラメータを有効にして目的の時間を追加するか、次のようにJSON形式のアクション設定ファイルを編集します。

```
"display_name": "Flush Cache Front action ",
"action": "flush-cache-front",
},
"params": {
  "timeout": "2h"
}
```

> **フラッシュおよびメタデータの更新のアクションはメンテナンスアクションです**。これらのアクションはデフォルトで各ワークフローの末尾に追加することを強くお勧めします。