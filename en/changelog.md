# Changelog

On this page you will find the most recent entries to the ForePaaS changelog (i.e. what has been updated on the platform).


---
## Feb 29th 2024

### Platform
- Several bug fixes and improvements

---
## Feb 22nd 2024

### Platform
- Several bug fixes and improvements

---
## Feb 15th 2024

### Platform
- Several bug fixes and improvements

---
## Feb 8th 2024

### Platform
- Several bug fixes and improvements

---
## Feb 1st 2024

### Platform
- Updated ForePaaS logos to OVHcloud logo

### Analytics Manager
- Fixed history metrics not being returned correctly


---
## Jan 25th 2024

### Data Processing Engine
- Removed logs that are not formatted correctly


---
## Jan 18th 2024

### Analytics Manager
- Fixed queries, APIs and applications returning an error when trying to query data from standard Lakehouse Manager datasets.

### AI App Builder
- Removed repeated column in Knowledge Bases list
- Visual fixes and improvements


### Storage Engines
- Sorted storage engines list in alphabetical order
- Added a 'Location' filter for interface
- Updated 'Engine' filter to filter the interface on the type of engine


### Platform
- Updated Profile & Profile > Security pages to be in auto-save mode



---
## Jan 11th 2024

### Lakehouse Manager
- Removed check on last dataset preventing to delete it
- Added warning message when trying to delete a dataset used in Machine Learning Manager


### Support Portal
- Fixed 'Open in a new tab' option not being available for support cases
- Fixed direct URL opening of a support case redirecting to the portal home



---
## Dec 28th 2023

### Platform
- Several bug fixes and improvements


---
## Dec 21th 2023

### Lakehouse Manager
- Fixed query estimator still appearing when failed
- Fixed display of type in datasets list
- Fixed bugs on the import and export of configurations

### AI App Builder
- Added redirection link to linked app from assistant interface
- Updated possible options from the home of the project

### Identity Access Manager
- Fixed appearance of MFA feature



---
## Dec 14th 2023

### Lakehouse Manager
- Updated 'Associated resources' table in policy tag page to show attributes' table
- Added sections in sidebar of Lakehouse


### Platform
- Added template for AI App Builder



---
## Dec 8th 2023

### Lakehouse Manager
- Fixed name and type of datasets sometimes not displaying correctly


### Platform
- Added confirmation modal before stopping a running job
- Fixed tile sometimes being blank after adding service in project


---
## Nov 30th 2023

### Platform
- Fixed sidebar links not working when there is no project in organization

### Data Processing Engine
- Improved Aggregate action to support manual adding of GROUP BY


---
## Nov 23rd 2023

### Identity Access Manager
- Added OVH logo for emails.
- Bugfixed login without authentication provider except ovh.

### Data Processing Engine
- Added message block when creating pyspark action from action.

### Lakehouse Manager

- Fixed search in groups/users when adding policy tags.
- Fixed display of policy tags in table / tree view.

---
## Nov 16nd 2023

### Lakehouse Manager
- Added interface to grant access to policy tags directly from Lakehouse Manager
- Fixed queries running automatically when opening Explorer
- Fixed attributes being duplicated twice when duplicating a table
- Multiple bug fixes and improvements related to the build status of tables


### Data Processing Engine
- Python 3.6 is now decommissioned. All actions and workflows have been migrated to the next available version.
- Added option to create a PySpark action when a Python Load/Aggregate action is detected to insert data in a Lakehouse Manager dataset.



---
## Nov 9nd 2023

### Lakehouse Manager
- Multiple bug fixes and performance improvements

### Analytics Manager
- Fixed a bug where it was impossible for a new user to login to the deployed-live dashboard URL
- Added a confirmation modal before deactivating a query engine

### Platform
- Updated password validation rules in the profile



---

## Nov 2nd 2023

### Storage Engines
- Reworked pages for *Storage Engines* service in the interface: *Storage Engines* can now be opened as a standalone service from either the main sidebar or the services list.

### Lakehouse Manager
- Fixed file size ordering not working in Buckets
- Multiple bug fixes and improvements to Datasets and Tables

### Analytics Manager
- Added a link to the query when an error occurred in a dashboard


### Identity Access Manager
- Fixed a bug when logging-in using login/password would not not work


---

## Oct 26th 2023

### Platform
- Added link to projects' templates' store in the services list
- Added locked visual in sidebar and header if no permission to header
- Removed some unused permissions in organization IAM
- Improved error message when reseting password


### Data Manager
- Data Manager service has been split in **Data Catalog** and **Lakehouse Manager**. 
- Data Manager graphical interface is depreciated


### Lakehouse Manager
- Introducing Lakehouse Manager!
- Lakehouse Manager is a serverless data warehouse to store and organize any dataset
  - You can now create custom datasets
  - You can now create policy tags for Advanced Data Access Control

### Data Catalog
- Introducing Data Catalog!
- Data Catalog allows you to define connections and data assets across your organization

### Data Processing Engine
- Added a new action: *CSV to PostgreSQL*

### Identity Access Manager
- Removed incorrect display of 'Log History' feature for DataplantID and API key authentication methods

---

## Oct 19th 2023

### Platform
- Multiple bug fixes and improvements


### Applications
- Fixed metric of FPU in APIs/apps not displaying correct value

---

## Oct 12th 2023

### Platform
- "Organization not found" page will be showed for invalid link.
- Increased text area size on Support portal page.
- Fixed default configuration of storage engine when create new project.

