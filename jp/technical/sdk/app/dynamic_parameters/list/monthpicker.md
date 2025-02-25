# Monthpicker

Monthpickerでは、グラフのデータのフィルタリングを行う特定の月を選択できます。

> 詳細については、[datepicker](/jp/technical/sdk/app/dynamic_parameters/list/datepicker)を参照してください。違いは`component`の値のみです。

## 構成
```json
{
  "id": "monthpicker",
  "type": "filter",
  "component": "datepicker.month",
  "reference": "date",
  "startAt": "startOf('month')",
  "endAt": "endOf('day')",
  "minDate": "subtract(3, 'year').startOf('month')",
  "maxDate": "endOf('day')",
  "disable_reference_date": false,
  "request": {
    "data": {
      "fields": {
        "date": ["max"]
      }
    }
  },
  "diamonds": null
}
```
