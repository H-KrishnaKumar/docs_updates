# Structure of a ForePaaS API

> At the moment our SDK API is available in NodeJS only.

---
## Contents of the API

```
├── .gitignore
├── Dockerfile.dev
├── LICENSE.md
├── LICENSE.txt
├── app.js
├── dev.sh
├── forepaas
|   |-- cache-controller
|   |-- cache-redis
|   |-- cam
|   |-- logger-console
|   |-- qb
|   |-- reportings
|   |-- sdk
|   `-- webstorage
├── forepaas.json
├── package.json
├── run.sh
└── yarn.lock
```

## Git
* `.gitignore`: defines the Git files and folder that will not be *commited* (in case you use git).

---
## The core files of the API
```
├── app.js
├── forepaas.json
├── forepaas
├── package.json
└── yarn.lock
```
* `app.js`: central point of the API and will serve to launch all the rest. Here you can directly access the ExpressJS instance (via the app variable)
* `forepaas.json`: describes the list of extensions that make up your API
* `forepaas/`: contains the extensions installed in your API
* `package.json` : contains the NodeJS dependencies associated with your API
* `yarn.lock` : we use [yarn](https://yarnpkg.com/lang/jp/) as package manager, it generates a file `yarn.lock` to **lock dependencies associated with your API**.


---
## Launcher utilities

* Docker
  * `Dockerfile.dev`: a **docker** description of the context in which the API runs.
  * `dev.sh`: a script to launch the docker environment quickly.
* NodeJS
  * `run.sh` : a script to launch your API directly
  

---
## License
These two files mention the ForePaaS license associated with this SDK.
* `LICENSE.md`
* `LICENSE.txt`
