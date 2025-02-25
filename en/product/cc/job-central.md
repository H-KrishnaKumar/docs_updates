# Jobs Central

The Jobs Central is the watchtower from where all job executions on the platform - past, present, queued and scheduled - can be monitored. 

On the platform, a 'job' (or 'job execution') is the unitary execution of code, which can be either launch manually from UI or API, or scheduled based on triggers. Many elements on the platform, such as [Data Processing Engine workflows](/en/product/dpe/workflows/index) and [ML pipelines](/en/product/ml/pipelines/index) are executed in the form of jobs. The [computing power allocated to this job](/en/product/billing/resources/index) is usually set by the user. Some other processes on the platform, like the physical build of your data model, are also jobs fully managed by the platform

![jobs](picts/cc-job-central.png)

If the page is opened at the organization level, all jobs across all Projects will be visible.

- [Monitor job executions](/en/product/cc/job-central.md?id=monitor-job-executions)
- [Monitor scheduled job triggers](/en/product/cc/job-central.md?id=Monitor-scheduled-job-triggers)

---
## Monitor job executions

The *Job executions* page lists the executions of the following types of jobs:

- [Data Processing Engine actions](/en/product/dpe/actions/index) job executions
- [Data Processing Engine workflows](/en/product/dpe/workflows/index) job executions
- [Machine Learning dataset generation](/en/product/ml/pipelines/execute/index?id=dataset-generation-jobs) jobs
- [Machine Learning training](/en/product/ml/pipelines/execute/index?id=training-jobs) jobs
- [Machine Learning testing](/en/product/ml/pipelines/execute/index?id=testing-jobs) jobs
- [Data Catalog metadata extract](/en/product/data-catalog/analyzer/extract-metadata) jobs
- [Lakehouse Manager physical build](/en/product/lakehouse-manager/tables/table_interactions) jobs

If needed, this page can be filtered on only the executions that have triggered by a CRON schedule.


---
## Monitor scheduled job triggers

The *Scheduled triggers* page lists all the CRON-triggers that have been set on the following elements:

- [Data Processing Engine actions and workflows](/en/product/dpe/actions/settings/index?id=triggers) 
- [Machine Learning pipelines](/en/product/ml/pipelines/execute/triggers)

It allows you to have an overview of the recurrent computing activity on your Projects.

![jobs](picts/cc-job-central-triggers.png)

---
###  Need help? 🆘

> At any step, you can ask for support by reaching out to us on the Data Platform Channel within the [Discord Server](https://discord.com/channels/850031577277792286/1163465539981672559). you can also find a step by step guide towards joining our discord server in the [support](/en/support/index.md) section.