const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./db/schema");
const resolvers = require("./db/resolvers");

// server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// run server
server.listen().then(() => {
  console.log("server is running on");
});
