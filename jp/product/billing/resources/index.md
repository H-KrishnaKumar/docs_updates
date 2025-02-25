# Resources consumption on ForePaaS

ForePaaS charges you for the computational resources used by your [Dataplants](/jp/product/dataplant/index) and storage engines. At the moment, these resources are:

* **Computing power**: it represents the processing carried out in the data center hosting your Dataplant / storage engine. It is measured in *ForePaaS Units* (FPU).
* **Storage**: it represents the total data storage space used by your storage engines. It is measured in gigabytes (GB) of data, billed on per-month usage.


The ForePaaS Unit (FPU) is a unit of processing capability, billed on per-second usage. They are used by both **deployed instances** (APIs, apps, storage engines, etc.) and **jobs** (DPE Actions, Machine Learning training jobs, etc.).  
Intuitively, allocating more FPUs to an instance or a job will grant you access to more powerful machines, resulting in the task running faster. 

* [What are the different types of FPU?](/jp/product/billing/resources/index.md?id=fpu-sub-units)
* [How are FPUs billed?](/jp/product/billing/resources/index.md?id=fpu-consumption)

---
## FPU sub-units

Being the main currency for computing-type resources on the platform, the word encompasses several sub-unit types:

* [FPU-S](/jp/product/billing/resources/index.md?id=fpu-s)
* FPU-G: *GPU-optimized - coming soon!*
* FPU-M: *memory-optimized - coming soon!*

### FPU-S

The **FPU-Standard** (FPU-S) is the basic unit for general purpose processing power. They have been designed to allow flexible customization of resource allocation inside your Dataplant.

One FPU-S represents approximately 0.5 vCPU and 2 GB of RAM, based on hardware availability. 


---
## FPU consumption

Each [subscription plan](/jp/product/billing/plans/add-subscription) comes with a set amount of included FPUs. This amount can be increased by [reserving more resources](/jp/product/billing/resources/index.md?id=reserve-resources) annually.  
Any FPU used over this amount is considered additional and is invoiced [on-demand](/jp/product/billing/resources/index.md?id=pay-as-you-go).

### Pay-as-you-go

With a pay-as-you-go (i.e. on-demand) model, you can adapt your business depending on need and not on forecasts. This on-demand pricing is similar to how you pay for utilities like electricity: you pay only for the individual resources you need, for as long as you use them and without termination fees. FPU are billed on per-second usage. 

In a **standard plan**, the on-demand price of one FPU is set at 
*$0.25/hour*.

In a **premium plan**, the on-demand price of one FPU depends on the cloud provider chosen for your Dataplant.

|    Cloud provider       |  Price per additional FPU   | 
| :---------------------: | :----------------: | 
|    **Amazon Web Services**      |   *$0.25/hour*   | 
|   **Microsoft Azure**          |     *$0.25/hour*    | 
|    **Google Cloud Platform**  |    *$0.24/hour* |
|    **OVHcloud**           |  *$0.22/hour*  | 

> **Premium** plans initially come with 8 included FPUs. This means that, for example, if at any moment you have 10 FPUs running at the same time you will only be billed for 2 FPUs on-demand.


### Reserve resources

Pre-paying committed resources allows you to save over on-demand usage in the eventuality that your demand can be forecasted yearly.

{Discover committed resources}(#/jp/product/billing/resources/committed.md)


---
##  Need help? 🆘

At any step, you can ask for support by sending us a request directly from the platform, going to the *Support* tab. You can also send us an email on support@forepaas.com.