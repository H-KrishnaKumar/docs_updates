# ロードアクションの詳細モード

一部のオプションに制限がある点を除き、ロードアクションの全体的なスキーマは集計アクションとよく似ています。ロードアクションは生（未処理）のソースからForePaaSにデータをロードするためのものであるのに対し、集計アクションはForePaaSのデータウェアハウス内にあるテーブルに対して操作を行うためのものであることに注意する必要があります。 

大まかに言うと、ロードアクションはデータをロードするための簡便な方法を提供するために集計アクションを簡略化したものです。集計アクションの詳細な説明は、[集計アクションの詳細モード](https://docs.forepaas.io/#/jp/product/dpe/actions/aggregate/advanced-mode.md)を参照してください。

JSON形式のロードアクション設定ファイルは、上位レベルの複数のオブジェクトで構成されており、これらはいずれも必須です。これには以下の内容が含まれます。
* [**ソース**](/jp/product/dpe/actions/aggregate/advanced-mode?id=sources)：データのロード元として使用するソーステーブルを定義します。
* [**スキーマ**](/jp/product/dpe/actions/aggregate/advanced-mode?id=schema)：宛先テーブルとソーステーブルの間の個別のマッピングを定義します。
* [**宛先**](/jp/product/dpe/actions/aggregate/advanced-mode?id=destination)：集計アクションからの出力データをロードするテーブルを定義します。

その他の任意のパラメータを追加することもできます。これについては、[**その他の任意のパラメータ**](/jp/product/dpe/actions/aggregate/advanced-mode?id=other-optional-parameters)のセクションで、セグメント化、境界、または変換ルールなどのパラメータについて説明します。

---

## ソース

**形式**：このJSONには、ソースを示す文字列の値と任意の関連パラメータが含まれます。ソースのパスは`dwh/database_name/table_name`の形で表記されます。ここで、`database_name`はソースの場所の名前（ソースまたはData Manager）で、`table_name`はソースオブジェクトまたはData Managerのスキーマ内のオブジェクトの名前です。

**JSONキー**：`params.load_from[0].source`または`params.load_from.source`

例：
```
"load_from" : [
    {
        "source" : "dwh/data_prim/prim_calendar",
        "force_utf8" : true
    }
]

load_from" : {
        "source" : "dwh/data_prim/prim_calendar",
        "force_utf8" : true
}
```
 
> **ヒント**：SQL-likeのソースの場合：table_nameの後にスペースを1つ追加し、その後にテーブルのエイリアスを表す文字を追加すると、テーブルの別名を指定できます。例えば、"source": "dwh/mysql_source/lifetime_insights fb_i"のように指定します。この場合、`fb_i`が`lifetime_insights`テーブルの別名になります。この別名は結合やスキーマで再利用できます。

---

## スキーマ

スキーマでは、ソース内に存在するフィールドの名前と、宛先内でこれらのフィールドに付けるべき名前の対応関係を特定します。

**形式**：スキーマオブジェクトには一連のJSONオブジェクトが含まれます。JSONの各キーは宛先の属性の名前で、値には該当する属性に関連するパラメータが含まれます。

**JSONキー**：`params.schema`

例：
```
{
"schema": {
    "month": {
      "table": "ref_month",
      "operation": "SELECT",
      "type": "default",
      "attribute": "month"
    },
    "vegetables": {
      "type": "sql",
      "sql": "CONCAT(\"HELLO : \", prim_calendar.vegetables)"
    },
    "season": {
      "type": "replace",
      "value": "summer"
    }
}
```

* `schema.keys()`宛先属性
* `type`各属性のマッピングモード

次の3つのタイプのマッピングが存在します。
* タイプ：`default`：変換を行うことなく属性を別の属性にマッピング
* * `table`：属性の元のソースオブジェクト
* * `attribute`：マッピング元のソース属性
* * `operation`：SQL操作セクションに記載されたSQL操作のタイプ（SQL-likeのソースの場合のみ）
* タイプ：`replace`：宛先のすべての行にハードコードされた値を配置
* * `value`：この属性には追加／更新対象の宛先のすべての行の値を入力
* タイプ：`sql`：後続のSQL式を適用（SQL-likeのソースの場合のみ）
* * `sql`この値はSQLステートメント

---

## 宛先

宛先はアクションデータが挿入される場所を表します。

**形式**：パスは`dwh/database_name/table_name`の形で表記されます。ここで、database_nameは宛先データベースの名前（`data_prim`または`data_mart`）で、`table_name`はData Managerのスキーマ内の宛先テーブルの名前です。 

**JSONキー**：`params.load_to[source]`

例：

```{
"load_to": {
    "source": "dwh/data_prim/tmp_calendar",
    "force_utf8": true
  }
```

次のように、複数の宛先をまとめて記入することができます。

```{
"load_to": [
    {"source": "dwh/data_prim/prim_facebook"},
    {"source": "dwh/data_prim/tmp_facebook"},
  ]
```

---

## その他の任意のパラメータ

### Extract_chunk_size

`extract_chunk_size`は、データを抽出する際に一度に許容される最大サイズを表す整数値です。

**JSONキー**：`extract_chunk_size`

例：

```{
"extract_chunk_size": 5000
```

この場合、ワーカーは5000行まとめてデータを抽出できます。

**JSONキー**：`params.load_from[0].extract_chunk_size`

### Load_batch_size

`load_batch_size`は、データベースにデータをロードする際に一度に許容される最大サイズの整数値です。

**JSONキー**：`params.load_batch_size`

例：

```{
"load_batch_size": 5000
```

この場合、ワーカーは5000行をまとめてデータをロードできます。

### Source_rules

`source_rules`は、簡単なデータの準備を行うためのルールを表します。この設定で、DWHから同期された既存のルールがオーバーライドされます。これらはソースからの属性に対して適用されます。例として、属性`date_source`に対して変換ルールを適用する場合を考えます。

**形式**：JSONオブジェクトを含むリストで、それぞれが属性に適用されるルールを表します。

**JSONキー**：`load_from.source_rules`

例：
```{
  "source_rules": [
  {
    "action": "date_replace",
    "action_values": [
    "%d/%m/%Y %H:%i:%s",
    "%Y-%m-%d %H:%M:%S"
    ],
    "attribute_name": "date_source",
    "name": "correct date format"
  }
]
```

設定についての詳細な説明は、[ブループリントルール](https://docs.forepaas.io/#/jp/product/etl/actions/settings/blueprint-rules.md)に関するページを参照してください。

### Rules

rulesは、抽出属性ではなく宛先属性に適用される点を除いてsource_rulesと同じです。rulesでは、異なる複数の宛先属性を同じソース属性にマッピングし、これに異なるルールを割り当てることができます。

**形式**：JSONオブジェクトを含むリストで、それぞれが属性に適用されるルールを表します。

**JSONキー**：`rules`

例：
```{
"rules": [
  {
    "action": "date_replace",
    "action_values": [
    "%d/%m/%Y %H:%i:%s",
    "%Y-%m-%d %H:%M:%S"
    ],
    "attribute_name": "date_dest",
    "name": "correct date format"
  }
]
```

### JSON/XMLの半構造化データのマッピングの取り扱い

半構造化データのマッピングを扱うには、データを正規化された形で構造化するため、
ループするノードを指定する必要があります。 

例えば、ソースが次のようになっている場合： 
```
{
	"data": [
	  { "id":1,"name":"marco" },
	  { "id":2,"name":"polo" },
	]
}
```
「params」セクションのロードの設定に、次のように追加する必要があります。 
```
{
  "params":{
     "dataXPATH":"data",
     ...
  }
}
```


### 構造化されたCSV/XLSXファイルに関するその他のオプション

ExcelファイルやCSVファイルは、データが先頭の行から始まっていない場合があります。
この場合には、次のパラメータを設定します。 


#### offset
ソースファイルのヘッダーとデータ行の間の空の行数を指定します（デフォルトは0）。

「params.load_from[0]」セクションのロードの設定に、次のように追加する必要があります。 
```
{
  "params":{ 
    "load_from":[{
      "offset":1,
      ...
    }]
  }
}
```

#### header_offset
DPEでスキップする必要のあるファイルソース内のヘッダー部分の行数を指定します（デフォルトは0）。

「params.load_from[0]」セクションのロードの設定に、次のように追加する必要があります。 
```
{
  "params":{ 
    "load_from":[{
      "header_offset":1,
      ...
    }]
  }
}
```

#### header
ファイルの最初の行にヘッダーが存在するかどうかを指定します（デフォルトはtrue）。

「params.load_from[0]」セクションのロードの設定に、次のように追加する必要があります。 
```
{
  "params":{ 
    "load_from":[{
      "header":true,
      ...
    }]
  }
}
```

falseに設定した場合、それぞれの列の数を使用してマッピングを行う必要があります。メタデータについては、Data Managerでのファイルセットの抽出が役立ちます。
注：Data Managerの分析画面で"header"オプションを無効にした場合、ロードアクションでこの設定を再度設定する必要はありません。