const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
// const { graphql, buildSchema } = require('graphql')

const schema = (`
      type Query {
        olaMundo: String
      }
  `)

const resolvers = {
  Query: {
      olaMundo: () => 'Systekna'
  }
}

const server = new ApolloServer({
  typeDefs: schema, resolvers
})

const app = express()
server.applyMiddleware({ app })

app.listen(4000,() => {
  console.log(`server: http://localhost:4000${server.graphqlPath}`)
})
