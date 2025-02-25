# Configuration

The **Front API** works primarily with `modules` that can be interconnected.  

---
## Configuration example

The `forepaas.json` file at the root of your **Front API** contains the necessary configuration.

```json
//forepaas.json
{
  "id": "frontapi", // unique ID: used if you choose to publish  as a "template" in the store
  "type": "api", // forepaas.json is used for 'app' and 'api', here it is 'api'
  "language": "node", // Language used for the API
  "name": "FrontAPI",
  "version": "0.0.1",
  "modules": {...}, // Detailed below in the "Module configuration" section
  "dependencies": {...} // Detailed below in the "Configuring modules" section
}
```

The modules' configuration is done via two separate fields:
* the `modules` key: it contains the list of modules to be installed
* the `dependencies` key

---
## Module configuration

Here is an example of a configuration :
```json
  "modules": {
    "sdk": {
      "version": "1.2.1"
    },
    "cam": {
      "version": "1.1.0"
    },
    "cache-redis": {
      "version": "2.0.0"
    },
    "qb": {
      "version": "2.4.0",
      "dependencies": {
        "authentication": {
          "module": "cam"
        },
        "cache": {
          "module": "cache-redis"
        }
      }
    }
  }
```

For a better understanding, here is a short description of each module:

* `sdk`: the heart of Front API, it is essential, but replaceable if you want to modify the standard behavior of ForePaaS APIs
* `cam`: a connector to the Dataplant's [Identity Access Manager](/jp/technical/api-reference/iam/index). It allows you to manage access to your API.
* `cache-redis`: a cache connector to a *Redis* database
* `qb`: a connector to the [Query Builder](/jp/technical/api-reference/qb/index), to query and use your data in your applications


!> **⚠️ Without the `cam` module, your API does not have any access control!**

All modules act independently. However, `qb` module relies upon *cache* and *authentication*. In this sample, it is configured to use `cam` module to manage *authentication* and `cache-redis` for *cache*.


> This file is fully configurable via the ForePaaS platform, on the [Extension configuration of your API](/jp/product/api-manager/extensions-list).
The file `forepaas.json` is automatically modified each time you install or uninstall a module from the platform.