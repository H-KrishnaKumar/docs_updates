# Data Platform Buckets

The connector allows you to use files stored in your [Project's buckets](/en/product/lakehouse-manager/buckets/index) as data sources.

?> Buckets are a traditional file-based storage system and allow you to organize unstructured data

![Buckets](picts/FPBuckets.png)

* [Add a Buckets source](#add-a-buckets-source)
  * [Configuration screen overview](#configuration-screen-overview)
  * [Configuring your source](#configuring-your-source)
  * [Supported files and sizes](#supported-files-and-sizes)
---



## Add a Buckets source 

### Configuration screen overview

Once you have found *Buckets* in the **the Platform store**, click on *Select* and you will be able to see the configuration screen as shown below -

![bucket](picts/FPBucket1.png)


### Configuring your source

When creating the source, you will be required to input the following information :

- **Bucket:** The name of the Bucket from which you want to find the source files
- **Path:** The optional path to the subfolder containing the source files

Once you add the above details click on *Connect* and 
you will see the files in your bucket. An example is shown below:

![bucket](picts/FPBucket2.png)


Then click on the *Create* button on the top right-hand corner to create your source.

!> Don't forget to name your source before creating it. The technical name cannot be changed after creating the source and will be used when trying to open the source using the [SDK](/en/technical/sdk/dpe/index).

The encoding of the source files is automatically detected by the Platform. However, if the automatic detection fails, you have the ability to specify the file encoding by clicking on the **pen icon** next to each source object:

![File Upload](picts/buckets-encoding.png)

Select the encoding of your source object in the dropdown selection.

![File Upload](picts/encoding2.png)


### Supported files and sizes

The Datastore allows an **S3 compatible object** store, which allows you to store any unstructured data. 

!> There is a 10 GB size limit on files handled by the Data Store.



---
##  Need help? 🆘

> At any step, you can create a ticket to raise an incident or if you need support at the [OVHcloud Help Centre](https://help.ovhcloud.com/csm/fr-home?id=csm_index). Additionally, you can ask for support by reaching out to us on the Data Platform Channel within the [Discord Server](https://discord.com/channels/850031577277792286/1163465539981672559). There is a step-by-step guide in the [support](/en/support/index.md) section.
