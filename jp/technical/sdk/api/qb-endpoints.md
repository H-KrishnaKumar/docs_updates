# Front API Basic Endpoints

Here are the list of basic endpoints that comes with the default Front API


///

## _GET_ /refresh
Flush the cache

:::

**Responses**

| Code | Description |
| ---- |:----------- |
| 200 | A simple success `true` message |

///

///

## _GET_ /qb/dataset
Retrieves the dataset from Query Builder

:::
**Responses**

| Code | Description |
| ---- |:----------- |
| 200  | The dataset from the query builder |

///


///

## _POST_ /qb/query
Make a query from a query builder JSON request

:::

**Responses**

| Code | Description |
| ---- |:----------- |
| 200 | A result from the query builder |

///



///

## _GET_ /webstorage/`{key}`
Retrieves a value for a key in the webstorage

:::

**Parameters**

| Name | Located in | Description | Required | Schema |
|:---- |:---------- |:----------- |:-------- |:---- |
| key | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The content |
| 404 | Key not found |

///

///

## _PUT_ /webstorage/`{key}`
Puts a value from the body of the request to a key in the webstorage

:::

**Parameters**

| Name | Located in | Description | Required | Schema |
|:---- |:---------- |:----------- |:-------- |:---- |
| key | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The new content |

///

///

## _DELETE_ /webstorage/`{key}`

Removes a value for a specific key in webstorage

:::

**Parameters**

| Name | Located in | Description | Required | Schema |
|:---- |:---------- |:----------- |:-------- |:---- |
| key | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The previous content |
| 404 | Key not found |

///
