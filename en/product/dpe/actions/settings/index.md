# Preferences in the Data Processing Engine

Each [action](/en/product/dpe/actions/index) or [workflow](/en/product/dpe/workflows/index) in the Data Processing Engine has several configuration settings which can be managed via the **Preferences** tab.

![action-settings](picts/dpe-preferences.png)

When an *action* is executed, it will use those preferences to run.   

When a *workflow* is executed, its preferences will **override** the preferences of all the actions it contains. If a certain preference option is deactivated at workflow level (such as segmentation or perimeter) it will fall back to each action's preferences during the workflow's execution.

Those preferences can be templated to be re-used in one click every time by saving them in an [environment](/en/product/dpe/environments/index.md).


* [Environments](/en/product/dpe/actions/settings/index.md?id=environments)
* [Timeout options](/en/product/dpe/actions/settings/index.md?id=timeout-options)
* [Execution options](/en/product/dpe/actions/settings/index.md?id=execution-options)
  * [Service account](/en/product/dpe/actions/settings/index?id=service-account)
  * [Perimeter](/en/product/dpe/actions/settings/index?id=perimeter)
  * [Logs level](/en/product/dpe/actions/settings/index?id=logs-level)
  * [Automatically flush all caches](/en/product/dpe/actions/settings/index?id=automatically-flush-all-caches)
* [Environment variables](/en/product/dpe/actions/settings/index.md?id=environment-variables)
* [Triggers](/en/product/dpe/actions/settings/index?id=triggers)
  * [API Endpoint trigger](/en/product/dpe/actions/settings/index?id=api-endpoint-trigger)
  * [Time-based trigger](/en/product/dpe/actions/settings/index?id=time-based-trigger)
* [Resources](/en/product/dpe/actions/settings/index?id=resources)
  * [Execution modes](/en/product/dpe/actions/settings/index?id=execution-modes)
  * [Resource scaling](/en/product/dpe/actions/settings/index?id=resource-scaling)
* [Parallelization options](/en/product/dpe/actions/settings/index.md?id=parallelization-options)
  * [Segmentation](/en/product/dpe/actions/settings/index?id=segmentation)
  * [Concurrent executions](/en/product/dpe/actions/settings/index.md?id=concurrent-executions)
* [Development language](/en/product/dpe/actions/settings/index.md?id=development-language)

---
## Environments 

Environments on the Platform are a set of pre-defined preferences that you can quickly assign to your actions or workflows, so you don't need to configure it every time.

