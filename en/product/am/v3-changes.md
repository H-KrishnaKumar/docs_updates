# Version 3.0 Changes (2022-01-11)

The [Analytics Manager](/en/product/am/index) is the name of version 3 of the [Query Builder](/en/product/query-builder/index) on the Platform. This page lists all significant changes.

- [1. Dataset tab](/en/product/am/v3-changes?id=_1-dataset-tab) 
- [2. New queries](/en/product/am/v3-changes?id=_2-new-queries)
- [3. What happens to my existing queries?](/en/product/am/v3-changes?id=_3-what-happens-to-my-existing-queries)
- [4. Versioning of queries](/en/product/am/v3-changes?id=_4-versioning-of-queries)
- [5. Query engines](/en/product/am/v3-changes?id=_5-query-engines)

---
## 1. Dataset tab

The [dataset](/en/product/query-builder/dataset) tab from the classic Query Builder no longer exists in the Analytics Manager. All the information about tables names and number of rows are now found in the **[tables](/en/product/data-manager/tables/index) page of the [Data Manager](/en/product/data-manager/index)**. 

---
## 2. New queries

In the Analytics Manager, it is possible to create and run queries in any of two ways:
- Using a [visual point-and-click builder](/en/product/am/queries/visual): the interface has been revamped for a much more comfortable use, namely the addition of an Order section to sort your results!
- Using [SQL](/en/product/am/queries/sql): new, directly query your tables in SQL!

---
## 3. What happens to my existing queries?

Queries that were created in the classic Query Builder will be migrated to the new Analytics Manager, into the [queries](/en/product/am/queries/index) tab. 

If applicable, they will still be linked to your [apps](/en/product/app-manager/index) through the same *request_id*, without needing to change anything. 

Please note that the new Analytics Manager interface **doesn’t allow** for editing [advanced JSON parameters](/en/product/query-builder/queries/advanced-mode) anymore. As such, [such advanced options](/en/product/query-builder/queries/parameters/index?id=parameter-list) that were added in your queries in the classic Query Builder will not be editable in the new Analytics Manager. However, the migrated queries will still be saved with them and as such will **return the same result** as in the classic Query Builder upon execution. 

---
## 4. Versioning of queries

Queries are now versioned at the [repository](/en/product/am/queries/index?id=versioning-queries) level, instead of at the query level like in the classic Query Builder. 

Use the **the platform versioning system** to manage production and development frameworks, and work on your analytics without breaking your deployed applications.

---
## 5. Query engines

It is now possible to activate a [query engine](/en/product/am/resources) in the Analytics Manager. 

Query engines allow you to **scale your queries both vertically and horizontally**, especially for Big Data analytics, and give you access to unique new features: SQL querying, query history, query execution metrics, fine-grained data access control (*coming soon!*), and more.

---
## Need help? 🆘

> Have a question about the migration or the new version? Feel free to reach out to us by sending us a request via *Support* on the Platform and we'll make sure to help you out with the best solution 😊  

{You can even send your questions directly by clicking here 👨🏻‍💻}(mailto:support.forepaas.com)
