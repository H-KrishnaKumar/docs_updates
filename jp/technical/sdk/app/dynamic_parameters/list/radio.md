# Radio（ラジオ）

ラジオボタンでは、定義済みのリストから**1つ**のアイテムを選択できます。

> 詳細については、[チェックボックス](/jp/technical/sdk/app/dynamic_parameters/list/checkbox)を参照してください。  
次の点が異なります。
* `component`：**radio**
* `default`：`string`であり、`array`ではない


```json
{
  "id": "year",
  "type": "filter",
  "component": "radio",
  "reference": "year",
  "dictionary": "year",
  "default": "2020",
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
* __items__：表示する要素を手動で定義。画面にlabelを表示し、関連するクエリでvalueを表示
* __dictionary__：データプラントからアイテムを自動的かつ動的にロード
* __default__：ラジオボタンが最初に表示されたときに、この値を選択
* __reference__：「filter」タイプの変換を行う場合にクエリで変更するフィールドの名前を指定

## コードの例

```jsx
import React from 'react'
import FpDynamicParameter from 'forepaas/dynamic-parameter'
import moment from 'moment'

const myDynP =  {
  id: 'city',
  type: 'filter',
  component: 'radio',
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