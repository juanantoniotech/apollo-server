const { gql } = require("apollo-server");

// Schema
const typeDefs = gql`
  type Estudiante {
    nombre: String
    apellido: String
  }

  type Apoderado {
    apoderado: String
  }

  type Query {
    obtenerEstudiantes: [Estudiante]
    obtenerApoderados: [Apoderado]
  }
`;

module.exports = typeDefs;
