# upson CLI

# Command Reference for upson
export env vars or create `.env` file in foder 
example:
```
DB_HOST=localhost
DB_NAME=oracle
DB_PORT=1521
DB_USER=oracle
DB_PASS=oracle
DB_CLIENT=oracle
#DB_SID=XE
#DB_FILE_PATH=
```
```
upson loaddata data.json
```

## Publishing to NPM

To package your CLI up for NPM, do this:

```shell
$ npm login
$ npm whoami
$ npm lint
$ npm test
(if typescript, run `npm run build` here)
$ npm publish
```

# License

MIT - see LICENSE

