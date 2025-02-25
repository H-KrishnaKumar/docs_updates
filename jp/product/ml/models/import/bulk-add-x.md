# Code boilerplates to specify multiple variables in a model

Supported file formats:
* [.txt](jp/product/ml/models/import/bulk-add-x.md?id=txt-file)
* [.json](jp/product/ml/models/import/bulk-add-x.md?id=json-file)

---
## .txt file

```txt
variable_name_1
variable_name_2
variable_name_3
```

> You can obtain such a *.txt* file from your pandas DataFrame by running the NumPy command:  
**np.savetxt("file_name.txt", `your_X_dataframe.columns.values`, fmt="%s")** 

---
## .json file


```json
{
    "columns": [
        "variable_name_1",
        "variable_name_2",
        "variable_name_3"
    ]
}
```

---
##  Need help? 🆘

> You didn't find what you were looking for on this page? Reach out to our [product team](https://hq.forepaas.io/#/features) if there is an integration you'd like to see implemented.  
You can also ask for help by sending a request directly from the platform, going to the *Support* page. You can also send us an email at support@forepaas.com.

