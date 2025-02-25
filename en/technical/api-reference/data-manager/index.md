# API reference: Data Manager
 
When interacting with the Data Manager through the ForePaaS API, you have to use different endpoint patterns for different purposes. 

Below, you will find the reference for these patterns.

* [Create a source](/en/technical/api-reference/data-manager/index?id=create-a-source)
* [Add tables to a source](/en/technical/api-reference/data-manager/index?id=add-tables-to-a-source)
* [Metas extraction](/en/technical/api-reference/data-manager/index?id=metas-extraction)
* [Add virtual attributes](/en/technical/api-reference/data-manager/index?id=add-virtual-attributes)
* [Save your table schema](/en/technical/api-reference/data-manager/index?id=save-your-table-schema)
* [Build tables](/en/technical/api-reference/data-manager/index?id=build-tables)


---
## Create a source
 
Endpoint pattern: 
- **POST /datastores/db?token=xxxxx:**
 
JSON Body example for a Dropbox source: 
```json
{     
"dbms": "dropbox",     
"parameters":  { 
  "path": "/folder/path",         
  "token": "xxxxxxxxxx"     
},     
"database_name": "dropbox_source",     
"dwhName": "your_dwh_name",     
"level_name": "source 
} 
```
 

--- 
## Add tables to a source 
 
Endpoint pattern: 
- **POST /metas/tables?dwh_name=your_dwh_name&token=xxxxx** 
 
JSON Body example to add a table to a Dropbox source: 
```json
{ 
  "table_name": "your_file.csv",     
  "database_name": "dropbox_source" 
} ```

 
You can also add several tables in one shot: 
```json
[{ 
   table_name": "file1.csv",       
  "database_name": "dropbox_source" 
 },
 {  
  "table_name": "file2.csv",       
  "database_name": "dropbox_source" 
}] 
```
 

---
## Metas extraction

Endpoint pattern: 
- **PUT /metas/sources/extract/source_name/table/table_name?dwhName=dwh_name&token=xxxxxxx**
 
If you need to extract metas from a file1.csv file from a Dropbox source, you need to search: */metas/sources/extract/dropbox_source/file1.csv*
 
This *call* accepts settings like:

- sample: to extract metas on a data sample, not all (set it up on "true")
- sample_max_lines: if the sample is set up on "true", use it to set up the max number of lines you want for the sample
- flashzone: set up the option as "true" to have an overview of the file / table data on your DataPlant


---
## Add virtual attributes
 
Endpoint pattern: 
- **POST /attributes/<your_dwh_name>?token=xxxxxxx** 
 
Here is an example of a JSON Body: 
```json
{
        "attribute_name": "my_attribute",   
	"parameters": {},   
	"is_dimension": false,   
	"is_virtual": true,   
	"is_summable": true,   
	"sql": "SELECT COUNT(id) FROM clients.csv",   
	"is_measure": true 
}
```


---
## Save your table schema
 
Endpoint pattern: 
- **POST /logical/object?dwhName=dwh_name&token=xxxxxx** 
 
Here is an example of a JSON Body:

```json
[  
   {  
      "attributes":[  
         {  
            "attribute_name":"conso_id",
            "is_dimension":true,
            "sources":[  
               {  
                  "rules":[  

                  ],
                  "attributes":[  
                     "dropbox/consomations.csv/conso_id"
                  ]
               }
            ],
            "is_summable":false,
            "attribute_path":null,
            "fpui":{  
               "operation":"mapping"
            },
            "type":{  
               "main":"num",
               "sub":"smallint"
            },
            "is_measure":false
         },
         {  
            "attribute_name":"ca",
            "database_name":"data_prim",
            "is_dimension":false,
            "sources":[  
               {  
                  "rules":[  

                  ],
                  "attributes":[  
                     "dropbox /consomations.csv/ca"
                  ]
               }
            ],
            "is_summable":false,
            "table_name":"consomations",
            "fpui":{  
               "operation":"mapping"
            },
            "type":{  
               "max":999.99,
               "main":"num",
               "precision":2,
               "min":0.02
            },
            "attribute_path":null,
            "is_measure":true
         }
      ],
      "object_name":"consomations",
      "display_name":"consomations",
      "object_type":"measure",
      "to_materialize":true,
      "measure_date_field":"date",
      "key":[  
         "conso_id"
      ],
      "date_type":false,
      "relations":[  

      ],
      "indexes":[  

      ]
   }
]
```


---
## Build tables 

Below, are the endpoints that have to be executed to build your tables.

Build logical structure of a Data Prim: 
- **PUT /logical/build/prim?dwhName=dwh_name&token=xxxxxx**
 
Build logical structure of a Data Mart: 
- **PUT /logical/build/prim?dwhName=dwh_name&token=xxxxxx** 

Build physical structure: 
- **PUT /datastores/db/physical?token=xxxxx** 

Here is a JSON Body example: 

```json
{
   "levelsToBuild": "["data_prim"]",   
   "dwhName": "plw1uzhy_jm224kp5" 
}
```