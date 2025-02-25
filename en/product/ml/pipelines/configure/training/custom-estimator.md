# Custom estimators

If you cannot find what you want among the standard estimators, or if you already have a training script on hand, ForePaaS allows you to upload your own estimator to be fitted on your pipeline's data. This can be done either by opening the Training configuration page for the first time, or by [changing the algorithm](/en/product/ml/pipelines/configure/training/standard-estimator.md?id=change-your-pipeline39s-estimator) if there is already one.

![machinelearning](picts/custom-estimator.png)

It is necessary to choose a framework for your pipeline. ForePaaS currently supports the following frameworks, details of which can be found on their respective pages:

* [Scikit Learn](en/product/ml/pipelines/configure/training/custom-scikit-learn.md)
* [Keras](en/product/ml/pipelines/configure/training/custom-keras.md)
* [PyTorch](en/product/ml/pipelines/configure/training/custom-pytorch.md)

---
## Common features from SDK

Some features provided by the Machine Learning Manager have a common behavior for any custom estimator written in Python, and require you to **input additional elements of code in your training script**. The following configurations can be integrated:

* [Use a validation configuration from the Training step](/en/product/ml/pipelines/configure/training/custom-estimator.md?id=use-a-validation-configuration)
* [Use a validation score function from the Training step](/en/product/ml/pipelines/configure/training/custom-estimator.md?id=use-a-validation-score-function)
* [Use hyper-parameters specified in the Tuning step](/en/product/ml/pipelines/configure/training/custom-estimator.md?id=use-hyper-parameters)

### Use a validation configuration
You can connect the [validation settings](en/product/ml/pipelines/configure/training/validation) configured during the Training step.

![machinelearning](picts/custom-validation.png)

If using simple validation, you can get the share allocated to the validation set by including:

```py
from forepaas.core.settings import ML_CONFIG

# Get ratio of the % size of the validation set
ratio = ML_CONFIG["train"]["ratio"]
```

If using cross-validation, you can get the number of folds chosen by including:

```py
from forepaas.core.settings import ML_CONFIG

# Get cv as either the number of folds, or False if cross-validation is turned off.
cv = ML_CONFIG["train"]["execution_options"]["cross_validation"]
```

An example for Scikit Learn can be found [here](en/product/ml/pipelines/configure/training/custom-scikit-learn?id=sample-code).

### Use a validation score function
You can connect the [scoring functions](en/product/ml/pipelines/configure/training/validation) added during the Training step in order to use them for the validation score.

![machinelearning](picts/custom-scoring.png)

You can get the default ⭐ scoring function and turn it into an sklearn scorer by including:

```py
from forepaas.ml import get_train_scoring_function
from sklearn.metrics import make_scorer

scoring_function = get_train_scoring_function()
```
An example for Scikit Learn can be found [here](en/product/ml/pipelines/configure/training/custom-scikit-learn?id=sample-code).

### Use hyper-parameters
You can connect the [hyper-parameter list](en/product/ml/pipelines/configure/tuning/index) specified in the Tuning step.

![machinelearning](picts/custom-hp.png)

To get the dictionary of hyper-parameters and their lists of values, include:

```py
from forepaas.ml import get_hyper_parameters

hyper_parameters = get_hyper_parameters()
```
An example for Scikit Learn can be found [here](en/product/ml/pipelines/configure/training/custom-scikit-learn?id=sample-code).


{Import a custom Scikit Learn script}(#/en/product/ml/pipelines/configure/training/custom-scikit-learn.md)
{Import a custom Keras script}(#/en/product/ml/pipelines/configure/training/custom-keras.md)


---
##  Need help? 🆘

> You didn't find what you were looking for on this page? You can ask for help by sending a request directly from the platform, going to the *Support* page. You can also send us an email at support@forepaas.com.

{Send your questions to support 🤔}(https://support.forepaas.com/hc/en-us/requests)