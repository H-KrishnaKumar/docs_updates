# ForePaaS Glossary

## General wording

**PaaS**  
PaaS, also known as Platform-as-a-Service allows more technical customization than a product sold in SaaS (Software as a Service), without the complexity of an IaaS (Infrastructure as a Service).

**FPU**  
FPU, also known as ForePaaS Unit, is a unit of processing capability for the computation power of environments deployed on ForePaaS. The standard FPU grants access to 0.5 CPU for 2GB of RAM.

**Component**  
Part of a DataPlant, a component is accessible either via the DataPlant interface or through API, corresponding to a step of the data lifecycle within an analytics project. A component is used to abstract any underlying technology to meet a specific need(s). Read further to discover all the ForePaaS components. 

**CMP**  
CMP stands for Cloud Management Platform. It enables management and maintenance of organizations and DataPlants and is spread across different continents. 


**Log**   
A log is dated textual data to qualify a processing operation or an action. Everything that happens, whatever the component, is historized - in other words: "logged".
 
## Components

### DPE


**Data Processing Engine**  
The Data Processing Engine (DPE) is our new age data processing component: a flexible job-based orchestration service for any of your data processing functions

**Extract Transform Load**  
Extract Transform Load (ETL) is a common denomination used to describe the process of moving data from one place to another and transforming it through actions. 

**Action**  
An action is a unitary operation on the data. Actions can be optionally organized in stages and workflows to define more complex sequenced data operations. They can also be run manually. 

**Workflow**  
A workflow is an ETL organizational structure representing a sequence of actions and their order, that can be run manually, scheduled to run at a given time or triggered by API or by an external event.

**Stage**  
A stage gathers one or several actions that are run sequentially. It means that a stage can not run if all the actions of the previous stage have not been run. 

**Worker**  
A worker is a partition of a virtual machine sized by its number of CPUs and RAM dedicated to running jobs contained in a given environment.

**Environment**  
An environment is a configuration template shared by several actions/workflows defining the allocated resources, environment variables and or other parameters. 

**Repositories**  
Repositories are a workspace for a set of actions which can be synced or not with an external source such as a GIT repository or file storage system (Dropbox, Google Drive, etc).

**Segmentation**  
A segmentation describes the cut of one action into several parallelizable tasks in order to accelerate its processing. 

**Versions**  
A version is a variation of a group of actions contained in a folder designed to perform and evaluate changes without impacting the production environment. The versioning is optional and can be activated per folders.

{Learn more about the DPE}(#/en/product/dpe/index)

### Data Manager

**Data Manager**  
The Data Manager component is the place to store, analyze and organize data and their meta-data

**Metadata**  
Metadata is basically data that gives information on data. It includes varied information about a dataset (restrictions, relationships..). 
 
**Logical schema**   
A logical schema, as opposed to a conceptual schema, is a data model that gives an abstract view of the data structure. It is expressed in terms of data structures such as relational tables, indexes, attributes and primary keys.  

**Logical object**  
A logical object is an element of the logical schema that is used to gather attributes and other metadata. 

**Table**  
A table is a physical element that stores data that is split between different attributes. A table is defined by one or several primary keys - to ensure the uniqueness of the data - and might also include indexes. 

**Attribute**  
This is the finest element in terms of data management. That can be a volume or a date. Data is abstracted by an attribute that gives each data a name and a type. For example, in an Excel file, each attribute is a column. 

**Blueprint rule**  
This is the set of rules applied to a data source to check its compliance, apply conditions or filters during the processing. 

**Primary key**  
A primary key is a special relational database table column (or combination of columns) designated to uniquely identify all table records. It defines the granularity of a logical object or a physical table. A primary key can consist of 1 or more fields. This is essential for any object in order to guarantee the uniqueness of an object's dataset in order to avoid duplicates, for example.

**Data Primary**  
A set of objects where you find imported and/or cleaned data, as well as data dictionaries for low cardinality dimensions.

**Data Mart**  
A set of objects including data in an optimized way to query by third systems (for instance, the Query Builder). 

**Virtual attribute**  
Virtual attributes are attributes which are not physically stored in a table, to which an SQL type formula can be applied. For example, to extract the year from an attribute named "date_sale" of type date, we can apply the following formula: YEAR (date_sale).
  
{Learn more about the Data Manager}(#/en/product/data-manager/index)

### Analytics Manager

**Query Builder**  
The Query Builder, former name of the Analytics Manager, helps to build customized queries to your data stored inside the Data Manager, focused on your business needs. 

**Dataset**  
All the metadata stored in the Data Manager

**Diamond**  
View of a set of logical objects. This is the evolution of a LDAP cube in Data Management.

**Dictionary** 
Dictionary is a list referencing correspondences between each attribute id and attribute label. 

**Data**  
When creating your query, the data tab is a metric or attribute you want to visualize. 

**Scale**  
Scale shows on which attribute the representation of your data will be run. This corresponds to your ordinate on a graph. 

**Filter**  
Filter is the attribute on which you want to filter the selected data.

{Learn more about the Analytics Manager}(#/en/product/am/index)

### APP Manager

### API Manager

### Identity Access Manager

**Identity Access Manager**
The Identity Access Manager deals with authentication for your end-users, i.e. the users of the apps built and deployed on your DataPlant

{Learn more about the Identity Access Manager}(#/en/product/iam/index)

### Machine Learning

The Machine Learning component helps to:
* Explore your data interactively with notebooks
* Automate machine learning with built-in feature engineering, training, scoring procedures
* Optimize your model selection thanks to versioning
using a notebook experience for better iterations, Découverte et application d’un modèle mathématique à une problématique. Une fois un modèle établit, le machine Learning permet notamment la prédiction d’insights à partir de facteurs.

### Store

**Template**  
Turnkey application with a pre-configured environment and SDK.

**Extension**  
A functional unit which can be "plugged" into an application.
