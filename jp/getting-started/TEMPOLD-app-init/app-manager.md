# Build and deploy a front-end application

In this tutorial you'll **learn how to build, deploy and customize your first application**. To make it easier for everyone, you won't start from scratch. We've prepared a template to accelerate the process, thanks to pre-built graphs.

> Additionally, we've made the source code of the **final built app** available to further speed things up if needed.
You can find in our Github repository in the [release/basic](https://github.com/forepaas/getting-started/tree/release/basic) branch.

Initiate your application by clicking on the **+** sign of the App Manager.  

Choose **From Store** to access the templates that are on the ForePaaS store.

![App Manager](picts/createapp.png)

Select the template *ReactJS - Getting Started* from the store.

![App Manager](picts/fromstore.png)

Then fill in the different fields as shown in the screenshot below and press **Confirm**.

![App Manager](picts/createapp1.png)


Click on **Confirm**, your app will automatically build and deploy. The process should take a couple of minutes ☕, in the meantime feel free to read through the pre-requisites below.

---

## Objectives

The main goal of every project on ForePaaS is to correlate data derived from queries and display them within insightful and interactive dashboards. Those dashboards must be understandable at a glance and insights must be easy to capture for final users. That is one of the hardest tasks: create your application and dashboards so that people instantly grasp takeaways from data and can make informed business decisions.

In this first simple project, you want to **understand the impact of holidays, temperature, weekday on traffic**, most visited stations and see the traffic evolution over time.

---

## Pre-requisites

As always, every previous step needs to have been completed.

- The API is up and running
- Workflows are set up and have been executed by our workers.
- The Data Manager shows a proper logical schema. Virtual attributes are created, tables linked, every attribute of the Dataset related to their DPE actions and built properly with the good types and nature
- Queries in the Query Builder are properly requesting our data warehouse.

Inside ForePaaS, applications are structured using the following:

- **Dashboards**: They are the pages of an app.
- **Menu**: They are used to access or parametrize the different pages of your app.
- **Dynamic parameters**: They are widgets to filter your data on your pages. They can be embedded in menus. 


You will go through the following steps to build and deploy these different elements:

- [Set up your canvas](/jp/getting-started/app-init/app-manager?id=set-up-your-canvas)
  - [Create a page](/jp/getting-started/app-init/app-manager?id=create-a-dashboard)
  - [Set up a header](/jp/getting-started/app-init/app-manager?id=set-up-a-header)
  - [Set up dynamic parameters](/jp/getting-started/app-init/app-manager?id=set-up-your-dynamic-parameters)
- [Set up charts](/jp/getting-started/app-init/app-manager?id=set-up-charts)
  - [Create your first area chart](/jp/getting-started/app-init/app-manager?id=create-your-first-area-chart)
  - [Set up other chart types](/jp/getting-started/app-init/app-manager?id=set-up-other-chart-types)
  - [Customize further](/jp/getting-started/app-init/app-manager?id=customizing-further)
    - [Colors and units](/jp/getting-started/app-init/app-manager?id=colors-and-units)
    - [Labels](/jp/getting-started/app-init/app-manager?id=changing-the-labels-of-a-chart)
- [Rebuild and deploy a new version of your app](/jp/getting-started/app-init/app-manager?id=rebuild-and-deploy-the-new-version-of-your-app)

Ready to create your first dashboard? Let's go! 🏄🏻

---

## Set up your canvas

### Create a dashboard

Click on the **Dashboard** menu, and on **Create my first Dashboard**.
Name it *Rides Analytics*. You've just created the first page of your app!

![App Manager](picts/createdashboard.png)

### Set up a header

Then head to the **Menus** menu. It is the page where you can define items such as links and filters for your whole app. It has already been pre-populated with several pages and items due to the template you used to initiate the app.   

You should land on the header page. This means every item you add here will be embedded in the header of your app (i.e the upper part). You can switch to the sidebar page (to embed items in the left sidebar of your app) at the top right-hand corner.  

![App Manager](picts/header-v-sidebar.png)

Switch back to the header page. Expand **tabs** to see the container's items. Click on *Add an item* to add a tab in your final menu. Select **link** and fill in the fields as shown below. You can also define a logo icon for your app header!

![App Manager](picts/create-menu.png)

![App Manager](picts/createmenu2.png)

### Set up your dynamic parameters

Dynamic parameters are **filters to help you present your data according to various criteria**.
Here, you will add three new dynamic parameters to filter on the date, holiday, and metro station.

Still in the **Menus** menu, click on **Sidebar** on the top right-hand corner.

![App Manager](picts/create-sidebar.gif)

To create your first parameter, create a container and drag it on top of the footer. If you are unfamiliar with [containers](jp/product/app-manager/menu?id=introduction), think of them as folders for items.

Open the container then add an item. Select **parameters**, and pick the _Datepicker range_ one.

![App Manager](picts/createparameters.png)

Then, fill in the options as shown in the screenshot below.

![App Manager](picts/parameters-options.png)

In the **Infos** tab, give it the following name: *select_date*, and Confirm.

Now, let's follow the same procedure for the 2nd parameter. In the same container, create a **Select Box** type of parameters. Fill in the options as below (placeholder being the text prompt that is displayed in the filter), and in **Infos** name it *select_holidays*.

![App Manager](picts/parameters-options2.png)

Finally, follow the same steps with another **Select Box** to create the last parameter. Fill in the options as below, and in **Infos** name it *select_stations*

![App Manager](picts/parameters-options3.png)

Note that every dynamic parameter like the date picker and select boxes can be customized. To learn how to do that, head to the technical documentation for application components!

{Learn more about Dynamic Parameters}(jp/technical/sdk/app/dynamic_parameters/index)

**Your canvas configuration is now done. ✅** With menus and filters, it will serve as the basis for the next step: creating your first graphs.

---
## Set up charts

Go to the **Dashboard** tab and click on the **Edit** icon on your Ride Analytics dashboard.
You can see that the menu and the filters we've just created are well set up here!

![App Manager](picts/empty-app-new.png)

### Create your first area chart

#### 1. Create a panel

Click on the ➕ icon to create a panel (**Containers > Panel**). Once it's created, you can resize it so it takes half the width of the page, and approximately 2/3 of the height.

![App Manager](picts/create-panel-new.png)

#### 2. Give a title to your chart

Click on the ➕icon inside your panel, and select **Basic UI > HTML**.
Name it *Rides history* and apply the H1 style by clicking on the H button.

![App Manager](picts/create-html-new.png)


#### 3. Create your chart

Inside your panel, click on the ➕icon and select **Chart**. Pick the *Recharts - Line* type.

![App Manager](picts/recharts-area-new.png)

Click on **Request**, and select **Query selector** to pick the *rides_per_month* query you've created in the Query Builder.

![App Manager](picts/area-chart-query.png)

To complete the setup, you have to connect this chart with the filters we've already created. Go to the **Infos** tab, in the **Linked dynamic parameters** section and select the 3 available.

![App Manager](picts/area-chart-parameters.png)

You can now test if your filters are properly working. Enter the read-only mode by clicking on the Play icon, and modify dates or holiday type to see how your data is changing. Your first chart is done!

![App Manager](picts/chart-readonly-new.png)

> **Quick tip** 🙋🏼 As you're new to the product, it might happen that you misclick or misplace components in the dashboard building interface. **A common issue is when components are placed on top of each others** giving the impression that some are missing. If this happens to you, move the visible components to make sure none are hiding underneath.

!> Don't forget to **Save** your dashboard regularly to make sure your edits are consistently saved (💾 icon in the top middle bar).

### Set up other chart types

You will create 3 more charts to make your dashboard more insightful.

- One **pie chart** displaying the distribution of rides over weekday
- One **horizontal bar** to show the top 7 stations in terms of traffic
- One **column chart** to illustrate the variations of rides depending on the temperature

The process is exactly the same as what you've just done above for your area chart. However, instead of choosing a query that has already been created via the Query Selector, **we will create new queries "on the fly"** which ForePaaS also lets you do.  
When you create a new chart, in the Request tab, select the open _Request_ and set-up the charts according to the table below:

|              Title              | Type of chart  | Query setup                                                                     |
| :-----------------------------: | -------------- | ------------------------------------------------------------------------------- |
|     **Weekly seasonality**      | Donut          | *avg_rides_per_day_per_station* as data (select) and *week_day* as scale        |
|       **Stations top 7**        | Horizontal bar | *rides* as data (Sum and Descending) and *station_id* as scale.                 |
| **Rides history / temperature** | Bar chart      | *avg_rides_per_day_per_station* as data (Select) and *cat_temperature* as scale |

One last step! Queries can be further customized using the advanced mode. Specifically, for the chart "Stations top 7", you will need to add a custom parameter to **limit the number** of stations to 7. To do that, head to the advanced mode of your query as shown below and simply add `"limit":7,` below line 2 in the "data" JSON object:
![App Manager](picts/query-advanced.png)

So far, your dashboard should look something like this:

![App Manager](picts/chart-intermediate-new.png)

### Customizing further
#### Colors and units

At this point, you are pretty much done with your first dashboard! But you might want to improve its looks. 🧑🏼‍🎨 

Let's go a step further in the customization of the graphs. For instance, we can:

- Change the colors of the column chart to make it more visual. To do that, click on the **Edit** icon and in the _Options_ tab, **Chart** section, Add a new item and pick the color of your choice.
- Let's **round the figures** of the bar chart of rides history. To do that, follow these 3 steps:
  1.  Go to the _Formatter_ tab and **start by clicking "Add a measure"**.
  2.  Give the measure the **name of the attribute that you are trying to format**. In our case, simply name it "rides" (to save the new name, don't forget to click on the ✏️ icon).
  3.  Then, assign the desired formatting parameters to the measure. Here, enter *Mpax* for unit, *0* for round (to display integers), and *0.000001* for multiplicator (to display millions).

> When editing an existing measure (i.e. the Unit, Round or Multiplicator parameters) don't worry about saving, the Formatter works in auto-save mode.

![App Manager](picts/formatter-round.png)


#### Changing the labels of a chart

As you might have noticed:

- In the "Weekly seasonality" pie chart, days appear as numbers instead of actual names (1 for Sunday, 2 for Monday, etc.)
- In the "Top 7 Stations", stations appear with their id instead of names.

Let's turn these numerical values into actual names. To assign labels to specific values, you will need to modify what is called a **dictionary** for:

- The *week_day* attribute in the *dataset_history* object;
- The *station_id* attribute in the *chicago_stations_gps* object.

Head back to your Data Manager component in the Organize tab and select the *chicago_ref_day*, table that you had previously set-up. This table contains the "reference" labels for the different days of the week (0 for Monday, 1 for Tuesday, etc.). Click on the edit icon while the table is selected.

![Data Manager](picts/chicago_ref_jour.png)

To specify that this table represents the dictionary for *week_day*, click on the dropdown for the "Object's label" and select the attribute *week_day_label*. This will tell the platform that each individual row of the table identified by the primary key, in this case the *week_day*, will be represented in the dashboard by the label you just defined, i.e. the attribute *week_day_label*.  
Your table editor window should look like the screenshot below:

![Data Manager](picts/change-label.png)

In the *chicago_stations_gps* table, let's repeat the same operation by selecting the *station_name* attribute as the "Object’s label” field, then confirm and close the window.

To see these changes reflected in your final dashboard we will need to "propagate" it in the value chain that we have just set-up, in particular update the cache of the different components. **Before moving on with the tutorial make sure to**:

- Click on the ⚙️ “Build” in order to update and build the changes of your Prim schema.
- In the Query Builder, click on “Flush cache” in the Overview screen, right next to “Query Builder activity”
- In your API overview screen, click on “Refresh cache”

Head to the Query Builder and make sure that the dictionary has been created properly by going to Dataset and selecting the Dictionaries tab. Look for the *week_day* dictionary:

![App Manager](picts/dictionary-qb.png)

Going back to your dashboard in the App Manager, the final step is to make sure that we will look for the *week_day* values in the right dictionary for this query. This requires diving into the advanced mode but don't worry, we got you covered!  

Edit the donut chart. Open the **Request** tab and inside there click **Advanced**. Add the following piece of code just after line 13: 

```
"dictionaries": [
    "week_day"
  ],
```

![App Manager](picts/advanced_query.png)

!> Once again at each step when you are working on your dashboard, make sure to save your changes using the 💾 icon on the top of your dashboard editor.

Repeat these actions to improve the labels for the stations' names.  
Edit the Stations Top 7 bar chart. Open the **Request** tab and inside there click **Advanced**. Add the following piece of code just after line 13: 

```
"dictionaries": [
    "station_id"
  ],
```
![App Manager](picts/advanced_query2.png)

Notice how your “select_stations” dynamic parameter at the top right has already been automatically translated too!

Your final app should now look like this:

![App Manager](picts/dashboard-final-new.png)

---
## Rebuild and deploy the new version of your app

You're almost finished! Just one last step! Let's publish the recent changes to the dashboard in production. To do this, don't forget to save 💾 and then go back to the **Overview** tab of the Application Manager. You should first **Stop** the currently deployed application. As soon as it has shut down, click on **Build**, and then **Deploy**.

> The **build** process usually takes a couple of minutes. If you're curious of what is going on or if the build fails: open the log console by expanding the version panel and inspect the logs. Feel free to send logs to our support team 💁💁‍♂️if you're not sure how to troubleshoot it yourself!

Your app is **live** and can now be accessed online!  
The link can be obtained in the Overview tab by clicking on **Open**.

![App Manager](picts/open-app.png)

![App Manager](picts/dashboard-final-new.png)

You can now kick back, relax and have a look at your figures. ☕

---

<p><span style="color:red; font-size:20px;"><b> Congrats! 🎉🎊</b></span></p>

**You've completed the ForePaaS Getting Started tutorial!** You're now ready to go live on the platform, explore by yourself and build your own projects from scratch.

> Please take 3 min ⌛to fill in [this short survey](https://forms.office.com/Pages/ResponsePage.aspx?id=nDWzgpGTfE2g8oFnUal2QQ9d-P8xWc5AgNsykYKKK71UOVpZT1RUMFBRUk5BWjNLSzBCNVhDSVgyNSQlQCN0PWcu). It will help us understand 🧐 what worked well and what didn't in your experience, in order to make this tutorial even better.

![congrats](picts/congrats.gif)

Obviously, you can come back to this tutorial at any time! We encourage you to check out the rest of the documentation to dive deeper into a specific component of the product when needed.

Also, don't hesitate to **get in touch** if you need anything, our support & product team is dedicated to helping you deliver faster any AI applications your have in mind.

{Give your opinion on the roadmap 🚀}(https://hq.forepaas.io/#/features)
{Send your questions to support 🤔}(https://support.forepaas.com/hc/en-us/requests)

---

Did you like this first tutorial? Want more? Don't worry we got you covered, you can continue to develop your first application adding predictions to your dashboard with our ML pipelines!

{Embed machine learning models in your app 🤖}(#/jp/getting-started/ml/index)
