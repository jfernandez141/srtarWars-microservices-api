const { catchedAsync } = require("../utils");

module.exports = {
  getPlanets: catchedAsync(require("./getPlanets")),
  planetById: catchedAsync(require("./getPlanetById")),
};
