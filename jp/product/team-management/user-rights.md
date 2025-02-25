# Manage user rights in your Organization

## Overview

The administrators of an Organization have all the rights on the DataPlant(s) they own. They can also manage a large range of rights for each non-admin user, at a very granular level.

This lets admins control their users' access according to each team member's job. This is super relevant when the team working on ForePaaS grows and it becomes important to define everyone's role and fine-tune their rights. 
  
To modify user rights inside an Organization, go to the toolbar on the top right of your screen, click on "My Organization", then navigate to the "Users" tab. You can access the list of users. Click on the edit pen to modify the rights of a given user. 

!> As an admin, you can only edit the "users" rights, not other "admins"

Rights can be managed for the following services:
* **Datacenter**: access to one or several clusters
* **Store**: rights on the Marketplace to buy, modify and remove packages or versions
* **DataPlant**: access to one or several DataPlants

**Regarding the Store**, you can manage rights on:
* **Packages** published in the Store
* Published **packages**' versions

**For DataPlants**, rights can be controlled for:
* The **DataPlants** themselves
* The **Domain Names** for the DataPlants

## Configuration

### Access rights options

The access rights include the following several options:
* **Read**: consult an existing item
* **Buy**: on the Store, lets the user buy new package or version
* **Update**: modify an existing item
* **Upgrade**: add additional resources to a DataPlant
* **Deploy**: ability to deploy new services
* **Create**: create a new item
* **Delete/Remove**: delete an item
* **Logs**: access the logs

The different access rights options differ for each service (Datacenter, Store, and DataPlant).

?> By default, rights are denied on the different modules, whether it is the Datacenter, Store or DataPlant.

### ACL (Access Control List) Rules

The accesses are defined by ACL rules. The rules can be configured in 2 ways:
* Directly from the graphical interface. Please note that rules (i.e. a line = a rule) are cumulative. In other words:
 * If the first rule limits all access but the second grants access to an object, the user will only have access to this object.
 * Conversely, if the first rule allows all access and the second one limits the access to a single object, the user will have access to all objects except the one specified.
* Through the rule editor (click on New rule to access it) to define a more personalized rule. 

![edit-user](picts/edit-user.png ':size=400')

### Rule editor

The Rule editor is a simple way to customize rules without too much complexity.
* Give a name to your rule, 
* Pick the effect (Deny / Allow),
* Choose the attributes:
 * For the Datacenter: one or all clusters
 * For the Store: one or all templates available
 * For the DataPlant: one or all templates
* Choose the action: update, delete, read, logs...
* Validate, your rule is good to go!

![new-rule](picts/new-rule.png ':size=400')