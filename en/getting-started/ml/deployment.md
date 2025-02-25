# Set model deployment options

In the Deployment step, you can configure all output options for your pipeline. In other words, this is the step where you truly put your model into production in order to operationalize the flow of predictions.

First, open the Deployment page.

![machinelearning](picts/deployment-open.png)

In this last machine learning tutorial, you'll go through the following:

* [Manage consumers for your model](en/getting-started/ml/deployment.md?id=manage-consumers)
* [Make your first prediction](en/getting-started/ml/deployment.md?id=make-your-first-prediction)

---
## Manage consumers

The ForePaaS Platform gives you multiple options on how to use your model to make predictions: write in your Lakehouse Manager, make API calls, etc. For the moment let's keep it simple 😌 and fill a ForePaaS table.  

In the Consumers panel, click on **Add**.

![machinelearning](picts/deployment-add-consumer.png)

Name it *Internal consumer* and select *Table* as the input (*Table* is automatically chosen as the output too).

![machinelearning](picts/deployment-add-consumer2.png)

Select *ml_sample* as the table for both the input and the output, then click on **Create**.

![machinelearning](picts/deployment-add-consumer3.png)

---
## Make your first prediction

Finally the time has come! 

Let’s go over the business context from the beginning of this tutorial: You’ve built an AI system to predict whether subway stations will be overcrowded and on which day. In other words, your model will make a prediction for each station id and date combination.

The best way to represent this is with an output table. Each row of the output table will feature a station id and a date combination, and show the value of 1 if the station is overcrowded, and 0 if it's not. You will keep other information from your dataset in that table, such as holidays, weather conditions and station coordinates in case you want to do other analyses or correlations. You will also keep the true outcome value for each row, in order to compare it with your predictions and evaluate how well your predictive model is working.

Your ML model has been incorporated in your Data Processing Engine when you created the consumer, in the form of a new Predict Action. Exit the Machine Learning Manager and head to the Data Processing Engine, in the Actions tab. Select the **Machine Learning** repository: there is a new Predict Action there. 

![machinelearning](picts/deployment-predict.png)

Open the action. The lower panel is where you select the input and output for your model: edit the output on the right by clicking on *Select an attribute*.

![machinelearning](picts/deployment-predict2.png)

The *predictions* column in the table *ml_sample* is currently empty and ready to be filled with predictions. To do this, select the attribute *predictions*.

![machinelearning](picts/deployment-predict3.png)

You also need to specify which primary keys the action should use to write predictions. To do this, turn on **Direct Loading**.

![machinelearning](picts/deployment-predict4.png)

Direct loading is used to copy your input data straight into your output table where the predictions will be, without going through your model.  typically row indexes. This is where you can specify the primary keys to copy from the input table: select *date* in the left column.

![machinelearning](picts/deployment-predict5.png)

Select *date* in the right column.

![machinelearning](picts/deployment-predict6.png)

Repeat with *station_id*, which is the second primary key of *ml_sample*.

![machinelearning](picts/deployment-predict7.png)

You're all set! The Predict action will automatically write the prediction in the correct row identified by the *date* and *station_id* primary keys. 

Run your prediction by pressing the **Play** button.

![machinelearning](picts/deployment-run.png)

Wait a couple of minutes for the sample data to call your deployed ML instance and gather predictions. You'll know it's finished when the *Jobs* tab in your DPE is clear. 

Run a [query in the Analytics Manager](/en/product/am/queries/index) on the table *ml_sample* to check the values that have been predicted by your model!

---
<p><span style="color:red; font-size:20px;"><b> Congrats! 🎉🎊</b></span></p>

**You've completed the ForePaaS Getting Started Machine Learning 🤖 tutorial**. Impressive work! You have successfully trained and deployed to production a first machine learning model. You also ran some quick predictions.

> We know you might have faced some difficulties 🧐 during the tutorials. We're committed to improving the product and do better... but for that we need your feedback! Please take 3 min ⌛to fill in [this short survey](https://forms.office.com/Pages/ResponsePage.aspx?id=nDWzgpGTfE2g8oFnUal2QQ9d-P8xWc5AgNsykYKKK71UOVpZT1RUMFBRUk5BWjNLSzBCNVhDSVgyNSQlQCN0PWcu).

![congrats](picts/congrats.gif)

Obviously, you can come back to this tutorial at any time! We encourage you to check out the rest of the documentation to dive deeper into a specific component of the product when needed.


---

<p><span style="color:blue; font-size:20px;"><b> More! </b></span></p>

The ForePaaS Platform is a very powerful and complete tool. Do you want to know more about its advanced capabilities? 🥊 We have prepared multiple tutorials on the more advanced use-cases in our *Getting Further* guide series. Click below to check it out!

{Check out the ForePaaS Platform training guides 🤩}(#/en/getting-further/index)

Also, don't hesitate to **get in touch** if you need anything, our support & product team is dedicated to helping you deliver faster any AI applications you have in mind.

{Give your opinion on the roadmap 🚀}(https://hq.forepaas.io/#/features)