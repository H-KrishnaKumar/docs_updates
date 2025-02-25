# Typical query errors

!> This article is a work in progress.

Working with pre-configured queries with live data coming into the database means it can sometimes be unpredictable. Depending on how your data is being processed, queries can return different types of errors:

* **Error 400**: The database is still available and the query format is valid but the Query Builder component was unable to return a valid output.
* **Error 500**: The database or Query Builder component are down, or were disconnected.

---
## Error 400 Types

We've categorized the different types of error 400 to help users handle the different cases in the final application. Depending on the error type you might want to encourage you final end-user to take different actions:
* **NO_TABLE**: Corresponds to when the table_name set in query but does not exists
* **NO_TABLE_FOUND**: Corresponds to when the table_name set in query but does not exists
* **EMPTY_TABLE**: Corresponds to when the table_name is set but the table is empty
* **EMPTY_TABLES**: Corresponds to when all table found with the algo are empty
* **ERROR**: Any other errors such as if the attribute requested doesn't not exist or is not found in a specific table.

---
## Error 500 Types

Error 500 are fairly common and can happen mainly for gateway or server accessibility issues. You might be given specific information if available to help you resolve the issue, such as:
* Too many connections
* Maximum failed queries due to connection reached
* Unexpected end of stream

In these cases, the best way is too retry the query or reload the page (by refreshing the browser or pressing *F5*). If the error persist, please [contact support](https://help.ovhcloud.com/csm/fr-home?id=csm_index).

---
## Need help? 🆘

> At any step, you can create a ticket to raise an incident or if you need support at the [OVHcloud Help Centre](https://help.ovhcloud.com/csm/fr-home?id=csm_index). Additionally, you can ask for support by reaching out to us on the Data Platform Channel within the [Discord Server](https://discord.com/channels/850031577277792286/1163465539981672559). There is a step-by-step guide in the [support](/en/support/index.md) section.