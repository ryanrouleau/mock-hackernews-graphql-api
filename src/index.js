const { GraphQLServer } = require('graphql-yoga');

const { prisma } = require('../src.generated/prisma-client');
const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: request => ({
    ...request,
    prisma,
  }),
});

server.start(() => console.log('Server running on http://localhost:4000'));