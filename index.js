const { ApolloServer, gql } = require("apollo-server");

// server
const server = new ApolloServer({});

// run server
server.listen().then(() => {
  console.log("server is running on");
});
