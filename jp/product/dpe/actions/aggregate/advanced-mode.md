# 集計アクションの詳細モード

DPEでアクションエディター（「DPE」>「Actions（アクション）」>「New Action（新規アクション）」>「Aggregate（集計）」）のヘッダー部分から詳細モードに切り替えることで、JSON形式の設定ファイルを表示してこのファイルを直接操作し、**集計アクションを詳細にカスタマイズ**できます。JSONファイルを利用することで、柔軟性が向上し、集計アクションのすべてのオプションにアクセスすることができます。

JSON形式の集計アクション設定ファイルは、上位レベルの複数のオブジェクトで構成されており、これらはいずれも必須です。これには以下の内容が含まれます。
* [**ソース**](/jp/product/dpe/actions/aggregate/advanced-mode?id=sources)：データのロード元として使用するソーステーブルを定義します。
* [**グループ化**](/jp/product/dpe/actions/aggregate/advanced-mode?id=grouping)：宛先テーブルの主キーに基づいて、データのグループ化に使用するディメンションを定義します。
* [**スキーマ**](/jp/product/dpe/actions/aggregate/advanced-mode?id=schema)：宛先テーブルとソーステーブルの間の個別のマッピングを定義します。
* [**結合**](/jp/product/dpe/actions/aggregate/advanced-mode?id=join)：複数のソースが存在する場合に、一時的な結合条件を定義します。
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
 
> **ヒント**：table_nameの後にスペースを1つ追加し、その後にテーブルのエイリアスを表す文字を追加すると、テーブルの別名を指定できます。例えば、"source": "dwh/source_facebook/lifetime_insights fb_i"のように指定します。この場合、`fb_i`が`lifetime_insights`テーブルの別名になります。この別名は結合やスキーマで再利用できます。

---

## グループ化

集計されるデータの粒度はスケーリングによって決まります。これは、集計テーブルに追加するデータを構成するときに特に役立ちます。

**形式**：これは、グループ化の粒度を特定する属性またはSQLルールのJSONリストです。

**JSONキー**：`params.scale`

例：
```
{
"load_from": {
  "source": "dwh/data_prim/prim_facebook"
},
"scale": ["date","page_id"],
…
```

この場合、`date`と`page_id`を用いて`fb_fans`の数が集計されます。

> スケールを実装すると、SQL抽出クエリにGROUP BY操作が生成されます。この例の場合：GROUP BY `page_id`, date

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
      "sql": "CONCAT(\"HELLO : \", prim_calendar.legumes)"
    },
    "season": {
      "type": "replace",
      "value": "hello"
    }
}
```

次の3つのタイプのマッピングが存在します。
* タイプ：`default`：変換を行うことなく属性を別の属性にマッピング*
* `table`：属性の元のソースオブジェクト
* * `attribute`：マッピング元のソース属性
* * `operation`：SQL操作セクションに記載されたSQL操作のタイプ（SQL-likeのソースの場合のみ）
* タイプ：`replace`：宛先のすべての行にハードコードされた値を配置
* * `value`：この属性には追加／更新対象の宛先のすべての行の値を入力
* タイプ：`sql`：後続のSQL式を適用（SQL-likeのソースの場合のみ）
* * `sql`：この値はSQLステートメント


---

## 結合

結合が可能なのは、同じデータベースまたは同じデータベースインスタンス内に存在するテーブル間のみです（例えば、`data_prim`または`data_mart`のテーブルのみ）。

**形式**：それぞれがJOINステートメントを表すJSONオブジェクトのリストです。JSONオブジェクトの順序は、JOINアクションシーケンスの順序です。

**JSONキー**：`params.joins`

例：
```{
"joins": [
    {
      "table": "ref_month",
      "type": "LEFT",
      "condition": "prim_calendar.month_number = ref_month.month_number"
    },
    {
      "table": "ref_saison",
      "type": "LEFT",
      "condition": "prim_calendar.month_number = ref_season.season_number"
    }
  ]
```

* `table`：ソースを結合するテーブル
* `type`：結合セクションに記載された結合タイプ
* `condition`：結合条件、この後にSQLステートメントのONキーワードが続く 

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

例：

```{
"extract_chunk_size": 5000
```

この場合、ワーカーは5000行まとめてデータを抽出できます。

**JSONキー**：`params.load_from[0].extract_chunk_size`

#### Load_batch_size

`load_batch_size`は、データベースにデータをロードする際に一度に許容される最大サイズを表す整数値です。

**JSONキー**：`params.load_batch_size`

例：

```{
"load_batch_size": 5000
```

この場合、ワーカーは5000行をまとめてデータをロードできます。

#### Source_rules

`source_rules`は、簡単なデータの準備を行うためのルールを表します。この設定で、DWHから同期された既存のルールがオーバーライドされます。これらはソースからの属性に対して適用されます。例として、属性`date_source`に対して変換ルールを適用する場合を考えます。

**形式**：JSONオブジェクトを含むリストで、それぞれが属性に適用されるルールを表します。

**JSONキー**：`params.load_from[source_rules]`

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

#### Rules

rulesは、抽出属性ではなく宛先属性に適用される点を除いてsource_rulesと同じです。rulesでは、異なる複数の宛先属性を同じソース属性にマッピングし、これに異なるルールを割り当てることができます。

**形式**：JSONオブジェクトを含むリストで、それぞれが属性に適用されるルールを表します。

**JSONキー**：`params.rules`

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

#### SQL条件

複雑なSQL条件を用いてフィルター処理を行う場合は、「condition」オプションを使用して条件を追加できます。

**JSONキー**：`params.load_from[0].condition` **形式**：ソースに対して生成されるSQLクエリの抽出の「WHERE」句を含む文字列（「WHERE」を除外）です。

例：
```
{
"params": 
  {
    "load_from": [{
      "condition": " (attribute1 > 1 OR attribute2 BETWEEN 2019 and 2021) ",
      ...
    }]
  }
}
```
