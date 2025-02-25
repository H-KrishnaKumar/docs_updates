# Monthpicker

The monthpicker allows you to select a month to filter data from a chart

> Please refer to [datepicker](/en/technical/sdk/app/dynamic_parameters/list/datepicker) for a full reference.  The only difference is value of `component`.

## Configuration
```json
{
  "id": "monthpicker",
  "type": "filter",
  "component": "datepicker.month",
  "reference": "range_date",
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
