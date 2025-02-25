# クエリのパラメータ

---

## データセットの例

以下の記事では、会社の収益に関する簡単な例を用いて個々のクエリパラメータの機能について説明します。利用可能なデータセットは、次の通りです。

![problematique](picts/dataset.png ':size=300')

{各種クエリパラメータの使用方法を順を追って確認する}(#/jp/product/query-builder/queries/parameters/data.md)

---

## パラメータリスト

JSON形式のクエリの設定では、以下のパラメータが使用されます。
      
| パラメータ名 | 必須／任意 | 例 | 説明 |
| --- | --- | --- | --- |
| data.fields | 必須 | { &quot;income&quot;:[&quot;sum&quot;],&quot;expense&quot;:[&quot;sum&quot;]} | 返すフィールドとそれぞれのコンピュートモード（select、select\_distinct、sum、min、max、avg、count、count\_distinctを指定可）          |
| data.skip | 任意 | 10 | スキップする行数 |
| data.limit | 任意 | 100 | 返される行数 |
| data.hints | 任意 | True/False | クエリに対応する合計行数（data.limitを除外） |
| filter | 任意 | {  &quot;date&quot;: {          &quot;between&quot;: [&quot;1420066800,1428962399&quot;]  },  &quot;client\_code&quot;: {          &quot;in&quot;: [&quot;08KD&quot;, &quot;09CC&quot;]  },  &quot;creation\_date&quot;: {          &quot;eq&quot;: [&quot;2018-01-01&quot;]  }} | クエリするデータにフィルターを適用。フィルターには、in、not\_in、between、not\_between、eq、not\_equal、like、not\_like、is\_null、is\_not\_null、gt (\&gt;)、gte (\&gt;=)、lt (\&lt;)、lte (\&lt;=)を指定可 |
| scale.fields | 任意 | [&quot;date&quot;,[&quot;client\_code&quot;, &quot;employee\_id&quot;]] | クエリにスケール（グループ化）を適用。計算されたスケールや、複数のスケールを指定可 |
| evol.scale | 任意 | &quot;year&quot; | 変化に適用するスケール（weekday、week、month、quarter、semester、year） |
| evol.mode | 任意 | &quot;date&quot;&quot;weekday&quot; | date：同じ日付との比較　weekday：同じ曜日との比較 |
| evol.depth | 任意 | 5 | 取得する変化の数 |
| total.all | 任意 | [][&quot;client\_code&quot;] | 個別のスケールごとの合計クエリ数（オプション） |
| total.x | 任意 | [&quot;client\_code&quot;] | 特定の属性の合計クエリ数 |
| order | 任意 | {   &quot;date&quot;:&quot;asc&quot;} | クエリ出力の順序（ascまたはdesc、デフォルトでasc） |
| table\_name | 任意 | &quot;prim\_vehicles&quot; | 特定のテーブルでクエリを強制的に実行 |
| database\_name | 任意 | &quot;data\_prim&quot;&quot;data\_mart&quot; | 特定の階層でクエリを強制的に実行 |

{その他のクエリパラメータを確認する🦄}(#/jp/product/query-builder/queries/parameters/others.md)