# バージョン

クエリでは複数のバージョンが利用できます。通常、バージョンには複数のバリエーションが含まれます。バージョンを使用することで、運用環境で実行中のプロセスを中断することなく、既存のクエリを反復的に改善できます。

---

## バージョンのステータス
各クエリには、**アクティブ**なバージョンと**デプロイ済み**のバージョンが存在します。
* **アクティブ**：アクティブなバージョンは、エディターパネルを使ってユーザーが現在編集しているバージョン
* **デプロイ済み**：デプロイ済みのバージョンは、Query Builderコンポーネントのすべての下流プロセス（APIおよびアプリケーション）で使用されるバージョン。クエリが呼び出された場合は、デプロイ済みバージョンの設定を使用

---

## バージョンの管理
バージョンの管理では次のことを行うことができます。
* 作成
* 編集
* 削除

---

{詳細モードを使用したクエリの設定}(#/jp/product/query-builder/queries/advanced-mode.md)