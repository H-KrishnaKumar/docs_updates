# Toggle（切り替えスイッチ）

トグルスイッチでは、ブール値を返すことができます。

```json
{
  "id": "my-toggle",
  "type": "filter",
  "component": "toggle",
  "default": false
}
```

| フィールド | 説明 |
| :---- | :---------- |
| `default` | トグルスイッチを最初に表示したときに、この値（true/false）で初期化 |

## コードの例

```jsx
import React from 'react'
import FpDynamicParameter from 'forepaas/dynamic-parameter'
import moment from 'moment'

const myDynP =  {
  id: 'my-toggle',
  type: 'filter',
  component: 'toggle'
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