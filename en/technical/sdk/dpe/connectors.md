# Connectors and Connection Strings

In ForePaaS's Project, all available **data sources** are defined and configured in the [Data Catalog](/en/product/data-catalog/index).  

In the Python SDK, all those **data sources** are named by a unique **connection string** and accessible through **connectors** returned by the `connect()` function. The returned **Connector object** as well as its available methods depend on the **data source's type**.

A simple example to list tables from the default storage engine:
```python
from forepaas.dwh import connect

# connect to default PRIM storage engine
cn_prim = connect('dwh/data_prim/')
# list databases tables
tables = cn.list()
```

Data sources may be split in 4 categories:
* [Buckets](/en/technical/sdk/dpe/connectors?id=buckets)
* [Storage Engines](/en/technical/sdk/dpe/connectors?id=storage-engines)
* [Query Engine](/en/technical/sdk/dpe/connectors?id=query-engine)
* [Sources](/en/technical/sdk/dpe/connectors?id=sources)

> **Connection strings** are used in all Project's components to reference **data sources**, for instance in Data Processing Engine [Load](/en/product/dpe/actions/load/advanced-mode) and [Aggregate](/en/product/dpe/actions/aggregate/advanced-mode) actions or when [applying segmentation](/en/getting-further/segmentation/dwh-attributes?id=understanding-advanced-parameters).

---
## Buckets

[Buckets](/en/product/data-manager/buckets/index) are ForePaaS' built-in object store. Below, the connection string and its respective Connector object returned by the `connect function`.

| connection string | Connector | description |
| :---------------- | :-------: | :---------- |
| `connect("data_store")`| DataStore | Connects to the buckets |
| `connect("data_store/my-bucket")` | Bucket | Connects to a specific bucket |

Read more about [DataStore and Bucket connectors](/en/technical/sdk/dpe/connect-bucket).

---
## Storage Engines

Projects are linked to [Storage Engines](/en/product/project/storage-engine/index) as main databases to store and query data at the heart of your Project.
 
A Project can be defined with multiple [datasets](/en/product/lakehouse-manager/datasets/index), but by default you will receive 3 datasets **PRIM, MART and ML**. You can also create custom internal and external datasets. Each of these datasets can be linked to a different storage engine.

| connection string | Connector | description |
| :---------------- | :-------: | :---------- |
| `connect("dwh/data_prim/")`| Dataset | Connects to the default dataset - **PRIM** |
| `connect("dwh/data_mart/")`| Dataset | Connects to the default dataset - **MART** |
| `connect("dwh/exampleDataset/")`| Dataset | Connects to the custom dataset created by you - **exampleDataset** |
| `connect("dwh/data_prim/my_table")`| Dataset | Connects to the default dataset - **PRIM** that contains **my_table** |

Read more about [Database connector](/en/technical/sdk/dpe/connect-dm).

---
## Query Engine


When a [query engine has been activated](/en/product/am/resources?id=manage-the-query-engine), it may be used to request different storage engines and some compatible sources in an unified way.

| connection string | Connector | description |
| :---------------- | :-------: | :---------- |
| `connect("query_engine")`| Trino | Connects to the query engine (Trino) |
| `connect(f"query_engine/{catalog}/{schema}")` | Trino | Connects directly to a **schema** in a **catalog** |


---
## Sources

You may also connect to external data sources declared in [Data Catalog's Sources](/en/product/data-catalog/sources/index). Each external source has an associated **connection string** based on the initial name given to the source.
For instance, a new data source named `My first data` will have the connection string equal to `dwh/my_first_data`.  
The **technical name** is displayed on the main Data Catalog Source's page.

External sources may be split in a few types:
* **Databases connectors** have same methods as storage engines, see [Database connectores](/en/technical/sdk/dpe/connect-dm?id=data-manager-connector-methods)  
(i.e. Snowflake, PostgreSQL, Oracle, Microsoft SQL Server, Amazon Redshift, MongoDB...)  
* **Protocol connectors** when accessing file storage or object store (ForePaaS Buckets, ForePaaS File Upload, SFTP, Amazon S3, ...)  
Those connectors have same methods as [Bucket connector](http://localhost/#/en/technical/sdk/dpe/connect-bucket?id=bucket-connector-methods)  
* **Stream** (i.e. Kafka, MQIT, Amazon Kinesis) or **External APIs** (i.e. Google Analytics, Facebook, Twitter, Mailchimp..)  
Those connectors are mainly designed to be used from [Data Catalog Analyzer](/en/product/data-catalog/analyzer/index) and [Data Processing Engine Load Actions](/en/product/dpe/actions/load/index). 

---