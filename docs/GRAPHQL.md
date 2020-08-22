# Novo Projeto com Graphql

```sh

# depedencias necessarias
$ npm i -S graphql apollo-server graphql-tools

# outras ...
$ npm i -S apollo-server-express
$ npm i -S express express-graphql

# criacao da pasta principal
$ mkdir bin src src/{graphql,modules}

# criacao dos arquivos
$ touch bin/index.js src/graphql/index.js

```
Em Arquivo `bin/index.js`

```js

const {gql, ApolloServer } = require('apollo-server')

// graphql schema
const schema = gql``;

// propriedades resolvers
const resolvers = {};

// server
const server = new ApolloServer ({
  typeDefs: schema, resolvers });
server.listen();

```

Em Arquivo `src/graphql/index.js`

```js

const { join } = require('path');
const { loadFilesSync, mergeTypeDefs, mergeResolvers } = require('graphql-tools');

const allTypes = loadFilesSync(join(__dirname, 'modules', '**', '*.gql'));
const allResolvers = loadFilesSync(join(__dirname,'modules','**','resolvers.js'));

const schema = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

module.exports = { schema, resolvers };

```
