# Load Action

?> This article is about actions that use ForePaaS' proprietary Python data processing engine. To use Apache Spark clusters, see [Load PySpark action](/en/product/dpe/actions/load-pyspark/index).

The *Load* action **extracts raw data from sources and inserts it into primary tables** in your data warehouse. It is usually the first step in any data processing system, necessary before running any other processes on data coming from connected sources.

> In other terms, if you've [set-up a connector through the Data Manager](/en/product/data-manager/sources/index), the Project has the information to connect to the source as well as its metadata, but won't contain the actual data until it is actually loaded using the *Load* action.

* [Configure a Load action](/en/product/dpe/actions/load/index?id=configure-a-load-action)
  * [Choose a source and destination](/en/product/dpe/actions/load/index?id=choose-a-source-and-destination)
  * [Map the attributes](/en/product/dpe/actions/load/index?id=map-the-attributes)
  * [Configure the action's preferences](/en/product/dpe/actions/load/index?id=configure-the-action39s-preferences)
* [Use the Advanced mode](/en/product/dpe/actions/load/index?id=advanced-mode)

---
## Configure a Load action

To create a new *Load* action, navigate to the *Action* tab of the Data Processing Engine (DPE), click on **New Action** and select the *Load* action. 

### Choose a source and destination

To set-up the *Load* action, start by selecting a **source** from the list that you have already set-up in the [Sources](/en/product/data-manager/sources/index) tab of the Data Manager. 

![load-configure](picts/load-select-source.png)

Then a **destination** table to send your data to. Similarly to the sources, the tables have to be configured ahead of time in the [Tables](/en/product/data-manager/tables/index) tab of the Data Manager. Make sure you've [built](/en/product/data-manager/tables/table_interactions?id=build-table) your data model otherwise the tables won't be accessible by other components in the platform.

![load-configure](picts/load-select-destination.png)

### Map attributes

Once the source & destination have been selected, the system will **automatically map** the destination attributes of your destination table with the different columns that it has identified in the raw data source. 

![load-configure](picts/load-blueprint-rules.png)

> On the picture below, you can see that the *date* attribute has a a value of '1' beside the notepad icon. This indicates the number of **data validation rules, also called blueprint rules**, defined in the Data Manager, that will be automatically applied when loading the data. [Blueprint rules](/en/product/data-manager/analyzer/add-blueprint-rules) allow users to quickly filter out invalid data like nulls / empty cells or reformat values such as date or currencies.

![load-configure](picts/load-attribute-select.png)

Note that you might want to **insert raw text** directly inside your destination table. This might come in handy for instance when you want to count the number of data points or tag a certain source with a label that will be later used in an aggregate table. To do that, select *< txt >* which will set the source attribute to a raw text input field.

![load-configure](picts/load-attribute-txt.png)

### Configure the action's preferences

Once you're satisfied with the mapping of your attributes, navigate to the [preferences tab to configure the action settings](/en/product/dpe/actions/settings/index).

![load-configure](picts/load-settings.png)

When you are done editing your action, click on **Create** to validate the action. 

---
## Advanced Mode

If you need to access the JSON configuration file of the action, you can activate the Advanced mode by clicking on **Advanced** at the top of the page.

{Use the Advanced mode of a Load action}(#/en/product/dpe/actions/load/advanced-mode.md)


---
##  Need help? 🆘

> You didn't find what you were looking for on this page? You can ask for help by sending a request directly from the platform, going to the *Support* page. You can also send us an email at support@forepaas.com.

{Send your questions to support 🤔}(https://support.forepaas.com/hc/en-us/requests)
