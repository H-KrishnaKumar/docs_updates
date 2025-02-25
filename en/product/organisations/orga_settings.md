# Organization settings

To open the settings of an organization, navigate to the top right of the screen and hover over the **gear ⚙️ icon**. Click on **Manage organization settings**. 

![Org Details](picts/goToOrganization2.png)

---
## Overview

Landing on your organization dashboard, you have access in the blink of an eye to the main information of your organization on the platform: 
- Number of members and admins
- Projects activity
- Resource consumption

You can also see the main metrics usage of your Project(s).

![Organization Dashboard](picts/organization_dashboard.png)

---
## Members (DEPRECATED)

This page has been deprecated and organization members (also known as team-members) are now managed at the [Organization IAM Users](/en/product/iam/orga-iam/index.md) tab.

!> Note that these are your organization's members, which are different from the Project's users you'll find in the Identity Access Manager (IAM). 

{Manage organization members}(#/en/product/iam/users/users?id=manage-organization-iam-users.md)

{Manage Project users in the IAM}(#/en/product/iam/users/index.md)


---
## Projects
The Projects tab gives you an overview and direct access to all the [Projects](en/product/project/index) created inside the organization you're currently in. 


---
## Storage
The Storage tab gives you an overview and direct access to all the **storage engines** that have been added in your organization.

{Learn more about storage engines}(/#/en/product/project/storage-engine/index)

![Projects](picts/organization-storage.png)

---
## Quotas

?> This feature is coming soon!

Quotas are restrictions that are set automatically for all organizations. They constitute safeguards against accidental over-consumption and are imposed by all cloud providers.  
Think of them as an equivalent of the quotas your bank can impose on the maximum withdrawal or payment amount per week.  


> You cannot modify quotas by yourself. To do so, submit your request on the quotas page. An expert will get back to you shortly!

---
## Plan
The Plan tab is where you can **manage your subscription plan**. It shows all the features included in your current plan, as well as the option to upgrade it.  

- In *Billing*, you can get the details of your next invoice with a breakdown of the month-to-date balance per cost category.
- In *Receipts*, you can download past invoices as PDFs.

{Learn more about billing and pricing}(#/en/product/billing/index.md)

---
## Settings

The Settings tab is the place where you'll manage:  

**Basic information** about your organization: name, description, multi-factor authentication requirements, and plan cancellation. This is also where you can manage the option to let users with the same email domain as people in your organization to request to join it.

When *Force multi-factor authentication* is enabled, organization's members will need to go through a second authentication method whenever they try to sign in to the platform using their account login/password.

**Infrastructure** options: domain name and certificates. You can customize domain names for your applications deployed on the platform, and create SSH certificates to access your secure domain names.
Adding your certificate, you'll need a server certificate (.crt file) or key (.key).