### Data Manager
- Fixed secret+key label missing for 'S3-compatible storage' source

### Data Processing Engine
- Changed source icon size.
- Time format updated.

### Machine Learning Manager
- Time format updated.

### Analytics Manager
- Analytics Manager is now generally available

---
## Oct 5th 2023

### Analytics Manager
- Analytics Manager Dashboards are now in Beta release
- Fixed access to live deployed dashboard

### Data Processing Engine
- Fixed duration not showing when it is under 1 second

### Application Services
- Fixed certificate management for apps
- Fixed configuration for login screens disappearing

---
## Sep 28th 2023

### Platform
- Fixed long projects/organizations names being shortened with ellipsis

### Data Processing Engine
- Fixed bug for repo version override
- Removed app_id & type query strings from the code snippet to launch an action/workflow

### App Manager
- Fixed a bug where it was impossible to remove a tag

---
## Sep 21st 2023

### Platform
- Fixed a bug where the Storage Engines page would be accessible but empty if user has no permission on storage engine instances. The page is now un-accessible in this case
- Fixed bug where the list of invites (to organizations) on the profile page would be inaccurate
- Fixed support page layout

### Data Processing Engine
- Fixed default version in actions being Python 3.11 



---
## Sep 14th 2023

### Platform
- We are rolling out a major update to the backend of the organization's IAM! Performances and stability are much improved on all of the platform pages.
- Updated sign-in screen when session is timed out inside a project


---
## Sep 7th 2023

### Platform
- Add option to sign in / sign up to ForePaaS using OVHcloud account


### Application Services
- Fixed automatic deployment when creating app/api


---
## Aug 31th 2023

### Data Processing Engine
- Added possibility to order/limit when listing objects by API

### Data Manager
- Added possibility to order/limit when listing objects by API

### Machine Learning Manager
- Added possibility to order/limit when listing objects by API



---
## Aug 24th 2023

### Data Processing Engine
- The version of PySpark is now displayed in Custom PySpark actions
- The minor version number for Python is no longer displayed in the interface

### Machine Learning Manager
- The minor version number for Python is no longer displayed in the interface

### Analytics Manager
- Fixed displaying of paywall based on query engine activation

### Control Center
- Added support for quotas. You can manage Control Center quotas in the Settings of the CC
- Fixed redirection to Control Center in the header which sometimes opened the wrong organization


---
## Aug 17th 2023

### Platform
- Various bug fixes and improvements


---
## Aug 10th 2023

### Data Manager
- Various bug fixes and improvements


---
## Aug 3rd 2023

### Data Manager
- Added two new connectors: **Shadow Drive**, and **Google Cloud Storage**.
- Fixed verify_ssl option for OpenSearch connector to be false by default
- Added a data type for virtual attributes on creation
- Fixed a bug when creating an index with 2 attributes on a PostgreSQL table


### Data Processing Engine
- Fixed a bug where the service would be softlocked if Control Center is unresponsive


---
## Jul 27th 2023

### Platform
- Fixed status member pending till he creates his account
- Fixed access to project being available if creation aborted

### Analytics Manager
- Added support to `eq` and `ne` operators for JSON queries


---
## Jul 20th 2023

### Platform
- Bug fixes and performances improvements


---
## Jul 13th 2023
### Storage Engines
- Introducing a new engine in Alpha release: Polar Data. Polar Data is a modern lakehouse engine built by ForePaaS.

### Data Manager
- Explorer can now be used without activating a query engine *(currently only available on projects deployed on OVHcloud provider)*


---
## Jul 6th 2023
### Platform
- Multiple improvements to the display performances of home page
- Added tooltips on kpis of project home
- Make editing message on project home always visible
- Fixed status of project when adding a service
- Fixed sidebar projects sometimes not up to date
- Fixed free fpu included in organization overview


---
## Jun 29th 2023

### Platform
- Performance improvements and multiple bug fixes to the new home pages and navigation

### Analytics Manager
- Added new option to export query result to ForePaaS Buckets, and receive the download link by email. Use this option if your query results are bigger than 10 MB and you cannot use the local download. 


---
## Jun 22th 2023

### Platform
- Introducing ForePaaS Home v2! 
  - Dataplants are now called Projects! They can be made of any number of services bundled together
  - A new header allowing to navigate between services, projects and organizations
  - A new sidebar allowing to navigate between services
  - A new organization home page introducing widgets and a 'recently opened' section
  - A new project home page where you can edit the layout and get detailed metrics
- Projects can now be created from templates, allowing to get started with only some services before expanding to others


---
## Jun 15th 2023

### Control Center
- Fixed bug on logs streaming endpoint


---
## Jun 9th 2023

### Platform
- Fixed opening of versioning panel in Data Processing Engine, Analytics Manager and Machine Learning Manager


### Analytics Manager
- Migrated all queries from Query Builder Legacy to Analytics Manager, in a new repository "QB Queries"
- Query Builder Legacy is now removed from the console and decommissioned from the ForePaaS Platform 
 

### Data Processing Engine
- Added possibility for Custom actions and Load actions using a streaming-type connector to have no timeout, if the job's execution mode is Always-up
- Fixed an issue on MQTT connector related to the acknowledgement of message consumption that would sometimes cause a timeout of the connection


---
## Jun 1st 2023

### Platform
- Fixed buttons sometimes disappearing on lists if a column was enlarged a lot


