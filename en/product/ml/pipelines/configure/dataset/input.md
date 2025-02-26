# Dataset generation

The dataset generation consists in **choosing an data input** and then **splitting that data into a train and a test dataset**. When doing production-level AI, this split occurs continually over time as new [Dataset Generation jobs](en/product/ml/pipelines/execute/index.md?id=dataset-generation-jobs) are launched (manually or through triggers). 

---
## Choose a data input

ForePaaS supports several input types:

* [Data Manager Tables](en/product/ml/pipelines/configure/dataset/input.md?id=tables)
* [Buckets](en/product/ml/pipelines/configure/dataset/input.md?id=pictures-from-buckets)

> We are working hard to add more integrations to ML pipelines. If we are missing something critical for your Project, please reach out and drop us a line on [our Roadmap Portal](https://hq.forepaas.io/#/features)! 💡

### Tables

The *Tables* input type lets you choose from the **tables in your Data Manager**. You can choose from raw, prim and mart tables.

![machinelearning](picts/input-tables.png)


### Pictures from buckets

The *Pictures from buckets* input type lets you choose from the [buckets in your Data Manager](/en/product/data-manager/buckets/index). This makes it the perfect choice to work with unstructured data, especially pictures.

?> This input type currently only accepts files with EXIF data and files that are considered as an image by [the pillow library](https://pillow.readthedocs.io/en/5.1.x/handbook/image-file-formats.html).

To enable unstructured data training, the images must first be uploaded to the [Data Manager's buckets](/en/product/data-manager/buckets/index) in **a folder named after each class**. Using the [Cats and Dogs](https://www.tensorflow.org/datasets/catalog/cats_vs_dogs) image classification dataset as an example, the images will be uploaded into two folders in a bucket. One named `cats` (so that the path is *cats/my_images.jpg*) the other `dogs` (so that the path is *dogs/my_images.jpg*). 

![machinelearning](picts/custom-keras-classes2.png)

![machinelearning](picts/custom-keras-classes.png)


---
## Train-test split

After choosing an origin for your data, you need to make it usable by machine learning algorithms by splitting it into a training and a testing set. The nature of the sets depends on whether you are working with structured *(in which case it will be tables of data)* or unstructured data *(in which case it will be filepaths)*.

?> **Training set**: Sample of data used to fit (i.e. train) the model.  
 **Testing set**: Independent sample of data used to provide an unbiased assessment of a fully trained model. Training and testing sets must remain disjoint over time.

> On ForePaaS, training and testing sets are modeled and stored as [ML tables in the Data Manager](/en/product/data-manager/tables/index).

In a pipeline, you can choose to use either [the same source](en/product/ml/pipelines/configure/dataset/input.md?id=use-the-same-source) or [two separate sources](en/product/ml/pipelines/configure/dataset/input.md?id=use-different-sources) for your training and testing datasets. 

### Use the same source

Under Training, select the desired data source.

![machinelearning](picts/training-set.png)

Then activate the **link 🔗 icon** in between Training and Testing to use the same source for your training and testing sets.

![machinelearning](picts/training-set2.png)

The next step is to decide how to split the data between Training and Testing. Use the slider to choose the share of data points amount (rows for Tables, files for Buckets, etc.) that each set should have **at the end** of the [Dataset Generation job](en/product/ml/pipelines/execute/index.md?id=dataset-generation-jobs).

![machinelearning](picts/training-set3.png)

You can also control the method used to execute the split in the Data Set panel with the **Split Type** option. *Random* will assign each entering data point randomly in either the training or testing set so that the desired train-test ratio is respected. Specifying a **seed** for the pseudo-randomization will enable you to reproduce randomness. 

!> Remember that data points cannot be individually removed from a testing ML dataset even if they are removed from your source. You have the option to manually reset your ML datasets in your [pipeline preferences](en/product/ml/pipelines/execute/preferences.md?id=reset-datasets).


### Use different sources

Under Training, select the desired data source.

![machinelearning](picts/training-set.png)

Make sure to turn off the **link 🔗 icon** in between Training and Testing to use the same source for your training and testing sets.

![machinelearning](picts/training-set4.png)

Under Testing, select the desired data source.

![machinelearning](picts/training-set5.png)

> With different sources you don't need to specify a train-test-split method since the split is already done! Each entering data point will be assigned accordingly either to the training or the testing set.

!> Remember that data points cannot be individually removed from a testing ML dataset even if they are removed from your input. You have the option to manually reset your ML datasets in your [pipeline preferences](en/product/ml/pipelines/execute/preferences.md?id=reset-datasets).

After specifying the rows of your datasets, you need to specify their columns.

{Select your model's features}(#/en/product/ml/pipelines/configure/dataset/features.md)

---
###  Need help? 🆘

> If you are logging-in with an OVHcloud account, you can create a ticket to raise an incident or if you need support at the [OVHcloud Help Centre](https://help.ovhcloud.com/csm/fr-home?id=csm_index). Additionally, you can ask for support by reaching out to us on the Data Platform Channel within the [Discord Server](https://discord.com/channels/850031577277792286/1163465539981672559). There is a step-by-step guide in the [support](/en/support/index.md).