# Feature engineering

ForePaaS enables you to fully specify which variables to select for your model.

---
## Add a value-to-predict

The value you want to predict (i.e. the label) is saved in the *Y dataset*. To add a value-to-predict, click on **Add a source** next to Y.

![machinelearning](picts/add-Y.png)

Choose the source based on the **input type** you specified when [generating your dataset](en/product/ml/pipelines/configure/dataset/input.md?id=choose-a-data-input) and save.

#### When the input type is *Tables*

You will be able to select one attribute from the training table.

![machinelearning](picts/add-Y-tables.png)


#### When the input type is *Pictures from buckets*

You will be able to select [one or several folders](/en/product/ml/pipelines/configure/dataset/input?id=pictures-from-buckets) from the training bucket.

![machinelearning](picts/add-Y-buckets.png)

---
## Add features

The features, or variables, that are used to make a prediction are saved in the *X dataset*. To add features to your structured data model, click on **Add a source** next to X.

![machinelearning](picts/add-X.png)

Choose as many variables as you want from the source based on the input type you specified when [generating your dataset](en/product/ml/pipelines/configure/dataset/input.md?id=choose-a-data-input) and save.

> Shortcut tip: you have the option to *add all variables* in one go: this will add all the variables from the source **except** the one you chose as the value-to-predict.


---
## Pre-processing

Advanced feature engineering should be carried out in the [Data Processing Engine (DPE)](en/product/dpe/index) on your source itself.


---
##  Need help? 🆘

> You didn't find what you were looking for on this page? You can ask for help by sending a request directly from the platform, going to the *Support* page. You can also send us an email at support@forepaas.com.

{Send your questions to support 🤔}(https://support.forepaas.com/hc/en-us/requests)