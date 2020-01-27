## shortcuts-js starter kit

A template to design your shortcut using awesome `shortcuts-js`!

1. Write your actions in `src/index.js`
2. Change the name from `package.json` (It'll be the name generated shortcuts) 


## Developer

```sh
$ yarn dev
```
And using safari to download the script file, it should be always the latest shortcuts after you modified the `src/index.js`.

## For Client

```sh
$ yarn build
```
It will generate the shortcut file like dev mode after remove & re-create whole target folder, it's supposed to be used in production enviroment if we generate other info in dev mode.
