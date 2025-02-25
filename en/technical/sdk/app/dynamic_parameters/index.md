# Dynamic Parameters


Dynamic parameters enables your end-users to select values which are passed on to Charts to be filtered on and refreshed.

Dynamic Parameters values are applied to Chart requests at the [Front API level](/en/technical/sdk/api/index) via [Query Builder Transformers](/en/technical/sdk/api/qb-transformers). You may extend default Transformers to your own needs.

For specific display needs, it is also possible to create custom Dynamic Parameters.

---
## List of available Dynamic Parameters

| name       | description  |
| :--------- | :----------- |
| [selectbox](en/technical/sdk/app/dynamic_parameters/list/selectbox)  | Select from a list, one or more items |
| [checkbox](en/technical/sdk/app/dynamic_parameters/list/checkbox)   | Select from checkboxes one or more items |
| [radio](en/technical/sdk/app/dynamic_parameters/list/radio)      | Selects an item through a list of radio buttons |
| [datepicker](en/technical/sdk/app/dynamic_parameters/list/datepicker) | Select a date range |
| [datepicker.day](en/technical/sdk/app/dynamic_parameters/list/daypicker) | Select a specific day |
| [datepicker.months](en/technical/sdk/app/dynamic_parameters/list/monthspicker) | Select a month range |
| [datepicker.month](en/technical/sdk/app/dynamic_parameters/list/monthpicker) | Select a specific month |
| [toggle](en/technical/sdk/app/dynamic_parameters/list/toggle) | Return a boolean |

### Configuration
```json
{
  "id": "my-id",
  "component": "selectbox",
  "type": "filter"
}
```

| fields  | description  |
| :------ | :----------- |
| `id`    | Used when saving its state and to connect it to Charts. | 
| `component` | Specify the dynamic parameter to use, either those listed above, or your own. |  
| `type` | Specify how `requests` are affected, acting either as a `filter` or as a `scale`. Custom transformers may handle your own types |


!> **Tip** When using **Architect** it will auto-generate an `id` with a non-meaningful name. We strongly recommend to rename it as soon as you have created it, as this `id` will be used in `chart.dynamic-parameters`.

---
## Adding Dynamic Parameters in Dashboard

You can add a dynamic parameter :
* from the online dashboard editor and its dialog boxes
* in **Advanced Mode** to edit JSON configuration
* by editing directly configuration files in `./config/`
* Via the `menu` tab in the main menu selection 

---
## Using a Dynamic Parameter in another React Component

You may use a dynamic parameter directly from code. Use the same JSON configuration as described above, and then call it as any React component.

Example:
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
## Creating your own Dynamic Parameter

You can write your own component to customize the appearance of your dynamic parameter.

?>➡️ Check out the available tutorial [**here**](en/technical/sdk/app/dynamic_parameters/create)!