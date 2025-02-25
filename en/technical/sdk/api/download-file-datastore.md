# Expose a file from your buckets

A custom endpoint can be added to your API to serve a file from a [Data Manager bucket](/en/product/data-manager/buckets/index) (object store).

- [1) Get credentials](/en/technical/sdk/api/download-file-datastore?id=get-credentials)
- [2) Create a custom module to expose the file](en/technical/sdk/api/download-file-datastore?id=create-a-custom-module-to-expose-the-file)
- [3) Launch the API](/en/technical/sdk/api/download-file-datastore?id=launch-the-api)

---
## Get credentials

The person/service authenticating to access the file through this new API endpoint must have at least **read access** on the buckets in the Data Manager.

Create an [Identity Access Manager user](/en/product/iam/users/users) (or service account) with a role containing the permission *Datastore bucket read*. Then [generate API and secret key for this user](/en/product/iam/users/api-secret-key): those keys will be used when configuring the API endpoint.

---
## Create a custom module to expose the file
In your api, you can add / edit this code

```json
// forepaas.json
// In modules key, add the configuration of your new module
  "s3-sample": {
    "version": "local",
    "dependencies": {
      "authentication": {
        "module": "cam"
      }
    }
  },
```

In the folder forepaas, create a subfolder named "s3-sample"
Inside, you will have to create 2 main files


```json
// forepaas/s3-sample/forepaas.json
{
  "id": "s3-sample",
  "type": "package",
  "name": "S3 Saple",
  "version": "1.0.0",
  "npmDependencies": {
    "aws-sdk": "2.966.0"
  }
}
```


```js
// forepaas/s3-sample/factory.js
const express = require('express')
const router = express.Router()
const AWS = require('aws-sdk')
const util = require('util')


// Modify those values for your environment
let accessKey = 'YOUR_ACCESS_KEY'
let secretKey = 'YOUR_SECRET_KEY'
let endpoint = 'https://YOUR_DATAPLANT_SUBDOMAIN.forepaas.io'
let bucket = 'dataplant-YOUR_DPID-YOUR_BUCKET'
let region = 'forepaas'


// If no authentication is bind, it will use that default function
let defaultDependencies = {
  authentication: {
    checkSession:(req,cb) => cb()
  }
}
  
let dependencies = {}
let factory = new AbstractFactory(dependencies)

let createSuper = factory.create
factory.create = function(moduleName) {
  createSuper.call(moduleName)
  this.moduleName = 's3-sample'
  factory.setDependencies(defaultDependencies)
  let dependencies = this.getDependencies()

  // Use authentication if binded in forepaas.json
  router.use(async (req,res,next)=>{
    try {
      req.session = await util.promisify(dependencies.authentication.checkSession)(req)
      next()
    } catch (err) {
      next(err)
    }
  })

  // Set our custom endpoint
  // Will be available on GET /s3-sample/custom-endpoint
  router.get('/custom-endpoint',async (req,res,next)=>{
    try {
      // Use s3 connector, to get a file in datstore
      const dataStoreClient = new AWS.S3({
        accessKeyId: accessKey,
        secretAccessKey: secretKey,
        endpoint: `${endpoint}/datastore`,
        region: region,
        signatureVersion: 'v4',
        s3ForcePathStyle: true
      })

      dataStoreClient.getObject({
        Bucket: bucket,
        Key: 'my-file.csv'
      })
      .createReadStream()
      .on('error', (err) => {
        next(err)
      })
      .pipe(res)
    } catch (err) {
      next(err)
    }
  })

  // Initialise the router for enable endpoint
  this.initRouter(router)
  return this
}

module.exports = factory
```

---
## Launch the API

You can now run the API, locally or on ForePaaS.

Get your endpoint as such:

```
GET API_URL/s3-sample/custom-endpoint
```

If you have enabled authentication (from the main *forepaas.json* file), you will have to add a queryString parameter with a [valid token from the Identity Access Manager](/en/product/iam/users/api-secret-key?id=generate-an-authentication-token)

```
GET API_URL/s3-sample/custom-endpoint?token=1234
```

---
## Need help? 🆘

> Feel free to reach out to us by sending us a request via *Support* on the ForePaaS Platform (or by [clicking here](mailto:support.forepaas.com)) and we'll make sure to help you out with the best solution 😊 