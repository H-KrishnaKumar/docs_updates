# エンドポイント
 
 
## ソースの作成
 
**POST /datastores/db?token=xxxxx:**
 
Dropboxのソース用のJSON本文の記載例 
```json
{     
"dbms": "dropbox",     
"parameters":  { 
  "path": "/folder/path",         
  "token": "xxxxxxxxxx"     
},     
"database_name": "dropbox_source",     
"dwhName": "your_dwh_name",     
"level_name": "source 
} 
```
 
 
## ソースへのテーブルの追加 
 
**POST /metas/tables?dwh_name=your_dwh_name&token=xxxxx** 
 
Dropboxのソースへテーブルを追加するJSON本文の記載例： 
```json
{ 
  "table_name": "your_file.csv",     
  "database_name": "dropbox_source" 
} ```

 
You can also add several tables in one shot: 
```json
[{ 
   table_name": "file1.csv",       
  "database_name": "dropbox_source" 
 },
 {  
  "table_name": "file2.csv",       
  "database_name": "dropbox_source" 
}] 
```
 
## メタデータの抽出
 
**PUT /metas/sources/extract/source_name/table/table_name?dwhName=dwh_name&token=xxxxxxx**
 
Dropboxのソースでfile1.csvファイルからメタデータを抽出する必要がある場合は、/metas/sources/extract/dropbox_source/file1.csvを検索します。 
 
この*呼び出し*は、次のような設定を受け入れます。

- sample：（すべてのデータではなく）データのサンプルに関するメタデータを抽出（「true」に設定）
- sample_max_lines：サンプルが「true」に設定されている場合、これを使用してサンプルの最大行数を設定
- flashzone：データプラントのファイル／テーブルデータの概要を取得する場合にこのオプションを「true」に設定

## 仮想属性の追加
 
**POST /attributes/<your_dwh_name>?token=xxxxxxx** 
 
以下にJSON本文の記載例を示します。 {   "attribute_name": "my_attribute",   "parameters": {},   "is_dimension": false,   "is_virtual": true,   "is_summable": true,   "sql": "SELECT COUNT(id) FROM clients.csv",   "is_measure": true } 

## スキーマの保存
 
**POST /logical/object?dwhName=dwh_name&token=xxxxxx** 
 
以下にJSON本文の記載例を示します。

```json
[  
   {  
      "attributes":[  
         {  
            "attribute_name":"conso_id",
            "is_dimension":true,
            "sources":[  
               {  
                  "rules":[  

                  ],
                  "attributes":[  
                     "dropbox/consomations.csv/conso_id"
                  ]
               }
            ],
            "is_summable":false,
            "attribute_path":null,
            "fpui":{  
               "operation":"mapping"
            },
            "type":{  
               "main":"num",
               "sub":"smallint"
            },
            "is_measure":false
         },
         {  
            "attribute_name":"ca",
            "database_name":"data_prim",
            "is_dimension":false,
            "sources":[  
               {  
                  "rules":[  

                  ],
                  "attributes":[  
                     "dropbox /consomations.csv/ca"
                  ]
               }
            ],
            "is_summable":false,
            "table_name":"consomations",
            "fpui":{  
               "operation":"mapping"
            },
            "type":{  
               "max":999.99,
               "main":"num",
               "precision":2,
               "min":0.02
            },
            "attribute_path":null,
            "is_measure":true
         }
      ],
      "object_name":"consomations",
      "display_name":"consomations",
      "object_type":"measure",
      "to_materialize":true,
      "measure_date_field":"date",
      "key":[  
         "conso_id"
      ],
      "date_type":false,
      "relations":[  

      ],
      "indexes":[  

      ]
   }
]
```

## Data PrimおよびData Martの作成 
 
Data Primの論理構造：
**PUT /logical/build/prim?dwhName=dwh_name&token=xxxxxx**
 
Data Martの論理構造：
**PUT /logical/build/prim?dwhName=dwh_name&token=xxxxxx** 

物理構造：
**PUT /datastores/db/physical?token=xxxxx 以下にJSON本文の記載例を示します。 {   "levelsToBuild": "["data_prim"]",   "dwhName": "plw1uzhy_jm224kp5" }** 