# Notebooks

Notebooks are a built-in integration of [Jupyter Notebooks](https://jupyter.org/) on Data Platform. Coming with pre-loaded packages for data science, they allow you to perform non-real-time interactive statistical analysis and data visualization. Notebooks are highly connected to the rest of your Project, making it possible to read/write data in the Lakehouse Manager thanks to [our SDK](/en/technical/sdk/dpe/index) or convert your notebook code into a [Data Processing Engine](/en/product/dpe/index) action.

![notebooks](picts/jupyterlab.png)

* [Create a Notebook](#create-a-notebookcreate-a-notebook)
  * [Notebook Dependencies](#notebook-dependencies)
  * [Types of Dependencies](#types-of-dependencies)
* [Notebook Resources](#notebook-resources)
* [Open a Notebook](#open-a-notebook)
* [Export a Notebook as custom action](#export-a-notebook-as-custom-action)

---
## Create a Notebook

To create a notebook instance, head to the **Notebook** section of the [Data Processing Engine](/en/product/dpe/index.md).

![notebooks](picts/main-page.png)

To get started, click on **New notebook** in the top-right.

![notebooks](picts/create1.png)

You have to choose a [container image](https://jupyter-docker-stacks.readthedocs.io/en/latest/using/selecting.html) for your Jupyter environment, i.e. the set of packages and dependencies you want to have for your new notebook. Data Platform features two ready-to-run images which contain the most popular libraries for data analysis and data science. 

- **Base Notebook:** Provides a clean Python 3.9 environment with no pre-installed scientific packages, ideal for a minimal setup where you install your own specific packages.

- **PySpark Notebook:** Designed for data science and big data tasks, including Python 3.9, popular libraries (pandas, numpy, scikit-learn, etc.), Apache Spark, and additional utilities.

Choose the notebook that best fits your project’s needs. Once you've made your selection, your notebook will be ready to use.

>  If you are new to creating notebooks, we recommend starting with a **Base notebook**. This provides a clean, lightweight Python installation with minimal dependencies, allowing you to install only the specific packages you need.

![notebooks](picts/create2.png)

You can then configure your notebook further before it is created. Once you press **Create**, the server for the notebook will be initialized with its specific environment and dedicated computing resources.

![notebooks](picts/create3.png)

1. **Notebook Name Field** – Enter the name of the new notebook.
2. **Add Dependencies** – Click this button to add additional dependencies for the notebook.
3. **Instance Size Selection** – Choose the required instance size (DPU) for the notebook.
4. **Create Button** – Click this to create the new notebook after filling in the details.

The two main aspects to configure are:
* [Dependencies](/en/product/dpe/notebooks/create.md?id=notebook-dependencies)
* [Instance Size](/en/product/dpe/notebooks/create.md?id=notebook-resources)

---
## Notebook Dependencies

Your notebook's image already comes with some default packages, which you can check in the image description in the marketplace. 

![notebooks](picts/scipy-notebook.png)

You can specify additional dependencies by clicking on the **Add** button in the *Dependencies* panel.

![notebooks](picts/add-dep1.png)

Simply choose the type of dependency and enter the name of the package to install in the server.

![notebooks](picts/add-dep2.png)

You can add several packages at once by pressing *Enter* every time, like tags.

![notebooks](picts/add-dep3.png)

### Types of Dependencies

There are two types of dependencies:
- **Python dependencies:** You can install any package, such as pandas or numpy.
- **Data Platform dependencies:** You can choose from a list of available packages managed by the Data Platform.

You can only use one type of dependency per notebook instance. Mixing both types within the same notebook is not allowed.

!> **Important:** If you attempt to add or modify dependencies while a notebook is running, these changes will not take effect immediately. You must restart the notebook for the new dependencies to be applied. To restart, click the 'Stop' button to shut down the notebook instance, and then click 'Start' to relaunch it with the updated dependencies. Any unsaved work may be lost during this restart process, so be sure to save your work beforehand.

---
## Notebook Resources

Check out the dedicated sections to learn how to configure your new notebook’s resources before confirming the creation of the notebook.

{Configure a notebook's resources}(#/en/product/en/notebooks/index.md?id=edit-resources)

---

## Open a Notebook  

Notebook instances are **automatically turned on** when you open them.  

The notebook instance will consume [all assigned DPU](/en/product/billing/resources/index) for the duration it is turned on.  

![notebooks](picts/turn-on.png)  

You can manually turn off a notebook by clicking on the *Stop* button when it is active.  

![notebooks](picts/turn-off.png)  

To open a notebook, **double-click** on it or press the button shown below. This will open the notebook in a new JupyterLab window.  

![notebooks](picts/open.png)  

Starting up a notebook might take anywhere between **3-5 minutes**, and up to **10 minutes** for the first time.  

The [JupyterLab](https://jupyterlab.readthedocs.io/en/stable/) interface allows you to work on your notebooks with all the features provided by Jupyter, such as having multiple *.ipynb* files open at the same time, keyboard shortcuts, download and export options, and much more.  

> Use the Data Platform SDK to easily interact with the rest of your Project, typically to **import/process/export data** from and to your [Lakehouse Manager tables](/en/product/lakehouse-manager/tables/index).  

![notebooks](picts/jupyterlab.png)

---

## Export a Notebook as a Custom Action

You can export the entirety of a notebook’s content to a custom action in the **Data Platforms' Data Processing engine**. This will export all the code in your cells as it is and will turn any markdown cells into comments.

?> **Notebook exporting is only available with Python version 3.9.7.** Please select that version in the notebook's settings, otherwise, you won't be able to export your notebook.

### Steps to Export a Notebook

1.  Open the notebook you want to export.
2.  Click on **File** and then **Export to Data Platform**. You can also right-click on the file you want to export directly and then click on **Export to Data Platform**.

    ![export](picts/notebook_export_1.png)

    ![export](picts/notebook_export_2.png)

3.  This will open an export widget.

    ![export2](picts/notebook_export_options.png)

4.  Choose the repository and the repository version where you want to export the notebook. If you are not familiar with repositories, simply leave it at the *Default* repository with version *v1*.

5.  Decide whether to export to an existing object or create a new one. If you create a new one, you also have to choose the name and the framework to be used. You can select either **Custom** or **Custom PySpark** as the framework.

    ![export4](picts/notebook_export_3.png)

    ![export3](picts/notebook_export_4.png)

6.  Click on **Confirm** to export the notebook.

    ![export3](picts/notebook_export_5.png)

![export3](picts/notebook_export_6.png)   

After clicking *Confirm*, the export process begins. Please note that it takes a short time, typically about a minute, for the custom action to fully initialize and become available within the Data Processing engine. Therefore, we recommend waiting a moment after the export completes before clicking the **see export in the data platform** button to ensure everything has loaded correctly. This will allow you to seamlessly view and work with your newly exported custom action.

---

### Need help? 🆘

> If you are logging-in with an OVHcloud account, you can create a ticket to raise an incident or if you need support at the [OVHcloud Help Centre](https://help.ovhcloud.com/csm/fr-home?id=csm_index). Additionally, you can ask for support by reaching out to us on the Data Platform Channel within the [Discord Server](https://discord.com/channels/850031577277792286/1163465539981672559). There is a step-by-step guide in the [support](/en/support/index.md) section.