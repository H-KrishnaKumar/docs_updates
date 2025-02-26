# Training procedure

The training procedure is at the core of every machine learning model. It defines the mathematical algorithm (i.e. estimator) at its basis as well as the set of rules used to **fit and evaluate it**.

![machinelearning](picts/pipeline-training.png)

Training is usually the second step in configuring a pipeline. Coupled with the third step, [hyper-parameters tuning](/en/product/ml/pipelines/configure/tuning/index), your pipeline will be able to produce trained models for you to compare and deploy.

Training jobs [can be accelerated by a lot using GPUs](/en/product/ml/pipelines/execute/resources?id=use-gpu-for-your-processing).

---
## Train with a standard estimator

Give your pipeline configuration a quick start by using one of the standard estimators from a curated list from the most popular ML libraries!

{Use a standard estimator}(#/en/product/ml/pipelines/configure/training/standard-estimator.md)


---
## Train with a custom estimator

Can't find what you want on the ForePaaS Store? Carry out your training procedure exactly the way you want it by importing your own custom estimator.

{Use a custom estimator}(#/en/product/ml/pipelines/configure/training/custom-estimator.md)


---
## Scoring and validation

Scoring and validation are necessary aspects of the training step in order to evaluate models in an unbiased way. Learn how to configure it right.

{Configure scoring and validation}(#/en/product/ml/pipelines/configure/training/validation.md)


---
###  Need help? 🆘

> If you are logging-in with an OVHcloud account, you can create a ticket to raise an incident or if you need support at the [OVHcloud Help Centre](https://help.ovhcloud.com/csm/fr-home?id=csm_index). Additionally, you can ask for support by reaching out to us on the Data Platform Channel within the [Discord Server](https://discord.com/channels/850031577277792286/1163465539981672559). There is a step-by-step guide in the [support](/en/support/index.md).