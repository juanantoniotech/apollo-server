const { ApolloServer, gql } = require("apollo-server");

// Schema
const typeDefs = gql`
  type Estudiante {
    nombre: String
    apellido: String
  }

  type Query {
    obtenerEstudiantes: Estudiante
  }
`;

const estudiantes = [
  {
    nombre: "Juan",
    apellido: "Perez",
  },
  {
    nombre: "Juan",
    apellido: "Cahuana",
  },
];

// Resolvers
const resolvers = {
  Query: {
    obtenerEstudiantes: () => estudiantes[0],
  },
};

// server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// run server
server.listen().then(() => {
  console.log("server is running on");
});