### Analytics Manager
- Fixed attributes from MART Tables not appearing in the choice of the query editor
- History loading is now better handled in Analytics Manager & Data Mnaager Explorer


### Data Processing Engine
- Statistics about insert/update are now disabled by default in order to optimize performances
  - Parameter `statistics` is now false by default in the *bulk_insert* SDK function
- Statistics about insert/update are now computed only if the log level of a job is set to *DEBUG*



---
## May 25th 2023

### Data Manager
- Fixed preview table button sometimes previewing wrong attributes

### Analytics Manager
- Fixed regrouped attributes which sometimes would appear in wrong order on a bar chart


---
## May 11th 2023

### Data Manager
- Added a warning when linking a storage engine that is not in the same location as the Dataplant
- Fixed translation issues in some modals
- Fixed arguments not being correctly required on MongoDB connector

### Analytics Manager
- Fixed queries not running if Japanese characters were in the title
- Fixed virtual attributes sometimes not appearing in the options for the visual query builder
- Fixed gauge chart not taking the dashboard's chart into account


---
## May 4th 2023

### Analytics Manager
- Added a new chart type: **gauge chart**. Make sure your projects are on-track and monitor how far KPIs are from reaching targets with this new visualization type!
- Added new option to break the X-axis down into multiple attributes, in order to regroup bar charts, line charts and area charts by specific Scale attributes
- Added more fine-grained *origin* types for the query history, with hyperlinks to the relevant object 


### Data Processing Engine
- Increased the size of a workflow's visual interface, in order to make the name of its actions more visible
- Fixed a bug on the workflow version override which would sometimes not take effect


### Identity Access Manager
- Fixed a bug on the service selection in the role condition builder




---
## Apr 27th 2023

### Data Manager
- Added a *type* parameter for virtual attributes
- Fixed "port" parameter in MQTT connector


### Analytics Manager
- Added a more fine-grained origin for queries in History
- Added a more fine-grained status for queries in History
- Tiles/filters are now automatically removed from dashboards if the related query is deleted


### Data Processing Engine
- Added a new action: *MySQL to Parquet*
- Fixed a bug where the status of a workflow would sometimes not reflect the status of stages



---
## Apr 20th 2023

### Data Manager
- Bug fixed on MQTT connector

### Analytics Manager
- Small cosmetic improvements to dashboards



---
## Apr 13th 2023

### Data Processing Engine
- Python 3.6.5 is now depreciated. Please migrate all your actions to the next stable version of Python: 3.9.9
  - Python 3.6.5 will be fully decommissioned on **October 19th 2023**
- Fixed multiple git conflicts

### Data Manager
- Added Location column when binding a new storage engine, and 'recommended' tag if the storage engine is in the same location as dataplant
- Fixed logs in console being swapped when launching another job

### Machine Learning Manager
- Python 3.6.5 is now depreciated. Please migrate all your pipelines to the next stable version of Python: 3.9.9
  - Python 3.6.5 will be fully decommissioned on **October 19th 2023**


---
## Apr 6th 2023

### Data Processing Engine
- Added support for **Python 3.11**
- Added merge conflict user warning for Git versioning

### Analytics Manager
- Keep attributes sorted in the same order when previewing a table from the Data Manager


### Application Services
- Multiple bug fixes on timeout after building
- Better handle when build finish job



---
## Mar 30th 2023

### Data Processing Engine

- Alerts integration in DPE Workflow UI.
- Confirm popin if creating a workflow with actions that use different Python versions.

### Analytics Manager

- Improved animation to display edit chart settings panel in dashboard.
- For Pie charts group data together if more than 20.
- Fixed reload jobs and logs in logs explorer

### Control Center

- Reload of jobs in Logs Explorer has been fixed.

---
## Mar 23rd 2023

### Analytics Manager
- Added inversion evolution colors and displaying dimension.
- Bug fixed where offset percentiles labels so that they don't overlap.

### Data Processing Engine
- Alerts tab in Actions to create Control Center Alerts.
- Actions/workflows names can be clicked in Jobs tab to redirect to the action/workflow.

### Machine Learning Manager
- Pipeline names can be clicked in Jobs tab to redirect to the pipeline.

---
## Mar 16th 2023


### Analytics Manager
- Added *trend line* option in the settings of scatterplot
- Fixed red error message if user has no access to IAM
- Fixed duplicate attributes appearing in query creation choices if both virtual and physical attribute have the same name


### Applications
- Multiple bug fixes


### Platform
- Fixed Azure storage engine creation
- Added new filters to the Jobs page statuses


---
## Mar 9th 2023

### Analytics Manager
- Added a new chart type: [*Scatterplot*](/en/product/am/queries/charts?id=use-a-scatterplot), to represent the correlation between two metrics as colored bubbles
- Added possibility to edit all chart settings directly from a dashboard
- Added info in query history that the query has been launched from a deployed dashboard
- Fixed a bug when drilling down on a chart which already had an Order set at query level


### Data Processing Engine
- Added a new action: *PostgreSQL to Parquet*
- Renamed action *table-to-files* in interface and improved its visual aspect, to add an option to choose the output format
- Added ability to disable stats calculation on `bulk_insert` function from SDK, in order to reduce the computing time
- Disabled Always-up option for PySpark actions


---
## Mar 2nd 2023

