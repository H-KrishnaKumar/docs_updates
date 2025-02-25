# Creating Event Handling Actions

In this article we will go through the steps 🚶required to **create an action that allows you to handle events**. This can be applied to trigger actions or workflows defined in your Data Processing Engine with a body of data outside of the platform.

---
## Event Handling Table

We usually recommend that when actions are called by an external event, the event call is archived for reference in your project. In this article we will use an example table in our data model called *event_handle*

* **Table Name**: event_handle
* **Table Description**: the table contains 4 attributes to store the content of the event.

|Attribute Name | Type| Example value|
|---------|----------|----------|
|**event_id** | Number| 38123461|
|**event_name** | String| Rebecca |
|**event_content** | String| Walked in the store|
|**date** | Date| 2020-05-21 11:34:23 PM|

!> Note that the names provided in this example both for the table, its attributes as well as all the other object names below (for the action or functions) are **examples**. You can obviously choose to name your objects differently, just make sure that you update the subsequent code section which references the different objects.

Generally speaking this is a good best practice to set-up if you're planning on creating custom actions which handle events because you will use it to archive all triggered events. To create such a table, head to the *Lakehouse Manager* component, create a table with attributes following the ones outlined in the table above.

{Creating a data model in the Lakehouse Manager}(#/en/product/lakehouse-manager/index.md)

---
## Event Handling Action Set-up

To create your custom action, head to the *Data Processing Engine* component and create a new custom action and enter the **action name** as *Event handle*. The sample Python code provided below shows how to manage the body of the event when the action is triggered outside of the platform, typically via API endpoint.

In the custom action configuration, change the **function name** (which specifies which Python function is the main function to run) to *event_handle*. Finally, copy & paste 💾 the following code sample in the custom code editor:

```python
import logging
import pandas as pd
from datetime import datetime
from forepaas.dwh import bulk_insert
from forepaas.dwh import connect

logger = logging.getLogger(__name__)

def event_handle(event):
    logger.info(f"Start inserting event to data_prim/event_handle")
    logger.info(f"event_type = {event.type}, number of rows = {len(event.content)}")
    if type(event.content) is not list:
        raise Exception("When playing this action you need to send rows")

    # Create dataframe
    df = pd.DataFrame(event.content)
    df["date"] = datetime.now().strftime("%Y-%m-%d")

    # Connect to destination database and insert dataframe to table
    destination = connect("dwh/data_prim/")
    stats, error = bulk_insert(destination, "event_handle", df)

    logger.info(f"End insert of event: stats={stats}, error={error}")

```
> Note that if you're more confortable in an IDE-like interface, click on the *Advanced* mode on top of the page to switch to the online code editor. You will be able to update the raw source code of the action in the Python script and all its configuration in the JSON file.

---
## Launching Actions and Workflows

Now that you know how to handle the incoming event information when an action is launched externally, let's look at how to set-up the trigger events. This will enable you to start a job of an action or workflow programmatically.

### Required Parameters

**There 3 parameters required to launch a job which you obviously need to set with respect to your own environment configuration**. All the parameters are outlined in the code samples using {} brackets like {subdomain}.

|Parameter name | Value | Example|
---------|----------|----------
|subdomain | Project subdomain | test |
|action_id | Unique reference of your action | 5eaf0db7f6f51d5255974217|
|token | Authentication token | xxxxx|

#### Project Subdomain

To retrieve your project subdomain, simply look-up your project URL. For instance if you copy paste the URL when you have the DPE component open it should look like this:
```
https://{project_subdomain}.eu.dataplatform.ovh.net/dpe/#/
```
The subdomain is the **first reference in the path of your project's URL**.

#### Action ID or Workflow ID

To retrieve the action ID of the action you want to start, you can also find it in your action's URL when editing it. To do that, click *edit* on the action you want to trigger, the URL should look like this:
```
# Action's URL
https://{project_subdomain}.eu.dataplatform.ovh.net/dpe/#/action/{action_id}

# Workflow's URL
https://{project_subdomain}.eu.dataplatform.ovh.net/dpe/#/workflow/{workflow_id}
```

#### Authentication Token

To generate an authentication token, you will first need to create a specific API & secret key from the *Identity Access Manager* component. To learn how to do that, check-out this dedicated article:

{Creating an API / Secret Key}(#/en/product/iam/users/api-secret-key.md)

### Code samples

<!-- tabs:start -->
#### **cURL**
```cURL
curl --request POST \
  --url 'https://{subdomain}.eu.dataplatform.ovh.net/dpe/v3/actions/{action_id}/start?app_id=55c1423560702d6426490f38&type=cam&token={token}' \
  --header 'content-type: application/json' \
  --data '[
	{
		"event_name": "Rebecca",
		"event_id": 1,
		"event_content": "imperdiet ornare."
	},
	{
		"event_name": "Veronica",
		"event_id": 2,
		"event_content": "Nullam ut nisi a odio"
	},
	{
		"event_name": "Aurelia",
		"event_id": 3,
		"event_content": "amet"
	},
	{
		"event_name": "Yardley",
		"event_id": 4,
		"event_content": "ornare placerat, orci lacus vestibulum"
	},
	{
		"event_name": "Dakota",
		"event_id": 5,
		"event_content": "nulla. Cras eu tellus eu"
	}
]'
```

#### **Python 3+**
```python
import requests

url = "https://{subdomain}.eu.dataplatform.ovh.net/dpe/v3/actions/{action_id}/start"
querystring = {
  "app_id":"55c1423560702d6426490f38",
  "type":"cam",
  "token":"{token}"
}
payload = [
  {
    "event_name": "Rebecca",
    "event_id": 1,
    "event_content": "imperdiet ornare."
  },
  {
    "event_name": "Veronica",
    "event_id": 2,
    "event_content": "Nullam ut nisi a odio"
  },
  {
    "event_name": "Aurelia",
    "event_id": 3,
    "event_content": "amet"
  },
  {
    "event_name": "Yardley",
    "event_id": 4,
    "event_content": "ornare placerat, orci lacus vestibulum"
  },
  {
    "event_name": "Dakota",
    "event_id": 5,
    "event_content": "nulla. Cras eu tellus eu"
  }
]

response = requests.request("POST", url, params=querystring, json=payload) 
print(response.text)
```
<!-- tabs:end -->

> Note that **workflows and actions can be equally triggered using the same process**. To use the data sent as part of the call, make sure the workflow contains a handling event action. Also, make sure to **use the right URL for workflows** (see section on Action or Workflow ID).

---

We hope this article was useful! Let us know if you have any questions or would like to suggest an improvement.

> If you are logging-in with an OVHcloud account, you can create a ticket to raise an incident or if you need support at the [OVHcloud Help Centre](https://help.ovhcloud.com/csm/fr-home?id=csm_index). Additionally, you can ask for support by reaching out to us on the Data Platform Channel within the [Discord Server](https://discord.com/channels/850031577277792286/1163465539981672559). There is a step-by-step guide in the [support](/en/support/index.md).