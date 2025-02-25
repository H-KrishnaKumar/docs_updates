# Monthspicker

Monthspickerでは、グラフのデータのフィルタリングを行う**月の範囲**を選択できます。

> 詳細については、[datepicker](/jp/technical/sdk/app/dynamic_parameters/list/datepicker)を参照してください。違いは`component`の値のみです。


## 構成
```json
{
  "id": "monthspicker",
  "type": "filter",
  "component": "datepicker.months",
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
  "diamonds": null,
  "ranges": [{
    "label": "Past month",
    "start": "subtract(1, 'month').startOf('month')",
    "end": "subtract(1, 'month').endOf('month')"
  }, {
    "label": "Current month",
    "start": "startOf('month')",
    "end": "endOf('day')"
  }]
}
```
