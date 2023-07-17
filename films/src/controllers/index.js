const { catchedAsync } = require("../utils");

module.exports = {
  getFilms: catchedAsync(require("./getFilms")),
  filmById: catchedAsync(require("./getFilmById")),
};
