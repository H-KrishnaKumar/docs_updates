# Build and run the Front API

---
## Configuration
Before running the `dev.sh` or `run.sh` script (in a Unix-like shell environment), you have to edit some environment variables:

| Variable | Description |
| :------ | :---------- |
| **QB_URI** | URL of your Query Builder. It is available at this address   `https://my-dataplant.forepaas.io/qb?token=ACCESS_TOKEN_KING` |
| **ACCESS_TOKEN_KING** | A token (valid for 2 hours) to access ForePaaS platform. |
| **CAM_URI** | URL of your Identity Access Manager `https://my-dataplant.forepaas.com/cam` |

---
## Generate the access token
For the moment, there is no way to generate a token via the ForePaaS interface. To do it:
* Open a console on https://hq.forepaas.io/ (while logged into your user account)  
and execute
```js
JSON.parse(localStorage.getItem('fp-king-session')).accessToken
```
* You will get your current token

!> This token is only valid for 2 hours after this generation and is invalidated after.

---
## Launch the API

You can either launch [with Docker](/jp/technical/sdk/api/api-launch.md?id=launch-with-docker) or with [NodeJS](/jp/technical/sdk/api/api-launch.md?id=launch-with-nodejs).

### Launch with Docker

`dev.sh`: a script to launch the docker environment defined in `Dockerfile.dev` quickly
* launches a **Redis** server in order to use the cache modules
* builds the context present in the **Dockerfile.dev**
* launches the environment


Once all configuration is done, all you have to do is enter:
```bash
$ sh dev.sh  # launch the docker
$ yarn       # install / update nodejs dependencies
$ yarn start # launch the API
```

### Launch with NodeJS
`run.sh` : a script to launch your api quickly.
  
Once all configuration is done, all you have to do is enter:
```sh
$ yarn       # To install / update nodejs dependencies
$ yarn start # To launch the API
```


---
## Access the API

Once the API starts, it is accessible on your 1337 port: 
```http://localhost:1337```

> The `yarn watch` command will restart the API with each source file modification.
