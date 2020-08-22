
const {gql, ApolloServer } = require('apollo-server')


// graphql schema
const schema = gql`  `;

// propriedades resolvers
const resolvers = {  };

// server
const server = new ApolloServer ({
  typeDefs: schema, resolvers });
server.listen();
