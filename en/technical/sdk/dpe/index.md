# Custom Actions SDK 

ForePaaS provides a Python SDK to create your own [custom actions](/en/product/dpe/actions/custom/index) within the [Data Processing Engine](/en/product/dpe/index) (DPE).  
It may also be used in other parts of the platform as described below.

- [Where is the Python SDK accessible](/en/technical/sdk/dpe/index?id=where-is-the-python-sdk-accessible)
- [The connect function](/en/technical/sdk/dpe/index?id=the-connect-function)
- [The bulk_insert function](/en/technical/sdk/dpe/index?id=the-bulk_insert-function)
- [PySpark Support](/en/technical/sdk/dpe/index?id=pyspark-support)
- [Simple Use Cases](/en/technical/sdk/dpe/index?id=simple-use-cases)
- [Advanced Use Cases](/en/technical/sdk/dpe/index?id=advanced-use-cases)


---
## Where is the Python SDK accessible

Most SDK functions are usable in 4 contexts, if they are not, it will be explicitly stated: 
- When creating a [Custom Action](/en/product/dpe/actions/custom/index) in the DPE.
- When creating a [Custom PySpark Action](/en/product/dpe/actions/custom-pyspark/index) in the DPE.
- When writing code in a MLM [Integrated Jupyter Notebook](/en/product/ml/notebooks/index).
- When creating a [Custom Estimator](/en/product/ml/pipelines/configure/training/custom-estimator) in the [Machine Learning Manager](/en/product/ml/index) (MLM).

You could, for example, write code and test it in a [Jupyter Notebook](/en/product/ml/notebooks/index) and, once you are done, copy and paste it into a DPE Custom Action.

---
## The connect function

The `connect()` function is, most of the time, the main entry point to interact with the [Project](en/product/project/index).

It takes a **connection string** as parameter and returns a **Connector object**.  
For example:

```python
from forepaas.dwh import connect

connection_string = "dwh/data_prim/"
connector_prim = connect(connection_string)
```

Change the connection string to connect to different sources within the ForePaaS environment.  
As a consequence, the object, and aveilable methods, returned by `connect(...)` will be different.

Our [Connectors and Connection Strings article](/en/technical/sdk/dpe/connectors.md) explains each option available in more detail and below you will find the method list for two common connectors:
* [Lakehouse Manager Dataset Connector](/en/technical/sdk/dpe/connect-dm)
* [ForePaaS Buckets Connector](/en/technical/sdk/dpe/connect-bucket)

---
## The bulk_insert function

The `bulk_insert()` function is a very important part of the SDK. You can use it to insert data back into a table. As shown in the code below, it takes a [Dataset Connector](/en/technical/sdk/dpe/connect-dm.md), a table name and a pandas DataFrame as parameters.

```python
import pandas as pd
from forepaas.dwh import connect
from forepaas.dwh import bulk_insert

# make connection to the Prim Dataset
cn = connect("dwh/data_prim/")

# extract data from the table with no SQL required
df = cn.select("stations_rides")

# perform your custom transform in the dataframe
df.loc[df["station_name"] == 'Harlem-Lake', "rides"] = 0

# reinsert your dataframe in the destination table
stats = bulk_insert(cn, "stations_rides", df) 
```

### bulk_insert(connector, table, data, source_default_schema={}, batch_size=None)

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| connector   | Connector| Connector instance from the connect() function | ```cn = connect("dwh/data_prim/")``` |
| table | str | name of the destination table where the data is going to be loaded in | - |
| dataframe | pandas.DataFrame | Dataframe of data to insert, must to have the same column names and types that the target table does. | - |
| default_schema | dict | - | - |
| batch_size | int | insertion batch size | - |

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| Tuple(stats, error) |  tuple of the statistics of the insertion | - |

---
## PySpark Support

ForePaaS offers extensive support to handle data with PySpark. 
All is done through Spark-compatible methods in the Connector object.  
Check out our [PySpark article](/en/technical/sdk/dpe/connect-spark) for further details.

---
## Simple use cases

We have prepared sample scripts for common use cases to get you started right away for 3 different use cases which you can find here - [Transform data from sources using the Python SDK](en/getting-further/sdk/index.md)

---
## Advanced use cases

Feeling confident 💪? Here are a few more specific use cases: 

* [A. Environment variables](/en/technical/sdk/dpe/3A.parameter)
* [B. Segmentation and perimeter usage](/en/technical/sdk/dpe/3B.segmentation)
* [C. Override load action](/en/technical/sdk/dpe/3C.load-override)
* [D. Using custom Python modules](/en/technical/sdk/dpe/3D.git)


---
## Technical documentation 

You may also check out the [Technical Documentation](https://forepaas-sdk.readthedocs.io/en/latest/) for a complete technical description of the SDK.
* [Connect](https://forepaas-sdk.readthedocs.io/en/latest/packages/dwh/index.html#connectors-connect)
* [Bucket](https://forepaas-sdk.readthedocs.io/en/latest/packages/dwh/index.html#datastore-connect)
* [Protocols](https://forepaas-sdk.readthedocs.io/en/latest/packages/dwh/index.html#protocols-connect)

---
## Need help? 🆘

At any step of the way, **don't hesitate to ask for support by sending us a request**. You can access our support portal directly from the platform by clicking on the top right menu bar on the question mark ❓icon and then choosing *Support*. You can also send us an email on support@forepaas.com.

{Send your questions to support 🤔}(https://support.forepaas.com/hc/en-us/requests)

