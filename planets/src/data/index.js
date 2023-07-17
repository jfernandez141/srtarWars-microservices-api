const Planets = require("./planets.json");
const { clientErrors } = require("../utils/errors");

module.exports = {
  list: async () => Planets,
  planetById: async (id) => {
    const planet = Planets.find((planet) => planet.id === id);
    if (!planet) throw new clientErrors("Planet not found", 404);
    return planet;
  },
  planetByName: async (name) => {
    const planet = Planets.filter((planet) => planet.name?.includes(name));
    if (!planet.length) throw new clientErrors("Planet not found", 404);
    return planet;
  },
};
