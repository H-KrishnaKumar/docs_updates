# Scale pipelines

The ForePaaS Platform is designed to scale easily as the requirements of your data Project evolve. 

In the Machine Learning Manager, each individual pipeline can be **scaled vertically**, meaning you can add more computing power to each job indefinitely. *Dataset generation* jobs can also be **scaled horizontally**, by splitting the workload on multiple parallel instances. 

?> For the moment, it is not possible to scale *training*/*testing* jobs horizontally, i.e. to do distributed training. Our engineering team is working hard to implement this feature soon. If you have a particular need for this, please drop us a note on our [roadmap portal](https://hq.forepaas.io/#/features)!

* [Scale your jobs vertically](/en/product/ml/pipelines/execute/resources?id=scale-your-jobs-vertically)
* [Use GPU for your processing](/en/product/ml/pipelines/execute/resources?id=use-gpu-for-your-processing)


---
## Scale your jobs vertically

You can allocate **more computing power** to each kind of [machine learning jobs](en/product/ml/pipelines/execute/index.md?id=pipeline-jobs) independently in the Resources panel of the Preferences tab, by increasing the number of [ForePaaS Units](/en/product/billing/resources/index) (FPU) of each computing instance. The FPU is a unit of processing capability, representing access to a certain amount of CPU and memory, as such:

* **FPU-S**: general processing - corresponds to approximately *0.5 CPU* and *2 GB of RAM*, based on hardware availability. 
* **FPU-G**: GPU-accelerated - represents approximately *1 GPU* with at least *5 vCPU* and *40 GB of RAM*, based on hardware availability.



?> By default, newly created pipelines are allocated 4 FPU-S for each type of job.

To change the amount of FPU allocated to a pipeline job, go to its **Preferences** tab. 

![ml-fpu](picts/pipeline-preferences.png)

Use the corresponding slider to set the desired FPU size allocated for the execution. 

![ml-fpu](picts/pipeline-size.png)

---
## Use GPU for your processing

You can configure your pipeline to use graphics processing units (GPU) when they are executed in order to accelerate the machine learning and data processing scripts by a lot. To do this, change the allocated resource type to *FPU-G* in the pipeline's **preferences**.

![ml-fpu](picts/pipeline-gpu.png)

?> Note that jobs using FPU-G will usually have a longer build phase, up to a few minutes.

Currently, FPU-G are available for [training](/en/product/ml/pipelines/execute/index?id=training-jobs) and [testing](/en/product/ml/pipelines/execute/index?id=testing-jobs) jobs.


> FPU-G are not available on all cloud providers at the moment. If you are unable to find them in your Machine Learning Manager, please reach out to the support team to get more information on the roadmap.

{Learn more about FPU-G consumption}(#/en/product/billing/resources/index)



---
###  Need help? 🆘

> Feel free to reach out to us by sending us a request via *support* on the ForePaaS Platform and we make sure to help you out with the best solution 😊  

{You can even send your questions directly by clicking here 👨🏻‍💻}(mailto:support.forepaas.com)