const Films = require("./films.json");
const { clientErrors } = require("../utils/errors");

module.exports = {
  list: async () => Films,
  filmById: async (id) => {
    const film = Films.find((film) => film.id === id);
    if (!film) throw new clientErrors("Film not found", 404);
    return film;
  },
  filmByTitle: async (title) => {
    const films = Films.filter((film) => film.title?.includes(title));
    if (!films.length) throw new clientErrors("Film not found", 404);
    return films;
  },
};
