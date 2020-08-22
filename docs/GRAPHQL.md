# Novo Projeto com Graphql

```sh

# depedencias necessarias
$ npm i -S graphql apollo-server

# outras ...
$ npm i -S apollo-server-express
$ npm i -S express express-graphql

# criacao da pasta principal
$ mkdir bin;touch bin/index.js

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
