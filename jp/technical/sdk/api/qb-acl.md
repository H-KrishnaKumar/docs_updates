# Customize Query Builder ACL rules in Front API

!> The extension `qb` must be installed.


Create a file: /src/qb/services/ACL.js from this template:

```js
module.exports = (req,query,dataset)=> { return Promise.resolve(query) }

```

For the moment no rules will be applied.

From this function you will be able to modify the query according to the user who makes it and prevent the query from being made based on user access rights.

Here is a complete example:
```js 
// This function is called each time you launch a query from the Front API,
// and allows you to intercept it. 
// thus you can easily forbid a query or modify it (in order to apply a filter) 

module.exports = (req,query,dataset)=> {

// req.authentication.session contains the object provided by IAM 
// or your custom authentication

// If you wish to deny certain requests for non-admins.
if(query.data.fields.quantity && !req.authentication.session.isAdmin) {
    let err = new Error('QuantityNotAuthorized')
    err.status = 401
    return Promise.reject(err)
}

// If you need to apply a filter for non-admin
if(!req.authentication.session.isAdmin) {
    query.filter = query.filter || {}
    query.filter.company = {
        in:["ForePaaS"]
    }
}

return Promise.resolve(query)
 ```