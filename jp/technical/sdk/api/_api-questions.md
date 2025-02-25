# Front API Questions and remarks

* /jp/technical/sdk/api/api-files.md
  * `.gitignore` : add more entries, see https://github.com/forepaas/getting-started/blob/release/init/.gitignore
* /jp/technical/sdk/api/api-launch.md
  * what is the difference between `dev.sh` and `run.sh` ?
  * make clear comments from beginning
  * maybe change names to make it clearer as `run-in-docker.sh`, `run-in-host.sh`
  * `fppm` 
    * what about `fppm login` vs `ACCESS_TOKEN_KING`
    * what about `fppm install`
    * documentation does not explain "fppm" ?
    * may we add support for "yarn fppm" as in Front App
* /jp/technical/sdk/api/configure-module.md
  * what about `dependencies` ?
* /jp/technical/sdk/api/create-module.md
  * routers : nothing special in forepaas.json ?
  * ./forepaas.json : hello-world : how do we know in which folder it is ?
  * decorators : is there a list ? what it the call mechanism ?
  * npmDpendencies : "Request" with a R uppercase ?
  * how do we know that 'autentication' decorator is waiting for a 'checkSession' function ?
  * how "forepaas.json" know where is 'hello-decorator' source files ?
* /jp/technical/sdk/api/custom-endpoint
  * Merge : is it the right way ? what else to tell about it ? same scale ? fill empty date ?
  * use of req.body and Chart sample are not consistent
* /jp/technical/sdk/api/qb-transformers
  * explain parameters of default functions ?
  * comments in ./forepaas/ code ?
  * change ./forepaas/ so we have the easy to change version (defaultTransformer, defaultFilter ?)
  * for `filter`: `reference|transformer:param1:param2:param3` ?
  * is it the same for `scale` and `data` ?
