# Create a module in the Front API

A module defines itself as playing a role: 
* `router`: provides the *routes*, exposing features to the outside.  
(i.e. the `qb` module provides the route `/qb/query`)
* `decorator`: allows to decorate other modules.  
(i.e. `cam` module *decorates** other moduels to secure their routes).

The same module may serve both roles, as a `decorator` and provides `routes`.

---
## A simple `router` module

In this example, we want to add a new route `/hello/world` to display a simple text.


A module needs at least 2 files:
* `forepaas.json`: a description of the module
* `factory.js`: to connect the module with the Front API SDK


**./forepaas/hello/forepaas.json**
```json
{
  "id": "hello-world", // module ID, it must be unique
  "name": "Hello World", // Name of this module
  "version": "1.0.0", // Version of this module
  "npmDependencies": {// Define NodeJS libraries required for your module
    "express": "^ 4.14.0"
  }
}
```

**./forepaas/hello/factory.js**
```js
var express = require('express');

// The abstract factory provides the methods
// necessary for the proper functioning of your module within the API
var factory = new AbstractFactory({});

// The "create" function will be called on Front API launch.
// It allows to do any needed setup
factory.create = function (moduleName) {
  // 1. this.moduleName will be used as a base for all routes you expose
  this.moduleName = 'hello-world'

  // 2. "setDependencies" allows you to define hooks for decorators
  factory.setDependencies ({
    // Here we define an interface for the authentication module,
    // thereby defining a function that will replace this module if it is not present
    authentication: {
      checkSession: function (req, cb) {
        if (cb) cb ()
      }
    }
  });

  // 3. Front API uses NodeJS Express routers to provide routes.
  // You can create your own.
  // For more information on the possibilities: http://expressjs.com/jp/guide/routing.html
  var router = express.Router ();
  router.get ('/hello', function (req, res, next) {
    // We call here the authentication function before answering
    factory.getDependencies().authentication.checkSession(req, function(err){
      if (err) {
        // if authentication does not work, we return the error
        return next(err);
      }
      // else we can answer the expected answer
      res.send('Hello world');
    })
  });

  // 4. And we initialize it in the API
  this.initRouter(router);
  return this;
};

module.exports = factory
```

**./forepaas.json** (at the root level)
Finally we must activate the module in the `forepaas.json` at the root of the Front API.
This example adds `authentication` as a dependency.
```json
{
  "id": "frontapi",
  "type": "api",
  "language": "node",
  "name": "FrontAPI",
  "version": "0.0.1",
  "modules": {
    "sdk": {
      "version": "1.2.1"
    },
    "cam": {
      "version": "1.1.0"
    },
    "hello-world": {
      "version": "1.0.0",
      "dependencies": {
        "authentication": {
          "module": "cam"
        }
      }
    }
  }
}
```

Changing those 3 files, it has created a GET route `http://127.0.0.1:1337/hello-world/hello` that returns:
```
Hello World
```

Or with `authentication` enabled:

```json
{
  status: 401,
  message: "Unauthorized"
}
```

> To pass the `authentication`, a valid `token` from the *Identity Access Manager* must be added in the `Query String`

---
## A simple decorator module

This exemple shows how to create a `decorator` for `authentication`, to replace the `cam` module.

**./forepaas/hello-decorator/forepaas.json**
```json
{
    "id": "hello-decorator",
    "type": "package",
    "name": "Hello Decorator",
    "version": "1.0.0",
    "decorator": "authentication",
    "npmDependencies": {
      "Request": "*"
    }
}
```
**./forepaas/hello-decorator/factory.js**
```js
var factory = new AbstractFactory({});
// The decorator method is called when binding dependencies,
// when launching the API after the "create" method has been called
factory.decorator = function(dependencies) {
  // Here we overwrite the default checkSession function
  dependencies.checkSession = function(req, cb) {
    // For this example, the queryString must have token = MY_HARDCODED_TOKEN
    // Otherwise the following error will be returned: Invalid Authentication
    if (req.query.token !== 'MY_HARDCODED_TOKEN')
      return cb(new Error("Invalid Authentication"));
    return cb();
  };
  return dependencies;
};
module.exports = factory;
```

**./forepaas.json**
Taking previous example and replacing `cam` by this new decorator.
```json
{
  "id": "frontapi",
  "type": "api",
  "language": "node",
  "name": "FrontAPI",
  "version": "0.0.1",
  "modules": {
    "sdk": {
      "version": "1.2.1"
    },
    "cam": {
      "version": "1.1.0"
    },
    "hello-decorator": {
      "version": "1.0.0"
    },
    "hello-world": {
      "version": "1.0.0",
      "dependencies": {
        "authentication": {
          "module": "hello-decorator"
        }
      }
    }
  }
}
```

Now, the request `http://127.0.0.1:1337/hello-world/hello` sends :
```json
{
  status: 500,
  message: "Invalid Authentication"
}
```

With the token on `http://127.0.0.1:1337/hello-world/hello?token=MY_HARDCODED_TOKEN` : 
```
Hello world
```

 