# 選択ボックス

選択ボックスでは、定義済みリストから（必要な設定に応じて）1つまたは複数のアイテムを選択できます。

```json
{
  "id": "the-year",
  "type": "filter",
  "component": "selectbox",
  "customclass": "my-selectbox"
  "reference": "year",
  "placeholder": "Select a year",
  "sortBy": "value",
  "notEmpty": true,
  "multi": false,
  "default": [
    "2019"
  ],
  "dictionary": "year",
  "parents": [],
  "items": [
    {
      "value": "2020",
      "label": "Year 2020"
    },
    {
      "value": "2019",
      "label": "Year 2019"
    },
    {
      "value": "2018",
      "label": "Year 2018"
    }
  ]
}
```

| フィールド   | 説明 |
| :------ | :---------- |
| `customclass` | 選択ボックスに関するカスタムCSSクラスを追加 |
| `reference` | `filter`タイプの変換を行う場合にクエリで変更するフィールドの名前を指定 |
| `placeholder` | アイテムが選択されていない場合に表示されるメッセージを設定 |
| `sortBy` | 値またはラベルで結果を順序付け（指定できる値は`none`、`label`、`value`、`-label`、`-value`） |
| `notEmpty` | 最初のロード時に、notEmptyが使用されていて、デフォルト値が設定されていない場合、最初の要素を自動的に選択 |
| `multi` | この値が使用されている場合は、選択ボックスで複数の値を選択可能 |
| `default` | 選択ボックスが最初に表示されたときに、この値を使用 |
| `dictionary` | データプラントからアイテムを自動的かつ動的にロード |
| `parents` | この選択ボックスの内容をフィルタリングする動的パラメータの`id`を列挙する配列 |
| `items` | 選択ボックスに表示する要素を手動で定義。画面にlabelを表示し、関連するクエリでvalueを送信 |

## コードの例

```jsx
import React from 'react'
import FpDynamicParameter from 'forepaas/dynamic-parameter'
import moment from 'moment'

const myDynP =  {
  id: 'city',
  type: 'filter',
  component: 'selectbox',
  reference: 'city',
  dictionary: 'city'
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