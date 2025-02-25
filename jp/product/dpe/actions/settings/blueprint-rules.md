# DPEおよびData Managerのルール

## ルールの書式

ルールは各行に対して個別に適用されます。1つのルールで複数の事柄を許可できます。

条件が指定されている場合は、conditionおよびcondition_value(s)で表された一定の条件下でのみルールが適用されます。

アクションが指定されている場合は、各行に対してアクションが実行されます。それ以外の場合は、フィルタリングルールであると見なされます（keep）。

###	フィールド

| 属性名 | 必須／任意 | 例 | コメント |
| --- | --- | --- | --- |
| attribute\_name | 書式がリストの場合：必須、書式がオブジェクトの場合：任意 | ca\_ttcdate.. |   |
| condition | 任意（= ALL） | EQUAL
IN | 1.2を参照 |
| condition\_value | 必須（condition = [IN, NOTIN, ALL]の場合を除く） | 1
« Categorie1 » |   |
| condition\_values | 必須（condition = [IN , NOTIN]の場合） | [« ca\_ttc »,2,3][« categorie » ] |   |
| action | 任意 | keep concat | 1.3を参照 |
| action\_value | 必須（action = [default, split]の場合） | 1
« Categorie1 » |   |
| action\_values | 必須（action =
[default, split, action\_error, keep, skip]の場合を除く） | [« ca\_ttc »,2,3][« categorie » ] |   |
| else\_value | 条件を満たさない場合に、値をelse\_valueで置き換え | « ca2 »  |   |

### 条件のリスト

*condition*が入力されていない場合、デフォルトで設定される条件はALLになり、すべての行が許可されます。

| 条件の名前 | 説明 | 
| --- | --- | 
|  ALL  | すべての行を維持 
| EQUAL  |  有効な行：*attribute_name*が*condition_value*と等しい行
|  NOT EQUAL  |  有効な行：*attribute_name*が*condition_value*と等しくない行
|  IN  | 有効な行：*attribute_name*がリスト*condition_value*に含まれている行
| NOT IN  | 有効な行：*attribute_name*がリスト*condition_value*に含まれていない行
| LTE  |  有効な行：*attribute_name*が*condition_value*以下である行
|  LT  | 有効な行：*attribute_name*が*condition_value*未満である行
| GTE  | 有効な行：*attribute_name*が*condition_value*以上である行
| GT  | 有効な行：*attribute_name*が*condition_value*より大きい行
| REGEXP  | 有効な行：*attribute_name*が正規表現*condition_value*に対応している行 - 例： ^([0-9]{4})
| NOT REGEXP  | 有効な行：*attribute_name*が正規表現*condition_value*に対応していない行
| BETWEEN  | 有効な行：*attribute_name*が*condition_values[0]*と*condition_values[1]*の間にある行
| NOT BETWEEN  | 有効な行：*attribute_name*が*condition_values[0]*と*condition_values[1]*の間にない行
| OR  | 有効な行：*condition_values*に含まれている値の1つが空（空、NULL、False、0）ではない行
| AND  | 有効な行：*condition_values*に含まれているすべての値が空（空、NULL、False、0）ではない行
| IS NULL| 
| IS NOT NULL| 
| IS INT | 
| IS NOT INT | 
|  IS DATE | 
|  IS NOT DATE | 
|  IS DEC | 
| IS NOT DEC | 
|  IS NUM | 
|  IS NOT NUM | 


### アクションのリスト
*action*も*condition*も存在しない場合は、**デフォルトアクション**であると判断されます。
アクションが存在せず、*condition*が1つ存在する場合は、アクションはデフォルトで*keep*になります。
このアクションは、*condition*で定義されたルールに対応する行のみに適用されます。 

- *keep*:行を維持
- *skip*:行をスキップ
- *default*:  
値を*action\_value*で置き換え  
日付の場合：
  - $todayはyyyy-mm-ddを返す
  - $nowはyyyy-mm-dd hh:mm:ssを返す
  - $yesterdayはyyyy-mm-ddを返す
- *regexp\_replace*:  
正規表現*action\_values[0]*に対応する値を*action\_values[1]*で置き換え
- *replace*:  
*action\_values[0]*に対応する値を*action\_values[1]*で置き換え
- *substring / substr*:  
  - *action\_values[0]* \&gt;= 0の場合：
*action\_values[0]*番目の文字から始まる
  - *action\_values[0]* \&lt; 0の場合：  
最後の*action\_values[0]*文字のみを考慮する
  - *action\_values[1]*が指定されている場合：  
この2つ目の数字は必要な最大文字数を表す
- *date\_replace*:  
日付の形式*action\_values[0]*を*action\_values[1]*で置き換え  
*action\_values*の例：
  - [&quot;%d/%m/%Y&quot;,&quot;%Y-%m-%d&quot;]
  - 付録2.1のワイルドカードのリスト