### Analytics Manager
- Introducing the possibility to [drill-down](/en/product/am/dashboards/edit?id=drill-down-on-the-dashboard) on dashboards' charts! Click on a part of any chart in order to filter everything on related values, or to further explore relevant data.
- Added option to download the content of a dashboard's tile as a CSV
- Fixed timepicker's display reseting when opening it from a dashboard
- Fixed timepicker's WTD option not starting on Monday in some countries

### Control Center
- Updated interface for Logs Explorer in streaming mode in order to stick to the bottom of page when new logs appear


---
## Feb 23th 2023

### Analytics Manager
- Added *Download as a CSV* option to export the result of query as a tab-separated .CSV local file (limited to 10 MB) 

### Data Processing Engine
- Disabled possibility in GUI to mix standard and PySpark actions in the same workflow
- Fixed environement variables automatically opening in preferences
- Fixed language version override on workflows sometimes not displaying


### Control Center
- Fixed logs sometimes being displayed on same line when streaming
- Redirecting to the logs explorer from another component now switches Streaming mode on if it is a currently running job

### Platform
- Fixed drag and dropping repositories which would sometimes randomize their order
- Renamed job status from Pending to Running
- Fixed search if category selected







---
## Feb 20th 2023

### Data Processing Engine
- Added a parameter *apply_rules* (default value = *false*) in function `extract` of the SDK in order to apply blueprint of rules.

### Analytics Manager
- Added *Copy to clipboard* option to copy the result of query to the clipboard (limited to 1 MB)
- Replaced the dashboard subtitle by the dashboard's description
- Improved the default visual aspect of some charts
- Updated the options for the size of query engine. 4 FPU-S is now XS, and added a new coming soon option: XL (64 PFU-S).
- Fixed visual display bugs on dashboard tiles (tooltip or options that would sometimes go behind the tile)

### Data Manager
- Fixed a bug in Trino connector where it would return an error `'Trino' object has no attribute '_read_sql'`

### Control Center
- In Logs Explorer, clicking on refresh now refreshes the list of executions for jobs


### Platform
- Added repository_id in url of following pages: DPE Actions, MLM Pipelines, AM Queries
- Fixed a bug where double clicking on folder would create subfolder with same name


---
## Feb 9th 2023

### Platform
- Fixed drag and drop of files into folder which was sometimes failing
- Fixed display of delete confirmation modal when too many objects are in it
- Increased size of description ticket in Support portal

