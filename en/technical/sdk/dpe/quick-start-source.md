# Custom Action with Data Catalog source directly

This example will show you how to get a file directly from a [Data Catalog Source](/en/product/data-catalog/sources/index), treat it and put the treated data into a [Lakehouse Manager Table](/en/product/lakehouse-manager/tables/index).  

The code is written in the [Custom Action](/en/product/dpe/actions/custom/index) context and it uses the *chicago_files* source from the [Getting Started Tutorial](en/getting-started/index.md). If you did that tutorial, you can just copy and paste the code below to test it, otherwise you need to adapt it to your tables and data sources.

> **Tip** : This works with any `Source` protocol such as [FTP](/en/product/data-catalog/sources/connectors/ftp/index), [Dropbox](/en/product/data-catalog/sources/connectors/dropbox/index), etc.

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







    













