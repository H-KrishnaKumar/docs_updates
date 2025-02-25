# Notebooks

>**Please note:** This service is only available on the *Legacy ForePaaS Platform*.

Notebooks are a built-in integration of [Jupyter Notebooks](https://jupyter.org/) on ForePaaS. Coming with pre-loaded packages for data science, they allow you to perform non-real-time interactive statistical analysis and data visualization. Notebooks are highly connected to the rest of your Project, making it possible to read/write data in the Data Manager thanks to [our SDK](/en/technical/sdk/dpe/index) or convert your notebook code into a [Data Processing Engine action](/en/product/dpe/actions/index) or a [Machine Learning Manager pipeline](/en/product/ml/pipelines/index).

![notebooks](picts/jupyterlab.png)

* [Create and delete notebooks](/en/product/ml/notebooks/index.md?id=create-and-delete-notebooks)
* [Open a notebook](/en/product/ml/notebooks/index.md?id=open-a-notebook)
* [Edit the settings of a notebook](/en/product/ml/notebooks/index.md?id=edit-the-settings-of-a-notebook)
* [Export a notebook into ForePaaS](/en/product/ml/notebooks/index.md?id=export-a-notebook-into-forepaas)

---
## Create and delete notebooks

You can manage your **notebook instances** in the corresponding tab in the Machine Learning Manager. A notebook instance is a Jupyter environment with specific resources and dependencies.  

![notebooks](picts/main-page.png)

A notebook instance can contain several notebook documents, i.e. *.ipynb* files, which you can manage directly from the JupyterLab interface.

![notebooks](picts/jupyterlab-ipynb.png)

From the Notebooks home page, you can **create, work on, delete and edit the settings** of all your notebooks.

?> On the ForePaaS Platform, the word *notebook* is used to talk about notebook instances.

{Learn how to create a notebook}(#/en/product/ml/notebooks/create.md)

You can delete a notebook by clicking on the 🗑️ icon. Deleted notebooks cannot be recovered.

![notebooks](picts/delete.png)

---
## Open a notebook

Notebook instances are **automatically turned on** when you open them. 

The notebook instance will consume [all assigned FPU](/en/product/billing/resources/index) for the duration it is turned on. 

![notebooks](picts/turn-on.png)

You can manually turn off a notebook by clicking on the *Stop* button when it is active.

![notebooks](picts/turn-off.png)

To open a notebook, **double click** on it, or press the button shown below. This will open the notebook in a new JupyterLab window.

![notebooks](picts/open.png)

The [JupyterLab](https://jupyterlab.readthedocs.io/en/stable/) interface allows you to work on your notebooks with all the features provided by Jupyter, such as having multiple *.ipynb* files open at the same time, keyboard shortcuts, download and export options, and much more.

> Use the [ForePaaS SDK](/en/technical/sdk/dpe/index) to easily interact with the rest of your Project, typically to **import/process/export data** from and to your [Data Manager tables](/en/product/data-manager/tables/index).

![notebooks](picts/jupyterlab.png)

---
## Edit the settings of a notebook

To edit the settings of a notebook, click on the **gears** icon.

![notebooks](picts/edit.png)

You can edit the following options:
* [Edit dependencies](/en/product/ml/notebooks/index.md?id=edit-dependencies)
* [Edit resources](/en/product/ml/notebooks/index.md?id=edit-resources)

### Edit dependencies
You can edit the packages and dependencies of your notebook environment, including the Python version. The notebook will have to be restarted for any modification to be applied.

All notebooks have an [instance image](/en/product/ml/notebooks/create), which comes with some default packages and **Python 3.9**. You can specify additional dependencies by clicking on the **Add** button in the *Dependencies* panel.

![notebooks](picts/add-dep1.png)

Simply choose the type of dependency and enter the name of the package to install in the server, then press Enter.

![notebooks](picts/add-dep2.png)

You can add several packages at once by pressing *Enter* every time, like tags.

![notebooks](picts/add-dep3.png)

### Edit resources

This is where you can edit the [resources](/en/product/billing/resources/index) you want your notebook to use. The notebook will have to be restarted for any modification to be applied.

![notebooks](picts/resources.png)

---
## Export a notebook into ForePaaS

You can also export the entirety of the notebook's content to an object in ForePaaS. This will export all the code in your cells as it is and will turn any markdown cells into comments. 

?> Notebook exporting is only available with Python version 3.9.7. Please select that version on the notebook's settings, otherwise you won't be able to export your notebook.

There are three options regarding where to export your notebook to:
- [Custom Action](/en/product/dpe/actions/custom/index.md), in the Data Processing Engine.
- [Custom Estimator](/en/product/ml/pipelines/configure/training/custom-estimator.md), in the Machine Learning Manager.
- [Custom Scoring Function](/en/product/ml/pipelines/configure/training/validation.md?id=custom-scoring-function), in the Machine Learning Manager.

To export your notebook, open it and click on *File* and then on *ForePaaS export*. 

![export](picts/notebook_export.png)

This will open an export widget allowing you to choose between the three export options. Choose your preferred option and click on Next.
 
![export2](picts/notebook_export_options.png)

Choose the repository and the repository version where to export the notebook. If are not familiar with repositories, simply leave it at the *Default* repository with version *v1*.

![export3](picts/notebook_export4.png)

Then, you will be required to decide if you want to export to an existing object or create a new one. If you create a new one, you also have to choose the name and the framework to be used.

![export4](picts/notebook_export2.png)

Finally, click on confirm to export the notebook.


---
##  Need help? 🆘

> You didn't find what you were looking for on this page? You can ask for help by sending a request directly from the platform, going to the *Support* page. You can also send us an email at support@forepaas.com.

{Send your questions to support 🤔}(https://support.forepaas.com/hc/en-us/requests)