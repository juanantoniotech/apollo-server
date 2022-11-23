const estudiantes = [
  {
    nombre: "Pablo",
    apellido: "Perez",
    apoderado: "Carlos Perez",
  },
  {
    nombre: "Juan",
    apellido: "Cahuana",
    apoderado: "Rolando Cahuana",
  },
];

// Resolvers
const resolvers = {
  Query: {
    obtenerEstudiantes: () => estudiantes,
    obtenerApoderados: () => estudiantes,
  },
};

module.exports = resolvers;
