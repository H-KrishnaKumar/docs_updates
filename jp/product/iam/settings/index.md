# Settings

!> Uh-oh! It seems this page contains outdated information. Please reach out to our support team if you need help with anything. 

The IAM integrates all the components and functionalities necessary to manage the users of the applications created on ForePaaS.

Once your first applications are created, the IAM is the place to control the authentication modes and different access rights of your end users.

In this guide, you will find the main steps to take control of your IAM.

## Principles

The IAM will be useful to :
* Manage Access Control Lists (ACLs), ie access rights to the data
* Configure authentication modes via SSOs

---

## Invite your first users and create ACLs

ACL can be managed at 2 levels:
* User
* Group

### Groups

Groups are particularly relevant for managing access rights for an entire business department, or a country team for example.

In the group creation screen, you will define:
* A name for your group
* One or more ACLs to control access to requests on given fields and values  from the resource provider, in this case the Query Builder
* Permissions to access different applications or dropzones created on ForePaaS

{Learn more about ACL for groups}(#/jp/product/iam/configuration/acl.md)

You can also manage ACL and permissions from a user. To be noted, ACL defined are cumulative. 

### Users

To manage your users on a case-by-case basis, go to the Users tab.

Just add the email, name, first name and id of the user you want to invite to collaborate on the app. Later, you can define the user's information more precisely, by assigning him a special role in the IAM (User / Admin / Super Admin) or by including him in a group to centralize rights management.

---

## Set up authentication modes

### Authentication provider

Then configure the access authentication modes for your applications, that is, the addition and configuration of your external directories.

Go to the "Auth. Provider" tab. It is from this interface that you will be able to add a new authentication mode and view your authentication services once they have been configured.

Each authentication provider may require a specific configuration.
{Learn more about Azure authentication}(#/jp/product/iam/auth-provider/azure_ad.md)

These authentication modes are defined for all the applications in your DataPlant. To set different types of authentication for your applications, go to the Applications tab.

### Applications

As soon as an application is created in the ForePaaS APP Manager, it automatically appears in this tab. You can :

* Add an authentication mode for the app from those defined in the Auth tab. Provider
* Enable / disable authentication mode
* Make it invisible, which is useful when you want to allow easy access to your users while keeping access to a support team.

### Global configuration

The Config tab allows you to adjust in a few clicks all the parameters related to the access and the security of your application.

This tab allows you to go into the details of your configuration, for example by defining:
* The maximum number of sessions,
* Rules in case of problems during authentication,
* Policies regarding your users' passwords,
* Contact addresses allowing you to send emails related to the use of the application,
* Or the models of these emails.