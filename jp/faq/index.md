# Frequently Asked Questions

**1) Do you have any ForePaaS solution for on-premise environment?,e.g appliance solution with hardware, solution for Azure Stack environment**
Yes - we offer ForePaaS as an on-premise solution using VM Ware. The Entreprise version of ForePaaS uses its own orchestration engine for automated deployment. We can therefore use any on-premise environment compatible with VM Ware.

**2)  Is it possible to deploy ForePaaS to customer’s Azure tenant environment?**
Yes - We also offer to deploy ForePaaS within the customers' cloud subscription. All these options (on-prem & customer's subscription hosting) obviously come with an extra cost.

**3) Is it possible to use ForePaaS in Hybrid cloud environment?**
Yes - But this will be per DataPlant. One DataPlant cannot right be deployed on 2 different instances (i.e. the Data Manager on premise and the DPE in the cloud) however one organisation can have DataPlants hosted on different instances.

**4) Do you have any plan to provide ForePaaS solution in Azure regions except France?**
Yes - We can make ForePaaS available in any Azure cluster all over the world. France is simply our default deployment environment but adding another cluster would require only a few days work.

**5) Current release schedule about the following Deep Learning related framework / component on Azure platform: Tensorflow・Keras・GPU**
Currently ForePaaS supports: Tensorflow, Keras & SciKit, all running on CPU. There is no set date for GPU but if demand is increasing we will plan to prioritise GPU compatible ressources this year.

**6) Do you have any plan to support Deep Learning Framework “PyTorch”?**
Similar as above, "PyTorch" is a librairie we are considering to integrate but have not prioritise just yet. What would be your usage of this library? And, what is your priority for using it?

**7) What type of machine learning is possible in ForePaaS environment? (Supervised Learning, Unsupervised Learning, Reinforcement Learning & Transfer Learning)**
Right now all types are available (Supervised & Unsupervised) using the framework described above. Regarding Reinforcement Learning, what is your use case for this? Because it depends on your definition, right now ForePaaS can orchestrate retraining algorithms with new data.