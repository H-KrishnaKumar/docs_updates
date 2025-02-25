# Deploy your first API

An API is crucial as it is the interface between the external world (namely your applications) and the rest of your Project (i.e. your Data Manager and queries). You will have to call this API when building your application, in the next and final tutorial.

![Project home](picts/homepage-api.png)

---
## Create a new API

From your Project's home page, click on **+** inside the API module. 

You will be able to choose between **an existing API template** from the internal [*Store*](/en/product/dataplant/marketplace), or to **import your own code** by linking a Git repository.

Since you're just starting, we've made a simple NodeJS template just for you. Proceed by selecting the only template available: *API NodeJS*.

![API store](picts/api-store-new.png)

Choose a name for your API, and enable the option **auto build** & **auto deploy**. This will download the source code of your API, automatically build it and deploy it for you.

![API settings](picts/api-settings-new.png)

From there, give it a couple of seconds as the creation of the API may take a moment. Go grab a hot drink ☕ whilst the API finishes its build.

![API building home](picts/api_building1.png)

> The Platform uses a **[blue-green](https://en.wikipedia.org/wiki/Blue-green_deployment) deployment methodology** ensuring 100% availability of your data. You can therefore seamlessly create & deploy new versions of your API without risking any downtime!

When the deployment is complete, the **Open** button appears.

![API deployed](picts/api_deployed.png)

When you open your API, you will land on the screen below confirming that your API is alive & healthy. It's that easy! 🎉

{Learn more about your Project APIs}(#/en/technical/sdk/api/index.md)

![API open](picts/api_open.png)

The next and final step will consist of creating and deploying your first application on the Platform in under 5 minutes.

{Create your first app}(#/en/getting-started/app-init/app-manager.md)