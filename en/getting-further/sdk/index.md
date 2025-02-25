# Transform data from sources using the Python SDK

We have prepared detailed guides and sample scripts for common use cases to help you get started quickly and efficiently. These examples demonstrate how to leverage **Custom Actions** in different scenarios, allowing you to extract, transform, and load (ETL) data across various components of your data platform.

---

## 1. Custom Action with a Lakehouse Manager Table

### Overview:
This short example shows how to extract data from a table in Lakehouse Manager, transform it and then insert it or update the Lakehouse Manager.

The code is written in [Custom Action](/en/product/dpe/actions/custom/index) context and it uses the *stations_rides* table from the [Getting Started](en/getting-started/index.md) Tutorial. If you did that tutorial, you can just copy and paste the code below to test it, otherwise you need to adapt it to your tables and data sources.

### Example Application:

!> Do not forget to build the table you use in the Lakehouse Manager and then load it with a [DPE Load Action](/en/product/dpe/actions/load/index). You need to load your table before using the code below, otherwise it will not work.

```python
import sys
import pandas as pd
import logging

from forepaas.dwh import connect
from forepaas.dwh import bulk_insert

logger = logging.getLogger(__name__)
def customfunc(event):
    try:
        logger.notice("Begin function")

        # make connection to the Prim DBMS
        cn = connect("dwh/data_prim/")

        # option 1 : extract data from the table with no SQL required
        df = cn.select("stations_rides")

        # option 2 : extract data with custom SQL
        df = cn.query("SELECT station_id, date, rides, station_name FROM stations_rides")

        # perform your custom transform in the dataframe
        df.loc[df["station_name"] == 'Harlem-Lake', "rides"] = 0

        # reinsert your dataframe in the destination table
        stats = bulk_insert(cn, "stations_rides", df) 

        # show insertion statistics (if DBMS compatible) 
        logger.info(stats)

        # delete rows where station name is "Davis"
        cn.delete("stations_rides", {"station_name":"Davis"})

        # update rows set rides to 0 where station_id=40040
        cn.update("stations_rides", {"rides":0}, {"station_id":40040})

        # when finished, disconnect cn
        del cn    
        logger.notice("END function")
    except Exception as err: 
        raise Exception("err:{} L:{}".format(err,sys.exc_info()[2].tb_lineno))
```


---

## 2. Custom Action with Lakehouse Manager Buckets

### Overview:
Sometimes you need to handle a complex file format beyond our [Load Action](/en/product/dpe/actions/load/index) capabilities.
In this case, we advise you to store and manipulate files with the [Lakehouse Manager Buckets](en/product/lakehouse-manager/buckets/index) in your Project. 

?> In the current Data Platform SDK, the **Datastore connector** is used to interact with the Lakehouse Manager Buckets. You may think of the Datastore simply as a bucket container.

### Example Applications:

```python
import sys
import pandas as pd
from logging import getLogger

from forepaas.dwh import connect
from forepaas.dwh import bulk_insert

logger = getLogger(__name__)
def extract_func(event):
    try:
        # we get data from a bucket and we will archive them in another bucket
        bucket_source_name = "your_source_bucket_name_here"
        bucket_archives_name = "your_source_bucket_name_here"

        # create a connector to handle bucket   
        bucket_connector = connect("data_store/{}".format(bucket_source_name))

        # list files from bucket
        files = bucket_connector.list()

        # retrieve a file from Data Store bucket to temporary local folder
        bucket_filepath = "stations_rides.csv"
        local_filepath = "/tmp/stations_rides.csv"
        bucket_connector.fget(bucket_filepath, local_filepath)

        # read then transform the file as you need
        # here the date column format is simply adjusted for compatibility reasons 
        df = pd.read_csv(local_filepath, sep=';')
        df['date'] = pd.to_datetime(df['date'])

        # load the dataframe into a dataplant table named 'raw_file'
        cn = connect("dwh/data_prim/")
        bulk_insert(cn, "stations_rides_artur", df)
        del cn
        
        # option 1 : copy the file into the archives bucket
        bucket_archive_filepath = "archives/stations_rides.csv"
        bucket_connector.fcopy_to(bucket_archives_name, bucket_archive_filepath, bucket_filepath)
       
        # option 2 : put a file into the archives
        bucket_archives = connect("data_store/{}".format(bucket_archives_name))
        bucket_archives.fput(bucket_archive_filepath, local_filepath)
        del bucket_archives

        # delete file from source bucket
        bucket_connector.delete(bucket_filepath)

        # disconnect from datastore
        del bucket_connector
    except Exception as err: 
        raise Exception("err:{} L:{}".format(err,sys.exc_info()[2].tb_lineno))
```
Below is an example code which uploads an image to a bucket from a simple URL.

```python
from forepaas.dwh import connect

data_store = connect('data_store')

# Get bucket and upload image from URL to path forepaas/test.jpg.
# And finally get the image from the bucket
bucket_test = data_store.get_bucket('test')

lists = bucket_test.list(recursive=True)

bucket_test.put_request("https://i.stack.imgur.com/r8jTK.jpg", path='forepaas/test.jpg')
data = bucket.get('hello/test.jpg')

# Create a bucket if it does not already exists
if data_store.bucket_exists('test-exists') is False:
    data_store.create_bucket('test-exists')

# Connect directly to the bucket test and remove the file
bucket_test2 = connect('data_store/test')
bucket_test2.delete('hello/test.jpg')
```

> **Tip** : This also works with any **Object Store** that you may define as [S3 compatible source](/en/product/data-catalog/sources/connectors/s3/index) in the Data Catalog.

---

## 3. Custom Action with a Data Catalog Source

### Overview:
This example will show you how to get a file directly from a [Data Catalog Source](/en/product/data-catalog/sources/index), treat it and put the treated data into a [Lakehouse Manager Table](/en/product/lakehouse-manager/tables/index).  

The code is written in the [Custom Action](/en/product/dpe/actions/custom/index) context and it uses the *chicago_files* source from the [Getting Started Tutorial](en/getting-started/index.md). If you did that tutorial, you can just copy and paste the code below to test it, otherwise you need to adapt it to your tables and data sources.

> **Tip** : This works with any `Source` protocol such as [FTP](/en/product/data-catalog/sources/connectors/ftp/index), [Dropbox](/en/product/data-catalog/sources/connectors/dropbox/index), etc.

### Example Applications:

```python
import sys
from forepaas.dwh.connect import connect
from forepaas.dwh import bulk_insert
import logging

logger = logging.getLogger(__name__)

def customfunc(event):
    try:
        # here we are connecting to a source named 'chicago_files'
        source_address = "dwh/chicago_files_artur/"

        # specfify unsupported filename from list of files in source
        filename_w_extension = "stations_rides.csv"

        # connecto to file toget the address 
        source_file_connector = connect(source_address + filename_w_extension) 

        # connect to file directly
        file_address = source_file_connector.get()
        file_connector = connect(file_address) 

        # Extract and treat the file so it is usable
        df = file_connector.extract(return_type='dataframe') 

        # Treat the data
        # - - - - 

        # connect to the Lakehouse Manager
        dm_connector = connect("dwh/data_prim/")

        # insert into an existing destination table
        stats = bulk_insert(dm_connector, "chicago_calendar_full", df) 

        logger.info(stats)

        # disconnect from datastore and remote source
        del source_connector
        del dm_connector

    except Exception as err:
            raise Exception(f"err:{err} L:{sys.exc_info()[2].tb_lineno}")
```
