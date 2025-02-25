# Actions

Actions are the core component of the Data Processing Engine. They can perform multiple data processing services, from loading your data into a table, to complex custom Python code.

![etl-interface-action](picts/actions-dashboard.png)

* [Create an action](/en/product/dpe/actions/index?id=create-an-action)
  * [Available action types](/en/product/dpe/actions/index?id=available-action-types)
  * [Advanced mode](/en/product/dpe/actions/index?id=advanced-mode)
* [Manage actions](/en/product/dpe/actions/index?id=manage-actions)
  * [Versioning repositories of actions](/en/product/dpe/actions/index?id=versioning-repositories-of-actions)
* [Use the platform version control system](#use-the-platform-version-control-system)
* [Using a repository linked to Git](#using-a-repository-linked-to-git)
  * [Linking a repository to Git](#linking-a-repository-to-git)
  * [Commiting and pushing](#committing-and-pushing)
  * [Pulling and merging](#pulling-and-merging)
  

---
## Create an action

When a repository is empty, the first thing you'd like to do is **create an action**. From the main page, click the *New action* button on the top right of the screen. You will then be prompted to choose the type of action you wish to perform from the [the platform Store](/en/product/dataplant/marketplace): 

![etl-tag-plan](picts/typeofactions.png)

> Note that editing actions is always on autosave mode. Use [versions](/en/product/dpe/actions/index?id=versioning-repositories-of-actions) if you don't want to tamper with your deployed production actions.

### Available action types

-	[Load](/en/product/dpe/actions/load/index): extract, map and load data from a data source to a [Lakehouse Manager table](/en/product/lakehouse-manager/tables/index). 
-	[Aggregate](/en/product/dpe/actions/aggregate/index): extract, transform and load data from a Lakehouse Manager table to another.
-	[Custom](/en/product/dpe/actions/custom/index): write your own Python code to extract, load, and transform data.
-	[Custom PySpark](/en/product/dpe/actions/custom-pyspark/index): write your own PySpark code to be executed on an Apache Spark cluster
-	[Predict](/en/product/dpe/actions/predict/index): use a model from the [Machine Learning Manager](/en/product/ml/index) to write predictions in a Lakehouse Manager table.
-	[Diff](/en/product/dpe/actions/diff/index): build a differential per date, meaning, divide data according to dates, if it is initially a sum on a given period of time.
-       [Delete](/en/product/dpe/actions/delete/index): delete an object entirely.
-	[Delete diff](/en/product/dpe/actions/delete_diff/index): delete entries that used to exist but don't anymore.
-	[Flush Project caches, and update metas](/en/product/dpe/actions/flush-update-metas/index): empty the intermediary caches of the platform, after adding/editing data.



### Advanced mode

Actions in the Data Processing Engine are all configured using a set of inputs specified via a JSON configuration file. There are 2 ways for users to update an action's inputs:

- either using the graphical user interface 
- or using an **advanced mode** which lets you directly edit the JSON configuration file

Using the "advanced mode" offers a bit more flexibility and options which might in handy for advanced users.

![advanced-mode](picts/advanced-mode.png)

> Note that the advanced mode is also very practical for [Custom actions](/en/product/dpe/actions/custom/index) as it offers an IDE-like experience in the web. This will allow you to code custom Python script directly inside of the platform without managing files locally on your computer.


---
## Manage actions

As your Project matures, structure and organization becomes increasingly important. To facilitate this, the Platform provides several methods to better organize and manage your actions:

-	[Repositories](/en/product/dpe/actions/index?id=versioning-repositories-of-actions): Allow compartmentalizing your actions into different sections that can be versioned

-	[Versions](/en/product/dpe/actions/index?id=versioning-repositories-of-actions): the platform offers an online versioning experience for each repository of actions individually. The platform has its own version control system, but you can also synchronize each repository with Git

-	**Descriptions & Tags**: Every action can be assigned a *description* and/or *tags*. This allows you to document your Project, particularly useful when collaborating in large teams.

-	**Lineage**: Every action contains a lineage sub-tab, accessible when editing an action. It displays every [workflow](/en/product/dpe/workflows/index) that contains the action. Workflows allow you to orchestrate the execution of multiple actions and launch them in a specific order using stages. 


### Versioning repositories of actions


Editing actions is always on autosave mode. When you are trying to iterate on existing actions, it is recommended to create several versions of the actions' code. This lets you incrementally introduce variations to experiment and test your work, while keeping the version in production always intact.

**On the platform, this versioning happens at the level of the repositories**. The repositories are the tabs you see at the top of the Actions' tree view.

![repos](picts/repos.png)

You cannot version an individual action, but rather a whole repository of actions. The versioning panel can be accessed at the top right of the repository header:

![etl-versioning](picts/versioning-panel.png)

?> This functionality is also available on other components that implement repositories, such as [Machine Learning Manager Pipelines](en/product/ml/pipelines/index.md). It works in the same way, just look for the equivalent UI elements in the Pipelines screen.

There are 2 versioning systems on the Platform:

- [the platform version control system](/en/product/dpe/actions/index?id=use-the-the-platform-version-control-system): the default versioning system on all repositories
- [Git versioning](/en/product/dpe/actions/index?id=use-a-repository-linked-to-git): if you decide to synchronize your repository with Git

Now let's see how all of this works in practice!


---
### Use the Platform Version Control System

By default, each repository of actions on the platform has an integrated version control system, allowing you to manually manage different versions of the code (i.e., actions) they contain.

Repositories now have:

- a **deployed version**, which is the version served when [executing the job](/en/product/dpe/jobs/index).
- a **latest version**, which is the current version being edited through the editor panel.

?> If your repository has *only one version*, that version is both the deployed and editable version, meaning changes affect production immediately.

If your repository has *two or more versions*, only the latest version can be edited. All other versions, including the deployed version, will be in read-only mode.

To create a new version for the repository, open the versioning panel at the top right and click on the **+** icon.

![etl-versioning](picts/versioning-fp1.png)

Choose which version to duplicate to create the new version.

![etl-versioning](picts/versioning-fp2.png)

After creating the new version, the *deployed version* will not change. You are able to edit the new version directly.

![etl-versioning](picts/versioning-fp3.png)

Click on the **Play** button to set a new version as the deployed version: the version of the code used when actions of the repo are executed.

![etl-versioning](picts/versioning-fp4.png)


### Use a repository linked to Git

Each repository can be linked to an external Git repository in which case versions are synced with Git commits. This allows you to update & test actions continuously without affecting the version deployed in production.

#### Linking a repository to Git

To link your repository on the platform to Git, you must click on the gear icon to edit an existing repository or create a new a one. Either of this actions will open the repository configuration window.

![img1](picts/repository_configuration_window.png)

Click on *Connect to Git* to expand the window.

![img1](picts/repository_configuration_full.png)

Here the first thing you need to enter is the Repository SSH URL. 

It is generally found on repository cloning options of common Git solutions. On GitHUB, for instance, it can be found on Code > Clone > SSH.

![github](picts/github.png)

Next click on *FETCH* to get the distant branches and select the branch you desire to use.

Finally, copy the Public SSH key given at the bottom and paste it in the list of SSH keys associated to your account on your Git solution. For GitHUB, you can follow [this tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

#### Committing and pushing

After changing an object in a repo, your repo will display the uncommitted changes as shown in the image below. You can commit and push them by clicking on the arrow pointing upwards indicated in the image.

![commit](picts/commit_push.png)

?> If there is a conflict when you push, your changes will not be pushed to the branch you configured, instead they will be pushed to a new branch with same name of the current branch and a suffix of *_conflictN*, where N is the number of the conflict. For example, if your branch is named *current-branch* and your push causes a conflict, the new branch will be named *current-branch_conflict1*. If there is a conflict again when you push, the new branch will be named *current-branch_conflict2*.

#### Pulling and merging

Pull distant changes by clicking on the arrow pointing downwards indicated in the image, a popup window will prompt you to confirm your decision. All uncommitted changes will be lost and both branches will be merged together.

![pull](picts/pull_merge.png)

---
###  Need help? 🆘

> At any step, you can create a ticket to raise an incident or if you need support at the [OVHcloud Help Centre](https://help.ovhcloud.com/csm/fr-home?id=csm_index). Additionally, you can ask for support by reaching out to us on the Data Platform Channel within the [Discord Server](https://discord.com/channels/850031577277792286/1163465539981672559). There is a step-by-step guide in the [support](/en/support/index.md) section.