# Monthspicker

The Monthspicker allows you to select **a range of months** to filter the data in a chart.

> Please refer to [datepicker](/en/technical/sdk/app/dynamic_parameters/list/datepicker) for a full reference. The only difference is value of `component`.


## Configuration
```json
{
  "id": "monthspicker",
  "type": "filter",
  "component": "datepicker.months",
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