### Analytics Manager
- Added option to compare to previous period in [Metric](https://docs.forepaas.io/#/en/product/am/queries/charts?id=use-a-metric) chart!
- Improved visual aspect of big number
- Improved drag and drop of tiles to include an auto-scroll at the top and bottom of dashboard
- Fixed filter dropdown that would sometimes go behind a tile
- Fixed "Filter on" option at the bottom of the filter
- Updated text if no deployed dashboard in the dashboards portal

### Data Processing Engine
- Updated PySpark version from 3.1.1 to **3.2.1**
- Fixed bug when committing changes in repo connected to git
- Fixed the display Building status when simply saving action

### Machine Learning Manager
- Made the pipeline ID in a job clickable

### Control Center
- Added icons to show status of execution id's in Log Explorer
- Removed delete icon for ForePaaS monitoring panels (in multi-select)



---
## Feb 2nd 2023

### Platform
- Updated label color and button's grey.
- Fixed table width.


### Analytics Manager
- Added dashboards portal.
- Optimized dashboards render.
- Fixed redirection to logs in the Control Center from a resource.

### Data Manager
- Fixed loader in Table load.


---
## Jan 26th 2023

### Analytics Manager
- Added a new chart type: [Metric](/en/product/am/queries/charts?id=use-a-metric), to display a query result as a single big number!
- Greatly improved vertical resizing of dashboard tiles to be pixel perfect instead of by steps
- You can now choose to add a time to your date filter in a dashboard if the filter is set on [*Date & Time*](/en/product/am/dashboards/edit?id=edit-advanced-filter-options)
- Increased the limit of tiles per row from 4 to 8 (tiles can now be smaller)
- Switched icon for successful autosave in dashboard to green
- Fixed scroll in query preview if error
- Fixed message when query does not exist in a dashboard
- Fixed labels being hidden in a pie chart in dashboards with no reason

### Control Center
- The Control Center is now in General Availability!
- Infrastructure Monitoring Legacy interface has been decommissioned
- Added possibility to notify subscribers when an alert is resolved

### Data Processing Engine
- Fixed a bug where a workflow would be stuck at a stage (despite all its actions successfully finishing) and would timeout 

### Application Services
- Fixed creation of app using custom template

### Platform
- Improvements of the linking of storage engines with Dataplants
- Added a tutorial on [how to upload custom app templates to the ForePaaS Store](/en/technical/api-reference/store/index.md)


---
## Jan 19th 2023

### Analytics Manager
- You can now filter absolute and relative dates in your dashboards using the **Date** and **Date & Time** filter types!
- Added Boolean filter type
- Added possibility to change filter type in the advanced filter options
- Fixed sql query not executed in dashboards if configuration empty
- Fixed display button back to dashboard if no dashboard


### Data Processing Engine
- Add log for operator elected
- Fixed watch_jobs ignore not initialised or stopped job
- Fixed skip instead of stop if error happens


---
## Jan 16th 2023

### Platform
- Improved performances for support interface


---
## Jan 12th 2023

### Analytics Manager
- Introducing [Dashboards](/en/product/am/dashboards/index)! A modern and simple BI tool for super fast dataviz and reporting. Using the next-gen Analytics Manager query engines, your data visualisation and querying can easily scale up to Big Data and beyond. 
  - Dashboards are currently in Alpha release in Analytics Manager.

### Identity Access Manager 
- Added compatibility for CEL conditions on *Analytics Manager* service.


---
## Jan 6th 2023

Happy New Year! ForePaaS and OVHcloud wish you the most successful data projects for 2023! 🎉🎉


### Platform
- Performances improvements



---
## Week 52

**Date:** 29/12/2022

### Platform
- Bug fixes and performances improvements


---
## Week 51

**Date:** 22/12/2022

### Platform
- Bug fixes and performances improvements


---
## Week 50

**Date:** 15/12/2022

### Platform
- Bug fixes and performances improvements

---
## Week 49

**Date:** 08/12/2022


### Data Processing Engine
- Added option to override repository version of actions inside workflow

### Analytics Manager
- Fixed chart Runtime Percentile on Overview page

### Control Center
- Removed storage engine overtime chart in storage engine monitoring
- Added OAuth2 support for Custom Webhook alert consumers in the interface

### Identity Access Manager
- Advanced CEL conditions (technical name, etc.) are now available for services *Data Manager* and *Control Center*.



---
## Week 48

**Date:** 01/12/2022

### Data Manager
- Added a new connector in general availability: **InfluxDB**

### Control Center
- Added OAuth2 support for Custom Webhook alert consumers in the API


---
## Week 47

**Date:** 24/11/2022

Happy Thanksgiving! 🎉

### Data Manager
- Added a new connector in general availability: **CockroachDB**
- Fixed translation when creating a new storage engine
- Fixed responsive on Buckets files list

### Identity Access Manager
- Advanced CEL conditions (technical name, etc.) are now available for service *Data Processing Engine*.


### Control Center
- Fixed URL when redirecting from other services to the Logs Explorer
- Fixed format date of storage engines



---
## Week 46

**Date:** 17/11/2022

### Platform
- Implemented a major backend update to dramatically improve the performance and availability of the ForePaaS console. Among other things, this update significantly increases the stability and speed of access to your Dataplants and other organization-level services.

### Data Processing Engine
- Logs window now prompts to redirect to the Control Center Logs Explorer

### Identity Access Manager
- Advanced CEL conditions (technical name, etc.) are now available for service *Machine Learning Manager*.

### Control Center
- Fixed display of tooltip for RPS and Latency charts in monitoring panels
- Added automatic default values on triggers when creating an alert
- Replaced 0 by 'Terminated' in column 'Age' of service in monitoring panels if status of pod is terminated

### Machine Learning Manager
- Logs window now prompts to redirect to the Control Center Logs Explorer
- Fixed bug on dataset generation for unstructured data

### Data Manager
- Logs window now prompts to redirect to the Control Center Logs Explorer


---
## Week 45

**Date:** 10/11/2022

### Control Center
- Added all query filters in URL of Logs Explorer
- Fixed a bug when logs would not match chosen timeframe after editing the datepicker to a smaller date

### Data Processing Engine
- Added a new tutorial: [how to load streaming data from Apache Kafka](/en/getting-further/kafka/index)

### Machine Learning Manager
- Fixed download model link

### Identity Access Manager
- Added compatibility for CEL conditions on *Analytics Manager* and *Control Center* services




---
## Week 44

**Date:** 03/11/2022

### Control Center
- You can now search logs using a regex match (as well as doesn't regex match, contains, or doesn't contain) in the Logs Explorer.
- Log search can now be done using Control Center API
- Navigation in the header no longer blocked if user has rights on service.

### Identity Access Manager
- Added compatibility for CEL conditions on *Data Processing Engine*, *Data Manager* and *Machine Learning Manager* services
- Updated date format for creation date of api key in users and service account.

### Data Manager
- Fixed opening of advanced panel when update table in Data Manager. 

### App Service
- Updated return status when user is unauthorized (403 instead of 401).
- Updated to return 403 if users has no rights on applications instead of 200 and empty list.

### Data Processing Engine
- Fixed concurrent job execution amongst other bugs.


---
## Week 43

**Date:** 27/10/2022

### Control Center
- Added storage engine charts in monitoring.

### Identity Access Manager
- Fixed disabled when edit legacy role condition.
- Updated user name with civility translated.
- Translated civility (in english) in mails.
- Fixed bug about group duplicate in backend.

### Machine Learning Manager
- Fixed autosave when edit preferences of model.
- Fixed getters prim and mart table from store.

### Data Manager
- Added most queried tables chart in overview.

### Data Processing Engine
- Changed settings to not ask to update environment on first launch if version deployed.

### Platform
- Added loader when switch organization.

---
## Week 42

**Date:** 20/10/2022

### Control Center
- Replaced FPU consumption KPI with Dataplant count KPI

### Identity Access Manager
- Bug fixes and improvements to CEL role conditions editor
- Added a new tutorial: [How to set a role condition on a specific bucket](/en/getting-further/iam/conditions)


### Data Manager
- Fixed reseting search filter when selecting a bucket


### Analytics Manager
- Fixed count of queries in overview


### Data Processing Engine
- Fixed use of databases and tables in Actions
- Added visual display of when job fails because oomkill
- Added tooltip on disabled options for perimeter and segmentation
- Updated trigger translations


### Platform
- Prevented accidentally closing the modal when adding/editing storage engine
- Fixed empty size when creating new storage engine



---
## Week 41

**Date:** 13/10/2022


### Identity Access Manager

- Added compatibility for CEL conditions on *Data Store* and *App Service* services


### Data Manager
- Fixed 'magnifying glass' button for a table to open a preview of the table
- Fixed button switch table views
- Added horizontal scrolling on the metadata analysis page


### Data Processing Engine
- Fixed perimeter option not being in the correct place in the UI
- Fixed missing English translation in quotas
- Fixed buttons in the versioning panel
- Fixed database_name in tables



---
## Week 40

**Date:** 06/10/2022

### Control Center
- Added refresh button next to the date picker
- Fixed alert's metrics page to filter table only on the alert
- Added all authentication modes (Azure AD, etc.) in Total Logins KPI in overview

### Data Processing Engine
- Improved stability and performance of the execution of jobs
- Increased default limit of maximum jobs that can be launched at the same time to 42
- Jobs can no longer be put to the queue, an error will be returned if the maximum limit is reached 
- Added new "Automatic segmentation" mode

### Data Manager
- On a Kafka source, added possibility to choose between watching from the earliest or the latest offset for each topic
- Fixed error in chart in Overview page when storage engine is missing
- Moved toggle near to text in wide screen when configuring sources 
- Added message if trying to analyze table of source in Analyzer but no tables in source

### Analytics Manager
- Fixed list of attributes in table details
- Removed counting Explorer queries in some charts and KPIs in overview


### Machine Learning Manager
- Fixed display success rate heatmap in metrics notebook and pipeline
- Fixed adding modules in notebook by type of notebooks (PySpark vs Python)



---
## Week 39

**Date:** 03/10/2022

### Control Center

- Fixed organization-level view not available despite being authenticated in IAM


---
## Week 38

**Date:** 22/09/2022

### Identity Access Manager
- Introducing new [CEL role conditions](/en/product/iam/users/roles)! Use the new visual condition builder to give fine-grained permissions on resources, or write your role conditions using Common Expression Language (CEL)
  - Currently, CEL conditions are only available for roles containing permissions on IAM service solely.


### Control Center
- Automatically add author of the alert to the subscribers
- Added alert categories
- Added alert status next to the title in UI


### Data Processing Engine
- Removed segmentation options not available depending on the connector type
- Improved job execution time by improving the build system



### Data Manager
- Added historical values of storage size in Overview
- Improved job execution time by improving the build system




---
## Week 37

**Date:** 15/09/2022

### Control Center
- We revamped the log exploration interface! Now, you can scroll down to progressively load logs as they go
- Added two new alert consumers: Amazon SNS and Opsgenie
- Updated email text content


### Data Processing Engine
- Multiple bug fixes and performance improvements


### Data Manager
- Warning: `/metas` API endpoint is now deprecated. Please make sure to stop using it when calling your ForePaaS Dataplants from outside.
- Multiple bug fixes and performance improvements


---
## Week 36

**Date:** 08/09/2022

### Control Center
- Fixed external consumers unexpected coercion on configuration field
- Fixed slack config (remove not working fields Channel, username, user icon)


### Data Processing Engine
- Stability and performances improvements
- UI changes to environments to force user to click on confirm before saving


### Data Manager
- Stability and performances improvements


### Analytics Manager
- Fixed autosave right after opening a query



### Identity Access Manager
- Several interface bug fixes and improvements
- Prevented access to service interface from header and url if no rights 
- Updated title and message in authentication page for Dataplant application
- Added default message in authentication page when creating new application



---
## Week 35

**Date:** 01/09/2022

### Platform
- Updated title in tabs of browser when being on the Overview page of a component

### Control Center
- We added tooltips on each KPI on the overview! Learn how a specific metric was obtained by hovering over it for a couple of seconds.
- Overview: Added ability to filter panel Consumption by providers or dataplants 
- Fixed chart consumption in organization level that wouldn't stack 
- Fixed jobs heatmap in overview when filtering by timeframe, and to only display only CRON-based
- Updated Y-axis for cpu / ram charts to adjust to the value
- Optimized display of items for DPE and ML dashboards


### Data Manager
- Added shortcut file upload when create new source from overview 
- Updated selectbox style in Explorer

### Data Processing Engine
- Disabled create action button on the onboarding welcome page if no rights 

### Analytics Manager
- Updated selectbox style in queries
- Added origin explorer in filter of history
- Fixed fields not showing all attributes in visual builder when adding first filter 

### Identity Access Manager
- Added button to copy application’s url to clipboard 


---
## Week 34

**Date:** 25/08/2022

### Control Center
- The Control Center is now in Beta release!
- Fixed display of days in the date picker
- Metric "Login per hour" is now "Total logins", and metric "RPS" is now "Current RPS"

### Data Processing Engine
- Fixed behavior of [environment variables](/en/product/dpe/actions/settings/index?id=environment-variables)

### Data Manager
- The "Directly Queryable" feature has been renamed to [Direct Query](/en/product/data-manager/sources/index?id=make-your-data-source-directly-queryable). Use the Analytics Manager to run queries on remote sources without having to import the data!
- Added endpoint *health* 


### Identity Access Manager
- Fixed sessionExpired when calling IAM after login with APIkey/secret key


---
## Week 33

**Date:** 18/08/2022

### Control Center
- Fixed scroll bar in alert editor, monitoring and job’s triggers pages.
- Number of failed execution now includes timed out executions.
- Added full time in tooltip of network charts.

### Data Processing Engine
- Added retry when retrieving DPE action/workflow configuration.


---
## Week 32

**Date:** 11/08/2022

### Platform
- Fixed size tooltip in charts.

### Control Center
- Fixed overview chart storage when organisation view.
- Improved chart consumption in overview.
- Forced display tooltip for charts event if no value.
- Updated tracker front.
- Fixed logout.
- Updated auto generate name for new alert.
- Fixed update FPU for items from old infra monitoring.

### Data Manager
- Fixed delete file when buckets not loaded.

### Machine Learning Manager
- Allowed adding link for notebook dependencies.

### Identity Access Manager
- Added permission DM for DM & QB Editor.
- Added role Control Center Editor.
- Created Infrastructure Managers group.
- Updated name of Identity Access Managers group.


---
## Week 31

**Date:** 04/08/2022

### Control Center
- Prevented second click when create alert + Autogeneration of name.
- Removed info from selectbox to select existing consumer + prevented adding it if required field is not filled.
- Showed preview of instances when toggle HA in storage engine dashboard.
- Added tracking UI.
- Refreshed time when click on refresh button in logs explorer.
- Jobs: Fixed long loader.
- Jobs: Added missing filter "Execution method".
- Jobs: Added more options for filter "Status".
- Jobs: Fixed failed case in graphs.
- Jobs: Added hyperlink for Object name of job.
- Jobs: Fixed wrong icon.
- Jobs: Fixed duplicate objects in table.
- Jobs: Fixed numbers of executions column.
- Jobs: Fixed edit ml trigger.
- Logs: Fixed wrong icon.
- Logs: Sorted the list of object by numbers of executions
- Logs: Fixed toggle streaming button
- Logs: Added show numbers of search result
- Logs: Fixed filter cleared after refreshing logs
- Logs: Sorted and filter execution_id in the filter options


### Data Manager
- Fixed related items in attributes pages

### Machine Learning Manager
- Update select box for depencies if pyspark notebook.
- Update icon when notebook starting or stopping.

### Data Processing Engine
- Removed stopped deployments from active deployments table.


---
## Week 30

**Date:** 28/07/2022

### Control Center
- Removed not necessary actions in top of treeview in alerts.
- Optimized call in dashboarding default (call was send on all data plant instead of one).
- Added style to redirect on name in table (like in DPE).
- Added name of dataplant in tooltip of charts.
- Displayed first row of charts in one third for panel in overview.
- Updated chart of alerts active over time (fix xAxis and add 0 in green).
- Removed warning when edit fpu from API / APP / AM dashboarding.
- Fixed alignment in input-fpu.

### Data Processing Engine
- Fixed size and add tooltip on tags in treeview.

### Query Builder
- Fixed size and add tooltip on tags in treeview.

### Machine Learning Manager
- Fixed size and add tooltip on tags in treeview.


---
## Week 29

**Date:** 21/07/2022

### Control Center
- Update title in tabs browser
- Add some tooltips
- Update xAxis on charts
- Overview: Update current alert triggerings table
- Overview: Fix xaxis for active alert over time chart
- Monitoring: Fix chart network not reloaded when update datepicker
- Monitoring: Fix redirect to item when click on name from table
- Monitoring: Fix update FPU of item
- Monitoring: Add search by tags in tree view
- Monitoring: Fix UI in storage engine dashboard
- Alerts: Add "Only watch CRON-triggered" feature
- Alerts: Fixed target saving conditionals
- Alerts: Added a Metrics shortcut from the treeview
- Alerts: Fixed alert duplicate
- Alerts: Added alert status in alert title
- Alerts: Health check ability to select all resources
- Alerts: Trigger - Default value by default
- Alerts: Subscribers pagination fix
- Alerts: Ability to search for subscribers from the added list
- Settings: Ability to edit an external consumer

### Analytics Manager
- Fixed scroll in query fields when vertical view

### Data Manager
- Fixed scroll in query fields when vertical view



---
## Week 28

**Date:** 13/07/2022

### Control Center

- The [Control Center](/en/product/cc/index) is now available in Alpha release! Get full observability on each service and component in your data project. 
  - Monitor metrics across your data pipelines, applications, and deployed instances
  - Drill-down on logs to troubleshoot errors
  - Set up alerts when issues arise
  - Ensure scalability by adding more resources on any service as needed


### Identity Access Manager
- Bug fixes and improvements to session management


---
## Week 27

**Date:** 07/07/2022

### Platform
- Updated CSV file connector.

### Data Processing Engine
- Enabled concurrent execution button for serverless environments.

---
## Week 26

**Date:** 30/06/2022

### Platform
- Support of multi factor authentication (MFA).

### Data Manager
- Connectors (Druid, OpenSearch, Prometheus)
- New Explorer tab released in Alpha.
  - Optimized query execution to be able to use virtual attributes in SQL mode

### Data Processing Engine
- Point-and-click PySpark Load and Aggregate actions are now available in Alpha release
- Optimized provisioning time with ForePaaS actions.
- Multiple concurrent executions in Serverless mode.


---
## Week 25

**Date:** 23/06/2022

### Platform
- Fixed version api on serviceaccounts that can be on error while sent to kubernetes.

### Data Processing Engine
- Disabled concurrent execution button for serverless environment.
- Uniformized Information panel when editing an element.


---
## Week 24

**Date:** 16/06/2022

### Platform
- Updated Japanese translations.

### Machine Learning Manager
- Update open Notebook CTA.

---
## Week 23

**Date:** 09/06/2022

### Platform
- Bug fixing and improvements.

---
## Week 22

**Date:** 02/06/2022

### Platform
- Fixed Japanese some translations.
- Updated list of restricted words for tables/attributes names.
- Bug fixing and improvements.

---
## Week 21

**Date:** 26/05/2022

### Platform
- Bug fixing and improvements.

---
## Week 20

**Date:** 19/05/2022

### Platform
- Removed big shadow on white buttons.
- Improved tooltip display.

### Data Processing Engine
- Fixed folder on some treeviews.
- Added advised bucket size.

### Data Manager
- API: created a v4/metrics endpoint to aggregate metrics from DM, storage volume.
- Hotfixed metrics endpoint.
- API metrics extract: added possibility to update table parameters depending of connector func


---
## Week 19

**Date:** 12/05/2022

### Data Processing Engine
- Actions treeview bug fixed. 
- Actions folder treeview bug fixed. 


---
## Week 18

**Date:** 05/05/2022

### App Manager
- Fixed copy and remove with new Minio gateway.

### Identity Access Manager
- Fixed populate of undefined when getRolesAcls for users.
- Fixed generate password too long.
- Update format date generated password

### Data Processing Engine
- Introducing [Always-up execution mode](/en/product/dpe/actions/settings/index?id=execution-modes)! 🎉 Execute your jobs faster with the new Always-up execution mode in Data Processing Engine
  - In addition to the standard *Serverless* execution mode, now you can also keep dedicated resources always up and ready to run your jobs instantly. 
- Added placeholder for empty table in metrics.

### Machine Learning Manager
- Added placeholder for empty table in metrics.

### Analytics Manager
*This component is currently released under open beta.*
- Added limit in query configuration.
- Put select be default when select data.
- Added a shortcut to preview a table directly from a table.


---
## Week 17

**Date:** 29/04/2022

### Platform
- Added link to have info on OVH acquisition in no new account page.
- Added modal confirm when delete member from editor.
- Added status of job in job detail.
- Fixed condition to display provider logo in dataplant block.
- Added link to documentation on how to manage members in request to join organisation email.

### Data Manager
- Added column in sources.
- Added tooltip for generate action in table list.

### Data Processing Engine and Machine Learning Manager
- Fixed message in FPU settings for environment.


---
## Week 16

**Date:** 22/04/2022

### Data Manager
- Removed virtual attributes from Tables page
- Added info on system bucket
- Fixed bug to attach sandbox in DM + can unlink sandbox

### Analytics Manager
*This component is currently released under open beta.*
- Display more attributes in selectbox data and scale
- Updated function to set sum or select by default
- Added placeholder in filters
- Hiden ML tables in table details in query editor
- Added shift + Enter to run query And wait after saving to run it
- Added loader when run from SQL editor from keyboard
- Added download as a json
- Fixed size of SQL in history table
- Fixed switch in filter from between to in
- Added created_at and updated_at column in queries list

### Data Processing Engine
- Ability to view workflow from action lineage page
- Bug fixed: workflows list of actions was wrong when using repo versioning

### Identity Access Manager
- Updated icon in active users table.
- Formated the result of cron with UTC 

### Platform
- Added option to resize columns in many tables
- Fixed active lang in header.


---
## Week 15

**Date:** 14/04/2022

### Data Manager
- Fixed edition of attribute name after creating it.

### Analytics Manager
*This component is currently released under open beta.*
- You can now run query by pressing cmd/ctrl + Enter in SQL mode.

### Data Processing Engine
- Fixed display error when start action/workflow.

### Machine Learning Manager
- You can now export your notebooks as DPE Custom Actions, MLM Estimators or MLM Scoring Functions.

### Identity Access Manager
- Fixed generate pwd when the username is empty.

### Platform
- New header.


---
## Week 14

**Date:** 07/04/2022

### Data Manager
- You can now activate *Directly Queryable* mode for supported sources: run SQL queries from the Analytics Manager on those sources without having to load their data into ForePaaS.

### Analytics Manager
*This component is currently released under open beta.*
- Added free-trial paywall for resources.

### Data Processing Engine
- Fixed display error when start action/workflow.
- Added max length to filenames.

### Platform
- Added in trial paywall when trying to update FPU in monitoring when free-trial mode.


---
## Week 13

**Date:** 29/03/2022 and 31/03/2022

### Platform
* Updated the home page of Dataplants: the Data Processing Engine is now located below the Data Manager instead of being to its left.
* Added new cookies management solution

### Data Manager
- Added a shortcut to create or upload a source.
- Updated style of storage engine status.
- Fixed long naming when table is created by drag and drop.
- Improved handling of small error from sentry report.

### Data Processing Engine
- Added a shortcut to create or upload a custom action.
- Updated the maximum value of the FPU slider for actions and workflows.

### Machine Learning Manager
- Updated the maximum value of the FPU slider for pipeline steps.

### Identity Access Manager
- Fixed the positions of the permissions modal filter

---
## Week 12

**Date:** 25/03/2022

### Platform
* FP Store
  * Added Japanese translations
  * Fixed search

### Analytics Manager

*This component is currently available under open beta release.*

* Fixed reactivity when activating Trino.
* Added API endpoints for exporting and importing AM configuration.
* Bug about updating chart configuration in Query fixed.

### Data Manager

* Fixed reactivity when changing default storage engine.
* Updated Clickhouse connector.
* Renamed MemSQL to Singlestore.

### App Manager

* Removed Owned and Not owned from categories
