# チェックボックス

チェックボックスでは、定義済みのリストから1つまたは複数のアイテムを選択できます。


```json
{
  "id": "year",
  "type": "filter",
  "component": "checkbox",
  "reference": "year",
  "default": ["2020"]
  "dictionary": "year",
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

| フィールド | 説明 |
| :---- | :---------- |
| `reference` | `filter`タイプの変換を行う場合にクエリで変更するフィールドの名前を指定 |
| `default` | 最初に表示されたときに、この値を使用 |
| `dictionary` | データプラントからアイテムを自動的かつ動的にロード |
| `items` | 表示する要素を手動で定義。`label`を表示し、関連するクエリで`value`を送信 |


!> チェックボックスの選択肢は、`items`のリスト**または**`dictionary`から取得されます。

## コードの例

例：
```jsx
import React from 'react'
import FpDynamicParameter from 'forepaas/dynamic-parameter'
import moment from 'moment'

const myDynP =  {
  id: 'city',
  type: 'filter',
  component: 'checkbox',
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