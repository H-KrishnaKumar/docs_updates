# Front API SDK

In ForePaaS, the Front API is the Dataplant's gateway for remote requests. It is built and deployed using [API Manager](/jp/product/api-manager/index) and has two main purposes:
* Access from the [Front App](/jp/technical/sdk/app/index) with all tight integration built-in
* Access from other remote systems that need to request your Dataplant

The **vanilla Front APIs** that you can deploy by default have the following features:
* Enforce authentication and ACL as declared in the [Identity Application Manager](/jp/product/iam/index)
* Pass on requests using Query Builder format
* Access to a `WebStorage` to be used by Front App

Adding [available extensions](/jp/product/api-manager/extensions-list), you can also:
* export CSV
* export XLSX


### When is customization needed?

The aforementioned features are sufficient for most use cases, but you can extend it much further.

Typical cases:
* needs to provide an endpoint with a specific request and response format
* needs to implement *transformers* to dynamically change QB requests (adding fields, changing filters or scales on the fly)
* implement advanced permissions restrictions on data fields
* merge several QB requests to one result
* request external API on behalf of Front App 
* ... and whatever you may do in NodeJS!

!> Customizing a Front API requires some knowledge of JavaScript, NodeJS and Web Service development, and should be done by advanced users.


---
## Table of contents

The Front API SDK is written in NodeJS.  
After an [API has been deployed](/jp/product/api-manager/deploy), it is easy to download it and start hacking.

#### Requirements

* [NodeJS](https://nodejs.org/jp/) : Front API is implemented in NodeJS
* [Docker](https://www.docker.com/) : Front API may be started with Docker
* [Git](https://git-scm.com/) : we stongly advise to manage your code with Git and use it to deploy on ForePaaS


Now let's have a look at:
* [Front API files](/jp/technical/sdk/api/api-files)
* [Build and run](/jp/technical/sdk/api/api-launch)
* [About Modules](/jp/technical/sdk/api/configure-module)
* [Query default endpoints](/jp/technical/sdk/api/qb-endpoints)
* [Transformers](/jp/technical/sdk/api/qb-transformers)
* [Query cutom endpoints](/jp/technical/sdk/api/qb-endpoint)
* [Query ACL](/jp/technical/sdk/api/qb-acl)
* [Custom endpoints](/jp/technical/sdk/api/custom-endpoints)

### Other uses

* [As a REST WebService](/jp/technical/sdk/api/webservice-rest)

