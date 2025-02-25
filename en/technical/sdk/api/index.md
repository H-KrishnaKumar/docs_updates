# Front API SDK

In ForePaaS, the Front API is the **Project's gateway for remote requests**. It is built and deployed using [API Manager](/en/product/api-manager/index) and has two main purposes:
* Access from the [Front App](/en/technical/sdk/app/index) with all tight integration built-in
* Access from other remote systems that need to request your Project

In addition, vanilla Front APIs deployed by default have the following features:
* Enforce authentication and data ACL as declared in the [Identity Application Manager](/en/product/iam/index)
* Pass on requests using [Analytics Manager](/en/product/am/index) format
* Access to a `WebStorage` to be used by Front App
* adding [available extensions](/en/product/api-manager/extensions-list), export CSV/XLSX

---
## Customize your Project's API using the SDK
### When is customization needed?

The aforementioned features are sufficient for most use cases, but you can extend it much further. The Front API SDK is written in NodeJS. After an [API has been deployed](/en/product/api-manager/deploy), it is easy to download it and start hacking.

Typical cases:
* needs to provide an endpoint with a specific request and response format
* needs to implement *transformers* to dynamically change QB requests (adding fields, changing filters or scales on the fly)
* implement advanced permissions restrictions on data fields
* merge several QB requests to one result
* request external API on behalf of Front App 
* ... and whatever you may do in NodeJS!

!> Customizing a Front API requires some knowledge of JavaScript, NodeJS and Web Service development, and should be done by advanced users.

### Requirements

* [NodeJS](https://nodejs.org/en/): Front API is implemented in NodeJS
* [Docker](https://www.docker.com/): Front API may be started with Docker
* [Git](https://git-scm.com/): we strongly advise to version your code with Git and use it to deploy on ForePaaS


### What can you customize?
Check out the following articles to discover how to customize an API using the SDK.

- [Discover the structure of an API](/en/technical/sdk/api/api-files)
- [Launch in a local environment](/en/technical/sdk/api/api-launch)
- [Manage modules](/en/technical/sdk/api/configure-module)
- [Handle queries](/en/technical/sdk/api/queries)
 - [Add query transformers](/en/technical/sdk/api/qb-transformers)
 - [Add query endpoints](/en/technical/sdk/api/qb-endpoint)
 - [Add query data ACL](/en/technical/sdk/api/qb-acl)
- [Create custom API endpoints](/en/technical/sdk/api/custom-endpoints)
- [Expose a bucket file](en/technical/sdk/api/download-file-datastore.md)

---
## Need help? 🆘

> Feel free to reach out to us by sending us a request via *Support* on the ForePaaS Platform and we'll make sure to help you out with the best solution 😊  

{You can even send your questions directly by clicking here 👨🏻‍💻}(mailto:support.forepaas.com)