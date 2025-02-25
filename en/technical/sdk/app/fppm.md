# fppm - ForePaaS Package Manager

The `fppm` is a NodeJS tool to manage ForePaaS Package (`forepaas.json` file and `forepaas/`) for the **Front App** and **Front API**. 
It is needed to install, upgrade or remove ForePaaS Extensions.

---
## Using npx

It's possible to run `fppm` remotely using `npx`.

First make sure `npx`is insttalled, otherwise:
```sh
yarn global add npx
```

!> It is needed to have permissions to install global package

Then, it is possible to call `fppm` commands by calling:
```
npx git+https://gitlab.forepaas.com/open-sources/fppm.git --help
```

To make it easier, add a shortcut in the `scripts` section of a `package.json`:
```json
  "scripts": {
    "fppm": "npx git+https://gitlab.forepaas.com/open-sources/fppm.git install",
```
Then, it may be called as:
```
yarn fppm
```

!> By using `npx`, the `fppm` package is downloaded every time it is launched, making sure to use latest version.

---
## Setting it up locally

To install `fppm` as a global package, it is needed to have permissions to do so:
```
npm install -g git+https://gitlab.forepaas.com/open-sources/fppm.git
```
Then run:
```sh
fppm --help
```


---
## Commands

### list
List all installed packages with their versions.

### install
```
fppm install
Options:
-s, --save   Save the modifications in forepaas.json
-f, --force  Force reinstall, if the module is already here, it will be erased
-h, --help   output usage information
Install packages decribes in the forepaas.json
```
