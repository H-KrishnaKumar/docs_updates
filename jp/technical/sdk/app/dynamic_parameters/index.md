# 動的パラメータ


動的パラメータでは、フィルタリングや更新を行うためにグラフに渡す値を、エンドユーザーが選択できます。

動的パラメータの値は、[Query Builderのトランスフォーマー](/jp/technical/sdk/api/index)を介して[フロントAPIレベル](/jp/technical/sdk/api/index)でグラフの要求に対して適用されます。デフォルトのトランスフォーマーは固有のニーズに合わせて拡張できます。

また、個別の表示ニーズに合わせて、カスタム動的パラメータを作成することもできます。

---
## 利用可能な動的パラメータのリスト

| 名前       | 説明  |
| :--------- | :----------- |
| [selectbox](jp/technical/sdk/app/dynamic_parameters/list/selectbox)  | リストから1つ以上のアイテムを選択 |
| [checkbox](jp/technical/sdk/app/dynamic_parameters/list/checkbox)   | チェックボックスから1つ以上のアイテムを選択 |
| [radio](jp/technical/sdk/app/dynamic_parameters/list/radio)      | ラジオボタンのリストから1つのアイテムを選択 |
| [datepicker](jp/technical/sdk/app/dynamic_parameters/list/datepicker) | 日付の範囲を選択 |
| [datepicker.day](jp/technical/sdk/app/dynamic_parameters/list/daypicker) | 特定の日を選択 |
| [datepicker.months](jp/technical/sdk/app/dynamic_parameters/list/monthspicker) | 月の範囲を選択 |
| [datepicker.month](jp/technical/sdk/app/dynamic_parameters/list/monthpicker) | 特定の月を選択 |
| [toggle](jp/technical/sdk/app/dynamic_parameters/list/toggle) | ブール値を返信 |

### 構成
```json
{
  "id": "my-id",
  "component": "selectbox",
  "type": "filter"
}
```

| フィールド  | 説明  |
| :------ | :----------- |
| `id`    | 状態を保存する場合やグラフに接続する目的で使用 | 
| `component` | 使用する動的パラメータ（上記の動的パラメータまたは独自の動的パラメータ）を指定 |  
| `type` | `requests`にどのように作用するか（`filter`または`scale`のどちらで機能するか）を指定。カスタムトランスフォーマーでは独自のタイプを扱うことが可能 |


!> **ヒント** **Architect**を使用する場合、意味のない名前を用いて`id`が自動生成されます。この`id`は`chart.dynamic-parameters`で使用されるため、作成後すぐに名前を変更することを強くお勧めします。

---
## ダッシュボードでの動的パラメータの追加

次の方法で動的パラメータを追加することができます。
* オンラインのダッシュボードエディターおよびダッシュボードエディターのダイアログボックスを使用
* JSON形式の設定を編集するための**詳細モード**を使用
* `./config/`で設定ファイルを直接編集
* メインのメニュー選択で`menu`タブを使用 

---
## 別のReactコンポーネントでの動的パラメータの使用

動的パラメータをコードで直接使用することができます。上記と同じJSON形式の設定を使用し、この設定をReactコンポーネントとして呼び出します。

例：
```jsx
import React from 'react'
import FpDynamicParameter from 'forepaas/dynamic-parameter'

const myDynP =  {
    id: 'city',
    type: 'filter',
    component: 'checkbox',
    reference: 'city',
    dictionary: 'city',
    default: ['Paris', 'San Francisco']
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
## 独自の動的パラメータの作成

独自のコンポーネントを作成して、動的パラメータの外観をカスタマイズすることができます。

?>➡️ [**こちら**](jp/technical/sdk/app/dynamic_parameters/create)のチュートリアルを参照してください。