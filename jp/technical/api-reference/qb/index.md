# APIリファレンス：Query Builder

## 概要
### 応答形式
データ形式：JSON（http://www.json.orgを参照）

文字コード：UTF-8

空でない応答は次のヘッダー付きで送信される：

`Content-Type: application/json; charset=utf-8`


### HTTP応答コード

| コード | メッセージ         | 意味                                              |
| :--- | :-------------: | :--------------------------------------------------------- |
| 200  | OK              | 成功したGETまたはPOST要求に対するデフォルトの応答で、コンテンツが空でない場合                                       |
| 400  | 無効な要求     | GETまたはPOSTパラメータの値が無効                      |
| 403  | 禁止       | 認証エラー |
| 404  | 未検出       | アクションまたは要求が見つからない                                      |
| 500  | 内部サーバー | サーバー側のエラーが発生                                  |

### エラー処理
クライアント側のエラー（HTTPステータスコード400番台）またはサーバー側のエラー（HTTPステータスコード500番台）の場合は、応答の本文にエラーを示すJSONオブジェクトを含めることができます。

```json
{
   "error": "Invalid parameter", // code 400, 403, 500
   "warning": "Action not found" // code 404
}
```

### タイムスタンプ

すべてのデータエンドポイントは、提供されたデータに関連するタイムスタンプを返します。
```json
{
    "timestamp": 1435929960
}
```
### 継続時間
すべてのデータエンドポイントは、継続時間属性を返します。これはシステムが要求の実行に要した秒単位の有効時間を表します。
```json
{
    "duration": 0.056
}
```

## エンドポイントの指定

#### データセットエンドポイント 

///

##### /qb/dataset — _GET_

:::

<br>

Query Builderのデータセットを返します。

**応答**

| コード | 説明 |
| ---- |:----------- |
| 200 | JSONオブジェクト |

```json

{
    "success": true,
    "timestamp": 1435934914,
    "duration": 0.002,
    "data": { //list of available data and the compute mode
        "a": {
            "computes": ["sum"],
            "default": "sum"        
        }
    },
    "compute_mods": [ //list of available compute mode
        …
    ],
    "orders": [ //list of available fields for sorting queries
        …
    ],
    "filters": [ //list of available fields for filtering queries
        …
    ],
    "scales": [ //list of available fields for grouping queries
        …
    ],
    "evol": [ //list of available evolution mode
        …
    ],
    "dictionnary": { //The data dictionary for reporting
        …
    }
}
```

///


#### クエリエンドポイント
_POST : /v2/query_  
指定されたクエリを実行します。

パラメータ：
_JSON :JSONクエリ_

##### クエリパラメータ
      
| パラメータ名 | 必須／任意 | 例 | 説明 |
| --- | --- | --- | --- |
| data.fields | 必須 | { &quot;income&quot;:[&quot;sum&quot;],&quot;expense&quot;:[&quot;sum&quot;]} | 返すフィールドとそれぞれのコンピュートモード（select、select_distinct、sum、min、max、avg、count、count\_distinctを指定可）          |
| data.skip | 任意 | 10 | スキップする行数 |
| data.limit | 任意 | 100 | 返される行数 |
| data.hints | 任意 | True/False | クエリに対応する合計行数（data.limitを除外） |
| filter | 任意 | {  &quot;date&quot;: {          &quot;between&quot;: [&quot;1420066800", "1428962399&quot;]  },  &quot;client\_code&quot;: {          &quot;in&quot;: [&quot;08KD&quot;, &quot;09CC&quot;]  },  &quot;creation\_date&quot;: {          &quot;eq&quot;: [&quot;2018-01-01&quot;]  }}  | クエリするデータにフィルターを適用。フィルターには、in、not\_in、between、not\_between、eq、not\_equal、like、not\_like、is\_null、is\_not\_null、gt (\&gt;)、gte (\&gt;=)、lt (\&lt;)、lte (\&lt;=)を指定可 |
| scale.fields | 任意 | [&quot;date&quot;,[&quot;client\_code&quot;, &quot;employee\_id&quot;]] | クエリにスケール（グループ化）を適用。計算されたスケールや、複数のスケールを指定可 |
| evol.scale | 任意 | &quot;year&quot; | 変化に適用するスケール（weekday、week、month、quarter、semester、year） |
| evol.mode | 任意 | &quot;date&quot;&quot;weekday&quot; | date：同じ日付との比較　weekday：同じ曜日との比較 |
| evol.depth | 任意 | 5 | 取得する変化の数 |
| total.all | 任意 | [][&quot;client\_code&quot;] | 個別のスケールごとの合計クエリ数（オプション） |
| total.x | 任意 | [&quot;client\_code&quot;] | 特定の属性の合計クエリ数 |
| order | 任意 | {   &quot;date&quot;:&quot;asc&quot;} | クエリ出力の順序（ascまたはdesc、デフォルトでasc） |
| table_name | 任意 | &quot;prim\_vehicles&quot; | 特定のテーブルでクエリを強制的に実行 |
| database_name | 任意 | &quot;data\_prim&quot;&quot;data\_mart&quot; | 特定の階層でクエリを強制的に実行 |

### クエリサンプル

///

##### 説明付きクエリサンプル

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
:::


**クエリ応答**

| コード | 説明 |
| ---- |:----------- |
| 200 | JSONオブジェクト |

```json
{
    "success": true,
    "timestamp": 1435936140,
    "duration": 0.09,
    "error": null,
    "warning": null,
    "query_params": {…}, //recap of the executed query
    "results": [  //results of the query      
        {
            "data": {
                "a": {
                    "sum": [
                        {
                            "month": 1,
                            "team": "Team Rocket",
                            "value": 10300
                        },
                        {
                            "month ": null,
                            "team": null,
                            "value": null
                        }
                    ]
                }1
            },
            "scales": {
                "month_date_fact": 1,
                "team": "Team Rocket"
            }
        }
    ],
    "total": { //results for each total provided by the query
        "all": [{…}]        
    }
}
```

///
