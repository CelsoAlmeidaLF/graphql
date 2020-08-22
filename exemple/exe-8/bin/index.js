
const {gql, ApolloServer } = require('apollo-server')
const { schema, resolvers } = require('../src/graphql')

// server
const server = new ApolloServer ({
  typeDefs: schema, resolvers,
  formatError: (err) => {
    if(err.message.startsWith("Usuario existente:")) { return new Error(err.message); }
  }
});

server.listen().then(({url}) => console.log(url));
