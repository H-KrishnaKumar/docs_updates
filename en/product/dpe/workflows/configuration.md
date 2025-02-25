# Configure a workflow

When **creating workflows**, you can organize [actions](/en/product/dpe/actions/index) into stages to customize the processing of your data, as stages are run sequentially and actions in parallel. 

Each time a workflow is launched, you can **monitor the execution of a workflow** by reviewing the logs.

- [Create a workflow](/en/product/dpe/workflows/configuration?id=create-a-workflow)
  - [Stages](/en/product/dpe/workflows/configuration?id=stages)
  - [Preferences](/en/product/dpe/workflows/configuration?id=preferences)
- [Monitor a workflow](/en/product/dpe/workflows/configuration?id=monitor-a-workflow)
  - [Logs](#logs)
  - [Alerts](#alerts)

---

## Create a workflow 

The creation of the workflow has 2 main steps:

- **Stages**: Configure the workflow's successive stages, actions in the respective stages can be either added upon the creation of the workflow or later on.
- **Preferences**: Users can define various parameters and information about the workflow

![etl-workflow-interface](picts/new-workflow.png)


### Stages

Within a workflow, actions are organized in **sequential** stages. Within stages, actions are run in **parallel** (meaning they can run [in parallel on multiple instances](/en/product/dpe/jobs/resources?id=scale-your-jobs-horizontally))

![etl-gestion-organisation](picts/organisation-traitements.png)

If a workflow contains actions with multiple language versions, it will be executed with the **latest language version** it contains. You can override this behavior from the [workflow's preferences](/en/product/dpe/workflows/configuration?id=preferences)

!> At the moment, a single workflow **cannot** contain both [PySpark actions](/en/product/dpe/actions/custom-pyspark/index) and normal actions.


### Preferences

The preferences tab allows the user to give the workflow a name, a description and tags; and to define several [execution parameters](/en/product/dpe/actions/settings/index).

![etl-workflow-interface](picts/workflow-preferences.png)

?> **What does the "Auto Flushall" do?** The platform stores the output of the queries in cash (in other words they are "pre-computed") for better performance when using an application. By running the "Flush all" the queries are re-run and the data in the app refreshed. It is therefore activated by default & usually adds an additional 5-10s of processing time to your workflow. For complex successive data processing workflows, you might want to deactivate it and run it only once at the end as a separate workflow.

Finally, note that the **advanced** tab is available to further customize your workflow using the JSON config files. 

{Learn how to tweak a workflow in the Advanced mode}(#/en/product/dpe/workflows/advanced-mode)


---
## Monitor a workflow

### Logs

To monitor a workflow's progress, it is possible to open its logs by clicking on the **Console icon**. This will open the [Control Center Logs Explorer](/en/product/cc/logs/index) in a new window, where you will be able to 


Note that in the [preferences](#preferences) of a workflow, you can define a level of information available in the logs (debug, info, notice, warning, error, critical).

![etl-log](picts/etl-log.png)

### Alerts

Just like for actions, you can monitor the execution of a workflow by setting alerts on some key execution metrics (like job success, runtime, memory used, etc.). This will create an [alert](/en/product/cc/alerting/index) in the [Control Center](/en/product/cc/index).

![etl-log](picts/etl-alert.png)


---
###  Need help? 🆘

> At any step, you can ask for support by reaching out to us on the Data Platform Channel within the [Discord Server](https://discord.com/channels/850031577277792286/1163465539981672559). you can also find a step by step guide towards joining our discord server in the [support](/en/support/index.md) section.