- *add*:  
複数のフィールドまたは具体的な数値を追加し、*action\_values*の個々の値がその行で利用可能な属性であるかどうかを自動的に検出し、利用可能でない場合、その値は数値と判断*action\_values*の例：
  - [«ca\_ht », « taxes »]
  - [« nb\_clics »,1 ]
- *sub：*action\_values*内に存在する他のすべてのデータに*action\_values[0]*を減算
- *mul*：*action\_values[0]*に*action\_values[1]*を乗算
- *div*：*action\_values[0]*を*action\_values[1]*で除算
- *mod*：*action\_values[0]*を*action\_values[1]*でモジュロ演算
- *concat*：1つまたは複数のフィールドと具体的な文字列を連結。*action\_values*の各エレメントはそれぞれが行内で利用可能な列の名前であるかどうかを検出し、利用可能な列の名前でない場合、そのエレメントは具体的な文字列と判断
 - action\_valuesの例：
    - [« site\_name«, » -», « country«  ]
    - [« civilite «, » name», « lastname «  ]
- *ceil*：*action\_value*を切り上げ
- *floor*：*action\_value*を切り捨て
- *disaggregate / split*：  
1つのフィールドに個別の行に分割すべき複数の値が含まれる場合に、複数の行を作成するのに使用。
*disaggregate*ルールはDPEアクションごとに1つのみ。
このルールは自動的に常に最後に適用。
文字*action\_value*でフィールドを分割。
分割された各エレメントでは、空ではない値のみ維持。
- *action\_error*:アクションでエラーが発生（その結果、すべての行がFalseと見なされる） 
- *Stop\_workflow*:ワークフローを停止


## 付録
### 日付のワイルドカード
| **ディレクティブ** | **意味** | **例** |
| --- | --- | --- |
| %w | 10進数表記の曜日（0は日曜日、6は土曜日）  | 0、1、...、6 |
| %d | 10進数表記の日にち（ゼロ埋め） | 01、02、...、31 |
| %m | 10進数表記の月（ゼロ埋め）   | 01、02、...、12 |
| %y | 10進数表記の西暦年（下2桁のみ、ゼロ埋め）  | 00、01、...、99 |
| %Y | 10進数表記の西暦年  | 1970、1988、2001、2013 |
| %H | 10進数表記の時間（24時間制、ゼロ埋め）  | 00、01、...、23 |
| %I | 10進数表記の時間（12時間制、ゼロ埋め）  | 01、02、...、12 |
| %p | AMまたはPMのロケールでの表記 | AM/PM（en\_US）、am/pm（de\_DE） |
| %M | 10進数表記の分（ゼロ埋め） | 00、01、...、59 |
| %S | 10進数表記の秒（ゼロ埋め） | 00、01、...、59 |
| %f | 10進数表記のミリ秒（左ゼロ埋め） | 000000、000001、...、999999 |
| %z | UTCオフセットの形式が+HHMMまたは-HHMM（オブジェクトがnaiveの場合は空の文字列）  | （空）、+0000、-0400、+1030 |
| %Z | タイムゾーン名（オブジェクトがnaiveの場合は空の文字列） | （空）、UTC、EST、CST |
| %j | 10進数表記の年初から数えた日（ゼロ埋め） | 001、002、...、366 |
| %U | 10進数表記の年初からの週（日曜日が週の最初の曜日、ゼロ埋め）。新年の最初の日曜日より前の日は第0週 | 00、01、...、53 |
| %W | 10進数表記の年初からの週（月曜日が週の最初の曜日）。新年の最初の月曜日より前の日は第0週 | 00、01、...、53 |
| %% | 記号リテラル'%' | % |




### ルールの例
```
[

    {
        "attribute_name": "date",
        "action": "date_replace",
        "action_values": ["%d/%m/%Y", "%Y-%m-%d"]
    }

]
```
```
[
    {
        "attribute_name":"year",
        "condition":"IN",
        "condition_values":["2015","2016"],
        "action":"add",
        "action_values":["year",1]
    }

]
```
```
[
    {
        "attribute_name":"year",
        "condition":"LT",
        "condition_value":"2015",
        "action":"default" ,
        "action_value:"2015"
    }
]
```
```
[
    {
          "action": "default",
          "action_value": "$today",
          "attribute_name": "date"
    }
]
```
```
[
    {
          "action": "sub",
          "action_values": [
            "temp_min",
            273.15
          ],
          "attribute_name": "temp_min"
     }
]
```
```
[
    {
          "action": "date_replace",
          "action_values": [
            "%a %b %d %H:%M:%S +0000 %Y",
            "%Y-%m-%d %H:%M:%S"
          ],
          "attribute_name": "statuses_created_at"
    }
]
```

