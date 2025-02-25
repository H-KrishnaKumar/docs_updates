# フォーマッタ

フォーマッタは、単位や区切り記号などを使用してデータが適切に表示されるように、アプリケーションのデータの書式設定を行うのに使用します。

この設定は、`./config/global.json`からロードされる`./config/formatter.json`設定ファイルになります。

---
## フォーマッタのリスト

### `separator`

**説明**：3桁ごとの区切りと小数点の記号を選択します。

| オプション     | 説明              | タイプ     | 値 |
| :--------- | :----------------------- | :------- | :----- |
| `thousand` | 3桁ごとの区切り  | _string_ | _-_    |
| `decimal`  | 小数点の記号 | _string_ | _-_    |

 **例**：

```json
{
    "separator": {
        "thousand": ",",
        "decimal": "."
    }
}
```


### `measures`

**説明**：サフィックス（接尾語）を使用して数値を書式設定します。

| オプション     | 説明              | タイプ      | 値 |
| :--------- | :----------------------- | :-------- | :----- |
| `unit ` | データの値の後に付ける単位 | _string_ | - |
| `round` | データの概数化（`short`が空でない場合は無視） | _number_ | - |
| `mult` | データに指定した値を乗算 | _number_ | - |
| `pows` | しきい値ごと（1、10<sup>3</sup>、10<sup>6</sup>、10<sup>9</sup>、...）に適用される単位のプレフィックスのリスト | _array_ | - |
| `short` | 表示する桁数、「pows」で適用するプレフィックスを特定するのに使用 | _number_ | - |

 **例**：

以下の例では、**turnover**が書式設定対象のデータです。この設定は次のような意味になります。

>表示される単位は€で、2桁の数字に丸め、値に1000を乗じます。  
例えば、値が**10**に達すると、表示される値は**10 k€**になります。

```json
{
    "measures": {
        "turnover": {
            "unit": "€",
             "round": 2,
             "mult": 1000,
             "pows": [
               " ",
              " k",
              " M",
              " G"
            ],
            "short": 3
        }
    }
}
```

!> メジャーの書式は、Query Builderの要求に含まれる**turnover**フィールドに対して**すべてのグラフが自動的に適用**します。  
また、独自のコンポーネント内で、次のようにコードを使って使用することもできます。


```jsx
import { FpMeasure } from 'forepaas/formatter'
function formatValue(field, value) {
    let measure = new FpMeasure(field);
    return measure.setValue(value).toString();
}
console.log(formatValue("turnover", 100));

```

### `dimensions`

**説明**：軸で使用するデータの種類を示します。

| オプション     | 説明              | タイプ      | 値 |
| :--------- | :----------------------- | :-------- | :----- |
| `type `    | データタイプ | _null_、_string_ | - _null_<br />- _temporal_ |
| `subtype`  | データサブタイプ | _string_ | - _year_<br />- _month_<br />- _quarter_<br />- _semester_<br />- _date_<br />- _datetime_<br />- _month-year_<br />- _week-year_ |
| `format`   | 適用する書式 | _string_ | 多数あり |

**例：**

```json
{
    "dimensions": {
        "sample_year": {
            "type": "temporal",
            "subtype": "year",
            "format": "YYYY"
        },
        "sample_month": {
            "type": "temporal",
            "subtype": "month",
            "format": "MM"
        },
        "sample_date": {
            "type": "temporal",
            "subtype": "date",
            "format": "DD/MM/YYYY"
        }
    }
}
```

!> 全体およびX軸における`scale`のレンダリングで、グラフコンポーネントは自動的にディメンションの書式を使用します。