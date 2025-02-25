# Daypicker

The Daypicker allows you to select a date to filter the data of a graph.

> Please refer to [datepicker](/en/technical/sdk/app/dynamic_parameters/list/datepicker) for a full reference.
The only difference is value of `component`.

## Configuration
```json
{
  "id": "daypicker",
  "type": "filter",
  "component": "datepicker.day",
  "reference": "range_date",
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

