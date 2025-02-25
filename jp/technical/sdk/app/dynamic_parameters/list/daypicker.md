# Daypicker

Daypickerでは、グラフのデータのフィルタリングを行う特定の日付を選択できます。

> 詳細については、[datepicker](/jp/technical/sdk/app/dynamic_parameters/list/datepicker)を参照してください。
違いは`component`の値のみです。

## 構成
```json
{
  "id": "daypicker",
  "type": "filter",
  "component": "datepicker.day",
  "reference": "date",
  "startAt": "startOf('day')",
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

