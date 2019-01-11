const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const { importSchema } = require('graphql-import')

// Construct a schema, using GraphQL schema language
const typeDefs = importSchema('schema.graphql')

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    count: () => 0,
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const port = 4000;

app.listen({ port }, () =>
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`),
);