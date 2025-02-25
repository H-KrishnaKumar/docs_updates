# Update Metadata Action

The Update Metadata action is used to **update the metadata of the data model** stored either in the data warehouse or the datastore. It is strongly advised to run it at the end of the execution of a workflow which usually affects the data model. The metadata of the data model is used by other components to navigate the data model such as the [Analytics Manager](/en/product/am/index), or the [APIs](/en/product/api-manager/index).

When creating a new Update Metadata action, no configuration is required.

> Note that **the action can be quite intensive and run for a long time** if the size of your data warehouse is large. We therefore recommend running them once per workflow not systematically after each action, to optimize your execution runtime. 

