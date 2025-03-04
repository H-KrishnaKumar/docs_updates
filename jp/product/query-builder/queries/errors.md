# エラー

データベースでライブデータを受け取りながら事前に設定したクエリを使用する場合、予測不能な状況になることがあります。クエリでは、データの処理状況に応じて、次の異なるタイプのエラーが返されます。

* **400エラー**：データベースは利用可能で、クエリの形式に問題はないが、Query Builderコンポーネントから有効な出力を返すことができなかった場合
* **500エラー**：データベースまたはQuery Builderコンポーネントがダウンしているか、接続されていなかった場合

---
## 400エラーのタイプ

ユーザーが最終的なアプリケーションのさまざまなケースに対処できるように、さまざまなタイプの400エラーの分類が行われています。エラーのタイプに応じて、エンドユーザーはさまざまな対処を講じることができます。
* **NO_TABLE**：クエリでtable_nameが設定されているが、このテーブルが存在しない場合に対応
* **NO_TABLE_FOUND**：クエリでtable_nameが設定されているが、このテーブルが存在しない場合に対応
* **EMPTY_TABLE**：table_nameが設定されているが、このテーブルが空である場合に対応
* **EMPTY_TABLES**：アルゴリズムで見つかったすべてのテーブルが空である場合に対応
* **ERROR**：その他のエラー（要求された属性が特定のテーブル内に存在しないか、見つからない場合など）

---
## 500エラーのタイプ

500エラーは非常に一般的で、ゲートウェイやサーバーのアクセスに関する問題が原因で発生します。可能な場合は、次のように問題を解決するのに役立つ情報が提供されます。
* 接続数が多すぎる
* 接続が原因で失敗したクエリの数が上限に到達した
* ストリームが予期せず終了した

このような場合には、クエリを再試行するか、ページをリロードする（ブラウザの更新か、*F5*キーを押す）のが最善の方法です。エラーが解消されない場合は、[サポートまでご連絡ください](https://support.forepaas.com/)。

---
フロントエンドアプリケーションの開発に取り掛かる準備が整ったようですので、APIおよびAPPコンポーネントに進みましょう。

{新規アプリケーション用にAPIを設定する}(#/jp/product/api-manager/index.md)