{Learn more about environments}(#/en/product/dpe/environments/index.md)


---
## Timeout options 

> Timeout options are not templated in an [environment](/en/product/dpe/environments/index.md), and are to be configured in the preferences in each action/workflow

### Timeout

Timeout is an execution runtime duration after which your job will be treated as failure. Timeout duration includes the resource provisioning time, the build time, and the actual code execution duration.

The maximum timeout duration that you can set is 24 hours, except for the following types of jobs where you can set it at *null*, meaning infinite (no timeout will be enforced):
- A [Load](/en/product/dpe/actions/load/index) action having a streaming-type [connector](/en/product/data-catalog/sources/index) as a source
- A [Custom](/en/product/dpe/actions/custom/index) action


If a job execution times out, it will be flagged in the [jobs](/en/product/dpe/jobs/index) list as failed due to timeout in order to differentiate from other sources of failures.


### Stop workflow on failure
If the action is executed as part of a [workflow](/en/product/dpe/workflows/index), and fails throwing a *CRITICAL* error (which will be displayed in the logs), activating this option will interrupt the workflow's execution and the next stages or actions will not be run.

---
## Execution options 

### Service account

Each action, workflow or environment has a [service account](/en/product/iam/users/service-accounts) associated to it, which **the action/workflow impersonates as it is executed**. This service account acts as the identity of the running job, and controls the access level of the job through the [service account's roles](/en/product/iam/users/roles).

?> Even if you launch a job manually, its execution will be authenticated by the associated service account. 


### Perimeter

> This parameter is not available for [Custom PySpark actions](/en/product/dpe/actions/custom-pyspark/index).

When executing a data processing job, when you reach large volumes of data to process, you may need to filter the execution of an action. The *perimeter* parameter allows you to **define a field on which to filter the data processing scope**.

There are several perimeter modes available depending on the data source and the type of action you are performing.

The scope serves in particular to:
* Apply a processing filter on a column;
* Make the execution of actions faster;
* Relieve the requested workload of certain data sources;
* In a workflow that is scheduled daily, do not process the data from the entire history, but only from the last X days.

{How to configure the perimeter}(#/en/product/dpe/actions/settings/perimeter.md)

### Logs level

The logs level defines the list of logs that will be stored during the action's or workflow's execution. The different levels range from *debug* to *critical*. All the logs above the one selected (included) will be stored.


### Automatically flush all caches

When this parameter is activated, the components' caches will automatically be flushed after each execution of the action/workflow. 

Learn more about caches in [this article](en/product/dpe/actions/flush-update-metas/index?=auto-flush-all-options).


---
## Environment variables
?> This is only available for [Custom](/en/product/dpe/actions/custom/index.md) actions, workflows, and environments.

Environment variables are key-value pairs that you can template and inject into your custom actions, to avoid hardcoding the values in your custom script. They are saved in the ```PARAMS``` dictionary object of the ```forepaas.core.settings``` package (available in the SDK).

A code-snippet for a typical use case is available at [this page](/en/technical/sdk/dpe/3A.parameter).

!> Environment variables do not go through a KMS lifecycle and as such should not be used to store and inject secrets and credentials.


---
##  Triggers

> Triggers are not templated in an [environment](/en/product/dpe/environments/index.md), and are to be configured in the preferences in each action/workflow.

With triggers, you can set your jobs to run automatically. Typical usages include launching the job by accessing an API endpoint, or by scheduling time-based triggers (e.g. to run your jobs every day at midnight). 

![triggers](picts/triggers.png)

### API endpoint trigger
This endpoint lets you trigger the job via API.

It is always available to you through the trigger named *Launch API Endpoint*. Click on it to see the endpoint details.

![endpoints](picts/endpoints.png)

In order to trigger your job, you will have to authenticate first with the *Authentication* endpoint and then trigger the job with the *Launch Job* endpoint.

1. You have to input your [API and Secret keys](en/product/iam/users/api-secret-key) in trigger details and then copy the *Authentication* endpoint text. Once you login, you will get a token.
2. Input this token in the *Launch job* endpoint and then access it to launch your job.

### Time-based trigger

Use the *CRON* triggers to schedule executions of your action or workflow every pre-defined time period.

You can either use the *Complete mode* to set the configuration visually or use the *Advanced mode* for custom CRON expressions. The Advanced mode configuration follows the CRON syntax (described in detail [here](https://www.netiq.com/documentation/cloud-manager-2-5/ncm-reference/data/bexyssf.html)).


---
## Resources 

### Execution modes

There are two execution modes available in the Preferences page:
- **Serverless**: computing resources deployed on the fly.
- **Always-up**: dedicated instances always running to swiftly execute your jobs whenever you want.

![exec_modes](picts/exec_modes)

#### **Serverless**

By default, every job you run on the Platform is executed with the Serverless mode. An execution environment is deployed when you start the job execution and it is undeployed when this execution is done. 

You will be [billed](/en/product/billing/resources/index.md) for:
- The computing resources used to perform the task.

?> In the Serverless mode, your execution environment is up only during the task execution because, once the task is done, it is automatically killed. 

#### **Always-up**

> This feature is currently in Alpha release, instabilities may occur.

When you activate the Always-up mode, a dedicated computing environment is deployed for the respective action/workflow/environment. It will stay deployed until you set the Execution mode back to Serverless so you won't need to wait for its deployment every time you run the respective job.

You will be [billed](/en/product/billing/resources/index.md) for:
- The computing resources used in the time during which the execution environment was up (this includes the time taken to perform the jobs).

!> With the Always-up mode, your execution environment will NOT be automatically undeployed once job execution is done. You have to set the Execution Mode back to Serverless to kill it.

If you edit the configuration of an action/workflow set in Always-up mode, it will be **updated in a full blue-green way**: the deployment will wait until all current pending tasks are complete before gracefully shutting down for the update. 

?> It is recommended to use the Always-up execution mode on [environments](/en/product/dpe/environments/index) rather than individual actions/workflows, in order to re-use the resources for multiple workloads.


### Resource scaling

You can find out all about how to scale your computing power in the dedicated article below.

{Learn how to scale your jobs resources}(#/en/product/dpe/jobs/resources.md)

---
## Parallelization options

### Segmentation

> This parameter is not available for [Custom PySpark actions](/en/product/dpe/actions/custom-pyspark/index).
 
The **segmentation options allow you to define how a job will be broken down in multiple tasks** based on specific criteria. Once split, the workload of the job can then be [distributed across multiple workers](/en/product/dpe/jobs/resources?id=scale-your-jobs-horizontally) in parallel (parallel computing).

 ![Segmentation-description](picts/01-actiontask.png ':size=175%')

Among most common usage, segmentation allows you to:
* **Apply a specific treatment filter** to a column;
* **Accelerate action run time** by parallelizing the processing on multiple workers in parallel and relieving the workload on data source connectors;
* In a workflow planned daily for instance, **not to ingest all of the historical data** each time you run the load action but filter on only the last day(s).

{How to configure segmentation}(#/en/product/dpe/actions/settings/segmentation.md)


### Concurrent executions

This option allows the action/workflow to be executed multiple times at the same time (instead of returning an error if an execution is triggered while one is already happening). 

In [Serverless mode](/en/product/dpe/actions/settings/index?id=serverless), **each** concurrent execution will use the allocated computing power for the job.  
In [Always-up mode](/en/product/dpe/actions/settings/index?id=always-up), multiple concurrent executions are [distributed across the available workers](/en/product/dpe/jobs/resources?id=scale-your-jobs-horizontally) in parallel (parallel computing).

Multiple concurrent executions can only be triggered [via API](/en/product/dpe/actions/settings/index?id=api-endpoint-trigger), not by GUI.


---
## Development language

> This is only available in workflows (and [Custom actions](/en/product/dpe/actions/custom/index)' configuration page).

This option lets you specify which language version to use for the overall workflow. By default, a workflow will use the latest of all the versions it contains. 


---
## Need help? 🆘

> At any step, you can create a ticket to raise an incident or if you need support at the [OVHcloud Help Centre](https://help.ovhcloud.com/csm/fr-home?id=csm_index). Additionally, you can ask for support by reaching out to us on the Data Platform Channel within the [Discord Server](https://discord.com/channels/850031577277792286/1163465539981672559). There is a step-by-step guide in the [support](#en/support/index.md) section.