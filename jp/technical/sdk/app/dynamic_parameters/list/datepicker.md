# Datepicker

Datepickerでは、グラフでデータのフィルタリングを行う**日付の範囲**を選択できます。

## 構成
以下に設定例を示します。詳しい説明は設定例の後に記載されています。
```json
{
  "id": "datepicker",
  "type": "filter",
  "component": "datepicker",
  "reference": "date",
  "format": "YYYY-MM-DD",
  "startAt": "subtract(1,'year').startOf('day')",
  "endAt": "endOf('day')",
  "minDate": "startOf('day')",
  "maxDate": "endOf('day')",
  "request": {
    "data": {
      "fields": {
        "date": ["max", "min"]
      }
    }
  },
  "ranges": [
    {
      "label": "Past week",
      "start": "subtract(1, 'week').startOf('week')",
      "end": "subtract(1, 'week').endOf('week')"
    },
    {
      "label": "Current week",
      "start": "startOf('week')",
      "end": "endOf('day')"
    }
  ]
}
```

!> 日付は[momentjsライブラリ](https://momentjs.com/)を使用して定義されています（詳細は以下を参照してください）。

| フィールド    | 説明 |
| :------- | :---------- |
| `reference` | グラフにリンクされている場合に`filter`の対象となるフィールド（`range_`をフィールド名に追加する**必要がある**） |
| `format` | *（任意）*Datepickerにおける表示形式。指定しない場合は、`./config/formatter.json`の表示形式を使用 |
| `startAt` |  *（任意）*Datepickerのデフォルトの開始日付 |
| `endAt` |  *（任意）*Datepickerのデフォルトの終了日付 |
| `minDate` | *（任意）*Datepickerで選択できる最小日付 |
| `maxDate` | *（任意）*Datepickerで選択できる最大日付 |
| `request` | *（任意）*元になるデータから`min`および`max`の日付を動的に取得 |
| `ranges` | 選択可能な範囲をショートカットバーで直接表示。`start`および`end`パラメータで範囲の開始と終了を選択し、`label`を表示 |

---
## 利用できる最小日付と最大日付の設定

以下のルールは、Datepickerの両端の日付の制御方法について説明したものです。
* `request`が指定されている場合：
  * `datepicker`はクエリの最初のフィールドを確認し、`min`および`max`コンピュートモードを検索
  * `max`のみが指定されている場合：`min`は`max`と同じ値
* `request`が設定されていない場合：
  * `max`は`now()` に設定
  * `min`はnow()に設定
* `maxDate`、`startAt`、`endAt`は`max`に対して定義
* `minDate`は`min`に対して定義
* `minDate`が指定されていない場合：minDateは`max`の前の年の年初を設定
* いずれの場合も、`set({'year':2020, 'month':0, 'date':1})`の形で正確な日付を指定

> *まとめると*、選択可能な日付を定義する場合：
* デフォルトで、次の範囲を設定
  * 前の年の年初から
  * 今日の日付まで
* `minDate`および`maxDate`プロパティを使用して今日の日付に対して定義
* `request`を定義して`min`と`max`の日付の両方またはいずれかを選択

!> `request`で`min`を取得する場合、`minDate`は`min`が基準になり、`max`が基準になることはありません。

---
## 別のReactコンポーネントでの追加

例：
```jsx
import React from 'react'
import FpDynamicParameter from 'forepaas/dynamic-parameter'
import moment from 'moment'

const myDynP =  {
  id: 'datepicker',
  type: 'filter',
  component: 'datepicker',
  reference: 'date',
  startAt: 'subtract(1,"year")',
  endAt: 'endOf("day")',
  minDate: moment().subtract(3, 'year'),
  maxDate: moment().endOf('day'),
  format: 'YYYY-MM-DD',
  request: {
    data: {
      fields: {
        date: ['max']
      }
    }
  },
  ranges: [{
    start: moment().subtract(1, 'week').startOf('week'),
    end: moment().subtract(1, 'week').endOf('week'),
    label: 'Past week'
  }, {
    start: moment().startOf('week'),
    end: moment().endOf('day'),
    label: 'Current week'
  }]
}
class MyComponent extends React.Component {
  render () {
    return (
      <div className='hello-world'>
        <FpDynamicParameter dynamic-parameter={myDynP} />
      </div>
    )
  }
}
export default MyComponent
```

---
## moment.jsライブラリ

Datepickerは、[momentjs](https://momentjs.com/)ライブラリを使用します。
このため、必要な期間を容易に選択することができます。
コードでは、パラメータごとにmomentjs形式でオブジェクトを直接指定できます。
ただし、JSON形式では、momentjsは"文字列"形式で使用されます。

例えば、
```js
moment().subtract(1, 'week').endOf('week')
```
は次のようになります。
```json
"subtract(1, 'week').endOf('week')"
```
