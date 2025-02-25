# Policy Tags

Policy tags allow fine-grained control over data access within your organization, enabling you to assign and manage permissions on datasets, tables, and attributes. This document will walk you through the process of creating and configuring policy tags to enforce access control policies effectively.

![LHM-policytags](picts/policytags-1.png)

## Table of Contents
1. [Introduction](#introduction)
2. [Working of Policy Tags](#working-of-policy-tags)
3. [Creating a New Policy Tag](#creating-a-new-policy-tag)
4. [Policy Tag Configuration](#policy-tag-configuration)
5. [Binding Policy Tags to Data](#binding-policy-tags-to-data)
    1. [Datasets](#datasets)
    2. [Tables](#tables)
6. [Granting Access](#granting-access)
7. [Testing Access Control](#testing-access-control)
8. [Troubleshooting and Common Errors](#troubleshooting-and-common-errors)
9. [Best Practices](#best-practices)

---

## Introduction

Policy tags allow you to set specific access levels on tables, attributes, or datasets. They help enforce data security by prioritizing the access levels of various components (e.g., tables, datasets).

A policy tag consists of two parts:
- **Key**: A unique identifier.
- **Value**: A key can have multiple values.

---

## Working of policy tags

Policy tags do not have fixed levels like *high*, *medium*, and *low* but instead prioritize based on assignment. The precedence of a policy tag is as follows:

1. **Attribute** *(Highest)*
2. **Table**
3. **Dataset** *(Lowest)*

### Example Scenario

Consider the table **chicago_calendar_full**, which has three policy tags—*sensitivity:low*, *sensitivity:medium*, and *sensitivity:high*. Other tables in the dataset have no assigned policy tags.

![LHM-policytags](picts/policytags-scenario.png)

- **User_A (sensitivity:low)**: Can access all tables except *chicago_calendar_full* because its policy tag takes precedence over the dataset tag.
- **User_B (sensitivity:low, medium)**: Can access all tables and *chicago_calendar_full*, but not the **bridge** attribute.
- **User_C (sensitivity:low, medium, high)**: Can access all tables and attributes within the dataset.

---

## Creating a new policy tag

To create a new policy tag, follow these steps:

1. Click on the **New Policy Tag** button.
2. Enter the **Key**, the first **Value**, and a **Description** for the policy tag.
3. Save the policy tag and review it in the list of available tags.

![LHM-policytags](picts/policytags-2.png)

![LHM-policytags](picts/policytags-3.png)

---

## Policy tag configuration

After creating the policy tag, you can configure it by adding more values or updating its description. Policy tags should be configured thoughtfully to match the security needs of the data.

![LHM-policytags](picts/policytags-4.png)

> You can also view the configuration menu for the required policy tag by clicking on the **Edit** button.

![LHM-policytags](picts/policytags-5.png)

---

## Binding policy tags to data

Policy tags can be bound to various data components:

### Datasets

1. Navigate to the **Datasets** section.
2. Select the dataset you want to apply the policy tag to.
3. Bind the appropriate policy tag to the dataset by selecting it from the available tags.

![LHM-policytags](picts/policytags-6.png)

![LHM-policytags](picts/policytags-7.png)

![LHM-policytags](picts/policytags-8.png)

### Tables

1. Navigate to the **Tables** section.
2. Select the table you want to apply the policy tag to.
3. Bind the policy tag to the table by following similar steps as for datasets.

![LHM-policytags](picts/policytags-9.png)

![LHM-policytags](picts/policytags-10.png)

![LHM-policytags](picts/policytags-11.png)

---

## Granting Access

To grant access based on policy tags:

1. Open the **Grant Access** menu.
2. Select the user to whom you want to grant access.
3. Assign the policy tag values (e.g., *sensitivity:high*) to the user.
4. Confirm and save the access settings.

> By default a user with no Advanced Data Access Control permission will not be able to read or write from/to any dataset/table. This can be verified in the [IAM](/en/product/iam/index.md) for the specific user.

![LHM-policytags](picts/grantaccess-1.png)

![LHM-policytags](picts/grantaccess-2.png)

![LHM-policytags](picts/grantaccess-3.png)

![LHM-policytags](picts/grantaccess-4.png) 

---

## Testing Access Control

To test this feature - we will be using the dataset which has the 3 tables created in the [getting-started tutorial](/en/getting-started/app-init/index.md) and the default policy tag **sensitivity**.

![LHM-policytags](picts/grantaccess-5.png)

Now assign the value **sensitivity**:*high* to the dataset and to the table *chicago_calendar_full* as shown and follow the steps above to grant access to this policy tag value to the user.

![LHM-policytags](picts/grantaccess-6.png)

> **Note:** We will not be binding policy tags to the other two tables in the dataset during this test.

Before we proceed, check the policy tag menu if the binding was successful for the dataset and table.

![LHM-policytags](picts/grantaccess-7.png)

For the next step of this test, the user we have given access to will need to open the [explorer](/en/product/lakehouse-manager/explorer/index.md) in SQL mode(can be done with the visual mode as well).

Simply copy-paste the SQL command below one by one to test the access control:

```
SHOW catalogs

```
The command above should show the list of catalogs the user has access to. The dataset we have given access to should be seen and shown below (the name will vary depending on the dataset).

![LHM-policytags](picts/showcatalogs.png) 

```
SELECT * FROM chicago_calendar_full

```
The command above should show the complete table *chicago_calendar_full*. This is possible because the user has been granted access to the policy tag which has been bound to this specific table.
![LHM-policytags](picts/selectchicago.png) 

```
SELECT * from stations_rides

```
The command above should return an error. This is because we have not bound the policy tag value **sensitivity**:*high* to the *stations_rides* table.
![LHM-policytags](picts/selectstationsrides.png) 

---

## Troubleshooting and Common Errors

If the user cannot access the expected data, check the following:
- Ensure that the correct policy tag is applied to both the dataset and the table.
- Verify that the user is granted the appropriate tag value.
- Check for precedence issues (e.g., attribute-level tags overriding dataset-level tags).

--- 

## Best Practices

- Use specific policy tags for sensitive data and ensure consistency across datasets and tables.
- Regularly audit policy tags to ensure they are up-to-date.
- Test access control thoroughly before granting access to new users

---

###  Need help? 🆘

> At any step, you can ask for support by reaching out to us on the Data Platform Channel within the [Discord Server](https://discord.com/channels/850031577277792286/1163465539981672559). you can also find a step by step guide towards joining our discord server in the [support](/en/support/index.md) section.