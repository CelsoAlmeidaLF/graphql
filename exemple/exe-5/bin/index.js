
const {gql, ApolloServer } = require('apollo-server')
const { schema, resolvers } = require('../src/graphql')

// server
const server = new ApolloServer ({
  typeDefs: schema, resolvers });
server.listen().then(({url}) => console.log(url));
