# App Development FAQ
Here are some **Frequently Asked Questions** about application development.
If you do not find an answer to your question, please reach out to our [Support team](/jp/technical/sdk/app/faq?id=cannot-find-an-answer-to-your-question-🆘)!

* [Formatting values](/jp/technical/sdk/app/faq?id=formatting-values)
* [I18N](/jp/technical/sdk/app/faq?id=i18n)
* [Queries](/jp/technical/sdk/app/faq?id=queries)

---
## Formatting values

### How to format a value using an existing formatter ?
```jsx
// Leverage "turnover" as declared in ./config/formatter.json to format a given value
import { FpMeasure } from 'forepaas/formatter'
function formatValue(field, value) {
    let measure = new FpMeasure(field);
    return measure.setValue(value).toString();
}
console.log(formatValue("turnover", 100));
```


---
## I18N

### How to use registered translations ?
```jsx
import FpTranslate from 'forepaas/translate'
console.log(FpTranslate("key_to_be_translated"})
```

---
## Queries

### How to make a query and get its results outside a Chart ?
```jsx
import FpQueryBuilder from 'forepaas/query-builder'
   const query = {
      data: {
          fields: {
              date: ["min","max"]
          }
      }
    }
    let request = new FpQueryBuilder.FpQuery(query)
    request.compute().then((response) => {
      // display array of results from the query
      console.log(response.results)
      // displays the first item in results
      console.log(response.results[0])
      // get 'data' from 1st item and displays values
      let item= response.results[0].data
      console.log(item.date.min[0].value, item.date.max[0].value)
    })
```

---
## Cannot find an answer to your question? 🆘

You can access our support portal directly from the platform by clicking on the top-right menu bar on the question mark ❓icon and then choosing *Support*. You can also send us an email on support@forepaas.com.

{Send your questions to support 🙋‍♂️ 🙋‍♀️}(https://support.forepaas.com/hc/en-us/requests)
