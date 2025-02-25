# Users, Groups and Roles

On Data Platform, the Identity Access Manager is used to manage the authentication and authorization of both the people who work on a Project and the people who consume data applications deployed. 

You can manage all the access rights for your users and teammates with a simple tool: [roles](/en/product/iam/users/roles.md). These roles are either permissions on certain data seen from applications for your end-users, or permissions to read or edit certain components of the Project for your teammates. 

Roles can be individually assigned to [users](/en/product/iam/users/users.md), which include both team members and application end-users. [Service accounts](#/en/product/iam/users/users.md) are a specific type of user that are not associated with physical persons but rather with non-human users such as servers or workloads.

Both users and service accounts can be part of [groups](/en/product/iam/users/groups.md). Groups are a way to quickly and efficiently assign a set of roles to all the users and service accounts that they contain.

?> Note that Service Accounts are only available in the Project IAM.


---
## Roles

Roles are the objects granted to principals that allow them to perform specific actions on resources or data.

Learn more about roles and how to manage them below.

{Manage roles}(#/en/product/iam/users/roles.md)


---
## Users

Users represent both:
- one of your team member working on a Project (a Project) and needing access to Project resources
- one of your end-users who has access to a data application deployed (a dashboard, a custom app, etc.), with a specific data access level

Learn more about users and how to manage them below.

{Manage users}(#/en/product/iam/users/users.md)


---
## Service accounts

Service accounts are a specific type of user that are not associated with physical persons but rather with non-human users such as API consumers, remote server access, scripts, and other automated entities. They **do not exist in the Organization IAM**, only in the Project IAM.

Learn more about service accounts and how to manage them below.

{Manage service accounts}(#/en/product/iam/users/service-accounts.md)


---
## Groups

Groups can contain multiple users and service accounts. They are a way to quickly and efficiently assign a set of roles to all the users and service accounts that they contain.

Learn more about groups and how to manage them below.

{Manage groups}(#/en/product/iam/users/groups.md)

---
##  Need help? 🆘

> At any step, you can create a ticket to raise an incident or if you need support at the [OVHcloud Help Centre](https://help.ovhcloud.com/csm/fr-home?id=csm_index). Additionally, you can ask for support by reaching out to us on the Data Platform Channel within the [Discord Server](https://discord.com/channels/850031577277792286/1163465539981672559). There is a step-by-step guide in the [support](/en/support/index.md) section.